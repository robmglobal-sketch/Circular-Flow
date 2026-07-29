"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

interface FadeUpProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  yOffset = 40,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // High-end agency cubic bezier smooth ease
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
