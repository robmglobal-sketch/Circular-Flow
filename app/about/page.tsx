"use client";

import React, { useState } from "react";
import {
  User,
  Atom,
  Sparkle,
  Target,
  Quotes,
  ArrowRight,
  Compass,
  GraduationCap,
  Briefcase,
  MapPin,
  Buildings,
  Calendar,
  Medal,
  Lightbulb,
  Heart,
  ShieldCheck,
  Plant,
  Books,
  MicrophoneStage,
  VideoCamera,
} from "@phosphor-icons/react";

const STARR_ITEMS = [
  {
    letter: "S",
    word: "SCIENCE",
    desc: "Building curiosity and critical thinking — understanding the world through inquiry, evidence, and experimentation.",
    icon: Atom,
  },
  {
    letter: "T",
    word: "TECHNOLOGY",
    desc: "Using digital tools, AI, and media as collaborators that amplify human creativity rather than replace it.",
    icon: Lightbulb,
  },
  {
    letter: "A",
    word: "ARTS",
    desc: "Expressing identity, emotion, and vision through music, film, writing, drawing, and visual art.",
    icon: Sparkle,
  },
  {
    letter: "R",
    word: "RESPONSIBILITY",
    desc: "Owning one's impact on community — acting with integrity, accountability, and care for others.",
    icon: ShieldCheck,
  },
  {
    letter: "R",
    word: "RESILIENCE",
    desc: "Developing the strength to grow through adversity — bouncing back, adapting, and moving forward.",
    icon: Plant,
  },
];

const CF_FRAMEWORK = [
  {
    title: "CREATIVITY",
    desc: "The starting point — turning imagination into action, raw materials into meaning.",
    icon: Sparkle,
  },
  {
    title: "CONNECTION",
    desc: "Linking people, disciplines, generations, and technologies in purposeful relationship.",
    icon: Heart,
  },
  {
    title: "COMMUNITY",
    desc: "Real impact happens in real places — schools, homes, neighborhoods, and stages.",
    icon: Buildings,
  },
  {
    title: "CONTINUITY",
    desc: "The circular nature of growth — each generation shapes the next, every project feeds the next.",
    icon: Atom,
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("founder");

  return (
    <main className="bg-white min-h-screen font-sans text-black relative overflow-hidden">
      {/* Ambient decorative background glows */}
      <div className="absolute top-12 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      {/* ══ Hero Section ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 relative z-10 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto flex flex-col items-start">
          {/* Paintbrush Header Badge */}
          <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 mb-6 select-none group">
            <svg
              className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
              viewBox="0 0 220 44"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M12 8 C40 3, 110 2, 208 6 C218 10, 216 28, 206 34 C160 39, 60 41, 10 37 C1 32, 2 14, 12 8 Z"
              />
              <path
                fill="currentColor"
                opacity="0.5"
                d="M6 14 C30 9, 110 5, 214 10 C222 18, 212 32, 198 36 C140 40, 40 38, 14 32 C4 26, 0 18, 6 14 Z"
              />
            </svg>
            <Compass size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)]" />
            <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
              ABOUT CIRCULAR FLOW
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold !text-black tracking-tight leading-[1.14] max-w-4xl">
            Nearly Thirty Years of Creativity. A Future of{" "}
            <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
              Innovation
            </span>
            .
          </h1>
          <p className="font-sans text-base sm:text-lg lg:text-xl !text-black font-light max-w-2xl mt-6 leading-relaxed mb-0">
            Discover the philosophies, frameworks, and evolutionary journey behind our creative ecosystems and youth development platforms.
          </p>
        </div>
      </section>

      {/* ══ Sticky Tab Navigation ══ */}
      <section className="sticky top-20 lg:top-[5.5rem] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar py-2">
          {[
            { id: "founder", label: "About the Founder", icon: User },
            { id: "cf-framework", label: "CF Framework", icon: Atom },
            { id: "starr", label: "STARR Framework", icon: Sparkle },
            { id: "mission", label: "Mission & Vision", icon: Target },
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-[12px] font-heading text-sm sm:text-base whitespace-nowrap transition-all cursor-pointer border-none focus:outline-none ${
                  isActive
                    ? "bg-[var(--color-secondary)] text-white font-extrabold shadow-xs"
                    : "bg-transparent text-slate-600 hover:text-black hover:bg-slate-100/70 font-medium"
                }`}
              >
                <IconComponent size={18} weight={isActive ? "bold" : "regular"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ══ Tab Content Area ══ */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 relative z-10">
        
        {/* ── Tab 1: Founder ── */}
        {activeTab === "founder" && (
          <div id="founder" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Bio Content */}
              <div className="lg:col-span-8 space-y-6 font-sans text-base sm:text-lg !text-black font-light leading-relaxed">
                <h2 className="font-heading text-2.5xl sm:text-4xl font-extrabold !text-black tracking-tight leading-snug mb-6">
                  Robert Mitchell Jr., MSW, LCSW{" "}
                  <span className="text-[var(--color-secondary)] font-normal heading-italic inline-block">(Illinois)</span>
                </h2>
                
                <p className="!text-black font-light">
                  Robert Mitchell Jr. is a licensed clinical social worker, educator, author, filmmaker, musician, illustrator, and community builder rooted in Detroit, Michigan. For nearly 30 years, he has worked at the intersection of youth development, creativity, technology, education, and community impact.
                </p>
                <p className="!text-black font-light">
                  Robert is the founder of R. Mitchell Youth &amp; Community Services, a 501(c)(3) nonprofit organization originally established as Circular Flow Inc. The organization operates most of his youth programs, workshops, social-emotional learning initiatives, and community-based services.
                </p>
                <p className="!text-black font-light">
                  He later founded Circular Flow Productions LLC as the creative and entrepreneurial next step — providing a structure through which young people can develop practical skills, create original work, and explore opportunities to earn income. Its projects include music, books, plays, films, clothing, merchandise, visual art, and responsible AI-assisted storytelling.
                </p>
                <p className="!text-black font-light">
                  Robert has spent more than two decades researching, testing, and refining the Circular Flow youth-development model through social work, arts education, community programming, and formal youth-development training. His work is supported by original lesson plans, more than 100 student assessments, academic research, and a formal program evaluation completed by the Marygrove College Social Work Department.
                </p>
                <p className="!text-black font-light">
                  Robert holds a Master of Social Work degree and is a Licensed Clinical Social Worker in Illinois. His professional background informs a trauma-responsive and evidence-based approach to helping young people build creativity, confidence, resilience, life skills, and pathways toward entrepreneurship.
                </p>

                {/* High-End Quote Box */}
                <div className="relative border-l-4 border-[var(--color-secondary)] bg-[#F8FAFC] border-y border-r border-slate-200/80 rounded-r-[16px] p-6 sm:p-8 my-10 shadow-xs">
                  <Quotes size={42} weight="fill" className="absolute top-4 right-6 text-[#18A0A8]/15 pointer-events-none" />
                  <blockquote className="font-heading text-xl sm:text-2xl !text-black font-extrabold italic leading-snug mb-3">
                    &ldquo;I don't make separate projects. I make one continuous conversation between a community and its own potential.&rdquo;
                  </blockquote>
                  <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-secondary)] font-bold">
                    — Robert Mitchell Jr., MSW
                  </div>
                </div>

                <p className="!text-black font-medium text-lg sm:text-xl border-t border-slate-200 pt-6">
                  The same child who shaped aluminum foil into imaginary worlds now transforms stories, music, films, workshops, products, and programs into tools for learning, healing, innovation, and community growth.
                </p>
              </div>

              {/* Right Sidebar Cards */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Credentials Card */}
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-[20px] p-6 sm:p-8 shadow-xs relative overflow-hidden">
                  <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-200">
                    <Medal size={24} weight="bold" className="text-[var(--color-secondary)]" />
                    <h3 className="font-heading text-base font-extrabold tracking-wider uppercase text-[#163A5F] mb-0">
                      CREDENTIALS
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: GraduationCap, label: "Education", value: "MSW — Master of Social Work" },
                      { icon: Medal, label: "Licensure", value: "LCSW — State of Illinois" },
                      { icon: MapPin, label: "Location", value: "Detroit, Michigan" },
                      { icon: Buildings, label: "Nonprofit", value: "R. Mitchell Youth & Community Services" },
                      { icon: Briefcase, label: "Studio", value: "Circular Flow Productions LLC" },
                      { icon: User, label: "Title", value: "Founder & CEO" },
                      { icon: Calendar, label: "Years Active", value: "Nearly 30 Years" },
                    ].map((cred) => {
                      const IconC = cred.icon;
                      return (
                        <div key={cred.label} className="flex items-start gap-3.5 pb-3.5 border-b border-slate-200/70 last:border-0 last:pb-0">
                          <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] flex items-center justify-center shrink-0 mt-0.5">
                            <IconC size={16} weight="bold" />
                          </div>
                          <div>
                            <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">
                              {cred.label}
                            </div>
                            <div className="font-heading text-sm font-extrabold !text-black">
                              {cred.value}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Disciplines Card */}
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-[20px] p-6 sm:p-8 shadow-xs relative overflow-hidden">
                  <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-200">
                    <Sparkle size={24} weight="bold" className="text-[var(--color-tertiary)]" />
                    <h3 className="font-heading text-base font-extrabold tracking-wider uppercase text-[#163A5F] mb-0">
                      DISCIPLINES
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Educator",
                      "Author",
                      "Filmmaker",
                      "Musician",
                      "Social Worker",
                      "Community Builder",
                      "AI Storyteller",
                      "Workshop Facilitator",
                      "Youth Mentor",
                      "Program Designer",
                    ].map((d) => (
                      <span
                        key={d}
                        className="font-sans text-xs font-bold !text-black bg-white border border-slate-200 px-3.5 py-2 rounded-full shadow-2xs hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/5 transition-all"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ── Tab 2: CF Framework ── */}
        {activeTab === "cf-framework" && (
          <div id="cf-framework" className="animate-fade-in space-y-12 max-w-6xl mx-auto">
            
            <div className="flex flex-col items-center text-center">
              {/* Paintbrush Header Badge */}
              <div className="relative inline-flex items-center gap-2 px-6 py-2 mb-4 select-none group">
                <svg
                  className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                  viewBox="0 0 180 44"
                  preserveAspectRatio="none"
                >
                  <path fill="currentColor" d="M12 8 C40 3, 100 2, 168 6 C178 10, 176 28, 166 34 C130 39, 60 41, 10 37 C1 32, 2 14, 12 8 Z" />
                </svg>
                <Atom size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)]" />
                <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
                  The Framework
                </span>
              </div>

              <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black tracking-tight leading-[1.16]">
                The Circular Flow{" "}
                <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
                  Framework
                </span>
              </h2>
              <p className="font-sans text-base sm:text-lg !text-black font-light max-w-2xl mt-4 mb-0 leading-relaxed">
                The operating principles behind every project, program, and community engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CF_FRAMEWORK.map((item, i) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-[#F8FAFC] border border-slate-200/90 rounded-[20px] p-8 sm:p-10 shadow-xs hover:shadow-md hover:border-[#18A0A8]/50 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                  >
                    <div className="absolute top-6 right-6 font-heading text-5xl sm:text-6xl font-extrabold text-[var(--color-secondary)]/10 group-hover:text-[var(--color-secondary)]/25 transition-colors pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="w-12 h-12 rounded-[12px] bg-[var(--color-secondary)]/15 text-[var(--color-secondary-dark)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <IconComp size={24} weight="bold" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-extrabold !text-black mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-sans text-base !text-black font-light leading-relaxed mb-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dark Navy Synthesis Card */}
            <div className="bg-[#163A5F] rounded-[24px] p-8 sm:p-12 text-center shadow-xl relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/20 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              <p className="relative z-10 font-sans text-lg sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light mb-8">
                These four principles are not separate — they are circular. Creativity generates connection. Connection builds community. Community ensures continuity. And continuity fuels more creativity.
              </p>

              <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-heading text-xs sm:text-sm tracking-widest text-[#18A0A8] font-extrabold">
                <span>CREATIVITY</span>
                <ArrowRight size={16} weight="bold" className="text-[#D4A017]" />
                <span>CONNECTION</span>
                <ArrowRight size={16} weight="bold" className="text-[#D4A017]" />
                <span>COMMUNITY</span>
                <ArrowRight size={16} weight="bold" className="text-[#D4A017]" />
                <span>CONTINUITY</span>
                <ArrowRight size={16} weight="bold" className="text-[#D4A017]" />
                <span className="text-[#D4A017] text-lg sm:text-xl font-black">∞</span>
              </div>
            </div>

          </div>
        )}

        {/* ── Tab 3: STARR Framework ── */}
        {activeTab === "starr" && (
          <div id="starr" className="animate-fade-in space-y-12 max-w-5xl mx-auto">
            
            <div className="flex flex-col items-center text-center">
              {/* Paintbrush Header Badge */}
              <div className="relative inline-flex items-center gap-2 px-6 py-2 mb-4 select-none group">
                <svg
                  className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                  viewBox="0 0 210 44"
                  preserveAspectRatio="none"
                >
                  <path fill="currentColor" d="M12 8 C40 3, 110 2, 198 6 C208 10, 206 28, 196 34 C150 39, 60 41, 10 37 C1 32, 2 14, 12 8 Z" />
                </svg>
                <Sparkle size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)]" />
                <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
                  The STARR Framework
                </span>
              </div>

              <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black tracking-tight leading-[1.16]">
                Science · Technology · Arts · Responsibility ·{" "}
                <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
                  Resilience
                </span>
              </h2>
              <p className="font-sans text-base sm:text-lg !text-black font-light max-w-2xl mt-4 mb-0 leading-relaxed">
                The evidence-based youth development framework at the heart of Circular Flow's educational programming.
              </p>
            </div>

            {/* STARR Cards List */}
            <div className="space-y-4 sm:space-y-5">
              {STARR_ITEMS.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={`${item.letter}-${idx}`}
                    className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 p-6 sm:p-8 bg-[#F8FAFC] border border-slate-200/90 rounded-[20px] shadow-xs hover:border-[#18A0A8]/50 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[16px] bg-[var(--color-secondary)]/12 border border-[var(--color-secondary)]/30 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary-dark)]">
                        {item.letter}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <IconComp size={20} weight="bold" className="text-[var(--color-tertiary)] shrink-0" />
                        <h3 className="font-heading text-lg sm:text-2xl font-extrabold !text-black tracking-tight mb-0">
                          {item.word}
                        </h3>
                      </div>
                      <p className="font-sans text-sm sm:text-base !text-black font-light leading-relaxed mb-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* STARR Application Note */}
            <div className="bg-[#18A0A8]/8 border border-[#18A0A8]/25 rounded-[20px] p-8 sm:p-10 shadow-2xs">
              <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed mb-0 text-center max-w-3xl mx-auto">
                The STARR Framework is applied across the Circular Flow Learning Platform — LEAD, RIZE UP, The Flow, The Flow Center, and The Flow Labs. It provides a consistent, trauma-responsive lens that helps facilitators and participants build creativity, confidence, resilience, and life skills.
              </p>
            </div>

          </div>
        )}

        {/* ── Tab 4: Mission & Vision ── */}
        {activeTab === "mission" && (
          <div id="mission" className="animate-fade-in space-y-12 max-w-4xl mx-auto">
            
            <div className="flex flex-col items-center text-center">
              {/* Paintbrush Header Badge */}
              <div className="relative inline-flex items-center gap-2 px-6 py-2 mb-4 select-none group">
                <svg
                  className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                  viewBox="0 0 170 44"
                  preserveAspectRatio="none"
                >
                  <path fill="currentColor" d="M12 8 C40 3, 100 2, 158 6 C168 10, 166 28, 156 34 C120 39, 50 41, 10 37 C1 32, 2 14, 12 8 Z" />
                </svg>
                <Target size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)]" />
                <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
                  Mission & Vision
                </span>
              </div>

              <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black tracking-tight leading-[1.16]">
                Why Circular Flow{" "}
                <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
                  Exists
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              
              {/* Mission Box */}
              <div className="border-l-4 border-[#18A0A8] bg-[#F8FAFC] border border-slate-200/90 rounded-r-[20px] p-8 sm:p-10 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2.5 mb-4">
                  <Target size={22} weight="bold" className="text-[var(--color-secondary)]" />
                  <h3 className="font-heading text-sm tracking-widest text-[#18A0A8] uppercase font-extrabold mb-0">
                    MISSION
                  </h3>
                </div>
                <p className="font-sans text-xl sm:text-2.5xl !text-black font-light leading-relaxed mb-0">
                  To inspire people to reconnect, create, reflect, collaborate, and take positive action — through interconnected creative ecosystems that bring together diverse people, disciplines, art forms, and technologies.
                </p>
              </div>

              {/* Vision Box */}
              <div className="border-l-4 border-[#D4A017] bg-[#F8FAFC] border border-slate-200/90 rounded-r-[20px] p-8 sm:p-10 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2.5 mb-4">
                  <Sparkle size={22} weight="bold" className="text-[#D4A017]" />
                  <h3 className="font-heading text-sm tracking-widest text-[#D4A017] uppercase font-extrabold mb-0">
                    VISION
                  </h3>
                </div>
                <p className="font-sans text-xl sm:text-2.5xl !text-black font-light leading-relaxed mb-0">
                  A world where every person — regardless of background — has access to the creative tools, mentoring relationships, and educational experiences they need to discover their voice and create positive change.
                </p>
              </div>

              {/* Primary Message Feature Box */}
              <div className="bg-[#163A5F] rounded-[24px] p-8 sm:p-14 shadow-xl relative overflow-hidden text-center border border-white/10">
                <Quotes size={80} weight="fill" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 pointer-events-none" />
                
                <div className="relative z-10 mb-6">
                  <span className="inline-block font-heading text-xs sm:text-sm tracking-widest uppercase px-4 py-1.5 rounded-full bg-[#D4A017]/20 text-[#D4A017] font-extrabold border border-[#D4A017]/40">
                    PRIMARY MESSAGE
                  </span>
                </div>

                <p className="relative z-10 font-sans text-2xl sm:text-3.5xl text-white/95 font-light italic leading-snug max-w-3xl mx-auto mb-6">
                  &ldquo;I design interconnected creative ecosystems that bring together diverse people, disciplines, art forms, and technologies to inspire learning, reflection, collaboration, and positive action.&rdquo;
                </p>

                <div className="relative z-10 font-mono text-xs sm:text-sm text-[#D4A017] uppercase tracking-wider font-bold">
                  — Robert Mitchell Jr., MSW
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </main>
  );
}
