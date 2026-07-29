"use client";

import React, { useState } from "react";
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
  MapTrifold,
  PaintBrush,
  Palette,
  Camera,
  VideoCamera,
  MusicNotes,
  MaskHappy,
  ShirtFolded,
  Lightbulb,
  Briefcase,
  FilmStrip
} from "@phosphor-icons/react";

const ACCENT = "#18A0A8";

const STUDIOS = [
  { name: "Creative Writing Studio", purpose: "Develop storytelling, poetry, songwriting, scriptwriting, and self-expression.", icon: PaintBrush },
  { name: "Graphic Design Studio", purpose: "Create logos, branding, posters, apparel graphics, and digital media.", icon: Palette },
  { name: "Photography Studio", purpose: "Learn composition, lighting, storytelling, editing, and portfolio development.", icon: Camera },
  { name: "Videography Studio", purpose: "Plan, film, edit, and produce videos that communicate positive messages.", icon: VideoCamera },
  { name: "Audio Production Studio", purpose: "Record, mix, compose, and produce original music using modern digital tools.", icon: MusicNotes },
  { name: "Drama Studio", purpose: "Build confidence through acting, improvisation, scripts, and performance.", icon: MaskHappy },
  { name: "Fashion Studio", purpose: "Explore fashion design, styling, sustainability, and personal branding.", icon: ShirtFolded },
  { name: "Product Design Studio", purpose: "Turn ideas into products through sketching, prototyping, and design thinking.", icon: Lightbulb },
  { name: "Leadership Studio", purpose: "Develop communication, teamwork, service, and ethical leadership.", icon: Users },
  { name: "Entrepreneurship Studio", purpose: "Learn business planning, marketing, budgeting, and creative enterprise.", icon: Briefcase },
  { name: "Foil to Film™ Innovation Studio", purpose: "Transform physical creations into digital stories using filmmaking and AI.", icon: FilmStrip },
];

const ROWS = [
  { label: "RECOMMENDED AGES", value: "Middle & high school (adaptable for youth and young adults)" },
  { label: "LENGTH", value: "8 Core Missions (flexible delivery)" },
  { label: "SESSION LENGTH", value: "60–120 minutes" },
  { label: "DELIVERY OPTIONS", value: "In-Person, Virtual, Hybrid, Self-Paced (Coming Soon)" },
  { label: "FORMAT", value: "Creative Studios + Missions + Portfolio" },
  { label: "EDUCATIONAL APPROACH", value: "STARR Framework™, SEL, Arts Integration, Project-Based Learning, Responsible AI" },
];

const MISSIONS_GLANCE = [
  { num: "01", title: "Discover Your Potential", sub: "Self-awareness, strengths, and creative identity." },
  { num: "02", title: "Creative Communication", sub: "Expressing ideas through writing, speech, and media." },
  { num: "03", title: "Creative Arts Exploration", sub: "Hands-on experiences across multiple creative studios." },
  { num: "04", title: "Technology & Innovation", sub: "Responsible technology, AI, and digital creation." },
  { num: "05", title: "Leadership & Teamwork", sub: "Collaboration, communication, and ethical leadership." },
  { num: "06", title: "Community Impact", sub: "Using creativity to serve and strengthen community." },
  { num: "07", title: "Career Exploration", sub: "Connecting creative skills to real careers and pathways." },
  { num: "08", title: "My Creative Future", sub: "Portfolios, goals, and a personal creative action plan." },
];

const JOURNEY = [
  { 
    num: "01", title: "Discover Your Potential", 
    focus: ["Self-awareness", "Strengths", "Creative identity"], 
    experiences: ["My Strengths Inventory™", "Creative Interest Survey™", "Dream Builder™"], 
    outcomes: "Students discover their strengths and creative interests." 
  },
  { 
    num: "02", title: "Creative Communication", 
    focus: ["Expression", "Writing", "Speaking"], 
    experiences: ["Creative Writing", "Personal Vision Board™", "Speaking with Purpose"], 
    outcomes: "Students express ideas clearly across multiple mediums." 
  },
  { 
    num: "03", title: "Creative Arts Exploration", 
    focus: ["Multi-studio exploration", "Hands-on creation"], 
    experiences: ["Graphic Design", "Photography", "Videography", "Music Production", "Dance"], 
    outcomes: "Students sample multiple creative studios and find their voice." 
  },
  { 
    num: "04", title: "Technology & Innovation", 
    focus: ["Responsible tech", "AI", "Digital creation"], 
    experiences: ["Foil to Film™", "AI Storytelling", "Digital Media"], 
    outcomes: "Students use technology responsibly to create and communicate." 
  },
  { 
    num: "05", title: "Leadership & Teamwork", 
    focus: ["Collaboration", "Communication", "Ethical leadership"], 
    experiences: ["Leadership Reflection™", "Team Builder", "Group Projects"], 
    outcomes: "Students lead and collaborate effectively." 
  },
  { 
    num: "06", title: "Community Impact", 
    focus: ["Service", "Community", "Real-world projects"], 
    experiences: ["Community Service Planner™", "Service Project", "Showcase"], 
    outcomes: "Students apply creativity to real community needs." 
  },
  { 
    num: "07", title: "Career Exploration", 
    focus: ["Careers", "Entrepreneurship", "Pathways"], 
    experiences: ["Career Exploration Journal™", "Guest Speakers", "Portfolio"], 
    outcomes: "Students connect creative skills to careers and entrepreneurship." 
  },
  { 
    num: "08", title: "My Creative Future", 
    focus: ["Portfolio", "Goals", "Action plan"], 
    experiences: ["Portfolio Tracker™", "Goal Planner", "Future Action Plan"], 
    outcomes: "Students build a portfolio and a personal creative action plan." 
  },
];

export default function ProgramLEAD() {
  return (
    <main className="bg-white min-h-screen font-sans text-black relative overflow-hidden">
      {/* Ambient background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#18A0A8]/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#163A5F]/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* ══ 1. Hero Section ══ */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#18A0A8]/10 border border-[#18A0A8]/30 text-[#18A0A8]">
              <Sparkle size={18} weight="fill" className="animate-pulse" />
              <span className="font-mono text-xs tracking-widest font-extrabold uppercase">
                CREATIVE YOUTH DEVELOPMENT ACADEMY
              </span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold !text-black tracking-tight leading-[1.1]">
              LEAD <span className="heading-italic font-normal" style={{ color: ACCENT }}>ACADEMY</span>
            </h1>
            
            <p className="font-sans text-xl sm:text-2xl !text-black/80 font-bold leading-relaxed max-w-2xl tracking-wide uppercase">
              Learn • Explore • Achieve • Develop
            </p>
            
            <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed max-w-2xl pt-2">
              LEAD is the flagship creative youth development academy of the Circular Flow Learning Platform — integrating creative arts, leadership, entrepreneurship, communication, technology, career exploration, and community engagement.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link href="#studios" className="no-underline">
                <Button variant="primary">Explore Creative Studios</Button>
              </Link>
              <Link href="/Contact" className="no-underline">
                <Button variant="secondary">Book LEAD Academy</Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#163A5F] rounded-[10px] p-8 shadow-2xl border border-[#18A0A8]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#18A0A8]/20 via-transparent to-transparent pointer-events-none" />
              <h3 className="font-heading text-xl font-extrabold text-white mb-6 border-b border-white/10 pb-4">
                Program Details
              </h3>
              
              <div className="space-y-4 font-sans text-sm">
                {[
                  { label: "AUDIENCE", value: "Youth & School Groups" },
                  { label: "AGES", value: "Middle & High School" },
                  { label: "LENGTH", value: "8 Core Missions" },
                  { label: "DELIVERY", value: "In-Person · Virtual · Hybrid" },
                  { label: "STUDIOS", value: "11 Creative Studios" },
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
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-[#18A0A8]/10 flex items-center justify-center text-[#18A0A8]">
                  <Compass size={24} weight="duotone" />
                </div>
                <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8]">
                  Academy Overview
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold !text-black mb-6">
                Learn • Explore • Achieve • Develop
              </h2>
              <p className="font-sans text-lg !text-black font-light leading-relaxed mb-6">
                LEAD is the creative arts, leadership, and career exploration pathway of the Circular Flow Learning Platform — built on the STARR Framework™. LEAD develops creators: students discover talents, develop skills, build portfolios, practice leadership, explore careers, and serve their communities.
              </p>
              <p className="font-sans text-base !text-black/80 font-light leading-relaxed">
                LEAD empowers youth through creativity, leadership, technology, communication, and real-world project-based learning. Students choose Creative Studios, build a portfolio, earn recognition, and apply their learning through projects and community engagement.
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
                  "Middle & high school students", "School groups & classrooms", 
                  "Community youth organizations", "After-school programs", 
                  "Summer enrichment programs", "Young people exploring creative & career pathways"
                ].map(item => (
                  <div key={item} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-[10px] border border-slate-100">
                    <span className="w-1.5 h-1.5 bg-[#18A0A8] rounded-full mt-1.5 shrink-0" />
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
                  "Discover personal strengths and creative interests",
                  "Develop skills across multiple creative studios",
                  "Build a digital creative portfolio",
                  "Practice leadership, teamwork, and communication",
                  "Connect creativity to careers and entrepreneurship",
                  "Apply learning through community impact projects",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm font-medium !text-black">
                    <CheckCircle size={18} className="text-[#18A0A8] shrink-0 mt-0.5" weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 3. Creative Studios Showcase ══ */}
      <section id="studios" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8] block mb-3">
              Specialized Pathways
            </span>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black mb-6">
              11 Creative Studios
            </h2>
            <p className="font-sans text-lg !text-black font-light leading-relaxed">
              The LEAD Academy is organized into Creative Studios — each a focused pathway with its own overview, sample project, learning outcomes, career connections, and downloadable sample resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDIOS.map((studio, idx) => {
              const IconComp = studio.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#F8FAFC] border border-slate-200 rounded-[10px] p-6 hover:border-[#18A0A8]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[10px] bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-[#18A0A8] mb-5 group-hover:scale-105 transition-transform">
                      <IconComp size={26} weight="duotone" />
                    </div>
                    <h4 className="font-heading text-xl font-bold !text-black mb-3">
                      {studio.name}
                    </h4>
                    <p className="font-sans text-sm !text-black/70 font-light leading-relaxed mb-6">
                      {studio.purpose}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-mono text-xs text-[#18A0A8] font-bold">
                    <span>STUDIO PATHWAY #{String(idx + 1).padStart(2, '0')}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 4. At A Glance & Missions ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8] block mb-3">
              At A Glance
            </span>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black mb-6">
              Academy Structure
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Rows Config */}
            <div className="lg:col-span-4 bg-white rounded-[10px] p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h4 className="font-heading text-xl font-extrabold !text-black mb-6">Quick Facts</h4>
              <div className="space-y-5">
                {ROWS.map(row => (
                  <div key={row.label} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
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
                  <div key={mission.num} className="bg-white border border-slate-200 rounded-[10px] p-5 hover:border-[#18A0A8]/50 hover:shadow-xs transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-[10px] bg-[#18A0A8]/10 flex items-center justify-center text-[#18A0A8] font-mono text-xs font-bold group-hover:bg-[#18A0A8] group-hover:text-white transition-colors">
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

      {/* ══ 5. Learning Journey ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto relative z-10">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-16 h-16 rounded-[10px] bg-[#18A0A8]/20 text-[#18A0A8] flex items-center justify-center mx-auto mb-6">
              <MapTrifold size={32} weight="duotone" />
            </div>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-white mb-6">
              The Learning Journey
            </h2>
            <p className="font-sans text-lg !text-white/80 font-light leading-relaxed mb-6">
              The LEAD curriculum is organized into eight progressive missions. Each mission builds upon the previous one, guiding students through a structured journey of self-discovery, creative exploration, leadership, and career readiness. Each mission integrates the STARR Framework™, Social and Emotional Learning (SEL), and responsible use of technology.
            </p>
            <div className="inline-block px-6 py-3 bg-[#18A0A8]/15 border border-[#18A0A8]/30 rounded-[10px] font-sans font-medium text-[#18A0A8]">
              Discover → Explore → Create → Collaborate → Lead → Apply → Reflect → Achieve
            </div>
          </div>

          <div className="relative border-l-2 border-[#18A0A8]/30 ml-4 lg:ml-8 pl-8 lg:pl-12 space-y-16">
            {JOURNEY.map((mission, idx) => (
              <div key={idx} className="relative">
                {/* Dot */}
                <div className="absolute -left-[41px] lg:-left-[57px] top-1 w-6 h-6 rounded-full bg-[#163A5F] border-4 border-[#18A0A8] shadow-[0_0_15px_rgba(24,160,168,0.5)]" />
                
                <div className="bg-white/5 border border-white/10 rounded-[10px] p-6 lg:p-8 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-white/20">
                      {mission.num}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#18A0A8]">
                      {mission.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                        Focus Areas
                      </h4>
                      <ul className="space-y-2">
                        {mission.focus.map((f, i) => (
                          <li key={i} className="font-sans text-sm text-white/80 flex items-start gap-2">
                            <span className="text-[#18A0A8] mt-0.5">•</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                        Key Experiences
                      </h4>
                      <ul className="space-y-2">
                        {mission.experiences.map((exp, i) => (
                          <li key={i} className="font-sans text-sm text-white/80 flex items-start gap-2">
                            <span className="text-[#18A0A8] mt-0.5">✦</span> {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:border-l md:border-white/10 md:pl-8">
                      <h4 className="font-mono text-xs font-bold text-[#18A0A8] uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                        Outcomes
                      </h4>
                      <p className="font-sans text-sm text-white leading-relaxed">
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

      {/* ══ 6. Guides Previews ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black">
              Program Guides
            </h2>
          </div>

          {/* Student Guide */}
          <div className="bg-[#F8FAFC] rounded-[10px] p-8 lg:p-12 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-[#18A0A8]/10 flex items-center justify-center text-[#18A0A8]">
                  <BookOpen size={24} weight="duotone" />
                </div>
                <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8]">
                  Section 5 · Student Guide
                </span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold !text-black mb-4">Student Guide Preview</h3>
              <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-6">
                LEAD is designed as a personalized creative journey. Students choose one or more Creative Studios, build a portfolio, earn recognition, and apply their learning through projects and community engagement.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Welcome to LEAD', 'Creative Pathway Selection', 'My Creative Portfolio', 'Studio Challenges', 'Leadership in Action', 'Career Connections', 'Recognition', 'Reflection'].map(inc => (
                  <span key={inc} className="bg-white text-slate-600 px-3 py-1 rounded-[10px] text-xs font-medium border border-slate-200">{inc}</span>
                ))}
              </div>

              <div className="bg-white p-6 rounded-[10px] border border-dashed border-slate-300">
                <h5 className="font-heading font-bold text-slate-700 mb-2">Student Guide &amp; Mission Activities Preview</h5>
                <p className="font-sans text-sm text-slate-500 mb-4">My Strengths Inventory™, Creative Interest Survey™, Dream Builder™, Personal Vision Board™, Reflection Journal™, and FLOW CHECK™ — sample worksheets will appear here.</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#18A0A8]">
                  <DownloadSimple size={18} /> Download Student Guide Preview (Coming Soon)
                </div>
              </div>
            </div>
            <div className="hidden lg:block bg-slate-200/60 rounded-[10px] h-full min-h-[400px] border border-slate-300/50 flex items-center justify-center text-slate-400">
              <ImageIcon size={64} weight="duotone" />
            </div>
          </div>

          {/* Facilitator Guide */}
          <div className="bg-[#F8FAFC] rounded-[10px] p-8 lg:p-12 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block bg-slate-200/60 rounded-[10px] h-full min-h-[400px] border border-slate-300/50 flex items-center justify-center text-slate-400 lg:order-1">
              <ImageIcon size={64} weight="duotone" />
            </div>
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-[#18A0A8]/10 flex items-center justify-center text-[#18A0A8]">
                  <GraduationCap size={24} weight="duotone" />
                </div>
                <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8]">
                  Section 6 · Facilitator Guide
                </span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold !text-black mb-4">Facilitator Guide Preview</h3>
              <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-6">
                The LEAD Facilitator Experience provides a consistent instructional framework while allowing each Creative Studio to retain its own teaching style. Facilitators serve as instructors, mentors, and creative coaches.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Lesson objectives', 'Materials', 'Timelines', 'Discussion prompts', 'Assessments', 'Virtual adaptations', 'Extension activities', 'Studio teaching framework', 'Professional development'].map(inc => (
                  <span key={inc} className="bg-white text-slate-600 px-3 py-1 rounded-[10px] text-xs font-medium border border-slate-200">{inc}</span>
                ))}
              </div>

              <div className="bg-white p-6 rounded-[10px] border border-dashed border-slate-300">
                <h5 className="font-heading font-bold text-slate-700 mb-2">Sample Lesson Plan &amp; Facilitator Checklist</h5>
                <p className="font-sans text-sm text-slate-500 mb-4">A sample lesson plan, studio session format, and downloadable facilitator checklist will appear here.</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#18A0A8]">
                  <DownloadSimple size={18} /> Download Facilitator Guide Preview (Coming Soon)
                </div>
              </div>
            </div>
          </div>

          {/* Parent Guide */}
          <div className="bg-[#F8FAFC] rounded-[10px] p-8 lg:p-12 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-[#18A0A8]/10 flex items-center justify-center text-[#18A0A8]">
                  <Handshake size={24} weight="duotone" />
                </div>
                <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8]">
                  Section 7 · Parent Guide
                </span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold !text-black mb-4">Parent &amp; Community Guide Preview</h3>
              <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-6">
                LEAD recognizes families and community partners as essential members of every student's creative journey. Parents, caregivers, schools, artists, and businesses help reinforce learning beyond the classroom.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Family creative projects', 'Conversation starters', 'Museum & photography challenges', 'Technology discussions', 'Career exploration conversations', 'Weekly reflections', 'Community showcases', 'Volunteer & partnership opportunities'].map(inc => (
                  <span key={inc} className="bg-white text-slate-600 px-3 py-1 rounded-[10px] text-xs font-medium border border-slate-200">{inc}</span>
                ))}
              </div>

              <div className="bg-white p-6 rounded-[10px] border border-dashed border-slate-300">
                <h5 className="font-heading font-bold text-slate-700 mb-2">Parent Guide &amp; Family Challenge Preview</h5>
                <p className="font-sans text-sm text-slate-500 mb-4">A parent guide preview, Creative Conversation Starters™, and a Family Creative Challenge™ will appear here.</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#18A0A8]">
                  <DownloadSimple size={18} /> Download Parent Guide Preview (Coming Soon)
                </div>
              </div>
            </div>
            <div className="hidden lg:block bg-slate-200/60 rounded-[10px] h-full min-h-[400px] border border-slate-300/50 flex items-center justify-center text-slate-400">
              <ImageIcon size={64} weight="duotone" />
            </div>
          </div>

        </div>
      </section>

      {/* ══ 7. Resource Library ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8] block mb-3">
              Studio Tools &amp; Materials
            </span>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-white mb-6">
              LEAD Resource Library
            </h2>
            <p className="font-sans text-lg !text-white/80 font-light leading-relaxed">
              The LEAD Creative Resource Library provides downloadable tools that support every Creative Studio. The website displays sample resources while the complete library remains available through the LEAD Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Creative Foundation', 
                icon: BookBookmark,
                available: ['Creative Interest Inventory™', 'My Strengths Inventory™', 'Creative Goal Planner™', 'Creative Reflection Journal™', 'Portfolio Tracker™'] 
              },
              { 
                title: 'Creative Writing Studio', 
                icon: PaintBrush,
                available: ['Story Planner™', 'Character Builder™', 'Poetry Template™', 'Script Outline™', 'Writing Rubric™'] 
              },
              { 
                title: 'Graphic Design Studio', 
                icon: Palette,
                available: ['Design Brief™', 'Logo Sketch Sheet™', 'Color & Typography Guide™', 'Project Critique™'] 
              },
              { 
                title: 'Photography & Videography', 
                icon: Camera,
                available: ['Photo Scavenger Hunt™', 'Shot List™', 'Storyboard Planner™', 'Editing Checklist™'] 
              },
              { 
                title: 'Audio & Performance', 
                icon: MusicNotes,
                available: ['Songwriting Planner™', 'Podcast Planner™', 'Performance Reflection™', 'Beat Planning Sheet™'] 
              },
              { 
                title: 'Innovation Studio', 
                icon: Lightbulb,
                available: ['Product Design Sketchbook™', 'Prototype Planner™', 'Foil to Film™ Production Sheet', 'Innovation Journal™'] 
              },
              { 
                title: 'Leadership & Entrepreneurship', 
                icon: Briefcase,
                available: ['Leadership Action Plan™', 'Community Service Planner™', 'Business Idea Canvas™', 'Presentation Rubric™'] 
              },
            ].map((group, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[10px] p-6 flex flex-col hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-[10px] bg-[#18A0A8]/20 flex items-center justify-center text-[#18A0A8]">
                    <group.icon size={22} weight="duotone" />
                  </div>
                  <h4 className="font-heading text-xl font-bold !text-white">{group.title}</h4>
                </div>
                
                <div className="space-y-2 flex-1">
                  {group.available.map((item, i) => (
                    <div key={i} className="font-sans text-sm text-white/90 flex items-start gap-2 bg-white/5 p-2 rounded-[10px]">
                      <CheckCircle size={16} className="text-[#18A0A8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. Assessment & Certificates ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Assessment Section */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-[10px] p-8 lg:p-12 shadow-xs">
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">Growth &amp; Assessment</h2>
            <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-8">
              LEAD assessment focuses on growth, creativity, and real-world application rather than traditional testing. Students demonstrate learning through portfolios, projects, presentations, and reflection.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Core Domains</h4>
                <div className="flex flex-wrap gap-2">
                  {['Creativity', 'Technical skill', 'Communication', 'Collaboration', 'Leadership', 'Problem solving', 'Career readiness', 'Reflection'].map(tag => (
                    <span key={tag} className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-[10px]">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Assessment Methods</h4>
                  <ul className="space-y-2">
                    {['Portfolio reviews', 'Project rubrics', 'Presentations', 'Peer feedback', 'FLOW CHECK™', 'Facilitator observations', 'Student self-reflections'].map((item, i) => (
                      <li key={i} className="font-sans text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-[#18A0A8] mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Evidence of Growth</h4>
                  <ul className="space-y-2">
                    {['Portfolios', 'Creative projects', 'Presentations', 'Studio challenges', 'Reflection journals', 'Community projects'].map((item, i) => (
                      <li key={i} className="font-sans text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-[#18A0A8] mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="bg-white border border-slate-200 rounded-[10px] p-8 lg:p-12 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#18A0A8]/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="w-16 h-16 rounded-[10px] bg-[#18A0A8]/10 text-[#18A0A8] flex items-center justify-center mb-6">
              <Certificate size={32} weight="duotone" />
            </div>
            
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">Recognition &amp; Certificates</h2>
            <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-8 relative z-10">
              Recognition builds confidence and celebrates creative growth. Students earn badges and certificates as they complete missions and studios.
            </p>
            
            <div className="space-y-8 relative z-10">
              <div>
                <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">Program Certificates</h4>
                <ul className="space-y-3">
                  {['Mission Completion', 'LEAD Completion', 'Creative Excellence Award', 'Leadership Award', 'Innovation Award'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm font-medium !text-black bg-[#F8FAFC] p-2.5 rounded-[10px]">
                      <Certificate size={18} className="text-[#18A0A8] shrink-0 mt-0.5" weight="fill" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">Digital Badges &amp; Milestones</h4>
                <div className="flex flex-wrap gap-2">
                  {['Digital badges', 'Studio certificates', 'LEAD Academy certificates', 'Showcase opportunities'].map(badge => (
                    <span key={badge} className="bg-[#18A0A8]/10 border border-[#18A0A8]/20 text-[#18A0A8] text-xs font-bold px-3 py-1.5 rounded-[10px] flex items-center gap-1.5">
                      <Sparkle size={14} weight="fill" /> {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 9. Self-Paced Learning ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#18A0A8]/10 flex items-center justify-center text-[#18A0A8]">
                <Desktop size={24} weight="duotone" />
              </div>
              <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8]">
                Self-Paced Evolution
              </span>
            </div>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black mb-6">
              LEAD Academy Online
            </h2>
            <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-8">
              The LEAD Academy is designed to grow into a self-paced learning experience. The website introduces this vision through previews while full online courses are developed over time.
            </p>
            
            <div className="bg-white rounded-[10px] p-6 shadow-xs border border-slate-200 mb-8">
              <h4 className="font-heading text-lg font-bold !text-black mb-4">Academy Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Short video lessons', 'Downloadable worksheets', 'AI-supported creative activities', 'Hands-on projects', 'Reflection prompts', 'Digital portfolios', 'Badges', 'Studio certificates', 'LEAD Academy certificates'].map((feature, i) => (
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
              Student Online Journey
            </h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-3 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#18A0A8]/50 before:to-transparent">
              {['Choose a Studio', 'Watch the Lesson', 'Complete a Project', 'Reflect', 'Submit to Portfolio', 'Earn a Badge', 'Unlock the Next Studio'].map((step, i) => (
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

      {/* ══ 10. Gallery & Research ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Gallery Highlights */}
          <div>
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">Program Highlights</h2>
            <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-8">
              The LEAD Gallery highlights student creativity across every studio — artwork, films, photography, music, and showcases.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Student artwork', 'Films', 'Photography', 'Music', 'Foil to Film™', 'Presentations', 'Showcases', 'Testimonials'].map(tag => (
                <span key={tag} className="bg-[#F8FAFC] border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-[10px] flex items-center gap-2">
                  <ImageIcon size={16} className="text-slate-400" /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Research Foundation */}
          <div className="bg-[#F8FAFC] p-8 rounded-[10px] border border-slate-200 shadow-xs">
            <h2 className="font-heading text-2xl font-extrabold !text-black mb-4">Research Foundation</h2>
            <p className="font-sans text-base !text-black/80 font-light leading-relaxed mb-6">
              The LEAD curriculum integrates evidence-informed educational approaches that support creative, academic, social, and emotional development.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['STARR Framework™', 'Social & Emotional Learning', 'Arts Integration', 'Project-Based Learning', 'Career Readiness', 'Responsible AI', 'Leadership Development'].map(f => (
                <span key={f} className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-white border border-slate-200 px-2 py-1 rounded-[10px]">{f}</span>
              ))}
            </div>
            <div className="bg-white p-6 rounded-[10px] border-l-4 border-[#18A0A8] shadow-xs">
              <h5 className="font-heading font-bold !text-black mb-2">The STARR Framework™</h5>
              <p className="font-sans text-sm text-slate-600 leading-relaxed mb-0">
                <strong className="text-[#18A0A8]">Science · Technology · Arts · Responsibility · Resilience</strong> — the STARR Framework serves as the instructional foundation for all Circular Flow Learning Platform programs, encouraging learners to think critically, create confidently, act responsibly, and develop resilience through meaningful learning experiences.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 11. Book Program CTA ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white text-center border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#18A0A8]/20 via-transparent to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#18A0A8]/20 border border-[#18A0A8]/40 text-[#18A0A8] mb-6">
            <span className="font-mono text-xs tracking-widest font-extrabold uppercase">
              BRING LEAD ACADEMY TO YOUR SCHOOL OR COMMUNITY
            </span>
          </div>
          
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold !text-white mb-6">
            Ready to <span className="heading-italic text-[#18A0A8] font-normal">Connect?</span>
          </h2>
          
          <p className="font-sans text-xl !text-white/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            LEAD is available for schools, after-school programs, community organizations, conferences, workshops, summer enrichment, and partnerships.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Schools', 'After-school programs', 'Community organizations', 'Conferences', 'Workshops', 'Summer enrichment', 'Partnerships', 'Self-Paced (Coming Soon)'].map(format => (
              <span key={format} className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-[10px] font-sans text-xs font-medium text-white/90">
                {format}
              </span>
            ))}
          </div>

          <Link href="/Contact" className="no-underline">
            <Button variant="primary">Explore Partnership Opportunities</Button>
          </Link>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/50 text-sm font-medium">
            {['Schedule a Consultation', 'Request Program Information', 'Book a Workshop', 'Book a Studio'].map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/20" />}
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
