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
        Sexual health is an important aspect of overall well-being.
        I provide confidential and professional care to address concerns around intimacy, sexual function, and relationship wellness with compassion and expertise.
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
        If you're feeling persistently sad or demotivated, therapy can help.
        Together, we'll focus on practical strategies to rebuild hope, resilience, and emotional balance.
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
        Anxiety and panic can feel debilitating, but you don’t have to face them alone.  
        I offer evidence-based therapies like CBT and relaxation techniques to help you regain control and find peace.
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
        Poor sleep can impact your mental and physical health.  
        I help identify underlying causes of sleep issues and provide tailored strategies for achieving restful, restorative sleep.
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
        Bipolar disorder can feel like an emotional rollercoaster.  
        With structured therapy and support, I help you stabilize moods, improve daily functioning, and live a balanced life.
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
        Schizophrenia requires ongoing care and understanding.  
        I provide therapy to manage symptoms, improve social skills, and support both patients and caregivers in daily life.
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
        Obsessive-compulsive disorder can feel exhausting.  
        Through structured interventions like ERP, I help you reduce compulsions and regain control over intrusive thoughts.
      </p>
    ),
  },
  // {
  //   description: "Holistic support for healing your relationship with food and body image.",
  //   title: "Eating Disorders",
  //   src: "/eating_disorders.jpg",
  //   ctaText: "Book Session",
  //   ctaLink: "#appointment",
  //   content: () => (
  //     <p>
  //       Eating disorders can affect both physical and mental health.  
  //       I provide compassionate, holistic therapy to help you develop a healthier relationship with food and self-image.
  //     </p>
  //   ),
  // },
  {
    description: "Tailored interventions for conditions like ADHD and autism.",
    title: "Neurodevelopmental Disorders",
    src: "/neurodevelopmental.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        From ADHD to autism spectrum conditions, I offer tailored therapeutic strategies and behavioral interventions 
        to support both children and adults in achieving their potential.
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
        Dementia affects both patients and their families.  
        I provide supportive therapy for memory issues, cognitive health, and caregiver stress management.
      </p>
    ),
  },
  // {
  //   description: "Safe space to address emotional struggles, stress, and societal pressure.",
  //   title: "Men’s Mental Health",
  //   src: "/mens_mental_health.jpg",
  //   ctaText: "Book Session",
  //   ctaLink: "#appointment",
  //   content: () => (
  //     <p>
  //       Men often face silent struggles due to societal expectations.  
  //       I offer a safe, confidential space to address stress, anger, and emotional health without judgment.
  //     </p>
  //   ),
  // },
  {
    description: "Structured therapy and medication support for lasting recovery from substance use.",
    title: "De-addiction Therapy",
    src: "/deaddiction.jpg",
    ctaText: "Book Session",
    content: () => (
      <p>
        Addiction recovery is possible with the right support.  
        I provide evidence-based therapy and relapse prevention tools to help you achieve and maintain sobriety.
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
        Exploring gender identity can be a deeply personal journey.  
        I offer supportive, affirming care to help you navigate identity, expression, and transitions safely.
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
        Personality disorders can impact emotions and relationships.  
        I use therapeutic techniques to help improve self-awareness, regulate emotions, and build healthier connections.
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
        Chronic stress can take a toll on your health.  
        I help you develop practical coping tools to reduce burnout, balance responsibilities, and improve mental well-being.
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
        Struggling with focus or procrastination?  
        I offer structured techniques and psychological strategies to help improve productivity and time management skills.
      </p>
    ),
  },
];
