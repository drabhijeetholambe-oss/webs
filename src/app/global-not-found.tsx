import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/app/ui/site-shell";

export const metadata: Metadata = { title: "Page not found | Dr. Abhijeet Holambe", robots: { index: false, follow: true } };

export default function GlobalNotFound() {
  return <SiteShell lang="en-IN">
    <div className="min-h-[70vh] bg-[#fbfaf7] px-5 pb-16 pt-36 text-center sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38695e]">Page not found</p>
      <h1 className="mt-4 font-serif text-4xl font-medium text-[#183b37] sm:text-5xl">This page could not be found.</h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#53655e]">The link may be old or mistyped. You can return to the homepage or contact the practice directly.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#183b37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285a50]">Go to homepage</Link><Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b5cfc0] bg-white px-6 py-3 text-sm font-semibold text-[#183b37] transition hover:bg-[#edf2eb]">Contact the practice</Link></div>
    </div>
  </SiteShell>;
}
