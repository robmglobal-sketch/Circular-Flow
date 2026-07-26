"use client";

import React from "react";
import { Quotes, Sparkle, ArrowsMerge, UsersThree, Lightbulb, Compass, RocketLaunch } from "@phosphor-icons/react";

const PILLARS = [
  {
    icon: UsersThree,
    title: "Diverse People",
    desc: "Connecting generations, students, educators, and community leaders.",
  },
  {
    icon: Lightbulb,
    title: "Multidisciplinary Art",
    desc: "Merging storytelling, music, films, and physical workshop craft.",
  },
  {
    icon: Compass,
    title: "Emerging Tech",
    desc: "Integrating modern digital tools and AI into human-centered learning.",
  },
  {
    icon: RocketLaunch,
    title: "Positive Action",
    desc: "Transforming raw ideas into real-world community impact and healing.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#163A5F] text-white relative overflow-hidden">
      {/* Background ambient radial glows & graphic elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/15 via-[var(--color-tertiary)]/5 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/10 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/10 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        
        {/* Section Header Badge */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-tertiary)]/15 border border-[var(--color-tertiary)]/40 text-[var(--color-tertiary)] text-xs sm:text-sm font-bold tracking-wider uppercase mb-5">
            <Sparkle size={16} weight="fill" className="text-[var(--color-tertiary)]" />
            <span>The Flow · Philosophy</span>
          </div>

          <h2 className="font-heading text-3.5xl sm:text-5xl lg:text-6xl font-bold !text-white tracking-tight leading-[1.15] max-w-4xl">
            The{" "}
            <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
              Flow
            </span>{" "}
            Philosophy
          </h2>
        </div>

        {/* ══ Asymmetric Creative Layout ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Glassmorphic Spotlight Quote Card (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white/[0.04] backdrop-blur-xl border border-white/15 rounded-[10px] p-8 sm:p-10 lg:p-14 relative overflow-hidden shadow-md group">
            {/* Giant decorative watermark quote icon */}
            <Quotes
              size={180}
              weight="fill"
              className="absolute -top-10 -right-10 text-white/[0.04] group-hover:text-[var(--color-secondary)]/10 transition-colors duration-500 pointer-events-none"
            />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[var(--color-secondary)]/10 to-transparent blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-[5px] bg-[var(--color-tertiary)]/20 border border-[var(--color-tertiary)]/40 flex items-center justify-center text-[var(--color-tertiary)] mb-8 shadow-sm">
                <Quotes size={26} weight="fill" />
              </div>

              <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-8 tracking-tight">
                “The Flow is the belief that growth happens through connection. Every person, idea, discipline, generation, and technology influences the others. When those relationships become stronger, individuals and communities become stronger.”
              </blockquote>

              <p className="font-sans text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mb-0">
                I design interconnected creative ecosystems that bring together diverse people, disciplines, art forms, and technologies to inspire learning, reflection, collaboration, and positive action.
              </p>
            </div>

            {/* Founder Signature Footer */}
            <div className="relative z-10 pt-10 mt-10 border-t border-white/15 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-tertiary)] p-0.5 shrink-0 shadow-sm">
                <div className="w-full h-full rounded-full bg-[#163A5F] flex items-center justify-center text-white font-bold text-sm tracking-wider font-heading">
                  RM
                </div>
              </div>
              <div>
                <div className="font-mono text-xs sm:text-sm font-bold text-[var(--color-tertiary)] tracking-wide">
                  Robert Mitchell Jr., MSW, LCSW (Illinois)
                </div>
                <div className="font-sans text-xs text-white/60 font-medium">
                  Founder &amp; CEO — Circular Flow
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Interconnected Pillars Grid (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="px-2 mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-secondary)] font-bold">
              <ArrowsMerge size={18} weight="bold" />
              <span>Interconnected Ecosystem Pillars</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 flex-1">
              {PILLARS.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={p.title}
                    className="bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-md border border-white/10 hover:border-[var(--color-secondary)]/50 rounded-[10px] p-5 sm:p-6 transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-[5px] bg-[var(--color-secondary)]/15 border border-[var(--color-secondary)]/30 text-[var(--color-secondary)] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-all duration-300">
                      <IconComponent size={20} weight="bold" />
                    </div>
                    <div>
                      <div className="font-heading text-base sm:text-lg font-bold !text-white mb-1 group-hover:!text-[var(--color-secondary)] transition-colors">
                        {p.title}
                      </div>
                      <p className="font-sans text-xs sm:text-sm !text-white/80 leading-normal mb-0">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
