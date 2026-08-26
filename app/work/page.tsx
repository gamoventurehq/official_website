import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { EggProductVisual } from "@/components/EggProductVisual";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected digital product and business system work from Gamoventure.",
};

export default function WorkPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Selected work"
        title={<>Real problems. Purpose-built responses.</>}
        copy="We would rather show one engagement honestly than fill a portfolio with borrowed outcomes. This is where the work, decisions, and progress live."
        aside={<p>Our first published engagement is actively being developed. Production outcomes will be added only when they can be verified.</p>}
      />
      <section className="chapter work-index-chapter">
        <div className="page-shell">
          <Link className="work-index-card reveal-block" href="/work/egg-express-pos">
            <div className="work-index-image" data-visual-frame><Image src="/images/egg-express/outlet.webp" alt="Egg Express food outlet" fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
            <div className="work-index-info">
              <p className="status-line"><span /> Active client engagement · Currently in development</p>
              <h2>Egg Express POS</h2>
              <p>Local-first point of sale and kitchen operations for a food outlet in Ulhasnagar, Maharashtra.</p>
              <div className="work-index-meta"><span>Business systems</span><span>Product engineering</span><span>Ongoing delivery</span></div>
              <span className="text-link">Read the case study <i aria-hidden="true">↗</i></span>
            </div>
            <div className="work-index-product"><EggProductVisual /></div>
          </Link>
        </div>
      </section>
      <ContactCTA eyebrow="Facing a similar operational challenge?" title="Let’s turn the bottleneck into a system that works." />
    </SitePage>
  );
}
