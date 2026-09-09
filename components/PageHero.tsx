import type { ReactNode } from "react";
import { FloatingPathsBackground } from "./FloatingPathsBackground";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  copy: string;
  aside?: ReactNode;
  compact?: boolean;
};

export function PageHero({ eyebrow, title, copy, aside, compact = false }: PageHeroProps) {
  return (
    <section className={`page-hero${compact ? " page-hero--compact" : ""}`}>
      <FloatingPathsBackground />
      <div className="page-shell page-hero-layout">
        <div className="page-hero-copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        {aside ? <div className="page-hero-aside">{aside}</div> : null}
      </div>
    </section>
  );
}
