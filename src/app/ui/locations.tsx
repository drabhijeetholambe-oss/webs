export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Visit the clinic</p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-slate-900 sm:text-5xl">
            One location, focused care
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Consultations are available by prior appointment at Sun Multispeciality Hospital in Malad West, Mumbai. Contact the practice to confirm availability before visiting.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
          <div className="grid md:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-52 items-center justify-center bg-gradient-to-br from-teal-800 to-slate-900 p-8 text-white">
              <div className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl" aria-hidden="true">⌖</span>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-teal-100">Malad West</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Mumbai, Maharashtra</p>
              <h3 className="mt-2 font-serif text-3xl font-medium text-slate-900">Sun Multispeciality Hospital</h3>
              <p className="mt-3 text-slate-600">Appointments by prior booking. Please contact the practice to confirm timing and clinic details.</p>
              <a
                className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                href="https://www.google.com/maps/search/?api=1&query=Sun+Multispeciality+Hospital+Malad+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-600">
          See the <a className="underline underline-offset-4" href="#services">psychiatric services</a> or <a className="underline underline-offset-4" href="#footer">contact the practice</a> to ask about an appointment.
        </p>
      </div>
    </section>
  );
}
