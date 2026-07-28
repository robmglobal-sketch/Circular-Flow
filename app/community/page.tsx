"use client";

import React from "react";
import Link from "next/link";
import Button from "@/app/components/Button";
import {
  Heart,
  Sparkle,
  ArrowRight,
  MapPin,
  Users,
  CheckCircle,
  Calendar,
  Camera,
  MusicNotes,
  PaintBrush,
  HandsClapping,
  Quotes,
} from "@phosphor-icons/react";

const WORKSHOP_IMG =
  "https://media.base44.com/images/public/6a63c33c63a63db25193f4e5/9b9c41626_generated_23a687b9.png";

const ITEMS = [
  {
    emoji: "🎨",
    title: "FOIL TO FILM WORKSHOP",
    desc: "Kids ages 7–11 sculpt creatures, animate them with AI. Detroit communities transformed through hands-on creativity.",
    tag: "Flagship Workshop",
    accent: "#18A0A8",
    bgGradient: "from-[#18A0A8]/20 via-[#18A0A8]/5 to-slate-900",
    themeLabel: "AI & HANDS-ON SCULPTURE",
    image: WORKSHOP_IMG,
  },
  {
    emoji: "🤝",
    title: "THE WAY MENTORING",
    desc: "Youth mentoring program rooted in music, story, and connection. Supporting foster care youth find their path.",
    tag: "Youth Mentoring",
    accent: "#D4A017",
    bgGradient: "from-[#D4A017]/25 via-[#163A5F]/40 to-[#163A5F]",
    themeLabel: "CONNECTION & FOSTER CARE SUPPORT",
  },
  {
    emoji: "🎭",
    title: "SCHOOL PLAY FINDING MYSELF",
    desc: "Original production performed by youth, exploring mental health and identity on the school stage.",
    tag: "School Program",
    accent: "#4CAF50",
    bgGradient: "from-[#4CAF50]/20 via-slate-800 to-[#163A5F]",
    themeLabel: "THEATER & MENTAL HEALTH",
  },
  {
    emoji: "🏘️",
    title: "BACK TO SCHOOL RALLY",
    desc: '"I Know I Can" Detroit back-to-school rally celebrating community, education, and youth potential.',
    tag: "Community Event",
    accent: "#18A0A8",
    bgGradient: "from-[#18A0A8]/30 via-slate-900 to-[#18A0A8]/10",
    themeLabel: "ANNUAL DETROIT CELEBRATION",
  },
  {
    emoji: "🎵",
    title: "DJ & MUSIC MENTORING",
    desc: "Teaching DJ skills, video editing, and music production as creative pathways and career exploration.",
    tag: "Creative Mentoring",
    accent: "#D4A017",
    bgGradient: "from-purple-900/40 via-[#163A5F] to-[#D4A017]/20",
    themeLabel: "CAREER PATHWAYS IN AUDIO",
  },
  {
    emoji: "🌺",
    title: "CF EMERGING CREATIVE SCHOLARSHIP",
    desc: "The Circular Flow Emerging Creative Scholarship honoring the founder's mother's legacy through wearable art and education.",
    tag: "Scholarship",
    accent: "#18A0A8",
    bgGradient: "from-rose-950/40 via-[#163A5F] to-[#18A0A8]/30",
    themeLabel: "HONORING LEGACY THROUGH ART",
  },
  {
    emoji: "📸",
    title: "PHOTOGRAPHY CLASS 101",
    desc: "Hands-on photography workshop introducing youth to visual storytelling and technical creativity.",
    tag: "Creative Workshop",
    accent: "#4CAF50",
    bgGradient: "from-emerald-950/50 via-slate-900 to-[#4CAF50]/20",
    themeLabel: "VISUAL STORYTELLING SKILLS",
  },
  {
    emoji: "👕",
    title: "GRAPHIC T-SHIRT WORKSHOP",
    desc: "Youth design and create original graphic t-shirts art, identity, and entrepreneurship in one project.",
    tag: "Arts Workshop",
    accent: "#D4A017",
    bgGradient: "from-amber-950/40 via-[#163A5F] to-[#D4A017]/30",
    themeLabel: "ENTREPRENEURSHIP & DESIGN",
  },
];

export default function CommunityPage() {
  return (
    <main className="bg-white min-h-screen font-sans text-black relative overflow-hidden">
      {/* Ambient decorative background lightings */}
      <div className="absolute top-12 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      {/* ══ Hero & Proof of Concept Header ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] border-b border-slate-200/80 relative z-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Paintbrush Header Badge */}
              <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 mb-2 select-none group">
                <svg
                  className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                  viewBox="0 0 210 44"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="currentColor"
                    d="M12 8 C40 3, 110 2, 198 6 C208 10, 206 28, 196 34 C150 39, 60 41, 10 37 C1 32, 2 14, 12 8 Z"
                  />
                  <path
                    fill="currentColor"
                    opacity="0.5"
                    d="M6 14 C30 9, 110 5, 204 10 C212 18, 202 32, 188 36 C130 40, 40 38, 14 32 C4 26, 0 18, 6 14 Z"
                  />
                </svg>
                <Heart size={18} weight="fill" className="relative z-10 text-[var(--color-secondary-dark)] animate-pulse" />
                <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
                  COMMUNITY IMPACT
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold !text-black tracking-tight leading-[1.14]">
                Proof of{" "}
                <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
                  Concept
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg lg:text-xl !text-black font-light max-w-2xl leading-relaxed mb-0">
                Real work. Real communities. Real transformation. Nearly thirty years of showing up across Detroit and beyond through creative education and mentorship.
              </p>

              <div className="pt-4 flex items-center gap-4 text-slate-500 font-mono text-xs uppercase font-bold tracking-widest">
                <MapPin size={16} className="text-[var(--color-secondary)]" />
                <span>ROOTED IN DETROIT, MICHIGAN</span>
                <span>•</span>
                <span>30+ YEARS OF IMPACT</span>
              </div>
            </div>

            {/* Right Hero Flagship Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[10px] overflow-hidden border-2 border-slate-200/90 shadow-2xl group">
                <img
                  src={WORKSHOP_IMG}
                  alt="Youth participating in Circular Flow's Foil to Film workshop"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163A5F]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-[10px] shadow-lg border border-white/40">
                    <div className="font-mono text-[10px] text-[#18A0A8] font-extrabold tracking-widest uppercase">
                      FLAGSHIP INITIATIVE
                    </div>
                    <div className="font-heading text-sm font-bold text-slate-900">
                      Foil to Film Workshop
                    </div>
                  </div>
                  <span className="text-3xl filter drop-shadow-md">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Alternating Left/Right Creative Showcase Section ══ */}
      <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-[1440px] mx-auto space-y-24 sm:space-y-36">
          {ITEMS.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20 items-center"
              >
                {/* ── Graphic & Visual Showcase Box ── */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative rounded-[10px] overflow-hidden shadow-2xl border border-slate-200 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group bg-[#163A5F]">
                    {/* Background abstract visual gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${item.bgGradient} opacity-95 group-hover:scale-105 transition-transform duration-700`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

                    {/* Render actual image if provided, otherwise rich graphic artwork container */}
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center select-none">
                        {/* Huge floating decorative emoji */}
                        <div className="text-7xl sm:text-8xl lg:text-9xl mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl">
                          {item.emoji}
                        </div>
                        <div className="font-mono text-xs sm:text-sm !text-white/80 tracking-[0.3em] font-black uppercase border border-white/20 px-4 py-1 rounded-[10px] bg-black/20 backdrop-blur-xs">
                          {item.themeLabel}
                        </div>
                      </div>
                    )}

                    {/* Index watermark corner */}
                    <div className="absolute top-6 right-6 font-heading text-4xl sm:text-5xl font-extrabold text-white/15 pointer-events-none">
                      #{String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                      <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-[10px] shadow-xl border border-white/50 max-w-[85%]">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-lg">{item.emoji}</span>
                          <span
                            className="font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-widest"
                            style={{ color: item.accent || "#18A0A8" }}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <div className="font-heading text-sm sm:text-base font-bold text-slate-900 truncate">
                          {item.title}
                        </div>
                      </div>

                      <div className="w-12 h-12 rounded-[10px] bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center !text-white shrink-0 shadow-lg">
                        <Sparkle size={20} weight="fill" className="animate-pulse !text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Text Content Side ── */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 shadow-2xs">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.accent }} />
                    <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-4.5xl font-extrabold !text-black tracking-tight leading-snug">
                    {item.title.split(" ")[0]}{" "}
                    <span className="heading-italic font-normal" style={{ color: item.accent }}>
                      {item.title.split(" ").slice(1).join(" ") || item.title}
                    </span>
                  </h2>

                  <p className="font-sans text-lg sm:text-xl !text-black font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="border-t border-slate-200 pt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-500 font-bold uppercase">
                      <CheckCircle size={18} weight="fill" className="text-[var(--color-secondary)]" />
                      <span>COMMUNITY VERIFIED INITIATIVE</span>
                    </div>

                    <Link href="/Contact" className="no-underline">
                      <Button variant="primary" size="small">
                        Get Involved
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ Community Synthesis & Quote Banner ══ */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white relative z-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-8 !text-white">
          <Quotes size={56} weight="fill" className="!text-white/20 mx-auto pointer-events-none" />

          <h2 className="font-sans text-2xl sm:text-3.5xl lg:text-4xl !text-white font-light leading-relaxed max-w-4xl mx-auto italic">
            &ldquo;When young people build and design with their own hands, community growth isn&apos;t just taught, it is actively created.&rdquo;
          </h2>

          <div className="font-mono text-xs sm:text-sm text-[#D4A017] uppercase tracking-widest font-extrabold">
            Circular Flow Community Philosophy
          </div>
        </div>
      </section>
    </main>
  );
}
