import type { MetadataRoute } from "next";
import { serviceSlugs } from "./config/service-data";
import { articles } from "./config/articles";

const siteUrl = "https://www.drabhijeetholambe.com";

// Date the page content last changed. Update it when a page's text changes, so search engines can trust lastModified.
const CONTENT_UPDATED = "2026-10-05";

const translated: Record<string, { hi: string; mr: string }> = {
  "/": { hi: "/hi", mr: "/mr" },
  "/about": { hi: "/hi/about", mr: "/mr/about" },
  "/services/anxiety-panic-disorder": { hi: "/hi/services/anxiety-panic-disorder", mr: "/mr/services/anxiety-panic-disorder" },
  "/services/depression": { hi: "/hi/services/depression", mr: "/mr/services/depression" },
  "/services/sexual-health": { hi: "/hi/services/sexual-health", mr: "/mr/services/sexual-health" },
};

const languagesFor = (path: string) => {
  const english = Object.keys(translated).find((key) => key === path || translated[key].hi === path || translated[key].mr === path);
  if (!english) return undefined;
  return { languages: { "en-IN": siteUrl + english, "hi-IN": siteUrl + translated[english].hi, "mr-IN": siteUrl + translated[english].mr } };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/about",
    "/faq",
    "/contact",
    "/workplace-wellness",
    "/articles",
    ...serviceSlugs.map((slug) => "/services/" + slug),
    ...Object.values(translated).flatMap(({ hi, mr }) => [hi, mr]),
  ];
  return [
    ...pages.map((path) => ({
      url: siteUrl + path,
      lastModified: CONTENT_UPDATED,
      changeFrequency: path === "/" || path === "/articles" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
      alternates: languagesFor(path),
    })),
    ...articles.map((article) => ({
      url: siteUrl + "/articles/" + article.slug,
      lastModified: article.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
