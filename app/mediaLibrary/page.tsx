"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SquaresFour,
  FilmStrip,
  MusicNotes,
  BookOpen,
  Wrench,
  Users,
  CaretRight,
  Sparkle,
  FolderOpen,
  Tag,
  PlayCircle,
} from "@phosphor-icons/react";
import { YTEmbed, VideoGrid, AudioCard } from "@/components/cf/MediaEmbed";

const CATEGORIES = [
  { id: "all", label: "ALL MEDIA", icon: SquaresFour },
  { id: "films", label: "FILMS & ANIMATIONS", icon: FilmStrip },
  { id: "music", label: "MUSIC / EPs", icon: MusicNotes },
  { id: "books", label: "BOOKS / PDFs", icon: BookOpen },
  { id: "workshops", label: "WORKSHOPS", icon: Wrench },
  { id: "community", label: "COMMUNITY", icon: Users },
];

interface VideoItem {
  id: string;
  title: string;
  subtitle?: string;
}

interface AudioTrack {
  title: string;
  subtitle?: string;
  src: string;
}

interface MediaItem {
  id: string;
  category: string;
  section: string;
  title: string;
  subtitle: string;
  type: string;
  year: string;
  desc: string;
  items: string[];
  tags: string[];
  includes: string[];
  accent: string;
  videos?: VideoItem[];
  featuredVideoId?: string;
  audioTracks?: AudioTrack[];
  audioNote?: string;
  imageNote?: string;
}

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "detropolis-series",
    category: "films",
    section: "detropolis",
    title: "DETROPOLIS — SEASON 1",
    subtitle: "Man vs. Machine Series",
    type: "Film Series",
    year: "2024",
    desc: "A Detroit-rooted AI-animated science fiction universe. Six episodes exploring technology, identity, and community resilience through the lens of the city that built America's machines.",
    items: [
      "EP 01: Detropolis (Pilot)",
      "EP 02: Man & Machine",
      "EP 03: The Reckoning",
      "EP 04: Planetary Warlords",
      "EP 05: Transmitting Energies",
      "EP 06: Beyond GPS",
    ],
    tags: ["AI Animation", "Sci-Fi", "STEM Education", "Detroit", "Series"],
    includes: ["6 Episodes", "PDF Book Available", "Discussion Guide"],
    accent: "#18A0A8",
    videos: [
      { id: "4SCLslNZ2Ts", title: "Detropolis — EP 01: Pilot", subtitle: "Season 1" },
      { id: "Z-vokUUxqhg", title: "Detropolis — EP 02: Man & Machine", subtitle: "Season 1" },
      { id: "y8jug0fM1WE", title: "Detropolis — EP 03: The Reckoning", subtitle: "Season 1" },
      { id: "h19LLmnYPpY", title: "Detropolis — EP 04: Planetary Warlords", subtitle: "Season 1" },
      { id: "f8gWFlmDPKk", title: "Detropolis — EP 05: Transmitting Energies", subtitle: "Season 1" },
      { id: "qGL-vnGD2_o", title: "Detropolis — EP 06: Beyond GPS", subtitle: "Season 1" },
    ],
    featuredVideoId: "4SCLslNZ2Ts",
  },
  {
    id: "finding-myself",
    category: "books",
    section: "finding-myself",
    title: "FINDING MYSELF WHILE FINDING A FRIEND",
    subtitle: "SEL Novel, Play & EP",
    type: "Multi-Media Project",
    year: "2024",
    desc: "A young adult novel exploring mental health, friendship, and self-discovery. Accompanied by an original school play performed by youth, a full music EP, and a mental health workbook.",
    items: [
      "YA Novel (PDF)",
      "School Play (Full Production)",
      "School Play Notebook",
      "Original Music EP (8 tracks)",
      "Mental Health Workbook",
      "Discussion Activities",
    ],
    tags: ["SEL", "Mental Health", "Youth", "Novel", "Music", "Theater"],
    includes: ["PDF Book", "School Play Video", "Music EP", "Workbook"],
    accent: "#D4A017",
    videos: [
      { id: "mW4F-KaHnds", title: "Finding Myself — Books, School Play & Notebook", subtitle: "Content Overview" },
      { id: "st8ritSG-Mk", title: "Finding Myself — Books, School Play & Notebook 2", subtitle: "Content Overview" },
      { id: "oL4OeWzCbs8", title: "Finding Myself While Finding a Friend — EP", subtitle: "Music EP" },
      { id: "hv571yMVT9w", title: "Finding Myself While Finding a Friend — EP 2", subtitle: "Music EP" },
    ],
    featuredVideoId: "mW4F-KaHnds",
    audioTracks: [
      { title: "Her Comb (Rap)", subtitle: "EP Track 01", src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/new/files/6a693d0e001b128867e1/view?project=6a69311c001c8d677a07" },
      { title: "Finding Myself EP — Track 02", subtitle: "EP Track 02", src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/new/files/6a693d0e001b1d7ee569/view?project=6a69311c001c8d677a07" },
      { title: "Finding Myself EP — Track 03", subtitle: "EP Track 03", src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/new/files/6a693d0e001b1fc6bcaa/view?project=6a69311c001c8d677a07" },
      { title: "Finding Myself EP — Track 04", subtitle: "EP Track 04", src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/new/files/6a693d0e001b1019543b/view?project=6a69311c001c8d677a07" },
      { title: "Finding Myself EP — Track 05", subtitle: "EP Track 05", src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/new/files/6a693d0e001b1da77f60/view?project=6a69311c001c8d677a07" },
      { title: "Finding Myself EP — Track 06", subtitle: "EP Track 06", src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/new/files/6a693d0e001b1ad5f863/view?project=6a69311c001c8d677a07" },
      { title: "Finding Myself EP — Track 07", subtitle: "EP Track 07", src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/new/files/6a693d0e001b18aa9127/view?project=6a69311c001c8d677a07" },
      { title: "Finding Myself EP — Track 08", subtitle: "EP Track 08", src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/new/files/6a693d0e001b117966eb/view?project=6a69311c001c8d677a07" },
    ],
  },
  {
    id: "the-way",
    category: "music",
    section: "the-way",
    title: "THE WAY",
    subtitle: "Music & Mentoring Project",
    type: "Music + Mentoring",
    year: "2023",
    desc: "An original music project woven with a real story of youth mentoring. Robert and Haze — a story of connection, foster care, music, and the power of showing up for young people.",
    items: [
      "The Way — Music Video 1",
      "The Way — Music Video 2",
      "Mentoring Biography",
      "Photo Documentation (11 images)",
    ],
    tags: ["Hip-Hop", "Mentoring", "Foster Care", "Youth", "Music Video"],
    includes: ["Music Videos", "Photos", "Bio PDF"],
    accent: "#18A0A8",
    videos: [
      { id: "yqs2x9IIUWE", title: "The Way — Mentorship Project", subtitle: "Music & Mentoring" },
      { id: "KRCLo6KxKl4", title: "The Way — Mentorship Project 2", subtitle: "Music & Mentoring" },
    ],
    featuredVideoId: "yqs2x9IIUWE",
    imageNote: "11 project photos and PDF bio available via institutional request.",
  },
  {
    id: "decode-mask",
    category: "films",
    section: "decode-mask",
    title: "DECODE THE MASK SERIES",
    subtitle: "Social Issue Video Series",
    type: "Film Series",
    year: "2024",
    desc: "Two powerful short films exploring identity, perception, and what we hide behind our social masks. Ideal for group discussion in schools, community centers, and therapeutic settings. Includes the Google Flow AI-generated music video for the Mask episode.",
    items: [
      "Ep 1: The Mask Series",
      "Ep 2: The Mask Series 2",
      "Ep 3: Beyond GPS (Decode the Mask)",
      "Google Flow Music Video — Mask Ep 1",
      "Discussion Guide PDF",
    ],
    tags: ["Social Issues", "Identity", "Mental Health", "Discussion", "Short Film"],
    includes: ["3 Films", "AI Music Video", "Discussion Guide"],
    accent: "#18A0A8",
    videos: [
      { id: "3zYoSYoK_w4", title: "The Mask Series — Episode 1", subtitle: "Decode the Mask" },
      { id: "WQVFtVaW-Cs", title: "The Mask Series — Episode 2", subtitle: "Decode the Mask" },
      { id: "B7KkOtDkOH4", title: "Decode the Mask — Beyond GPS (EP 2)", subtitle: "Decode the Mask" },
      { id: "vOlVkvE-rOY", title: "Google Flow AI Music Video — Mask Episode 1", subtitle: "AI Animation" },
    ],
    featuredVideoId: "3zYoSYoK_w4",
    imageNote: "Series images and PDF discussion guide available via institutional request.",
  },
  {
    id: "the-flow-room",
    category: "films",
    section: "the-flow-room",
    title: "THE FLOW ROOM",
    subtitle: "Animated Talk Show Series",
    type: "Animation Series",
    year: "2024",
    desc: "An animated talk show series born from the Flow Room creative sessions — where youth voices, original music, AI animation, and real conversation meet. Precursor session footage also included — showing the real mentoring and music-teaching sessions that sparked the series.",
    items: [
      "EP 01: The Pilot Episode (Full HD 1080p)",
      "EP 02: Sonny — Part 1",
      "EP 02: Sonny — Part 2",
      "Precursor: Mentoring Youth — DJ Skills",
      "Precursor: Pre-Flow Room Session",
    ],
    tags: ["Animation", "Talk Show", "Youth", "AI Film", "Music"],
    includes: ["3 Episode Videos", "Precursor Footage", "Discussion Guide"],
    accent: "#18A0A8",
    videos: [
      { id: "zDENB9j2Dh4", title: "The Flow Room — Pilot Episode (Full HD 1080p)", subtitle: "EP 01" },
      { id: "UAQ_gBr-B5U", title: "The Flow Room — Sonny Part 1", subtitle: "EP 02" },
      { id: "dX1p76tNCfs", title: "The Flow Room — Sonny Part 2", subtitle: "EP 02" },
      { id: "ANzUzDypb1g", title: "Mentoring Youth — Teaching DJ Skills (Precursor)", subtitle: "Behind the Series" },
      { id: "SCodnwf8ahg", title: "Pre-Cursor to The Flow Room", subtitle: "Behind the Series" },
    ],
    featuredVideoId: "zDENB9j2Dh4",
  },
  {
    id: "gamble-love",
    category: "books",
    section: "gamble-love",
    title: "THE GAMBLE OF LOVE",
    subtitle: "Relationship Workbook & Music",
    type: "Book + Music",
    year: "2024",
    desc: "A Vegas-themed relationship and personal growth workbook exploring communication, vulnerability, and the choice to love with intentionality. Paired with an original audio recording.",
    items: [
      "PDF Workbook: A Vegas Weekend & Relationship Guide",
      "Original Audio: The Gamble of Love",
    ],
    tags: ["Relationships", "SEL", "Adults", "Workbook", "Music"],
    includes: ["PDF Workbook", "Original Audio"],
    accent: "#D4A017",
    audioTracks: [
      { title: "The Gamble of Love — Original Song & Audio", subtitle: "Workbook Audio Companion", src: "https://nyc.cloud.appwrite.io/v1/storage/buckets/new/files/6a693895002a664737ff/view?project=6a69311c001c8d677a07" },
    ],
  },
  {
    id: "foil-film",
    category: "workshops",
    section: "foil-film",
    title: "FOIL TO FILM WORKSHOP",
    subtitle: "Flagship Community Workshop",
    type: "Workshop Documentation",
    year: "2024",
    desc: "The flagship Circular Flow community workshop — kids ages 7–11 sculpt aluminum foil creatures, then bring them to life using AI-assisted video and animation. Three workshop documentation sets with behind-the-scenes footage and photography.",
    items: [
      "Foil to Film — Content Set 1 (3 videos)",
      "Foil to Film — Content Set 2 (3 videos)",
      "AI Creature Animation Demos",
      "Photography Documentation (5 images per set)",
    ],
    tags: ["Workshop", "Kids 7–11", "AI Storytelling", "Hands-On", "Detroit"],
    includes: ["6 Videos", "AI Clips", "Photos"],
    accent: "#4CAF50",
    videos: [
      { id: "2vQpl7Qz3ao", title: "Foil to Film — Content 3, Video 1", subtitle: "Workshop Doc" },
      { id: "V2pMakH79Jc", title: "Foil to Film — Content 3, Video 2", subtitle: "Workshop Doc" },
      { id: "4sc1ESXlFo4", title: "Foil to Film — Content 3, Video 3", subtitle: "Workshop Doc" },
      { id: "S-L_kmp3gJk", title: "Foil to Film — Content 2, Video 1", subtitle: "Workshop Doc" },
      { id: "TLuJIeSuv2o", title: "Foil to Film — Content 2, Video 2", subtitle: "Workshop Doc" },
      { id: "uEfgO6llUmc", title: "Foil to Film — Content 2, Video 3", subtitle: "Workshop Doc" },
    ],
    featuredVideoId: "2vQpl7Qz3ao",
    imageNote: "10 workshop photos available via institutional request.",
  },
  {
    id: "mask-art",
    category: "films",
    section: "decode-mask",
    title: "AI ANIMATIONS & GOOGLE FLOW",
    subtitle: "AI-Generated Visual Art & Music Videos",
    type: "AI Art + Film",
    year: "2024",
    desc: "Original AI-animated content created with Google Flow — including a music video of original 1990s raps brought into 2026, the evolution of the Detropolis series, and more AI-generated visual storytelling experiments.",
    items: [
      "Google Flow Animated Music Video — 1990s Raps",
      "Evolution of the Detropolis Series",
      "Diarama",
    ],
    tags: ["Visual Art", "Music Video", "AI Film", "Google Flow"],
    includes: ["AI Animation Videos", "Music Video"],
    accent: "#18A0A8",
    videos: [
      { id: "Z0P_OI-ms7c", title: "Diarama", subtitle: "AI Animation" },
      { id: "1SLrXOERIaM", title: "Evolution of the Detropolis Series", subtitle: "AI Animation Short" },
      { id: "Y2zvkuHMSeQ", title: "Google Flow — Animated Music Video (1990s Raps)", subtitle: "AI Animation" },
    ],
    featuredVideoId: "Z0P_OI-ms7c",
  },
  {
    id: "community-events",
    category: "community",
    section: "community",
    title: "COMMUNITY EVENTS & WORKSHOPS",
    subtitle: "30+ Years of Impact",
    type: "Community Documentation",
    year: "2013–2024",
    desc: "Documentation of Circular Flow's community work — Back to School rallies, fundraisers, community picnics, mentoring events, youth graduations, and more across Detroit.",
    items: [
      "Back to School Rally — Detroit (Part 1 & 2)",
      "Community Picnic (Co-Founded, Still Exists Today)",
      "Graduation Speech to Kids",
      "Showcase, Fun, School Supplies & Haircut Giveaway",
      "Community Work Promo Video",
      "Mentoring Youth — Videography",
    ],
    tags: ["Community", "Detroit", "Events", "Youth", "Impact"],
    includes: ["Video Documentation", "Community Footage"],
    accent: "#163A5F",
    videos: [
      { id: "3tsGlBHLALk", title: "Back to School Rally in Detroit — Part 1", subtitle: "Community Work" },
      { id: "SqpAAK_V2HU", title: "Back to School Rally in Detroit — Part 2", subtitle: "Community Work" },
      { id: "U3TipF1s7Pc", title: "Community Picnic — Co-Founded, Still Running Today", subtitle: "Community Work" },
      { id: "xd-6pvVxUok", title: "Graduation Speech to Kids", subtitle: "Community Work" },
      { id: "o0GpeIu_7g4", title: "Showcase, School Supplies & Free Haircuts", subtitle: "Community Work" },
      { id: "KNKKUZ54jdM", title: "Community Work Promo Video", subtitle: "Community Work" },
      { id: "u-5aABEDdPk", title: "Mentoring Youth — Videography", subtitle: "Community Work" },
    ],
    featuredVideoId: "3tsGlBHLALk",
  },
  {
    id: "creative-workshops",
    category: "workshops",
    section: "workshops",
    title: "CREATIVE WORKSHOPS",
    subtitle: "Photography & Graphic Design",
    type: "Workshop Series",
    year: "2024",
    desc: "Two hands-on creative workshops for youth — Photography Class 101 and Graphic T-Shirt Design. Both teach technical skills while building confidence and creative identity. Includes slideshow and video documentation.",
    items: [
      "Photography Class 101 (Presentation)",
      "Graphic T-Shirt Workshop Slideshow",
      "Graphic T-Shirt Workshop 2 — Video",
      "Graphic T-Shirt Workshop — Community Slideshow Video",
    ],
    tags: ["Photography", "Graphic Design", "Youth", "Workshop", "Skills"],
    includes: ["Presentation Decks", "Video Walkthroughs", "Documentation"],
    accent: "#4CAF50",
    videos: [
      { id: "hNl7tR6MWSA", title: "Graphic T-Shirt Workshop with Youths — Part 2", subtitle: "Creative Workshop" },
      { id: "F7BueXOwPdU", title: "Graphic T Workshop in Community — Slideshow", subtitle: "Creative Workshop" },
    ],
    featuredVideoId: "hNl7tR6MWSA",
    imageNote: "Photography Class 101 PowerPoint and T-Shirt Workshop PowerPoint available via institutional request.",
  },
  {
    id: "group-home-project",
    category: "workshops",
    section: "workshops",
    title: "GROUP HOME PROJECT",
    subtitle: "Brought Into 2026 with Google Flow",
    type: "Legacy Project",
    year: "2026",
    desc: "A project originally created with kids at a group home, now brought into 2026 using Google Flow AI tools. PDF documentation is available and images show the legacy of this work.",
    items: [
      "Original Project Documentation (PDF)",
      "Project Photography",
    ],
    tags: ["Group Home", "Youth", "Legacy", "Google Flow", "Community"],
    includes: ["PDF Documentation", "Project Photos"],
    accent: "#4CAF50",
    imageNote: "PDF files and project images are stored on Appwrite (currently restricted). Contact us for access.",
  },
];

export default function MediaLibraryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? MEDIA_ITEMS
      : MEDIA_ITEMS.filter((m) => m.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpanded((current) => (current === id ? null : id));
  };

  return (
    <main className="bg-white min-h-screen font-sans text-black relative overflow-hidden">
      {/* Ambient decorative background glows */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      {/* ══ Hero Section ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] border-b border-slate-200/80 relative z-10">
        <div className="max-w-[1440px] mx-auto flex flex-col items-start">
          {/* Paintbrush Header Badge */}
          <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 mb-6 select-none group">
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
            <Sparkle size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)] animate-pulse" />
            <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
              MEDIA STUDIO
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold !text-black tracking-tight leading-[1.14] max-w-4xl mb-6">
            The Circular Flow<br />
            <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
              Media Library
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg lg:text-xl !text-black font-light max-w-3xl leading-relaxed mb-0">
            Nearly thirty years of books, films, music, workshops, and community documentation organized and accessible. Every piece a proof of the mission.
          </p>
        </div>
      </section>

      {/* ══ Sticky Category Filter Navigation ══ */}
      <section className="sticky top-20 lg:top-[5.5rem] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-2">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setExpanded(null);
                }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-[14px] font-heading text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer border-none focus:outline-none uppercase tracking-wider font-bold ${
                  isActive
                    ? "bg-[var(--color-secondary)] text-white shadow-sm scale-[1.02]"
                    : "bg-transparent text-slate-600 hover:text-black hover:bg-slate-100/80"
                }`}
              >
                <Icon size={18} weight={isActive ? "bold" : "regular"} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ══ Media Items Archive List ══ */}
      <section className="py-16 lg:py-24 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Header metadata row */}
          <div className="flex items-center justify-between gap-4 mb-8 pb-3 border-b border-slate-100 font-mono text-xs text-slate-400 font-bold tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <FolderOpen size={16} weight="duotone" className="text-[var(--color-secondary)]" />
              <span>
                SHOWING <strong className="text-slate-700">{filtered.length}</strong> ARCHIVAL ITEMS —{" "}
                {activeCategory.replace("-", " ")}
              </span>
            </div>
            <div className="hidden sm:block text-slate-400 font-normal">
              Click any item to view complete documentation &amp; media
            </div>
          </div>

          {/* Dossier List */}
          <div className="space-y-4">
            {filtered.map((item) => {
              const isExpanded = expanded === item.id;
              return (
                <div
                  key={item.id}
                  id={item.section}
                  className={`bg-white border transition-all duration-300 rounded-[22px] overflow-hidden ${
                    isExpanded
                      ? "border-[var(--color-secondary)] shadow-xl ring-2 ring-[var(--color-secondary)]/10"
                      : "border-slate-200/90 shadow-2xs hover:border-[var(--color-secondary)]/60 hover:shadow-md"
                  }`}
                >
                  {/* Interactive Header Row */}
                  <button
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer group/row focus:outline-none bg-[#F8FAFC]/50 hover:bg-white transition-colors"
                    onClick={() => toggleExpand(item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`drawer-${item.id}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 flex-1 min-w-0">
                      {/* Type & Year Stamp Badge */}
                      <div className="shrink-0 sm:w-44 border-l-2 pl-3" style={{ borderColor: item.accent || "#18A0A8" }}>
                        <div className="font-mono text-[11px] font-extrabold text-[#18A0A8] uppercase tracking-widest mb-0.5">
                          {item.type}
                        </div>
                        <div className="font-mono text-[11px] text-slate-400 font-medium">
                          {item.year}
                        </div>
                      </div>

                      {/* Title and Subtitle */}
                      <div className="flex-1 min-w-0 pr-4">
                        <h3 className="font-heading text-lg sm:text-2xl font-extrabold !text-black tracking-tight mb-1 group-hover/row:text-[var(--color-secondary-dark)] transition-colors truncate">
                          {item.title}
                        </h3>
                        <p className="font-sans text-sm sm:text-base text-slate-600 font-light mb-0 truncate">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 shrink-0">
                      {/* Desktop Tags Preview */}
                      <div className="hidden lg:flex items-center gap-2">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-sans text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Expand indicator button */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isExpanded
                            ? "bg-[var(--color-secondary)] text-white rotate-90"
                            : "bg-slate-100 text-slate-500 group-hover/row:bg-[var(--color-secondary)]/15 group-hover/row:text-[var(--color-secondary-dark)]"
                        }`}
                      >
                        <CaretRight size={20} weight="bold" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Complete Record Drawer */}
                  {isExpanded && (
                    <div id={`drawer-${item.id}`} className="p-6 sm:p-10 border-t border-slate-200/80 bg-gradient-to-b from-white to-[#F8FAFC]/50">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Main Description & Media */}
                        <div className="lg:col-span-8 space-y-8">
                          <div>
                            <h4 className="font-heading text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-3">
                              ABOUT THIS PROJECT
                            </h4>
                            <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed mb-0">
                              {item.desc}
                            </p>
                          </div>

                          {/* Featured Video */}
                          {item.featuredVideoId && (
                            <div className="space-y-3">
                              <h4 className="font-heading text-xs uppercase font-extrabold tracking-widest text-slate-400">
                                FEATURED VIDEO
                              </h4>
                              <YTEmbed
                                videoId={item.featuredVideoId}
                                title={item.title}
                              />
                            </div>
                          )}

                          {/* All Videos in Grid (if more than 1) */}
                          {item.videos && item.videos.length > 1 && (
                            <div className="space-y-3">
                              <h4 className="font-heading text-xs uppercase font-extrabold tracking-widest text-slate-400">
                                ALL {item.videos.length} VIDEOS
                              </h4>
                              <VideoGrid
                                videos={item.videos}
                                accent={item.accent}
                                cols={item.videos.length >= 3 ? 3 : 2}
                              />
                            </div>
                          )}

                          {/* Audio Players */}
                          {item.audioTracks && item.audioTracks.length > 0 && (
                            <div className="space-y-3">
                              <h4 className="font-heading text-xs uppercase font-extrabold tracking-widest text-slate-400">
                                AUDIO TRACKS ({item.audioTracks.length})
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {item.audioTracks.map((track, trackIdx) => (
                                  <AudioCard
                                    key={trackIdx}
                                    title={track.title}
                                    subtitle={track.subtitle}
                                    src={track.src}
                                    accent={item.accent}
                                  />
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Audio notes for Appwrite-hosted content */}
                          {item.audioNote && (
                            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80">
                              <p className="font-mono text-[10px] text-amber-700 uppercase font-extrabold tracking-wider mb-1">AUDIO ACCESS NOTE</p>
                              <p className="font-sans text-sm text-slate-700">{item.audioNote}</p>
                            </div>
                          )}
                          {item.imageNote && (
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                              <p className="font-mono text-[10px] text-slate-500 uppercase font-extrabold tracking-wider mb-1">ADDITIONAL ASSETS</p>
                              <p className="font-sans text-sm text-slate-700">{item.imageNote}</p>
                            </div>
                          )}

                          {/* Complete Checklist of Items Included */}
                          <div className="bg-white border border-slate-200 rounded-[18px] p-6 sm:p-7 shadow-2xs">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                              <PlayCircle size={20} weight="duotone" className="text-[var(--color-secondary)]" />
                              <h4 className="font-heading text-sm text-[var(--color-primary)] uppercase tracking-wider font-extrabold mb-0">
                                COMPLETE MEDIA REPOSITORY INCLUDES
                              </h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {item.items.map((inc, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3 font-sans text-sm !text-black/85 font-medium p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100/70 transition-colors"
                                >
                                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mt-1.5 shrink-0 animate-pulse" />
                                  <span className="leading-snug">{inc}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Full Tag Cloud */}
                          <div className="flex items-center flex-wrap gap-2 pt-2">
                            <Tag size={16} className="text-slate-400 mr-1" />
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-[11px] uppercase font-bold tracking-wider bg-slate-100 text-slate-600 px-3 py-1 rounded-md border border-slate-200/80"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right Sidebar Formats & Action */}
                        <div className="lg:col-span-4 flex flex-col justify-between bg-white border border-slate-200/90 rounded-[20px] p-6 sm:p-8 shadow-2xs h-full">
                          <div>
                            <h4 className="font-heading text-xs uppercase font-extrabold tracking-widest text-[#18A0A8] mb-4">
                              AVAILABLE FORMATS
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-8">
                              {item.includes.map((format) => (
                                <span
                                  key={format}
                                  className="font-sans text-xs font-extrabold text-[var(--color-secondary-dark)] bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/30 px-3 py-1.5 rounded-full"
                                >
                                  ✓ {format}
                                </span>
                              ))}
                            </div>

                            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 mb-6">
                              <div className="font-mono text-[10px] text-[#b08712] uppercase font-extrabold tracking-wider mb-1">
                                INSTITUTIONAL ACCESS
                              </div>
                              <p className="font-sans text-xs !text-black font-light leading-relaxed mb-0">
                                Request full archival streaming and workbook access for schools, educators, and community mentors.
                              </p>
                            </div>
                          </div>

                          <Link
                            href="/#partner"
                            className="w-full inline-flex items-center justify-center gap-2 font-heading text-sm font-extrabold uppercase tracking-wider text-white bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] active:scale-[0.98] rounded-[14px] px-6 py-4 shadow-sm transition-all group/btn"
                          >
                            <span>Request Access</span>
                            <CaretRight
                              size={16}
                              weight="bold"
                              className="group-hover/btn:translate-x-1 transition-transform"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
