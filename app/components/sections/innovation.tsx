"use client";

import React, { useState } from "react";
import { 
  Lightbulb, 
  PenNib, 
  MusicNotes, 
  Cpu, 
  VideoCamera, 
  UsersThree, 
  ArrowsCounterClockwise,
  ArrowRight,
  ArrowDown
} from "@phosphor-icons/react";

interface StepItem {
  step: string;
  stepNum: number;
  label: string;
  title: string;
  icon: React.ElementType;
  description: string;
}

const INNOVATION_STEPS: StepItem[] = [
  { 
    step: "01", 
    stepNum: 1, 
    label: "IDEA", 
    title: "Idea & Spark", 
    icon: Lightbulb, 
    description: "Every project begins with a lived experience, a community need, or a spark of imagination." 
  },
  { 
    step: "02", 
    stepNum: 2, 
    label: "WRITING", 
    title: "Story Architecture", 
    icon: PenNib, 
    description: "Stories, scripts, frameworks, and curricula — the architecture of meaning." 
  },
  { 
    step: "03", 
    stepNum: 3, 
    label: "MUSIC", 
    title: "Music & Composition", 
    icon: MusicNotes, 
    description: "Original compositions that carry emotional truth and amplify the message." 
  },
  { 
    step: "04", 
    stepNum: 4, 
    label: "AI TOOLS", 
    title: "AI Collaboration", 
    icon: Cpu, 
    description: "Technology as a collaborator — Google Flow, AI animation, and digital storytelling tools enhance the human vision." 
  },
  { 
    step: "05", 
    stepNum: 5, 
    label: "VIDEO", 
    title: "Cinematic Media", 
    icon: VideoCamera, 
    description: "Cinematic documentation — community footage, school plays, music videos, and animated series." 
  },
  { 
    step: "06", 
    stepNum: 6, 
    label: "WORKSHOP", 
    title: "Community Space", 
    icon: UsersThree, 
    description: "Taking the work into schools, group homes, and community spaces where real people transform." 
  },
  { 
    step: "07", 
    stepNum: 7, 
    label: "IMPACT", 
    title: "Generational Cycle", 
    icon: ArrowsCounterClockwise, 
    description: "The cycle completes — and begins again. Every project feeds the next generation of creators." 
  },
];

export default function InnovationSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="innovation" className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white text-black relative overflow-hidden">
      {/* Background Ambient Warm Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        
        {/* ══ Section Header ══ */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
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
            <Lightbulb size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)]" />
            <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
              Innovation Studio
            </span>
          </div>

          <h2 className="font-heading text-3.5xl sm:text-5xl lg:text-6xl font-extrabold !text-black tracking-tight leading-[1.15] max-w-4xl">
            The Creative{" "}
            <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
              Process
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg !text-black font-light max-w-2xl mt-4 mb-0 leading-relaxed">
            AI is not replacing the human creator. AI is part of a collaborative creative process — a tool that amplifies human vision.
          </p>
        </div>

        {/* ══ Staggered Cards Layout ══ */}
        <div className="flex flex-col space-y-10 lg:space-y-12 relative">

          {INNOVATION_STEPS.map((item, idx) => {
            const IconComp = item.icon;
            const isEven = idx % 2 === 0;
            const isHovered = hoveredStep === item.stepNum;
            const isNextHovered = hoveredStep === item.stepNum + 1;

            return (
              <div key={item.step} className="relative">
                
                {/* Step Card Container */}
                <div 
                  className="flex flex-col lg:flex-row items-center w-full"
                  onMouseEnter={() => setHoveredStep(item.stepNum)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Card Box positioned alternating left / right */}
                  <div 
                    className={`
                      w-full lg:w-[540px]
                      ${isEven ? "lg:mr-auto" : "lg:ml-auto"}
                      group relative bg-[#F8FAFC] rounded-[14px] p-6 sm:p-7
                      border transition-all duration-300 ease-out
                      flex items-start gap-4 sm:gap-5
                      ${isHovered
                        ? "border-[#18A0A8] shadow-md bg-emerald-50/20 -translate-y-1" 
                        : "border-slate-200/80 shadow-xs hover:border-[#18A0A8]/60 hover:shadow-sm"
                      }
                    `}
                  >
                    {/* Vertical Pill Badge (Left) */}
                    <div 
                      className={`
                        w-9 sm:w-10 rounded-full py-4 flex flex-col items-center justify-center shrink-0
                        transition-all duration-300
                        ${isHovered 
                          ? "bg-[#18A0A8] text-white shadow-sm" 
                          : "bg-[#163A5F] text-white group-hover:bg-[#18A0A8]"
                        }
                      `}
                    >
                      <span className="font-mono text-xs font-extrabold tracking-tight writing-mode-vertical uppercase">
                        {item.step}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1">
                      {/* Header Row */}
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <div 
                            className={`
                              w-8 h-8 rounded-[6px] flex items-center justify-center transition-colors duration-300
                              ${isHovered 
                                ? "bg-[#18A0A8]/15 text-[#18A0A8]" 
                                : "bg-[#163A5F]/10 text-[#163A5F] group-hover:bg-[#18A0A8]/15 group-hover:text-[#18A0A8]"
                              }
                            `}
                          >
                            <IconComp size={18} weight="bold" />
                          </div>
                          <span className="font-mono text-xs font-bold tracking-wider text-[var(--color-secondary-dark)] uppercase">
                            {item.label}
                          </span>
                        </div>

                        {/* Step count badge */}
                        <span className="font-mono text-[10px] font-semibold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                          {item.stepNum} / {INNOVATION_STEPS.length}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-lg sm:text-xl font-extrabold !text-black mb-2 tracking-tight">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm !text-black font-light leading-relaxed mb-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Simple Curved Connector Arrow to Next Step (Desktop) */}
                {idx < INNOVATION_STEPS.length - 1 && (
                  <div className="hidden lg:flex justify-center items-center my-2 py-1 pointer-events-none">
                    <div 
                      className={`
                        flex items-center gap-2 font-mono text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-300
                        ${isHovered || isNextHovered
                          ? "bg-[#18A0A8]/10 border-[#18A0A8] text-[#18A0A8] scale-105" 
                          : "bg-slate-50 border-slate-200 text-slate-400"
                        }
                      `}
                    >
                      <span>Flow to Step {item.stepNum + 1}</span>
                      <ArrowDown size={14} weight="bold" className={isHovered || isNextHovered ? "animate-bounce text-[#18A0A8]" : ""} />
                    </div>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
