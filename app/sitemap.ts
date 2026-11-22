import type { MetadataRoute } from "next";
import { privacyEffectiveDate, siteLastUpdated, siteOrigin, termsEffectiveDate } from "@/lib/seo";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: { path: string; lastModified: string }[] = [
    { path: "/", lastModified: siteLastUpdated },
    { path: "/capabilities", lastModified: siteLastUpdated },
    { path: "/work", lastModified: siteLastUpdated },
    { path: "/work/egg-express-pos", lastModified: siteLastUpdated },
    { path: "/about", lastModified: siteLastUpdated },
    { path: "/contact", lastModified: siteLastUpdated },
    { path: "/privacy", lastModified: privacyEffectiveDate },
    { path: "/terms", lastModified: termsEffectiveDate },
    ...services.map(({ slug }) => ({ path: `/services/${slug}`, lastModified: siteLastUpdated })),
  ];

  return entries.map(({ path, lastModified }) => ({
    url: new URL(path, siteOrigin).href,
    lastModified,
  }));
}
