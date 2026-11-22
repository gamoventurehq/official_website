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
            Custom software, business websites, and operational systems.
          </h1>

          <div className="hero-support">
            <p>
              Gamoventure is an independent software and web development studio working with
              businesses across India and internationally. We design and engineer fixed-scope
              business websites at ₹10,000 and ₹25,000, customer portals, local-first point-of-sale
              and inventory systems, and custom software products built around daily operations.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/contact">Discuss your project <span aria-hidden="true">↗</span></Link>
              <Link className="button button-ghost" href="/work">Explore our work <span aria-hidden="true">↘</span></Link>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-label="Gamoventure emblem study">
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
