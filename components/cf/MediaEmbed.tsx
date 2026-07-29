"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

// ─────────────────────────────────────────────
// YouTube Click-to-Play Embed
// ─────────────────────────────────────────────
interface YTEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YTEmbed({ videoId, title, className = "" }: YTEmbedProps) {
  const [playing, setPlaying] = useState(false);

  const activate = () => setPlaying(true);
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
    }
  };

  return (
    <div
      className={`relative w-full aspect-video rounded-[12px] overflow-hidden bg-slate-900 ${className}`}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          role="button"
          tabIndex={0}
          aria-label={`Play video: ${title}`}
          onClick={activate}
          onKeyDown={handleKey}
          className="yt-embed absolute inset-0 w-full h-full cursor-pointer group"
        >
          {/* Thumbnail */}
          <img
            className="yt-thumb absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          {/* Play button */}
          <span
            aria-hidden="true"
            className="yt-play-btn absolute inset-0 flex items-center justify-center"
          >
            <span className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-2xl">
              <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1 text-slate-900">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          </span>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Audio Card
// ─────────────────────────────────────────────
interface AudioCardProps {
  src: string;
  title: string;
  subtitle?: string;
  accent?: string;
}

export function AudioCard({ src, title, subtitle, accent = "#18A0A8" }: AudioCardProps) {
  return (
    <div
      className="bg-white rounded-[12px] border border-slate-200 p-5 shadow-sm space-y-3"
      style={{ borderLeft: `4px solid ${accent}` }}
    >
      <div className="space-y-0.5">
        <p className="font-heading text-sm font-extrabold text-slate-900 leading-snug">{title}</p>
        {subtitle && (
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {subtitle}
          </p>
        )}
      </div>
      <audio
        controls
        preload="none"
        className="w-full h-10 accent-[var(--accent)]"
        style={{ "--accent": accent } as React.CSSProperties}
        aria-label={`Audio: ${title}`}
      >
        <source src={src} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

// ─────────────────────────────────────────────
// Video Grid — responsive grid of YTEmbeds with titles
// ─────────────────────────────────────────────
interface VideoItem {
  id: string;
  title: string;
  subtitle?: string;
}

interface VideoGridProps {
  videos: VideoItem[];
  accent?: string;
  cols?: 1 | 2 | 3;
}

export function VideoGrid({ videos, accent = "#18A0A8", cols = 2 }: VideoGridProps) {
  const gridCols =
    cols === 1
      ? "grid-cols-1"
      : cols === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid ${gridCols} gap-5`}>
      {videos.map((v) => (
        <div key={v.id} className="space-y-2">
          <YTEmbed videoId={v.id} title={v.title} />
          <div>
            <p className="font-sans text-sm font-semibold text-slate-800 leading-snug">{v.title}</p>
            {v.subtitle && (
              <p
                className="font-mono text-[10px] font-bold uppercase tracking-widest"
                style={{ color: accent }}
              >
                {v.subtitle}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Gallery Lightbox — for community event tiles
// ─────────────────────────────────────────────
export interface GalleryTile {
  id: string;
  ytId?: string;
  imgSrc?: string;
  alt: string;
  label: string;
  sublabel?: string;
}

interface GalleryLightboxProps {
  tiles: GalleryTile[];
  accent?: string;
}

export function GalleryLightbox({ tiles, accent = "#18A0A8" }: GalleryLightboxProps) {
  const [active, setActive] = useState<GalleryTile | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {tiles.map((tile) => (
          <button
            key={tile.id}
            onClick={() => setActive(tile)}
            aria-label={`Open ${tile.label}`}
            className="group relative aspect-video rounded-[10px] overflow-hidden bg-slate-900 border border-slate-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ "--tw-ring-color": accent } as React.CSSProperties}
          >
            {tile.ytId && (
              <>
                <img
                  src={`https://img.youtube.com/vi/${tile.ytId}/mqdefault.jpg`}
                  alt={tile.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* play icon overlay */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="w-10 h-10 rounded-full bg-white/80 group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 ml-0.5 text-slate-900">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </span>
                </span>
              </>
            )}
            {tile.imgSrc && !tile.ytId && (
              <img
                src={tile.imgSrc}
                alt={tile.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
            {/* Label pill */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
              <p className="font-sans text-[10px] font-bold text-white leading-tight truncate">
                {tile.label}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div
            ref={dialogRef}
            className="w-full max-w-3xl bg-slate-900 rounded-[16px] overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <div>
                <p className="font-heading text-sm font-bold text-white">{active.label}</p>
                {active.sublabel && (
                  <p
                    className="font-mono text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: accent }}
                  >
                    {active.sublabel}
                  </p>
                )}
              </div>
              <button
                onClick={close}
                aria-label="Close video modal"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {/* Modal Content */}
            <div className="p-4">
              {active.ytId ? (
                <div className="aspect-video w-full rounded-[10px] overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${active.ytId}?autoplay=1&rel=0`}
                    title={active.label}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              ) : active.imgSrc ? (
                <img
                  src={active.imgSrc}
                  alt={active.alt}
                  className="w-full rounded-[10px] object-contain max-h-[70vh]"
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
