"use client";

import React, { useState } from "react";
import { 
  Handshake, 
  GraduationCap, 
  MicrophoneStage, 
  Lightning, 
  PaperPlaneRight, 
  User, 
  Envelope, 
  Buildings, 
  CheckCircle,
  ChatText
} from "@phosphor-icons/react";
import Button from "@/app/components/Button";

interface OptionItem {
  icon: React.ElementType;
  label: string;
  desc: string;
}

const OPTIONS: OptionItem[] = [
  { 
    icon: GraduationCap, 
    label: "Bring a Workshop to Your School", 
    desc: "Foil to Film, Photography 101, T-Shirt Design transformative hands-on experiences for K–12." 
  },
  { 
    icon: Handshake, 
    label: "Partner with Circular Flow", 
    desc: "Community organizations, non-profits, and institutions are invited to co-create programs." 
  },
  { 
    icon: MicrophoneStage, 
    label: "Book a Speaking Engagement", 
    desc: "Robert Mitchell Jr. speaks on creativity, community, AI in education, and youth development." 
  },
  { 
    icon: Lightning, 
    label: "Collaborate on Creative Technology", 
    desc: "Join Circular Flow in building the next generation of learning experiences powered by AI." 
  },
];

export default function PartnerSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "Bring a Workshop to Your School",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="partner" className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white text-black relative overflow-hidden">
      {/* Background ambient radial warmth */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ══ Left Column: Partnership Info & Options ══ */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Paintbrush Header Badge */}
            <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 mb-5 select-none group w-fit">
              <svg
                className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                viewBox="0 0 200 44"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M12 8 C40 3, 110 2, 188 6 C198 10, 196 28, 186 34 C140 39, 60 41, 10 37 C1 32, 2 14, 12 8 Z"
                />
                <path
                  fill="currentColor"
                  opacity="0.5"
                  d="M6 14 C30 9, 110 5, 194 10 C202 18, 192 32, 178 36 C120 40, 40 38, 14 32 C4 26, 0 18, 6 14 Z"
                />
              </svg>
              <Handshake size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)]" />
              <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
                Partner With Us
              </span>
            </div>

            <h2 className="font-heading text-3.5xl sm:text-4xl lg:text-5xl font-extrabold !text-black tracking-tight leading-[1.18] mb-4">
              Let's Build Something{" "}
              <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
                Together
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg !text-black font-light leading-relaxed mb-8">
              Whether you're a school principal, community organization, educator, or creative collaborator, there's a place for you in the Circular Flow ecosystem.
            </p>

            {/* Partnership Options Cards */}
            <div className="space-y-4">
              {OPTIONS.map((item) => {
                const IconComp = item.icon;

                return (
                  <div 
                    key={item.label} 
                    className="flex items-start gap-4 p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200/80 rounded-[10px] hover:border-[#18A0A8]/50 hover:bg-white hover:-translate-y-0.5 shadow-xs transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-[10px] bg-[var(--color-secondary)]/12 border border-[var(--color-secondary)]/25 flex items-center justify-center text-[var(--color-secondary-dark)] shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <IconComp size={22} weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm sm:text-base font-normal !text-black mb-1 tracking-tight">
                        {item.label}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm !text-black font-light leading-relaxed mb-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* ══ Right Column: Send A Message Form ══ */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[10px] p-6 sm:p-9 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <ChatText size={20} weight="bold" className="text-[var(--color-secondary)]" />
                <h3 className="font-heading text-sm font-extrabold tracking-wider text-[#18A0A8] uppercase mb-0">
                  Send A Message
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 px-4 text-center flex flex-col items-center justify-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle size={36} weight="fill" />
                  </div>
                  <h4 className="font-heading text-2xl font-extrabold !text-black mb-2">
                    Message Sent!
                  </h4>
                  <p className="font-sans text-sm !text-black font-light max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out. We have received your inquiry and will be in touch with you shortly.
                  </p>
                  <Button 
                    variant="primary" 
                    size="small" 
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#163A5F] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User size={18} weight="bold" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Robert Mitchell"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-[10px] text-black placeholder-slate-400 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#163A5F] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Envelope size={18} weight="bold" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="e.g. robert@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-[10px] text-black placeholder-slate-400 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* School / Organization Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#163A5F] uppercase tracking-wider mb-1.5">
                      School or Organization
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Buildings size={18} weight="bold" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Detroit Public Schools"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-[10px] text-black placeholder-slate-400 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Interest Selection Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-[#163A5F] uppercase tracking-wider mb-1.5">
                      Partnership Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-[10px] text-black focus:outline-none focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 transition-all cursor-pointer"
                    >
                      {OPTIONS.map((opt) => (
                        <option key={opt.label} value={opt.label}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#163A5F] uppercase tracking-wider mb-1.5">
                      How can we collaborate? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your students, space, timeline, or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-[10px] text-black placeholder-slate-400 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full justify-center text-base"
                    >
                      <span>Submit Inquiry</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
