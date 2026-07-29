"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface AccordionItemData {
  step: string;
  stepNum: number;
  label: string;
  title: string;
  description: string;
  icon?: React.ElementType;
}

interface VerticalAccordionProps {
  items: AccordionItemData[];
  defaultActive?: number;
  className?: string;
  theme?: "light" | "dark";
}

export default function VerticalAccordion({ 
  items, 
  defaultActive = 1,
  className = "",
  theme = "light"
}: VerticalAccordionProps) {
  const [activeStep, setActiveStep] = useState<number>(defaultActive);

  const isDark = theme === "dark";

  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      {items.map((item) => {
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
              flex flex-col
              ${isActive 
                ? (isDark ? "border-[#18A0A8] shadow-md bg-[#18A0A8]/10" : "border-[#18A0A8] shadow-md bg-emerald-50/20")
                : (isDark ? "border-slate-700 shadow-xs hover:border-[#18A0A8]/60 bg-slate-800/50" : "border-slate-200/80 shadow-xs hover:border-[#18A0A8]/60 bg-[#F8FAFC]")
              }
            `}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
          >
            {/* Header / Tab Area */}
            <div 
              className={`
                w-full flex items-center p-4 sm:p-6
                ${isActive 
                  ? (isDark ? "border-b border-[#18A0A8]/20 bg-black/20" : "border-b border-[#18A0A8]/20 bg-white/50") 
                  : "border-transparent bg-transparent"
                }
              `}
            >
              <div className="flex items-center justify-center w-12 h-12 shrink-0">
                <span className={`font-mono text-xl sm:text-2xl font-extrabold transition-colors duration-300 ${isActive ? "text-[#18A0A8]" : (isDark ? "text-[#18A0A8]/80 group-hover:text-white" : "text-slate-300 group-hover:text-slate-400")}`}>
                  {item.step}
                </span>
              </div>
              
              <div className="ml-4 flex-1 flex items-center justify-between">
                <div>
                  <span className={`font-heading text-lg sm:text-xl font-extrabold uppercase tracking-widest transition-colors duration-300 ${isActive ? (isDark ? "text-[#FFFFFF]" : "text-[var(--color-primary)]") : (isDark ? "text-[#18A0A8]" : "text-slate-500")}`}>
                    {item.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Expanded Content Area */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
                  exit={{ opacity: 0, height: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4 flex flex-col justify-center w-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {IconComp && (
                      <div className="w-10 h-10 rounded-[10px] bg-[#18A0A8]/15 border border-[#18A0A8]/20 flex items-center justify-center text-[#18A0A8] shrink-0">
                        <IconComp size={20} weight="bold" />
                      </div>
                    )}
                    <span className="font-mono text-xs font-bold tracking-widest text-[#18A0A8] uppercase">
                      {item.label}
                    </span>
                  </div>

                  <p className={`font-sans text-sm sm:text-base !text-white font-light leading-relaxed max-w-2xl mb-0`}>
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
