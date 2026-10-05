import Link from "next/link";
import { Activity, Brain, BriefcaseBusiness, HeartHandshake, Moon, Shield, Sparkles, Users, Wind } from "lucide-react";
import { serviceCards } from "@/app/config/service-data";

const FEATURED_COUNT = 6;
const icons = [Wind, Brain, Moon, HeartHandshake, Shield, Activity, Sparkles, Brain, Users, Shield, HeartHandshake, Activity, BriefcaseBusiness, Sparkles, Users, Activity, HeartHandshake];

export default function ServicesCards() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.slice(0, FEATURED_COUNT).map((service, index) => {
          const Icon = icons[index % icons.length];
          return <Link key={service.slug} href={"/services/" + service.slug} prefetch={false} className="group flex flex-col rounded-3xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-olive hover:shadow-xl hover:shadow-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-olive-dark transition group-hover:bg-olive"><Icon aria-hidden="true" className="h-5 w-5 text-olive-light" strokeWidth={1.7} /></span>
            <h3 className="mt-5 font-serif text-2xl font-medium leading-snug text-ink">{service.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-body">{service.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-olive">Read the guide <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span></span>
          </Link>;
        })}
      </div>
      <div className="mt-10 rounded-3xl border border-line bg-white p-6 sm:p-8">
        <h3 className="font-serif text-2xl font-medium text-ink">More areas of care</h3>
        <ul className="mt-5 flex flex-wrap gap-3">
          {serviceCards.slice(FEATURED_COUNT).map((service) => <li key={service.slug}><Link href={"/services/" + service.slug} prefetch={false} className="inline-flex min-h-11 items-center rounded-full border border-line bg-porcelain px-4 py-2 text-sm text-olive transition hover:border-olive hover:bg-mist">{service.title}</Link></li>)}
        </ul>
      </div>
    </>
  );
}
