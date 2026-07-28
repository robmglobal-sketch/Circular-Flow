"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Atom, Sparkle, ArrowRight, Compass, Plant, Planet, Info } from "@phosphor-icons/react";
import Button from "@/app/components/Button";

interface NodeItem {
  id: string;
  label: string;
  tag: string;
  angle: number;
  color: string;
  description: string;
  path: string;
}

const NODES: NodeItem[] = [
  { id: "detropolis", label: "DETROPOLIS", tag: "Film Series", angle: 0, color: "#18A0A8", description: "AI-animated sci-fi series — 6 episodes, Detroit-inspired storytelling", path: "/mediaLibrary#detropolis" },
  { id: "finding-myself", label: "FINDING MYSELF", tag: "Book · Play · Music", angle: 30, color: "#18A0A8", description: "YA novel, school play, full EP — SEL themes for youth", path: "/mediaLibrary#finding-myself" },
  { id: "flow-room", label: "THE FLOW ROOM", tag: "Animated Talk Show", angle: 60, color: "#18A0A8", description: "Animated talk show series — youth voices, music, AI animation & real conversation", path: "/mediaLibrary#the-flow-room" },
  { id: "foil-film", label: "FOIL TO FILM", tag: "Workshop", angle: 90, color: "#18A0A8", description: "Flagship hands-on creativity workshop — kids ages 7–11, AI storytelling", path: "/community" },
  { id: "decode-mask", label: "DECODE THE MASK", tag: "Film Series", angle: 120, color: "#18A0A8", description: "Social issue video series — identity, mental health, community reflection", path: "/mediaLibrary#decode-mask" },
  { id: "the-way", label: "THE WAY", tag: "Music · Mentoring", angle: 150, color: "#18A0A8", description: "Music project and mentoring story — youth & foster care connection", path: "/mediaLibrary#the-way" },
  { id: "gamble-love", label: "GAMBLE OF LOVE", tag: "Book · Music", angle: 180, color: "#18A0A8", description: "Relationship workbook and original song — social-emotional learning", path: "/mediaLibrary#gamble-love" },
  { id: "lead", label: "LEAD", tag: "Program · Beta", angle: 210, color: "#2E7D32", description: "Leadership, Expression, Arts & Diversity — structured youth program", path: "/programs/lead" },
  { id: "rize-up", label: "RIZE UP", tag: "Program · Beta", angle: 240, color: "#2E7D32", description: "Youth empowerment and personal development curriculum", path: "/programs/rize-up" },
  { id: "the-flow-center", label: "THE FLOW CENTER", tag: "Program · Beta", angle: 270, color: "#2E7D32", description: "Therapeutic online course — guided flow practice for emotional wellness & growth", path: "/programs/the-flow-center" },
  { id: "sdd", label: "SDD DEVICE", tag: "Innovation · Coming Soon", angle: 300, color: "#B8860B", description: "Cutting-edge innovation in development — coming soon", path: "/programs#sdd" },
  { id: "scholarship", label: "CF SCHOLARSHIP", tag: "Emerging Creative", angle: 330, color: "#B8860B", description: "The Circular Flow Emerging Creative Scholarship — honoring legacy through art", path: "/programs#scholarship" },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: Number((cx + r * Math.cos(rad)).toFixed(4)),
    y: Number((cy + r * Math.sin(rad)).toFixed(4)),
  };
}

export default function EcosystemSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const size = isMobile ? 340 : 540;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = isMobile ? 135 : 215;
  const innerR = isMobile ? 55 : 75;

  const hoveredNode = NODES.find((n) => n.id === hovered);

  return (
    <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white text-[var(--color-primary)] relative overflow-hidden border-t border-[var(--color-border)]">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-secondary)]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[var(--color-tertiary)]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        
        {/* ══ Header ══ */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-16">
          <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 mb-5 select-none group">
            {/* Paintbrush stroke background SVG */}
            <svg
              className="absolute inset-0 w-full h-full text-[var(--color-secondary)]/20 pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
              viewBox="0 0 240 44"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M12 8 C40 3, 110 2, 228 6 C238 10, 236 28, 226 34 C170 39, 70 41, 10 37 C1 32, 2 14, 12 8 Z"
              />
              <path
                fill="currentColor"
                opacity="0.5"
                d="M6 14 C30 9, 140 5, 234 10 C242 18, 232 32, 218 36 C150 40, 50 38, 14 32 C4 26, 0 18, 6 14 Z"
              />
            </svg>
            <Atom size={18} weight="bold" className="relative z-10 text-[var(--color-secondary-dark)]" />
            <span className="relative z-10 font-heading text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[var(--color-primary)]">
              Interactive Ecosystem Map
            </span>
          </div>

          <h2 className="font-heading text-3.5xl sm:text-5xl lg:text-6xl font-extrabold !text-black tracking-tight leading-[1.15] max-w-4xl">
            The{" "}
            <span className="heading-italic text-[var(--color-secondary)] font-normal inline-block">
              Circular Flow
            </span>{" "}
            Universe
          </h2>
          
          <p className="font-sans text-base sm:text-lg !text-black font-light max-w-2xl mt-4 mb-0">
            Every project, program, and creation flows from one singular mission. Explore how each branch connects to the whole.
          </p>
        </div>

        {/* ══ Main Interactive Grid ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left / Center: Interactive SVG Nexus */}
          <div className="lg:col-span-7 flex justify-center relative">
            <div className="relative p-2 sm:p-6  rounded-[10px]   overflow-hidden">
              <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="overflow-visible select-none"
                role="img"
                aria-label="Circular Flow Ecosystem — interactive project map"
              >
                {/* Orbital rings */}
                <circle cx={cx} cy={cy} r={outerR} stroke="rgba(24,160,168,0.22)" strokeWidth="1.5" fill="none" />
                <circle cx={cx} cy={cy} r={outerR * 0.72} stroke="rgba(24,160,168,0.12)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <circle cx={cx} cy={cy} r={innerR + 22} stroke="rgba(212,160,23,0.3)" strokeWidth="1" fill="none" strokeDasharray="3 6" />

                {/* Connection lines */}
                {NODES.map((node) => {
                  const pos = polarToCartesian(cx, cy, outerR, node.angle);
                  const isHov = hovered === node.id;
                  return (
                    <line
                      key={`line-${node.id}`}
                      x1={cx}
                      y1={cy}
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isHov ? node.color : "rgba(22,58,95,0.12)"}
                      strokeWidth={isHov ? 2.5 : 1}
                      style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                    />
                  );
                })}

                {/* Center hub */}
                <circle cx={cx} cy={cy} r={innerR} fill="#163A5F" stroke="#18A0A8" strokeWidth="2.5" className="shadow-md" />
                <circle cx={cx} cy={cy} r={innerR - 10} fill="none" stroke="rgba(24,160,168,0.4)" strokeWidth="1" strokeDasharray="3 4" />
                <text x={cx} y={cy - 7} textAnchor="middle" fill="#18A0A8" fontFamily="var(--font-dm-sans), sans-serif" fontSize={isMobile ? "9" : "11"} fontWeight="800" letterSpacing="2">
                  CIRCULAR
                </text>
                <text x={cx} y={cy + 9} textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-dm-sans), sans-serif" fontSize={isMobile ? "9" : "11"} fontWeight="800" letterSpacing="2">
                  FLOW
                </text>

                {/* Node dots and labels */}
                {NODES.map((node) => {
                  const pos = polarToCartesian(cx, cy, outerR, node.angle);
                  const isHov = hovered === node.id;
                  const isBeta = node.tag.includes("Beta");
                  const isSoon = node.tag.includes("Soon");
                  const labelPos = polarToCartesian(cx, cy, outerR + (isMobile ? 22 : 30), node.angle);
                  const dotSize = isMobile ? 6 : 8;

                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer"
                      onClick={() => router.push(node.path)}
                      onMouseEnter={() => setHovered(node.id)}
                      onMouseLeave={() => setHovered(null)}
                      tabIndex={0}
                      role="button"
                      aria-label={`${node.label} — ${node.tag}`}
                      onKeyDown={(e) => e.key === "Enter" && router.push(node.path)}
                    >
                      {/* Outer pulse animation on hover */}
                      {isHov && (
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={dotSize + 9}
                          fill="none"
                          stroke={node.color}
                          strokeWidth="2"
                          opacity="0.6"
                          className="animate-ping"
                        />
                      )}
                      
                      {/* Base Dot */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHov ? dotSize + 2 : dotSize}
                        fill={isHov ? node.color : "#FFFFFF"}
                        stroke={node.color}
                        strokeWidth={isHov ? 3 : 2}
                        style={{ transition: "all 0.3s" }}
                      />

                      {/* Status indicator dot */}
                      {(isBeta || isSoon) && (
                        <circle
                          cx={pos.x + dotSize - 1}
                          cy={pos.y - dotSize + 1}
                          r="3.5"
                          fill={isBeta ? "#2E7D32" : "#B8860B"}
                          stroke="#FFFFFF"
                          strokeWidth="1"
                        />
                      )}

                      {/* Desktop Orbital Label */}
                      {!isMobile && (
                        <text
                          x={labelPos.x}
                          y={labelPos.y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={isHov ? node.color : "#163A5F"}
                          fontFamily="var(--font-inter), sans-serif"
                          fontSize="9.5"
                          fontWeight={isHov ? "700" : "600"}
                          letterSpacing="0.5"
                          style={{ transition: "fill 0.3s, font-weight 0.3s", pointerEvents: "none" }}
                        >
                          {node.label.split(" ").map((word, i, arr) => (
                            <tspan key={i} x={labelPos.x} dy={i === 0 ? (arr.length > 1 ? -6 : 0) : 11}>
                              {word}
                            </tspan>
                          ))}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right: Dynamic Info Panel Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {hoveredNode ? (
              <div className="bg-gradient-to-br from-[#163A5F] to-[#0f2a45] text-white rounded-[10px] p-8 sm:p-10 shadow-md border border-white/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-[var(--color-secondary)]/20 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ background: hoveredNode.color }} />
                  <span className="font-mono text-xs tracking-widest font-bold uppercase" style={{ color: hoveredNode.color }}>
                    {hoveredNode.tag}
                  </span>
                </div>

                <h3 className="font-heading text-2.5xl sm:text-3xl font-extrabold !text-white mb-4 tracking-tight">
                  {hoveredNode.label}
                </h3>

                <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                  {hoveredNode.description}
                </p>

                <Link href={hoveredNode.path} className="no-underline inline-block">
                  <Button variant="primary" size="small" className="!px-8 sm:!px-10">
                    Click There To More 
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="bg-slate-50/90 rounded-[10px] p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <Info size={20} weight="fill" className="text-[var(--color-secondary)]" />
                    <span className="font-mono text-xs text-[var(--color-secondary-dark)] tracking-widest font-bold uppercase">
                      Hover to Explore
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold !text-black mb-4 tracking-tight">
                    Interactive Project Navigator
                  </h3>

                  <p className="font-sans !text-black font-light text-base leading-relaxed mb-8">
                    Hover over any node on the nexus orbital map to inspect its story, program status, and creative branch.
                  </p>
                </div>

                {/* Legend Pills */}
                <div className="flex flex-wrap gap-3 border-t border-slate-200/80 pt-6">
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#18A0A8]" />
                    <span className="font-sans text-xs font-semibold text-[#163A5F]">Projects &amp; Content</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2E7D32]" />
                    <span className="font-sans text-xs font-semibold text-[#163A5F]">Programs (Beta)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B8860B]" />
                    <span className="font-sans text-xs font-semibold text-[#163A5F]">Coming Soon / Awards</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick-Access Node Pills List */}
            <div className="mt-8">
              <div className="font-mono text-xs text-[var(--color-primary)]/70 uppercase tracking-wider font-bold mb-3">
                All Ecosystem Branches ({NODES.length})
              </div>
              <div className="flex flex-wrap gap-2">
                {NODES.map((node) => (
                  <button
                    key={node.id}
                    onClick={() => router.push(node.path)}
                    onMouseEnter={() => setHovered(node.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`text-left px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      hovered === node.id
                        ? "bg-[#163A5F] text-white border-[#163A5F]"
                        : "bg-white text-[#163A5F] border-slate-200 hover:border-[var(--color-secondary)]"
                    }`}
                  >
                    {node.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
