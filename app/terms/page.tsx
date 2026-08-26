import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { contact } from "@/components/siteContent";

export const metadata: Metadata = { title: "Terms", description: "Terms for using the Gamoventure portfolio website." };

export default function TermsPage() {
  return (
    <SitePage>
      <PageHero eyebrow="Website terms" title={<>A straightforward basis for using this portfolio.</>} copy="These terms apply to your use of the Gamoventure website and the information presented here." aside={<p>Effective 26 August 2026</p>} />
      <article className="legal-page page-shell">
        <section><h2>Website purpose</h2><p>This website introduces Gamoventure, its capabilities, selected work, and ways to make an inquiry. Its content is general information and is not a binding offer, quotation, guarantee, or professional legal, financial, or medical advice.</p></section>
        <section><h2>Project inquiries</h2><p>Sending an inquiry does not create a client relationship or require either party to proceed. Project scope, responsibilities, timelines, fees, intellectual property, support, and acceptance terms are established only through a separate written proposal or agreement.</p></section>
        <section><h2>Selected work</h2><p>Case studies describe the state of an engagement at the time of publication. Projects marked “currently in development” should not be interpreted as installed, accepted, or operating in production unless the page expressly says so.</p></section>
        <section><h2>Content and intellectual property</h2><p>Unless otherwise identified, the Gamoventure name, visual identity, website design, copy, and original materials on this site belong to Gamoventure or are used with permission. Client names, brands, and materials remain the property of their respective owners.</p></section>
        <section><h2>Acceptable use</h2><p>You may browse and share links to this website for lawful purposes. You may not misrepresent the content, interfere with the site, attempt unauthorised access, or reuse protected material commercially without permission.</p></section>
        <section><h2>Availability and accuracy</h2><p>We aim to keep the website useful and accurate but do not guarantee uninterrupted availability or that every item will remain current. We may update, suspend, or remove website content when needed.</p></section>
        <section><h2>External services</h2><p>The website may link to services such as email or WhatsApp. Gamoventure does not control those services and is not responsible for their availability, content, or independent terms.</p></section>
        <section><h2>Contact</h2><p>Questions about these terms can be sent to <a href={`mailto:${contact.email}`}>{contact.email}</a> or through the <Link href="/contact">contact page</Link>.</p></section>
        <p className="legal-note">These baseline website terms should be reviewed as Gamoventure’s legal structure, services, and website functionality evolve.</p>
      </article>
    </SitePage>
  );
}
