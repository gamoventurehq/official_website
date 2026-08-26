import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { PortfolioMotion } from "./PortfolioMotion";

export function SitePage({ children }: { children: ReactNode }) {
  return (
    <main className="site-frame">
      <PortfolioMotion />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
