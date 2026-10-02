import Image from "next/image";
import * as Info from "@/app/config/constants/info";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#143936] pt-[72px] text-[#f7f5ef]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-10 h-[26rem] w-[26rem] rounded-full border border-white/10" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 lg:min-h-[690px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-12">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c7dfd2]/25 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c7dfd2] sm:text-xs">Psychiatric consultations <span aria-hidden="true" className="text-[#d4b883]">·</span> Malad West, Mumbai</p>
          <h1 className="font-serif text-[clamp(2.8rem,8vw,5.65rem)] font-medium leading-[1.02] tracking-[-0.045em]">A thoughtful space to <span className="italic text-[#b5deca]">feel heard.</span></h1>
          <p className="mt-5 text-base font-medium text-white/90 sm:text-lg">{Info.NAME} <span className="mx-2 text-[#d4b883]">·</span> {Info.ROLE}</p>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8 lg:mx-0">Dr. Abhijeet Holambe is a psychiatrist and sexologist offering confidential consultations for mental health, sexual health and de-addiction concerns. In-person consultations are at Sun Multispeciality Hospital in Malad West, Mumbai, and online appointments are available.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="https://wa.me/918169065210" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#b5deca] px-7 py-3 text-sm font-semibold text-[#143936] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#cbe9d9]">Book on WhatsApp <span aria-hidden="true">↗</span></a>
            <a href="tel:+918169065210" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/[0.06]"><span aria-hidden="true">☎</span> Call now</a>
          </div>
          <div className="mx-auto mt-9 grid max-w-xl grid-cols-2 gap-x-4 gap-y-4 border-t border-white/15 pt-6 text-left sm:grid-cols-4 lg:mx-0 lg:max-w-none">
            <div><p className="font-serif text-2xl text-white">6 years</p><p className="mt-1 text-[11px] leading-4 text-white/60 sm:text-xs">Clinical experience</p></div>
            <div><p className="font-serif text-2xl text-white">KEM · JJ</p><p className="mt-1 text-[11px] leading-4 text-white/60 sm:text-xs">Medical training</p></div>
            <div><p className="font-serif text-2xl text-white">3 languages</p><p className="mt-1 text-[11px] leading-4 text-white/60 sm:text-xs">Hindi · Marathi · English</p></div>
            <div><p className="font-serif text-2xl text-white">In person</p><p className="mt-1 text-[11px] leading-4 text-white/60 sm:text-xs">Online appointments too</p></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[430px] lg:mr-2">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[13rem_13rem_2rem_2rem] border border-white/15 bg-white/[0.04]" />
          <div className="relative overflow-hidden rounded-[12rem_12rem_1.5rem_1.5rem] border border-white/20 bg-[#d7e5db] shadow-2xl shadow-black/25">
            <Image src="/dr-abhijeet-holambe-brain-model.jpg" alt="Dr. Abhijeet Holambe, psychiatrist in Malad West, Mumbai" width={1600} height={2844} sizes="(max-width: 1024px) 85vw, 430px" className="aspect-[4/5] w-full object-cover object-[center_30%]" />
          </div>
          <div className="absolute -bottom-4 -left-5 hidden rounded-2xl border border-white/15 bg-[#1b4843] px-5 py-4 shadow-xl sm:block"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b5deca]">Consultations</p><p className="mt-1 text-sm text-white">Hindi · Marathi · English</p></div>
        </div>
      </div>
    </section>
  );
}
