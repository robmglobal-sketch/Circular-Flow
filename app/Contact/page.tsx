"use client";

import React from "react";
import ContactSection from "@/app/components/sections/contactsection";
import {
  MapPin,
  Clock,
  Envelope,
  Buildings,
  NavigationArrow,
  Sparkle,
  Globe,
  ChatCircleDots,
} from "@phosphor-icons/react";
import HeroImageGrid from "../components/HeroImageGrid";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen font-sans text-black relative overflow-hidden">
      {/* Ambient decorative lighting */}
      <div className="absolute top-10 right-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/8 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      {/* ══ Hero Section ══ */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] border-b border-slate-200/80 relative z-10">
        <div className="absolute inset-0 pointer-events-none z-0 hero-grid-pattern" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="flex flex-col items-start">
            {/* Paintbrush Header Badge */}
          <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 mb-6 select-none group">
            <svg
              className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
              viewBox="0 0 180 44"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M12 8 C40 3, 100 2, 168 6 C178 10, 176 28, 166 34 C130 39, 60 41, 10 37 C1 32, 2 14, 12 8 Z"
              />
              <path
                fill="currentColor"
                opacity="0.5"
                d="M6 14 C30 9, 100 5, 174 10 C182 18, 172 32, 158 36 C100 40, 40 38, 14 32 C4 26, 0 18, 6 14 Z"
              />
            </svg>
            <ChatCircleDots size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)] animate-pulse" />
            <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="font-heading text-[40px] sm:text-5xl lg:text-6xl font-extrabold !text-black tracking-tight leading-[1.14] max-w-4xl mb-6">
            We&apos;d Love to Connect With{" "}
            <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
              You
            </span>
            .
          </h1>

          <p className="font-sans text-base sm:text-lg lg:text-xl !text-black font-light max-w-3xl leading-relaxed mb-0">
            Have a question about our creative workshops, online learning platform, or community mentorship? We invite educators, community centers, mentors, and students to reach out and start a conversation.
          </p>
          </div>
          <HeroImageGrid />
        </div>
      </section>

      {/* ══ Integrated Contact & Partnership Section ══ */}
      <div className="relative z-10">
        <ContactSection />
      </div>

      {/* ══ Interactive Location & Google Map Showcase ══ */}
      <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-[#F8FAFC] border-t border-slate-200/90 relative z-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Header Row */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-secondary)]/15 border border-[var(--color-secondary)]/30 text-[var(--color-secondary-dark)] mb-3">
              <NavigationArrow size={16} weight="fill" />
              <span className="font-mono text-xs font-extrabold tracking-widest uppercase">
                COMMUNITY FOOTPRINT
              </span>
            </div>

            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold !text-black tracking-tight leading-[1.16]">
              Rooted in{" "}
              <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
                Detroit
              </span>
              , Reaching Nationwide
            </h2>
            <p className="font-sans text-base sm:text-lg !text-black font-light mt-4 mb-0 leading-relaxed">
              Our non-profit initiatives, creative workshops, and community services thrive across Detroit, Michigan and Illinois building bridge connections across schools and neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-stretch">
            {/* Left Location Credentials & Information Cards */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="bg-white border border-slate-200/90 rounded-[10px] p-8 sm:p-9 shadow-sm flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[10px] bg-[var(--color-secondary)]/12 border border-[var(--color-secondary)]/25 text-[var(--color-secondary)] flex items-center justify-center mb-6 shadow-2xs">
                    <MapPin size={26} weight="bold" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold !text-black mb-2">
                    Primary Headquarters
                  </h3>
                  <p className="font-sans text-base text-slate-600 font-light leading-relaxed mb-6">
                    R. Mitchell Youth &amp; Community Services<br />
                    Circular Flow Productions LLC<br />
                    <strong className="!text-black font-bold">Detroit, Michigan</strong>
                  </p>

                  <div className="h-px w-full bg-slate-100 my-6" />

                  <div className="space-y-4 font-sans text-sm !text-black/80">
                    <div className="flex items-start gap-3.5">
                      <Buildings size={18} weight="duotone" className="text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-mono text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
                          REGIONAL COVERAGE
                        </div>
                        <div className="font-heading text-sm font-bold !text-black">
                          Michigan &amp; Illinois Operations
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Clock size={18} weight="duotone" className="text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-mono text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
                          OFFICE HOURS
                        </div>
                        <div className="font-heading text-sm font-bold !text-black">
                          Monday – Friday: 9:00 AM – 6:00 PM EST
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Globe size={18} weight="duotone" className="text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-mono text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
                          DIGITAL ECOSYSTEM
                        </div>
                        <div className="font-heading text-sm font-bold !text-black">
                          Online Learning Center Nationwide Access
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-[10px] bg-[#163A5F] !text-white flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-3">
                    <Sparkle size={20} weight="fill" className="text-[#D4A017] animate-pulse" />
                    <span className="font-mono text-xs uppercase font-extrabold tracking-wider !text-white">
                      501(c)(3) Nonprofit Status
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Google Map Container */}
            <div className="lg:col-span-8">
              <div className="w-full h-full min-h-[440px] lg:min-h-[540px] relative rounded-[10px] overflow-hidden border-2 border-slate-200/90 shadow-2xl bg-slate-100 group">
                {/* Google Maps Embedded Frame targeting Detroit, Michigan */}
                <iframe
                  title="Circular Flow Headquarters Map - Detroit, Michigan"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188619.04169720176!2d-83.2081519781846!3d42.35261895697368!2m3!1f0!2f0!3f0!3m2!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C%20MI!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "100%" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full filter saturate-110 group-hover:scale-[1.01] transition-all duration-700"
                />

                {/* Floating Glassmorphic Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 pointer-events-none z-10 flex items-center justify-end">
                  <div className="bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-[10px] shadow-xl border border-slate-200 pointer-events-auto flex items-center gap-3 max-w-sm">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-secondary)] shrink-0 animate-ping" />
                    <div>
                      <div className="font-heading text-sm font-extrabold text-slate-900">
                        Detroit Headquarters
                      </div>
                      <div className="font-mono text-[11px] text-slate-500 font-medium">
                        Active Workshops &amp; Community Rallies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
