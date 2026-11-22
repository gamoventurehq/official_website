import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { pageMetadata, siteLastUpdatedDisplay } from "@/lib/seo";
import { ContactCTA } from "@/components/ContactCTA";
import { IndustryMarquee } from "@/components/IndustryMarquee";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { capabilities } from "@/components/siteContent";

export const metadata: Metadata = pageMetadata(
  "/capabilities",
  "Custom Software, Websites & Product Studio",
  "Explore Gamoventure's capabilities: business websites at ₹10,000 and ₹25,000, custom operational software, workflow automation, and product engineering.",
);

export default function CapabilitiesPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Capabilities & services"
        title={<>Custom software, business websites, and product engineering.</>}
        copy="Gamoventure helps growing businesses scope, design, build, and maintain digital products and operational systems. Informational business websites use fixed ₹10,000 and ₹25,000 packages, while custom software, portals, and workflow automation are quoted after discovery."
        aside={
          <div>
            <p>Bring us a defined project or an operational bottleneck. We start by defining a reviewable scope.</p>
            <p className="hero-updated">Last updated {siteLastUpdatedDisplay}</p>
          </div>
        }
      />

      <section className="chapter capability-list-chapter">
        <nav className="page-shell service-links" aria-label="Explore our services">
          {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}
        </nav>
        <div className="page-shell pin-layout capability-list-layout">
          <div className="pin-copy">
            <p className="eyebrow">Five core capabilities</p>
            <h2>Every engagement begins with an operational reason.</h2>
            <p>Custom software and portals are scoped after discovery. Informational business websites can use defined packages, with pages and responsibilities agreed before work begins.</p>
          </div>
          <div className="pin-stack capability-detail-list">
            {capabilities.map((capability) => (
              <article id={capability.slug} key={capability.slug} className="capability-detail-card reveal-block">
                <h3>{capability.title}</h3><p>{capability.problem}</p>
                <ul>{capability.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter partnership-chapter">
        <div className="page-shell">
          <header className="chapter-heading reveal-block">
            <p className="eyebrow">Post-launch support</p>
            <h2>Ongoing maintenance, hosting care, and product iteration.</h2>
            <p>Post-launch engagements are structured around the continuity and engineering capacity your business needs.</p>
          </header>
          <div className="partnership-grid">
            <article className="partnership-card reveal-block"><span>Care & Continuity</span><h3>Keep it dependable.</h3><p>Hosting, monitoring, backups, maintenance, updates, and responsive bug support.</p></article>
            <article className="partnership-card partnership-card-growth reveal-block"><span>Growth & Evolution</span><h3>Keep it moving.</h3><p>Everything in Care & Continuity, with improvement capacity, analytics, planning, and continued product development.</p></article>
          </div>
        </div>
      </section>

      <section className="extended-page-capability"><div className="page-shell reveal-block"><p className="eyebrow">Extended capabilities</p><h2>Specialist support for brand, content, and SEO.</h2><p>Branding, content, SEO, and digital marketing can be delivered with trusted specialists as part of a wider engagement.</p></div></section>
      <IndustryMarquee />
      <ContactCTA title="Have a different challenge? Let's understand what needs to work better." />
    </SitePage>
  );
}
