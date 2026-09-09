import type { Metadata } from "next";
import { linkedinUrl, pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { contact } from "@/components/siteContent";

export const metadata: Metadata = pageMetadata("/contact", "Contact — Discuss Your Project", "Contact Gamoventure about business websites, custom software, or product development. Email hello@gamoventure.in or send a project inquiry.");

export default function ContactPage() {
  return (
    <SitePage>
      <PageHero
        compact
        eyebrow="Discuss your project"
        title={<>Bring us the problem, the bottleneck, or the idea.</>}
        copy="You do not need a finished specification. Tell us what you are trying to improve, launch, or solve, and we will help define what should be built."
        aside={<p>We assess where we can create value and aim to respond within two business days.</p>}
      />
      <section className="chapter contact-chapter contact-chapter--direct">
        <div className="page-shell contact-layout">
          <div className="contact-intro reveal-block">
            <div className="contact-methods">
              <a href={`mailto:${contact.email}`}><span>Email</span><strong>{contact.email}</strong></a>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{contact.phoneDisplay}</strong></a>
              <a href={`tel:${contact.phoneHref}`}><span>Telephone</span><strong>{contact.phoneDisplay}</strong></a>
            </div>
            <p className="contact-availability">Remote-first · Available across India and internationally</p>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">Follow Gamoventure on LinkedIn</a>
          </div>
          <noscript><style>{".contact-form { display: none; }"}</style><p>To send an inquiry without JavaScript, email <a href={`mailto:${contact.email}`}>{contact.email}</a> or use the contact options above.</p></noscript>
          <ContactForm />
        </div>
      </section>
    </SitePage>
  );
}
