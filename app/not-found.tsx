import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found on the Gamoventure website.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SitePage>
      <PageHero
        compact
        eyebrow="404 error"
        title={<>Page not found.</>}
        copy="The address may have changed, or the link you followed may be incomplete. Choose one of the main sections below to continue."
      />
      <section className="chapter not-found-chapter">
        <div className="page-shell not-found-links">
          <h2>Where to go next</h2>
          <nav className="service-links" aria-label="Recovery links">
            <Link href="/">Homepage</Link>
            <Link href="/capabilities">Capabilities & services</Link>
            <Link href="/services/business-websites">Business website packages</Link>
            <Link href="/services/custom-business-software">Custom business software</Link>
            <Link href="/work">Client work</Link>
            <Link href="/contact">Contact Gamoventure</Link>
          </nav>
        </div>
      </section>
    </SitePage>
  );
}
