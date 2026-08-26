import Image from "next/image";
import Link from "next/link";
import { BrandSplash } from "@/components/BrandSplash";
import { ContactCTA } from "@/components/ContactCTA";
import { EggProductVisual } from "@/components/EggProductVisual";
import { Hero } from "@/components/Hero";
import { IndustryMarquee } from "@/components/IndustryMarquee";
import { SitePage } from "@/components/SitePage";
import { capabilities, principles, processSteps } from "@/components/siteContent";

export default function Home() {
  return (
    <>
      <BrandSplash />
      <SitePage>
        <Hero />

        <section className="chapter statement-chapter">
          <div className="page-shell statement-layout reveal-block">
            <p className="eyebrow">Independent by design</p>
            <h2>
              Ambitious businesses deserve technology shaped around how they
              <span className="statement-accent"> actually work.</span>
            </h2>
            <p>
              Not expensive, generic systems that force them to adapt. We combine product thinking,
              engineering, and commercial understanding to create technology that earns its place.
            </p>
          </div>
        </section>

        <section className="chapter capabilities-preview">
          <div className="page-shell">
            <header className="chapter-heading reveal-block">
              <p className="eyebrow">What we can build together</p>
              <h2>From uncertain challenge to useful, working technology.</h2>
              <p>Our capabilities cover the complete path from direction and design to engineering, launch, and continued growth.</p>
            </header>

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
              <span>Branding, content, SEO, and digital marketing—delivered with trusted specialists when a project calls for broader expertise.</span>
            </div>
          </div>
        </section>

        <section className="chapter selected-work">
          <div className="page-shell">
            <header className="chapter-heading reveal-block">
              <p className="eyebrow">Selected work</p>
              <h2>One real engagement, shown with the detail it deserves.</h2>
              <p>Proof begins with honest scope, considered decisions, and visible progress—not inflated claims.</p>
            </header>

            <Link className="work-feature reveal-block" href="/work/egg-express-pos">
              <div className="work-feature-media" data-visual-frame>
                <Image src="/images/egg-express/outlet.webp" alt="Egg Express food outlet in Ulhasnagar" fill sizes="(max-width: 900px) 100vw, 48vw" />
                <div className="work-feature-logo"><Image src="/images/egg-express/logo.webp" alt="Egg Express" width={132} height={110} /></div>
              </div>
              <div className="work-feature-copy">
                <p className="status-line"><span /> Active client engagement · Currently in development</p>
                <h3>Egg Express POS</h3>
                <p>A purpose-built, local-first point-of-sale and kitchen operations system for a food outlet in Ulhasnagar, Maharashtra.</p>
                <ul><li>Order and table management</li><li>KOT and bill printing</li><li>Inventory and reporting</li></ul>
                <span className="text-link">Explore the case study <i aria-hidden="true">↗</i></span>
              </div>
              <div className="work-product-preview"><EggProductVisual /></div>
            </Link>
          </div>
        </section>

        <section className="chapter process-chapter">
          <div className="page-shell pin-layout process-layout">
            <div className="pin-copy">
              <p className="eyebrow">How we work</p>
              <h2>Clarity first. Momentum throughout.</h2>
              <p>A practical delivery rhythm that keeps business intent and technical decisions connected.</p>
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
              <p className="eyebrow">Small by design. Ambitious by nature.</p>
              <h2>Close to the problem. Accountable for the outcome.</h2>
              <p>We stay practical, collaborative, and deliberate from the first conversation through the work that follows launch.</p>
            </header>
            <div className="principles-grid">
              {principles.map((principle) => <article className="principle reveal-block" key={principle.title}><h3>{principle.title}</h3><p>{principle.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="industry-chapter">
          <div className="page-shell industry-heading reveal-block"><p>Our work is shaped by the problem—not restricted by the industry.</p></div>
          <IndustryMarquee />
        </section>

        <ContactCTA />
      </SitePage>
    </>
  );
}
