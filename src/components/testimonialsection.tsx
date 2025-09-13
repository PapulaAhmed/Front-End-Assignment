"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "./testimonialcard";
import Eyebrow from "./eyebrow";

// Type definitions
interface Testimonial {
  id: string | number;
  title?: string;
  text: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Filter testimonials based on screen size
  const displayedTestimonials: Testimonial[] = isMobile
    ? testimonials.slice(0, 6) // Show 6 testimonials on mobile
    : testimonials; // Show all 12 testimonials on larger screens

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center">
            <Eyebrow label="Testimonials" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            What our users say
          </h2>
        </div>
      </div>

      {/* Testimonials container with fade overlay */}
      <div className="relative">
        {/* Fade-in gradient overlay from top to middle */}
        <div className="absolute inset-x-0 top-0 h-[20%] md:h-1/2 bg-gradient-to-b from-slate-50 via-slate-50/200 to-transparent pointer-events-none z-10"></div>

        {/* Masonry testimonials */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 [column-fill:_balance] px-8 md:-mx-64 lg:mx-0 lg:px-16">
          {/* use CSS columns to mimic the staggered masonry look */}
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="mb-6 break-inside-avoid">
              <TestimonialCard
                title={testimonial.title}
                text={testimonial.text}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
