export function TrustMarquee() {
  const sectorItems = [
    { label: "FINE DINING & RESTAURANTS", meta: "TABLE RESERVATION ENGINES" },
    { label: "MEDICAL & DENTAL CLINICS", meta: "PATIENT INTAKE PORTALS" },
    { label: "CHARTERED ACCOUNTANTS", meta: "INSTITUTIONAL TAX PORTALS" },
    { label: "CREATORS & INFLUENCERS", meta: "DYNAMIC MEDIA KITS" },
    { label: "WEALTH & ASSET MANAGEMENT", meta: "PRIVATE CLIENT PLATFORMS" },
    { label: "BOUTIQUE CREATIVE AGENCIES", meta: "HIGH-CONVERSION FLAGSHIPS" },
    { label: "LUXURY HOSPITALITY & BARS", meta: "SOMMELIER MENU ARCHITECTURES" },
    { label: "LOCAL ENTERPRISE LEADERS", meta: "GEO-SEARCH DOMINANCE" },
  ];

  return (
    <section className="ecosystem-ticker-section" aria-label="Target Client Sectors & Practice Areas">
      <div className="shell ticker-shell">
        <div className="ticker-claret-tag">
          <span aria-hidden="true" />
          Target Industry Practices
        </div>

        <div className="marquee-track">
          <div className="marquee-content">
            {sectorItems.map((item, i) => (
              <span className="ticker-item" key={`sec-1-${i}`}>
                <strong style={{ color: "var(--text-light)" }}>{item.label}</strong>
                <span style={{ color: "var(--accent-gold)", opacity: 0.9 }}>{"//"} {item.meta}</span>
              </span>
            ))}
            {sectorItems.map((item, i) => (
              <span className="ticker-item" key={`sec-2-${i}`}>
                <strong style={{ color: "var(--text-light)" }}>{item.label}</strong>
                <span style={{ color: "var(--accent-gold)", opacity: 0.9 }}>{"//"} {item.meta}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
