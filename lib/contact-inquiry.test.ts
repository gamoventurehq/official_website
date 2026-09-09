import assert from "node:assert/strict";
import { test } from "node:test";
import { inquiryText, validateInquiry } from "./contact-inquiry";

const valid = { name: "Visitor", business: "Example", email: "visitor@example.com", need: "A POS for our outlet.", consent: true, contactMethod: "Email" };

test("normalizes an inquiry and preserves multiline project details", () => {
  const result = validateInquiry({ ...valid, name: " Visitor ", need: "First line\nSecond line" });
  assert.ok(result);
  assert.equal(result.name, "Visitor");
  assert.match(inquiryText(result), /First line\nSecond line/);
});

test("rejects missing consent, invalid addresses, header injection and oversized values", () => {
  for (const change of [{ consent: false }, { email: "invalid" }, { email: "a@example.com,b@example.com" }, { name: "Visitor\r\nBcc: other@example.com" }, { need: "a".repeat(5001) }, { name: 123 }, { business: " " }, { contactMethod: "Unsupported" }]) {
    assert.equal(validateInquiry({ ...valid, ...change }), null);
  }
  for (const value of [null, [], "bad", {}]) assert.equal(validateInquiry(value), null);
});

test("requires a number for telephone and WhatsApp, and permits unspecified budget", () => {
  assert.ok(validateInquiry({ ...valid, budget: "" }));
  for (const contactMethod of ["Telephone", "WhatsApp"]) {
    for (const phone of [undefined, "", "   "]) {
      assert.equal(validateInquiry({ ...valid, contactMethod, phone }), null);
    }
    assert.ok(validateInquiry({ ...valid, contactMethod, phone: "+91 98765 43210", budget: "" }));
  }
});
