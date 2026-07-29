"use client";

import React from "react";
import Link from "next/link";
import { CaretRight, House } from "@phosphor-icons/react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav className={`flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 font-sans mb-6 ${className}`}>
      <Link href="/" className="hover:text-[var(--color-primary)] transition-colors flex items-center justify-center">
        <House size={16} weight="duotone" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <CaretRight size={14} className="text-slate-400 shrink-0" />
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-[var(--color-primary)] transition-colors font-medium tracking-wide"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-800 font-bold tracking-wide">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
