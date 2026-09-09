import assert from "node:assert/strict";
import { test, mock } from "node:test";
import nodemailer, { type SendMailOptions } from "nodemailer";
import { POST } from "./route";

const valid = { name: "Visitor", business: "Example", email: "visitor@example.com", need: "A POS for our outlet.", consent: true, contactMethod: "Email" };
let requestNumber = 0;
function request(body: unknown = valid, headers: Record<string, string> = {}) {
  return new Request("https://www.gamoventure.in/api/contact", {
    method: "POST", headers: { origin: "https://www.gamoventure.in", "content-type": "application/json", "x-forwarded-for": `192.0.2.${++requestNumber}`, ...headers }, body: JSON.stringify(body),
  });
}

test("rejects foreign origins, malformed input, spam and oversized bodies", async () => {
  assert.equal((await POST(request(valid, { origin: "https://elsewhere.example" }))).status, 403);
  assert.equal((await POST(request(valid, { "content-type": "text/plain" }))).status, 415);
  assert.equal((await POST(request({ ...valid, consent: false }))).status, 400);
  assert.equal((await POST(request({ ...valid, contactMethod: "WhatsApp", phone: " " }))).status, 400);
  assert.equal((await POST(request({ ...valid, contactMethod: "Telephone" }))).status, 400);
  assert.equal((await POST(request({ ...valid, website: "spam" }))).status, 400);
  assert.equal((await POST(request({ ...valid, need: "x".repeat(21000) }))).status, 413);
});

test("limits repeated requests from the same source", async () => {
  for (let i = 0; i < 5; i++) await POST(request({}, { "x-forwarded-for": "198.51.100.1" }));
  assert.equal((await POST(request({}, { "x-forwarded-for": "198.51.100.1" }))).status, 429);
});

test("reports unavailable configuration, successful SMTP acceptance, and transport failure", async () => {
  const previous = { enabled: process.env.CONTACT_FORM_ENABLED, user: process.env.SMTP_USER, password: process.env.SMTP_PASSWORD };
  const messages: SendMailOptions[] = [];
  let failureCode: string | null = null;
  let accepted = true;
  const diagnostics = mock.method(console, "error", () => {});
  const transport = mock.method(nodemailer, "createTransport", () => ({
    sendMail: async (mail: SendMailOptions) => {
      messages.push(mail);
      if (failureCode) throw Object.assign(new Error("Private transport details must not reach the client"), { code: failureCode, response: "secret provider response" });
      return { accepted: accepted ? ["hello@gamoventure.in"] : [] };
    },
  }));
  try {
    process.env.CONTACT_FORM_ENABLED = "false";
    assert.equal((await POST(request())).status, 503);
    assert.equal(messages.length, 0);
    process.env.CONTACT_FORM_ENABLED = "true";
    process.env.SMTP_USER = "sender@example.com";
    process.env.SMTP_PASSWORD = "test-only-placeholder";
    const sent = await POST(request());
    assert.equal(sent.status, 200);
    assert.deepEqual(await sent.json(), { success: true });
    assert.equal(messages[0].to, "hello@gamoventure.in");
    assert.deepEqual(messages[0].replyTo, { name: "Visitor", address: "visitor@example.com" });
    assert.deepEqual(messages[0].from, { name: "Gamoventure website", address: "sender@example.com" });
    for (const [code, category] of [["EAUTH", "authentication"], ["ETIMEDOUT", "timeout"], ["ESOCKET", "connection"], ["EENVELOPE", "recipient"], ["private unknown code", "transport"]]) {
      failureCode = code;
      const failed = await POST(request());
      assert.equal(failed.status, 502);
      assert.doesNotMatch(await failed.text(), /Private|secret|private unknown/);
      const requestId = failed.headers.get("X-Request-ID");
      assert.match(requestId!, /^[0-9a-f-]{36}$/);
      assert.deepEqual(diagnostics.mock.calls.at(-1)?.arguments, ["Contact delivery failed", { requestId, category }]);
    }
    failureCode = null;
    accepted = false;
    const rejected = await POST(request());
    assert.equal(rejected.status, 502);
    assert.deepEqual(diagnostics.mock.calls.at(-1)?.arguments, ["Contact delivery failed", { requestId: rejected.headers.get("X-Request-ID"), category: "recipient" }]);
  } finally {
    transport.mock.restore();
    diagnostics.mock.restore();
    for (const [key, value] of Object.entries({ CONTACT_FORM_ENABLED: previous.enabled, SMTP_USER: previous.user, SMTP_PASSWORD: previous.password })) {
      if (value === undefined) delete process.env[key]; else process.env[key] = value;
    }
  }
});
