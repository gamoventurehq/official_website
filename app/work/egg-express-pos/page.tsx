import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { ContainerScrollShowcase } from "@/components/ContainerScrollShowcase";
import { EggPromoVideo } from "@/components/EggPromoVideo";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { caseStudyJsonLd, pageMetadata, siteLastUpdated, siteLastUpdatedDisplay, type FaqItem } from "@/lib/seo";

const caseTitle = "Egg Express POS: Restaurant POS Case Study";
const caseDescription = "Explore the offline ordering, kitchen ticket, billing, and inventory workflows in Gamoventure's local-first POS build for Egg Express.";
const caseImage = "/images/egg-express/pos-showcase-poster.jpg";

export const metadata: Metadata = pageMetadata("/work/egg-express-pos", caseTitle, caseDescription, {
  image: caseImage,
  type: "article",
  publishedTime: "2026-08-26",
  modifiedTime: siteLastUpdated,
});

const capabilities = [
  ["Orders & tables", "Dine-in, counter, and takeaway workflows with table and order management."],
  ["Kitchen operations", "Kitchen order tickets (KOTs) and bills, with physical printer output demonstrated."],
  ["Billing & payments", "Cash and digital payment recording with bill generation for outlet operations."],
  ["Recipes & inventory", "Recipe-linked inventory logic designed to make stock movement more traceable."],
  ["Roles & reporting", "Owner and cashier access, operational reports, and downloadable business records."],
  ["Works locally", "A browser-based Windows system designed to keep outlet operations running without an internet connection."],
] as const;

const caseFaqs: readonly FaqItem[] = [
  {
    question: "How does Egg Express POS keep working without an internet connection?",
    answer: "The application runs on the food outlet's local Windows machine backed by a local PostgreSQL database. Dine-in table orders, takeaway counter billing, kitchen ticket printing, and stock deductions execute locally with zero dependency on external internet uptime.",
  },
  {
    question: "How does the owner check sales remotely if the primary database is local?",
    answer: "A separate one-way cloud replication pipeline is planned to sync a sanitized copy of operational records for remote owner visibility without letting cloud availability block or overwrite counter operations.",
  },
  {
    question: "What stage of delivery has Egg Express POS reached?",
    answer: "Core local workflows (table and counter orders, billing, recipe-linked inventory, role permissions, reporting, automated test rehearsals, and physical thermal KOT/bill printing) have been developed and demonstrated. Live outlet installation, staff training, and formal client acceptance remain ahead.",
  },
  {
    question: "Can Gamoventure build a similar offline or operational system for another business?",
    answer: "Yes. While Egg Express POS was designed around one restaurant's counter and kitchen workflow, we build custom operational software, inventory systems, and local-first tools tailored to retail, hospitality, logistics, and service operations.",
  },
];

export default function EggExpressCaseStudyPage() {
  return (
    <SitePage>
      <JsonLd
        data={caseStudyJsonLd({
          path: "/work/egg-express-pos",
          headline: "Egg Express POS: local-first restaurant ordering and kitchen software",
          description: caseDescription,
          image: caseImage,
          datePublished: "2026-08-26",
          dateModified: siteLastUpdated,
          softwareName: "Egg Express POS",
          operatingSystem: "Windows",
        })}
      />
      <PageHero
        eyebrow="Client case study · Egg Express, Ulhasnagar"
        title={<>Egg Express POS: local-first restaurant ordering and kitchen software.</>}
        copy="Gamoventure is engineering an offline-capable point-of-sale, billing, kitchen ticket, and recipe-linked inventory system on Windows and PostgreSQL so Egg Express in Ulhasnagar, Maharashtra can run counter operations without internet dependency and retain direct ownership of its operational data."
        aside={
          <div className="case-status">
            <span className="case-inline-brand">
              <Image src="/images/egg-express/logo.webp" alt="Egg Express logo" width={120} height={100} />
            </span>
            <p className="status-line"><span /> Active client engagement</p>
            <strong>Currently in development</strong>
            <small>Outlet rollout, client testing, training, and formal acceptance remain ahead. Last updated {siteLastUpdatedDisplay}.</small>
          </div>
        }
      />

      <Breadcrumbs
        dark
        items={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: "Egg Express POS" },
        ]}
      />

      <section className="chapter case-promo-chapter" aria-labelledby="pos-promo-title">
        <div className="page-shell">
          <header className="chapter-heading">
            <h2 id="pos-promo-title">Inside Egg Express POS.</h2>
            <p>An 18-second walkthrough of table selection, category filtering, and draft-order workflows from the development build.</p>
          </header>
          <EggPromoVideo preview />
        </div>
      </section>

      <section className="case-cover">
        <div className="case-cover-image" data-visual-frame><Image src="/images/egg-express/outlet.webp" alt="Egg Express outlet in Ulhasnagar, Maharashtra" fill priority sizes="100vw" /></div>
        <div className="case-cover-logo"><Image src="/images/egg-express/logo.webp" alt="Egg Express brand mark" width={190} height={158} /></div>
      </section>

      <section className="chapter case-intro">
        <div className="page-shell case-intro-grid reveal-block">
          <div><p className="eyebrow">The operational challenge</p><h2>Own daily restaurant operations without vendor POS lock-in.</h2></div>
          <div><p>Egg Express wanted an alternative to an existing subscription vendor POS: a system aligned with its own dine-in, counter, kitchen, billing, and stock workflows while keeping the operational core usable locally.</p><p>Rather than adapting counter staff to a rigid template, Gamoventure designed a focused Windows browser application around the outlet&apos;s menu structure, data ownership, and offline reliability.</p></div>
        </div>
      </section>

      <ContainerScrollShowcase />

      <section className="chapter case-product-chapter">
        <div className="page-shell case-product-layout">
          <div className="case-product-copy reveal-block"><p className="eyebrow">System architecture</p><h2>Local PostgreSQL at the counter. One-way cloud visibility for the owner.</h2></div>
          <div className="case-product-detail reveal-block">
            <p>Orders and records are stored on the outlet&apos;s Windows system so daily billing and kitchen tickets continue without internet. A separate cloud replica is planned to give the owner remote reporting without making outlet operations depend on cloud connectivity.</p>
            <details className="case-technical-detail"><summary>Technical approach</summary><p>The browser-based system uses a local PostgreSQL database as its primary record. The planned cloud replica receives a sanitized copy in one direction; it does not control the local operational data.</p></details>
            <a className="case-pos-photo" href="/images/egg-express/showcase/tables.png" target="_blank" rel="noreferrer"><Image src="/images/egg-express/showcase/tables.png" alt="Egg Express POS service selection and table management. Open full-size screenshot." width={2560} height={1600} sizes="(max-width: 900px) 100vw, 60vw" /></a>
          </div>
        </div>
      </section>

      <section className="chapter case-capabilities">
        <div className="page-shell">
          <header className="chapter-heading reveal-block"><p className="eyebrow">Operational scope</p><h2>Six connected workflows from table order to daily report.</h2><p>The core brings outlet workflows together without claiming post-rollout metrics before live deployment.</p></header>
          <div className="case-capability-grid">{capabilities.map(([title, copy]) => <article className="case-capability reveal-block" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="chapter progress-chapter">
        <div className="page-shell progress-layout">
          <div className="progress-heading reveal-block"><p className="eyebrow">Delivery status</p><h2>Demonstrated functionality vs. remaining rollout steps.</h2></div>
          <div className="progress-columns">
            <article className="progress-card progress-complete reveal-block"><span>Developed and demonstrated</span><ul><li>Local operational core</li><li>Ordering, billing, inventory, roles, and reporting workflows</li><li>Automated tests and isolated delivery rehearsals</li><li>Physical kitchen ticket and bill printer output</li></ul></article>
            <article className="progress-card reveal-block"><span>Remaining delivery stages</span><ul><li>Outlet installation and testing with live orders</li><li>Client acceptance testing and formal approval</li><li>Team training and delivery documentation</li><li>Final checks of the rollout configuration</li></ul></article>
          </div>
        </div>
      </section>

      <section className="service-page-body">
        <div className="page-shell service-reading">
          <FaqSection id="egg-express-faq" heading="Egg Express POS: frequently asked questions." faqs={caseFaqs} />
          <nav className="service-links" aria-label="Related capabilities and work">
            <Link href="/work">All client work</Link>
            <Link href="/services/custom-business-software">Custom Business Software & Automation</Link>
            <Link href="/services/product-development">Digital Product Design & Development</Link>
          </nav>
        </div>
      </section>

      <section className="chapter case-principle"><div className="page-shell reveal-block"><p>&quot;The system should adapt to the operation, not make the operation adapt to the system.&quot;</p><span>Gamoventure product principle</span></div></section>
      <ContactCTA eyebrow="Need a system shaped around your operation?" title="Let's define what better work could look like." />
    </SitePage>
  );
}
