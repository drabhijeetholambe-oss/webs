"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/app/config/constants/info";

const Hero = () => {
  const handleGetStartedClick = (): void => {
    const phoneNumber = PHONE.replace(/\D/g, "");
    const message = encodeURIComponent("Hi Dr. Abhijeet Holambe, I'd like to schedule an appointment.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#143936] pt-24 text-[#f7f5ef]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-48 h-[34rem] w-[34rem] rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-24 h-[26rem] w-[26rem] rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#8fc6ad]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:min-h-[720px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-12">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c7dfd2]/25 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c7dfd2] sm:text-xs">
            Psychiatrist <span aria-hidden="true" className="text-[#d4b883]">·</span> Mumbai
          </p>
          <h1 className="font-serif text-[clamp(2.8rem,8vw,5.65rem)] font-medium leading-[1.02] tracking-[-0.045em]">
            A thoughtful space to <span className="italic text-[#b5deca]">feel heard.</span>
          </h1>
          <p className="mt-5 text-base font-medium text-white/85 sm:text-lg">Dr. Abhijeet Holambe <span className="mx-2 text-[#d4b883]">·</span> MBBS, MD Psychiatry</p>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8 lg:mx-0">
            Confidential psychiatric consultations for concerns including anxiety, depression, sleep, sexual health, and substance use. Online consultation options are also available.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button onClick={handleGetStartedClick} className="h-12 rounded-full bg-[#b5deca] px-7 text-sm font-semibold text-[#143936] shadow-lg shadow-black/10 transition hover:bg-[#cbe9d9]">
              Enquire about an appointment <span aria-hidden="true">↗</span>
            </Button>
            <a href="#about" className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/[0.06]">
              Meet Dr. Holambe
            </a>
          </div>
          <div className="mx-auto mt-9 flex max-w-xl flex-wrap justify-center gap-x-5 gap-y-2 border-t border-white/15 pt-5 text-xs text-white/65 sm:text-sm lg:mx-0 lg:justify-start">
            <span>Private and confidential</span><span aria-hidden="true" className="text-[#d4b883]">·</span>
            <span>Appointments by prior booking</span><span aria-hidden="true" className="text-[#d4b883]">·</span>
            <span>Online options available</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px] lg:mr-2">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[13rem_13rem_2rem_2rem] border border-white/15 bg-white/[0.04]" />
          <div className="relative overflow-hidden rounded-[12rem_12rem_1.5rem_1.5rem] border border-white/20 bg-[#d7e5db] shadow-2xl shadow-black/25">
            <Image src="/dr-abhijeet-holambe-brain-model.jpg" alt="Dr. Abhijeet Holambe in his clinic" title="Dr. Abhijeet Holambe" width={1600} height={2844} priority sizes="(max-width: 1024px) 85vw, 430px" className="aspect-[4/5] w-full object-cover object-[center_30%]" />
          </div>
          <div className="absolute -bottom-4 -left-5 hidden rounded-2xl border border-white/15 bg-[#1b4843] px-5 py-4 shadow-xl sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b5deca]">Consultations</p>
            <p className="mt-1 text-sm text-white">By prior appointment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
