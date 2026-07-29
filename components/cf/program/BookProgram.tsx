"use client";

import React from "react";
import Link from "next/link";
import Button from "@/app/components/Button";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";

interface BookProgramProps {
  accent: string;
  program: string;
  eyebrow: string;
  title: string;
  intro: string;
  formats: string[];
  contacts: string[];
}

export default function BookProgram({
  accent,
  program,
  eyebrow,
  title,
  intro,
  formats,
  contacts,
}: BookProgramProps) {
  return (
    <section id="book" className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-900 text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span
              className="font-mono text-xs tracking-widest uppercase font-extrabold"
              style={{ color: accent }}
            >
              {eyebrow}
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {title}
            </h2>
            <p className="font-sans text-lg text-slate-300 leading-relaxed max-w-2xl">
              {intro}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
              Available Enrollment Pathways
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {formats.map((fmt, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle size={18} style={{ color: accent }} weight="fill" className="shrink-0" />
                  <span className="font-sans text-sm text-slate-200 font-medium">
                    {fmt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: CTA Box */}
        <div className="lg:col-span-5">
          <div className="bg-white/5 rounded-[20px] p-8 border border-white/15 backdrop-blur-sm space-y-6">
            <h3 className="font-heading text-2xl font-extrabold text-white">
              Get Started with {program}
            </h3>
            <p className="font-sans text-sm text-slate-300">
              Select your inquiry option below to connect with the Circular Flow team.
            </p>

            <div className="space-y-3">
              {contacts.map((contact, idx) => (
                <Link key={idx} href="/Contact" className="block no-underline">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 group">
                    <span className="font-sans text-sm font-semibold text-white">
                      {contact}
                    </span>
                    <ArrowRight size={18} className="text-white/60 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/Contact" className="no-underline w-full block">
                <Button variant="primary" className="w-full justify-center">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
