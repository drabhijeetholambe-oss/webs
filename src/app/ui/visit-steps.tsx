import { MessageCircle, ClipboardList, Compass } from "lucide-react";

const steps = [
  { number: "01", icon: MessageCircle, title: "Get in touch", text: "Call or message the practice to request an appointment and choose an in-person or online consultation." },
  { number: "02", icon: ClipboardList, title: "Share your concerns", text: "Talk about what has changed, your health, and what you would like help with. Bring relevant reports or a medicine list if you have them." },
  { number: "03", icon: Compass, title: "Agree on next steps", text: "Review the assessment, ask questions, and discuss a care plan or further evaluation that fits your needs." },
];

export default function VisitSteps() {
  return (
    <section id="first-visit" className="scroll-reveal bg-mist py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Your first visit</p><h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">What to expect at your first appointment</h2><p className="mt-4 leading-7 text-body">Know what to expect before you book a consultation.</p></div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map(({number,icon:Icon,title,text}) => <li key={number} className="rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"><div className="flex items-center justify-between"><span className="font-serif text-3xl text-ink-soft">{number}</span><Icon aria-hidden="true" className="h-5 w-5 text-ink-soft" /></div><h3 className="mt-6 font-serif text-2xl font-medium text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-body">{text}</p></li>)}
        </ol>
      </div>
    </section>
  );
}
