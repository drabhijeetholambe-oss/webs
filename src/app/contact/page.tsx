import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import * as Info from "../config/constants/info";

const siteUrl = "https://www.drabhijeetholambe.com";
export const metadata: Metadata = {
  title: "Contact and Directions | Malad West, Mumbai",
  description: "Contact Dr. Abhijeet Holambe in Malad West, Mumbai. Find the clinic address, consultation hours, phone, WhatsApp, email, and Google Maps directions.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  const schema={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem",position:1,name:"Home",item:siteUrl+"/"},{"@type":"ListItem",position:2,name:"Contact",item:siteUrl+"/contact"}]};
  return <div className="min-h-screen bg-[#fbfaf7] px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <main className="mx-auto max-w-6xl">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#64736d]"><Link href="/" className="hover:text-[#183b37]">Home</Link><span className="mx-2">/</span><span>Contact</span></nav>
      <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42796d]">Contact and directions</p><h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#183b37] sm:text-5xl">Plan your consultation.</h1><p className="mt-5 text-base leading-7 text-[#60736e]">Request an in-person appointment at Sun Multispeciality Hospital or ask about an online consultation.</p></div>
      <div className="mt-10 grid overflow-hidden rounded-3xl border border-[#e2e7df] bg-white shadow-sm lg:grid-cols-[0.82fr_1.18fr]">
        <div className="p-6 sm:p-9">
          <h2 className="font-serif text-2xl font-medium text-[#183b37]">Dr. Abhijeet Holambe</h2>
          <address className="mt-5 flex gap-3 not-italic text-sm leading-7 text-[#60736e]"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#42796d]" /><span>{Info.ADDRESS}</span></address>
          <p className="mt-5 flex gap-3 text-sm leading-6 text-[#60736e]"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#42796d]" /><span><strong className="text-[#183b37]">Consultation hours</strong><br />{Info.HOURS}<br />Appointments by prior booking.</span></p>
          <div className="mt-6 space-y-4 text-sm">
            <a href={"tel:"+Info.PHONE.replace(/[^+\d]/g,"")} className="flex items-center gap-3 text-[#315d50]"><Phone className="h-4 w-4" />{Info.PHONE}</a>
            <a href={"https://wa.me/"+Info.PHONE.replace(/\D/g,"")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#315d50]"><MessageCircle className="h-4 w-4" />WhatsApp</a>
            <a href={"mailto:"+Info.EMAIL} className="flex items-center gap-3 text-[#315d50]"><Mail className="h-4 w-4" />{Info.EMAIL}</a>
          </div>
          <a className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#183b37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285a50]" href="https://share.google/ZsC1gdVb6fxq6Vq69" target="_blank" rel="noopener noreferrer">Open Google Maps directions ↗</a>
        </div>
        <div className="min-h-[360px] bg-[#e5ebe4] sm:min-h-[480px]"><iframe title="Sun Multispeciality Hospital location in Malad West, Mumbai" src="https://www.google.com/maps?q=Sun%20Multispeciality%20Hospital%2C%20Malad%20West%2C%20Mumbai&output=embed" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="min-h-[360px] w-full border-0 sm:min-h-[480px]" /></div>
      </div>
      <p className="mt-8 text-sm text-[#60736e]">For information about what to expect, visit <Link className="font-medium text-[#315d50] underline underline-offset-4" href="/faq">frequently asked questions</Link>.</p>
    </main>
  </div>;
}
