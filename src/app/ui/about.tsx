import Image from "next/image";
import * as Info from "@/app/config/constants/info"
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-4">
          <Image
            src="/dr-abhijeet-holambe-clinic.jpg"
            alt="Dr. Abhijeet Holambe in his clinic holding a brain model"
            title="Dr. Abhijeet Holambe"
            width={1600}
            height={2844}
            sizes="(max-width: 768px) 100vw, 400px"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover object-[center_30%] shadow-xl"
          />
          <a
            href="/dr-abhijeet-holambe-profile-poster.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md"
          >
            <Image
              src="/dr-abhijeet-holambe-profile-poster.jpg"
              alt="Practice information poster for Dr. Abhijeet Holambe"
              width={1024}
              height={1536}
              sizes="88px"
              loading="lazy"
              className="h-24 w-16 rounded-lg bg-slate-50 object-contain"
            />
            <span>
              <span className="block font-medium text-slate-900">Practice information</span>
              <span className="mt-1 block text-sm text-slate-600">Open the full-size poster</span>
            </span>
          </a>
        </div>

        {/* Right: Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-serif font-light text-gray-900">
            About Dr. Abhijeet Holambe
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
        {Info.ABOUT}
          </p>
          <p className="text-gray-600 font-light">
            Explore the <a className="underline underline-offset-4" href="#services">psychiatric services</a> or <a className="underline underline-offset-4" href="#footer">contact the practice</a> to confirm appointment availability and location.
          </p>
          <p className="text-gray-600 font-light">
            <strong>Clinical areas:</strong> <span>{Info.SPECIALISATIONS.join(" · ")}</span>
          </p>
          
        <p  className="text-gray-500 text-sm italic">
           {Info.QUALIFICATIONS.join(" , ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
