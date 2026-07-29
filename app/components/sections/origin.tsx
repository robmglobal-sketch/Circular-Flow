"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Play, X } from "@phosphor-icons/react";
import Button from "@/app/components/Button";
import { FadeUp, StaggerGrid, StaggerItem } from "@/app/components/animations";

const WORKSHOP_IMG = "https://media.base44.com/images/public/6a63c33c63a63db25193f4e5/9b9c41626_generated_23a687b9.png";
// Placeholder high-res video URL; replace with your actual origin video file or link when ready
const VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

const STATS = [
  { num: "30+", label: "Years of Impact", pct: 100 },
  { num: "12", label: "Creative Branches", pct: 82 },
  { num: "3", label: "Programs in Beta", pct: 65 },
  { num: "1", label: "Connected Mission", pct: 100 },
];

export default function OriginSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Close video modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPlaying(false);
    };
    if (isPlaying) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  return (
    <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white text-[var(--color-primary)] relative overflow-hidden ">
      {/* Subtle ambient radial warmth for white background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ══ Left Column: Interactive Video Thumbnail / Player Overlay ══ */}
          <FadeUp delay={0.1} className="lg:col-span-6 relative">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-[10px] overflow-hidden shadow-sm border border-[var(--color-primary)]/15 group bg-[#091b2e]">
              {/* Background Poster Image */}
              <img
                src={WORKSHOP_IMG}
                alt="Robert Mitchell Jr. Origin Story Video Thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Dark overlay gradient for cinematic contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061423]/80 via-[#061423]/40 to-transparent" />

              {/* Center Interactive Play Button Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Robert Mitchell Jr. origin story video"
                  className="relative group/btn w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[var(--color-secondary)]/90 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[var(--color-secondary)] transition-all duration-300 cursor-pointer border-none"
                >
                  <div className="absolute inset-0 rounded-full bg-[var(--color-secondary)] opacity-50 animate-ping pointer-events-none" />
                  <Play size={36} weight="fill" className="ml-1 transition-transform group-hover/btn:scale-110" />
                </button>
              </div>

              {/* Bottom Caption Pill Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[10px] bg-white/90 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] sm:text-xs text-[var(--color-secondary-dark)] font-extrabold uppercase tracking-widest">
                    FOUNDER STORY · VIDEO
                  </div>
                  <div className="font-heading text-sm sm:text-base font-bold !text-black">
                    From Aluminum Foil to Ecosystems
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-mono text-xs font-bold shrink-0 ml-3">
                  WATCH 
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ══ Right Column: Editorial Origin Content ══ */}
          <FadeUp delay={0.25} className="lg:col-span-6 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 mb-6 select-none group w-fit">
              {/* Paintbrush stroke background SVG */}
              <svg
                className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                viewBox="0 0 160 44"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M12 8 C30 3, 80 2, 148 6 C158 10, 156 28, 146 34 C110 39, 50 41, 10 37 C1 32, 2 14, 12 8 Z"
                />
                <path
                  fill="currentColor"
                  opacity="0.5"
                  d="M6 14 C20 9, 90 5, 154 10 C162 18, 152 32, 138 36 C100 40, 30 38, 14 32 C4 26, 0 18, 6 14 Z"
                />
              </svg>
              <BookOpen size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)]" />
              <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
                The Origin
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] !text-black leading-[1.18] mb-8 font-extrabold tracking-tight">
              A Child Who{" "}
              <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
                Shaped Worlds
              </span>{" "}
              From Foil
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 font-sans text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              <p className="mb-0 !text-black font-light">
                Growing up in Detroit during a time when family, community, culture, and collective responsibility still had a strong presence, a young Robert Mitchell Jr. would sit for hours sculpting aluminum foil into imaginary creatures and worlds and drawing the characters that would later populate his stories.
              </p>
              
              <p className="mb-0 !text-black font-light">
                That child who gave life to inanimate objects never stopped. For nearly thirty years, he has worked as an educator, author, filmmaker, musician, illustrator, and licensed clinical social worker but the impulse remained the same:{" "}
                <span className="!text-[var(--color-primary)] italic font-semibold">
                  to take raw material and transform it into something that helps people see themselves differently.
                </span>
              </p>
              
              <p className="font-sans !text-black font-light text-base sm:text-lg leading-relaxed pt-2 mb-0">
                The same child who shaped aluminum foil into imaginary worlds now transforms stories, music, films, workshops, products, and programs into tools for learning, healing, innovation, and community growth.
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-8 pt-2">
              <Link href="/about" className="no-underline inline-block">
                <Button variant="primary">
                  Learn More About Robert
                </Button>
              </Link>
            </div>
          </FadeUp>

        </div>

        {/* ══ Bottom Stat Callouts Bar ══ */}
        <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 border-t border-[var(--color-primary)]/15 pt-14 lg:pt-16 mt-16 lg:mt-24">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="group">
              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl !text-[var(--color-secondary)] font-extrabold leading-none mb-2.5 tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                {s.num}
              </div>
              <div className="font-sans text-xs sm:text-sm !text-[var(--color-primary)]/85 font-bold uppercase tracking-wider mb-4">
                {s.label}
              </div>
              <div className="h-1.5 w-full bg-[var(--color-primary)]/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-tertiary)] rounded-full transition-all duration-1000"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      {/* ══ Fullscreen Video Playback Modal (Loads video ONLY when triggered) ══ */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in"
          onClick={() => setIsPlaying(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-[5px] bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors duration-200 border border-white/20 cursor-pointer"
            aria-label="Close fullscreen video"
          >
            <X size={24} weight="bold" />
          </button>

          {/* Video Player Box */}
          <div
            className="relative w-full max-w-[1200px] aspect-video bg-black rounded-[10px] overflow-hidden shadow-lg border border-white/20"
            onClick={(e) => e.stopPropagation()} // Prevent accidental modal closing when clicking video controls
          >
            <video
              src={VIDEO_URL}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            >
              Your browser does not support HTML5 video playback.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
