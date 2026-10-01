import { MapPin } from "lucide-react";

export default function GoogleMapsButton() {
  return <a href="https://share.google/ZsC1gdVb6fxq6Vq69" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-24 z-40 hidden h-14 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-50 md:inline-flex md:px-5" aria-label="View Sun Multispeciality Hospital in Malad West on Google Maps">
    <MapPin className="h-5 w-5 text-teal-700" aria-hidden="true" /><span>Sun Hospital · Malad West</span>
  </a>;
}
