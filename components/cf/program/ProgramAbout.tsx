"use client";

import React from "react";
import { CheckCircle, Target, Users, Monitor } from "@phosphor-icons/react";

interface ProgramAboutProps {
  accent: string;
  tagline: string;
  description: string;
  designedFor: string[];
  formats: string[];
  outcomes: string[];
}

export default function ProgramAbout({
  accent,
  tagline,
  description,
  designedFor,
  formats,
  outcomes,
}: ProgramAboutProps) {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Top Header */}
        <div className="max-w-3xl space-y-4">
          <span
            className="font-mono text-xs tracking-widest uppercase font-extrabold"
            style={{ color: accent }}
          >
            About {tagline}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
            Comprehensive Digital Learning Architecture
          </h2>
          <p className="font-sans text-lg text-slate-700 leading-relaxed pt-2">
            {description}
          </p>
        </div>

        {/* 3 Columns: Designed For, Formats, Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Designed For */}
          <div className="bg-slate-50 rounded-[14px] p-8 border border-slate-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: accent }}
              >
                <Users size={22} weight="bold" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-black">
                Designed For
              </h3>
            </div>
            <ul className="space-y-3 font-sans text-sm text-slate-700">
              {designedFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: accent }} weight="fill" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery Formats */}
          <div className="bg-slate-50 rounded-[14px] p-8 border border-slate-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: accent }}
              >
                <Monitor size={22} weight="bold" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-black">
                Delivery Formats
              </h3>
            </div>
            <ul className="space-y-3 font-sans text-sm text-slate-700">
              {formats.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: accent }} weight="fill" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Outcomes */}
          <div className="bg-slate-50 rounded-[14px] p-8 border border-slate-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: accent }}
              >
                <Target size={22} weight="bold" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-black">
                Core Outcomes
              </h3>
            </div>
            <ul className="space-y-3 font-sans text-sm text-slate-700">
              {outcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: accent }} weight="fill" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
