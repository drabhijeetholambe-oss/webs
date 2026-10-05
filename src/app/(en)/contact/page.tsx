import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import * as Info from "@/app/config/constants/info";

const siteUrl = "https://www.drabhijeetholambe.com";
export const metadata: Metadata = {
  title: "Contact and Directions | Malad West, Mumbai",
  description: "Contact Dr. Abhijeet Holambe in Malad West, Mumbai. Find the clinic address, consultation hours, phone, WhatsApp, email, and Google Maps directions.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  const schema={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem",position:1,name:"Home",item:siteUrl+"/"},{"@type":"ListItem",position:2,name:"Contact",item:siteUrl+"/contact"}]};
  return <div className="min-h-screen bg-porcelain px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <div className="mx-auto max-w-6xl">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-subtle"><Link href="/" className="hover:text-ink">Home</Link><span className="mx-2">/</span><span>Contact</span></nav>
      <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Contact and directions</p><h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">Plan your consultation.</h1><p className="mt-5 text-base leading-7 text-body">Request an in-person appointment at Sun Multispeciality Hospital or ask about an online consultation.</p></div>
      <div className="mt-10 grid overflow-hidden rounded-3xl border border-line bg-white shadow-sm lg:grid-cols-[0.82fr_1.18fr]">
        <div className="p-6 sm:p-9">
          <h2 className="font-serif text-2xl font-medium text-ink">Dr. Abhijeet Holambe</h2>
          <address className="mt-5 flex gap-3 not-italic text-sm leading-7 text-body"><MapPin className="mt-1 h-4 w-4 shrink-0 text-bronze" /><span>{Info.ADDRESS}</span></address>
          <p className="mt-5 flex gap-3 text-sm leading-6 text-body"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-bronze" /><span><strong className="text-ink">Consultation hours</strong><br />{Info.HOURS}<br />Appointments by prior booking.</span></p>
          <div className="mt-6 space-y-4 text-sm">
            <a href={Info.PHONE_LINK} className="flex items-center gap-3 text-bronze"><Phone className="h-4 w-4" />{Info.PHONE}</a>
            <a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-bronze"><MessageCircle className="h-4 w-4" />WhatsApp</a>
            <a href={"mailto:"+Info.EMAIL} className="flex items-center gap-3 text-bronze"><Mail className="h-4 w-4" />{Info.EMAIL}</a>
          </div>
          <p className="mt-5 text-sm leading-6 text-body"><strong className="text-ink">Consultation fees:</strong> First consultation ₹1,800 · Follow-up ₹1,500</p><p className="mt-2 text-sm leading-6 text-body"><strong className="text-ink">Languages:</strong> Hindi · Marathi · English</p><a className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-soft" href={Info.GOOGLE_MAPS} target="_blank" rel="noopener noreferrer">Open Google Maps directions ↗</a>
        </div>
        <div className="min-h-[360px] bg-cloud sm:min-h-[480px]"><iframe title="Sun Multispeciality Hospital location in Malad West, Mumbai" src="https://www.google.com/maps?q=Sun%20Multispeciality%20Hospital%2C%20Malad%20West%2C%20Mumbai&output=embed" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="min-h-[360px] w-full border-0 sm:min-h-[480px]" /></div>
      </div>
      <p className="mt-8 text-sm text-body">For information about what to expect, visit <Link className="font-medium text-bronze underline underline-offset-4" href="/faq">frequently asked questions</Link>.</p>
    </div>
  </div>;
}
