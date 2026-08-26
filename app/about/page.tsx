import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { principles } from "@/components/siteContent";

export const metadata: Metadata = {
  title: "About",
  description: "Learn what Gamoventure believes, how the independent studio works, and where it is going.",
};

export default function AboutPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Small by design. Ambitious by nature."
        title={<>A focused studio built to stay close to the problem.</>}
        copy="Gamoventure combines product thinking, engineering, and commercial understanding to create useful technology for growing businesses."
        aside={<p>Independent, collaborative, and accountable from the first conversation to what happens after launch.</p>}
      />

      <section className="chapter about-belief">
        <div className="page-shell about-belief-layout reveal-block">
          <div className="about-mark" data-visual-frame><Image src="/logos/generated/symbol_full.png" alt="Gamoventure emblem" fill sizes="(max-width: 900px) 90vw, 42vw" /></div>
          <div><p className="eyebrow">What we believe</p><h2>Ambitious businesses deserve technology shaped around how they actually work.</h2><p>That means starting with the real operation, resisting generic answers, and building a solution that makes sense for the people expected to use it.</p></div>
        </div>
      </section>

      <section className="chapter why-chapter">
        <div className="page-shell pin-layout why-layout">
          <div className="pin-copy"><p className="eyebrow">Why Gamoventure exists</p><h2>To make considered digital capability more accessible.</h2></div>
          <div className="pin-stack why-copy">
            <p>Many local and growing businesses are underserved by software that is either too generic, too restrictive, or priced far beyond the value it creates for them.</p>
            <p>We exist to close that gap with premium, practical work at an accessible early-stage price—without positioning quality as a race to the bottom.</p>
            <p>Our role is to understand what the business is trying to achieve, identify where technology can create real leverage, and take responsibility for turning that direction into something useful.</p>
          </div>
        </div>
      </section>

      <section className="chapter principles-chapter about-principles">
        <div className="page-shell">
          <header className="chapter-heading reveal-block"><p className="eyebrow">How we operate</p><h2>Practical values, visible in the work.</h2><p>A small founding team means short decision paths, close collaboration, and direct accountability.</p></header>
          <div className="principles-grid">{principles.map((principle) => <article className="principle reveal-block" key={principle.title}><h3>{principle.title}</h3><p>{principle.copy}</p></article>)}</div>
        </div>
      </section>

      <section className="chapter future-chapter">
        <div className="page-shell future-layout reveal-block">
          <p className="eyebrow">Where we are going</p>
          <h2>Client work creates value today—and strengthens what we can build tomorrow.</h2>
          <p>As Gamoventure grows, the insight and operating strength developed through real client problems will support a second track: original products of our own. The service studio remains a deliberate part of that future, not merely a temporary step.</p>
        </div>
      </section>
      <ContactCTA />
    </SitePage>
  );
}
