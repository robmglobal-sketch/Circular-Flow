"use client";

import React from "react";
import { Sparkle } from "@phosphor-icons/react";
import FeatureExCard, { ProjectItem } from "./FeatureExCard";

const PROJECTS: ProjectItem[] = [
  {
    id: "detropolis",
    title: "DETROPOLIS",
    type: "Film Series",
    category: "film",
    description: "A Detroit-rooted AI-animated sci-fi universe — 6 episodes of Man vs. Machine exploring identity, technology, and community resilience.",
    what: "AI sci-fi series",
    teaches: "STEM & critical thinking",
    serves: "Youth & educators",
    media: ["6 Episodes", "PDF Book", "AI Animation"],
    path: "/media#detropolis",
  },
  {
    id: "finding-myself",
    title: "FINDING MYSELF WHILE FINDING A FRIEND",
    type: "SEL Project",
    category: "book",
    description: "A young adult novel, school play, and full music EP exploring mental health, friendship, and self-discovery for youth.",
    what: "YA novel + play + EP",
    teaches: "SEL & mental health",
    serves: "Middle & high school",
    media: ["PDF Book", "School Play", "Music EP", "Workbook"],
    path: "/media#finding-myself",
  },
  {
    id: "flow-room",
    title: "THE FLOW ROOM",
    type: "Animated Talk Show",
    category: "film",
    description: "An animated talk show series where youth voices, original music, AI animation, and real conversation meet — born from the Flow Room creative sessions.",
    what: "Animated talk show",
    teaches: "Storytelling & dialogue",
    serves: "Youth & community",
    media: ["EP 01 Pilot", "EP 02 Sonny", "Discussion Guide"],
    path: "/media#the-flow-room",
  },
  {
    id: "foil-film",
    title: "FOIL TO FILM",
    type: "Workshop",
    category: "workshop",
    description: "The flagship Circular Flow community workshop — kids sculpt aluminum foil creatures, then bring them to life using AI storytelling and video.",
    what: "Hands-on creativity",
    teaches: "Art + AI storytelling",
    serves: "Kids ages 7–11",
    media: ["Video Docs", "Brochure", "AI Clips"],
    path: "/#community",
  },
  {
    id: "decode-mask",
    title: "DECODE THE MASK",
    type: "Film Series",
    category: "film",
    description: "A social-issue video series examining identity, perception, and authenticity. Two powerful episodes with reflection guides for group discussion.",
    what: "Social issue videos",
    teaches: "Identity & mental health",
    serves: "Teens & adults",
    media: ["2 Films", "Discussion Guide", "Art"],
    path: "/media#decode-mask",
  },
  {
    id: "the-way",
    title: "THE WAY",
    type: "Music · Mentoring",
    category: "music",
    description: "An original music project woven with a real mentoring story about youth, foster care, and the transformative power of community connection.",
    what: "Music + mentoring",
    teaches: "Resilience & hope",
    serves: "At-risk youth",
    media: ["Music Video", "Remix", "Mentoring Story"],
    path: "/media#the-way",
  },
  {
    id: "gamble-love",
    title: "THE GAMBLE OF LOVE",
    type: "Book · Music",
    category: "book",
    description: "A Vegas-themed relationship workbook and original song exploring partnership, communication, and social-emotional wellness for couples and communities.",
    what: "Workbook + music",
    teaches: "Relationships & SEL",
    serves: "Adults & couples",
    media: ["PDF Workbook", "Original Song"],
    path: "/media#gamble-love",
  },
  {
    id: "lead",
    title: "LEAD",
    type: "Program",
    category: "program",
    beta: true,
    description: "Leadership, Expression, Arts, and Diversity — a structured youth development program celebrating diverse voices, disciplines, and creative identities.",
    what: "Youth leadership",
    teaches: "Leadership + arts",
    serves: "Youth & schools",
    media: ["Curriculum", "Workshops", "Assessments"],
    path: "/programs/lead",
  },
  {
    id: "rize-up",
    title: "RIZE UP",
    type: "Program",
    category: "program",
    beta: true,
    description: "A youth empowerment curriculum that builds personal agency, community awareness, and future-readiness through creative self-expression.",
    what: "Empowerment program",
    teaches: "Personal growth",
    serves: "Youth 14–21",
    media: ["Modules", "Videos", "Workbooks"],
    path: "/programs/rize-up",
  },
  {
    id: "sdd",
    title: "SDD DEVICE",
    type: "Innovation",
    category: "program",
    comingSoon: true,
    description: "A cutting-edge innovation project in active development. Join the waitlist to be the first to learn what the SDD Device will bring to education and community.",
    what: "Innovation tech",
    teaches: "Future-focused learning",
    serves: "TBD",
    media: ["Coming Soon"],
    path: "/programs#sdd",
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-slate-50/70 text-[var(--color-primary)] relative overflow-hidden border-t border-[var(--color-border)]">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/30 text-[var(--color-secondary-dark)] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 shadow-xs">
            <Sparkle size={16} weight="bold" className="text-[var(--color-secondary)]" />
            <span>Featured Experiences</span>
          </div>

          <h2 className="font-heading text-3.5xl sm:text-5xl lg:text-6xl font-extrabold !text-[var(--color-primary)] tracking-tight leading-[1.15] max-w-4xl">
            The Creative{" "}
            <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
              Portfolio
            </span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl mt-4 mb-0">
            Each project is a living proof of what happens when storytelling, technology, and community come together.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <FeatureExCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
