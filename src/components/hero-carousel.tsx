"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const calmImages = [
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
];

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === calmImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {calmImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 w-full flex justify-center gap-2 z-10">
        {calmImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-primary" : "bg-background/40"
            }`}
          />
        ))}
      </div>
    </>
  );
};

// ✅ ScrollButtons as a named export
export const ScrollButtons = () => {
  const scrollTo = (selector: string) =>
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Button
        size="lg"
        onClick={() => scrollTo("#contact")}
        className="group px-8 py-6 text-lg font-light shadow-medium hover:shadow-strong transition-all duration-300"
      >
        Begin Your Journey
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
      <Button
        variant="ghost"
        size="lg"
        onClick={() => scrollTo("#about")}
        className="text-foreground hover:text-primary px-8 py-6 text-lg font-light"
      >
        Learn More
      </Button>
    </>
  );
};

export default HeroCarousel;
