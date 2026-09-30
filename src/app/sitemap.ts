import type { MetadataRoute } from "next";

const siteUrl = "https://www.drabhijeetholambe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/services/anxiety-panic-disorder",
    "/services/depression",
    "/services/sleep-disorders",
    "/services/sexual-health",
    "/services/de-addiction",
  ];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: "2026-10-01",
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
