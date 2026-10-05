import ServicesCards from "@/components/services-cards";
import * as Info from "@/app/config/constants/info";

export default function Services() {
  return (
    <section id="services" className="scroll-reveal bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Areas of care</p>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">Psychiatric services and areas of care</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-body">Read patient-friendly guides to concerns such as anxiety, depression, sleep difficulties, sexual health and substance use. Dr. Holambe offers appointments in Malad West and online when suitable; assessment and care recommendations are individual.</p>
        </div>
        <ServicesCards />
        <div className="mt-12 rounded-3xl bg-mist p-6 text-center sm:p-8"><p className="font-serif text-2xl text-ink">Not sure where to start?</p><p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-body">Describe what has been troubling you and the practice can help you choose an appointment.</p><a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-soft">Ask about an appointment</a></div>
      </div>
    </section>
  );
}
