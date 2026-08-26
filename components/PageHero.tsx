import type { ReactNode } from "react";
import { FloatingPathsBackground } from "./FloatingPathsBackground";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, copy, aside }: PageHeroProps) {
  return (
    <section className="page-hero">
      <FloatingPathsBackground />
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
