import { MapPin } from "lucide-react";
import * as Info from "@/app/config/constants/info";

export default function GoogleMapsButton() {
  return <a href={Info.GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-24 z-40 hidden h-14 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-semibold text-ink shadow-lg transition hover:-translate-y-0.5 hover:bg-mist md:inline-flex md:px-5" aria-label="View Sun Multispeciality Hospital in Malad West on Google Maps">
    <MapPin className="h-5 w-5 text-gold" aria-hidden="true" /><span>Sun Hospital · Malad West</span>
  </a>;
}
