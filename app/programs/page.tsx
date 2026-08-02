"use client";

import React from "react";
import Link from "next/link";
import Button from "@/app/components/Button";
import {
  ArrowRight,
  Clock,
  ShoppingBag,
  Medal as Award,
  Bell,
  Sparkle,
  Compass,
  Brain,
  RocketLaunch,
  Lightbulb,
  VideoCamera,
  Cpu,
  Heart,
} from "@phosphor-icons/react";
import HeroImageGrid from "../components/HeroImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";

const PROGRAMS = [
  {
    name: "THE FLOW",
    path: "/programs/theflow",
    accent: "#18A0A8",
    accentLight: "rgba(24, 160, 168, 0.1)",
    tagline: "Therapeutic Program & Framework",
    format: "In-Person",
    icon: Brain,
    desc: "Circular Flow's signature therapeutic model — helping individuals understand themselves, others, and the systems they live in through discussion, creativity, and reflection.",
  },
  {
    name: "THE FLOW CENTER",
    path: "/programs/flowcenter",
    accent: "#18A0A8",
    accentLight: "rgba(24, 160, 168, 0.1)",
    tagline: "Online Learning Platform",
    format: "Online",
    icon: RocketLaunch,
    desc: "The online platform that teaches and delivers The Flow digitally through self-paced modules, reflection, and guided exercises.",
  },
  {
    name: "LEAD",
    path: "/programs/lead",
    accent: "#18A0A8",
    accentLight: "rgba(24, 160, 168, 0.1)",
    tagline: "Learn · Explore · Achieve · Develop",
    format: "In-Person",
    icon: Lightbulb,
    desc: "Interdisciplinary arts, creativity, innovation, leadership, and career exploration for young people building their future.",
  },
  {
    name: "RIZE UP",
    path: "/programs/rizeup",
    accent: "#4CAF50",
    accentLight: "rgba(76, 175, 80, 0.12)",
    tagline: "Empowerment & Resilience",
    format: "In-Person",
    icon: Sparkle,
    desc: "A stand-alone empowerment and resilience program helping youth overcome adversity and build confidence and future-readiness.",
  },
  {
    name: "THE FLOW LABS",
    path: "/programs/flowlabs",
    accent: "#D4A017",
    accentLight: "rgba(212, 160, 23, 0.12)",
    tagline: "Innovation & Applied Learning",
    format: "Hybrid",
    icon: Compass,
    desc: "Circular Flow's innovation division — where ideas become real-world projects through hands-on design, building, and creation.",
  },
];

const ECOSYSTEM = [
  {
    name: "The Flow",
    desc: "Our therapeutic philosophy and personal development framework.",
    path: "/programs/theflow",
    color: "#18A0A8",
  },
  {
    name: "The Flow Center",
    desc: "The online platform where participants experience and learn The Flow digitally.",
    path: "/programs/flowcenter",
    color: "#18A0A8",
  },
  {
    name: "LEAD",
    desc: "Creative arts, leadership, innovation, and career exploration.",
    path: "/programs/lead",
    color: "#18A0A8",
  },
  {
    name: "RIZE UP",
    desc: "Resilience, empowerment, and life skills for youth overcoming adversity.",
    path: "/programs/rizeup",
    color: "#4CAF50",
  },
  {
    name: "The Flow Labs",
    desc: "Hands-on innovation spaces where creativity, technology, design, entrepreneurship, and problem-solving transform ideas into real-world projects.",
    path: "/programs/flowlabs",
    color: "#D4A017",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-white min-h-screen font-sans text-black relative overflow-hidden">
      {/* Ambient decorative background glows */}
      <div className="absolute top-12 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-96 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      {/* ══ Hero Section ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 relative z-10 border-b border-slate-200/80">
        <div className="absolute inset-0 pointer-events-none z-0 hero-grid-pattern" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="flex flex-col items-start">
            <Breadcrumbs 
              items={[
                { label: "Programs" }
              ]} 
            />
            {/* Paintbrush Header Badge */}
          <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 mb-6 select-none group">
            <svg
              className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
              viewBox="0 0 260 44"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M12 8 C40 3, 130 2, 248 6 C258 10, 256 28, 246 34 C200 39, 70 41, 10 37 C1 32, 2 14, 12 8 Z"
              />
              <path
                fill="currentColor"
                opacity="0.5"
                d="M6 14 C30 9, 130 5, 254 10 C262 18, 252 32, 238 36 C170 40, 50 38, 14 32 C4 26, 0 18, 6 14 Z"
              />
            </svg>
            <Sparkle size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)] animate-pulse" />
            <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
              CIRCULAR FLOW LEARNING PLATFORM
            </span>
          </div>

          <h1 className="font-heading text-[40px] sm:text-5xl lg:text-6xl font-extrabold !text-black tracking-tight leading-[1.14] max-w-4xl mb-6">
            Five Programs.<br />
            <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
              One Mission.
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg lg:text-xl !text-black font-light max-w-3xl leading-relaxed mb-0">
            The Circular Flow Learning Platform weaves five interconnected programs The Flow, The Flow Center, LEAD, RIZE UP, and The Flow Labs into one ecosystem supporting personal growth, therapeutic development, creative expression, innovation, and lifelong learning. All programs are currently in Coming Soon mode.
          </p>
          </div>
          <HeroImageGrid />
        </div>
      </section>

      {/* ══ Coming Soon Notice Banner ══ */}
      <div className="px-6 sm:px-8 lg:px-12 py-4 bg-gradient-to-r from-[#D4A017]/15 via-[#D4A017]/10 to-[#D4A017]/15 border-b border-[#D4A017]/30 shadow-2xs relative z-10">
        <div className="max-w-[1440px] mx-auto flex items-center gap-3.5">
          <div className="w-8 h-8 rounded-full bg-[#D4A017]/20 flex items-center justify-center shrink-0">
            <Bell size={18} weight="fill" className="text-[#b08712] animate-bounce" />
          </div>
          <p className="font-sans text-sm sm:text-base !text-black/85 font-normal mb-0">
            <span className="font-heading uppercase text-xs sm:text-sm tracking-wider font-extrabold text-[#b08712] mr-2 px-2 py-0.5 bg-[#D4A017]/20 rounded-md">
              Coming Soon
            </span>
            All online courses and programs are in Coming Soon mode. Enrollment and booking are disabled until launch. Explore each program and join its waitlist to be notified.
          </p>
        </div>
      </div>

      {/* ══ Programs Grid ══ */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] relative z-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog, index) => {
              const IconComp = prog.icon;
              return (
                <div
                  key={prog.name}
                  className="bg-white border border-slate-200/90 rounded-[10px] p-8 sm:p-9 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Watermark Index Number */}
                  <div className="absolute -top-3 -right-2 font-heading text-6xl font-black text-slate-100 group-hover:text-slate-200/80 transition-colors pointer-events-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between gap-2 mb-6 relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10">
                        <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
                        <span className="font-mono text-[10px] text-[#b08712] tracking-widest font-extrabold uppercase">
                          COMING SOON
                        </span>
                      </div>
                      <span className="font-mono text-[10px] font-bold tracking-wider text-slate-500 border border-slate-200 bg-slate-50 uppercase px-2.5 py-1 rounded-[10px]">
                        {prog.format}
                      </span>
                    </div>

                    {/* Program Icon & Name */}
                    <div className="flex items-center gap-3.5 mb-2 relative z-10">
                      <div
                        className="w-12 h-12 rounded-[10px] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-2xs"
                        style={{ backgroundColor: prog.accentLight, color: prog.accent }}
                      >
                        <IconComp size={26} weight="bold" />
                      </div>
                      <div>
                        <h2
                          className="font-heading text-2xl sm:text-2.5xl font-extrabold tracking-tight mb-0.5"
                          style={{ color: prog.accent }}
                        >
                          {prog.name}
                        </h2>
                        <div className="font-mono text-xs font-semibold text-slate-400">
                          {prog.tagline}
                        </div>
                      </div>
                    </div>

                    <div className="my-5 h-px w-full bg-slate-100" />

                    <p className="font-sans text-base !text-black font-light leading-relaxed mb-8 relative z-10">
                      {prog.desc}
                    </p>
                  </div>

                  <Link href={prog.path} className="no-underline relative z-10 w-fit">
                    <Button variant="primary" size="small">
                      Explore Program
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* ── The Flow Room Featured Card ── */}
          <div className="mt-12 bg-white border border-slate-200/90 rounded-[10px] p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/10 via-transparent to-transparent pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
              <div className="flex-1 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 mb-1">
                  <VideoCamera size={14} weight="bold" className="text-[var(--color-secondary-dark)]" />
                  <span className="font-mono text-[10px] text-[var(--color-secondary-dark)] tracking-widest font-extrabold uppercase">
                    ANIMATED TALK SHOW SERIES
                  </span>
                </div>
                
                <h3 className="font-heading text-2.5xl sm:text-3xl font-extrabold !text-black tracking-tight mb-2">
                  The Flow <span className="heading-italic text-[var(--color-secondary)] font-normal">Room</span>
                </h3>

                <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed max-w-3xl mb-0">
                  Born from the same creative sessions, The Flow Room is an animated talk show series where youth voices, music, AI animation, and real conversation meet. Explore it in the Media Library.
                </p>
              </div>

              <Link href="/mediaLibrary#the-flow-room" className="no-underline shrink-0">
                <Button variant="secondary" size="small">
                  View Series
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ How Everything Works Together ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white border-t border-slate-200 relative z-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="relative inline-flex items-center gap-2.5 px-6 py-2 mb-4 select-none group">
              <svg
                className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                viewBox="0 0 240 44"
                preserveAspectRatio="none"
              >
                <path fill="currentColor" d="M12 8 C40 3, 120 2, 228 6 C238 10, 236 28, 226 34 C180 39, 60 41, 10 37 C1 32, 2 14, 12 8 Z" />
              </svg>
              <Clock size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)]" />
              <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
                HOW EVERYTHING WORKS TOGETHER
              </span>
            </div>

            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black tracking-tight leading-[1.16]">
              One <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">Interconnected</span> Ecosystem
            </h2>
            <p className="font-sans text-base sm:text-lg !text-black font-light mt-4 mb-0 leading-relaxed">
              Five programs, one platform — each playing a distinct role in a single, connected learning ecosystem.
            </p>
          </div>

          {/* Ecosystem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ECOSYSTEM.map((item, i) => (
              <Link
                key={item.name}
                href={item.path}
                className="no-underline flex items-start gap-5 p-7 bg-[#F8FAFC] border border-slate-200/90 rounded-[10px] hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:border-[#18A0A8]/40 transition-all duration-300 group"
              >
                <div
                  className="font-heading text-2.5xl font-black shrink-0 w-12 h-12 rounded-[10px] bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform"
                  style={{ color: item.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold !text-black mb-2 flex items-center justify-between group-hover:text-[#163A5F] transition-colors">
                    <span>{item.name}</span>
                    <ArrowRight size={18} weight="bold" className="text-slate-300 group-hover:text-[#18A0A8] group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="font-sans text-sm sm:text-base !text-black font-light leading-relaxed mb-0">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Deep Navy Synthesis Card */}
          <div className="bg-[#163A5F] rounded-[10px] p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden border border-white/10 shadow-xl">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/25 via-transparent to-transparent pointer-events-none blur-2xl" />
            
            <p className="relative z-10 font-sans text-lg sm:text-2xl !text-white leading-relaxed max-w-4xl mx-auto font-light mb-8">
              Together, these programs create the Circular Flow Learning Platform — an interconnected ecosystem that supports personal growth, therapeutic development, creative expression, innovation, leadership, and lifelong learning through both online and in-person experiences.
            </p>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs sm:text-sm uppercase tracking-widest text-[#D4A017] font-extrabold">
              <span>GROWTH</span>
              <span className="text-white/30">•</span>
              <span>INNOVATION</span>
              <span className="text-white/30">•</span>
              <span>CREATIVITY</span>
              <span className="text-white/30">•</span>
              <span>COMMUNITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SDD Device Innovation Feature ══ */}
      <section id="sdd" className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] border-t border-slate-200 relative z-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-white border-2 border-[#D4A017]/40 rounded-[10px] p-8 sm:p-12 shadow-lg overflow-hidden relative group">
            {/* Ambient gold decorative light */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#D4A017]/15 via-transparent to-transparent pointer-events-none blur-3xl" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/15">
                  <Clock size={16} weight="bold" className="text-[#b08712]" />
                  <span className="font-mono text-xs text-[#b08712] tracking-widest font-extrabold uppercase">
                    COMING SOON — INNOVATION DIVISION
                  </span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold !text-black tracking-tight">
                  The <span className="heading-italic text-[#D4A017] font-normal">SDD Device</span>
                </h2>

                <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed max-w-2xl mb-0">
                  A cutting-edge innovation project currently in active development. The SDD Device represents the next frontier of Circular Flow&apos;s creative technology work. The full promo video, interactive prototype, and launch details will be revealed soon.
                </p>
              </div>

              {/* Futuristic Interactive Diagnostic HUD Widget */}
              <div className="shrink-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 border-2 border-dashed border-[#D4A017]/50 rounded-[10px] bg-gradient-to-tr from-[#D4A017]/10 via-white to-[#D4A017]/5 flex items-center justify-center p-6 shadow-md relative group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4A017]/60 animate-ping" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-[10px] bg-[#D4A017]/20 border border-[#D4A017]/40 flex items-center justify-center text-[#b08712]">
                      <Cpu size={28} weight="duotone" className="animate-pulse" />
                    </div>
                    <div className="font-heading text-2xl font-black text-[#b08712] tracking-wider">
                      SDD
                    </div>
                    <div className="inline-block font-mono text-[10px] font-extrabold text-slate-600 bg-[#D4A017]/20 border border-[#D4A017]/30 px-2 py-0.5 rounded-sm tracking-widest uppercase">
                      LOADING...
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 font-mono text-[9px] text-slate-400 font-bold uppercase">
                    SYS.V1 // DEV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Scholarship Section ══ */}
      <section id="scholarship" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white relative z-10 overflow-hidden">
        {/* Background ambient decor */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/20 via-transparent to-transparent opacity-80 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="bg-white/5 border border-white/15 rounded-[10px] p-8 sm:p-14 shadow-2xl backdrop-blur-sm !text-white">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
              <div className="flex-1 space-y-4 !text-white">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A017]/25 border border-[#D4A017]/50 !text-white">
                  <Award size={18} weight="fill" className="!text-white" />
                  <span className="font-mono text-xs tracking-widest font-extrabold uppercase !text-white">
                    SCHOLARSHIP INITIATIVE
                  </span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4.5xl !text-white font-extrabold tracking-tight leading-snug mb-1">
                  The Darrielle McQueen Creative Legacy Scholarship
                </h2>

                <div className="font-heading text-sm sm:text-base font-semibold !text-white tracking-wide uppercase mb-4">
                  In Memory of Ms. Darrielle McQueen — Honoring Legacy Through Art
                </div>

                <p className="font-sans text-base sm:text-lg !text-white font-light leading-relaxed max-w-3xl mb-0">
                  The Darrielle McQueen Creative Legacy Scholarship honors the life and creative spirit of Ms. Darrielle McQueen. Presented by R. Mitchell Youth &amp; Community Services &amp; Circular Flow, this scholarship supports emerging creatives from underrepresented communities who demonstrate the spirit of Circular Flow — creativity, connection, and community impact.
                </p>
              </div>

              {/* Award Plaque Side Box */}
              <div className="shrink-0 w-full lg:w-auto">
                <div className="bg-gradient-to-b from-[#D4A017]/20 via-[#D4A017]/10 to-transparent border-2 border-[#D4A017]/50 rounded-[10px] p-8 text-center min-w-[260px] shadow-2xl relative !text-white">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#D4A017]/20 border border-[#D4A017]/40 flex items-center justify-center !text-white mb-4 shadow-sm">
                    <Heart size={28} weight="fill" className="!text-white" />
                  </div>
                  <div className="font-mono text-[10px] !text-white mb-2 tracking-widest font-extrabold uppercase">
                    PRESENTED BY
                  </div>
                  <div className="font-heading text-base !text-white font-extrabold mb-1">
                    R. Mitchell Youth &amp; Community Services
                  </div>
                  <div className="font-heading text-sm !text-white font-bold mb-4">
                    &amp; Circular Flow
                  </div>
                  <div className="pt-3 border-t border-white/10 font-mono text-xs !text-white uppercase font-medium tracking-wide">
                    Honoring legacy through creativity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Merch Store Section ══ */}
      <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-white relative z-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[10px] p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10">
                  <ShoppingBag size={16} weight="bold" className="text-[var(--color-secondary-dark)]" />
                  <span className="font-mono text-[11px] text-[var(--color-secondary-dark)] tracking-widest font-extrabold uppercase">
                    COMING SOON
                  </span>
                </div>
                
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold !text-black tracking-tight mb-2">
                  Circular Flow <span className="heading-italic text-[var(--color-secondary)] font-normal">Merch Store</span>
                </h2>

                <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed mb-0">
                  Official Circular Flow merchandise — apparel, art prints, educational materials, and limited collector items currently in production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
