'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE } from '@/lib/motion';

export type GroupPreset = 'fade' | 'blur' | 'scale' | 'slide';

interface AnimatedGroupProps {
  children: ReactNode;
  className?: string;
  preset?: GroupPreset;
  stagger?: number;
  role?: string;
  'aria-label'?: string;
}

const itemVariants: Record<GroupPreset, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(6px)' },
    visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: EASE } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE } },
  },
  slide: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  },
};

/**
 * Staggered entrance group (motion-primitives animated-group pattern):
 * children inherit `hidden`/`visible` states with a stagger delay.
 */
export function AnimatedGroup({
  children,
  className = '',
  stagger = 0.04,
  role,
  'aria-label': ariaLabel,
}: AnimatedGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedGroupItemProps {
  children: ReactNode;
  className?: string;
  preset?: GroupPreset;
  role?: string;
}

export function AnimatedGroupItem({
  children,
  className = '',
  preset = 'fade',
  role,
}: AnimatedGroupItemProps) {
  return (
    <motion.span variants={itemVariants[preset]} className={className} role={role}>
      {children}
    </motion.span>
  );
}
