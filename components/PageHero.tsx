import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, copy, aside }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-ambient" aria-hidden="true" />
      <div className="page-shell page-hero-layout">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        {aside ? <div className="page-hero-aside">{aside}</div> : null}
      </div>
    </section>
  );
}
