"use client";

import { useState, useRef } from "react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

type Location = {
  name: string;
  query: string;
};

const locations: Location[] = [
  {
    name: "Kandivali West – United Hospital",
    query: "United Hospital Kandivali West",
  },
  {
    name: "Malad - Zenith Clinic",
    query: "Zenith Clinic Mumbai",
  },
  {
    name: "Andheri – Evolve Wellness",
    query: "Evolve Wellness Andheri",
  },
  {
    name: "Bandra",
    query: "Bandra Mumbai",
  },
];

export default function GoogleMapsButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(containerRef, () => {
    if (open) {
      setOpen(false);
    }
  });

  const handleLocationClick = (query: string) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(mapsUrl, "_blank");
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-25 z-50 flex flex-col items-end gap-2">
      <div className={`flex flex-col items-end gap-2 ${open ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-200`}>
        {locations.map((location) => (
          <button
            key={location.name}
            onClick={() => handleLocationClick(location.query)}
            className="bg-white text-slate-900 border border-slate-300 rounded-full px-4 py-2 shadow-lg hover:bg-slate-100 transition"
            aria-label={`Open Google Maps for ${location.name}`}
          >
            {location.name}
          </button>
        ))}
      </div>

      <button
        onClick={() => setOpen((prev: boolean) => !prev)}
        className="bg-blue-100 border border-gray-200 hover:border-gray-300 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Open Google Maps locations"
      >
        <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#EA4335"/>
        </svg>
      </button>
    </div>
  );
}
