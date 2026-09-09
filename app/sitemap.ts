import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/seo";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/capabilities", "/work", "/work/egg-express-pos", "/about", "/contact", "/privacy", "/terms", ...services.map(({ slug }) => `/services/${slug}`)];
  return paths.map((path) => ({ url: new URL(path, siteOrigin).href }));
}
