import type { Metadata } from "next";
import { Megrim, Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { isPreview, organization, siteOrigin, website } from "@/lib/seo";
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
    default: "Gamoventure | Custom Software & Business Websites",
    template: "%s | Gamoventure",
  },
  description: "Gamoventure is an independent digital product and solutions studio building business websites, custom software, and operational systems.",
  icons: { icon: "/logos/symbol.png" },
  openGraph: {
    title: "Gamoventure | Custom Software & Business Websites",
    description: "Business websites, operational systems, and custom software products for growing businesses.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Gamoventure: Custom software and business websites." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamoventure | Custom Software & Business Websites",
    description: "Business websites, operational systems, and custom software products for growing businesses.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${megrim.variable}`}>
      <body>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        {children}
      </body>
    </html>
  );
}
