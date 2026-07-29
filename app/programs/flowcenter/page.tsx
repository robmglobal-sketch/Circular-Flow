"use client";

import React from "react";
import { Sparkle, MonitorPlay, BookOpen, Warning } from "@phosphor-icons/react";
import ProgramShell from "@/components/cf/program/ProgramShell";
import PlatformWelcome from "@/components/cf/program/PlatformWelcome";
import ProgramAbout from "@/components/cf/program/ProgramAbout";
import CardsSection from "@/components/cf/program/CardsSection";
import SelfPacedSection from "@/components/cf/program/SelfPacedSection";
import ResourceLibrary from "@/components/cf/program/ResourceLibrary";
import BookProgram from "@/components/cf/program/BookProgram";
import InfoSection from "@/components/cf/program/InfoSection";

const ACCENT = "#18A0A8";

const HOW_IT_WORKS = [
  { title: "Self-Paced Video Lessons", desc: "Guided video modules you move through at your own pace, on your own schedule." },
  { title: "Downloadable Workbook", desc: "A companion workbook with reflection prompts, practices, and creative exercises." },
  { title: "Live Guided Cohorts", desc: "Optional live cohort sessions for deeper practice, dialogue, and community connection." },
  { title: "Reflection & Integration", desc: "Tools to carry the Flow into daily life, relationships, and community." },
];

const MODULES = [
  { title: "UNDERSTANDING THE FLOW STATE", tag: "Foundation", desc: 'What "flow" is, psychologically — how deep engagement and presence support emotional regulation, focus, and wellbeing.' },
  { title: "MINDFUL PRESENCE", tag: "Core Practice", desc: "Grounding and breathing practices to enter, sustain, and return to a flow state with intention." },
  { title: "CREATIVE EXPRESSION AS THERAPY", tag: "Creative Module", desc: "Using music, drawing, and writing to process emotion, build self-awareness, and give shape to inner experience." },
  { title: "SOCIAL-EMOTIONAL SKILLS", tag: "SEL Module", desc: "Naming emotions, building resilience, and strengthening the relationships that anchor growth." },
  { title: "NARRATIVE & IDENTITY", tag: "Reflection Module", desc: "Storytelling as a clinical and creative tool for meaning-making — understanding who you are and who you are becoming." },
  { title: "INTEGRATION & DAILY PRACTICE", tag: "Capstone", desc: "Carrying the Flow into everyday life, relationships, and community long after the course ends." },
];

export default function ProgramFlowCenter() {
  return (
    <ProgramShell
      program={{
        name: "The Flow Center",
        tagline: "Online Learning Platform",
        accent: ACCENT,
        heroIntro:
          "The online learning platform that teaches and delivers The Flow — Circular Flow’s core therapeutic philosophy and personal development framework — through an engaging digital learning experience.",
        details: [
          { label: "AUDIENCE", value: "Individuals, Schools, Families, Orgs" },
          { label: "FORMAT", value: "Online" },
          { label: "DELIVERY", value: "Self-paced" },
          { label: "INCLUDES", value: "Lessons + Resources + Tracking" },
          { label: "FACILITATOR", value: "Robert Mitchell Jr., MSW, LCSW" },
          { label: "STATUS", value: "Coming Soon" },
        ],
      }}
    >
      <PlatformWelcome
        accent={ACCENT}
        programLine="The Flow Center is the digital home of The Flow — the foundational framework of the Circular Flow Learning Platform. It lets individuals, schools, families, and organizations experience The Flow at their own pace, and serves as a companion to in-person programming."
      />

      <ProgramAbout
        accent={ACCENT}
        tagline="Online Learning Platform"
        description="The Flow Center lets individuals, schools, families, and organizations experience The Flow at their own pace. It also serves as a companion to in-person programming, extending the work beyond the room. Participants complete self-paced modules featuring interactive lessons, reflection activities, videos, downloadable resources, guided exercises, and progress tracking."
        designedFor={["Individuals seeking personal growth", "Schools & classrooms", "Families", "Organizations & teams", "In-person Flow program partners (companion)"]}
        formats={["Self-paced online learning", "Interactive digital experience", "Companion to in-person services", "Live guided cohorts (optional)"]}
        outcomes={[
          "Experience The Flow philosophy in a guided digital format",
          "Build a personal reflective practice",
          "Apply therapeutic frameworks to everyday life",
          "Track progress through structured modules",
          "Integrate online learning with in-person programming",
        ]}
      />

      <CardsSection
        accent={ACCENT}
        eyebrow="The Experience"
        icon={MonitorPlay}
        title="How the Course Works"
        intro="The Flow Center delivers The Flow through a flexible, self-paced online experience — with optional live cohorts for deeper practice and community."
        cards={HOW_IT_WORKS}
      />

      <CardsSection
        accent={ACCENT}
        eyebrow="Curriculum"
        icon={BookOpen}
        title="Course Modules"
        intro="The curriculum moves from understanding the flow state to integrating it into daily life."
        cards={MODULES}
        numbered
      />

      <SelfPacedSection
        accent={ACCENT}
        intro="Every module combines multimedia lessons with reflection and practice so learning moves from screen to life."
        features={["Interactive multimedia lessons", "Reflection activities & prompts", "Guided video content", "Downloadable workbooks & resources", "Step-by-step guided exercises", "Progress tracking", "Certificates of completion (future)"]}
        journey={["Module Introduction", "Interactive Lesson", "Reflection Activity", "Guided Practice", "Progress Check", "Integration"]}
      />

      <ResourceLibrary
        accent={ACCENT}
        eyebrow="Resource Library"
        title="Resource Library"
        intro="Each module includes downloadable tools that turn learning into practice."
        groups={[{ title: "Included Resources", available: ["Companion Workbook", "Reflection Prompts", "Guided Exercise Sheets", "Downloadable Guides", "Practice Tools"] }]}
      />

      <InfoSection
        accent="#4CAF50"
        eyebrow="A Note on Scope"
        icon={Warning}
        title="A Wellness Experience, Not Clinical Care"
        callout="The Flow Center is a wellness and learning experience, not a substitute for clinical care. If you are in crisis, please contact a licensed provider or emergency services."
      />

      <BookProgram
        accent={ACCENT}
        program="The Flow Center"
        eyebrow="Book The Flow Center"
        title="Enroll & Access"
        intro="The Flow Center will be available for individuals, schools, families, and organizations — on its own or as a companion to in-person programming."
        formats={["Individual enrollment", "School & classroom licenses", "Family access", "Organization & team cohorts", "Companion to in-person programs", "Self-Paced (Coming Soon)"]}
        contacts={["Join the Waitlist", "Request a Demo", "School & District Inquiries", "Organization Licensing", "Partner with The Flow Center"]}
      />
    </ProgramShell>
  );
}
