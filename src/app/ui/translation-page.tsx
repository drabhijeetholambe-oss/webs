import Link from "next/link";

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

export default function TranslationPage({ locale, title, intro, paragraphs, sections = [], faqs = [], currentPath, englishPath, otherPath, otherLabel }: Props) {
  const schema = {"@context":"https://schema.org","@graph":[
    {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":locale === "hi" ? "होम" : "मुख्यपृष्ठ","item":siteUrl+"/"+locale},{"@type":"ListItem","position":2,"name":title,"item":siteUrl+currentPath}]},
    ...(faqs.length ? [{"@type":"FAQPage","mainEntity":faqs.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}] : [])
  ]};
  return <div className="min-h-screen bg-[#fbfaf7] px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 rounded-2xl border border-[#d8c9a9] bg-[#f6f0e2] px-4 py-3 text-xs font-semibold tracking-wide text-[#6d5a35]">
        {locale === "hi" ? "अनुवाद ड्राफ्ट — प्रकाशित करने से पहले समीक्षा आवश्यक है।" : "भाषांतर मसुदा — प्रकाशित करण्यापूर्वी तुमची समीक्षा आवश्यक आहे."}
      </div>
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#64736d]"><Link href={"/"+locale}>{locale === "hi" ? "होम" : "मुख्यपृष्ठ"}</Link><span className="mx-2">/</span><span>{title}</span></nav>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38695e]">{locale === "hi" ? "ड्राफ्ट अनुवाद" : "भाषांतर मसुदा"}</p>
      <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#183b37] sm:text-5xl">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-[#53655e]">{intro}</p>
      <div className="mt-8 space-y-5 text-base leading-8 text-[#4f615b]">{paragraphs.map(p=><p key={p}>{p}</p>)}</div>
      {sections.map(([heading,text])=><section key={heading} className="mt-10 rounded-3xl border border-[#e2e7df] bg-white p-6 sm:p-8"><h2 className="font-serif text-2xl text-[#183b37]">{heading}</h2><p className="mt-3 text-sm leading-7 text-[#53655e]">{text}</p></section>)}
      {faqs.length > 0 && <section className="mt-10"><h2 className="font-serif text-3xl text-[#183b37]">{locale === "hi" ? "अक्सर पूछे जाने वाले सवाल" : "वारंवार विचारले जाणारे प्रश्न"}</h2><div className="mt-5 divide-y divide-[#e2e7df] border-y border-[#e2e7df]">{faqs.map(([q,a])=><details key={q} className="py-5"><summary className="cursor-pointer font-medium text-[#183b37]">{q}</summary><p className="mt-3 text-sm leading-7 text-[#53655e]">{a}</p></details>)}</div></section>}
      <div className="mt-10 flex flex-wrap gap-3 text-sm"><Link href={englishPath} className="rounded-full border border-[#b5cfc0] bg-white px-4 py-2 text-[#315d50]">English</Link><Link href={otherPath} className="rounded-full border border-[#b5cfc0] bg-white px-4 py-2 text-[#315d50]">{otherLabel}</Link></div>
    </div>
  </div>;
}
