import type { Metadata } from "next";
import Hero from "./ui/hero";
import About from "./ui/about";
import Services from "./ui/services";
import Locations from "./ui/locations";
import VisitSteps from "./ui/visit-steps";

const siteUrl = "https://www.drabhijeetholambe.com";

export const metadata: Metadata = {
  title: "Psychiatrist in Malad West, Mumbai",
  description: "Dr. Abhijeet Holambe offers psychiatric consultations in Malad West, Mumbai for anxiety, depression, sleep, sexual health, substance use, and related concerns. Consultations are available in Hindi, Marathi, and English.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": siteUrl + "/#webpage",
    url: siteUrl + "/",
    name: "Psychiatrist in Malad West, Mumbai | Dr. Abhijeet Holambe",
    description: "Psychiatric consultations and clinic information for Malad West, Mumbai.",
    isPartOf: { "@id": siteUrl + "/#website" },
    about: { "@id": siteUrl + "/#physician" },
    inLanguage: "en-IN",
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
    <Hero />
    <VisitSteps />
    <About />
    <Services />
    <Locations />
    <section className="bg-[#f3efe5] py-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42796d]">A clear first step</p><h2 className="mt-2 font-serif text-3xl font-medium text-[#183b37]">Talk through what you need.</h2><p className="mt-2 text-sm leading-6 text-[#60736e]">Ask about an in-person or online appointment with Dr. Holambe.</p></div>
        <div className="flex flex-col gap-3 sm:flex-row"><a href="https://wa.me/918169065210" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#183b37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285a50]">Book on WhatsApp</a><a href="tel:+918169065210" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b5cfc0] bg-white px-6 py-3 text-sm font-semibold text-[#183b37] transition hover:bg-[#edf2eb]">Call now</a></div>
      </div>
    </section>
  </>;
}
