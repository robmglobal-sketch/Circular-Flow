"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

interface ScaleInProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
}

export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  initialScale = 0.88,
  className = "",
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
