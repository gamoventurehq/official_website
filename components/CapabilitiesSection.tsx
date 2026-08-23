"use client";

import { useState } from "react";
import { ArrowUpRight } from "./icons";

const capabilities = [
  {
    num: "01",
    title: "Bespoke Digital Flagships & Web Architecture",
    desc: "We design and build award-caliber web flagships tailored to your exact commercial model. We replace slow, generic templates with fast, visually stunning digital experiences that position your business as the undisputed leader in your local market.",
    deliverables: [
      "Custom Digital Flagship Design",
      "Mobile-First Touch & Gestural UI",
      "Interactive Menus, Catalogs & Portfolios",
      "Zero-Lag Cloud Performance",
    ],
  },
  {
    num: "02",
    title: "Automated Booking, Intake & CRM Integration",
    desc: "We eliminate administrative friction and phone-tag. We design intuitive self-service reservation engines for dining venues, HIPAA-ready patient intake portals for clinics, and secure onboarding questionnaires for CA and wealth advisory firms.",
    deliverables: [
      "Zero-Commission Table Reservation Engines",
      "Patient Intake & Medical History Funnels",
      "Automated SMS & Email Confirmation Sequences",
      "Direct Calendar & CRM Syncing",
    ],
  },
  {
    num: "03",
    title: "Visual Brand Systems & Creative Direction",
    desc: "We build timeless, high-prestige visual identities. From physical & digital menu typography for cocktail lounges to corporate stationery for financial advisors and dynamic media kits for influencers, we ensure complete brand consistency.",
    deliverables: [
      "Brand Identity & Logo Typography",
      "Physical & Digital Menu Design",
      "Influencer & Creator Media Kits",
      "Art Direction & Visual Asset Libraries",
    ],
  },
  {
    num: "04",
    title: "Local Market Dominance & Search Authority",
    desc: "We position your business at the top of high-intent local search queries. When nearby customers, patients, or corporate clients search for premier dining, specialist care, or tax consultation, your flagship commands top visibility.",
    deliverables: [
      "Google Local Map Pack Optimization",
      "High-Intent Keyword & Geo-Targeting",
      "Reputation & Google Review Growth Systems",
      "Schema Markup & Local Citations",
    ],
  },
];

const protocolSteps = [
  {
    step: "01",
    name: "Commercial Audit & Discovery",
    desc: "We conduct an in-depth operational review to pinpoint booking friction, analyze local competitors, and define your unique market positioning.",
  },
  {
    step: "02",
    name: "Architectural Blueprint & Prototyping",
    desc: "We design full-fidelity visual mockups, reservation flows, and custom brand assets for your executive review before writing a single line of code.",
  },
  {
    step: "03",
    name: "Production Launch & Ongoing Advisory",
    desc: "We deploy your bespoke flagship, train your staff on the automated intake systems, and provide continuous advisory to maximize client acquisition.",
  },
];

export function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section className="capabilities-section-hybrid section-pad" id="advisory">
      <div className="shell">
        <div className="capabilities-grid-hybrid">
          {/* Pinned Left Narrative Column */}
          <div className="capabilities-pinned-box">
            <div className="kicker-claret">
              <span aria-hidden="true" />
              Strategic Capabilities & Advisory
            </div>
            <h2 className="section-h2-large">
              Uncompromising craft.<br />
              <em>Tailored for your business.</em>
            </h2>
            <p className="section-desc-lead">
              You collaborate directly with Gaurav. We provide senior-level architectural
              guidance, eliminate agency bloat, and build digital flagships that yield
              tangible commercial returns.
            </p>
            <div style={{ marginTop: "32px" }}>
              <a href="#contact" className="btn-gold" style={{ width: "fit-content" }}>
                <span>Request Private Consultation</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Right Scrolling Capability Cards */}
          <div>
            {capabilities.map((cap, idx) => (
              <article
                className="capability-card-tech"
                key={cap.num}
                onClick={() => setActiveTab(activeTab === idx ? null : idx)}
                style={{ cursor: "pointer" }}
              >
                <div className="capability-header-row">
                  <span className="capability-num-gold">{cap.num}</span>
                  <h3>{cap.title}</h3>
                </div>
                <p>{cap.desc}</p>
                <div className="deliverable-pills-row">
                  {cap.deliverables.map((item) => (
                    <span className="deliverable-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* The 3-Step Engagement Protocol Section */}
        <div style={{ marginTop: "100px", borderTop: "1px solid var(--border-hairline)", paddingTop: "70px" }} id="protocol">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="kicker-gold" style={{ justifyContent: "center" }}>
              <span aria-hidden="true" />
              The Engagement Protocol
              <span aria-hidden="true" />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(26px, 3.2vw, 42px)",
                margin: "0",
                color: "var(--text-light)",
              }}
            >
              A disciplined, three-stage advisory process.
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {protocolSteps.map((s) => (
              <div
                key={s.step}
                style={{
                  background: "var(--surface-card)",
                  border: "1px solid var(--border-hairline)",
                  borderRadius: "16px",
                  padding: "32px 26px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--accent-gold)",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  PHASE {s.step}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "20px",
                    margin: "0 0 10px",
                    color: "var(--text-light)",
                  }}
                >
                  {s.name}
                </h4>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.65", color: "var(--text-warm)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
