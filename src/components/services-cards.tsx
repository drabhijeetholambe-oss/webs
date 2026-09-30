"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/app/config/constants/info";
import Image from "next/image";
import Link from "next/link";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<any>(null);

  const handleBookSession = (serviceTitle: string) => {
    // Remove all non-numeric characters from phone number
    const phoneNumber = PHONE.replace(/\D/g, "");

    // Pre-filled message with service title
    const message = encodeURIComponent(`Hi Dr. Abhijeet Holambe, I'd like to schedule an appointment about ${serviceTitle}.`);

    // WhatsApp URL (works for both mobile app and web)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open in new tab/window (or app on mobile)
    window.open(whatsappUrl, "_blank");

    // Close the modal
    setActive(null);
  };

  return (
    <div className="p-6">
      {/* Modal */}
      <Dialog  open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        {active && (
<DialogContent
  className="max-w-[calc(100vw-2rem)] w-full rounded-2xl p-0 overflow-hidden border border-gray-200 shadow-lg 
    transition-all duration-300 ease-out
    data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
    data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
    max-h-[calc(100vh-4rem)] " // ✨ horizontal margin added
>
  <DialogHeader className="p-4 border-b">
    <DialogTitle className="text-xl font-semibold">{active.title}</DialogTitle>
    <DialogDescription className="text-sm text-gray-500">
      {active.description}
    </DialogDescription>
  </DialogHeader>

  {/* Image */}
  <Image width={500} height={500} src={active.src} alt={active.title} title={active.title} sizes="(max-width: 768px) 100vw, 768px" loading="lazy" className="w-full h-56 object-cover" />

  {/* Scrollable Content */}
  <div className="p-4 text-sm text-gray-700 overflow-y-auto max-h-[40vh]">
    {typeof active.content === "function" ? active.content() : active.content}
  </div>

  {/* CTA Button */}
  <div className="p-4 border-t">
    <Button onClick={() => handleBookSession(active.title)} className="w-full">
      {active.ctaText}
    </Button>
  </div>
</DialogContent>
        )}
      </Dialog>

      {/* Responsive service tiles */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card) => (
          <article
            id={card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
            key={card.title}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-900/10"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <Image
                width={800}
                height={500}
                src={card.src}
                alt={card.imageAlt}
                title={card.title}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-serif text-xl font-medium text-slate-900">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{card.description}</p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <Button type="button" variant="outline" className="w-full rounded-full border-slate-300 text-slate-800 transition hover:border-teal-700 hover:bg-teal-50 hover:text-teal-900" onClick={() => setActive(card)}>
                  Quick overview
                </Button>
                {card.slug && (
                  <Link
                    href={`/services/${card.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-3 text-center text-sm font-medium text-slate-800 transition hover:border-teal-700 hover:bg-teal-50 hover:text-teal-900"
                  >
                    Detailed guide
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    description: "Confidential consultation for sexual health and relationship intimacy concerns.",
    title: "Sexual Health",
    slug: "sexual-health",
    src: "/sexual_disorder_counselling.jpg",
    imageAlt: "Supportive hand gesture during a confidential counselling conversation",
    ctaText: "Book Session",
    content: () => (
      <p>
        Consultations provide a confidential setting to discuss sexual health and intimacy concerns. The clinician can explain appropriate next steps after learning about each person's needs.
      </p>
    ),
  },
  {
    description: "Consultation for low mood, reduced motivation, and other concerns associated with depression.",
    title: "Depression Counseling",
    slug: "depression",
    src: "/depression.png",
    imageAlt: "Illustration of a patient and clinician talking in a consultation",
    ctaText: "Book Session",
    content: () => (
      <p>
        A psychiatric assessment can explore persistent sadness, low motivation, and emotional distress, and discuss suitable care options.
      </p>
    ),
  },
  {
    description: "Consultation for anxiety symptoms, panic episodes, and related concerns.",
    title: "Anxiety & Panic Disorder",
    slug: "anxiety-panic-disorder",
    src: "/therapist.jpg",
    imageAlt: "Counsellor supporting a client during a therapy session",
    ctaText: "Book Session",
    content: () => (
      <p>
        Assessment can help clarify anxiety or panic symptoms and discuss care options based on individual needs.
      </p>
    ),
  },
  {
    description: "Consultation for sleep difficulties, including insomnia.",
    title: "Sleep Disorders",
    slug: "sleep-disorders",
    src: "/sleep_disorder.jpg",
    imageAlt: "Person lying awake in bed with difficulty sleeping",
    ctaText: "Book Session",
    content: () => (
      <p>
        A consultation can review sleep concerns, contributing factors, and possible next steps. Assessment and recommendations depend on individual circumstances.
      </p>
    ),
  },
  {
    description: "Psychiatric consultation for bipolar mood concerns and treatment planning.",
    title: "Bipolar Mood Disorder",
    src: "/bipolar_disorder.jpg",
    imageAlt: "Illustration representing changing moods and emotional wellbeing",
    ctaText: "Book Session",
    content: () => (
      <p>
        A psychiatrist can assess bipolar mood symptoms and discuss ongoing care options with the individual.
      </p>
    ),
  },
  {
    description: "Psychiatric consultation for schizophrenia and related concerns.",
    title: "Schizophrenia Therapy",
    src: "/schizophrenia.jpg",
    imageAlt: "Illustration of a person experiencing mental health symptoms",
    ctaText: "Book Session",
    content: () => (
      <p>
        Consultations can address symptoms, daily functioning, and support needs. Care recommendations are made after an individual assessment.
      </p>
    ),
  },
  {
    description: "Consultation for obsessive thoughts, compulsive behaviors, and related concerns.",
    title: "OCD Therapy",
    src: "/ocd.jpeg",
    imageAlt: "Person carefully arranging coloured pencils",
    ctaText: "Book Session",
    content: () => (
      <p>
        A consultation can explore obsessive-compulsive symptoms and discuss appropriate care options.
      </p>
    ),
  },
  {
    description: "Consultation for neurodevelopmental concerns, including ADHD and autism spectrum conditions.",
    title: "Neurodevelopmental Disorders",
    src: "/neurodevelopmental.jpg",
    imageAlt: "Parent offering support to a child",
    ctaText: "Book Session",
    content: () => (
      <p>
        An assessment can help clarify concerns involving attention, behavior, or development and identify appropriate next steps.
      </p>
    ),
  },
  {
    description: "Consultation for memory concerns and cognitive changes, with space to discuss caregiver questions.",
    title: "Dementia Care",
    src: "/dementia.jpg",
    imageAlt: "Older adult with family and a clinician",
    ctaText: "Book Session",
    content: () => (
      <p>
        Consultations can address memory and cognitive concerns and discuss support options with individuals and caregivers.
      </p>
    ),
  },
  {
    description: "Psychiatric consultation for substance use and de-addiction concerns.",
    title: "De-addiction Therapy",
    slug: "de-addiction",
    src: "/deaddiction.jpg",
    imageAlt: "Illustrated overview of substance use and recovery support",
    ctaText: "Book Session",
    content: () => (
      <p>
        A consultation can discuss substance use, health considerations, and possible support options. Care planning is individual.
      </p>
    ),
  },
  {
    description: "Respectful mental health consultation for gender identity concerns.",
    title: "Gender Incongruence Therapy",
    src: "/gender_incogruence.webp",
    imageAlt: "Abstract illustration about gender identity",
    ctaText: "Book Session",
    content: () => (
      <p>
        Consultations offer a respectful setting to discuss gender identity and related mental health concerns. Any care recommendations are individual.
      </p>
    ),
  },
  {
    description: "Consultation for emotional, relationship, and long-standing behavior concerns.",
    title: "Personality Disorders Therapy",
    src: "/personality_disorders.jpg",
    imageAlt: "Illustration representing varied emotions and self-expression",
    ctaText: "Book Session",
    content: () => (
      <p>
        A consultation can explore emotional and relationship patterns and discuss suitable support options.
      </p>
    ),
  },
  {
    description: "Consultation about stress, coping, and the effect of stress on daily life.",
    title: "Stress Management",
    src: "/stress_management.jpg",
    imageAlt: "Illustration of a person practicing mindfulness",
    ctaText: "Book Session",
    content: () => (
      <p>
        A consultation can identify stressors and discuss coping approaches suited to the individual's circumstances.
      </p>
    ),
  },
  {
    description: "Consultation about focus, procrastination, and productivity concerns.",
    title: "Productivity Management",
    src: "/productivity.jpg",
    imageAlt: "Illustration of a person organizing tasks and priorities",
    ctaText: "Book Session",
    content: () => (
      <p>
        A consultation can explore focus and productivity concerns and consider whether they relate to broader mental health needs.
      </p>
    ),
  },
];
