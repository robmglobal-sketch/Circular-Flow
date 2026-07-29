"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionProps } from "framer-motion";

interface ParallaxProps extends MotionProps {
  children: React.ReactNode;
  speed?: number; // Speed multiplier (e.g., -50 to move upward as you scroll down, +50 to move downward)
  className?: string;
}

export default function Parallax({
  children,
  speed = -40,
  className = "",
  ...props
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className} {...props}>
      {children}
    </motion.div>
  );
}
