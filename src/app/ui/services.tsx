import ServicesCard from "@/components/services-cards";

const Services = () => {
  return (
    <section id="services" className="bg-[#f2f1eb] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-11 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42796d]">Areas of care</p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-[#183b37] sm:text-5xl">
            Support for what you’re facing.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#60736e]">
            Explore consultations for anxiety, depression, sexual health, sleep, substance use, and other concerns. Each service card describes topics to discuss; assessment and care recommendations are individual.
          </p>
          <p className="mt-3 text-sm text-[#60736e]">
            For appointment enquiries at Sun Multispeciality Hospital in Malad West or about online consultations, <a className="font-medium text-[#286457] underline decoration-[#b5cfc0] underline-offset-4" href="#footer">contact the practice</a>.
          </p>
        </div>
        <ServicesCard />
      </div>
    </section>
  );
};

export default Services;
