"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { List, X, CaretDown } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/app/components/Button";

/* ──────────────────────────────────────────────
   Nav Data
   ────────────────────────────────────────────── */

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    dropdown: [
      { label: "About Circular Flow", path: "/about" },
      { label: "About the Founder", path: "/about#founder" },
      { label: "The CF Framework", path: "/about#cf-framework" },
      { label: "STARR Framework", path: "/about#starr" },
    ],
  },
  { label: "Programs", path: "/programs" },
  { label: "Media Library", path: "/media" },
  { label: "Community", path: "/#community" },
  { label: "Partner With Us", path: "/#partner" },
];

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Scroll listener ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ── Dropdown hover handlers with grace period ── */
  const openDropdown = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  /* ── Active check ── */
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path.split("#")[0]);
  };

  return (
    <nav
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => setIsNavHovered(false)}
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-[var(--color-surface)]
        transition-shadow duration-500 ease-[var(--ease-out-expo)]
        ${scrolled ? "shadow-sm" : ""}
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1440px] mx-auto px-[var(--space-lg)] lg:px-[var(--space-xl)] pt-3 lg:pt-4 h-20 lg:h-[5.5rem] flex items-center justify-between">

        {/* ══════ Logo ══════ */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Circular Flow"
            width={52}
            height={52}
            className="w-11 h-11 lg:w-[52px] lg:h-[52px] object-contain"
            priority
          />
        </Link>

        {/* ══════ Desktop Nav — centered ══════ */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative py-2"
              onMouseEnter={() => {
                if (item.dropdown) openDropdown(item.label);
              }}
              onMouseLeave={() => {
                if (item.dropdown) closeDropdown();
              }}
            >
              <Link
                href={item.path}
                className={`
                  flex items-center gap-1 no-underline
                  font-sans text-[0.85rem] font-medium
                  transition-colors duration-300 ease-[var(--ease-out-expo)]
                  ${isActive(item.path)
                    ? "text-[var(--color-secondary)]"
                    : "text-[#163A5F] hover:text-[var(--color-secondary)]"
                  }
                `}
              >
                {item.label}
                {item.dropdown && (
                  <CaretDown
                    size={12}
                    weight="bold"
                    className={`
                      transition-transform duration-300
                      ${activeDropdown === item.label ? "rotate-180" : ""}
                    `}
                  />
                )}
              </Link>

              {/* ── Dropdown panel ── */}
              {item.dropdown && activeDropdown === item.label && (
                <div
                  className="
                    absolute top-full left-0 mt-3 w-60
                    bg-[var(--color-surface)] rounded-[10px]
                    shadow-md
                    border border-[var(--color-border)]
                    overflow-hidden
                    animate-[fadeSlideDown_0.25s_ease-out]
                  "
                  onMouseEnter={() => {
                    openDropdown(item.label);
                    setHoveredNav(item.label);
                  }}
                  onMouseLeave={() => closeDropdown()}
                >
                  {item.dropdown.map((sub, idx) => (
                    <Link
                      key={sub.label}
                      href={sub.path}
                      className={`
                        block px-5 py-3.5
                        font-sans text-sm text-[var(--color-text-secondary)]
                        hover:text-[var(--color-secondary)] hover:bg-[var(--color-surface-alt)]
                        transition-colors duration-200
                        ${idx < item.dropdown!.length - 1 ? "border-b border-[var(--color-border)]" : ""}
                      `}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ══════ Right side ══════ */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Desktop CTA — uses Button component */}
          <div className="hidden lg:block">
            <Button variant="secondary" size="small">Partner With Us</Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden relative w-10 h-10
              flex items-center justify-center
              rounded-[5px]
              text-[var(--color-primary)] hover:text-[var(--color-secondary)]
              transition-colors duration-300
              cursor-pointer
            "
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={22} weight="bold" />
            ) : (
              <List size={22} weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* ── Framer Motion Moving Gradient Border for Whole Nav ── */}
      <AnimatePresence>
        {isNavHovered && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-secondary)] via-[#163A5F] to-[var(--color-tertiary)] bg-[length:200%_auto]"
            initial={{ opacity: 0, backgroundPosition: "0% center" }}
            animate={{ 
              opacity: 1, 
              backgroundPosition: ["0% center", "100% center", "0% center"] 
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.3 },
              backgroundPosition: { 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
          />
        )}
      </AnimatePresence>

      {/* ══════ Mobile / Tablet Menu ══════ */}
      <div
        className={`
          lg:hidden fixed inset-0 top-[calc(4rem+1px)]
          bg-[var(--color-surface)]/[0.98] backdrop-blur-xl
          transition-all duration-500 ease-[var(--ease-out-expo)]
          ${menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col h-full overflow-y-auto px-[var(--space-lg)] py-[var(--space-lg)]">
          {/* Nav links */}
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <div key={item.label}>
                {/* Main link */}
                <div className="flex items-center">
                  <Link
                    href={item.path}
                    className={`
                      flex-1 no-underline
                      font-sans text-base font-medium
                      py-4
                      transition-colors duration-300
                      ${isActive(item.path)
                        ? "text-[var(--color-secondary)]"
                        : "text-[#163A5F] hover:text-[var(--color-secondary)]"
                      }
                    `}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      className="p-3 text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors cursor-pointer"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <CaretDown
                        size={16}
                        weight="bold"
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px bg-[var(--color-border)]" />

                {/* Mobile dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="ml-4 pl-4 border-l-2 border-[var(--color-secondary)]/30 my-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.path}
                        className="
                          block py-3
                          font-sans text-sm text-[var(--color-text-muted)]
                          hover:text-[var(--color-secondary)]
                          transition-colors duration-200
                        "
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-auto pt-[var(--space-lg)] pb-[var(--space-xl)] flex justify-center">
            <Button variant="secondary" size="small">Partner With Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
