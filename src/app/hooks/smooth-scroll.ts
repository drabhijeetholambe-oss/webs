export interface ScrollConfig {
  navbarHeight?: number;
  duration?: number;
  easing?: 'linear' | 'easeInOut' | 'easeIn' | 'easeOut';
}

export interface ScrollPosition {
  x: number;
  y: number;
}



export const scrollToSection = (
  href: string, 
  config: ScrollConfig = {}
): void => {
  const { 
    navbarHeight = 80, 
    duration = 800, 
    easing = 'easeInOut' 
  } = config;

  const element = document.querySelector(href) as HTMLElement;
  if (!element) {
    
    return;
  }

  const targetPosition = element.offsetTop - navbarHeight;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let start: number | null = null;

  // Easing functions
  const easingFunctions = {
    linear: (t: number): number => t,
    easeInOut: (t: number): number => 
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeIn: (t: number): number => t * t * t,
    easeOut: (t: number): number => (--t) * t * t + 1
  };

  const step = (timestamp: number): void => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);
    
    const ease = easingFunctions[easing](percentage);
    const currentPosition = startPosition + (distance * ease);
    
    window.scrollTo(0, currentPosition);
    
    if (progress < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

// Hook version for React components
import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollTo = useCallback((
    href: string, 
    config?: ScrollConfig
  ): void => {
    scrollToSection(href, config);
  }, []);

  const scrollToTop = useCallback((config?: ScrollConfig): void => {
    const { duration = 800, easing = 'easeInOut' } = config || {};
    const startPosition = window.pageYOffset;
    let start: number | null = null;

    const easingFunctions = {
      linear: (t: number): number => t,
      easeInOut: (t: number): number => 
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
      easeIn: (t: number): number => t * t * t,
      easeOut: (t: number): number => (--t) * t * t + 1
    };

    const step = (timestamp: number): void => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      const ease = easingFunctions[easing](percentage);
      const currentPosition = startPosition * (1 - ease);
      
      window.scrollTo(0, currentPosition);
      
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, []);

  return { scrollTo, scrollToTop };
};
