import type { Metadata } from "next";
import { CapabilityAccordion } from "@/components/CapabilityAccordion";
import { ContactCTA } from "@/components/ContactCTA";
import { IndustryMarquee } from "@/components/IndustryMarquee";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { capabilities } from "@/components/siteContent";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Explore Gamoventure's capabilities across product strategy, digital experiences, business systems, product engineering, and ongoing growth.",
};

export default function CapabilitiesPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="What we can build together"
        title={<>Technology shaped around the work that needs to happen.</>}
        copy="We help growing businesses define, build, launch, and continuously improve the digital products and systems they need to operate and grow."
        aside={<p>Bring us a defined project or an unresolved business problem. We will start by finding the right shape of the solution.</p>}
      />

      <section className="chapter capability-detail-chapter">
        <div className="page-shell">
          <CapabilityAccordion />
        </div>
      </section>

      <section className="chapter capability-list-chapter">
        <div className="page-shell pin-layout capability-list-layout">
          <div className="pin-copy"><p className="eyebrow">From problem to progress</p><h2>Every capability begins with a business reason.</h2><p>Deliverables are shaped after discovery—not pulled from a one-size-fits-all package.</p></div>
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
          <header className="chapter-heading reveal-block"><p className="eyebrow">Beyond launch</p><h2>Useful technology needs a future, not just a handoff.</h2><p>Ongoing engagements are shaped around the level of continuity and momentum your business needs.</p></header>
          <div className="partnership-grid">
            <article className="partnership-card reveal-block"><span>Care & Continuity</span><h3>Keep it dependable.</h3><p>Hosting, monitoring, backups, maintenance, updates, and responsive bug support.</p></article>
            <article className="partnership-card partnership-card-growth reveal-block"><span>Growth & Evolution</span><h3>Keep it moving.</h3><p>Everything in Care & Continuity, with improvement capacity, analytics, planning, and continued product development.</p></article>
          </div>
        </div>
      </section>

      <section className="extended-page-capability"><div className="page-shell reveal-block"><p className="eyebrow">Extended capabilities</p><h2>Broader expertise when the work calls for it.</h2><p>Branding, content, SEO, and digital marketing can be delivered with trusted specialists as part of a wider engagement.</p></div></section>
      <IndustryMarquee />
      <ContactCTA title="Have a different challenge? Let’s understand what needs to work better." />
    </SitePage>
  );
}
