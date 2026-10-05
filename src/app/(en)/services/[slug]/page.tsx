import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, serviceSlugs, type ServiceSlug } from "@/app/config/service-data";
import { serviceExtras } from "@/app/config/service-extras";
import { articles } from "@/app/config/articles";
import YoutubeVideo from "@/components/youtube-video";
import * as Info from "@/app/config/constants/info";

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
      images: [Info.OG_IMAGE],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) notFound();

  const extra = serviceExtras[slug as ServiceSlug] ?? {};
  const faqs = [...service.faqs, ...(extra.faqs ?? [])];
  const relatedArticles = articles.filter((article) => article.related.includes(slug as ServiceSlug));
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
        mainEntity: faqs.map(([question, answer]) => ({
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
    <div className="min-h-screen bg-porcelain pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-subtle">
          <Link href="/" className="hover:text-ink">Home</Link><span className="mx-2" aria-hidden="true">/</span>
          <Link href="/#services" className="hover:text-ink">Services</Link><span className="mx-2" aria-hidden="true">/</span><span>{service.title}</span>
        </nav>
        <header className="border-b border-line pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">{slug === "sexual-health" ? "Psychiatrist and sexologist · Malad West, Mumbai" : "Psychiatric consultation · Malad West, Mumbai"}</p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">{service.heading}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-body">{slug === "sexual-health" ? "As a psychiatrist and sexologist, Dr. Holambe offers a confidential, respectful setting to discuss sexual health concerns and their psychological, relationship, medication, and general health factors." : service.description}</p>
        </header>
        <section className="mt-10">
          <h2 className="font-serif text-3xl font-medium text-ink">Understanding {service.title.toLowerCase()}</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-body">
            {service.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
        {extra.details?.map((detail) => <section key={detail.heading} className="mt-10">
          <h2 className="font-serif text-3xl font-medium text-ink">{detail.heading}</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-body">{detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>)}
        <section className="mt-10 rounded-3xl border border-line bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-medium text-ink">Common signs and symptoms</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.signs.map((sign) => <li key={sign} className="flex gap-3 rounded-2xl bg-mist p-4 text-sm leading-6 text-body"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{sign}</li>)}
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="font-serif text-3xl font-medium text-ink">When to see a psychiatrist</h2>
          <p className="mt-4 text-base leading-8 text-body">{service.when}</p>
        </section>
        <section className="mt-10">
          <h2 className="font-serif text-3xl font-medium text-ink">How treatment works</h2>
          <p className="mt-4 text-base leading-8 text-body">{service.care}</p>
          <p className="mt-4 text-base leading-8 text-body">Medication is prescribed only after an individual assessment and discussion. You can ask about the purpose, possible side effects, alternatives, and how follow-up will work. There are no guaranteed results; the plan is reviewed as your needs and circumstances change.</p>
        </section>
        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-mist p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Your first appointment</p>
            <h2 className="mt-3 font-serif text-2xl font-medium text-ink">A conversation at your pace</h2>
            <p className="mt-3 text-sm leading-7 text-body">The first visit is a chance to explain what has been troubling you, when it began, and what you hope will change. Dr. Holambe will ask about your health, sleep, daily life, and any medicines or past care that may be relevant. You can ask questions and share only what you feel ready to discuss. Together, you can consider an assessment and agree on next steps. Bring a current medicine list or previous reports if you have them; they are helpful but not required to begin.</p>
          </div>
          <div className="rounded-3xl bg-brand p-6 text-white sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">Online consultation</p>
            <h2 className="mt-3 font-serif text-2xl font-medium">Care from a private space</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">Online appointments are available by arrangement. Choose a private, quiet place and keep any reports or medicine details nearby. Some concerns need an in-person visit, examination, or further tests; if so, the doctor will explain why and discuss the next step. Online appointments are not a substitute for urgent emergency care.</p>
            <a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-sky px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white">Ask about an online appointment</a>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="font-serif text-3xl font-medium text-ink">Frequently asked questions</h2>
          <div className="mt-5 divide-y divide-line border-y border-line">
            {faqs.map(([question, answer]) => <details key={question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 font-medium text-ink marker:hidden">{question}<span aria-hidden="true" className="float-right text-ink-soft transition group-open:rotate-45">＋</span></summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-body">{answer}</p>
            </details>)}
          </div>
        </section>
        {extra.videos && <section className="mt-12 rounded-3xl bg-mist p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-medium text-ink">Watch: Dr. Holambe explains</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">{extra.videos.map((video) => <YoutubeVideo key={video.id} id={video.id} title={video.title} />)}</div>
        </section>}
        {relatedArticles.length > 0 && <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium text-ink">Read more</h2>
          <ul className="mt-4 space-y-3">{relatedArticles.map((article) => <li key={article.slug}><Link href={"/articles/" + article.slug} className="text-base text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">{article.title}</Link></li>)}</ul>
        </section>}
        <p className="mt-10 border-t border-line pt-6 text-xs leading-5 text-subtle">Last reviewed by Dr. Abhijeet Holambe, MD Psychiatry — October 2026.</p>
        <section className="mt-12 rounded-3xl border border-line bg-mist p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image src="/dr-abhijeet-holambe-clinic.jpg" alt="Dr. Abhijeet Holambe, psychiatrist in Malad West" width={1600} height={2844} sizes="96px" className="h-24 w-24 rounded-full object-cover object-[center_25%]" />
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">About the psychiatrist</p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-ink">Dr. Abhijeet Holambe</h2>
              <p className="mt-2 text-sm leading-6 text-body">MBBS, Seth GS Medical College and KEM Hospital · MD Psychiatry, Grant Medical College and JJ Hospital · 6 years of clinical experience · Consultations in Hindi, Marathi, and English.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-soft">Book on WhatsApp</a>
            <a href={Info.PHONE_LINK} className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white">Call now</a>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium text-ink">Related areas of care</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {service.related.map((relatedSlug) => {
              const relatedService = services[relatedSlug as ServiceSlug];
              return <Link key={relatedSlug} href={"/services/" + relatedSlug} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft transition hover:border-accent hover:bg-mist">{relatedService.title}</Link>;
            })}
          </div>
        </section>
      </article>
    </div>
  );
}
