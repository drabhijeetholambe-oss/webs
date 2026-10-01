import ServicesCards from "@/components/services-cards";

export default function Services() {
  return (
    <section id="services" className="scroll-reveal bg-[#fbfaf7] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#42796d]">Areas of care</p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-[#183b37] sm:text-5xl">Support for what you’re facing.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#60736e]">Explore clear, patient-friendly guides to concerns we can discuss in a psychiatric consultation. Assessment and care recommendations are individual.</p>
        </div>
        <ServicesCards />
        <div className="mt-12 rounded-3xl bg-[#edf2eb] p-6 text-center sm:p-8"><p className="font-serif text-2xl text-[#183b37]">Not sure where to start?</p><p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#60736e]">Describe what has been troubling you and the practice can help you choose an appointment.</p><a href="https://wa.me/918169065210" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#183b37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285a50]">Ask about an appointment</a></div>
      </div>
    </section>
  );
}
