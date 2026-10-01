import Link from "next/link";
import { Activity, Brain, BriefcaseBusiness, HeartHandshake, Moon, Shield, Sparkles, Users, Wind } from "lucide-react";
import { serviceCards } from "@/app/services/service-data";

const icons = [Wind, Brain, Moon, HeartHandshake, Shield, Activity, Sparkles, Brain, Users, Shield, HeartHandshake, Activity, BriefcaseBusiness, Sparkles, Users, Activity, HeartHandshake];

export default function ServicesCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {serviceCards.map((service, index) => {
        const Icon = icons[index % icons.length];
        return <Link key={service.slug} href={"/services/" + service.slug} prefetch={false} className="group flex min-h-64 flex-col rounded-3xl border border-[#e5e8e1] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#9db7a7] hover:shadow-xl hover:shadow-[#183b37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42796d]">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#edf2eb] transition group-hover:bg-[#dfeae1]"><Icon aria-hidden="true" className="h-5 w-5 text-[#38695e]" strokeWidth={1.7} /></span>
          <h3 className="mt-5 font-serif text-xl font-medium leading-snug text-[#183b37]">{service.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-[#53655e]">{service.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#315d50]">Read the guide <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span></span>
        </Link>;
      })}
    </div>
  );
}
