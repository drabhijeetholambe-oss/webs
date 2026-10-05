import type { Metadata } from "next";
import Hero from "@/app/ui/hero";
import About from "@/app/ui/about";
import Services from "@/app/ui/services";
import Locations from "@/app/ui/locations";
import VisitSteps from "@/app/ui/visit-steps";
import Reviews from "@/app/ui/reviews";
import * as Info from "@/app/config/constants/info";

const siteUrl = "https://www.drabhijeetholambe.com";

export const metadata: Metadata = {
  title: { absolute: "Psychiatrist in Malad West, Mumbai | Dr. Abhijeet Holambe" },
  description: "Psychiatrist in Malad West, Mumbai and KEM and JJ Hospital alumnus. Dr. Abhijeet Holambe offers mental health, sexual health and de-addiction care, online too.",
  alternates: { canonical: "/", languages: { "en-IN": "/", "hi-IN": "/hi", "mr-IN": "/mr" } },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Dr. Abhijeet Holambe",
    title: "Psychiatrist in Malad West, Mumbai | Dr. Abhijeet Holambe",
    description: "Psychiatric consultations for mental health, sexual health and de-addiction in Malad West, Mumbai. Online appointments are available by arrangement.",
    locale: "en_IN",
    images: [Info.OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychiatrist in Malad West, Mumbai | Dr. Abhijeet Holambe",
    description: "Psychiatric consultations for mental health, sexual health and de-addiction in Malad West, Mumbai.",
    images: [Info.OG_IMAGE.url],
  },
};

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": siteUrl + "/#webpage",
    url: siteUrl + "/",
    name: "Psychiatrist in Malad West, Mumbai | Dr. Abhijeet Holambe",
    description: "Psychiatric consultations for mental health, sexual health and de-addiction in Malad West, Mumbai.",
    isPartOf: { "@id": siteUrl + "/#website" },
    about: { "@id": siteUrl + "/#person" },
    mainEntity: { "@id": siteUrl + "/#person" },
    inLanguage: "en-IN",
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
    <Hero />
    <VisitSteps />
    <About />
    <Services />
    <Reviews />
    <Locations />
    <section className="border-t border-line bg-white py-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">A clear first step</p><h2 className="mt-2 font-serif text-3xl font-medium text-ink">Talk through what you need.</h2><p className="mt-2 text-sm leading-6 text-body">Ask about an in-person or online appointment with Dr. Holambe.</p></div>
        <div className="flex flex-col gap-3 sm:flex-row"><a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-soft">Book on WhatsApp</a><a href={Info.PHONE_LINK} className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist">Call now</a></div>
      </div>
    </section>
  </>;
}
