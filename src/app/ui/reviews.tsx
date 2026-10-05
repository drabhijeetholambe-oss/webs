import { Quote } from "lucide-react";
import * as Info from "@/app/config/constants/info";

const sources = [
  { name: "Google", text: "Read reviews on the clinic's Google profile.", href: Info.GOOGLE_MAPS, label: "Google reviews" },
  { name: "Practo", text: "See patient feedback and ratings on Practo.", href: Info.PRACTO, label: "Practo reviews" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-reveal bg-[#fbfaf7] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38695e]">Patient reviews</p><h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-[#183b37] sm:text-4xl">Hear from people who have visited</h2><p className="mt-4 text-sm leading-6 text-[#45564f]">Independent reviews are published on Google and Practo.</p></div>
        <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:grid-cols-2">
          {sources.map((source) => <a key={source.name} href={source.href} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-[#e2e7df] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#b5cfc0] hover:shadow-md">
            <Quote aria-hidden="true" className="h-5 w-5 text-[#d4b883]" />
            <p className="mt-4 font-serif text-2xl text-[#183b37]">{source.name}</p>
            <p className="mt-1 text-sm leading-6 text-[#45564f]">{source.text}</p>
            <p className="mt-4 text-sm font-semibold text-[#315d50]">{source.label} <span aria-hidden="true">↗</span></p>
          </a>)}
        </div>
      </div>
    </section>
  );
}
