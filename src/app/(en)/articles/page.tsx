import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/app/config/articles";

const siteUrl = "https://www.drabhijeetholambe.com";

export const metadata: Metadata = {
  title: "Mental Health Articles and Answers",
  description: "Clear answers from psychiatrist Dr. Abhijeet Holambe on fees, first visits, antidepressants, anxiety, sleep, addiction and sexual health.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": siteUrl + "/articles#webpage",
    url: siteUrl + "/articles",
    name: "Mental Health Articles and Answers",
    isPartOf: { "@id": siteUrl + "/#website" },
    author: { "@id": siteUrl + "/#person" },
    hasPart: articles.map((article) => ({ "@type": "MedicalWebPage", url: siteUrl + "/articles/" + article.slug, name: article.title })),
  };
  return (
    <div className="min-h-screen bg-porcelain px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Articles</p>
        <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">Answers to common questions</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-body">Practical information from Dr. Abhijeet Holambe on mental health, sexual health and addiction.</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {articles.map((article) => <li key={article.slug}><Link href={"/articles/" + article.slug} className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg">
            <h2 className="font-serif text-2xl font-medium leading-snug text-ink">{article.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-6 text-body">{article.description}</p>
            <span className="mt-4 text-sm font-semibold text-ink-soft">Read the answer <span aria-hidden="true" className="inline-block transition group-hover:translate-x-1">→</span></span>
          </Link></li>)}
        </ul>
      </div>
    </div>
  );
}
