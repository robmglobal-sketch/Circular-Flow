"use client";

import React from "react";
import styles from "./Button.module.css";

/* ──────────────────────────────────────────────
   Props
   ────────────────────────────────────────────── */

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "small";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant — defaults to `"primary"` */
  variant?: ButtonVariant;
  /** Size — defaults to `"default"` */
  size?: ButtonSize;
  children: React.ReactNode;
}

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export default function Button({
  variant = "primary",
  size = "default",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const sizeClass = size === "small" ? styles.small : "";

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${sizeClass} ${className}`}
      {...rest}
    >
      {/* Background layers */}
      <span className={styles.buttonBg}>
        <span className={styles.buttonBgLayers}>
          <span className={`${styles.buttonBgLayer} ${styles.layer1}`} />
          <span className={`${styles.buttonBgLayer} ${styles.layer2}`} />
          <span className={`${styles.buttonBgLayer} ${styles.layer3}`} />
        </span>
      </span>

      {/* Text layers */}
      <span className={styles.buttonInner}>
        <span className={styles.buttonInnerStatic}>{children}</span>
        <span className={styles.buttonInnerHover} aria-hidden="true">
          {children}
        </span>
      </span>
    </button>
  );
}
