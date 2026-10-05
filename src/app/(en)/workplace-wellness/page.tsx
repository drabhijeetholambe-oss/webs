import type { Metadata } from "next";
import Link from "next/link";
import * as Info from "@/app/config/constants/info";

const siteUrl = "https://www.drabhijeetholambe.com";

export const metadata: Metadata = {
  title: "Workplace Wellness Workshops | Dr. Abhijeet Holambe",
  description: "Workplace wellness workshops by Dr. Abhijeet Holambe on stress, burnout, and mental health at work.",
  alternates: { canonical: "/workplace-wellness" },
};

export default function WorkplaceWellnessPage() {
  const schema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":siteUrl+"/"},
    {"@type":"ListItem","position":2,"name":"Workplace wellness","item":siteUrl+"/workplace-wellness"}
  ]};
  return <div className="min-h-screen bg-ivory px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <div className="mx-auto max-w-4xl">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-subtle"><Link href="/">Home</Link><span className="mx-2">/</span><span>Workplace wellness</span></nav>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Workplace wellness</p>
      <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">Mental health at work, in practical terms.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-body">Dr. Abhijeet Holambe conducts workplace wellness workshops focused on stress, burnout, and mental health at work. Sessions are designed to give teams clear, practical information and a useful framework for recognising when support may be needed.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          ["Stress","Understanding common sources of work-related stress and practical ways to respond."],
          ["Burnout","Recognising sustained exhaustion, reduced functioning, and when recovery or professional support may be appropriate."],
          ["Mental health at work","Building everyday awareness, reducing stigma, and knowing how to seek appropriate support."]
        ].map(([title,text])=><section key={title} className="rounded-3xl border border-line bg-white p-6"><h2 className="font-serif text-2xl text-ink">{title}</h2><p className="mt-3 text-sm leading-7 text-body">{text}</p></section>)}
      </div>
      <section className="mt-10 rounded-3xl bg-sand p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-ink">Workshop enquiries</h2>
        <p className="mt-3 text-sm leading-7 text-body">For organisations interested in a workplace wellness session, contact Dr. Holambe on WhatsApp with the organisation name, approximate group size, and the topic you would like to discuss.</p>
        <a href={Info.WHATSAPP_WORKSHOP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">WhatsApp enquiry</a>
      </section>
    </div>
  </div>;
}
