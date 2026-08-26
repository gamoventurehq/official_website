import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { contact } from "@/components/siteContent";

export const metadata: Metadata = { title: "Privacy", description: "How Gamoventure handles information shared through this website." };

export default function PrivacyPage() {
  return (
    <SitePage>
      <PageHero eyebrow="Privacy" title={<>Clear about the information you share.</>} copy="This notice explains how Gamoventure handles personal information connected with website inquiries." aside={<p>Effective 26 August 2026</p>} />
      <article className="legal-page page-shell">
        <section><h2>Information you choose to provide</h2><p>When you contact us, you may provide your name, business or organisation, email address, phone number, project details, timeline, budget readiness, and preferred contact method.</p></section>
        <section><h2>How we use it</h2><p>We use inquiry information to understand your request, communicate with you, assess whether Gamoventure can help, prepare a proposal, and maintain relevant business correspondence.</p></section>
        <section><h2>How the inquiry form works</h2><p>The current form prepares an email in your device’s email application. The website itself does not submit the form to a database or store the entered fields. Once sent, the message is handled through the email services used by you and Gamoventure.</p></section>
        <section><h2>Sharing and retention</h2><p>We do not sell personal information. Information may be shared with service providers or trusted specialists only when needed to respond to or deliver an agreed engagement. We retain correspondence only for as long as reasonably needed for the inquiry, relationship, record-keeping, or legal obligations.</p></section>
        <section><h2>Your choices</h2><p>You may ask what information we hold about you, request correction or deletion where applicable, or withdraw from further communication by emailing <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p></section>
        <section><h2>Cookies and external links</h2><p>This launch version does not intentionally use advertising or analytics cookies. Links to email, WhatsApp, or other external services are governed by those services’ own privacy practices.</p></section>
        <section><h2>Updates</h2><p>We may revise this notice when website functionality or our practices change. The effective date above will be updated when material changes are made.</p></section>
        <p className="legal-note">Questions about this notice? <Link href="/contact">Contact Gamoventure</Link>.</p>
      </article>
    </SitePage>
  );
}
