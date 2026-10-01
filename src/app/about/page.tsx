import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ABOUT, CONSULTATION_LANGUAGES, FIRST_CONSULTATION_FEE, FOLLOW_UP_CONSULTATION_FEE, QUALIFICATIONS, SPECIALISATIONS } from "../config/constants/info";

const siteUrl = "https://www.drabhijeetholambe.com";

export const metadata: Metadata = {
  title: "About Dr. Abhijeet Holambe | Malad West, Mumbai",
  description: "Meet Dr. Abhijeet Holambe, psychiatrist in Malad West, Mumbai. Read about his KEM and JJ training, 6 years of clinical experience, approach to care, workplace wellness work, and languages.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const schema = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
    { "@type":"ListItem",position:1,name:"Home",item:siteUrl+"/" },
    { "@type":"ListItem",position:2,name:"About",item:siteUrl+"/about" },
  ]};
  return <div className="min-h-screen bg-[#fbfaf7] pt-[72px]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#64736d]"><Link href="/" className="hover:text-[#183b37]">Home</Link><span className="mx-2">/</span><span>About</span></nav>
      <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md"><div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-[#cbd9cf]" /><Image src="/dr-abhijeet-holambe-clinic.jpg" alt="Dr. Abhijeet Holambe at his clinic in Malad West, Mumbai" width={1600} height={2844} priority sizes="(max-width: 768px) 90vw, 420px" className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[center_30%] shadow-xl" /></div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38695e]">About the psychiatrist</p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-[#183b37] sm:text-5xl">Dr. Abhijeet Holambe</h1>
          <p className="mt-4 text-lg leading-8 text-[#53655e]">MBBS · MD Psychiatry · 6 years of clinical experience</p>
          <div className="mt-6 space-y-4 text-base leading-8 text-[#4f615b]"><p>{ABOUT.split("\n\n")[0]}</p><p>His approach begins with listening carefully, understanding each person’s concerns and circumstances, and explaining possible next steps in plain language. Care recommendations are individual. Medication is discussed when it may be clinically appropriate, with room to ask about benefits, side effects, and alternatives.</p><p>Alongside clinical consultations, Dr. Holambe’s work includes workplace wellness education and conversations about mental health at work. These sessions address stress, wellbeing, and ways to make it easier to seek support.</p></div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-[#edf2eb] p-5"><p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#38695e]">Training</p><p className="mt-2 text-sm leading-6 text-[#183b37]">Seth GS Medical College and KEM Hospital<br />Grant Medical College and JJ Hospital</p><p className="mt-3 text-xs font-semibold text-[#53655e]">{QUALIFICATIONS.join(" · ")}</p></div><div className="rounded-2xl bg-[#edf2eb] p-5"><p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#38695e]">Languages and fees</p><p className="mt-2 text-sm leading-6 text-[#183b37]">{CONSULTATION_LANGUAGES.join(" · ")}</p><p className="mt-3 text-xs leading-5 text-[#53655e]">First consultation: {FIRST_CONSULTATION_FEE}<br />Follow-up: {FOLLOW_UP_CONSULTATION_FEE}</p></div></div>
          <div className="mt-7"><p className="text-sm font-semibold text-[#183b37]">Areas of care</p><p className="mt-2 text-sm leading-6 text-[#53655e]">{SPECIALISATIONS.join(" · ")}</p></div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="https://wa.me/918169065210" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#183b37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285a50]">Book on WhatsApp</a><Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b5cfc0] bg-white px-6 py-3 text-sm font-semibold text-[#183b37] transition hover:bg-[#edf2eb]">Clinic and contact details</Link></div>
        </div>
      </div>
    </div>
  </div>;
}
