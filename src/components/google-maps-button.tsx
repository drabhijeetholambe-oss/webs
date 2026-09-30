import { MapPin } from "lucide-react";

export default function GoogleMapsButton() {
  return (
    <a
      href="https://www.google.com/maps/search/?api=1&query=Sun+Multispeciality+Hospital+Malad+West+Mumbai"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-24 z-50 inline-flex h-14 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-50 sm:px-5"
      aria-label="View Sun Multispeciality Hospital in Malad West on Google Maps"
    >
      <MapPin className="h-5 w-5 text-teal-700" aria-hidden="true" />
      <span className="hidden sm:inline">Sun Hospital · Malad West</span>
      <span className="sr-only sm:hidden">Sun Hospital · Malad West</span>
    </a>
  );
}
