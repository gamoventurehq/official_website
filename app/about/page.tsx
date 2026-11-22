import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, siteLastUpdatedDisplay } from "@/lib/seo";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { principles } from "@/components/siteContent";

export const metadata: Metadata = pageMetadata(
  "/about",
  "About Our Digital Product Studio",
  "Learn how Gamoventure collaborates with local and growing businesses to build accessible custom software, operational tools, and websites.",
);

export default function AboutPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Independent studio"
        title={<>About Gamoventure, an independent digital product studio.</>}
        copy="Gamoventure is a remote-first software engineering and web design studio serving growing businesses in India and internationally. Working directly with our founding team, clients get fixed-scope business websites, customer portals, and custom operational software built around real workflows and practical budgets."
        aside={
          <div>
            <p>Independent, collaborative, and accountable from initial scoping through post-launch care.</p>
            <p className="hero-updated">Last updated {siteLastUpdatedDisplay}</p>
          </div>
        }
      />

      <section className="chapter why-chapter">
        <div className="page-shell pin-layout why-layout">
          <div className="pin-copy"><h2>Practical software for local and growing businesses.</h2></div>
          <div className="pin-stack why-copy">
            <p>Many local and growing businesses are underserved by software that is either too generic, too restrictive, or priced far beyond the value it creates for them.</p>
            <p>We exist to close that gap with dependable, well-engineered software and websites at an accessible early-stage cost, without treating quality as a race to the bottom.</p>
          </div>
        </div>
      </section>

      <section className="chapter principles-chapter about-principles">
        <div className="page-shell">
          <header className="chapter-heading reveal-block"><h2>Work directly with the founding team.</h2><p>A small founding team means short decision paths, direct engineering communication, and clear accountability for every deliverable.</p></header>
          <div className="principles-grid">{principles.map((principle) => <article className="principle reveal-block" key={principle.title}><h3>{principle.title}</h3><p>{principle.copy}</p></article>)}</div>
          <nav className="service-links" aria-label="Explore Gamoventure work and services">
            <Link href="/capabilities">Explore capabilities</Link>
            <Link href="/services/business-websites">Business website packages (₹10,000 & ₹25,000)</Link>
            <Link href="/services/custom-business-software">Custom business software</Link>
            <Link href="/work">View active client work</Link>
          </nav>
        </div>
      </section>

      <section className="chapter future-chapter">
        <div className="page-shell future-layout reveal-block">
          <p className="eyebrow">Where we are going</p>
          <h2>Client delivery today builds the foundation for original products tomorrow.</h2>
          <p>As Gamoventure grows, the operational insight developed through real client engagements will support a second track: original software products of our own. The client solutions studio remains a permanent part of that model.</p>
        </div>
      </section>
      <ContactCTA />
    </SitePage>
  );
}
