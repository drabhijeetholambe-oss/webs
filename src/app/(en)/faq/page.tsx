import type { Metadata } from "next";
import Link from "next/link";
import * as Info from "@/app/config/constants/info";

const siteUrl = "https://www.drabhijeetholambe.com";
const faqs = [
  ["Is my consultation confidential?","Your consultation is handled confidentially within professional and legal limits. The doctor can explain how information is recorded and when disclosure may be required for safety or by law."],
  ["Do I need a referral to book?","You can request an appointment directly. A referral is not required for an initial consultation."],
  ["Are psychiatric medicines addictive?","Some medicines can cause dependence or withdrawal effects, while many do not. The risks vary by medicine; ask the prescriber before starting, changing, or stopping one."],
  ["How long does treatment take?","There is no single duration. It depends on the concern, response to care, and your circumstances. The plan and follow-up schedule are reviewed with you."],
  ["Do you see teenagers?","Adolescent mental health consultations are offered. A caregiver may be involved as appropriate to the young person’s age, needs, and safety."],
  ["Is online consultation possible?","Yes. Online appointments are available by arrangement. Some concerns require an in-person assessment, examination, or tests."],
  ["What should I bring to the first visit?","Bring a current medicine list, previous prescriptions or reports, and any questions you want to discuss. They are helpful but not required to begin."],
  ["How do I book an appointment?","Call or message the practice on WhatsApp using the contact details on this website to request an appointment."],
  ["What are the consultation fees?","The first consultation is ₹1,800. Follow-up consultations are ₹1,500."],
  ["Which languages can I use?","Consultations are available in Hindi, Marathi, and English."],
  ["Where is the clinic?","Dr. Holambe consults at Sun Multispeciality Hospital, Excel House, No. 6, B. J. Patel Road, opposite SNDT College, near Liberty Garden, Kanchpada, Malad West, Mumbai 400064."],
  ["What are the clinic hours?","The listed consultation hours are 11:00 am to 4:00 pm, Monday to Sunday. Appointments are by prior booking."],
  ["Can I bring a family member?","Yes, if you would find it helpful. You may also ask for time to speak with the doctor privately."],
  ["Can I stop my medication if I feel better?","Do not stop or change prescribed medication without discussing it with the prescriber. They can help you review benefits, risks, and a suitable plan."],
  ["What if I am in an emergency?","This website is not an emergency service. If you or someone else is at immediate risk, contact local emergency services or go to the nearest hospital."],
];
export const metadata: Metadata = {
  title: { absolute: "Psychiatrist FAQs, Malad West | Dr. Abhijeet Holambe" },
  description: "Answers about booking, privacy, medicines, fees, online consultations, hours and first visits with psychiatrist Dr. Abhijeet Holambe in Malad West, Mumbai.",
  alternates: { canonical: "/faq" },
};
export default function FAQPage() {
  const schema={"@context":"https://schema.org","@graph":[
    {"@type":"FAQPage","mainEntity":faqs.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))},
    {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem",position:1,name:"Home",item:siteUrl+"/"},{"@type":"ListItem",position:2,name:"FAQ",item:siteUrl+"/faq"}]}
  ]};
  return <div className="min-h-screen bg-porcelain px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <div className="mx-auto max-w-4xl">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-subtle"><Link href="/" className="hover:text-ink">Home</Link><span className="mx-2">/</span><span>FAQ</span></nav>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Before your visit</p><h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">Frequently asked questions</h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-body">Straightforward information about consultations with Dr. Abhijeet Holambe.</p>
      <div className="mt-9 divide-y divide-line border-y border-line">{faqs.map(([question,answer])=><details key={question} className="group py-5"><summary className="cursor-pointer list-none pr-8 font-medium text-ink">{question}<span aria-hidden="true" className="float-right text-ink-soft transition group-open:rotate-45">＋</span></summary><p className="mt-3 max-w-3xl text-sm leading-7 text-body">{answer}</p></details>)}</div>
      <div className="mt-10 rounded-3xl bg-mist p-6 sm:p-8"><h2 className="font-serif text-2xl text-ink">Need help booking?</h2><p className="mt-2 text-sm leading-6 text-body">Contact the practice to request an in-person or online appointment.</p><div className="mt-5 flex flex-col gap-3 sm:flex-row"><a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white">Book on WhatsApp</a><a href={Info.PHONE_LINK} className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong bg-white px-6 py-3 text-sm font-semibold text-ink">Call now</a></div></div>
    </div>
  </div>;
}
