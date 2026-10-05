import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/app/ui/site-shell";

export const metadata: Metadata = { title: "Page not found | Dr. Abhijeet Holambe", robots: { index: false, follow: true } };

export default function GlobalNotFound() {
  return <SiteShell lang="en-IN">
    <div className="min-h-[70vh] bg-porcelain px-5 pb-16 pt-36 text-center sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">Page not found</p>
      <h1 className="mt-4 font-serif text-4xl font-medium text-ink sm:text-5xl">This page could not be found.</h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-body">The link may be old or mistyped. You can return to the homepage or contact the practice directly.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-soft">Go to homepage</Link><Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist">Contact the practice</Link></div>
    </div>
  </SiteShell>;
}
