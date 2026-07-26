"use client";

import React from "react";
import Link from "next/link";
import { InstagramLogo, YoutubeLogo, FacebookLogo, Envelope, MapPin } from "@phosphor-icons/react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#163A5F] text-white pt-16 sm:pt-20 overflow-hidden relative">
      {/* ── Top Section: Two-column split layout modeled after reference design ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 justify-between">
          
          {/* Brand Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-3.5 mb-6">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 shrink-0">
                  <circle cx="16" cy="16" r="14" stroke="var(--color-secondary)" strokeWidth="2" strokeDasharray="4 2"/>
                  <circle cx="16" cy="16" r="8" stroke="var(--color-tertiary)" strokeWidth="1.5" opacity="0.8"/>
                  <circle cx="16" cy="16" r="3.5" fill="var(--color-secondary)"/>
                </svg>
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-wide text-white">
                  CIRCULAR FLOW
                </span>
              </div>
              
              {/* Bio Paragraph */}
              <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                A creative innovation studio built on connection — connecting people, generations, art forms, technology, education, and community impact.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 font-sans text-xs sm:text-sm text-white/70">
                <MapPin size={16} weight="fill" className="text-[var(--color-secondary)] shrink-0" />
                <span>Detroit, Michigan</span>
              </div>
              <div className="flex items-center gap-2.5 font-sans text-xs sm:text-sm text-white/70">
                <Envelope size={16} weight="fill" className="text-[var(--color-secondary)] shrink-0" />
                <a href="mailto:contact@circularflow.com" className="text-white/70 hover:text-white transition-colors no-underline">
                  contact@circularflow.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns (Right) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-6 lg:pl-8">
            
            {/* Column 1: Explore */}
            <div>
              <div className="font-heading text-xs sm:text-sm font-semibold tracking-wider text-white uppercase mb-5 sm:mb-6">
                Explore
              </div>
              <ul className="space-y-3 p-0 m-0 list-none">
                {[
                  { label: "The Ecosystem", path: "/#ecosystem" },
                  { label: "Programs", path: "/programs" },
                  { label: "Media Library", path: "/media" },
                  { label: "About Robert Mitchell Jr.", path: "/about" },
                  { label: "Community Impact", path: "/#community" },
                  { label: "Innovation Studio", path: "/#innovation" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.path}
                      className="font-sans text-xs sm:text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors duration-200 no-underline block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Programs */}
            <div>
              <div className="font-heading text-xs sm:text-sm font-semibold tracking-wider text-white uppercase mb-5 sm:mb-6">
                Programs
              </div>
              <ul className="space-y-3 p-0 m-0 list-none">
                {[
                  { label: "LEAD", path: "/programs/lead", beta: true },
                  { label: "RIZE UP", path: "/programs/rize-up", beta: true },
                  { label: "The Flow Center", path: "/programs/the-flow-center", beta: true },
                  { label: "The Flow Room", path: "/media#the-flow-room" },
                  { label: "Foil to Film Workshop", path: "/#ecosystem" },
                  { label: "Detropolis", path: "/#ecosystem" },
                  { label: "Merch Store", path: "/programs", soon: true },
                  { label: "Scholarship", path: "/programs", soon: true },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-2 flex-wrap py-0.5">
                    <Link
                      href={item.path}
                      className="font-sans text-xs sm:text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors duration-200 no-underline"
                    >
                      {item.label}
                    </Link>
                    {item.beta && (
                      <span className="font-mono text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.5 rounded-full uppercase tracking-wider leading-none">
                        BETA
                      </span>
                    )}
                    {item.soon && (
                      <span className="font-mono text-[9px] font-bold bg-[var(--color-tertiary)]/20 text-[#fad061] border border-[var(--color-tertiary)]/40 px-1.5 py-0.5 rounded-full uppercase tracking-wider leading-none">
                        SOON
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Social (Formatted vertically like reference prototype) */}
            <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
              <div className="font-heading text-xs sm:text-sm font-semibold tracking-wider text-white uppercase mb-5 sm:mb-6">
                Social
              </div>
              <ul className="space-y-3 p-0 m-0 list-none">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 font-sans text-xs sm:text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors duration-200 no-underline py-0.5"
                  >
                    <InstagramLogo size={18} weight="fill" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 font-sans text-xs sm:text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors duration-200 no-underline py-0.5"
                  >
                    <YoutubeLogo size={18} weight="fill" />
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 font-sans text-xs sm:text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors duration-200 no-underline py-0.5"
                  >
                    <FacebookLogo size={18} weight="fill" />
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Middle Section: Copyright & Legal Links Bar ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mb-10 lg:mb-14">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-white/50 border-t border-white/10 pt-8 font-sans">
          <p className="mb-0 text-center sm:text-left text-white/50">
            © {year} Circular Flow Productions LLC — Robert Mitchell Jr., MSW, LCSW. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <span className="text-white/50">
              Design by{" "}
              <a
                href="https://webasi.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-secondary)] font-semibold hover:text-white transition-colors duration-200 no-underline"
              >
                WEBASI
              </a>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline-block" />
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-200 no-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-200 no-underline">
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom Giant Watermark Banner (Reference Prototype Style) ── */}
      <div className="relative w-full overflow-hidden flex justify-center items-end select-none pointer-events-none mt-4 -mb-2 sm:-mb-4 lg:-mb-6">
        {/* Giant Text */}
        <div className="text-[13.5vw] lg:text-[14vw] font-black tracking-tighter font-heading text-center leading-[0.82] w-full bg-gradient-to-r from-[var(--color-secondary)] via-[#3ddbe4] to-[var(--color-tertiary)] bg-clip-text text-transparent opacity-85 uppercase px-4">
          CIRCULAR FLOW
        </div>
        
        {/* Left & Right Fade Masks for Smooth Dark Edge Emergence */}
        <div className="absolute inset-y-0 left-0 w-[22%] sm:w-[25%] bg-gradient-to-r from-[#163A5F] via-[#163A5F]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[22%] sm:w-[25%] bg-gradient-to-l from-[#163A5F] via-[#163A5F]/80 to-transparent pointer-events-none" />
      </div>
    </footer>
  );
}
