import Image from "next/image";
import * as Info from "@/app/config/constants/info";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-brand-deep pt-[72px] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-mint/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-10 h-[26rem] w-[26rem] rounded-full border border-white/10" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 lg:min-h-[690px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-12">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="mb-6 hidden items-center gap-2 rounded-full border border-mint/30 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-mint sm:inline-flex lg:hidden xl:inline-flex">Psychiatric consultations <span aria-hidden="true" className="text-mint">·</span> Malad West, Mumbai</p>
          <h1 className="font-serif text-[clamp(2.8rem,8vw,5.65rem)] font-medium leading-[1.02] tracking-[-0.045em]">Psychiatrist in <span className="italic text-mint">Malad West, Mumbai</span></h1>
          <p className="mt-4 font-serif text-2xl italic text-mint sm:text-3xl">A thoughtful space to feel heard.</p>
          <p className="mt-5 text-lg font-medium text-white/80 sm:text-xl">{Info.NAME}<span aria-hidden="true" className="mx-2 hidden text-mint sm:inline">·</span><span className="block sm:inline">{Info.ROLE.replace("De-addiction", "De\u2011addiction")}</span></p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg lg:mx-0">Dr. Abhijeet Holambe, an alumnus of KEM Hospital and JJ Hospital, Mumbai, offers psychiatric consultations for anxiety, low mood, sleep difficulties, sexual health and substance-use concerns. In-person appointments are at Sun Multispeciality Hospital in Malad West, Mumbai; online consultations are available by arrangement.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-mint px-7 py-3 text-sm font-semibold text-brand-deep shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-white">Book on WhatsApp <span aria-hidden="true">↗</span></a>
            <a href={Info.PHONE_LINK} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/[0.06]"><span aria-hidden="true">☎</span> Call now</a>
          </div>
          <div className="mx-auto mt-9 grid max-w-xl grid-cols-2 gap-x-4 gap-y-4 border-t border-white/15 pt-6 text-left sm:grid-cols-4 lg:mx-0 lg:max-w-none">
            <div><p className="font-serif text-2xl text-white">6 years</p><p className="mt-1 text-[13px] leading-5 text-white/80">Clinical experience</p></div>
            <div><p className="font-serif text-2xl text-white">KEM · JJ</p><p className="mt-1 text-[13px] leading-5 text-white/80">Alumnus</p></div>
            <div><p className="font-serif text-2xl text-white">3 languages</p><p className="mt-1 text-[13px] leading-5 text-white/80">Hindi · Marathi · English</p></div>
            <div><p className="font-serif text-2xl text-white">In person</p><p className="mt-1 text-[13px] leading-5 text-white/80">Online appointments too</p></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[430px] lg:mr-2">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[13rem_13rem_2rem_2rem] border border-white/20 bg-white/[0.04]" />
          <div className="relative overflow-hidden rounded-[12rem_12rem_1.5rem_1.5rem] border border-white/20 bg-mint shadow-2xl shadow-black/25">
            <Image src="/dr-abhijeet-holambe-brain-model.jpg" alt="Dr. Abhijeet Holambe holding a brain model, psychiatrist in Malad West, Mumbai" width={1600} height={2844} sizes="(max-width: 1024px) 85vw, 430px" priority className="aspect-[4/5] w-full object-cover object-[center_30%]" />
          </div>
          <div className="absolute -bottom-4 -left-5 hidden rounded-2xl border border-white/15 bg-brand px-5 py-4 shadow-xl sm:block"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">Alumnus of</p><p className="mt-1 text-sm text-white">KEM Hospital · JJ Hospital</p></div>
        </div>
      </div>
    </section>
  );
}
