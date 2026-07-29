"use client";

import React from "react";

interface CardItem {
  title: string;
  desc?: string;
  tag?: string;
}

interface CardsSectionProps {
  accent: string;
  eyebrow: string;
  icon?: React.ComponentType<{ size?: number; weight?: any; className?: string; style?: React.CSSProperties }>;
  title: string;
  intro: string;
  cards: CardItem[];
  numbered?: boolean;
}

export default function CardsSection({
  accent,
  eyebrow,
  icon: Icon,
  title,
  intro,
  cards,
  numbered,
}: CardsSectionProps) {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            {Icon && <Icon size={20} style={{ color: accent }} />}
            <span
              className="font-mono text-xs tracking-widest uppercase font-extrabold"
              style={{ color: accent }}
            >
              {eyebrow}
            </span>
          </div>
          <h2 className="font-heading text-4xl font-extrabold text-black tracking-tight">
            {title}
          </h2>
          <p className="font-sans text-lg text-slate-600 leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 relative overflow-hidden group"
            >
              {/* Optional Top Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: accent }}
              />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {numbered && (
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: `${accent}15`, color: accent }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  )}
                  {card.tag && (
                    <span
                      className="font-mono text-xs font-extrabold uppercase px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: `${accent}15`, color: accent }}
                    >
                      {card.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-extrabold text-black leading-snug">
                  {card.title}
                </h3>

                {card.desc && (
                  <p className="font-sans text-sm text-slate-600 leading-relaxed pt-1">
                    {card.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
