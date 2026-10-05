import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ABOUT, CONSULTATION_LANGUAGES, FIRST_CONSULTATION_FEE, FOLLOW_UP_CONSULTATION_FEE, QUALIFICATIONS, SPECIALISATIONS, WHATSAPP_LINK, WHATSAPP_WORKSHOP_LINK } from "@/app/config/constants/info";

const siteUrl = "https://www.drabhijeetholambe.com";

export const metadata: Metadata = {
  title: "About Dr. Abhijeet Holambe | Psychiatrist, De-addiction Specialist and Sexologist in Malad West, Mumbai",
  description: "Meet Dr. Abhijeet Holambe, psychiatrist, de-addiction specialist and sexologist in Malad West, Mumbai. Read about his KEM and JJ training, 6 years of clinical experience, registration, workplace wellness work, languages, and fees.",
  alternates: { canonical: "/about", languages: { "en-IN": "/about", "hi-IN": "/hi/about", "mr-IN": "/mr/about" } },
};

export default function AboutPage() {
  const schema = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
    { "@type":"ListItem",position:1,name:"Home",item:siteUrl+"/" },
    { "@type":"ListItem",position:2,name:"About",item:siteUrl+"/about" },
  ]};
  return <div className="min-h-screen bg-porcelain pt-[72px]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-subtle"><Link href="/" className="hover:text-ink">Home</Link><span className="mx-2">/</span><span>About</span></nav>
      <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md"><div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-line-strong" /><Image src="/dr-abhijeet-holambe-clinic.jpg" alt="Dr. Abhijeet Holambe at his clinic in Malad West, Mumbai" width={1600} height={2844} priority sizes="(max-width: 768px) 90vw, 420px" className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[center_30%] shadow-xl" /></div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">About the psychiatrist</p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">Dr. Abhijeet Holambe</h1>
          <p className="mt-4 text-lg leading-8 text-body">Psychiatrist, De-addiction Specialist and Sexologist · Alumnus of KEM Hospital and JJ Hospital, Mumbai · 6 years of clinical experience</p>
          <div className="mt-6 space-y-4 text-base leading-8 text-body"><p>{ABOUT.split("\n\n")[0]}</p><p>Dr. Holambe works as a psychiatrist, de-addiction specialist and sexologist. His approach begins with listening carefully, understanding each person’s concerns and circumstances, and explaining possible next steps in plain language. Care recommendations are individual. Medication is discussed when it may be clinically appropriate, with room to ask about benefits, side effects, and alternatives.</p><p>Alongside clinical consultations, Dr. Holambe’s work includes workplace wellness education and conversations about mental health at work. These sessions address stress, wellbeing, and ways to make it easier to seek support.</p></div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-mist p-5"><p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-green">Alumnus of KEM and JJ</p><p className="mt-2 text-sm leading-6 text-ink">Seth GS Medical College and KEM Hospital<br />Grant Medical College and JJ Hospital</p><p className="mt-3 text-xs font-semibold text-body">{QUALIFICATIONS.join(" · ")}</p></div><div className="rounded-2xl bg-mist p-5"><p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-green">Languages and fees</p><p className="mt-2 text-sm leading-6 text-ink">{CONSULTATION_LANGUAGES.join(" · ")}</p><p className="mt-3 text-xs leading-5 text-body">First consultation: {FIRST_CONSULTATION_FEE}<br />Follow-up: {FOLLOW_UP_CONSULTATION_FEE}</p></div></div>
          <div className="mt-7"><p className="text-sm font-semibold text-ink">Registration</p><p className="mt-2 text-sm leading-6 text-body">Maharashtra Medical Council registration no. 2020042727 (2020)</p></div><div className="mt-7"><p className="text-sm font-semibold text-ink">Areas of care</p><p className="mt-2 text-sm leading-6 text-body">{SPECIALISATIONS.join(" · ")}</p></div>
          <div className="mt-8 rounded-2xl border border-line bg-white p-5"><p className="text-sm font-semibold text-ink">Workplace wellness</p><p className="mt-2 text-sm leading-6 text-body">Dr. Holambe conducts workplace wellness workshops on stress, burnout, and mental health at work. For workshop enquiries, contact the practice on WhatsApp.</p><a href={WHATSAPP_WORKSHOP_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white">WhatsApp for workshop enquiries</a></div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-soft">Book on WhatsApp</a><Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist">Clinic and contact details</Link></div>
        </div>
      </div>
    </div>
  </div>;
}
