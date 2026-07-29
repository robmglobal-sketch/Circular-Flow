"use client";

import React, { useState, useEffect } from "react";
import heroImages from "../data/hero-images.json";

interface HeroImageGridProps {
  className?: string;
}

export default function HeroImageGrid({ className = "" }: HeroImageGridProps) {
  const [randomImages, setRandomImages] = useState<string[]>([]);

  useEffect(() => {
    // Create a shuffled copy of the images array and pick the first 3
    const shuffled = [...heroImages].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 3));
  }, []);

  return (
    <div className={`relative w-full h-[320px] sm:h-[420px] lg:h-[480px] grid grid-cols-2 gap-4 sm:gap-6 ${className}`}>
      {randomImages.length === 3 ? (
        <>
          {/* Image 1 (Left, tall) */}
          <div className="relative w-full h-full row-span-2 rounded-[10px] overflow-hidden group border border-slate-200/50 bg-slate-50">
            <img
              src={randomImages[0]}
              alt="Hero Highlight 1"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Image 2 (Top Right) */}
          <div className="relative w-full h-full rounded-[10px] overflow-hidden group border border-slate-200/50 bg-slate-50">
            <img
              src={randomImages[1]}
              alt="Hero Highlight 2"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Image 3 (Bottom Right) */}
          <div className="relative w-full h-full rounded-[10px] overflow-hidden group border border-slate-200/50 bg-slate-50">
            <img
              src={randomImages[2]}
              alt="Hero Highlight 3"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </>
      ) : (
        // Loading placeholders
        <>
          <div className="w-full h-full row-span-2 rounded-[10px] bg-slate-100 animate-pulse border border-slate-200/50" />
          <div className="w-full h-full rounded-[10px] bg-slate-100 animate-pulse border border-slate-200/50" />
          <div className="w-full h-full rounded-[10px] bg-slate-100 animate-pulse border border-slate-200/50" />
        </>
      )}
    </div>
  );
}
