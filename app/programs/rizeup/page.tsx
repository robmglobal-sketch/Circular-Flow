"use client";

import React, { useState } from "react";
import { YTEmbed } from "@/components/cf/MediaEmbed";
import Link from "next/link";
import Button from "@/app/components/Button";
import {
  Sparkle,
  Compass,
  Target,
  Users,
  Wrench,
  Monitor,
  RocketLaunch,
  CheckCircle,
  ArrowRight,
  CaretDown,
  Info,
  ListDashes,
  DownloadSimple,
  BookOpen,
  GraduationCap,
  Handshake,
  Image as ImageIcon,
  BookBookmark,
  Certificate,
  Desktop,
  MapTrifold
} from "@phosphor-icons/react";
import Breadcrumbs from "@/app/components/Breadcrumbs";

const ACCENT = "#4CAF50";

const ROWS = [
  { label: "RECOMMENDED AGES", value: "11–18 (adaptable for older youth and young adults)" },
  { label: "LENGTH", value: "8 Core Missions (flexible delivery)" },
  { label: "SESSION LENGTH", value: "60–120 minutes" },
  { label: "DELIVERY OPTIONS", value: "In-Person, Virtual, Hybrid, Self-Paced (Coming Soon)" },
  { label: "CLASS SIZE", value: "Small groups, classrooms, workshops, or community cohorts" },
  { label: "EDUCATIONAL APPROACH", value: "STARR Framework™, SEL, Arts Integration, Experiential Learning, Responsible AI" },
];

const MISSIONS_GLANCE = [
  { num: "01", title: "Discovering Who I Am", sub: "Identity, strengths, values, and personal growth." },
  { num: "02", title: "Finding My Voice", sub: "Communication, confidence, active listening, and self-expression." },
  { num: "03", title: "My Choices Matter", sub: "Decision-making, accountability, consequences, and goal setting." },
  { num: "04", title: "Managing Emotions", sub: "Emotional awareness, coping strategies, stress management, and resilience." },
  { num: "05", title: "Healthy Relationships", sub: "Respect, empathy, teamwork, conflict resolution, and boundaries." },
  { num: "06", title: "Overcoming Challenges", sub: "Perseverance, adaptability, problem-solving, and growth mindset." },
  { num: "07", title: "Leadership Through Service", sub: "Leadership, community engagement, teamwork, and civic responsibility." },
  { num: "08", title: "My Future Starts Now", sub: "Vision planning, career exploration, education, financial literacy, and a personal action plan." },
];

const JOURNEY = [
  { 
    num: "01", title: "Discovering Who I Am", 
    focus: ["Personal strengths", "Core values", "Identity", "Goal setting", "Responsible decision-making"], 
    experiences: ["My Strengths Inventory™", "Personal Values Explorer™", "Decision Compass™", "My Identity Shield™", "Reflection Journal™"], 
    outcomes: "Students begin building confidence, self-awareness, and a personal leadership portfolio." 
  },
  { 
    num: "02", title: "Finding My Voice", 
    focus: ["Healthy communication", "Active listening", "Self-expression", "Public speaking", "Respectful dialogue"], 
    experiences: ["Communication Styles", "My Voice Matters", "Listening Challenge", "Speaking with Purpose"], 
    outcomes: "Students strengthen communication skills while learning how words influence relationships, leadership, and conflict resolution." 
  },
  { 
    num: "03", title: "My Choices Matter", 
    focus: ["Critical thinking", "Decision-making", "Accountability", "Consequences", "Goal planning"], 
    experiences: ["Decision Compass™", "Choices & Consequences", "Problem Solving Lab", "Future Decisions"], 
    outcomes: "Students practice making thoughtful decisions that align with their values and future goals." 
  },
  { 
    num: "04", title: "Managing Emotions", 
    focus: ["Emotional awareness", "Healthy coping strategies", "Stress management", "Self-regulation", "Resilience"], 
    experiences: ["Emotion Check-In", "Stress Toolbox", "Mindfulness Activities", "Resilience Builder"], 
    outcomes: "Students develop practical strategies for managing emotions and responding positively to life’s challenges." 
  },
  { 
    num: "05", title: "Healthy Relationships", 
    focus: ["Trust", "Empathy", "Conflict resolution", "Teamwork", "Healthy boundaries"], 
    experiences: ["Relationship Circles", "Conflict Resolution Lab", "Empathy Challenge", "Team Builder"], 
    outcomes: "Students strengthen interpersonal skills while developing healthy, respectful relationships." 
  },
  { 
    num: "06", title: "Overcoming Challenges", 
    focus: ["Perseverance", "Adaptability", "Growth mindset", "Problem solving", "Self-confidence"], 
    experiences: ["Obstacles Into Opportunities", "Growth Mindset Challenge", "My Resilience Story"], 
    outcomes: "Students learn how setbacks can become opportunities for personal growth and success." 
  },
  { 
    num: "07", title: "Leadership Through Service", 
    focus: ["Leadership styles", "Community engagement", "Service learning", "Team leadership", "Positive influence"], 
    experiences: ["Community Mapping", "Leadership Project", "Service Challenge"], 
    outcomes: "Students recognize leadership as an opportunity to serve others and positively impact their communities." 
  },
  { 
    num: "08", title: "My Future Starts Now", 
    focus: ["Career exploration", "Educational planning", "Financial literacy", "Personal vision", "Lifelong learning"], 
    experiences: ["Vision Board", "Career Explorer", "Financial Literacy Lab", "Future Action Plan"], 
    outcomes: "Students create a personal action plan for their education, career, and future." 
  },
];

export default function ProgramRizeUp() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <main className="bg-white min-h-screen font-sans text-black relative overflow-hidden">
      {/* Ambient background gradients */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#4CAF50]/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#163A5F]/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* ══ 1. Hero Section ══ */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none z-0 hero-grid-pattern" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs 
              items={[
                { label: "Programs", href: "/programs" },
                { label: "RIZE UP" }
              ]} 
              className="mb-4"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#4CAF50]/10 border border-[#4CAF50]/30 text-[#4CAF50]">
              <Sparkle size={18} weight="fill" className="animate-pulse" />
              <span className="font-mono text-xs tracking-widest font-extrabold uppercase">
                YOUTH EMPOWERMENT PATHWAY
              </span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold !text-black tracking-tight leading-[1.1]">
              RIZE <span className="heading-italic font-normal" style={{ color: ACCENT }}>UP</span>
            </h1>
            
            <p className="font-sans text-xl sm:text-2xl !text-black/80 font-bold leading-relaxed max-w-2xl uppercase tracking-wider">
              Discover • Heal • Grow • Lead
            </p>
            
            <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed max-w-2xl pt-2">
              RIZE UP is Circular Flow’s specialized youth empowerment pathway — a trauma-informed, arts-integrated youth leadership and life skills program that empowers participants to recognize their strengths, make responsible decisions, build healthy relationships, and create positive futures.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link href="#about" className="no-underline">
                <Button variant="primary">Explore Program</Button>
              </Link>
              <Link href="/Contact" className="no-underline">
                <Button variant="secondary">Book a Session</Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#163A5F] rounded-[10px] p-8 shadow-2xl border border-[#4CAF50]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#4CAF50]/20 via-transparent to-transparent pointer-events-none" />
              <h3 className="font-heading text-xl font-extrabold !text-white mb-6 border-b border-white/10 pb-4">
                Program Details
              </h3>
              
              <div className="space-y-4 font-sans text-sm">
                {[
                  { label: "AUDIENCE", value: "Youth 11–18" },
                  { label: "LENGTH", value: "8 Core Missions" },
                  { label: "SESSION", value: "60–120 min" },
                  { label: "DELIVERY", value: "In-Person · Virtual · Hybrid" },
                  { label: "FRAMEWORK", value: "STARR™ · SEL · Arts" },
                  { label: "STATUS", value: "Coming Soon" },
                ].map((detail) => (
                  <div key={detail.label} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="font-mono text-xs text-white/50 uppercase tracking-widest font-bold">
                      {detail.label}
                    </span>
                    <span className="text-white font-medium text-right ml-4">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 2. Platform Welcome & About ══ */}
      <section id="about" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50]">
                  <Target size={24} weight="duotone" />
                </div>
                <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#4CAF50]">
                  Program Overview
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold !text-black mb-6">
                From Setbacks to Comebacks
              </h2>
              <p className="font-sans text-lg !text-black font-light leading-relaxed mb-6">
                RIZE UP is Circular Flow’s specialized youth empowerment pathway — designed for justice-involved youth, prevention initiatives, schools, and community organizations. Through creativity, leadership, reflection, responsible technology, and real-world application, participants build resilience, strengthen decision-making, and prepare for success in school, work, relationships, and community.
              </p>
              <p className="font-sans text-base !text-black/80 font-light leading-relaxed">
                It is a trauma-informed, arts-integrated youth leadership and life skills program that empowers participants to recognize their strengths, make responsible decisions, build healthy relationships, and create positive futures. Through interactive discussions, creative projects, reflection, technology, and real-world application, students develop the confidence and skills needed to overcome challenges while becoming positive leaders in their homes, schools, and communities.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[10px] shadow-sm border border-slate-200 p-8 space-y-8">
            <div>
              <h4 className="font-mono text-xs tracking-widest font-extrabold uppercase text-slate-400 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                <Users size={16} /> Designed For
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Schools (Grades 6–12)", "Juvenile Justice Programs", 
                  "Community Organizations", "After-School Programs", 
                  "Youth Development Agencies", "Summer Enrichment Programs"
                ].map(item => (
                  <div key={item} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-[10px] border border-slate-100">
                    <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mt-1.5 shrink-0" />
                    <span className="font-sans text-sm font-medium !text-black/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-widest font-extrabold uppercase text-slate-400 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                <CheckCircle size={16} /> Key Outcomes
              </h4>
              <ul className="space-y-3">
                {[
                  "Strengthen self-awareness and confidence",
                  "Develop leadership and communication skills",
                  "Practice healthy decision-making",
                  "Build resilience and emotional awareness",
                  "Strengthen conflict resolution skills",
                  "Explore responsible technology and AI",
                  "Build positive relationships",
                  "Create a personal leadership portfolio",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm font-medium !text-black">
                    <CheckCircle size={18} className="text-[#4CAF50] shrink-0 mt-0.5" weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 3. At A Glance & Missions ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#4CAF50] block mb-3">
              At A Glance
            </span>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black mb-6">
              Program Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Rows Config */}
            <div className="lg:col-span-4 bg-slate-50 rounded-[10px] p-6 sm:p-8 border border-slate-200">
              <h4 className="font-heading text-xl font-extrabold !text-black mb-6">Quick Facts</h4>
              <div className="space-y-5">
                {ROWS.map(row => (
                  <div key={row.label} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                    <div className="font-mono text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mb-1.5">
                      {row.label}
                    </div>
                    <div className="font-sans text-sm font-medium !text-black">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Missions Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MISSIONS_GLANCE.map(mission => (
                  <div key={mission.num} className="bg-white border border-slate-200 rounded-[10px] p-5 hover:border-[#4CAF50]/50 hover:shadow-sm transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-[10px] bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50] font-mono text-xs font-bold group-hover:bg-[#4CAF50] group-hover:text-white transition-colors">
                        {mission.num}
                      </div>
                      <h4 className="font-heading text-lg font-bold !text-black">{mission.title}</h4>
                    </div>
                    <p className="font-sans text-sm !text-black/70 font-light leading-relaxed mb-0 pl-11">
                      {mission.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 4. Learning Journey ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto relative z-10">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-16 h-16 rounded-[10px] bg-[#4CAF50]/20 text-[#4CAF50] flex items-center justify-center mx-auto mb-6">
              <MapTrifold size={32} weight="duotone" />
            </div>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-white mb-6">
              The Learning Journey
            </h2>
            <p className="font-sans text-lg !text-white/80 font-light leading-relaxed mb-6">
              The RIZE UP curriculum is organized into eight progressive learning missions. Each mission builds upon the previous one, guiding participants through a structured journey of self-discovery, personal growth, leadership development, and future planning. Each mission follows the Circular Flow Learning Cycle™ and integrates the STARR Framework™, Social and Emotional Learning (SEL), and responsible use of technology.
            </p>
            <div className="inline-block px-6 py-3 bg-[#4CAF50]/15 border border-[#4CAF50]/30 rounded-[10px] font-sans font-medium text-[#4CAF50]">
              Discover → Reflect → Create → Apply → Lead — then the cycle begins again.
            </div>
          </div>

          <div className="relative border-l-2 border-[#4CAF50]/30 ml-4 lg:ml-8 pl-8 lg:pl-12 space-y-16">
            {JOURNEY.map((mission, idx) => (
              <div key={idx} className="relative">
                {/* Dot */}
                <div className="absolute -left-[41px] lg:-left-[57px] top-1 w-6 h-6 rounded-full bg-[#163A5F] border-4 border-[#4CAF50] shadow-[0_0_15px_rgba(76,175,80,0.5)]" />
                
                <div className="bg-white/5 border border-white/10 rounded-[10px] p-6 lg:p-8 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <span className="font-mono text-3xl sm:text-4xl font-black !text-white">
                      {mission.num}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold !text-white">
                      {mission.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-mono text-xs font-bold !text-white uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                        Focus Areas
                      </h4>
                      <ul className="space-y-2">
                        {mission.focus.map((f, i) => (
                          <li key={i} className="font-sans text-sm !text-white flex items-start gap-2">
                            <span className="text-[#4CAF50] mt-0.5">•</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-bold !text-white uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                        Key Experiences
                      </h4>
                      <ul className="space-y-2">
                        {mission.experiences.map((exp, i) => (
                          <li key={i} className="font-sans text-sm !text-white flex items-start gap-2">
                            <span className="text-[#4CAF50] mt-0.5">✦</span> {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:border-l md:border-white/10 md:pl-8">
                      <h4 className="font-mono text-xs font-bold !text-white uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                        Outcomes
                      </h4>
                      <p className="font-sans text-sm !text-white leading-relaxed">
                        {mission.outcomes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ 5. Guides Previews ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black">
              Program Guides
            </h2>
          </div>

          {/* Student Guide */}
          <div className="bg-white rounded-[10px] p-8 lg:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50]">
                  <BookOpen size={24} weight="duotone" />
                </div>
                <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#4CAF50]">
                  Section 5 · Student Guide
                </span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold !text-black mb-4">Student Learning Guide Preview</h3>
              <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-6">
                The RIZE UP Student Learning Guide is an interactive workbook designed to engage students through reflection, discussion, creativity, responsible technology, and real-world application. Rather than simply reading information, participants actively explore who they are, strengthen their communication and leadership skills, and develop a personal portfolio that documents their growth throughout the program.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Interactive Learning Experiences', 'Reflection Journals', 'Creative Challenges', 'Goal Setting Activities', 'AI Innovation Activities', 'Discussion Circles', 'Real-World Missions', 'Portfolio Building', 'FLOW CHECK™ Growth Assessments'].map(inc => (
                  <span key={inc} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-[10px] text-xs font-medium border border-slate-200">{inc}</span>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-[10px] border border-dashed border-slate-300">
                <h5 className="font-heading font-bold text-slate-700 mb-2">Mission One Worksheet Preview</h5>
                <p className="font-sans text-sm text-slate-500 mb-4">My Strengths Inventory™, Personal Values Explorer™, Decision Compass™, My Identity Shield™, Reflection Journal™, and FLOW CHECK™ — sample worksheets will appear here.</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#4CAF50]">
                  <DownloadSimple size={18} /> Download Student Guide Preview (Coming Soon)
                </div>
              </div>
            </div>
            <div className="hidden lg:block bg-slate-100 rounded-[10px] h-full min-h-[400px] border border-slate-200/50 flex items-center justify-center text-slate-300">
              <ImageIcon size={64} weight="duotone" />
            </div>
          </div>

          {/* Facilitator Guide */}
          <div className="bg-white rounded-[10px] p-8 lg:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block bg-slate-100 rounded-[10px] h-full min-h-[400px] border border-slate-200/50 flex items-center justify-center text-slate-300 lg:order-1">
              <ImageIcon size={64} weight="duotone" />
            </div>
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50]">
                  <GraduationCap size={24} weight="duotone" />
                </div>
                <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#4CAF50]">
                  Section 6 · Facilitator Guide
                </span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold !text-black mb-4">Facilitator Guide Preview</h3>
              <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-6">
                The RIZE UP Facilitator Guide provides educators, counselors, youth workers, probation officers, mentors, and community leaders with structured lesson plans and practical strategies for delivering engaging learning experiences. The guide emphasizes creating safe, supportive learning environments where participants can explore ideas, express themselves creatively, and build meaningful relationships.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Program Overview', 'Mission Objectives', 'Lesson Plans', 'Materials Lists', 'Icebreakers', 'Discussion Questions', 'Reflection Activities', 'Creative Challenges', 'Assessment Strategies', 'Virtual Adaptations', 'Extension Activities'].map(inc => (
                  <span key={inc} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-[10px] text-xs font-medium border border-slate-200">{inc}</span>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-[10px] border border-dashed border-slate-300">
                <h5 className="font-heading font-bold text-slate-700 mb-2">Sample Lesson — Mission One</h5>
                <p className="font-sans text-sm text-slate-500 mb-4">Objectives, the “Three Words” icebreaker, sample discussion questions, and a sample assessment will appear here.</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#4CAF50]">
                  <DownloadSimple size={18} /> Download Facilitator Guide Preview (Coming Soon)
                </div>
              </div>
            </div>
          </div>

          {/* Parent Guide */}
          <div className="bg-white rounded-[10px] p-8 lg:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50]">
                  <Handshake size={24} weight="duotone" />
                </div>
                <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#4CAF50]">
                  Section 7 · Parent Guide
                </span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold !text-black mb-4">Parent Guide Preview</h3>
              <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-6">
                The RIZE UP Parent Guide helps families reinforce the skills students are learning while creating opportunities for meaningful conversations and shared experiences at home. Parents and caregivers receive practical activities designed to strengthen communication, encourage positive decision-making, and celebrate student growth.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Welcome', 'Family Conversation Starters', 'Home Activities', 'Reflection Questions', 'Technology Tips', 'Goal Setting', 'Family Challenges', 'Community Connections'].map(inc => (
                  <span key={inc} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-[10px] text-xs font-medium border border-slate-200">{inc}</span>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-[10px] border border-dashed border-slate-300">
                <h5 className="font-heading font-bold text-slate-700 mb-2">Sample Family Conversation &amp; Challenge</h5>
                <p className="font-sans text-sm text-slate-500 mb-4">Sample conversation prompts, a weekly family value challenge, and a technology discussion tip will appear here.</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#4CAF50]">
                  <DownloadSimple size={18} /> Download Parent Guide Preview (Coming Soon)
                </div>
              </div>
            </div>
            <div className="hidden lg:block bg-slate-100 rounded-[10px] h-full min-h-[400px] border border-slate-200/50 flex items-center justify-center text-slate-300">
              <ImageIcon size={64} weight="duotone" />
            </div>
          </div>

        </div>
      </section>

      {/* ══ 6. Resource Library ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#4CAF50] block mb-3">
              Downloads & Materials
            </span>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-white mb-6">
              Resource Library
            </h2>
            <p className="font-sans text-lg !text-white/80 font-light leading-relaxed">
              The RIZE UP Resource Library provides students, facilitators, and families with engaging worksheets, planning tools, reflection journals, and creative activities that extend learning beyond each session. Resources are designed to reinforce key concepts while encouraging personal growth, creativity, and real-world application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Student Resources', 
                icon: BookBookmark,
                available: ['My Strengths Inventory™', 'Personal Values Explorer™', 'Decision Compass™', 'My Identity Shield™', 'Mission Reflection Journal™', 'FLOW CHECK™ Growth Assessment'], 
                coming: ['Goal Setting Planner™', 'Leadership Journal™', 'Vision Board Worksheet™', 'Conflict Resolution Planner™', 'Emotional Wellness Tracker™', 'Career Exploration Workbook™'] 
              },
              { 
                title: 'Facilitator Resources', 
                icon: Wrench,
                available: ['Lesson Planning Templates', 'Icebreaker Activity Guide', 'Discussion Question Bank', 'Observation & Assessment Forms', 'Classroom Activities', 'Virtual Facilitation Guide'],
                coming: []
              },
              { 
                title: 'Parent Resources', 
                icon: Users,
                available: ['Family Conversation Guides', 'Weekly Home Challenges', 'Reflection Activities', 'Technology Conversation Starters', 'Community Resource Guide'],
                coming: []
              },
            ].map((group, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[10px] p-8 flex flex-col hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-[10px] bg-[#4CAF50]/20 flex items-center justify-center text-[#4CAF50]">
                    <group.icon size={24} weight="duotone" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold !text-white">{group.title}</h4>
                </div>
                
                <div className="space-y-6 flex-1">
                  <div>
                    <h5 className="font-mono text-xs font-bold text-[#18A0A8] uppercase tracking-widest mb-3 border-b border-white/10 pb-2">Available Resources</h5>
                    <ul className="space-y-2">
                      {group.available.map((item, i) => (
                        <li key={i} className="font-sans text-sm text-white/90 flex items-start gap-2">
                          <CheckCircle size={16} className="text-[#4CAF50] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {group.coming && group.coming.length > 0 && (
                    <div>
                      <h5 className="font-mono text-xs font-bold text-[#18A0A8] uppercase tracking-widest mb-3 border-b border-white/10 pb-2 pt-4">Coming Soon</h5>
                      <ul className="space-y-2">
                        {group.coming.map((item, i) => (
                          <li key={i} className="font-sans text-sm text-white/50 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. Assessment & Certificates ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Assessment Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-[10px] p-8 lg:p-12 shadow-sm">
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">Growth & Assessment</h2>
            <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-8">
              RIZE UP focuses on growth, reflection, and personal development rather than traditional testing. Assessments encourage students to recognize their progress while providing facilitators with meaningful information to guide instruction.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Core Domains</h4>
                <div className="flex flex-wrap gap-2">
                  {['Self-Awareness', 'Confidence', 'Communication', 'Decision-Making', 'Leadership', 'Emotional Awareness', 'Problem Solving', 'Responsible Technology Use'].map(tag => (
                    <span key={tag} className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-[10px]">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Assessment Methods</h4>
                  <ul className="space-y-2">
                    {['FLOW CHECK™ Growth Reflection', 'Student Journaling', 'Portfolio Review', 'Goal Progress Monitoring', 'Facilitator Observation', 'Creative Project Evaluation', 'Group Participation', 'Self-Assessment'].map((item, i) => (
                      <li key={i} className="font-sans text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-[#4CAF50] mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Evidence of Growth</h4>
                  <ul className="space-y-2">
                    {['Reflection', 'Creative projects', 'Discussion', 'Real-world application', 'Portfolio artifacts', 'Personal action plans'].map((item, i) => (
                      <li key={i} className="font-sans text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-[#4CAF50] mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="bg-white border border-slate-200 rounded-[10px] p-8 lg:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#D4A017]/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="w-16 h-16 rounded-[10px] bg-[#D4A017]/10 text-[#D4A017] flex items-center justify-center mb-6">
              <Certificate size={32} weight="duotone" />
            </div>
            
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">Recognition & Certificates</h2>
            <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-8 relative z-10">
              Recognition plays an important role in building confidence and encouraging lifelong learning. Throughout the program, students celebrate milestones while documenting their growth.
            </p>
            
            <div className="space-y-8 relative z-10">
              <div>
                <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">Program Certificates</h4>
                <ul className="space-y-3">
                  {['Mission Completion Certificate', 'RIZE UP Program Completion Certificate', 'Leadership Recognition Certificate', 'Community Service Recognition', 'Creative Excellence Award', 'Outstanding Growth Award'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm font-medium !text-black bg-slate-50 p-2.5 rounded-[10px]">
                      <Certificate size={18} className="text-[#D4A017] shrink-0 mt-0.5" weight="fill" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">Digital Badges & Milestones</h4>
                <div className="flex flex-wrap gap-2">
                  {['STARR Badges™', 'Digital Certificates', 'Portfolio Milestones', 'Learning Achievement Badges'].map(badge => (
                    <span key={badge} className="bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#D4A017] text-xs font-bold px-3 py-1.5 rounded-[10px] flex items-center gap-1.5">
                      <Sparkle size={14} weight="fill" /> {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 8. Self-Paced Learning ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#18A0A8]/10 flex items-center justify-center text-[#18A0A8]">
                <Desktop size={24} weight="duotone" />
              </div>
              <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8]">
                Digital Evolution
              </span>
            </div>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black mb-6">
              Self-Paced Learning Academy
            </h2>
            <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-8">
              The RIZE UP Self-Paced Learning Experience will allow participants to explore the curriculum at their own pace while maintaining the same engaging learning philosophy found in our instructor-led programs.
            </p>
            
            <div className="bg-white rounded-[10px] p-6 shadow-sm border border-slate-200 mb-8">
              <h4 className="font-heading text-lg font-bold !text-black mb-4">Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Short instructional videos', 'Interactive lessons', 'Digital reflection journals', 'AI-supported learning activities', 'Downloadable worksheets', 'Mission quizzes', 'Progress tracking', 'Digital portfolios', 'STARR Badges™', 'Certificates of completion'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 font-sans text-sm font-medium !text-black/80">
                    <CheckCircle size={16} className="text-[#18A0A8] shrink-0 mt-0.5" weight="fill" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-[#163A5F] rounded-[10px] p-8 lg:p-12 shadow-xl border border-slate-200 relative overflow-hidden">
            <h3 className="font-heading text-2xl font-extrabold !text-white mb-8 border-b border-white/10 pb-4">
              The Digital Journey
            </h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-3 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#18A0A8]/50 before:to-transparent">
              {['Mission Introduction', 'Watch the Lesson', 'Complete Learning Activities', 'Reflect in Your Journal', 'Complete FLOW CHECK™', 'Earn Your Badge', 'Unlock the Next Mission'].map((step, i) => (
                <div key={i} className="relative flex items-center md:justify-between md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#163A5F] bg-[#18A0A8] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-0 md:ml-0 absolute md:relative left-0 md:left-1/2 -translate-x-1/2" />
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] p-4 bg-white/10 rounded-[10px] border border-white/5 backdrop-blur-sm ml-10 md:ml-0">
                    <h5 className="font-heading font-bold text-white text-sm">{step}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. Gallery & Research ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Gallery Highlights */}
          <div>
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">Program Highlights</h2>
            <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-8">
              The RIZE UP Gallery highlights student creativity, collaboration, leadership, and growth through photos, videos, artwork, and community projects.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Workshop Photos', 'Student Artwork', 'Foil to Film Projects', 'Creative Writing', 'Team Activities', 'Community Service Projects', 'Video Highlights', 'Testimonials'].map(tag => (
                <span key={tag} className="bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-[10px] flex items-center gap-2">
                  <ImageIcon size={16} className="text-slate-400" /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Research Foundation */}
          <div className="bg-[#F8FAFC] p-8 rounded-[10px] border border-slate-200 shadow-sm">
            <h2 className="font-heading text-2xl font-extrabold !text-black mb-4">Research Foundation</h2>
            <p className="font-sans text-base !text-black/80 font-light leading-relaxed mb-6">
              The RIZE UP curriculum integrates evidence-informed educational approaches that support the academic, social, emotional, and creative development of young people.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Social and Emotional Learning (SEL)', 'Positive Youth Development', 'Project-Based Learning', 'Experiential Learning', 'Arts Integration', 'Responsible AI & Digital Citizenship', 'Reflective Practice', 'Leadership Development'].map(f => (
                <span key={f} className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-white border border-slate-200 px-2 py-1 rounded-[10px]">{f}</span>
              ))}
            </div>
            <div className="bg-white p-6 rounded-[10px] border-l-4 border-[#4CAF50] shadow-sm">
              <h5 className="font-heading font-bold !text-black mb-2">The STARR Framework™</h5>
              <p className="font-sans text-sm text-slate-600 leading-relaxed mb-0">
                <strong className="text-[#4CAF50]">Science · Technology · Arts · Responsibility · Resilience</strong> — the STARR Framework serves as the instructional foundation for all Circular Flow Learning Platform programs, encouraging learners to think critically, create confidently, act responsibly, and develop resilience through meaningful learning experiences.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 10. Book Program CTA ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white text-center border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#4CAF50]/20 via-transparent to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#4CAF50]/20 border border-[#4CAF50]/40 text-[#4CAF50] mb-6">
            <span className="font-mono text-xs tracking-widest font-extrabold uppercase">
              BRING RIZE UP TO YOUR COMMUNITY
            </span>
          </div>
          
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold !text-white mb-6">
            Ready to <span className="heading-italic text-[#4CAF50] font-normal">Connect?</span>
          </h2>
          
          <p className="font-sans text-xl !text-white/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            RIZE UP is available for schools, community organizations, juvenile justice programs, youth-serving agencies, and professional development events.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['In-Person Workshops', 'Multi-Week Programs', 'School Partnerships', 'Juvenile Justice Programs', 'Community Organizations', 'Professional Development', 'Conferences & Special Events', 'Self-Paced Learning (Coming Soon)'].map(format => (
              <span key={format} className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-[10px] font-sans text-xs font-medium text-white/90">
                {format}
              </span>
            ))}
          </div>

          <Link href="/Contact" className="no-underline">
            <Button variant="primary">Explore Partnership Opportunities</Button>
          </Link>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/50 text-sm font-medium">
            {['Schedule a Consultation', 'Request Program Information', 'Book a Workshop', 'Learn About the Platform'].map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/20" />}
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RIZE UP Commercial ══ */}
      <section className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12 bg-white border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#4CAF50]">Program Spotlight</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              See RIZE UP{" "}
              <span className="heading-italic font-normal text-[#4CAF50]">In Action</span>
            </h2>
          </div>
          <div className="max-w-3xl">
            <YTEmbed videoId="8nmP0Kv5xiw" title="RIZE UP Program Commercial" />
          </div>
        </div>
      </section>

    </main>
  );
}
