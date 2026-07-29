"use client";

import React from "react";
import { DownloadSimple, CheckCircle } from "@phosphor-icons/react";

interface ResourceGroup {
  title: string;
  available: string[];
}

interface ResourceLibraryProps {
  accent: string;
  eyebrow: string;
  title: string;
  intro: string;
  groups: ResourceGroup[];
}

export default function ResourceLibrary({
  accent,
  eyebrow,
  title,
  intro,
  groups,
}: ResourceLibraryProps) {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span
            className="font-mono text-xs tracking-widest uppercase font-extrabold"
            style={{ color: accent }}
          >
            {eyebrow}
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-black tracking-tight">
            {title}
          </h2>
          <p className="font-sans text-lg text-slate-600 leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-8 border border-slate-200 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: accent }}
                >
                  <DownloadSimple size={20} weight="bold" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-black">
                  {group.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.available.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/60"
                  >
                    <CheckCircle size={18} style={{ color: accent }} weight="fill" className="shrink-0" />
                    <span className="font-sans text-sm font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
