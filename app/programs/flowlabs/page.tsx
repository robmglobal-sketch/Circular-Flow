"use client";

import React from "react";
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
  Info,
  DownloadSimple,
  Image as ImageIcon,
  Lightbulb,
  Flask,
  Gear,
  Brain,
  Handshake,
  FilmStrip,
  Palette,
  MusicNotes,
  Camera,
  PaintBrush,
  Briefcase,
  Cpu
} from "@phosphor-icons/react";
import Breadcrumbs from "@/app/components/Breadcrumbs";

const ACCENT = "#D4A017";

const MINDSET = [
  { title: "Experimentation", desc: "Try, test, and iterate — ideas get sharper when you put them to work.", icon: Flask },
  { title: "Collaboration", desc: "Build with others — the best ideas come from different minds together.", icon: Handshake },
  { title: "Creativity", desc: "Imagine what could be, then make it real.", icon: Lightbulb },
  { title: "Problem-Solving", desc: "Turn real challenges into meaningful, tangible solutions.", icon: Gear },
];

const DISCIPLINES = [
  { title: "Product Design & Prototyping", desc: "Design, build, and test real products.", icon: Gear },
  { title: "AI & Emerging Technology", desc: "Explore AI and the tools shaping the future.", icon: Cpu },
  { title: "Digital Media Production", desc: "Create across digital media platforms.", icon: Monitor },
  { title: "Film & Animation", desc: "Bring stories to life on screen.", icon: FilmStrip },
  { title: "Graphic & Fashion Design", desc: "Visual and wearable design as expression.", icon: Palette },
  { title: "Music Production", desc: "Original sound, beats, and songs.", icon: MusicNotes },
  { title: "Photography & Videography", desc: "Capture and craft visual stories.", icon: Camera },
  { title: "Creative Writing & Storytelling", desc: "Shape narrative across mediums.", icon: PaintBrush },
  { title: "Entrepreneurship & Business Development", desc: "Turn ideas into ventures.", icon: Briefcase },
  { title: "STEAM Challenges", desc: "Science, technology, engineering, art, and math in action.", icon: Brain },
  { title: "Community Innovation Projects", desc: "Real projects that serve the community.", icon: Users },
  { title: "Future Workforce Skills", desc: "Build the skills tomorrow’s work demands.", icon: RocketLaunch },
];

export default function ProgramFlowLabs() {
  return (
    <main className="bg-white min-h-screen font-sans text-black relative overflow-hidden">
      {/* Ambient background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#D4A017]/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#163A5F]/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* ══ 1. Hero Section ══ */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none z-0 hero-grid-pattern" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs 
              items={[
                { label: "Programs", href: "/programs" },
                { label: "The Flow Labs" }
              ]} 
              className="mb-4"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017]">
              <Sparkle size={18} weight="fill" className="animate-pulse" />
              <span className="font-mono text-xs tracking-widest font-extrabold uppercase">
                INNOVATION &amp; APPLIED LEARNING DIVISION
              </span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold !text-black tracking-tight leading-[1.1]">
              THE FLOW <span className="heading-italic font-normal" style={{ color: ACCENT }}>LABS</span>
            </h1>
            
            <p className="font-sans text-xl sm:text-2xl !text-black/80 font-bold leading-relaxed max-w-2xl tracking-wide uppercase">
              Innovation, Creativity &amp; Applied Learning
            </p>
            
            <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed max-w-2xl pt-2">
              Circular Flow’s innovation, creativity, and applied learning division — where ideas become real-world experiences through hands-on exploration, design, building, testing, and showcasing across disciplines.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link href="#mindset" className="no-underline">
                <Button variant="primary">Explore The Labs</Button>
              </Link>
              <Link href="/Contact" className="no-underline">
                <Button variant="secondary">Book Flow Labs</Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#163A5F] rounded-[10px] p-8 shadow-2xl border border-[#D4A017]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#D4A017]/20 via-transparent to-transparent pointer-events-none" />
              <h3 className="font-heading text-xl font-extrabold !text-white mb-6 border-b border-white/10 pb-4">
                Program Details
              </h3>
              
              <div className="space-y-4 font-sans text-sm">
                {[
                  { label: "AUDIENCE", value: "Youth & Young Creators" },
                  { label: "FORMAT", value: "Hybrid" },
                  { label: "SETTINGS", value: "Labs, Schools, Camps" },
                  { label: "PROJECTS", value: "Multi-discipline" },
                  { label: "DIVISION", value: "Innovation & Applied Learning" },
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
                <div className="w-10 h-10 rounded-[10px] bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017]">
                  <Compass size={24} weight="duotone" />
                </div>
                <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#D4A017]">
                  Division Overview
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold !text-black mb-6">
                Innovation, Creativity &amp; Applied Learning
              </h2>
              <p className="font-sans text-lg !text-black font-light leading-relaxed mb-6">
                The Flow Labs is the innovation, creativity, and applied learning division of the Circular Flow Learning Platform — where participants explore, design, build, test, create, and showcase projects across multiple disciplines. It is the bridge between imagination and practical application.
              </p>
              <p className="font-sans text-base !text-black/80 font-light leading-relaxed">
                The Flow Labs transform ideas into real-world experiences. Unlike traditional classrooms, The Flow Labs emphasize experimentation, collaboration, creativity, and problem-solving through hands-on experiences across creative, technical, and entrepreneurial domains.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[10px] shadow-xs border border-slate-200 p-8 space-y-8">
            <div>
              <h4 className="font-mono text-xs tracking-widest font-extrabold uppercase text-slate-400 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                <Users size={16} /> Designed For
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Curious youth & young creators", "Schools seeking enrichment", 
                  "Community labs & summer camps", "Future-workforce learners", 
                  "Partners hosting innovation events"
                ].map(item => (
                  <div key={item} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-[10px] border border-slate-100">
                    <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full mt-1.5 shrink-0" />
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
                  "Turn ideas into tangible projects",
                  "Build creative and technical skill across disciplines",
                  "Practice collaboration and problem-solving",
                  "Learn to embrace failure as part of the process",
                  "Develop future workforce and innovation skills",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm font-medium !text-black">
                    <CheckCircle size={18} className="text-[#D4A017] shrink-0 mt-0.5" weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 3. The Lab Mindset ══ */}
      <section id="mindset" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#D4A017] block mb-3">
              The Maker Mindset
            </span>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black mb-6">
              How the Labs Work
            </h2>
            <p className="font-sans text-lg !text-black font-light leading-relaxed">
              The Flow Labs are built on a maker mindset — experiment, collaborate, create, and solve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {MINDSET.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-[#F8FAFC] border border-slate-200 rounded-[10px] p-6 hover:border-[#D4A017]/50 hover:shadow-xs transition-all group">
                  <div className="w-12 h-12 rounded-[10px] bg-white border border-slate-200 flex items-center justify-center text-[#D4A017] mb-5 shadow-xs group-hover:scale-105 transition-transform">
                    <IconComp size={26} weight="duotone" />
                  </div>
                  <h4 className="font-heading text-xl font-bold !text-black mb-2">{item.title}</h4>
                  <p className="font-sans text-sm !text-black/70 font-light leading-relaxed mb-0">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-[#163A5F] rounded-[10px] p-8 lg:p-10 text-white relative overflow-hidden shadow-lg border border-[#D4A017]/20">
            <div className="flex items-start gap-4">
              <Info size={32} weight="fill" className="text-[#D4A017] shrink-0 mt-1" />
              <p className="font-sans text-lg lg:text-xl font-light italic !text-white/90 leading-relaxed mb-0">
                "Participants are encouraged to think critically, collaborate with others, embrace failure as part of learning, and transform creative ideas into meaningful solutions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. Labs & Disciplines ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#D4A017] block mb-3">
              Innovation Labs &amp; Disciplines
            </span>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black mb-6">
              Labs &amp; Disciplines
            </h2>
            <p className="font-sans text-lg !text-black font-light leading-relaxed">
              Participants choose from labs across creative, technical, and entrepreneurial disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {DISCIPLINES.map((discipline, idx) => {
              const IconComp = discipline.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-[10px] p-6 hover:border-[#D4A017]/50 hover:shadow-xs transition-all group flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017] shrink-0 group-hover:bg-[#D4A017] group-hover:text-white transition-colors">
                    <IconComp size={22} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold !text-black mb-1">{discipline.title}</h4>
                    <p className="font-sans text-sm !text-black/70 font-light leading-relaxed mb-0">
                      {discipline.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-100 border border-slate-300 border-dashed rounded-[10px] p-8 text-center flex flex-col items-center justify-center max-w-2xl mx-auto">
            <Info size={32} weight="duotone" className="text-slate-400 mb-3" />
            <h5 className="font-heading font-bold text-slate-700">Lab Project &amp; Worksheet Previews</h5>
            <p className="font-sans text-sm text-slate-500 max-w-sm mt-2 mb-0">
              Sample project briefs, design worksheets, and STEAM challenge previews will appear here as labs launch.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 5. Resource Library ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#D4A017] block mb-3">
              Lab Resources
            </span>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-white mb-6">
              Resource Library
            </h2>
            <p className="font-sans text-lg !text-white/80 font-light leading-relaxed">
              Downloadable guides, worksheets, and toolkits that support hands-on making across every lab.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Project Guides', 
              'Design & Prototyping Worksheets', 
              'STEAM Challenge Briefs', 
              'AI & Tech Toolkits', 
              'Showcase Templates'
            ].map((resource, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[10px] p-6 flex items-center justify-between hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[10px] bg-[#D4A017]/20 flex items-center justify-center text-[#D4A017]">
                    <DownloadSimple size={22} weight="duotone" />
                  </div>
                  <h4 className="font-heading text-base font-bold !text-white">{resource}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. Gallery & Research ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Gallery Highlights */}
          <div>
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">Lab Gallery</h2>
            <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-8">
              The Flow Labs Gallery showcases what participants build — projects, prototypes, films, and community innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Student projects', 'Prototypes', 'Films & animation', 'Digital media', 'STEAM challenges', 'Community innovation projects', 'Showcase events', 'Testimonials'].map(tag => (
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
              The Flow Labs are grounded in hands-on, applied learning approaches that build real-world skill.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['STARR Framework™', 'Project-Based Learning', 'STEAM Education', 'Design Thinking', 'Maker-Centered Learning', 'Responsible AI', 'Collaboration & Problem-Solving'].map(f => (
                <span key={f} className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-white border border-slate-200 px-2 py-1 rounded-[10px]">{f}</span>
              ))}
            </div>
            <div className="bg-white p-6 rounded-[10px] border-l-4 border-[#D4A017] shadow-xs">
              <h5 className="font-heading font-bold !text-black mb-2">The STARR Framework™</h5>
              <p className="font-sans text-sm text-slate-600 leading-relaxed mb-0">
                <strong className="text-[#D4A017]">Science · Technology · Arts · Responsibility · Resilience</strong> — the STARR Framework serves as the instructional foundation for all Circular Flow Learning Platform programs, encouraging learners to think critically, create confidently, act responsibly, and develop resilience through meaningful learning experiences.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 7. Book Program CTA ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white text-center border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#D4A017]/20 via-transparent to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] mb-6">
            <span className="font-mono text-xs tracking-widest font-extrabold uppercase">
              BOOK THE FLOW LABS
            </span>
          </div>
          
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold !text-white mb-6">
            Ready to <span className="heading-italic text-[#D4A017] font-normal">Connect?</span>
          </h2>
          
          <p className="font-sans text-xl !text-white/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            The Flow Labs are available for schools, community labs, summer camps, special events, and partnerships.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Innovation workshops', 'School enrichment programs', 'Community labs', 'Summer camps', 'Special events', 'Partnerships', 'Future virtual labs (Coming Soon)'].map(format => (
              <span key={format} className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-[10px] font-sans text-xs font-medium text-white/90">
                {format}
              </span>
            ))}
          </div>

          <Link href="/Contact" className="no-underline">
            <Button variant="primary">Explore Partnership Opportunities</Button>
          </Link>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/50 text-sm font-medium">
            {['Schedule a Consultation', 'Request Program Information', 'Book a Lab', 'Host an Innovation Event'].map((c, i) => (
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
