import Image from "next/image";
import { GraduationCap } from "lucide-react";
import * as Info from "@/app/config/constants/info";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-gradient-to-b from-porcelain to-mist pt-[72px] text-ink">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full border border-line" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-10 h-[26rem] w-[26rem] rounded-full border border-line" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 lg:min-h-[690px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-12">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="mb-6 hidden items-center gap-2 rounded-full border border-line-strong bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-bronze sm:inline-flex lg:hidden xl:inline-flex">Psychiatric consultations <span aria-hidden="true" className="text-gold">·</span> Malad West, Mumbai</p>
          <h1 className="font-serif text-[clamp(2.8rem,8vw,5.65rem)] font-medium leading-[1.02] tracking-[-0.045em]">Psychiatrist in <span className="italic text-bronze">Malad West, Mumbai</span></h1>
          <p className="mt-4 font-serif text-2xl italic text-bronze sm:text-3xl">A thoughtful space to feel heard.</p>
          <p className="mt-5 text-lg font-medium text-body sm:text-xl">{Info.NAME}<span aria-hidden="true" className="mx-2 hidden text-gold sm:inline">·</span><span className="block sm:inline">{Info.ROLE.replace("De-addiction", "De\u2011addiction")}</span></p>
          <p className="mx-auto mt-5 flex max-w-xl items-start gap-3 rounded-2xl border border-gold/40 bg-white/70 px-4 py-3 text-left text-sm leading-6 text-body sm:text-base lg:mx-0"><GraduationCap aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><span><span className="font-semibold text-ink">Alumnus of KEM Hospital and JJ Hospital, Mumbai.</span> MBBS from Seth GS Medical College and KEM Hospital; MD Psychiatry from Grant Medical College and JJ Hospital.</span></p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-body sm:text-lg lg:mx-0">Dr. Abhijeet Holambe offers psychiatric consultations for anxiety, low mood, sleep difficulties, sexual health and substance-use concerns. In-person appointments are at Sun Multispeciality Hospital in Malad West, Mumbai; online consultations are available by arrangement.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-porcelain shadow-lg shadow-ink/10 transition hover:-translate-y-0.5 hover:bg-ink-soft">Book on WhatsApp <span aria-hidden="true">↗</span></a>
            <a href={Info.PHONE_LINK} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-7 py-3 text-sm font-medium text-ink transition hover:border-ink hover:bg-white/60"><span aria-hidden="true">☎</span> Call now</a>
          </div>
          <div className="mx-auto mt-9 grid max-w-xl grid-cols-2 gap-x-4 gap-y-4 border-t border-line pt-6 text-left sm:grid-cols-4 lg:mx-0 lg:max-w-none">
            <div><p className="font-serif text-2xl text-ink">6 years</p><p className="mt-1 text-[13px] leading-5 text-body">Clinical experience</p></div>
            <div><p className="font-serif text-2xl text-ink">KEM · JJ</p><p className="mt-1 text-[13px] leading-5 text-body">Alumnus</p></div>
            <div><p className="font-serif text-2xl text-ink">3 languages</p><p className="mt-1 text-[13px] leading-5 text-body">Hindi · Marathi · English</p></div>
            <div><p className="font-serif text-2xl text-ink">In person</p><p className="mt-1 text-[13px] leading-5 text-body">Online appointments too</p></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[430px] lg:mr-2">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[13rem_13rem_2rem_2rem] border border-line bg-white/40" />
          <div className="relative overflow-hidden rounded-[12rem_12rem_1.5rem_1.5rem] border border-line bg-cloud shadow-2xl shadow-ink/10">
            <Image src="/dr-abhijeet-holambe-brain-model.jpg" alt="Dr. Abhijeet Holambe holding a brain model, psychiatrist in Malad West, Mumbai" width={1600} height={2844} sizes="(max-width: 1024px) 85vw, 430px" priority className="aspect-[4/5] w-full object-cover object-[center_30%]" />
          </div>
          <div className="absolute -bottom-4 -left-5 hidden rounded-2xl border border-line bg-porcelain px-5 py-4 shadow-xl sm:block"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Alumnus of</p><p className="mt-1 text-sm text-ink">KEM Hospital · JJ Hospital</p></div>
        </div>
      </div>
    </section>
  );
}
