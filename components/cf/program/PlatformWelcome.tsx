"use client";

import React from "react";
import { Sparkle } from "@phosphor-icons/react";

interface PlatformWelcomeProps {
  accent: string;
  programLine: string;
}

export default function PlatformWelcome({ accent, programLine }: PlatformWelcomeProps) {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-white rounded-[16px] p-8 sm:p-12 shadow-sm border border-slate-200/80 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="space-y-4 max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase"
              style={{ backgroundColor: `${accent}15`, color: accent }}
            >
              <Sparkle size={14} weight="fill" />
              <span>Welcome to The Flow Center</span>
            </div>
            <p className="font-sans text-xl sm:text-2xl font-semibold text-slate-900 leading-relaxed">
              {programLine}
            </p>
          </div>

          <div
            className="shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center border shadow-inner"
            style={{
              backgroundColor: `${accent}10`,
              borderColor: `${accent}30`,
              color: accent,
            }}
          >
            <Sparkle size={44} weight="duotone" />
          </div>
        </div>
      </div>
    </section>
  );
}
