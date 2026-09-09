import type { Metadata } from "next";

export const productionOrigin = "https://www.gamoventure.in";
export const linkedinUrl = "https://www.linkedin.com/company/gamoventure";

export function resolveSiteOrigin(value?: string): string {
  const input = value?.trim() || productionOrigin;
  const url = new URL(input.includes("://") ? input : `https://${input}`);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, credentials, query, or fragment.");
  }
  // Old deployment settings must not recreate duplicate-domain metadata.
  if (["gamoventure.vercel.app", "gamoventure.in", "www.gamoventure.in"].includes(url.hostname)) return productionOrigin;
  return url.origin;
}

export const siteOrigin = resolveSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL);
export const isPreview = process.env.VERCEL_ENV === "preview";

export function pageMetadata(path: string, title: string, description: string, image = "/og.png"): Metadata {
  const socialTitle = path === "/" ? title : `${title} — Gamoventure`;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: new URL(path, siteOrigin).href },
    openGraph: {
      title: socialTitle, description, url: new URL(path, siteOrigin).href,
      siteName: "Gamoventure", type: "website", locale: "en_IN",
      images: [{ url: new URL(image, siteOrigin).href, alt: socialTitle }],
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [new URL(image, siteOrigin).href] },
  };
}

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteOrigin}/#organization`,
  name: "Gamoventure",
  url: siteOrigin,
  logo: `${siteOrigin}/logos/generated/symbol_full.png`,
  description: "An independent digital product and solutions studio building business websites, custom software, and operational systems.",
  email: "hello@gamoventure.in",
  telephone: "+918080251000",
  sameAs: [linkedinUrl],
};
