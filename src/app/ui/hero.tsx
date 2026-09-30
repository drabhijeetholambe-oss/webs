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
    <section id="hero" className="relative isolate min-h-[92svh] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 pt-24 text-white">
      <div aria-hidden="true" className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-36 left-1/4 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(92svh-6rem)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200/25 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-100 sm:text-sm">
            Psychiatrist <span aria-hidden="true" className="text-teal-300">·</span> Mumbai
          </p>
          <h1 className="font-serif text-6xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
            Dr. Abhijeet <span className="text-teal-200">Holambe</span>
          </h1>
          <h2 className="mt-7 text-xl font-medium text-white sm:text-2xl">
            Psychiatric consultations in Malad West
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg lg:mx-0">
            Thoughtful, confidential consultations for concerns including anxiety, depression, sleep, sexual health, and substance use. Online consultation options are also available.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button
              onClick={handleGetStartedClick}
              className="h-12 rounded-full bg-teal-300 px-7 text-base font-semibold text-slate-950 shadow-lg shadow-teal-950/30 transition hover:bg-teal-200"
            >
              Book a consultation
            </Button>
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-base font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              Meet Dr. Holambe
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-300">
            MBBS · MD Psychiatry <span className="mx-2 text-teal-300">|</span> Appointments by prior booking
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mr-4">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] border border-white/10 bg-white/5" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-slate-800 shadow-2xl shadow-black/40">
            <Image
              src="/dr-abhijeet-holambe.jpeg"
              alt="Dr. Abhijeet Holambe, psychiatrist in Mumbai"
              title="Dr. Abhijeet Holambe"
              width={459}
              height={459}
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent px-6 pb-6 pt-20">
              <p className="text-lg font-semibold">Dr. Abhijeet Holambe</p>
              <p className="mt-1 text-sm text-slate-200">Psychiatrist · MBBS, MD Psychiatry</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/15 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur sm:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">Clinic</p>
            <p className="mt-1 text-sm text-white">Malad West, Mumbai</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
