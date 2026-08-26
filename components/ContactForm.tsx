"use client";

import type { FormEvent } from "react";
import { contact } from "./siteContent";

export function ContactForm() {
  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${form.get("name") || "a prospective client"}`);
    const body = encodeURIComponent([
      `Name: ${form.get("name") || ""}`,
      `Business: ${form.get("business") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Phone / WhatsApp: ${form.get("phone") || "Not provided"}`,
      `Timeline: ${form.get("timeline") || "Not provided"}`,
      `Budget readiness: ${form.get("budget") || "Not provided"}`,
      `Preferred contact: ${form.get("contactMethod") || "Email"}`,
      "",
      "What needs to work better:",
      String(form.get("need") || ""),
    ].join("\n"));

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={submitInquiry}>
      <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" required autoComplete="name" /></div>
      <div className="form-field"><label htmlFor="business">Business or organisation</label><input id="business" name="business" required autoComplete="organization" /></div>
      <div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      <div className="form-field"><label htmlFor="phone">Phone or WhatsApp <span>Optional</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
      <div className="form-field form-field-wide"><label htmlFor="need">What are you trying to improve, launch, or solve?</label><textarea id="need" name="need" rows={6} required /></div>
      <div className="form-field"><label htmlFor="timeline">Timeline <span>Optional</span></label><input id="timeline" name="timeline" placeholder="For example, within three months" /></div>
      <div className="form-field">
        <label htmlFor="budget">Budget readiness <span>Optional</span></label>
        <select id="budget" name="budget" defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Still defining it</option><option>Prefer to discuss</option><option>Budget already allocated</option>
        </select>
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="contactMethod">Preferred contact method</label>
        <select id="contactMethod" name="contactMethod" defaultValue="Email"><option>Email</option><option>WhatsApp</option><option>Telephone</option></select>
      </div>
      <div className="form-consent form-field-wide">
        <input id="consent" name="consent" type="checkbox" required />
        <label htmlFor="consent">I agree that Gamoventure may use these details to respond to my inquiry.</label>
      </div>
      <button className="button button-dark form-field-wide" type="submit">Prepare email inquiry <span aria-hidden="true">↗</span></button>
      <p className="form-note form-field-wide">Submitting opens your email application. This website does not store the form details.</p>
    </form>
  );
}
