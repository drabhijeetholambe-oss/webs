import { MapPin, Clock3, Phone } from "lucide-react";
import * as Info from "@/app/config/constants/info";

export default function Locations() {
  return (
    <section id="locations" className="scroll-reveal bg-[#143936] py-20 text-[#f7f5ef] sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mb-9 max-w-xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b5deca]">Clinic information</p><h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">Plan your visit.</h2><p className="mt-5 leading-7 text-white/70">In-person psychiatric consultations at Sun Multispeciality Hospital, Malad West. Online appointments are also available.</p></div>
        <div className="grid overflow-hidden rounded-3xl bg-[#f7f5ef] text-[#183b37] shadow-2xl shadow-black/10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#38695e]">Malad West · Mumbai</p><h3 className="mt-3 font-serif text-2xl font-medium sm:text-3xl">Sun Multispeciality Hospital</h3>
            <address className="mt-4 flex gap-3 not-italic text-sm leading-7 text-[#53655e]"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#38695e]" /><span>{Info.ADDRESS}</span></address>
            <p className="mt-5 flex gap-3 text-sm leading-6 text-[#53655e]"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#38695e]" /><span><strong className="text-[#183b37]">Hours</strong><br />{Info.HOURS}<br />Appointments by prior booking.</span></p>
            <a href="tel:+918169065210" className="mt-5 flex items-center gap-3 text-sm font-medium text-[#315d50]"><Phone aria-hidden="true" className="h-4 w-4" />{Info.PHONE}</a>
            <a className="mt-7 inline-flex items-center justify-center rounded-full bg-[#183b37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285a50]" href="https://share.google/ZsC1gdVb6fxq6Vq69" target="_blank" rel="noopener noreferrer">Open directions <span aria-hidden="true" className="ml-2">↗</span></a>
          </div>
          <div className="min-h-[340px] bg-[#e5ebe4] sm:min-h-[420px]"><iframe title="Map to Sun Multispeciality Hospital in Malad West, Mumbai" src="https://www.google.com/maps?q=Sun%20Multispeciality%20Hospital%2C%20Malad%20West%2C%20Mumbai&output=embed" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="min-h-[340px] w-full border-0 sm:min-h-[420px]" /></div>
        </div>
      </div>
    </section>
  );
}
