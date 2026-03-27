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
  <Image width={500} height={500} src={active.src} alt={active.title} className="w-full h-56 object-cover" />

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
    description: "Confidential and expert care for sexual wellness and relationship intimacy.",
    title: "Sexual Health",
    src: "/sti.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Confidential sexual wellness care by an experienced sexologist in Mumbai, helping individuals and couples improve intimacy, address concerns, and build healthier relationships.
      </p>
    ),
  },
  {
    description: "Helping you navigate low moods and rediscover hope with compassionate support.",
    title: "Depression Counseling",
    src: "/depression.png",
    ctaText: "Book Session",
    content: () => (
      <p>
        Evidence-based depression treatment to help manage persistent sadness, low motivation, and emotional distress, guided by a compassionate mental health professional.
      </p>
    ),
  },
  {
    description: "Learn to manage overwhelming thoughts and regain a sense of calm.",
    title: "Anxiety & Panic Disorder",
    src: "/therapist.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Effective therapy for anxiety and panic attacks, focusing on calming techniques, cognitive restructuring, and long-term emotional resilience.
      </p>
    ),
  },
  {
    description: "Restful sleep is possible with the right diagnosis and treatment.",
    title: "Sleep Disorders",
    src: "/sleep_disorder.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Professional support for insomnia and sleep disorders, identifying root causes and creating personalized plans for better sleep and overall well-being.
      </p>
    ),
  },
  {
    description: "Balanced support for mood stabilization and emotional regulation.",
    title: "Bipolar Mood Disorder",
    src: "/bipolar_disorder.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Specialized care for bipolar disorder, focusing on mood stabilization, relapse prevention, and improving day-to-day functioning.
      </p>
    ),
  },
  {
    description: "Comprehensive care for managing symptoms and improving daily functioning.",
    title: "Schizophrenia Therapy",
    src: "/schizophrenia.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Comprehensive schizophrenia treatment with a focus on symptom management, social functioning, and improving quality of life for patients and families.
      </p>
    ),
  },
  {
    description: "Evidence-based treatment to help you break free from obsessive thoughts and compulsive behaviors.",
    title: "OCD Therapy",
    src: "/ocd.jpeg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Structured OCD treatment using proven approaches like exposure and response prevention (ERP) to reduce intrusive thoughts and compulsive behaviors.
      </p>
    ),
  },
  {
    description: "Tailored interventions for conditions like ADHD and autism.",
    title: "Neurodevelopmental Disorders",
    src: "/neurodevelopmental.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Tailored interventions for ADHD and autism spectrum conditions, supporting improved focus, behavior, and daily functioning in children and adults.
      </p>
    ),
  },
  {
    description: "Supportive care for memory concerns, cognitive decline, and caregiver guidance.",
    title: "Dementia Care",
    src: "/dementia.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Compassionate dementia care focusing on memory support, cognitive health, and guidance for caregivers managing long-term care challenges.
      </p>
    ),
  },
  {
    description: "Structured therapy and medication support for lasting recovery from substance use.",
    title: "De-addiction Therapy",
    src: "/deaddiction.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Structured de-addiction programs combining therapy and medical support to help individuals overcome substance use and maintain long-term recovery.
      </p>
    ),
  },
  {
    description: "Affirmative care for gender identity exploration and transition support.",
    title: "Gender Incongruence Therapy",
    src: "/gender_incogruence.webp",
    ctaText: "Book Session",
    content: () => (
      <p>
        Affirmative mental health support for individuals exploring gender identity, offering a safe and respectful space for self-expression and transition.
      </p>
    ),
  },
  {
    description: "Insight-oriented therapy to manage emotions, relationships, and behavior patterns.",
    title: "Personality Disorders Therapy",
    src: "/personality_disorders.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Insight-oriented therapy to improve emotional regulation, relationship patterns, and long-standing behavioral challenges.
      </p>
    ),
  },
  {
    description: "Learn practical tools to reduce burnout and improve your mental well-being.",
    title: "Stress Management",
    src: "/stress_management.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Practical stress management techniques to reduce burnout, improve coping skills, and support better mental and physical health.
      </p>
    ),
  },
  {
    description: "Strategies to overcome procrastination, focus better, and boost performance.",
    title: "Productivity Management",
    src: "/productivity.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Evidence-based strategies to improve focus, overcome procrastination, and enhance productivity in personal and professional life.
      </p>
    ),
  },
];