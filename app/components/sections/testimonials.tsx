"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";
import { FadeUp } from "@/app/components/animations";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Circular Flow met our students exactly where they were. The Foil to Film workshop turned reluctant creators into confident storytellers in a single afternoon.",
    name: "Dana R.",
    role: "Principal, Detroit Middle School",
  },
  {
    quote:
      "Robert brings a rare combination of clinical insight and artistic vision. Our foster youth felt seen, heard, and capable — that doesn't happen often.",
    name: "Marcus T.",
    role: "Program Director, Youth Residential Services",
  },
  {
    quote:
      "The LEAD program gave our young people language for who they are and who they're becoming. We've watched quiet kids step into real leadership.",
    name: "Aaliyah K.",
    role: "Educator, Community High School",
  },
  {
    quote:
      "What sets Circular Flow apart is the follow-through. The workshops aren't one-offs — they're part of a connected ecosystem that keeps giving.",
    name: "James W.",
    role: "Community Partner",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} weight="fill" className="text-[var(--color-tertiary)]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white text-black relative overflow-hidden border-t border-[var(--color-border)]">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        
        {/* ══ Section Header ══ */}
        <FadeUp delay={0.1} className="flex flex-col items-center text-center mb-14 lg:mb-16">
          {/* Paintbrush Header Badge */}
          <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 mb-5 select-none group">
            <svg
              className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
              viewBox="0 0 220 44"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M12 8 C40 3, 110 2, 208 6 C218 10, 216 28, 206 34 C160 39, 70 41, 10 37 C1 32, 2 14, 12 8 Z"
              />
              <path
                fill="currentColor"
                opacity="0.5"
                d="M6 14 C30 9, 130 5, 214 10 C222 18, 212 32, 198 36 C140 40, 50 38, 14 32 C4 26, 0 18, 6 14 Z"
              />
            </svg>
            <Star size={18} weight="fill" className="relative z-10 text-[var(--color-tertiary)]" />
            <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
              Testimonials
            </span>
          </div>

          <h2 className="font-heading text-3.5xl sm:text-5xl lg:text-6xl font-extrabold !text-black tracking-tight leading-[1.15] max-w-4xl">
            Voices From Our{" "}
            <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
              Community
            </span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg !text-black font-light max-w-2xl mt-4 mb-0 leading-relaxed">
            Real stories from educators, partners, and community leaders who have experienced Circular Flow programs firsthand.
          </p>
        </FadeUp>

        {/* ══ Interactive Carousel Section ══ */}
        <FadeUp delay={0.25}>
          <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
          {/* Card Viewport Container */}
          <div className="overflow-hidden p-2">
            <div 
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="w-full shrink-0 px-2 sm:px-4">
                  <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[10px] p-8 sm:p-12 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                    {/* Watermark Quote Icon */}
                    <Quotes
                      size={140}
                      weight="fill"
                      className="absolute -top-6 -right-6 text-slate-200/60 pointer-events-none group-hover:text-[var(--color-secondary)]/15 transition-colors duration-500"
                    />

                    <div className="relative z-10">
                      <Stars />
                      
                      <p className="font-sans text-lg sm:text-xl lg:text-2xl !text-black font-light leading-relaxed mb-8 tracking-tight italic">
                        "{t.quote}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-slate-200/70">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] text-white font-heading font-extrabold text-lg flex items-center justify-center shadow-xs shrink-0">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-heading text-base sm:text-lg !text-black font-extrabold tracking-tight">
                            {t.name}
                          </div>
                          <div className="font-sans text-xs sm:text-sm text-[var(--color-primary)]/80 font-medium">
                            {t.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Controls (Arrows) */}
          <div className="flex items-center justify-between mt-8 px-2">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#163A5F] hover:bg-[#163A5F] hover:text-white transition-all duration-300 shadow-xs flex items-center justify-center cursor-pointer"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={20} weight="bold" />
            </button>

            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`
                    h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none
                    ${currentIndex === idx 
                      ? "w-8 bg-[var(--color-secondary)]" 
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }
                  `}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-[#163A5F] hover:bg-[#163A5F] hover:text-white transition-all duration-300 shadow-xs flex items-center justify-center cursor-pointer"
              aria-label="Next testimonial"
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </div>
        </div>
      </FadeUp>

      </div>
    </section>
  );
}
