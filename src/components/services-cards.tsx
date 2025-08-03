"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";


export default function ExpandableCardDemo() {
  const [active, setActive] = useState<any>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="min-h-screen  p-6">
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-blue-900/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 bg-blue-900/30 backdrop-blur-sm grid place-items-center z-[100]">
            {/* Close Button (Mobile) */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 shadow-md border border-blue-100"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            {/* Modal Content */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden shadow-xl border border-blue-100"
            >
              {/* Service Image */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 md:h-64 object-cover sm:rounded-t-3xl"
                />
              </motion.div>

              {/* Service Details */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center p-5 border-b border-blue-100">
                  <div className="flex-1 min-w-0 pr-4">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-semibold text-xl text-gray-900"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray-700 mt-1 text-sm"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    className="px-4 py-2 text-sm rounded-full font-medium bg-blue-500 hover:bg-blue-600 text-white whitespace-nowrap flex-shrink-0 transition-colors"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 px-5 py-4 text-gray-800 text-sm leading-relaxed scrollbar-thin scrollbar-thumb-blue-200">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index: number) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-blue-100 rounded-xl cursor-pointer bg-white shadow-sm border border-blue-50 mb-4 transition-colors"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top border border-blue-100"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-gray-900 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-gray-700 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-blue-50 hover:bg-blue-500 hover:text-white text-gray-700 mt-4 md:mt-0 border border-blue-200 transition-colors"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-gray-600"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

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