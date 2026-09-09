import type { Metadata } from "next";
import { Megrim, Outfit } from "next/font/google";
import { isPreview, organization, siteOrigin } from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const megrim = Megrim({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-megrim",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
  title: {
    default: "Gamoventure — Digital Products & Business Systems",
    template: "%s — Gamoventure",
  },
  description: "Gamoventure is an independent digital product and solutions studio building purpose-built technology for ambitious businesses.",
  icons: { icon: "/logos/symbol.png" },
  openGraph: {
    title: "Gamoventure — Digital Products & Business Systems",
    description: "Purpose-built digital experiences, operational systems, and software products for ambitious businesses.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Gamoventure — Digital products that move businesses forward." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamoventure — Digital Products & Business Systems",
    description: "Purpose-built digital experiences, operational systems, and software products for ambitious businesses.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${megrim.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
