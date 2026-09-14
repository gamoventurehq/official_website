import Link from "next/link";
import type { ServicePricing as ServicePricingData } from "@/lib/services";

export function ServicePricing({ pricing }: { pricing: ServicePricingData }) {
  return (
    <section className="page-shell website-pricing" aria-labelledby="website-pricing-title">
      <header className="website-pricing-intro">
        <p className="eyebrow">{pricing.eyebrow}</p>
        <h2 id="website-pricing-title">{pricing.heading}</h2>
        <p>{pricing.intro}</p>
      </header>
      <div className="website-package-grid">
        {pricing.packages.map((pkg) => (
          <article className="website-package" key={pkg.name}>
            <h3>{pkg.name}</h3>
            <p className="website-package-price">{pkg.price}</p>
            <p>Fixed price for the scope below.</p>
            <ul>{pkg.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="website-pricing-notes">
        <h3>How the scope works</h3>
        <dl>{pricing.notes.map((note) => (
          <div key={note.title}><dt>{note.title}</dt><dd>{note.copy}</dd></div>
        ))}</dl>
      </div>
      <div className="website-pricing-exclusions">
        <h3>Outside both packages</h3>
        <ul>{pricing.exclusions.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>We may quote these requirements separately where we can support them.</p>
      </div>
      <div className="website-pricing-action">
        <Link className="button button-dark" href="/contact">Discuss your website</Link>
        <p>We confirm fit and scope before accepting your project.</p>
      </div>
    </section>
  );
}
