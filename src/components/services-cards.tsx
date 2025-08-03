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

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<any>(null);

  return (
    <div className="min-h-screen p-6">
      {/* Modal */}
      <Dialog  open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        {active && (
    <DialogContent
  className="max-w-lg w-full rounded-2xl p-0 overflow-hidden border border-gray-200 shadow-lg 
    transition-all duration-300 ease-out
    data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
    data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
    max-h-[calc(100vh-4rem)]"  // ✨ keeps dialog vertically centered with margins
>
  <DialogHeader className="p-4 border-b">
    <DialogTitle className="text-xl font-semibold">{active.title}</DialogTitle>
    <DialogDescription className="text-sm text-gray-500">
      {active.description}
    </DialogDescription>
  </DialogHeader>

  {/* Image */}
  <img src={active.src} alt={active.title} className="w-full h-56 object-cover " />

  {/* Scrollable Content */}
  <div className="p-4 text-sm text-gray-700 overflow-y-auto">
    {typeof active.content === "function" ? active.content() : active.content}
  </div>

  {/* CTA Button */}
  <div className="p-4 border-t">
    <Button asChild className="w-full">
      <a href={active.ctaLink}>{active.ctaText}</a>
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
              <img
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
    description: "Manage anxiety and regain a sense of calm.",
    title: "Anxiety & Stress Therapy",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80",
    ctaText: "Book Session",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Anxiety and stress can feel overwhelming, but you don't have to face them alone.  
          Through evidence-based approaches like CBT and relaxation techniques, I help you 
          build effective coping strategies, reduce worry, and restore balance in your life.
        </p>
      );
    },
  },
  {
    description: "Strengthen your relationships and resolve conflicts.",
    title: "Relationship Counseling",
    src: "/relation_ship_counselling.png",
    ctaText: "Book Session",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Healthy relationships are vital for emotional well-being.  
          I provide a safe, non-judgmental space for couples and individuals to address conflicts, 
          improve communication, and foster deeper connections.
        </p>
      );
    },
  },
  {
    description: "Stay grounded with mindfulness and self-awareness.",
    title: "Mindfulness Therapy",
    src: "/mindfulness_therapy.jpg",
    ctaText: "Book Session",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Mindfulness-based therapy helps you stay present and manage emotional turbulence.  
          Learn simple yet powerful techniques to enhance focus, reduce stress, and cultivate inner peace.
        </p>
      );
    },
  },
  {
    description: "Heal from past trauma and move forward.",
    title: "Trauma & PTSD Therapy",
    src: "/trauma_ptsd.png",
    ctaText: "Book Session",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Trauma therapy provides a compassionate space to process painful experiences.  
          Using gentle, client-centered methods, I help you heal emotional wounds and rebuild a sense of safety and trust.
        </p>
      );
    },
  },
  {
    description: "Support through emotional lows and depression.",
    title: "Depression Counseling",
    src: "/depression.png",
    ctaText: "Book Session",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          If you're struggling with sadness or low motivation, therapy can help.  
          Together, we'll work on practical steps to regain hope, build resilience, and improve your daily life.
        </p>
      );
    },
  },
];