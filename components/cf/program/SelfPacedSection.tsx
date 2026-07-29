"use client";

import React from "react";
import { CheckCircle, ArrowRight, Sparkle } from "@phosphor-icons/react";

interface SelfPacedSectionProps {
  accent: string;
  intro: string;
  features: string[];
  journey: string[];
}

export default function SelfPacedSection({
  accent,
  intro,
  features,
  journey,
}: SelfPacedSectionProps) {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span
            className="font-mono text-xs tracking-widest uppercase font-extrabold"
            style={{ color: accent }}
          >
            Digital Learning Experience
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
            Self-Paced Architecture &amp; Module Journey
          </h2>
          <p className="font-sans text-lg text-slate-600 leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Learning Journey Pipeline */}
        <div className="bg-slate-900 text-white rounded-[10px] p-8 sm:p-10 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <Sparkle size={20} style={{ color: accent }} weight="fill" />
            <h3 className="font-heading text-lg font-extrabold uppercase tracking-wide !text-white">
              Module Progression Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {journey.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between space-y-3 relative"
              >
                <span className="font-mono text-xs font-bold text-white/40">
                  STEP 0{idx + 1}
                </span>
                <span className="font-sans text-sm font-bold text-white">
                  {step}
                </span>
                {idx < journey.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/30"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature List Grid */}
        <div className="space-y-6">
          <h3 className="font-heading text-2xl font-extrabold text-black">
            Platform Capabilities &amp; Interactive Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
              >
                <CheckCircle size={20} style={{ color: accent }} weight="fill" className="shrink-0" />
                <span className="font-sans text-sm font-semibold text-slate-800">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
