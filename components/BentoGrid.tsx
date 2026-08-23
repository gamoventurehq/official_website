import { TrendingUpIcon, BuildingIcon, CameraIcon } from "./icons";

export function BentoGrid() {
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
        </p>
      </div>

      {/* 12-Column Mathematically Gapless Bento Grid */}
      <div className="bento-grid-venture">
        {/* Cell 1: Grandview Osteria & Lounge (Span 7) */}
        <article className="bento-card-hybrid bento-cell-7">
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
              <p className="bento-tag-mono">Hospitality & Dining · Flagship</p>
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
        <article className="bento-card-hybrid bento-cell-5">
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
              <p className="bento-tag-mono">Medical & Dental Practice</p>
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
        <article className="bento-card-hybrid bento-cell-4">
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
              <p className="bento-tag-mono">Chartered Accountancy · 2024</p>
              <h3 className="bento-title-serif">Kapadia & Co. Flagship</h3>
            </div>
            <div>
              <span className="kpi-pill-gold">3.4× Retainers</span>
            </div>
          </div>
        </article>

        {/* Cell 4: Studio Vanguard Creator Media Hub (Span 8) */}
        <article className="bento-card-hybrid bento-cell-8">
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
              <p className="bento-tag-mono">Media Brand & Influence</p>
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
    </section>
  );
}
