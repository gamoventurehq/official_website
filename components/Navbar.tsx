"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-nav-wrap">
      <nav className="site-nav page-shell" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="Gamoventure home">
          <Image src="/logos/symbol.png" alt="" width={34} height={34} priority />
          <span className="brand-wordmark">Gamoventure</span>
        </Link>

        <div className="desktop-nav-links">
          {navigationItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>

        <Link className="nav-contact" href="/contact">Discuss your project <span aria-hidden="true">↗</span></Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!menuOpen}>
        {navigationItems.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
        ))}
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Discuss your project</Link>
      </div>
    </header>
  );
}
