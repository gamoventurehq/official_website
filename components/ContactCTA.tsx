import Link from "next/link";

type ContactCTAProps = {
  eyebrow?: string;
  title?: string;
};

export function ContactCTA({
  eyebrow = "Bring us the challenge",
  title = "You do not need a finished specification to start.",
}: ContactCTAProps) {
  return (
    <section className="chapter closing-chapter">
      <div className="page-shell closing-panel reveal-block">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>Bring us the problem, the bottleneck, or the idea. We’ll help define what should be built.</p>
        </div>
        <Link className="button button-light" href="/contact">Discuss your project <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
