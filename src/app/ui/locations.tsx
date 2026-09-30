const locations = [
  {
    name: "Kandivali West",
    clinic: "United Hospital",
    detail: "Appointments by prior booking.",
    href: "https://share.google/1L04Enu0BNKXV3sNd",
  },
  {
    name: "Malad",
    clinic: "Zenith Clinic",
    detail: "Contact the practice to confirm current hours and availability.",
    href: "https://share.google/dTEnltj1hVFCY2GXY",
  },
  {
    name: "Andheri",
    clinic: "Evolve Wellness",
    detail: "Appointments by prior booking.",
    href: "https://share.google/YnwDkxTiBHwwuR0V5",
  },
  {
    name: "Bandra",
    clinic: "By appointment",
    detail: "Contact the practice to confirm current clinic details.",
    href: "https://share.google/c0Be75GNsJpxAhPLW",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-light text-gray-900 text-center mb-6">
          Consultation Locations in Mumbai
        </h2>
        <p className="max-w-3xl mx-auto mb-10 text-center text-gray-600 leading-relaxed">
          Dr. Abhijeet Holambe sees patients by appointment in Kandivali West, Malad, Andheri, and Bandra. Clinic availability can vary, so contact the practice to confirm the location and timing before visiting.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <li key={location.name} className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-medium text-gray-900">{location.name}</h3>
              <p className="mt-2 text-gray-700">{location.clinic}</p>
              <p className="mt-1 text-sm text-gray-600">{location.detail}</p>
              <a
                className="mt-4 inline-block underline underline-offset-4"
                href={location.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${location.name} location on Google Maps`}
              >
                View on Google Maps
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-gray-600">
          See the <a className="underline underline-offset-4" href="#services">psychiatric services</a> or <a className="underline underline-offset-4" href="#footer">contact the practice</a> to ask about an appointment.
        </p>
      </div>
    </section>
  );
}
