"use client";

import React, { useState } from "react";
import { Question, CaretDown } from "@phosphor-icons/react";

interface FaqItem {
  q: string;
  a: string;
}

const WORKSHOP_IMG =
  "https://media.base44.com/images/public/6a63c33c63a63db25193f4e5/9b9c41626_generated_23a687b9.png";

const FAQS: FaqItem[] = [
  {
    q: "What ages do Circular Flow programs serve?",
    a: "Our workshops and programs range from early elementary through young adulthood — Foil to Film serves kids ages 7–11, while LEAD, RIZE UP, and The Flow are designed for youth 12–21. We also offer adult and community-centered experiences.",
  },
  {
    q: "How do I bring a workshop to my school or organization?",
    a: "Use the partner form on this page or email us directly. We will schedule a conversation about your students, space, and goals, then design a hands-on experience that fits — from a single workshop to a multi-week residency.",
  },
  {
    q: "What's the difference between R. Mitchell Youth & Community Services and Circular Flow Productions LLC?",
    a: "R. Mitchell Youth & Community Services is our 501(c)(3) nonprofit, operating most youth programs, workshops, SEL initiatives, and community services. Circular Flow Productions LLC is the creative and entrepreneurial arm — producing music, books, films, and merchandise, and giving young people pathways to earn income.",
  },
  {
    q: "Are the beta programs (LEAD, RIZE UP, The Flow) ready to use?",
    a: "They're in active development. Curriculum, modules, and delivery details are being finalized. You can register interest on any program page to be notified at launch and join early access.",
  },
  {
    q: "How does Circular Flow use AI and tools like Google Flow?",
    a: "AI is a collaborator, not a replacement. We use tools like Google Flow, AI animation, and digital storytelling to amplify human vision — helping young people create original work while building critical thinking about technology.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white text-black relative overflow-hidden border-t border-[var(--color-border)]">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        
        {/* ══ Section Header ══ */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-16">
          {/* Paintbrush Header Badge */}
          <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 mb-5 select-none group">
            <svg
              className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
              viewBox="0 0 160 44"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M12 8 C30 3, 80 2, 148 6 C158 10, 156 28, 146 34 C110 39, 50 41, 10 37 C1 32, 2 14, 12 8 Z"
              />
              <path
                fill="currentColor"
                opacity="0.5"
                d="M6 14 C20 9, 90 5, 154 10 C162 18, 152 32, 138 36 C100 40, 30 38, 14 32 C4 26, 0 18, 6 14 Z"
              />
            </svg>
            <Question size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)]" />
            <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
              FAQ
            </span>
          </div>

          <h2 className="font-heading text-3.5xl sm:text-5xl lg:text-6xl font-extrabold !text-black tracking-tight leading-[1.15] max-w-4xl">
            Frequently Asked{" "}
            <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
              Questions
            </span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg !text-black font-light max-w-2xl mt-4 mb-0 leading-relaxed">
            Everything you need to know about Circular Flow, our creative programs, workshops, and community partnerships.
          </p>
        </div>

        {/* ══ Main 2-Column Section Layout ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Workshop Featured Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[500px] rounded-[16px] overflow-hidden shadow-sm border border-slate-200 group">
              <img
                src={WORKSHOP_IMG}
                alt="Circular Flow community workshop space"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061423]/60 via-transparent to-transparent" />
              
              {/* Bottom Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md rounded-[12px] border border-white/40 shadow-sm">
                <div className="font-heading text-base font-extrabold !text-black mb-1">
                  Have more questions?
                </div>
                <p className="font-sans text-xs !text-black font-light mb-0">
                  Reach out to our team directly for custom school programs or partnership inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`
                    rounded-[14px] border transition-all duration-300 overflow-hidden
                    ${isOpen 
                      ? "bg-white border-[#18A0A8] shadow-sm" 
                      : "bg-[#F8FAFC] border-slate-200/80 hover:border-[#18A0A8]/50"
                    }
                  `}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer bg-transparent border-none focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base sm:text-lg font-extrabold !text-black leading-snug tracking-tight">
                      {item.q}
                    </span>
                    
                    <div 
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300
                        ${isOpen 
                          ? "bg-[#18A0A8] text-white rotate-180" 
                          : "bg-slate-200/80 text-[#163A5F]"
                        }
                      `}
                    >
                      <CaretDown size={16} weight="bold" />
                    </div>
                  </button>

                  {/* Accordion Collapsible Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 animate-fade-in">
                      <div className="h-px bg-slate-200/60 mb-4" />
                      <p className="font-sans text-sm sm:text-base !text-black font-light leading-relaxed mb-0">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
