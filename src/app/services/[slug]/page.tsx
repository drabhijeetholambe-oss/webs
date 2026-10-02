import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, serviceSlugs, type ServiceSlug } from "../service-data";

const siteUrl = "https://www.drabhijeetholambe.com";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical: "/services/" + slug, languages: slug === "anxiety-panic-disorder" ? { "en-IN": "/services/anxiety-panic-disorder", "hi-IN": "/hi/services/anxiety-panic-disorder", "mr-IN": "/mr/services/anxiety-panic-disorder" } : slug === "depression" ? { "en-IN": "/services/depression", "hi-IN": "/hi/services/depression", "mr-IN": "/mr/services/depression" } : slug === "sexual-health" ? { "en-IN": "/services/sexual-health", "hi-IN": "/hi/services/sexual-health", "mr-IN": "/mr/services/sexual-health" } : undefined },
    openGraph: {
      type: "article",
      url: siteUrl + "/services/" + slug,
      title: service.seoTitle,
      description: service.description,
      siteName: "Dr. Abhijeet Holambe",
      locale: "en_IN",
      images: [{ url: "/dr-abhijeet-holambe-brain-model.jpg", width: 1600, height: 2844, alt: "Dr. Abhijeet Holambe holding a brain model in Malad West, Mumbai" }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": siteUrl + "/services/" + slug + "#webpage",
        url: siteUrl + "/services/" + slug,
        name: service.seoTitle,
        description: service.description,
        inLanguage: "en-IN",
        isPartOf: { "@id": siteUrl + "/#website" },
        about: { "@type": "MedicalCondition", name: service.title },
        author: { "@id": siteUrl + "/#person" },
        mainEntity: { "@id": siteUrl + "/services/" + slug + "#faq" },
      },
      {
        "@type": "FAQPage",
        "@id": siteUrl + "/services/" + slug + "#faq",
        mainEntity: service.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl + "/" },
          { "@type": "ListItem", position: 2, name: "Services", item: siteUrl + "/#services" },
          { "@type": "ListItem", position: 3, name: service.title, item: siteUrl + "/services/" + slug },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fbfaf7] pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#64736d]">
          <Link href="/" className="hover:text-[#183b37]">Home</Link><span className="mx-2" aria-hidden="true">/</span>
          <Link href="/#services" className="hover:text-[#183b37]">Services</Link><span className="mx-2" aria-hidden="true">/</span><span>{service.title}</span>
        </nav>
        <header className="border-b border-[#e2e7df] pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38695e]">{slug === "sexual-health" ? "Psychiatrist and sexologist · Malad West, Mumbai" : "Psychiatric consultation · Malad West, Mumbai"}</p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-[#183b37] sm:text-5xl">{service.heading}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#53655e]">{slug === "sexual-health" ? "As a psychiatrist and sexologist, Dr. Holambe offers a confidential, respectful setting to discuss sexual health concerns and their psychological, relationship, medication, and general health factors." : service.description}</p>
        </header>
        <section className="mt-10">
          <h2 className="font-serif text-3xl font-medium text-[#183b37]">Understanding {service.title.toLowerCase()}</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-[#4f615b]">
            {service.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
        <section className="mt-10 rounded-3xl border border-[#e2e7df] bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-medium text-[#183b37]">Common signs and symptoms</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.signs.map((sign) => <li key={sign} className="flex gap-3 rounded-2xl bg-[#f5f5ef] p-4 text-sm leading-6 text-[#4f615b]"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a9844b]" />{sign}</li>)}
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="font-serif text-3xl font-medium text-[#183b37]">When to see a psychiatrist</h2>
          <p className="mt-4 text-base leading-8 text-[#4f615b]">{service.when}</p>
        </section>
        <section className="mt-10">
          <h2 className="font-serif text-3xl font-medium text-[#183b37]">How treatment works</h2>
          <p className="mt-4 text-base leading-8 text-[#4f615b]">{service.care}</p>
          <p className="mt-4 text-base leading-8 text-[#4f615b]">Medication is prescribed only after an individual assessment and discussion. You can ask about the purpose, possible side effects, alternatives, and how follow-up will work. There are no guaranteed results; the plan is reviewed as your needs and circumstances change.</p>
        </section>
        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-[#edf2eb] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#38695e]">Your first appointment</p>
            <h2 className="mt-3 font-serif text-2xl font-medium text-[#183b37]">A conversation at your pace</h2>
            <p className="mt-3 text-sm leading-7 text-[#53655e]">The first visit is a chance to explain what has been troubling you, when it began, and what you hope will change. Dr. Holambe will ask about your health, sleep, daily life, and any medicines or past care that may be relevant. You can ask questions and share only what you feel ready to discuss. Together, you can consider an assessment and agree on next steps. Bring a current medicine list or previous reports if you have them; they are helpful but not required to begin.</p>
          </div>
          <div className="rounded-3xl bg-[#183b37] p-6 text-white sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b5deca]">Online consultation</p>
            <h2 className="mt-3 font-serif text-2xl font-medium">Care from a private space</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">Online appointments are available by arrangement. Choose a private, quiet place and keep any reports or medicine details nearby. Some concerns need an in-person visit, examination, or further tests; if so, the doctor will explain why and discuss the next step. Online appointments are not a substitute for urgent emergency care.</p>
            <a href="https://wa.me/918169065210" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-[#b5deca] px-5 py-3 text-sm font-semibold text-[#183b37] transition hover:bg-white">Ask about an online appointment</a>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="font-serif text-3xl font-medium text-[#183b37]">Frequently asked questions</h2>
          <div className="mt-5 divide-y divide-[#e2e7df] border-y border-[#e2e7df]">
            {service.faqs.map(([question, answer]) => <details key={question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 font-medium text-[#183b37] marker:hidden">{question}<span aria-hidden="true" className="float-right text-[#a9844b] transition group-open:rotate-45">＋</span></summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#53655e]">{answer}</p>
            </details>)}
          </div>
        </section>
        <p className="mt-10 border-t border-[#e2e7df] pt-6 text-xs leading-5 text-[#64736d]">Last reviewed by Dr. Abhijeet Holambe, MD Psychiatry — October 2026.</p>
        <section className="mt-12 rounded-3xl border border-[#e6dfcf] bg-[#f3efe5] p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image src="/dr-abhijeet-holambe-clinic.jpg" alt="Dr. Abhijeet Holambe, psychiatrist in Malad West" width={1600} height={2844} sizes="96px" className="h-24 w-24 rounded-full object-cover object-[center_25%]" />
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#38695e]">About the psychiatrist</p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-[#183b37]">Dr. Abhijeet Holambe</h2>
              <p className="mt-2 text-sm leading-6 text-[#53655e]">MBBS, Seth GS Medical College and KEM Hospital · MD Psychiatry, Grant Medical College and JJ Hospital · 6 years of clinical experience · Consultations in Hindi, Marathi, and English.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/918169065210" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#183b37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285a50]">Book on WhatsApp</a>
            <a href="tel:+918169065210" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b5cfc0] px-6 py-3 text-sm font-semibold text-[#183b37] transition hover:bg-white">Call now</a>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium text-[#183b37]">Related areas of care</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {service.related.map((relatedSlug) => {
              const relatedService = services[relatedSlug as ServiceSlug];
              return <Link key={relatedSlug} href={"/services/" + relatedSlug} className="rounded-full border border-[#d9e1d9] bg-white px-4 py-2 text-sm text-[#315d50] transition hover:border-[#42796d] hover:bg-[#edf2eb]">{relatedService.title}</Link>;
            })}
          </div>
        </section>
      </article>
    </div>
  );
}
