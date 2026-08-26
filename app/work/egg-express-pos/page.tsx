import type { Metadata } from "next";
import Image from "next/image";
import { ContainerScrollShowcase } from "@/components/ContainerScrollShowcase";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = {
  title: "Egg Express POS — Selected Work",
  description: "An active Gamoventure engagement developing a local-first point-of-sale and kitchen operations system for Egg Express.",
  openGraph: {
    title: "Egg Express POS — Selected Work",
    description: "A purpose-built, local-first restaurant operations system currently in development.",
    images: [],
  },
  twitter: { card: "summary", title: "Egg Express POS — Selected Work", description: "A purpose-built, local-first restaurant operations system currently in development.", images: [] },
};

const capabilities = [
  ["Orders & tables", "Dine-in, counter, and takeaway workflows with table and order management."],
  ["Kitchen operations", "KOT generation and demonstrated physical printer output for kitchen and billing flows."],
  ["Billing & payments", "Cash and digital payment recording with bill generation for outlet operations."],
  ["Recipes & inventory", "Recipe-linked inventory logic designed to make stock movement more traceable."],
  ["Roles & reporting", "Owner and cashier access, operational reports, and downloadable business records."],
  ["Local-first foundation", "A browser-based Windows system with local PostgreSQL as the operational source of truth."],
] as const;

export default function EggExpressCaseStudyPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Egg Express · Ulhasnagar, Maharashtra"
        title={<>A local-first <span className="case-inline-brand"><Image src="/images/egg-express/logo.webp" alt="Egg Express" width={120} height={100} /></span> POS shaped around how the outlet actually operates.</>}
        copy="Gamoventure is developing a purpose-built point-of-sale and kitchen operations system designed to replace restrictive vendor software with an operation the business can control."
        aside={<div className="case-status"><p className="status-line"><span /> Active client engagement</p><strong>Currently in development</strong><small>Rollout, UAT, training, and formal acceptance remain ahead.</small></div>}
      />

      <section className="case-cover">
        <div className="case-cover-image" data-visual-frame><Image src="/images/egg-express/outlet.webp" alt="Egg Express outlet in Ulhasnagar, Maharashtra" fill priority sizes="100vw" /></div>
        <div className="case-cover-logo"><Image src="/images/egg-express/logo.webp" alt="Egg Express logo" width={190} height={158} /></div>
      </section>

      <section className="chapter case-intro">
        <div className="page-shell case-intro-grid reveal-block">
          <div><p className="eyebrow">The challenge</p><h2>Own the operation without being trapped inside a generic system.</h2></div>
          <div><p>Egg Express wanted an alternative to an existing vendor POS: a system aligned with its own ordering, kitchen, billing, and inventory workflows while keeping the operational core usable locally.</p><p>The response is not an off-the-shelf template. It is a focused product shaped around the outlet’s day-to-day flow, data ownership, and need for dependable offline operation.</p></div>
        </div>
      </section>

      <ContainerScrollShowcase />

      <section className="chapter case-product-chapter">
        <div className="page-shell case-product-layout">
          <div className="case-product-copy reveal-block"><p className="eyebrow">The product direction</p><h2>Local where operations happen. Connected where visibility helps.</h2></div>
          <div className="case-product-detail reveal-block"><p>The operational system is browser-based and designed for a Windows outlet environment. A local PostgreSQL database remains authoritative, with a sanitized one-way cloud replica architecture planned for appropriate remote visibility.</p><Image src="/images/egg-express/pos-orders.jpg" alt="Egg Express POS service type and table selection workspace" width={821} height={776} /></div>
        </div>
      </section>

      <section className="chapter case-capabilities">
        <div className="page-shell">
          <header className="chapter-heading reveal-block"><p className="eyebrow">Operational scope</p><h2>A connected working surface from order to report.</h2><p>The core brings outlet workflows together without claiming results that can only be measured after rollout.</p></header>
          <div className="case-capability-grid">{capabilities.map(([title, copy]) => <article className="case-capability reveal-block" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="chapter progress-chapter">
        <div className="page-shell progress-layout">
          <div className="progress-heading reveal-block"><p className="eyebrow">Current progress</p><h2>Clear about what exists. Clear about what comes next.</h2></div>
          <div className="progress-columns">
            <article className="progress-card progress-complete reveal-block"><span>Developed and demonstrated</span><ul><li>Local operational core</li><li>Ordering, billing, inventory, roles, and reporting workflows</li><li>Automated and isolated engineering rehearsals</li><li>Physical KOT and bill printer output</li></ul></article>
            <article className="progress-card reveal-block"><span>Remaining delivery stages</span><ul><li>Outlet installation and live-order validation</li><li>Client UAT and formal acceptance</li><li>Team training and delivery documentation</li><li>Final certification of rollout configuration</li></ul></article>
          </div>
        </div>
      </section>

      <section className="chapter case-principle"><div className="page-shell reveal-block"><p>“The system should adapt to the operation—not make the operation adapt to the system.”</p><span>Gamoventure product principle</span></div></section>
      <ContactCTA eyebrow="Need a system shaped around your operation?" title="Let’s define what better work could look like." />
    </SitePage>
  );
}
