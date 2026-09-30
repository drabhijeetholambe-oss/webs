import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.drabhijeetholambe.com";

const services = {
  "anxiety-panic-disorder": {
    title: "Anxiety & Panic Disorder",
    seoTitle: "Anxiety & Panic Disorder Psychiatrist in Mumbai",
    description:
      "Psychiatric consultation for anxiety symptoms, panic episodes, persistent worry, and related concerns in Malad West, Mumbai.",
    overview:
      "Anxiety can affect concentration, sleep, relationships, work, and day-to-day functioning. A psychiatric consultation can help clarify symptoms, contributing factors, and appropriate next steps.",
    topics: [
      "Persistent or excessive worry",
      "Panic episodes or intense fear",
      "Physical symptoms associated with anxiety",
      "Anxiety affecting sleep, work, or relationships",
    ],
  },
  "depression": {
    title: "Depression",
    seoTitle: "Depression Psychiatrist in Malad West, Mumbai",
    description:
      "Psychiatric consultation for depression symptoms, persistent low mood, reduced motivation, and related mental health concerns.",
    overview:
      "Depression can involve changes in mood, motivation, sleep, appetite, concentration, and interest in usual activities. A consultation can assess the pattern and severity of symptoms and discuss suitable care options.",
    topics: [
      "Persistent low mood or sadness",
      "Reduced interest or motivation",
      "Sleep or appetite changes",
      "Concentration and functioning difficulties",
    ],
  },
  "sleep-disorders": {
    title: "Sleep Disorders",
    seoTitle: "Sleep Disorder Psychiatrist in Mumbai",
    description:
      "Psychiatric consultation for insomnia and other sleep difficulties in Malad West, Mumbai, including sleep concerns associated with mental health.",
    overview:
      "Sleep difficulties can occur on their own or alongside anxiety, depression, substance use, and other conditions. A consultation can review sleep patterns, contributing factors, and possible next steps.",
    topics: [
      "Difficulty falling asleep",
      "Frequent or early waking",
      "Poor-quality or non-restorative sleep",
      "Sleep problems affecting daytime functioning",
    ],
  },
  "sexual-health": {
    title: "Sexual Health",
    seoTitle: "Sexual Health Psychiatrist in Mumbai",
    description:
      "Confidential psychiatric consultation for sexual health, intimacy, and related psychological concerns in Mumbai.",
    overview:
      "Sexual health concerns can be influenced by psychological, relationship, medical, medication-related, and lifestyle factors. A confidential consultation provides space to discuss symptoms and decide whether further assessment or treatment is appropriate.",
    topics: [
      "Sexual concerns affecting wellbeing or relationships",
      "Intimacy and relationship difficulties",
      "Psychological factors affecting sexual functioning",
      "Sexual concerns associated with stress, anxiety, or mood",
    ],
  },
  "de-addiction": {
    title: "De-addiction & Substance Use",
    seoTitle: "De-addiction Psychiatrist in Mumbai",
    description:
      "Psychiatric consultation for substance use, dependence, recovery planning, and related mental health concerns in Mumbai.",
    overview:
      "Substance use can affect physical health, mood, sleep, relationships, and work. A psychiatric assessment can review patterns of use, risks, co-occurring mental health concerns, and appropriate support options.",
    topics: [
      "Alcohol or drug use causing problems",
      "Difficulty reducing or stopping use",
      "Cravings or loss of control",
      "Substance use occurring with anxiety, depression, or sleep problems",
    ],
  },
} as const;

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) return {};

  const canonical = `/services/${slug}`;

  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: `${siteUrl}${canonical}`,
      title: service.seoTitle,
      description: service.description,
      siteName: "Dr. Abhijeet Holambe",
      locale: "en_IN",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${siteUrl}/services/${slug}#webpage`,
        url: `${siteUrl}/services/${slug}`,
        name: service.seoTitle,
        description: service.description,
        inLanguage: "en-IN",
        about: {
          "@type": "MedicalCondition",
          name: service.title,
        },
        author: {
          "@type": "Person",
          name: "Dr. Abhijeet Holambe",
          url: siteUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.title,
            item: `${siteUrl}/services/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span>{service.title}</span>
        </nav>

        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Dr. Abhijeet Holambe · Psychiatrist in Mumbai
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-slate-900 sm:text-5xl">
            {service.seoTitle}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {service.description}
          </p>
        </header>

        <section className="mt-12">
          <h2 className="font-serif text-3xl font-medium text-slate-900">
            What a consultation can cover
          </h2>
          <p className="mt-4 leading-8 text-slate-700">{service.overview}</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {service.topics.map((topic) => (
              <div
                key={topic}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="font-medium text-slate-900">{topic}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-teal-100 bg-teal-50/60 p-7">
          <h2 className="font-serif text-2xl font-medium text-slate-900">
            Consultation in Malad West, Mumbai
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Appointments are available by prior booking at Sun Multispeciality
            Hospital in Malad West, Mumbai. Online consultation options are
            also available. Contact the practice to confirm current
            availability and appointment timing.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/918169065210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Book via WhatsApp
            </a>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800"
            >
              View all services
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
