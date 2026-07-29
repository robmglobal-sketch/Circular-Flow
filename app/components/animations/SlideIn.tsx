"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

export type SlideDirection = "up" | "down" | "left" | "right";

interface SlideInProps extends MotionProps {
  children: React.ReactNode;
  direction?: SlideDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

export default function SlideIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 50,
  className = "",
  once = true,
  ...props
}: SlideInProps) {
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: distance };
    }
  };

  const initial = { opacity: 0, ...getInitialOffset() };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // Smooth agency easing curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
