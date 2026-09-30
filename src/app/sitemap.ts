import type { MetadataRoute } from "next";

const siteUrl = "https://www.drabhijeetholambe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: "2026-10-01",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
