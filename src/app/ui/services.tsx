import ServicesCard from "@/components/services-cards";
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-light text-gray-900 mb-12">
          Psychiatric and Mental Health Services in Mumbai
        </h2>
        <p className="max-w-3xl mx-auto mb-10 text-gray-600 leading-relaxed">
          Explore <a className="underline underline-offset-4" href="#anxiety-panic-disorder">anxiety and panic consultations</a>, <a className="underline underline-offset-4" href="#depression-counseling">depression consultations</a>, <a className="underline underline-offset-4" href="#sexual-health">sexual health consultations</a>, and <a className="underline underline-offset-4" href="#de-addiction-therapy">de-addiction support</a>, alongside sleep, mood, and other concerns. Each service card summarizes topics to discuss with a psychiatrist; assessment and care recommendations are individual. To ask about appointments in Kandivali West, Malad, or elsewhere in Mumbai, <a className="underline underline-offset-4" href="#footer">contact the practice</a>.
        </p>

       <ServicesCard/>
      </div>
    </section>
  );
};

export default Services;
