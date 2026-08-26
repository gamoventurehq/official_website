import type { Metadata } from "next";
import { Geist, Megrim, Outfit } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    card: "summary",
    title: "Gamoventure — Digital Products & Business Systems",
    description: "Purpose-built digital experiences, operational systems, and software products for ambitious businesses.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${megrim.variable} ${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
