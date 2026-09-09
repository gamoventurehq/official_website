import assert from "node:assert/strict";
import { test } from "node:test";
import { contactResponseMessage, deliveryUnconfirmedMessage } from "./contact-response";

test("requires explicit successful acceptance", async () => {
  assert.equal(await contactResponseMessage(Response.json({ success: true })), null);
  for (const body of [null, {}, { success: false }, { success: "true" }]) {
    assert.equal(await contactResponseMessage(Response.json(body)), deliveryUnconfirmedMessage);
  }
  assert.equal(await contactResponseMessage(Response.json({ success: true }, { status: 502 })), deliveryUnconfirmedMessage);
});

test("never exposes non-JSON responses or arbitrary provider errors", async () => {
  for (const status of [200, 400, 502]) {
    assert.equal(await contactResponseMessage(new Response("<html>Private proxy details</html>", { status })), deliveryUnconfirmedMessage);
  }
  assert.equal(await contactResponseMessage(Response.json({ error: "Private provider details" }, { status: 502 })), deliveryUnconfirmedMessage);
  assert.equal(await contactResponseMessage(Response.json({ error: "Private provider details" }, { status: 429 })), "Too many attempts. Please wait ten minutes or email us directly.");
});
