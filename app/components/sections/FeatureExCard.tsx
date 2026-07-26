"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkle } from "@phosphor-icons/react";
import Button from "@/app/components/Button";

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  what: string;
  teaches: string;
  serves: string;
  media: string[];
  path: string;
  beta?: boolean;
  comingSoon?: boolean;
}

interface FeatureExCardProps {
  project: ProjectItem;
}

export default function FeatureExCard({ project }: FeatureExCardProps) {
  const [imgError, setImgError] = useState(false);

  // Expected icon filepath in public/featureExIcon/
  const iconPath = `/featureExIcon/${project.id}.png`;

  return (
    <div className="bg-white rounded-[10px] p-6 lg:p-7 border border-slate-200/80 shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          {/* Icon Container with Fallback */}
          <div className="w-12 h-12 rounded-[5px] bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/25 flex items-center justify-center text-[var(--color-secondary)] shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {!imgError ? (
              <img
                src={iconPath}
                alt={`${project.title} icon`}
                className="w-full h-full object-contain p-2"
                onError={() => setImgError(true)}
              />
            ) : (
              <Sparkle className="w-6 h-6 text-[var(--color-secondary)]" />
            )}
          </div>

          {/* Badges */}
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {project.beta && (
              <span className="font-mono text-[9.5px] font-bold bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                BETA
              </span>
            )}
            {project.comingSoon && (
              <span className="font-mono text-[9.5px] font-bold bg-[var(--color-tertiary)]/20 text-[#a37909] border border-[var(--color-tertiary)]/40 px-2 py-0.5 rounded-full uppercase tracking-wider">
                SOON
              </span>
            )}
            <span className="font-mono text-[10px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-slate-200">
              {project.category}
            </span>
          </div>
        </div>

        {/* Title & Type */}
        <h3 className="font-heading text-xl font-extrabold !text-[var(--color-primary)] mb-1 tracking-tight group-hover:text-[var(--color-secondary-dark)] transition-colors leading-snug">
          {project.title}
        </h3>
        
        <div className="font-mono text-xs font-bold text-[var(--color-secondary-dark)] tracking-wider uppercase mb-3.5">
          {project.type}
        </div>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Specifications Grid */}
        <div className="bg-slate-50/80 rounded-[5px] p-3.5 border border-slate-200/70 mb-5 space-y-2 text-xs font-sans">
          <div className="flex items-start justify-between gap-2">
            <span className="font-bold text-[var(--color-primary)] shrink-0">What:</span>
            <span className="text-slate-600 text-right">{project.what}</span>
          </div>
          <div className="flex items-start justify-between gap-2">
            <span className="font-bold text-[var(--color-primary)] shrink-0">Teaches:</span>
            <span className="text-slate-600 text-right">{project.teaches}</span>
          </div>
          <div className="flex items-start justify-between gap-2">
            <span className="font-bold text-[var(--color-primary)] shrink-0">Serves:</span>
            <span className="text-slate-600 text-right">{project.serves}</span>
          </div>
        </div>

        {/* Media Tag Pills */}
        {project.media && project.media.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.media.map((tag) => (
              <span
                key={tag}
                className="font-sans text-[10.5px] font-semibold bg-white border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Button */}
      <div className="pt-2">
        <Link href={project.path} className="no-underline block w-full">
          <Button variant="secondary" size="small" className="w-full justify-center">
            More about {project.title.length > 20 ? project.id.toUpperCase().replace("-", " ") : project.title}
          </Button>
        </Link>
      </div>
    </div>
  );
}
