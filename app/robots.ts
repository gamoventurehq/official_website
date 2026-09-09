import type { MetadataRoute } from "next";
import { isPreview, siteOrigin } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isPreview ? { userAgent: "*", disallow: "/" } : { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
