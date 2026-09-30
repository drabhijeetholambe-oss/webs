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
    <div className="min-h-screen p-6">
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

      {/* Cards List */}
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-blue-100 rounded-xl cursor-pointer bg-white shadow-sm border border-blue-50 mb-4 transition-colors"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
              <Image
               width={500}
               height={500}
                src={card.src}
                alt={card.title}
                title={card.title}
                sizes="(max-width: 768px) 160px, 56px"
                loading="lazy"
                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover border border-blue-100"
              />
              <div>
                <h3 className="font-medium text-gray-900 text-center md:text-left">{card.title}</h3>
                <p className="text-gray-700 text-center md:text-left">{card.description}</p>
              </div>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              {card.ctaText}
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
}

const cards = [
  {
    description: "Confidential consultation for sexual health and relationship intimacy concerns.",
    title: "Sexual Health",
    src: "/sti.jpg",
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
    src: "/depression.png",
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
    src: "/therapist.jpg",
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
    src: "/sleep_disorder.jpg",
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
    src: "/deaddiction.jpg",
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
    ctaText: "Book Session",
    content: () => (
      <p>
        A consultation can explore focus and productivity concerns and consider whether they relate to broader mental health needs.
      </p>
    ),
  },
];
