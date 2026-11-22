import type { MetadataRoute } from "next";
import { isPreview, siteOrigin } from "@/lib/seo";

/**
 * Search-discovery and user-triggered retrieval agents (Googlebot, Bingbot,
 * OAI-SearchBot, PerplexityBot, Claude-SearchBot, ChatGPT-User, Claude-User,
 * Perplexity-User, meta-webindexer, and agent search APIs) are allowed via the
 * wildcard rule so public pages, /llms.txt, /llms-full.txt, and /pricing.md
 * remain discoverable. Model-training crawlers (GPTBot, ClaudeBot,
 * Google-Extended, meta-externalagent) are currently permitted for brand
 * entity visibility; add a separate disallow block if training opt-out is needed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: isPreview
      ? { userAgent: "*", disallow: "/" }
      : { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
