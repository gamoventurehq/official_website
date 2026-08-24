"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, MenuIcon, CloseIcon } from "./icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock background scrolling and allow Escape key dismissal when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="floating-nav-wrap">
        <nav className="floating-nav" aria-label="Main Navigation">
          <a href="#top" className="nav-brand" aria-label="Gamoventure Home">
            <Image
              src="/logos/symbol.png"
              alt="Gamoventure Emblem"
              width={26}
              height={26}
              className="nav-brand-logo-img"
            />
            <span>Gamoventure</span>
          </a>

          <div className="nav-status-indicator">
            <span className="status-dot-pulse" aria-hidden="true" />
            <span>Private Client Practice</span>
          </div>

          <div className="nav-links">
            <a href="#solutions" className="nav-link">Sectors</a>
            <a href="#flagships" className="nav-link">Flagships</a>
            <a href="#advisory" className="nav-link">Advisory</a>
            <a href="#protocol" className="nav-link">Protocol</a>
            <a href="#endorsements" className="nav-link">Endorsements</a>
          </div>

          <a href="#contact" className="btn-gold">
            <span>Request Consultation</span>
            <ArrowUpRight />
          </a>

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            background: "rgba(28, 25, 23, 0.98)",
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            padding: "30px",
            color: "var(--text-light)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <Image src="/logos/symbol.png" alt="Gamoventure Emblem" width={34} height={34} />
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "24px" }}>Gamoventure</span>
          </div>

          <div style={{ height: "1px", width: "100px", background: "var(--border-hairline-bright)" }} />

          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "19px", fontWeight: 600, color: "var(--text-light)" }}
          >
            Industry Solutions
          </a>
          <a
            href="#flagships"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "19px", fontWeight: 600, color: "var(--text-light)" }}
          >
            Visual Flagships
          </a>
          <a
            href="#advisory"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "19px", fontWeight: 600, color: "var(--text-light)" }}
          >
            Advisory Capabilities
          </a>
          <a
            href="#protocol"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "19px", fontWeight: 600, color: "var(--text-light)" }}
          >
            Engagement Protocol
          </a>
          <a
            href="#endorsements"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "19px", fontWeight: 600, color: "var(--text-light)" }}
          >
            Client Endorsements
          </a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-gold"
            style={{ marginTop: "14px", padding: "12px 24px" }}
          >
            <span>Request Private Consultation</span>
            <ArrowUpRight />
          </a>
        </div>
      )}
    </>
  );
}
