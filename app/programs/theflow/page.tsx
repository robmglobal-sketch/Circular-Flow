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
  Lightbulb,
  Brain,
  PaintBrush,
  Plant,
  ArrowUpRight,
} from "@phosphor-icons/react";
import VerticalAccordion from "@/app/components/VerticalAccordion";
import Breadcrumbs from "@/app/components/Breadcrumbs";

const ACCENT = "#18A0A8";

const FAQ = [
  {
    q: "Who is THE FLOW for?",
    a: "Students, parents, educators, schools, community organizations, mental health professionals, leadership programs, and lifelong learners.",
  },
  {
    q: "How is THE FLOW delivered?",
    a: "In-person workshops, professional development, school partnerships, community programs, and a future self-paced academy.",
  },
  {
    q: "How long is a THE FLOW workshop?",
    a: "Formats are flexible and can be customized for a single session, a series, or an ongoing partnership.",
  },
  {
    q: "Can THE FLOW be customized?",
    a: "Yes — THE FLOW adapts to the needs of schools, clinical settings, community organizations, and leadership programs.",
  },
  {
    q: "How do we bring THE FLOW to our organization?",
    a: "Join the waitlist or request information through the booking section and we’ll discuss your needs.",
  },
];

const JOURNEY_STEPS_DATA = [
  {
    step: "01",
    stepNum: 1,
    label: "EXPLORATION",
    title: "Discover",
    description: "Begin the journey by discovering new ideas, recognizing your inner potential, and opening up to the possibilities ahead.",
    icon: Compass,
  },
  {
    step: "02",
    stepNum: 2,
    label: "INTROSPECTION",
    title: "Reflect",
    description: "Take time to look inward, process your lived experiences, and build emotional awareness without judgment.",
    icon: Lightbulb,
  },
  {
    step: "03",
    stepNum: 3,
    label: "CLARITY",
    title: "Understand",
    description: "Gain deeper clarity on the connections between your thoughts, feelings, identity, and the choices you make.",
    icon: Brain,
  },
  {
    step: "04",
    stepNum: 4,
    label: "CREATIVITY",
    title: "Express",
    description: "Find your unique voice and creatively communicate your inner experiences to the world through various mediums.",
    icon: PaintBrush,
  },
  {
    step: "05",
    stepNum: 5,
    label: "ACTION",
    title: "Apply",
    description: "Take the insights and self-awareness you've gained and apply them purposefully to real-world situations and relationships.",
    icon: CheckCircle,
  },
  {
    step: "06",
    stepNum: 6,
    label: "DEVELOPMENT",
    title: "Grow",
    description: "Embrace the continuous changes and developments in your personal, emotional, and social life with resilience.",
    icon: Plant,
  },
  {
    step: "07",
    stepNum: 7,
    label: "GUIDANCE",
    title: "Lead",
    description: "Step forward as a leader, using your growth to guide others and foster a positive environment in your community.",
    icon: ArrowUpRight,
  },
  {
    step: "08",
    stepNum: 8,
    label: "IMPACT",
    title: "Inspire",
    description: "Leave a lasting impact by sharing your story, empowering those around you, and completing the generational cycle.",
    icon: Sparkle,
  },
];

export default function ProgramTheFlow() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-white min-h-screen font-sans text-black relative overflow-hidden">
      {/* Ambient background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#18A0A8]/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#163A5F]/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* ══ 1. Hero Section ══ */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none z-0 hero-grid-pattern" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <Breadcrumbs 
              items={[
                { label: "Programs", href: "/programs" },
                { label: "The Flow" }
              ]} 
              className="mb-4"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#18A0A8]/10 border border-[#18A0A8]/30 text-[#18A0A8]">
              <Sparkle size={18} weight="fill" className="animate-pulse" />
              <span className="font-mono text-xs tracking-widest font-extrabold uppercase">
                FOUNDATIONAL FRAMEWORK
              </span>
            </div>
            
            <h1 className="font-heading text-[40px] sm:text-6xl lg:text-7xl font-extrabold !text-black tracking-tight leading-[1.1]">
              THE <span className="heading-italic font-normal" style={{ color: ACCENT }}>FLOW</span>™
            </h1>
            
            <p className="font-sans text-xl sm:text-2xl !text-black/80 font-light leading-relaxed max-w-2xl">
              The Foundational Framework of the Circular Flow Learning Platform.
            </p>
            
            <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed max-w-2xl pt-2">
              THE FLOW is more than a curriculum. It is the foundational framework behind the Circular Flow Learning Platform. It helps individuals understand the connections between their inner experiences and outward choices so they can grow with greater awareness, resilience, and purpose.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link href="#what-is" className="no-underline">
                <Button variant="primary">Explore THE FLOW</Button>
              </Link>
              <Link href="/Contact" className="no-underline">
                <Button variant="secondary">Book a Workshop</Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#163A5F] rounded-[10px] p-8 shadow-2xl border border-[#18A0A8]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#18A0A8]/20 via-transparent to-transparent pointer-events-none" />
              <h3 className="font-heading text-xl font-extrabold !text-white mb-6 border-b border-white/10 pb-4">
                Program Details
              </h3>
              
              <div className="space-y-4 font-sans text-sm">
                {[
                  { label: "AUDIENCE", value: "Youth & Adults" },
                  { label: "FORMAT", value: "In-Person Workshops" },
                  { label: "SETTINGS", value: "Schools · Clinical · Community" },
                  { label: "COMPONENTS", value: "Framework + Guides + Tools" },
                  { label: "FACILITATOR", value: "Robert Mitchell Jr., MSW, LCSW" },
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

      {/* ══ 2. What Is THE FLOW? ══ */}
      <section id="what-is" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-[10px] bg-[#18A0A8]/10 flex items-center justify-center text-[#18A0A8]">
              <Compass size={24} weight="duotone" />
            </div>
            <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8]">
              Overview
            </span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold !text-black mb-8">
            What Is THE FLOW?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <p className="font-sans text-lg sm:text-xl !text-black font-light leading-relaxed mb-0">
              THE FLOW is a developmental framework that integrates emotional awareness, identity development, creative expression, reflection, and intentional action into one unified model. It helps people understand how thoughts, emotions, identity, creativity, relationships, and decisions work together to shape growth.
            </p>

            <div className="bg-white border-l-4 border-[#18A0A8] p-8 shadow-md rounded-r-[10px] relative">
              <Info size={32} weight="fill" className="text-[#18A0A8]/20 absolute top-4 right-4" />
              <p className="font-sans text-lg sm:text-xl italic !text-black/80 font-light mb-0 leading-relaxed">
                "Everything in life is connected. Our thoughts influence our feelings. Our feelings influence our choices. Our choices influence our actions. Our actions influence our future."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. Why It Exists & Who It's For ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Why It Exists */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#163A5F]/10 flex items-center justify-center text-[#163A5F]">
                <Target size={24} weight="duotone" />
              </div>
              <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#163A5F]">
                Why It Exists
              </span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">
              Why THE FLOW Exists
            </h2>
            <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed mb-8">
              THE FLOW exists to address the real challenges people face as they grow — and to give them a framework for working through them with awareness and purpose.
            </p>
            
            <h4 className="font-mono text-xs tracking-widest font-extrabold uppercase text-slate-400 mb-4 border-b border-slate-100 pb-2">
              Challenges It Addresses
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Emotional regulation", "Identity", "Mental wellness", "Healthy relationships", 
                "Responsible technology use", "Critical thinking", "Resilience", "Purposeful decision-making"
              ].map(item => (
                <div key={item} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-[10px] border border-slate-100">
                  <CheckCircle size={18} weight="fill" className="text-[#18A0A8] shrink-0 mt-0.5" />
                  <span className="font-sans text-sm font-medium !text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017]">
                <Users size={24} weight="duotone" />
              </div>
              <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#D4A017]">
                Who It's For
              </span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">
              Audiences We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
              {[
                "Students", "Parents", "Educators", "Schools", 
                "Community Organizations", "Mental Health Professionals", 
                "Leadership Programs", "Lifelong Learners"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 border border-slate-200/80 rounded-[10px] p-4 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                  <span className="font-sans font-semibold !text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* ══ 4. Flow Journey ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#163A5F] !text-white overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto relative z-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold !text-white mb-10">
            The Flow Journey
          </h2>
          
          <div className="max-w-4xl mx-auto text-left">
            <VerticalAccordion items={JOURNEY_STEPS_DATA} theme="dark" />
          </div>
        </div>
      </section>

      {/* ══ 5. Sample Tools & Formats ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Sample Tools */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#18A0A8]/10 flex items-center justify-center text-[#18A0A8]">
                <Wrench size={24} weight="duotone" />
              </div>
              <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8]">
                Curriculum
              </span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">
              Sample Tools
            </h2>
            
            <div className="bg-white border border-slate-200 rounded-[10px] p-6 shadow-sm mb-6">
              <h4 className="font-heading text-lg font-bold !text-black mb-2 flex items-center gap-2">
                <ListDashes size={20} className="text-slate-400" />
                Tools &amp; Practices
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-4">
                {[
                  "Inner Gravity™", "FLOW CHECK™", "Reflection Activities", 
                  "Creative Expression", "Assessments", "Discussion Guides"
                ].map(tool => (
                  <li key={tool} className="flex items-center gap-2 font-sans text-sm font-medium !text-black/80">
                    <span className="w-1.5 h-1.5 bg-[#18A0A8] rounded-full" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-100 border border-slate-200 border-dashed rounded-[10px] p-8 text-center flex flex-col items-center justify-center">
              <Info size={32} weight="duotone" className="text-slate-400 mb-3" />
              <h5 className="font-heading font-bold text-slate-700">Sample Tool &amp; Worksheet Preview</h5>
              <p className="font-sans text-sm text-slate-500 max-w-sm mt-2">
                Sample tools, worksheets, and the Inner Gravity™ graphic will appear here once the program officially launches.
              </p>
            </div>
          </div>

          {/* Program Formats */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50]">
                <Monitor size={24} weight="duotone" />
              </div>
              <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#4CAF50]">
                Delivery
              </span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold !text-black mb-6">
              Program Formats
            </h2>
            
            <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed mb-8">
              Ways to experience THE FLOW:
            </p>
            
            <div className="space-y-4">
              {[
                "In-Person Workshops", 
                "Professional Development", 
                "School Partnerships", 
                "Community Programs", 
                "Self-Paced Academy (Coming Soon)"
              ].map((format, idx) => (
                <div key={idx} className="flex items-center p-5 bg-white border border-slate-200/80 rounded-[10px] shadow-xs group hover:border-[#4CAF50]/40 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#4CAF50]/10 group-hover:text-[#4CAF50] transition-colors mr-4">
                    {idx + 1}
                  </div>
                  <span className="font-heading font-bold text-lg !text-black">{format}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* ══ 6. Resource Library ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-sm tracking-widest font-extrabold uppercase text-[#18A0A8] block mb-3">
              Resource Library
            </span>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black mb-6">
              Downloadable Content
            </h2>
            <p className="font-sans text-lg !text-black font-light leading-relaxed">
              Preview downloadable worksheets, videos, discussion guides, and companion resources that support THE FLOW.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Program Overview (PDF)", 
              "Sample Worksheet", 
              "Discussion Guide", 
              "Facilitator Overview", 
              "Resource Library Preview"
            ].map(resource => (
              <div key={resource} className="bg-[#F8FAFC] border border-slate-200 rounded-[10px] p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-[10px] bg-white shadow-sm flex items-center justify-center text-[#163A5F]">
                    <DownloadSimple size={24} weight="duotone" />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-0.5 rounded-sm bg-white">
                    PDF / DOC
                  </span>
                </div>
                <h4 className="font-heading text-lg font-bold !text-black">{resource}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. FAQ ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3.5xl sm:text-4xl font-extrabold !text-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {FAQ.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className={`border border-slate-200 rounded-[10px] bg-white overflow-hidden transition-all duration-300 ${isOpen ? "shadow-md border-[#18A0A8]/30" : "shadow-sm hover:border-slate-300"}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <span className={`font-heading text-lg font-bold pr-4 ${isOpen ? "text-[#18A0A8]" : "!text-black"}`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-[#18A0A8]/10 text-[#18A0A8] rotate-180" : "bg-slate-100 text-slate-400"}`}>
                      <CaretDown size={16} weight="bold" />
                    </div>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="font-sans text-base !text-black/80 font-light leading-relaxed mb-0">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 8. Future Vision & Book ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-white relative">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Future Vision */}
          <div className="bg-[#163A5F] rounded-[10px] p-10 sm:p-12 !text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#18A0A8]/30 via-transparent to-transparent blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-[10px] bg-white/10 flex items-center justify-center !text-white backdrop-blur-sm">
                <RocketLaunch size={28} weight="duotone" />
              </div>
              <h2 className="font-heading text-3xl font-extrabold !text-white m-0">
                Future Vision
              </h2>
            </div>
            
            <p className="font-sans text-lg !text-white/90 font-light leading-relaxed mb-10 relative z-10">
              THE FLOW is growing into a full learning platform. Reserve menu space for what's coming.
            </p>
            
            <div className="relative z-10">
              <h4 className="font-mono text-xs tracking-widest font-extrabold uppercase text-[#18A0A8] mb-4 border-b border-white/10 pb-2">
                COMING SOON
              </h4>
              <ul className="space-y-4">
                {[
                  "Self-paced academy", 
                  "Facilitator resources", 
                  "Certification pathway", 
                  "Companion book"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 font-sans text-base font-medium !text-white">
                    <CheckCircle size={20} className="text-[#18A0A8]" weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Book THE FLOW CTA */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-[#18A0A8]/10 border border-[#18A0A8]/30 text-[#18A0A8] w-fit mb-4">
              <span className="font-mono text-xs tracking-widest font-extrabold uppercase">
                BOOK THE FLOW
              </span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold !text-black mb-6">
              Ready to <span className="heading-italic text-[#18A0A8] font-normal">Connect?</span>
            </h2>
            
            <p className="font-sans text-lg !text-black/80 font-light leading-relaxed mb-8">
              THE FLOW is available for workshops, speaking engagements, consulting, and training. Request program information, schedule a consultation, or book a workshop today.
            </p>

            <Link href="/Contact" className="no-underline w-fit">
              <Button variant="primary">Explore Partnership Opportunities</Button>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
