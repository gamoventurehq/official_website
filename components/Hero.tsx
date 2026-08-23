import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "./icons";

export function Hero() {
  return (
    <section className="hero-executive shell" id="top">
      <div className="hero-meta-badge">
        <span>Gaurav · Founder & Principal Partner</span>
      </div>

      {/* 2-Line Strict Guarantee with Ultra-Wide container & Inline Symbol Badge */}
      <h1 className="hero-headline-main">
        Elevating distinguished{" "}
        <span
          className="hero-headline-logo-badge"
          style={{
            backgroundImage: "url('/logos/symbol.png')",
          }}
          aria-hidden="true"
        />{" "}
        local enterprises, clinics & <em>creators into market leaders.</em>
      </h1>

      <div className="hero-layout-grid">
        <div>
          <p className="hero-body-paragraph">
            I am the founder of Gamoventure. We partner with ambitious restaurants, medical clinics,
            chartered accountancy firms, and high-growth creators to architect bespoke digital flagships,
            automated booking engines, and visual identities that command market authority.
          </p>

          <div className="hero-action-cluster">
            <a href="#flagships" className="btn-gold">
              <span>Explore Visual Flagships</span>
              <ArrowRight />
            </a>
            <a href="#contact" className="btn-navy-pill">
              <span>Request Private Consultation</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>

        {/* Ambient Holographic Card with Gamoventure Brand Crest */}
        <div className="hero-hologram-card">
          <div className="hologram-glow-orbit" aria-hidden="true" />

          <div className="hologram-logo-center">
            <Image
              src="/logos/logo_without_bg.png"
              alt="Gamoventure Official Crest"
              width={76}
              height={76}
              className="hologram-img-logo"
              priority
            />
            <div className="hologram-title">
              <h4>Gamoventure Studio</h4>
              <p>Private Client Practice</p>
            </div>
          </div>

          <div className="hologram-foot-stats">
            <span>Specialization: Bespoke Digital Flagships</span>
            <span>Focus: Hospitality · Clinics · CA · Creators</span>
          </div>
        </div>
      </div>

      {/* 3-Column Small-Caps JetBrains Mono Stat Strip */}
      <div className="mono-stat-strip">
        <div className="mono-stat-item">
          <small>01 / CORE SECTORS SERVED</small>
          <strong>Hospitality, Clinics & CA</strong>
          <span>Tailored commercial architectures</span>
        </div>
        <div className="mono-stat-item">
          <small>02 / CLIENT ACQUISITION</small>
          <strong>+140% Inbound Surge</strong>
          <span>Frictionless reservation & intake funnels</span>
        </div>
        <div className="mono-stat-item">
          <small>03 / BESPOKE EXCELLENCE</small>
          <strong>100% Custom Tailored</strong>
          <span>Zero templates · Direct founder oversight</span>
        </div>
      </div>
    </section>
  );
}
