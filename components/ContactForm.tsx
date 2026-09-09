"use client";

import { useRef, useState, type FormEvent } from "react";
import { contact } from "./siteContent";
import { contactResponseMessage, deliveryUnconfirmedMessage } from "@/lib/contact-response";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("Email");
  const sending = useRef(false);
  const submitInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    const element = event.currentTarget;
    const form = new FormData(element);
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(form), consent: form.get("consent") === "on" }),
        signal: AbortSignal.timeout(25000),
      });
      const errorMessage = await contactResponseMessage(response);
      if (errorMessage) {
        setStatus("error");
        setMessage(errorMessage);
        return;
      }
      element.reset();
      setContactMethod("Email");
      setStatus("sent");
      setMessage("Your inquiry has been sent. We aim to reply within two business days.");
    } catch {
      setStatus("error");
      setMessage(deliveryUnconfirmedMessage);
    } finally {
      sending.current = false;
    }
  };

  return (
    <form className="contact-form" method="post" action="/api/contact" onSubmit={submitInquiry} aria-busy={status === "sending"}>
      <div className="form-trap" aria-hidden="true"><label htmlFor="website">Leave this blank</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" required maxLength={120} autoComplete="name" /></div>
      <div className="form-field"><label htmlFor="business">Business or organisation</label><input id="business" name="business" required maxLength={200} autoComplete="organization" /></div>
      <div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required maxLength={254} autoComplete="email" /></div>
      <div className="form-field"><label htmlFor="phone">Phone or WhatsApp <span>{contactMethod === "Email" ? "Optional" : "Required for your preferred contact method"}</span></label><input id="phone" name="phone" type="tel" required={contactMethod !== "Email"} pattern={contactMethod !== "Email" ? ".*\\S.*" : undefined} maxLength={60} autoComplete="tel" /></div>
      <div className="form-field form-field-wide"><label htmlFor="need">What are you trying to improve, launch, or solve?</label><textarea id="need" name="need" rows={6} required maxLength={5000} /></div>
      <div className="form-field"><label htmlFor="timeline">Timeline <span>Optional</span></label><input id="timeline" name="timeline" maxLength={200} placeholder="For example, within three months" /></div>
      <div className="form-field">
        <label htmlFor="budget">Budget readiness <span>Optional</span></label>
        <select id="budget" name="budget" defaultValue="">
          <option value="">Not specified</option>
          <option>Still defining it</option><option>Prefer to discuss</option><option>Budget already allocated</option>
        </select>
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="contactMethod">Preferred contact method</label>
        <select id="contactMethod" name="contactMethod" value={contactMethod} onChange={(event) => setContactMethod(event.target.value)}><option>Email</option><option>WhatsApp</option><option>Telephone</option></select>
      </div>
      <div className="form-consent form-field-wide">
        <input id="consent" name="consent" type="checkbox" required />
        <label htmlFor="consent">I agree that Gamoventure may use these details to respond to my inquiry.</label>
      </div>
      <button className="button button-dark form-field-wide" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send inquiry"} <span aria-hidden="true">↗</span></button>
      <p className="form-status form-field-wide" role="status" aria-live="polite">{message}</p>
      <p className="form-note form-field-wide">Your details are sent securely to our inbox to respond to your inquiry. Prefer email? <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
    </form>
  );
}
