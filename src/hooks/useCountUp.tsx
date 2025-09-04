import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
}

export const useCountUp = ({ 
  end, 
  duration = 2000, 
  delay = 0,
  prefix = "",
  suffix = ""
}: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const increment = end / (duration / 50);
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration, delay]);

  const formattedCount = `${prefix}${count.toLocaleString('pt-BR')}${suffix}`;

  return { count: formattedCount, ref };
};