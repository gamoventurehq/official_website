"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`) || (href === "/capabilities" && pathname.startsWith("/services/"));

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); toggleRef.current?.focus(); }
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
          {navigationItems.map((item) => <Link href={item.href} key={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>{item.label}</Link>)}
        </div>

        <Link className="nav-contact" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Discuss your project <span aria-hidden="true">↗</span></Link>

        <button
          className="menu-toggle"
          ref={toggleRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!menuOpen} inert={!menuOpen}>
        {navigationItems.map((item) => (
          <Link href={item.href} key={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>
        ))}
        <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Discuss your project</Link>
      </div>
    </header>
  );
}
