"use client";

import { useState } from "react";
import {
  UtensilsIcon,
  StethoscopeIcon,
  BuildingIcon,
  CameraIcon,
  ArrowUpRight,
  ShieldCheckIcon,
} from "./icons";

type SectorData = {
  id: string;
  name: string;
  badge: string;
  icon: typeof UtensilsIcon;
  kicker: string;
  title: string;
  description: string;
  deliverables: string[];
  statNumber: string;
  statLabel: string;
  secondaryStat: string;
  secondaryLabel: string;
  uiType: "restaurant" | "clinic" | "finance" | "creator";
};

const sectors: SectorData[] = [
  {
    id: "hospitality",
    name: "Restaurants & Bars",
    badge: "Fine Dining & Lounges",
    icon: UtensilsIcon,
    kicker: "Hospitality Flagships // Reservation Architecture",
    title: "Sensory digital menus & zero-commission table reservation engines.",
    description:
      "We design bespoke digital flagships for premier dining venues, cocktail bars, and hospitality groups. We replace clunky PDF menus with interactive sommelier experiences and eliminate third-party commission fees with direct reservation funnels.",
    deliverables: [
      "Bespoke Interactive Digital Menu & Sommelier Pairing",
      "Direct Table Reservation & Deposit Automation",
      "VIP Private Dining & Event Inquiries Funnel",
      "Local Culinary SEO & Google Maps Dominance",
    ],
    statNumber: "+210%",
    statLabel: "Inbound Direct Bookings",
    secondaryStat: "$0",
    secondaryLabel: "Third-Party Booking Commission",
    uiType: "restaurant",
  },
  {
    id: "clinics",
    name: "Medical & Dental Clinics",
    badge: "Healthcare & Aesthetics",
    icon: StethoscopeIcon,
    kicker: "Clinical Intake // Patient Acquisition",
    title: "Frictionless patient onboarding & high-trust specialist scheduling.",
    description:
      "We build welcoming, high-authority digital platforms for dental studios, aesthetic practices, and specialty medical centres. We turn hesitant visitors into scheduled consultations with automated pre-screening and clear treatment pathways.",
    deliverables: [
      "Frictionless Patient Intake & Automated Booking",
      "Interactive Treatment & Procedure Catalogs",
      "Physician Profiles & Aesthetic Outcome Showcases",
      "High-Trust Compliance & Local Reputation Engine",
    ],
    statNumber: "+165%",
    statLabel: "New Patient Consultations",
    secondaryStat: "85%",
    secondaryLabel: "Reduction in Phone Intake Lag",
    uiType: "clinic",
  },
  {
    id: "finance",
    name: "CA & Financial Firms",
    badge: "Wealth & Advisory",
    icon: BuildingIcon,
    kicker: "Corporate Finance // Institutional Flagships",
    title: "Institutional prestige & streamlined high-net-worth client onboarding.",
    description:
      "We elevate Chartered Accountancy practices, tax advisors, and wealth management firms into commanding market authorities. Our architectures communicate deep financial rigor and automate client document intake during critical tax cycles.",
    deliverables: [
      "Institutional Corporate Web Architecture",
      "Tax Season Automated Onboarding Questionnaire",
      "Secure Client Portal & Document Intake",
      "High-Net-Worth Advisory Lead Capture",
    ],
    statNumber: "3.4×",
    statLabel: "Retainer Inquiries Multiplier",
    secondaryStat: "100%",
    secondaryLabel: "Institutional Trust Index",
    uiType: "finance",
  },
  {
    id: "creators",
    name: "Creators & Influencers",
    badge: "Media Brands & Agencies",
    icon: CameraIcon,
    kicker: "Media Platforms // Sponsorship Engines",
    title: "Dynamic media kits & high-conversion brand partnership portals.",
    description:
      "We transform leading content creators, personal brands, and boutique agencies into enterprise media powerhouses. We replace outdated PDF media kits with live telemetry showcases and direct brand deal booking pipelines.",
    deliverables: [
      "Dynamic Live-Telemetry Media Kit Platform",
      "Direct Brand Sponsorship Booking & Rate Engine",
      "High-Velocity Merch & Exclusive Product Drop Pages",
      "VIP Press & Management Inquiry Funnel",
    ],
    statNumber: "$1.2M+",
    statLabel: "Brand Partnerships Facilitated",
    secondaryStat: "4.8×",
    secondaryLabel: "Faster Deal Closes",
    uiType: "creator",
  },
];

export function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState<string>("hospitality");
  const current = sectors.find((s) => s.id === activeTab) || sectors[0];

  return (
    <section className="section-pad shell" id="solutions">
      <div className="section-head-split">
        <div>
          <div className="kicker-claret">
            <span aria-hidden="true" />
            Tailored Industry Solutions
          </div>
          <h2 className="section-h2-large">
            Bespoke architectures.<br />
            <em>Engineered for your industry.</em>
          </h2>
        </div>
        <p className="section-desc-lead">
          We understand the precise commercial mechanics of your sector. Whether you run a premier dining
          room, a high-volume medical clinic, an advisory firm, or an influential media brand, we build
          platforms that convert.
        </p>
      </div>

      {/* Sector Selection Tabs */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "14px",
          marginBottom: "32px",
          borderBottom: "1px solid var(--border-hairline)",
        }}
      >
        {sectors.map((sector) => {
          const Icon = sector.icon;
          const isActive = sector.id === activeTab;
          return (
            <button
              key={sector.id}
              type="button"
              onClick={() => setActiveTab(sector.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 20px",
                borderRadius: "9999px",
                background: isActive ? "var(--surface-card-elevated)" : "transparent",
                border: isActive ? "1px solid var(--border-gold)" : "1px solid transparent",
                color: isActive ? "var(--accent-gold)" : "var(--text-warm)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
            >
              <Icon />
              <span>{sector.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Solution Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "40px",
          background: "var(--surface-card)",
          border: "1px solid var(--border-hairline)",
          borderRadius: "20px",
          padding: " clamp(28px, 4vw, 50px)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Left Column: Solution Details & Commercial Deliverables */}
        <div>
          <div className="kicker-gold" style={{ marginBottom: "12px" }}>
            <span aria-hidden="true" />
            {current.kicker}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(24px, 2.6vw, 36px)",
              lineHeight: "1.2",
              margin: "0 0 18px",
              color: "var(--text-light)",
            }}
          >
            {current.title}
          </h3>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
              color: "var(--text-warm)",
              margin: "0 0 28px",
            }}
          >
            {current.description}
          </p>

          <div style={{ marginBottom: "32px" }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent-gold)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "14px",
                fontWeight: 700,
              }}
            >
              Key Commercial Deliverables
            </span>

            <div style={{ display: "grid", gap: "10px" }}>
              {current.deliverables.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    color: "var(--text-light)",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--accent-gold)",
                    }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <a href="#contact" className="btn-gold">
              <span>Request {current.name} Blueprint</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>

        {/* Right Column: Live Visual UI Mockup Card */}
        <div
          style={{
            background: "linear-gradient(145deg, #141210 0%, #0c0a09 100%)",
            border: "1px solid var(--border-hairline-bright)",
            borderRadius: "16px",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 20px 48px rgba(0,0,0,0.8)",
          }}
        >
          {/* Top Bar of the Mockup Card */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid var(--border-hairline)",
              paddingBottom: "16px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--accent-gold)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {current.badge}
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "#ff477e",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff477e" }} />
              Live Deployment
            </span>
          </div>

          {/* Sector Specific Visual Artifact */}
          {current.uiType === "restaurant" && (
            <div style={{ padding: "14px 0" }}>
              <div
                style={{
                  background: "#1c1917",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "12px",
                  padding: "18px",
                  marginBottom: "16px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-light)" }}>
                    Reserve Table for Tonight
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)" }}>
                    2 Guests · 8:00 PM
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ background: "rgba(203,178,106,0.15)", color: "var(--accent-gold)", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    Chef Tasting Menu
                  </span>
                  <span style={{ background: "rgba(255,255,255,0.05)", color: "var(--text-warm)", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                    Sommelier Pairing
                  </span>
                </div>
                <div style={{ height: "4px", background: "var(--accent-gold)", borderRadius: "2px", width: "100%" }} />
              </div>
            </div>
          )}

          {current.uiType === "clinic" && (
            <div style={{ padding: "14px 0" }}>
              <div
                style={{
                  background: "#1c1917",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "12px",
                  padding: "18px",
                  marginBottom: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <ShieldCheckIcon />
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-light)" }}>
                    Dr. Alistair Vance · Specialist Intake
                  </span>
                </div>
                <p style={{ margin: "0 0 10px", fontSize: "12px", color: "var(--text-warm)" }}>
                  Select consultation pathway & submit medical history:
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: "6px" }}>
                  <span style={{ fontSize: "12px", color: "var(--text-light)" }}>Next Available Slot</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)" }}>Tomorrow, 10:30 AM</span>
                </div>
              </div>
            </div>
          )}

          {current.uiType === "finance" && (
            <div style={{ padding: "14px 0" }}>
              <div
                style={{
                  background: "#1c1917",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "12px",
                  padding: "18px",
                  marginBottom: "16px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-light)" }}>
                    Corporate Tax & Retainer Portal
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent-gold)" }}>
                    SECURE 256-BIT
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "10px" }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", padding: "8px", borderRadius: "6px" }}>
                    <small style={{ display: "block", fontSize: "10px", color: "var(--text-warm)" }}>Audit Cycle</small>
                    <strong style={{ fontSize: "12px", color: "var(--text-light)" }}>Q3 Finalized</strong>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", padding: "8px", borderRadius: "6px" }}>
                    <small style={{ display: "block", fontSize: "10px", color: "var(--text-warm)" }}>Tax Filing</small>
                    <strong style={{ fontSize: "12px", color: "var(--accent-gold)" }}>Optimized (0 Error)</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {current.uiType === "creator" && (
            <div style={{ padding: "14px 0" }}>
              <div
                style={{
                  background: "#1c1917",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "12px",
                  padding: "18px",
                  marginBottom: "16px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-light)" }}>
                    Official Media Kit 2026
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#ff477e" }}>
                    850K+ Monthly Reach
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(255,255,255,0.04)", padding: "8px 12px", borderRadius: "6px" }}>
                  <span style={{ fontSize: "12px", color: "var(--text-warm)" }}>Avg. Brand Deal ROI</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent-gold)", fontWeight: 700 }}>4.8× Yield</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Metric Strip of the Mockup Card */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              borderTop: "1px solid var(--border-hairline)",
              paddingTop: "18px",
            }}
          >
            <div>
              <strong
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "30px",
                  color: "var(--accent-gold)",
                  display: "block",
                  lineHeight: "1",
                }}
              >
                {current.statNumber}
              </strong>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-warm)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                {current.statLabel}
              </span>
            </div>

            <div>
              <strong
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "30px",
                  color: "var(--text-light)",
                  display: "block",
                  lineHeight: "1",
                }}
              >
                {current.secondaryStat}
              </strong>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-warm)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                {current.secondaryLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
