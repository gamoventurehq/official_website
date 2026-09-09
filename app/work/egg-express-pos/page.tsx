import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { ContainerScrollShowcase } from "@/components/ContainerScrollShowcase";
import { ContactCTA } from "@/components/ContactCTA";
import { EggPromoVideo } from "@/components/EggPromoVideo";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = pageMetadata("/work/egg-express-pos", "Egg Express POS — Restaurant Software Case Study", "Explore the ordering, kitchen, billing, and inventory workflows in Gamoventure's ongoing local-first POS engagement for Egg Express.", "/images/egg-express/pos-showcase-poster.jpg");

const capabilities = [
  ["Orders & tables", "Dine-in, counter, and takeaway workflows with table and order management."],
  ["Kitchen operations", "Kitchen order tickets (KOTs) and bills, with physical printer output demonstrated."],
  ["Billing & payments", "Cash and digital payment recording with bill generation for outlet operations."],
  ["Recipes & inventory", "Recipe-linked inventory logic designed to make stock movement more traceable."],
  ["Roles & reporting", "Owner and cashier access, operational reports, and downloadable business records."],
  ["Works locally", "A browser-based Windows system designed to keep outlet operations running without an internet connection."],
] as const;

export default function EggExpressCaseStudyPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Client focus · Egg Express"
        title={<>A point of sale shaped around <span className="case-inline-brand"><Image src="/images/egg-express/logo.webp" alt="Egg Express" width={120} height={100} /></span> and its daily operations.</>}
        copy="Gamoventure is developing an ordering, billing, and kitchen system designed to work without an internet connection and give the business control over its operational data."
        aside={<div className="case-status"><p className="status-line"><span /> Active client engagement</p><strong>Currently in development</strong><small>Outlet rollout, client testing, training, and formal acceptance remain ahead.</small></div>}
      />

      <section className="chapter case-promo-chapter" aria-labelledby="pos-promo-title">
        <div className="page-shell">
          <header className="chapter-heading">
            <h2 id="pos-promo-title">Inside Egg Express POS.</h2>
            <p>A closer look at our ongoing product engagement, from order handling to kitchen operations.</p>
          </header>
          <EggPromoVideo preview />
        </div>
      </section>

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
          <div className="case-product-detail reveal-block">
            <p>Orders and records are kept on the outlet’s Windows system so daily work can continue without internet. A separate cloud copy is planned to give the owner appropriate remote visibility without making outlet operations depend on it.</p>
            <details className="case-technical-detail"><summary>Technical approach</summary><p>The browser-based system uses a local PostgreSQL database as its primary record. The planned cloud replica receives a sanitized copy in one direction; it does not control the local operational data.</p></details>
            <a className="case-pos-photo" href="/images/egg-express/showcase/tables.png" target="_blank" rel="noreferrer"><Image src="/images/egg-express/showcase/tables.png" alt="Egg Express POS service selection and table management. Open full-size screenshot." width={2560} height={1600} sizes="(max-width: 900px) 100vw, 60vw" /></a>
          </div>
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
            <article className="progress-card progress-complete reveal-block"><span>Developed and demonstrated</span><ul><li>Local operational core</li><li>Ordering, billing, inventory, roles, and reporting workflows</li><li>Automated tests and isolated delivery rehearsals</li><li>Physical kitchen ticket and bill printer output</li></ul></article>
            <article className="progress-card reveal-block"><span>Remaining delivery stages</span><ul><li>Outlet installation and testing with live orders</li><li>Client acceptance testing and formal approval</li><li>Team training and delivery documentation</li><li>Final checks of the rollout configuration</li></ul></article>
          </div>
        </div>
      </section>

      <section className="chapter case-principle"><div className="page-shell reveal-block"><p>“The system should adapt to the operation—not make the operation adapt to the system.”</p><span>Gamoventure product principle</span></div></section>
      <ContactCTA eyebrow="Need a system shaped around your operation?" title="Let’s define what better work could look like." />
    </SitePage>
  );
}
