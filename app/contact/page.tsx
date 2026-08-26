import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { contact } from "@/components/siteContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss a digital product, business system, or unresolved operational challenge with Gamoventure.",
};

export default function ContactPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Discuss your project"
        title={<>Bring us the problem, the bottleneck, or the idea.</>}
        copy="You do not need a finished specification. Tell us what you are trying to improve, launch, or solve, and we will help define what should be built."
        aside={<p>We assess where we can create value and aim to respond within two business days.</p>}
      />
      <section className="chapter contact-chapter">
        <div className="page-shell contact-layout">
          <div className="contact-intro reveal-block">
            <p className="eyebrow">Start where you are</p>
            <h2>Good projects can begin with an unfinished thought.</h2>
            <p>Share as much context as you have. We will use the first conversation to understand the business, the urgency, and the right next step.</p>
            <div className="contact-methods">
              <a href={`mailto:${contact.email}`}><span>Email</span><strong>{contact.email}</strong></a>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{contact.phoneDisplay}</strong></a>
              <a href={`tel:${contact.phoneHref}`}><span>Telephone</span><strong>{contact.phoneDisplay}</strong></a>
            </div>
            <p className="contact-availability">Remote-first · Available across India and internationally</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </SitePage>
  );
}
