import type { Metadata } from "next";
import { pageMetadata, siteLastUpdatedDisplay } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { EggProductVisual } from "@/components/EggProductVisual";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { ShreeMarutiPreview } from "@/components/ShreeMarutiPreview";

export const metadata: Metadata = pageMetadata(
  "/work",
  "Client Work: Software & Business Websites",
  "Explore Gamoventure's active client builds: the offline-first Egg Express POS system and the Shree Maruti Transport Services website.",
);

export default function WorkPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Selected client work"
        title={<>Client software and business website projects.</>}
        copy="Explore two active client engagements built by Gamoventure: a local-first restaurant point-of-sale and kitchen system in Ulhasnagar, and a seven-page transport business website in Bhiwandi, Maharashtra."
        aside={
          <div>
            <p>Both engagements are currently in development. Production outcomes will be published only after live verification.</p>
            <p className="hero-updated">Last updated {siteLastUpdatedDisplay}</p>
          </div>
        }
      />
      <section className="chapter work-index-chapter">
        <div className="page-shell">
          <Link className="work-index-card reveal-block" href="/work/egg-express-pos">
            <div className="work-index-image" data-visual-frame><Image src="/images/egg-express/outlet.webp" alt="Egg Express food outlet in Ulhasnagar, Maharashtra" fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
            <div className="work-index-info">
              <p className="status-line"><span /> Active client engagement · Currently in development</p>
              <h2>Egg Express POS</h2>
              <p>Point of sale and kitchen operations designed to work without internet for a food outlet in Ulhasnagar, Maharashtra.</p>
              <div className="work-index-meta"><span>Business systems</span><span>Product engineering</span><span>Ongoing delivery</span></div>
              <span className="text-link">Read the case study <i aria-hidden="true">↗</i></span>
            </div>
            <div className="work-index-product"><EggProductVisual /></div>
          </Link>
          <article className="work-engagement reveal-block" id="shree-maruti" aria-labelledby="shree-maruti-title">
            <ShreeMarutiPreview />
            <div>
              <p className="status-line"><span /> Client website · In development</p>
              <h2 id="shree-maruti-title">Shree Maruti Transport Services</h2>
              <p>A business website for a chemical and liquid cargo transporter based in Bhiwandi, Maharashtra.</p>
            </div>
            <div>
              <p>The current build presents services, fleet information, safety and technology, and regional coverage. An enquiry form helps visitors prepare their transport requirements.</p>
              <p>Page content and launch details remain under review. The enquiry flow currently prepares a copyable draft; it does not send enquiries.</p>
              <ul><li>Seven-page business website</li><li>Fleet gallery and coverage map</li><li>Transport enquiry preparation</li></ul>
              <p className="work-secondary-link"><Link href="/services/business-websites">Explore our business website packages</Link></p>
            </div>
          </article>
        </div>
      </section>
      <ContactCTA eyebrow="Facing a similar operational challenge?" title="Let's turn the bottleneck into a system that works." />
    </SitePage>
  );
}
