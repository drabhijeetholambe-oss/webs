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
  description: "Psychiatrist Dr. Abhijeet Holambe offers mental health, sexual health and de-addiction consultations in Malad West, Mumbai, with online appointments available.",
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
    <section className="bg-[#f3efe5] py-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38695e]">A clear first step</p><h2 className="mt-2 font-serif text-3xl font-medium text-[#183b37]">Talk through what you need.</h2><p className="mt-2 text-sm leading-6 text-[#53655e]">Ask about an in-person or online appointment with Dr. Holambe.</p></div>
        <div className="flex flex-col gap-3 sm:flex-row"><a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#183b37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285a50]">Book on WhatsApp</a><a href={Info.PHONE_LINK} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b5cfc0] bg-white px-6 py-3 text-sm font-semibold text-[#183b37] transition hover:bg-[#edf2eb]">Call now</a></div>
      </div>
    </section>
  </>;
}
