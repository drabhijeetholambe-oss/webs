import Link from "next/link";
import * as Info from "@/app/config/constants/info";
import { translationExtras } from "@/app/config/translation-extras";
import YoutubeVideo from "@/components/youtube-video";

type FAQ = [string, string];
type Props = {
  locale: "hi" | "mr";
  title: string;
  intro: string;
  paragraphs: string[];
  sections?: [string, string][];
  faqs?: FAQ[];
  currentPath: string;
  englishPath: string;
  otherPath: string;
  otherLabel: string;
};

const siteUrl = "https://www.drabhijeetholambe.com";

export default function TranslationPage({ locale, title, intro, paragraphs, sections: baseSections = [], faqs: baseFaqs = [], currentPath, englishPath, otherPath, otherLabel }: Props) {
  const extra = translationExtras[currentPath];
  const sections = [...baseSections, ...(extra?.sections ?? [])];
  const faqs = [...baseFaqs, ...(extra?.faqs ?? [])];
  const hi = locale === "hi";
  const schema = {"@context":"https://schema.org","@graph":[
    {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":locale === "hi" ? "होम" : "मुख्यपृष्ठ","item":siteUrl+"/"+locale},{"@type":"ListItem","position":2,"name":title,"item":siteUrl+currentPath}]},
    ...(faqs.length ? [{"@type":"FAQPage","mainEntity":faqs.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}] : [])
  ]};
  return <div className="min-h-screen bg-porcelain px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <div className="mx-auto max-w-4xl">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-subtle"><Link href={"/"+locale}>{locale === "hi" ? "होम" : "मुख्यपृष्ठ"}</Link><span className="mx-2">/</span><span>{title}</span></nav>
      <p className="text-sm font-semibold text-ink-soft">{locale === "hi" ? "मलाड वेस्ट, मुंबई" : "मालाड वेस्ट, मुंबई"}</p>
      <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-body">{intro}</p>
      <div className="mt-8 space-y-5 text-base leading-8 text-body">{paragraphs.map(p=><p key={p}>{p}</p>)}</div>
      {sections.map(([heading,text])=><section key={heading} className="mt-10 rounded-3xl border border-line bg-white p-6 sm:p-8"><h2 className="font-serif text-2xl text-ink">{heading}</h2><p className="mt-3 text-sm leading-7 text-body">{text}</p></section>)}
      {extra?.video && <section className="mt-10 rounded-3xl bg-mist p-6 sm:p-8"><h2 className="font-serif text-2xl text-ink">{hi ? "वीडियो: डॉ. होलंबे समझाते हैं" : "व्हिडिओ: डॉ. होलंबे समजावून सांगतात"}</h2><YoutubeVideo id={extra.video.id} title={extra.video.title} className="mt-6" /></section>}
      {faqs.length > 0 && <section className="mt-10"><h2 className="font-serif text-3xl text-ink">{locale === "hi" ? "अक्सर पूछे जाने वाले सवाल" : "वारंवार विचारले जाणारे प्रश्न"}</h2><div className="mt-5 divide-y divide-line border-y border-line">{faqs.map(([q,a])=><details key={q} className="py-5"><summary className="cursor-pointer font-medium text-ink">{q}</summary><p className="mt-3 text-sm leading-7 text-body">{a}</p></details>)}</div></section>}
      <section className="mt-10 rounded-3xl bg-brand p-6 text-white sm:p-8"><h2 className="font-serif text-2xl">{hi ? "अपॉइंटमेंट लें" : "अपॉइंटमेंट घ्या"}</h2><p className="mt-2 text-sm leading-6 text-white/80">{hi ? "सन मल्टीस्पेशियलिटी हॉस्पिटल, मलाड वेस्ट में या ऑनलाइन। सुबह 11 से शाम 4 बजे तक, सोमवार से रविवार।" : "सन मल्टीस्पेशालिटी हॉस्पिटल, मालाड वेस्ट येथे किंवा ऑनलाइन. सकाळी 11 ते दुपारी 4, सोमवार ते रविवार."}</p><div className="mt-5 flex flex-col gap-3 sm:flex-row"><a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-mint px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-white">{hi ? "WhatsApp पर बुक करें" : "WhatsApp वर बुक करा"}</a><a href={Info.PHONE_LINK} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">{hi ? "कॉल करें" : "कॉल करा"}</a></div></section>
      <div className="mt-10 flex flex-wrap gap-3 text-sm"><Link href={englishPath} className="rounded-full border border-line-strong bg-white px-4 py-2 text-ink-soft">English</Link><Link href={otherPath} className="rounded-full border border-line-strong bg-white px-4 py-2 text-ink-soft">{otherLabel}</Link></div>
    </div>
  </div>;
}
