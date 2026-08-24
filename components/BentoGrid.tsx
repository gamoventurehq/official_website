"use client";

import { useState, useEffect } from "react";
import { TrendingUpIcon, BuildingIcon, CameraIcon, ArrowUpRight, CloseIcon } from "./icons";

type CaseStudy = {
  id: string;
  title: string;
  client: string;
  sector: string;
  kpi: string;
  kpiLabel: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  impactMetrics: { value: string; label: string }[];
};

const caseStudies: Record<string, CaseStudy> = {
  grandview: {
    id: "grandview",
    title: "The Grandview Osteria & Sommelier Lounge",
    client: "The Grandview Hospitality Group",
    sector: "Hospitality & Fine Dining",
    kpi: "+210%",
    kpiLabel: "Inbound Direct Bookings",
    challenge:
      "Heavy reliance on third-party aggregators was costing the venue 18% in commission fees per booking while disconnecting guests from their curated culinary and sommelier experience.",
    solution:
      "Gamoventure engineered a bespoke sensory digital menu and direct zero-commission reservation engine with automated SMS confirmations, pre-paid deposit locks, and an exclusive VIP private dining inquiry funnel.",
    deliverables: [
      "Interactive Digital Sommelier Pairing Experience",
      "Direct Table Reservation Engine (Zero Fees)",
      "Automated SMS & Calendar Booking Sync",
      "Local Culinary Map Pack & Geo-Targeting",
    ],
    impactMetrics: [
      { value: "+210%", label: "Direct Table Bookings" },
      { value: "$0", label: "Third-Party Fees Paid" },
      { value: "98%", label: "Weekend Occupancy Rate" },
    ],
  },
  aura: {
    id: "aura",
    title: "Aura Facial Aesthetics & Medical Studio",
    client: "Dr. Alistair Vance, Medical Director",
    sector: "Medical & Dental Clinics",
    kpi: "+165%",
    kpiLabel: "New Patient Consultations",
    challenge:
      "Staff were spending 4+ hours daily answering repetitive procedure questions and managing intake paper forms, causing high patient drop-off before scheduled consultations.",
    solution:
      "Architected a frictionless digital patient portal with interactive procedure catalogs, before-and-after aesthetic galleries, and automated pre-screening medical questionnaires.",
    deliverables: [
      "Frictionless Online Patient Intake Flow",
      "Physician Calendar & Procedure Scheduler",
      "Interactive Aesthetic Treatment Showcase",
      "HIPAA-Ready Intake Security & Local SEO",
    ],
    impactMetrics: [
      { value: "+165%", label: "New Patient Consultations" },
      { value: "85%", label: "Reduction in Phone Intake Lag" },
      { value: "4.9★", label: "Patient Satisfaction Score" },
    ],
  },
  kapadia: {
    id: "kapadia",
    title: "Kapadia & Co. Chartered Accountants",
    client: "Kapadia & Associates LLP",
    sector: "Chartered Accountancy & Finance",
    kpi: "3.4×",
    kpiLabel: "Retainer Inquiries Multiplier",
    challenge:
      "An outdated web presence failed to communicate the firm's deep corporate finance rigor, making high-net-worth client onboarding during peak tax quarters chaotic and manual.",
    solution:
      "Designed an institutional corporate flagship featuring secure client document intake funnels, tax season onboarding questionnaires, and a high-trust private client advisory portal.",
    deliverables: [
      "Institutional Corporate Web Architecture",
      "Tax Season Onboarding Questionnaire",
      "Secure Client Document Intake Portal",
      "High-Net-Worth Advisory Lead Engine",
    ],
    impactMetrics: [
      { value: "3.4×", label: "Corporate Retainer Surge" },
      { value: "100%", label: "Audit Accuracy Index" },
      { value: "24-hr", label: "Client Onboarding Time" },
    ],
  },
  vanguard: {
    id: "vanguard",
    title: "Studio Vanguard Creator Media Platform",
    client: "Studio Vanguard Media",
    sector: "Creators & Influencer Talent",
    kpi: "$1.2M+",
    kpiLabel: "Brand Partnerships Facilitated",
    challenge:
      "Static PDF media kits were frequently outdated, slow to distribute, and created significant friction when negotiating high-value brand partnerships.",
    solution:
      "Built a live-telemetry digital media kit with verified audience demographics, dynamic rate cards, direct sponsorship booking pipelines, and high-velocity product drop pages.",
    deliverables: [
      "Live-Telemetry Audience & Engagement Kit",
      "Direct Brand Sponsorship Booking Engine",
      "High-Velocity Merch & Digital Drop Pages",
      "VIP Press & Management Inquiry Hub",
    ],
    impactMetrics: [
      { value: "$1.2M+", label: "Brand Deals Facilitated" },
      { value: "4.8×", label: "Faster Deal Turnaround" },
      { value: "850K+", label: "Monthly Audience Reach" },
    ],
  },
};

export function BentoGrid() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Lock background scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setActiveModal(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeModal]);

  const activeStudy = activeModal ? caseStudies[activeModal] : null;

  return (
    <section className="section-pad shell" id="flagships">
      <div className="section-head-split">
        <div>
          <div className="kicker-claret">
            <span aria-hidden="true" />
            Featured Commercial Flagships
          </div>
          <h2 className="section-h2-large">
            Visual distinction.<br />
            <em>Tangible business growth.</em>
          </h2>
        </div>
        <p className="section-desc-lead">
          Explore select transformations crafted for premier dining destinations,
          high-volume medical practices, chartered accountancy firms, and distinguished creators.
          Click any card to inspect the full case study.
        </p>
      </div>

      {/* 12-Column Mathematically Gapless Bento Grid */}
      <div className="bento-grid-venture">
        {/* Cell 1: Grandview Osteria & Lounge (Span 7) */}
        <article
          className="bento-card-hybrid bento-cell-7"
          onClick={() => setActiveModal("grandview")}
          style={{ cursor: "pointer" }}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => e.key === "Enter" && setActiveModal("grandview")}
          aria-label="View Grandview Osteria case study"
        >
          <div className="bento-visual-surface">
            <div
              style={{
                width: "270px",
                background: "#141210",
                border: "1px solid var(--border-gold)",
                borderRadius: "14px",
                padding: "24px 20px",
                boxShadow: "0 20px 48px rgba(0,0,0,0.8)",
                transform: "rotate(-2deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent-gold)" }}>
                  FINE DINING OS · TABLE RSVP
                </span>
                <span className="status-dot-pulse" />
              </div>
              <strong
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "19px",
                  color: "var(--text-light)",
                  lineHeight: "1.25",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                The Grandview Osteria & Sommelier Bar
              </strong>
              <div
                style={{
                  height: "70px",
                  background: "linear-gradient(135deg, rgba(203,178,106,0.15) 0%, rgba(153,15,61,0.12) 100%)",
                  borderRadius: "6px",
                  border: "1px dashed var(--border-hairline-bright)",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--accent-gold)",
                }}
              >
                &lt; 98% Weekend Table Occupancy &gt;
              </div>
            </div>
          </div>

          <div className="bento-info-bar">
            <div>
              <p className="bento-tag-mono">Hospitality & Dining · Inspect Blueprint</p>
              <h3 className="bento-title-serif">Grandview Osteria Digital Architecture</h3>
            </div>
            <div>
              <span className="kpi-pill-gold">
                <TrendingUpIcon />
                +210% Direct Bookings
              </span>
            </div>
          </div>
        </article>

        {/* Cell 2: Aura Aesthetics & Medical Practice (Span 5) */}
        <article
          className="bento-card-hybrid bento-cell-5"
          onClick={() => setActiveModal("aura")}
          style={{ cursor: "pointer" }}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => e.key === "Enter" && setActiveModal("aura")}
          aria-label="View Aura Facial Aesthetics case study"
        >
          <div className="bento-visual-surface">
            <div
              style={{
                width: "200px",
                height: "210px",
                background: "linear-gradient(145deg, #292524 0%, #171412 100%)",
                border: "1px solid var(--border-hairline-bright)",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "24px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
                transform: "rotate(3deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "44px", color: "var(--accent-gold)", fontStyle: "italic", lineHeight: "1" }}>
                Aura
              </span>
              <div>
                <small style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--accent-gold)", display: "block" }}>
                  CLINICAL CONSULTATIONS
                </small>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-light)" }}>
                  Zero-Friction Intake
                </span>
              </div>
            </div>
          </div>

          <div className="bento-info-bar">
            <div>
              <p className="bento-tag-mono">Medical & Dental · Inspect Blueprint</p>
              <h3 className="bento-title-serif">Aura Facial Aesthetics Studio</h3>
            </div>
            <div>
              <span className="kpi-pill-claret">
                <TrendingUpIcon />
                +165% New Patients
              </span>
            </div>
          </div>
        </article>

        {/* Cell 3: Kapadia & Co. Chartered Accountants (Span 4) */}
        <article
          className="bento-card-hybrid bento-cell-4"
          onClick={() => setActiveModal("kapadia")}
          style={{ cursor: "pointer" }}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => e.key === "Enter" && setActiveModal("kapadia")}
          aria-label="View Kapadia & Co case study"
        >
          <div className="bento-visual-surface">
            <div
              style={{
                width: "88%",
                background: "#0c0a09",
                border: "1px solid var(--border-hairline)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 16px 36px rgba(0,0,0,0.6)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <BuildingIcon />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent-gold)" }}>
                  CA PRACTICE PORTAL
                </span>
              </div>
              <strong style={{ fontFamily: "var(--font-serif)", fontSize: "18px", display: "block", lineHeight: "1.3", color: "var(--text-light)" }}>
                Institutional Tax Advisory
              </strong>
            </div>
          </div>

          <div className="bento-info-bar">
            <div>
              <p className="bento-tag-mono">Chartered Accountancy · Inspect</p>
              <h3 className="bento-title-serif">Kapadia & Co. Flagship</h3>
            </div>
            <div>
              <span className="kpi-pill-gold">3.4× Retainers</span>
            </div>
          </div>
        </article>

        {/* Cell 4: Studio Vanguard Creator Media Hub (Span 8) */}
        <article
          className="bento-card-hybrid bento-cell-8"
          onClick={() => setActiveModal("vanguard")}
          style={{ cursor: "pointer" }}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => e.key === "Enter" && setActiveModal("vanguard")}
          aria-label="View Studio Vanguard Media case study"
        >
          <div
            className="bento-visual-surface"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "36px 44px",
              gap: "30px",
            }}
          >
            <div>
              <div className="kicker-gold" style={{ marginBottom: "10px" }}>
                <span aria-hidden="true" />
                Creator Economy Flagship
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(22px, 2.4vw, 32px)",
                  margin: 0,
                  lineHeight: "1.2",
                  maxWidth: "460px",
                  color: "var(--text-light)",
                }}
              >
                Dynamic media kits, brand deal engines, and VIP sponsorship portals.
              </h3>
            </div>

            <div style={{ display: "flex", gap: "36px" }}>
              <div>
                <strong style={{ fontFamily: "var(--font-serif)", fontSize: "38px", color: "var(--accent-gold)", display: "block", lineHeight: "1" }}>
                  $1.2M+
                </strong>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-warm)", letterSpacing: "1px", textTransform: "uppercase" }}>
                  Deals Facilitated
                </span>
              </div>
              <div>
                <strong style={{ fontFamily: "var(--font-serif)", fontSize: "38px", color: "var(--accent-gold)", display: "block", lineHeight: "1" }}>
                  4.8×
                </strong>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-warm)", letterSpacing: "1px", textTransform: "uppercase" }}>
                  Faster Closings
                </span>
              </div>
            </div>
          </div>

          <div className="bento-info-bar">
            <div>
              <p className="bento-tag-mono">Media Brand & Influence · Inspect</p>
              <h3 className="bento-title-serif">Studio Vanguard Omnichannel Hub</h3>
            </div>
            <div>
              <span className="kpi-pill-claret">
                <CameraIcon />
                Omnichannel Media
              </span>
            </div>
          </div>
        </article>
      </div>

      {/* Interactive Case Study Modal Drawer */}
      {activeStudy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeStudy.title}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(12, 10, 9, 0.85)",
            backdropFilter: "blur(18px)",
            display: "grid",
            placeItems: "center",
            padding: "20px",
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            style={{
              background: "var(--surface-card)",
              border: "1px solid var(--border-gold)",
              borderRadius: "20px",
              maxWidth: "720px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "clamp(28px, 4vw, 44px)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.9)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
              <div>
                <div className="kicker-claret" style={{ marginBottom: "8px" }}>
                  <span aria-hidden="true" />
                  {activeStudy.sector}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(24px, 3vw, 32px)",
                    color: "var(--text-light)",
                    margin: "0 0 6px",
                    lineHeight: "1.2",
                  }}
                >
                  {activeStudy.title}
                </h3>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-warm)" }}>
                  Client: {activeStudy.client}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid var(--border-hairline)",
                  borderRadius: "50%",
                  width: "38px",
                  height: "38px",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--text-light)",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                aria-label="Close Case Study"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Impact Metric Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "14px",
                background: "#141210",
                border: "1px solid var(--border-hairline)",
                borderRadius: "12px",
                padding: "16px 20px",
                marginBottom: "28px",
              }}
            >
              {activeStudy.impactMetrics.map((m) => (
                <div key={m.label}>
                  <strong style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "var(--accent-gold)", display: "block", lineHeight: "1" }}>
                    {m.value}
                  </strong>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-warm)", textTransform: "uppercase" }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div style={{ display: "grid", gap: "20px", marginBottom: "28px" }}>
              <div>
                <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#ff477e", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 8px" }}>
                  Operational Bottleneck
                </h4>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.7", color: "var(--text-warm)" }}>
                  {activeStudy.challenge}
                </p>
              </div>

              <div>
                <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 8px" }}>
                  Gamoventure Architectural Solution
                </h4>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.7", color: "var(--text-light)" }}>
                  {activeStudy.solution}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            <div style={{ marginBottom: "32px" }}>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 12px" }}>
                Production Deliverables
              </h4>
              <div style={{ display: "grid", gap: "8px" }}>
                {activeStudy.deliverables.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--text-light)" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent-gold)" }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Action CTA */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-hairline)", paddingTop: "20px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-warm)" }}>
                Ready to transform your {activeStudy.sector.toLowerCase()} practice?
              </span>
              <a
                href="#contact"
                onClick={() => setActiveModal(null)}
                className="btn-gold"
                style={{ padding: "10px 20px", fontSize: "13px" }}
              >
                <span>Request {activeStudy.sector} Blueprint</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
