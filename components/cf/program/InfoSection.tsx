"use client";

import React from "react";
import { Warning } from "@phosphor-icons/react";

interface InfoSectionProps {
  accent: string;
  eyebrow: string;
  icon?: React.ComponentType<{ size?: number; weight?: any; className?: string; style?: React.CSSProperties }>;
  title: string;
  callout: string;
}

export default function InfoSection({
  accent,
  eyebrow,
  icon: Icon = Warning,
  title,
  callout,
}: InfoSectionProps) {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto">
        <div
          className="rounded-[16px] p-8 sm:p-10 border shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6"
          style={{
            backgroundColor: `${accent}0A`,
            borderColor: `${accent}30`,
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{
              backgroundColor: `${accent}20`,
              color: accent,
            }}
          >
            {Icon && <Icon size={32} weight="bold" />}
          </div>

          <div className="space-y-2">
            <span
              className="font-mono text-xs font-extrabold uppercase tracking-widest block"
              style={{ color: accent }}
            >
              {eyebrow}
            </span>
            <h3 className="font-heading text-2xl font-extrabold text-slate-900">
              {title}
            </h3>
            <p className="font-sans text-base text-slate-700 leading-relaxed max-w-4xl">
              {callout}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
