import type { Metadata } from "next";
import SiteShell, { siteMetadata } from "@/app/ui/site-shell";

export const metadata: Metadata = siteMetadata;

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="en-IN">{children}</SiteShell>;
}
