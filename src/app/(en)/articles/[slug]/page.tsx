import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import * as Info from "@/app/config/constants/info";
import { articles, articleSlugs, getArticle } from "@/app/config/articles";
import { services } from "@/app/config/service-data";
import YoutubeVideo from "@/components/youtube-video";

const siteUrl = "https://www.drabhijeetholambe.com";
const formatDate = (date: string) => new Date(date + "T12:00:00Z").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: "/articles/" + slug },
    openGraph: { type: "article", url: siteUrl + "/articles/" + slug, title: article.title, description: article.description, siteName: Info.NAME, locale: "en_IN", publishedTime: article.published, modifiedTime: article.updated, images: [Info.OG_IMAGE] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const url = siteUrl + "/articles/" + slug;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": url + "#webpage",
        url,
        name: article.title,
        headline: article.title,
        description: article.description,
        inLanguage: "en-IN",
        datePublished: article.published,
        dateModified: article.updated,
        isPartOf: { "@id": siteUrl + "/#website" },
        author: { "@id": siteUrl + "/#person" },
        reviewedBy: { "@id": siteUrl + "/#person" },
        lastReviewed: article.updated,
        image: siteUrl + Info.OG_IMAGE.url,
      },
      ...(article.faqs.length ? [{ "@type": "FAQPage", "@id": url + "#faq", mainEntity: article.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }] : []),
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl + "/" },
        { "@type": "ListItem", position: 2, name: "Articles", item: siteUrl + "/articles" },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ] },
    ],
  };
  const others = articles.filter((other) => other.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-porcelain pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-subtle">
          <Link href="/" className="hover:text-ink">Home</Link><span className="mx-2" aria-hidden="true">/</span>
          <Link href="/articles" className="hover:text-ink">Articles</Link>
        </nav>
        <header className="border-b border-line pb-8">
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-8 text-body">{article.intro}</p>
          <p className="mt-6 text-sm text-subtle">By <Link href="/about" className="font-semibold text-ink underline decoration-line-strong underline-offset-4">{Info.NAME}</Link>, MD Psychiatry · Updated {formatDate(article.updated)}</p>
        </header>
        {article.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-serif text-3xl font-medium text-ink">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-body">{paragraph}</p>)}
            {section.points && <ul className="mt-4 space-y-2">{section.points.map((point) => <li key={point} className="flex gap-3 text-base leading-7 text-body"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{point}</li>)}</ul>}
          </section>
        ))}
        {article.video && <section className="mt-12 rounded-3xl bg-mist p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-medium text-ink">Watch: Dr. Holambe explains</h2>
          <YoutubeVideo id={article.video.id} title={article.video.title} className="mt-6" />
        </section>}
        {article.crisisNote && <p className="mt-10 rounded-2xl border border-line bg-white p-5 text-sm leading-6 text-body"><strong className="text-ink">Need help now?</strong> If you or someone else is at risk of harm, go to the nearest emergency department or call Tele MANAS on <a href="tel:14416" className="font-semibold text-ink underline">14416</a> (free, 24 hours).</p>}
        {article.faqs.length > 0 && <section className="mt-12">
          <h2 className="font-serif text-3xl font-medium text-ink">Common questions</h2>
          <div className="mt-5 divide-y divide-line border-y border-line">
            {article.faqs.map(([question, answer]) => <div key={question} className="py-5"><h3 className="font-medium text-ink">{question}</h3><p className="mt-2 text-sm leading-7 text-body">{answer}</p></div>)}
          </div>
        </section>}
        <section className="mt-12 rounded-3xl bg-brand p-6 text-white sm:p-8">
          <h2 className="font-serif text-2xl font-medium">Talk to Dr. Holambe</h2>
          <p className="mt-2 text-sm leading-6 text-white/80">In person at Sun Multispeciality Hospital, Malad West, or online. Hindi, Marathi and English.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row"><a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-mint px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-white">Book on WhatsApp</a><a href={Info.PHONE_LINK} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Call now</a></div>
        </section>
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-medium text-ink">Related care</h2>
          <div className="mt-4 flex flex-wrap gap-3">{article.related.map((related) => <Link key={related} href={"/services/" + related} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft transition hover:border-accent hover:bg-mist">{services[related].title}</Link>)}</div>
          <h2 className="mt-10 font-serif text-2xl font-medium text-ink">More articles</h2>
          <ul className="mt-4 space-y-3">{others.map((other) => <li key={other.slug}><Link href={"/articles/" + other.slug} className="text-base text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">{other.title}</Link></li>)}</ul>
        </section>
        <p className="mt-10 border-t border-line pt-6 text-xs leading-5 text-subtle">This article is general information and not a substitute for a personal consultation.</p>
      </article>
    </div>
  );
}
