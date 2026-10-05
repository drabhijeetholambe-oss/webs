import { Heart, Phone, Mail, MessageCircle, MapPin, Clock3 } from "lucide-react";
import * as Info from "../config/constants/info";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#102f2e] py-14 pb-28 text-[#f7f5ef] sm:py-16 sm:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-xl">
            <h2 className="flex items-center gap-3 font-serif text-2xl font-medium"><span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/[0.06]" aria-hidden="true"><Heart className="h-4 w-4 text-[#b5deca]" /></span>{Info.NAME}</h2>
            <p className="mt-5 leading-7 text-white/80">Psychiatrist and sexologist in Malad West, Mumbai. Appointments by prior booking.</p>
            <address className="mt-5 flex gap-3 not-italic text-sm leading-7 text-white/75"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#b5deca]" /><span>{Info.ADDRESS}</span></address>
          </div>
          <div className="space-y-4 text-sm text-white/75">
            <p className="flex items-start gap-3"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#b5deca]" /><span><span className="font-semibold text-white">Hours</span><br />{Info.HOURS}</span></p>
            <a href={Info.PHONE_LINK} className="flex items-center gap-3 transition hover:text-white"><Phone className="h-4 w-4 text-[#b5deca]" />{Info.PHONE}</a>
            <a href={Info.WHATSAPP_LINK} className="flex items-center gap-3 transition hover:text-white" target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4 text-[#b5deca]" />WhatsApp</a>
            <a href={"mailto:" + Info.EMAIL} className="flex items-center gap-3 transition hover:text-white"><Mail className="h-4 w-4 text-[#b5deca]" />{Info.EMAIL}</a>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1"><Link href="/contact" className="inline-flex text-[#b5deca] underline decoration-white/25 underline-offset-4 hover:text-white">Contact and directions</Link><Link href="/workplace-wellness" className="inline-flex text-[#b5deca] underline decoration-white/25 underline-offset-4 hover:text-white">Workplace wellness</Link></div>
          </div>
        </div>
        <div className="border-b border-white/15 py-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b5deca]">Find me on</p><div className="mt-3 flex flex-wrap gap-4 text-sm"><a href={Info.GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">Google Maps</a><a href={Info.PRACTO} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">Practo</a><a href={Info.YOUTUBE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">YouTube</a><a href={Info.LINKEDIN} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">LinkedIn</a></div></div><div className="flex flex-col gap-2 pt-6 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {Info.NAME}</span>
          <span>Malad West, Mumbai · Maharashtra</span>
        </div>
      </div>
    </footer>
  );
}
