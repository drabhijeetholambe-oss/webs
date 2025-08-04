import Image from "next/image";
import * as Info from "@/app/config/constants/info"
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/therapist.jpg" // 👉 Replace with your image in /public
            alt="Therapist"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-serif font-light text-gray-900">
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
        {Info.ABOUT}
          </p>
          <p className="text-gray-600 font-light">
            <strong>Specializations:</strong> Anxiety Management, Trauma Therapy, Mindfulness-Based CBT
          </p>
        {Info.QUALIFICATIONS.map(q=>(   <p key={q} className="text-gray-500 text-sm italic">
           {q}
          </p>))}
        </div>
      </div>
    </section>
  );
};

export default About;
