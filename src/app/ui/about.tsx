import Image from "next/image";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import * as Info from "@/app/config/constants/info";

export default function About() {
  return (
    <section id="about" className="scroll-reveal bg-[#fbfaf7] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-[#cbd9cf]" />
          <Image src="/dr-abhijeet-holambe-clinic.jpg" alt="Dr. Abhijeet Holambe in his clinic in Malad West, Mumbai" width={1600} height={2844} sizes="(max-width: 768px) 90vw, 400px" loading="lazy" className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[center_30%] shadow-xl" />
        </div>
        <div className="pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#38695e]">A little about the practice</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-[#183b37] sm:text-5xl">Meet Dr. Abhijeet Holambe</h2>
          <div className="mt-6 rounded-2xl border border-[#e6dfcf] bg-[#f3efe5] p-5">
            <p className="flex items-center gap-2 font-serif text-xl font-medium text-[#183b37]"><GraduationCap aria-hidden="true" className="h-5 w-5 text-[#a9844b]" />Alumnus of KEM Hospital and JJ Hospital</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#45564f]">
              <li><span className="font-semibold text-[#183b37]">MBBS</span> · Seth GS Medical College and KEM Hospital, Mumbai</li>
              <li><span className="font-semibold text-[#183b37]">MD Psychiatry</span> · Grant Medical College and JJ Hospital, Mumbai</li>
            </ul>
          </div>
          <p className="mt-6 whitespace-pre-line text-base leading-8 text-[#45564f]">{Info.ABOUT}</p><p className="mt-4 text-sm leading-7 text-[#45564f]"><span className="font-semibold text-[#183b37]">Role:</span> {Info.ROLE}</p>
          <div className="mt-6 border-t border-[#e1e7df] pt-5 text-sm text-[#45564f]"><span className="font-semibold text-[#183b37]">Clinical areas</span><span className="mt-2 block">{Info.SPECIALISATIONS.join(" · ")}</span></div>
                    <div className="mt-6 grid gap-3 border-t border-[#e1e7df] pt-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#eef2eb] p-4"><p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#38695e]">Consultation languages</p><p className="mt-2 text-sm font-medium text-[#183b37]">{Info.CONSULTATION_LANGUAGES.join(" · ")}</p></div>
            <div className="rounded-2xl bg-[#eef2eb] p-4"><p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#38695e]">Consultation fees</p><p className="mt-2 text-sm leading-6 text-[#183b37]">First consultation: {Info.FIRST_CONSULTATION_FEE}<br />Follow-ups: {Info.FOLLOW_UP_CONSULTATION_FEE}</p></div>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/about" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#183b37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285a50]">About Dr. Holambe</Link><Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#b5cfc0] bg-white px-6 py-3 text-sm font-semibold text-[#183b37] transition hover:bg-[#edf2eb]">Contact and directions</Link></div>
        </div>
      </div>
    </section>
  );
}
