import type { MetadataRoute } from "next";
import { serviceSlugs } from "./services/service-data";

const siteUrl = "https://www.drabhijeetholambe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/about",
    "/faq",
    "/contact",
    "/workplace-wellness",
    ...serviceSlugs.map((slug) => "/services/" + slug),
    "/hi",
    "/hi/about",
    "/hi/services/anxiety-panic-disorder",
    "/hi/services/depression",
    "/hi/services/sexual-health",
    "/mr",
    "/mr/about",
    "/mr/services/anxiety-panic-disorder",
    "/mr/services/depression",
    "/mr/services/sexual-health",
  ];
  return pages.map((path) => ({
    url: siteUrl + path,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
