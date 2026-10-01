import type { MetadataRoute } from "next";
import { serviceSlugs } from "./services/service-data";

const siteUrl = "https://www.drabhijeetholambe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/about",
    "/faq",
    "/contact",
    ...serviceSlugs.map((slug) => "/services/" + slug),
  ];
  return pages.map((path) => ({
    url: siteUrl + path,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
