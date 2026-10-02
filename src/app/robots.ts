import type { MetadataRoute } from "next";

const siteUrl = "https://www.drabhijeetholambe.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: siteUrl + "/sitemap.xml",
    host: siteUrl,
  };
}
