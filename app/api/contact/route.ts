import { createHash, randomUUID } from "node:crypto";
import nodemailer from "nodemailer";
import { inquiryText, validateInquiry } from "@/lib/contact-inquiry";
import { contact } from "@/components/siteContent";

export const runtime = "nodejs";
export const maxDuration = 30;

const maxBodyBytes = 20_000;
const windowMs = 10 * 60 * 1000;
// Best-effort per-instance throttle; production also needs an edge rate-limit rule.
const attempts = new Map<string, { count: number; expires: number }>();

function rateLimited(request: Request): boolean {
  const now = Date.now();
  for (const [key, entry] of attempts) if (entry.expires <= now) attempts.delete(key);
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const key = createHash("sha256").update(ip).digest("hex");
  const entry = attempts.get(key);
  if (entry) return ++entry.count > 5;
  if (attempts.size >= 1000) return true;
  attempts.set(key, { count: 1, expires: now + windowMs });
  return false;
}

export async function POST(request: Request) {
  const requestId = randomUUID();
  const headers = { "Cache-Control": "no-store", "X-Request-ID": requestId };
  const reply = (error: string, status: number) => Response.json({ error }, { status, headers });
  if (request.headers.get("origin") !== new URL(request.url).origin) return reply("Please submit from the Gamoventure website.", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply("Invalid submission format.", 415);
  if (rateLimited(request)) return reply("Too many attempts. Please wait ten minutes or email us directly.", 429);
  const reader = request.body?.getReader();
  if (!reader) return reply("Please complete the form.", 400);
  let size = 0;
  let body = "";
  const decoder = new TextDecoder();
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return reply("Your inquiry is too long. Please shorten it.", 413);
      }
      body += decoder.decode(chunk.value, { stream: true });
    }
    body += decoder.decode();
  } catch {
    return reply("We could not read your submission. Please try again.", 400);
  }
  let data: unknown;
  try { data = JSON.parse(body); } catch { return reply("Invalid submission format.", 400); }
  if (data && typeof data === "object" && "website" in data && data.website) return reply("Unable to submit this inquiry. Please email us directly.", 400);
  const inquiry = validateInquiry(data);
  if (!inquiry) return reply("Please check your details and confirm your consent.", 400);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  if (process.env.CONTACT_FORM_ENABLED !== "true" || !user || !password) {
    return reply(`Online submission is not available yet. Please email ${contact.email}.`, 503);
  }
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.hostinger.com", port: 465, secure: true,
      auth: { user, pass: password },
      connectionTimeout: 8000, greetingTimeout: 8000, socketTimeout: 15000,
      disableFileAccess: true, disableUrlAccess: true,
    });
    const result = await transport.sendMail({
      from: { name: "Gamoventure website", address: user },
      to: contact.email,
      replyTo: { name: inquiry.name, address: inquiry.email },
      subject: `Project inquiry from ${inquiry.name}`,
      text: inquiryText(inquiry),
    });
    if (!result.accepted.length) throw Object.assign(new Error("Recipient not accepted"), { code: "ERECIPIENT" });
    return Response.json({ success: true }, { headers });
  } catch (error) {
    const code = error && typeof error === "object" && "code" in error ? error.code : undefined;
    const category = code === "EAUTH" ? "authentication"
      : code === "ETIMEDOUT" ? "timeout"
      : code === "ECONNECTION" || code === "ESOCKET" || code === "EDNS" ? "connection"
      : code === "ERECIPIENT" || code === "EENVELOPE" ? "recipient"
      : "transport";
    console.error("Contact delivery failed", { requestId, category });
    return reply(`We could not confirm delivery. Please email ${contact.email} before submitting again.`, 502);
  }
}
