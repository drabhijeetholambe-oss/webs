import Image from "next/image";
import * as Info from "@/app/config/constants/info"
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/img.jpeg"
            alt="Dr. Abhijeet Holambe, psychiatrist" title="Dr. Abhijeet Holambe"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
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
            Learn about <a className="underline underline-offset-4" href="#services">psychiatric services</a> or <a className="underline underline-offset-4" href="#footer">contact the practice</a> to confirm appointment availability and location.
          </p>
          <p className="text-gray-600 font-light">
            <strong>Specializations:</strong> <span>{Info.SPECIALISATIONS.join(" , ")}</span>
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
