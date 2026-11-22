import { faqJsonLd, type FaqItem } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function FaqSection({
  id = "faq-heading",
  eyebrow = "Common questions",
  heading = "Frequently asked questions.",
  faqs,
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  faqs: readonly FaqItem[];
}) {
  return (
    <section className="faq-section" aria-labelledby={id}>
      <JsonLd data={faqJsonLd(faqs)} />
      <header className="faq-header">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{heading}</h2>
      </header>
      <dl className="faq-list">
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.question}>
            <dt>{faq.question}</dt>
            <dd>{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
