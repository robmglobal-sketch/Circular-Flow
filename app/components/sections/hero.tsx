"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";

export default function Hero() {
  return (
    <section className="relative pt-12 md:pt-20 pb-24 lg:pb-32 overflow-hidden bg-[var(--background)]">
      {/* Background Grid Pattern (0.5 opacity at top fading to 0 at bottom) */}
      <div className="absolute inset-0 pointer-events-none z-0 hero-grid-pattern" />

      {/* Subtle background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/10 via-[var(--color-primary)]/5 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[40%] right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/10 to-transparent blur-3xl pointer-events-none z-0" />

      {/* ── Top Header Section ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[var(--space-lg)] lg:px-[var(--space-xl)] text-center mb-12 lg:mb-16">
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] font-bold text-[var(--color-primary)] tracking-tight leading-[1.15] max-w-5xl mx-auto mb-6">
          Where Storytelling, Technology, Education, and Community{" "}
          <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
            Flow Together
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
          Circular Flow creates books, music, films, workshops, and learning experiences
          that help people think deeply, create boldly, and reconnect with themselves and others.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link href="/programs" className="no-underline">
            <Button variant="secondary">Explore Our Programs</Button>
          </Link>
          <Link href="/#partner" className="no-underline">
            <Button variant="primary">Book a Workshop</Button>
          </Link>
        </div>
      </div>

      {/* ── 5-Column Bento Grid Section (Arch & Staggered Structure) ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-5 items-start">
          
          {/* ══ Column 1 ══ */}
          <div className="flex flex-col gap-5">
            {/* Card 1 — Hero Image */}
            <div className="group relative h-[320px] sm:h-[340px] rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-[var(--color-border)]/50">
              <Image
                src="/hero/1.jpg"
                alt="Every Journey Begins With One Opportunity"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              {/* Full dark image overlay + strong bottom gradient for text contrast */}
              <div className="absolute inset-0 bg-[#061423]/45 transition-colors duration-300 group-hover:bg-[#061423]/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040e1a] via-[#040e1a]/75 to-transparent opacity-95" />
              
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 flex flex-col justify-end transform group-hover:-translate-y-1 transition-transform duration-500">
                <div className="text-xs sm:text-sm font-semibold !text-white mb-1.5 leading-snug tracking-tight font-heading">
                  <span className="text-base sm:text-lg font-extrabold uppercase tracking-wide mr-1">Every</span> 
                  Journey Begins With One Opportunity
                </div>
                <p className="text-[8px] sm:text-[8px] !text-white/90 font-sans leading-[1.4] mb-0">
                  Empowering youth through creativity, leadership, and engaging learning experiences.
                </p>
              </div>
            </div>

            {/* Card 3 — Statistics Card (Gradient) */}
            <div className="h-[200px] sm:h-[220px] bg-gradient-to-br from-[var(--color-secondary)] via-[#168f96] to-[#0f6c73] rounded-[10px] p-6 lg:p-7 flex flex-col justify-center text-white shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="text-3xl sm:text-4xl font-extrabold font-heading !text-white tracking-tight mb-1">
                12,500+
              </div>
              <p className="text-[8px] sm:text-[8px] font-semibold !text-white/90 font-sans uppercase tracking-wider mb-0">
                Learners Inspired
              </p>
            </div>
          </div>

          {/* ══ Column 2 (Staggered slightly down on large screens) ══ */}
          <div className="flex flex-col lg:pt-8">
            {/* Card 2 — Community Impact */}
            <div className="group relative h-[420px] sm:h-[460px] lg:h-[550px] rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-[var(--color-border)]/50">
              <Image
                src="/hero/2.jpg"
                alt="Building Strong Communities"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Full dark image overlay + strong bottom gradient for text contrast */}
              <div className="absolute inset-0 bg-[#061423]/45 transition-colors duration-300 group-hover:bg-[#061423]/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040e1a] via-[#040e1a]/75 to-transparent opacity-95" />
              
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 flex flex-col justify-end transform group-hover:-translate-y-1 transition-transform duration-500">
                <div className="text-xs sm:text-sm font-semibold !text-white mb-1.5 leading-snug tracking-tight font-heading">
                  <span className="text-base sm:text-lg font-extrabold uppercase tracking-wide mr-1">Building</span> 
                  Strong Communities
                </div>
                <p className="text-[8px] sm:text-[8px] !text-white/90 font-sans leading-[1.4] mb-0">
                  Connecting schools and families through transformative collaborative learning.
                </p>
              </div>
            </div>
          </div>

          {/* ══ Column 3 (Center column, positioned lower to create an arch with breathing room below buttons) ══ */}
          <div className="flex flex-col md:col-span-2 lg:col-span-1 lg:pt-28">
            {/* Card 7 — Educational Philosophy */}
            <div className="h-full min-h-[340px] lg:h-[430px] bg-gradient-to-br from-[#5B7696] via-[#435F7E] to-[#2D4766] rounded-[10px] p-6 lg:p-7 flex flex-col justify-center text-white shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden border border-white/10">
              <div className="text-xs sm:text-sm font-bold !text-white mb-2.5 tracking-tight leading-tight font-heading">
                <span className="text-lg sm:text-xl font-extrabold uppercase tracking-wide mr-1">LEARN.</span> 
                Create. Lead.
              </div>
              <p className="text-[8px] sm:text-[8px] !text-white/90 font-sans leading-[1.4] mb-0">
                Mission-based learning combining creative projects, real-world challenges, and portfolio building to inspire lasting leadership.
              </p>
            </div>
          </div>

          {/* ══ Column 4 (Staggered slightly down to mirror Column 2) ══ */}
          <div className="flex flex-col lg:pt-10">
            {/* Card 4 — Classroom Learning */}
            <div className="group relative h-[420px] sm:h-[460px] lg:h-[530px] rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-[var(--color-border)]/50">
              <Image
                src="/hero/3.jpg"
                alt="Learning That Inspires Action"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Full dark image overlay + strong bottom gradient for text contrast */}
              <div className="absolute inset-0 bg-[#061423]/45 transition-colors duration-300 group-hover:bg-[#061423]/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040e1a] via-[#040e1a]/75 to-transparent opacity-95" />
              
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 flex flex-col justify-end transform group-hover:-translate-y-1 transition-transform duration-500">
                <div className="text-xs sm:text-sm font-semibold !text-white mb-1.5 leading-snug tracking-tight font-heading">
                  <span className="text-base sm:text-lg font-extrabold uppercase tracking-wide mr-1">Learning</span> 
                  That Inspires Action
                </div>
                <p className="text-[8px] sm:text-[8px] !text-white/90 font-sans leading-[1.4] mb-0">
                  Interactive programs building student confidence, creativity, and action.
                </p>
              </div>
            </div>
          </div>

          {/* ══ Column 5 (Rightmost column) ══ */}
          <div className="flex flex-col gap-5">
            {/* Card 5 — Educational Resources (Dark Green Card) */}
            <div className="h-[270px] sm:h-[290px] bg-gradient-to-br from-[#114B3B] via-[#0B3D2F] to-[#072B21] rounded-[10px] p-6 lg:p-7 flex flex-col justify-center text-white shadow-sm hover:shadow-md transition-all duration-300 border border-[#236b56]/40 relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 bg-emerald-400/15 border border-emerald-400/30 !text-white text-[10px] px-2.5 py-0.5 rounded-full font-semibold mb-2.5 uppercase tracking-wider w-fit">
                Preview Available
              </div>
              <div className="text-xs sm:text-sm font-semibold !text-white mb-1.5 leading-snug font-heading">
                <span className="text-base sm:text-lg font-extrabold uppercase tracking-wide mr-1">Learning</span> 
                Library
              </div>
              <p className="text-[8px] sm:text-[8px] !text-white/90 font-sans leading-[1.4] mb-0">
                Student guides, facilitator resources, AI challenges, and journals for engaging learning.
              </p>
            </div>

            {/* Card 6 — Innovation & Creativity */}
            <div className="group relative h-[250px] sm:h-[270px] rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-[var(--color-border)]/50">
              <Image
                src="/hero/4.png"
                alt="Innovation in Every Experience"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Full dark image overlay + strong bottom gradient for text contrast */}
              <div className="absolute inset-0 bg-[#061423]/45 transition-colors duration-300 group-hover:bg-[#061423]/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040e1a] via-[#040e1a]/75 to-transparent opacity-95" />
              
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end transform group-hover:-translate-y-1 transition-transform duration-500">
                <div className="text-xs sm:text-sm font-semibold !text-white mb-1 leading-snug tracking-tight font-heading">
                  <span className="text-base sm:text-lg font-extrabold uppercase tracking-wide mr-1">Innovation</span> 
                  in Every Experience
                </div>
                <p className="text-[8px] sm:text-[8px] !text-white/90 font-sans leading-[1.4] mb-0">
                  Blending storytelling, technology, and AI into creative educational journeys.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
