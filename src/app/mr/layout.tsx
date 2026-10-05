import type { Metadata } from "next";
import SiteShell, { siteMetadata } from "@/app/ui/site-shell";

export const metadata: Metadata = { ...siteMetadata, openGraph: { ...siteMetadata.openGraph, locale: "mr_IN" } };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="mr-IN">{children}</SiteShell>;
}
