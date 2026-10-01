export default function Locations() {
  return (
    <section id="locations" className="bg-[#143936] py-20 text-[#f7f5ef] sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b5deca]">Clinic information</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">Plan your visit.</h2>
          <p className="mt-5 max-w-md leading-7 text-white/70">
            Appointments are by prior booking. Please contact the practice to confirm the doctor’s current clinic, availability, and timing before travelling.
          </p>
        </div>
        <div className="rounded-3xl bg-[#f7f5ef] p-7 text-[#183b37] shadow-2xl shadow-black/10 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#42796d]">Malad West · Mumbai</p>
          <h3 className="mt-3 font-serif text-2xl font-medium sm:text-3xl">Sun Multispeciality Hospital</h3>
          <address className="mt-4 not-italic leading-7 text-[#60736e]">
            Excel House, No. 6, B. J. Patel Road,<br />
            opposite SNDT College, near Liberty Garden,<br />
            Kanchpada, Malad West, Mumbai 400064.
          </address>
          <p className="mt-4 text-sm leading-6 text-[#60736e]">Please confirm this is the doctor’s current consultation location before your visit.</p>
          <a className="mt-6 inline-flex items-center justify-center rounded-full bg-[#183b37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285a50]" href="https://www.google.com/maps/search/?api=1&query=Sun+Multispeciality+Hospital+Excel+House+No+6+BJ+Patel+Road+Malad+West+Mumbai+400064" target="_blank" rel="noopener noreferrer">
            Open directions <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
