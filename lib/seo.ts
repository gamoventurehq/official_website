import type { Metadata } from "next";

export const productionOrigin = "https://www.gamoventure.in";
export const linkedinUrl = "https://www.linkedin.com/company/gamoventure";
export const siteLastUpdated = "2026-11-23";
export const siteLastUpdatedDisplay = "23 November 2026";
export const privacyEffectiveDate = "2026-09-10";
export const termsEffectiveDate = "2026-08-26";

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

type PageMetadataOptions = {
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function pageMetadata(
  path: string,
  title: string,
  description: string,
  imageOrOptions: string | PageMetadataOptions = "/og.png",
): Metadata {
  const options = typeof imageOrOptions === "string" ? { image: imageOrOptions } : imageOrOptions;
  const image = options.image ?? "/og.png";
  const type = options.type ?? "website";
  const socialTitle = path === "/" ? title : `${title} | Gamoventure`;
  const canonical = new URL(path, siteOrigin).href;
  const imageUrl = new URL(image, siteOrigin).href;

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      ...(path === "/" ? { types: { "text/plain": `${siteOrigin}/llms.txt` } } : {}),
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: "Gamoventure",
      type,
      locale: "en_IN",
      images: [{ url: imageUrl, alt: socialTitle }],
      ...(type === "article"
        ? {
            publishedTime: options.publishedTime,
            modifiedTime: options.modifiedTime,
          }
        : {}),
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [imageUrl] },
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
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
  areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@gamoventure.in",
    telephone: "+918080251000",
    availableLanguage: ["en"],
  },
  knowsAbout: [
    "Custom Business Software",
    "Business Websites",
    "Customer Portals",
    "Workflow Automation",
    "Point of Sale Systems",
    "Digital Product Development",
  ],
  sameAs: [linkedinUrl],
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteOrigin}/#website`,
  name: "Gamoventure",
  url: siteOrigin,
  inLanguage: "en-IN",
  publisher: { "@id": `${siteOrigin}/#organization` },
};

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

export function breadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      ...(entry.path ? { item: new URL(entry.path, siteOrigin).href } : {}),
    })),
  };
}

export type ServiceOfferInput = {
  name: string;
  priceInr: string;
  description: string;
};

export function serviceJsonLd(input: {
  slug: string;
  title: string;
  description: string;
  offers?: readonly ServiceOfferInput[];
}) {
  const serviceUrl = new URL(`/services/${input.slug}`, siteOrigin).href;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: input.title,
    description: input.description,
    url: serviceUrl,
    provider: { "@id": `${siteOrigin}/#organization` },
    areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
    ...(input.offers?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${input.title} Packages`,
            itemListElement: input.offers.map((offer) => ({
              "@type": "Offer",
              name: offer.name,
              description: offer.description,
              price: offer.priceInr,
              priceCurrency: "INR",
              url: serviceUrl,
            })),
          },
        }
      : {}),
  };
}

export type FaqItem = {
  question: string;
  answer: string;
};

export function faqJsonLd(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function caseStudyJsonLd(input: {
  path: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  softwareName: string;
  operatingSystem: string;
}) {
  const pageUrl = new URL(input.path, siteOrigin).href;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: pageUrl,
    image: [new URL(input.image, siteOrigin).href],
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: { "@id": `${siteOrigin}/#organization` },
    publisher: { "@id": `${siteOrigin}/#organization` },
    about: {
      "@type": "SoftwareApplication",
      name: input.softwareName,
      applicationCategory: "BusinessApplication",
      operatingSystem: input.operatingSystem,
    },
  };
}
