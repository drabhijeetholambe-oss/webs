import Image from "next/image";
import * as Info from "@/app/config/constants/info";

const About = () => {
  return (
    <section id="about" className="bg-[#fbfaf7] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-[#cbd9cf]" />
          <Image
            src="/dr-abhijeet-holambe-clinic.jpg"
            alt="Dr. Abhijeet Holambe in his clinic"
            title="Dr. Abhijeet Holambe"
            width={1600}
            height={2844}
            sizes="(max-width: 768px) 90vw, 400px"
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[center_30%] shadow-xl"
          />
          <a
            href="/dr-abhijeet-holambe-profile-poster.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-[#e2e7df] bg-white p-3 shadow-lg transition hover:-translate-y-1 sm:left-7"
          >
            <Image
              src="/dr-abhijeet-holambe-profile-poster.jpg"
              alt="Practice information poster for Dr. Abhijeet Holambe"
              width={1024}
              height={1536}
              sizes="64px"
              loading="lazy"
              className="h-16 w-12 rounded-lg bg-[#f4f2eb] object-contain"
            />
            <span>
              <span className="block text-sm font-semibold text-[#183b37]">Practice information</span>
              <span className="mt-1 block text-xs text-[#71817a]">View full-size poster ↗</span>
            </span>
          </a>
        </div>

        <div className="pt-5 text-center md:pt-0 md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42796d]">A little about the practice</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-[#183b37] sm:text-5xl">Care shaped around your story.</h2>
          <p className="mt-6 whitespace-pre-line text-base leading-8 text-[#60736e]">{Info.ABOUT}</p>
          <p className="mt-5 text-sm leading-7 text-[#60736e]">
            Explore the <a className="font-medium text-[#286457] underline decoration-[#b5cfc0] underline-offset-4" href="#services">areas of care</a> or <a className="font-medium text-[#286457] underline decoration-[#b5cfc0] underline-offset-4" href="#footer">contact the practice</a> to confirm appointment availability and location.
          </p>
          <div className="mt-6 border-t border-[#e1e7df] pt-5 text-sm text-[#60736e]">
            <span className="font-semibold text-[#183b37]">Clinical areas</span>
            <span className="mt-2 block">{Info.SPECIALISATIONS.join(" · ")}</span>
          </div>
          <p className="mt-4 text-xs font-semibold tracking-wide text-[#42796d]">{Info.QUALIFICATIONS.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
