import { Quote } from "lucide-react";
import * as Info from "@/app/config/constants/info";

const sources = [
  { name: "Google", text: "Read reviews on the clinic's Google profile.", href: Info.GOOGLE_MAPS, label: "Google reviews" },
  { name: "Practo", text: "See patient feedback and ratings on Practo.", href: Info.PRACTO, label: "Practo reviews" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-reveal bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Patient reviews</p><h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">Hear from people who have visited</h2><p className="mt-4 text-sm leading-6 text-body">Independent reviews are published on Google and Practo.</p></div>
        <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:grid-cols-2">
          {sources.map((source) => <a key={source.name} href={source.href} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-line bg-porcelain p-6 transition hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md">
            <Quote aria-hidden="true" className="h-5 w-5 text-ink-soft" />
            <p className="mt-4 font-serif text-2xl text-ink">{source.name}</p>
            <p className="mt-1 text-sm leading-6 text-body">{source.text}</p>
            <p className="mt-4 text-sm font-semibold text-ink-soft">{source.label} <span aria-hidden="true">↗</span></p>
          </a>)}
        </div>
      </div>
    </section>
  );
}
