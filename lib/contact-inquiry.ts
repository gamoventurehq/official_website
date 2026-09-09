const limits = { name: 120, business: 200, email: 254, phone: 60, timeline: 200, budget: 80, contactMethod: 30, need: 5000 } as const;
export type Inquiry = Record<keyof typeof limits, string>;

export function validateInquiry(value: unknown): Inquiry | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const data = value as Record<string, unknown>;
  if (data.consent !== true) return null;
  const inquiry = {} as Inquiry;
  for (const field of Object.keys(limits) as (keyof Inquiry)[]) {
    const raw = data[field] ?? "";
    if (typeof raw !== "string" || raw.length > limits[field]) return null;
    if (field !== "need" && /[\r\n\x00]/.test(raw)) return null;
    inquiry[field] = raw.trim();
  }
  if (!inquiry.name || !inquiry.business || !inquiry.need) return null;
  if (!/^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/.test(inquiry.email)) return null;
  if (!["Email", "WhatsApp", "Telephone"].includes(inquiry.contactMethod)) return null;
  if (inquiry.contactMethod !== "Email" && !inquiry.phone) return null;
  if (!["", "Still defining it", "Prefer to discuss", "Budget already allocated"].includes(inquiry.budget)) return null;
  return inquiry;
}

export function inquiryText(inquiry: Inquiry): string {
  return [
    `Name: ${inquiry.name}`, `Business: ${inquiry.business}`, `Email: ${inquiry.email}`,
    `Phone / WhatsApp: ${inquiry.phone || "Not provided"}`, `Timeline: ${inquiry.timeline || "Not provided"}`,
    `Budget readiness: ${inquiry.budget || "Not provided"}`, `Preferred contact: ${inquiry.contactMethod}`,
    "", "What needs to work better:", inquiry.need,
  ].join("\n");
}
