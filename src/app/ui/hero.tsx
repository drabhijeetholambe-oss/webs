"use client"; 
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";


const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images (replace with your own)
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=80",
  ];

  // Change image every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-white max-w-3xl px-4 space-y-6">
        <h1 className="text-5xl md:text-6xl font-serif font-light leading-tight">
          You're Not Alone Anymore
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light">
          Healing begins with understanding
        </p>
        <div className="flex justify-center">
<Button className="bg-blue-400 hover:bg-blue-700 px-6 py-4 text-lg text-center rounded-3xl cursor-pointer" >
          Get Started
        </Button>
        </div>
        
      </div>

    
    </section>
  );
};

export default Hero;
