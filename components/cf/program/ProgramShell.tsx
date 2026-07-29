"use client";

import React from "react";
import Link from "next/link";
import Button from "@/app/components/Button";
import { Sparkle } from "@phosphor-icons/react";

interface ProgramDetail {
  label: string;
  value: string;
}

interface ProgramShellProps {
  program: {
    name: string;
    tagline: string;
    accent: string;
    heroIntro: string;
    details: ProgramDetail[];
  };
  breadcrumbs?: React.ReactNode;
  children: React.ReactNode;
}

export default function ProgramShell({ program, breadcrumbs, children }: ProgramShellProps) {
  const { name, tagline, accent, heroIntro, details } = program;

  return (
    <main className="bg-white min-h-screen font-sans text-black relative overflow-hidden">
      {/* Background Glow Effects */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] via-transparent to-transparent blur-3xl pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, ${accent} 0%, transparent 70%)`,
        }}
      />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#163A5F]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none z-0 hero-grid-pattern" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {breadcrumbs && <div className="mb-4">{breadcrumbs}</div>}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[10px] border"
              style={{
                backgroundColor: `${accent}15`,
                borderColor: `${accent}40`,
                color: accent,
              }}
            >
              <Sparkle size={18} weight="fill" className="animate-pulse" />
              <span className="font-mono text-xs tracking-widest font-extrabold uppercase">
                CIRCULAR FLOW PLATFORM
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold !text-black tracking-tight leading-[1.1]">
              {name.toUpperCase()}{" "}
              <span className="heading-italic font-normal block sm:inline" style={{ color: accent }}>
                {tagline}
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-xl !text-black/80 font-normal leading-relaxed max-w-2xl pt-2">
              {heroIntro}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="#book" className="no-underline">
                <Button variant="primary">Enroll &amp; Access</Button>
              </Link>
              <Link href="/Contact" className="no-underline">
                <Button variant="secondary">Request Info</Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Program Details Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#163A5F] rounded-[10px] p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] via-transparent to-transparent pointer-events-none opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle, ${accent} 0%, transparent 70%)`,
                }}
              />
              <h3 className="font-heading text-xl font-extrabold !text-white mb-6 border-b border-white/10 pb-4 tracking-wide uppercase">
                Program Quick Overview
              </h3>

              <div className="space-y-4 font-sans text-sm">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-xs text-white/60 uppercase tracking-widest font-bold">
                      {detail.label}
                    </span>
                    <span className="text-white font-semibold text-right ml-4">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <div className="space-y-0">
        {children}
      </div>
    </main>
  );
}
