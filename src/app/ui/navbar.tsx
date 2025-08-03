"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import * as Info from "@/app/config/constants/info";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#footer" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const navbarHeight = 80;
      const targetPosition = element.offsetTop - navbarHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // 800ms for smooth animation
      let start: number | null = null;

      // Custom smooth scroll animation
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth animation
        const ease = easeInOutCubic(percentage);
        const currentPosition = startPosition + (distance * ease);
        
        window.scrollTo(0, currentPosition);
        
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };

      // Easing function
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      requestAnimationFrame(step);
      setIsOpen(false);
    }
  };

  // Add scroll detection for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (isOpen && nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled &&!isOpen
          ? "bg-black/70 backdrop-blur-md"
          : `${isOpen ? "bg-black/50":"bg-transparent"}`
      } ${isOpen && "pb-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-xl font-light text-white hover:text-gray-200 transition-colors cursor-pointer"
            >
              {Info.NAME}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm font-light cursor-pointer relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#appointment")}
                variant="ghost"
                className="ml-4 font-light text-white hover:bg-white/20 cursor-pointer transition-all duration-200"
              >
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out mx-2 rounded-2xl ${

          isOpen 
            ? "max-h-96 opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        } bg-black/80 backdrop-blur-sm border-t border-white/10`}
      >
        <div className="px-4 pt-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-3 py-2 rounded-md text-base text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {item.name}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("#appointment")}
            className="w-full mt-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;