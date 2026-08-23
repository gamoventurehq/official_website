import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gamoventure-footer">
      <div className="shell">
        <div className="footer-main-row">
          <div className="footer-brand-wrap">
            <Image
              src="/logos/gamoventure_logo_without_background_without_plate.png"
              alt="Gamoventure Official Logo"
              width={160}
              height={40}
              className="footer-logo-img"
            />
          </div>

          <div className="footer-nav-links">
            <a href="#solutions">Industry Solutions</a>
            <a href="#flagships">Visual Flagships</a>
            <a href="#advisory">Advisory Services</a>
            <a href="#protocol">Engagement Protocol</a>
            <a href="#endorsements">Endorsements</a>
            <a href="#contact">Private Channel</a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p style={{ margin: 0 }}>
            © {currentYear} Gamoventure Private Client Studio. Founded by Gaurav.
          </p>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <span>Advisory for Hospitality, Clinics, CA & Creators</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
