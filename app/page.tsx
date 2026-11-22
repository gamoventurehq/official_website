import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { BrandSplash } from "@/components/BrandSplash";
import { ContactCTA } from "@/components/ContactCTA";
import { EggPromoVideo } from "@/components/EggPromoVideo";
import { Hero } from "@/components/Hero";
import { IndustryMarquee } from "@/components/IndustryMarquee";
import { SitePage } from "@/components/SitePage";
import { ShreeMarutiPreview } from "@/components/ShreeMarutiPreview";
import { capabilities, principles, processSteps } from "@/components/siteContent";

export const metadata = pageMetadata(
  "/",
  "Custom Software & Business Websites | Gamoventure",
  "Gamoventure builds business websites (₹10,000 and ₹25,000 packages), custom business software, and operational systems for growing businesses.",
);

export default function Home() {
  return (
    <>
      <BrandSplash />
      <SitePage>
        <Hero />

        <section className="chapter selected-work">
          <div className="page-shell">
            <header className="chapter-heading reveal-block">
              <h2>Client case study: Egg Express POS.</h2>
              <p>A closer look at our ongoing restaurant software engagement, covering table ordering, billing, and kitchen operations.</p>
            </header>

            <article className="work-feature work-feature--film reveal-block">
              <div className="work-product-preview work-product-preview--cinema"><EggPromoVideo preview /></div>
              <div className="work-feature-media" data-visual-frame>
                <Image src="/images/egg-express/outlet.webp" alt="Egg Express food outlet in Ulhasnagar, Maharashtra" fill sizes="(max-width: 900px) 100vw, 48vw" />
                <div className="work-feature-logo"><Image src="/images/egg-express/logo.webp" alt="Egg Express" width={132} height={110} /></div>
              </div>
              <div className="work-feature-copy">
                <p className="status-line"><span /> Active client engagement · Currently in development</p>
                <h3>Egg Express POS</h3>
                <p>A point-of-sale and kitchen operations system designed to keep a food outlet in Ulhasnagar, Maharashtra running without an internet connection.</p>
                <ul><li>Order and table management</li><li>Kitchen ticket and bill printing</li><li>Inventory and reporting</li></ul>
                <Link className="text-link" href="/work/egg-express-pos">Explore the case study <i aria-hidden="true">↗</i></Link>
              </div>
            </article>
            <p className="work-secondary-link">Also in development: a seven-page business website for Shree Maruti Transport Services. <Link className="text-link" href="/work#shree-maruti">View the engagement <i aria-hidden="true">↗</i></Link></p>
            <ShreeMarutiPreview />
          </div>
        </section>

        <section className="chapter capabilities-preview">
          <div className="page-shell">
            <header className="chapter-heading reveal-block">
              <h2>Capabilities, services, and website packages.</h2>
              <p>We scope custom software after discovery and offer fixed informational business website packages at ₹10,000 and ₹25,000.</p>
            </header>
            <nav className="service-links service-links--home reveal-block" aria-label="Service scopes and website packages">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  {service.slug === "business-websites" ? `${service.title} (₹10,000 & ₹25,000 packages)` : service.title}
                </Link>
              ))}
            </nav>
            <div className="capability-bento">
              {capabilities.map((capability, index) => (
                <Link className={`capability-card capability-card-${index + 1} reveal-block`} href={`/capabilities#${capability.slug}`} key={capability.slug}>
                  <span>{capability.title}</span>
                  <h3>{capability.summary}</h3>
                  <i aria-hidden="true">↗</i>
                </Link>
              ))}
            </div>
            <div className="extended-capability reveal-block">
              <p>Extended creative & growth capabilities</p>
              <span>Branding, content, SEO, and digital marketing, delivered with trusted specialists when a project calls for broader expertise.</span>
            </div>
          </div>
        </section>

        <section className="chapter process-chapter">
          <div className="page-shell pin-layout process-layout">
            <div className="pin-copy">
              <p className="eyebrow">How we work</p>
              <h2>Three-step delivery: Define, Build, Launch.</h2>
              <p>A practical delivery rhythm that keeps business goals, scope decisions, and software engineering connected.</p>
            </div>
            <div className="pin-stack process-stack">
              {processSteps.map((step) => (
                <article className="process-card reveal-block" key={step.title}>
                  <span>{step.title}</span><p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="chapter principles-chapter">
          <div className="page-shell">
            <header className="chapter-heading reveal-block">
              <p className="eyebrow">Studio principles</p>
              <h2>Direct founding-team collaboration and accountable delivery.</h2>
              <p>We stay practical, collaborative, and deliberate from initial discovery through post-launch support.</p>
            </header>
            <div className="principles-grid">
              {principles.map((principle) => <article className="principle reveal-block" key={principle.title}><h3>{principle.title}</h3><p>{principle.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="industry-chapter">
          <div className="page-shell industry-heading reveal-block"><p>Our work is shaped by the operational problem, not restricted by the industry.</p></div>
          <IndustryMarquee />
        </section>

        <ContactCTA />
      </SitePage>
    </>
  );
}
