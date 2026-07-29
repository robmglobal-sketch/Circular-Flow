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

import { motion, AnimatePresence } from "framer-motion";

export default function InnovationSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="innovation" className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white text-black relative overflow-hidden">
      {/* Background Ambient Warm Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        
        {/* ══ Section Header ══ */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
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

        {/* ══ Framer Motion Accordion Layout ══ */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 h-auto lg:h-[500px] w-full">
          {INNOVATION_STEPS.map((item) => {
            const IconComp = item.icon;
            const isActive = activeStep === item.stepNum;

            return (
              <motion.div
                layout
                key={item.step}
                onClick={() => setActiveStep(item.stepNum)}
                className={`
                  relative cursor-pointer overflow-hidden rounded-[10px] 
                  border transition-colors duration-300 ease-out
                  flex flex-col lg:flex-row
                  ${isActive 
                    ? "border-[#18A0A8] shadow-md bg-emerald-50/20 flex-1 lg:flex-auto min-h-[300px] lg:min-h-full" 
                    : "border-slate-200/80 shadow-xs hover:border-[#18A0A8]/60 bg-[#F8FAFC] h-[72px] lg:h-full lg:w-[100px] shrink-0"
                  }
                `}
                style={{ flexBasis: isActive ? "auto" : undefined, flexGrow: isActive ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
              >
                {/* Number / Tab Area */}
                <div 
                  className={`
                    w-full lg:w-[100px] lg:h-full shrink-0 flex flex-row lg:flex-col items-center lg:justify-between p-4 lg:py-8 lg:px-0
                    border-b lg:border-b-0 lg:border-r transition-colors duration-300
                    ${isActive ? "border-[#18A0A8]/20 bg-white/50" : "border-transparent bg-transparent"}
                  `}
                >
                  <div className="flex items-center justify-center w-10 h-10 shrink-0">
                    <span className={`font-mono text-xl lg:text-3xl font-extrabold transition-colors duration-300 ${isActive ? "text-[#18A0A8]" : "text-slate-300 group-hover:text-slate-400"}`}>
                      {item.step}
                    </span>
                  </div>
                  
                  {/* Vertical title (desktop only) */}
                  <div className="hidden lg:flex flex-1 items-center justify-center relative w-full h-full min-h-[150px]">
                    <span 
                      className={`font-mono text-sm font-extrabold uppercase tracking-widest whitespace-nowrap rotate-180 transition-colors duration-300 ${isActive ? "text-[var(--color-primary)]" : "text-slate-400"}`}
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Horizontal title (mobile only) */}
                  {!isActive && (
                    <div className="lg:hidden ml-4">
                      <span className="font-heading text-sm font-extrabold uppercase tracking-widest text-slate-400">
                        {item.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Expanded Content Area */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center h-full w-full min-w-[280px]"
                    >
                      <div className="flex items-center gap-3 mb-5 lg:mb-8">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-[10px] bg-[#18A0A8]/15 border border-[#18A0A8]/20 flex items-center justify-center text-[#18A0A8] shrink-0">
                          <IconComp size={26} weight="bold" />
                        </div>
                        <span className="font-mono text-xs lg:text-sm font-bold tracking-widest text-[var(--color-secondary-dark)] uppercase">
                          {item.label}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl lg:text-4.5xl font-extrabold !text-black mb-4 tracking-tight leading-tight">
                        {item.title}
                      </h3>

                      <p className="font-sans text-sm sm:text-base lg:text-lg !text-black/80 font-light leading-relaxed max-w-lg mb-0">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
