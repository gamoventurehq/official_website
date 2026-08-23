export function TestimonialSection() {
  return (
    <section className="broadsheet-section shell" id="endorsements">
      <div className="broadsheet-card">
        <div>
          <div className="broadsheet-kicker-tag">
            Client Endorsement // FT Broadsheet Protocol
          </div>

          <blockquote className="broadsheet-quote">
            “Gaurav transformed our entire customer acquisition architecture. By replacing our
            generic booking setup with a custom digital flagship, our direct table reservations
            surged by over 200% within 90 days, completely eliminating our reliance on third-party aggregator commissions.”
          </blockquote>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#262a33",
                color: "#fff1e5",
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
              }}
            >
              ML
            </div>
            <div>
              <strong style={{ display: "block", fontSize: "15px", color: "var(--ink-broadsheet)" }}>
                Matteo Laurenti
              </strong>
              <span style={{ fontSize: "12px", color: "#66605c", fontFamily: "var(--font-sans)" }}>
                Co-Founder & Hospitality Director · The Grandview Group
              </span>
            </div>
          </div>
        </div>

        <div className="broadsheet-side-col">
          <div className="broadsheet-stat">
            <strong>+210%</strong>
            <span>Increase in direct high-margin client bookings</span>
          </div>

          <div className="broadsheet-stat">
            <strong style={{ color: "#990f3d" }}>$0</strong>
            <span>Commission fees paid to third-party portals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
