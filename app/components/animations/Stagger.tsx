"use client";

import React from "react";
import { motion, Variants, MotionProps } from "framer-motion";

interface StaggerGridProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0.2,
  ...props
}: StaggerGridProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

export function StaggerItem({
  children,
  className = "",
  yOffset = 40,
  ...props
}: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // High-end agency smooth ease
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
