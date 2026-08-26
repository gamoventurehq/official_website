import Image from "next/image";
import Link from "next/link";
import { FloatingPathsBackground } from "./FloatingPathsBackground";
import { SplashReplayButton } from "./SplashReplayButton";

export function Hero() {
  return (
    <section className="hero" id="top">
      <FloatingPathsBackground variant="hero" />

      <div className="page-shell hero-layout">
        <div className="hero-copy">
          <h1 className="max-w-hero hero-title">
            We build digital products that move businesses forward.
          </h1>

          <div className="hero-support">
            <p>
              Gamoventure turns business challenges into purpose-built digital experiences,
              operational systems, and software products.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/contact">Discuss your project <span aria-hidden="true">↗</span></Link>
              <Link className="button button-ghost" href="/work">Explore our work <span aria-hidden="true">↘</span></Link>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-label="Gamoventure emblem study">
          <div className="hero-art-grid" aria-hidden="true" />
          <div className="hero-art-halo" aria-hidden="true" />
          <div className="hero-art-mark">
            <Image
              src="/logos/generated/symbol_full.png"
              alt="Gamoventure emblem"
              fill
              sizes="(max-width: 760px) 90vw, 46vw"
              priority
            />
          </div>
          <SplashReplayButton />
        </div>
      </div>
    </section>
  );
}
