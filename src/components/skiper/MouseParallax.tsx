'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';
import { useMotionEffectsEnabled } from '@/lib/motion';

interface MouseParallaxProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees at the screen edge. */
  depth?: number;
  /** Invert the direction (background layers). */
  invert?: boolean;
}

/**
 * Window-mouse 3D parallax: the whole layer rotates in perspective with
 * critically-damped springs, so foreground and background drift apart.
 * Renders children untransformed when motion effects are disabled.
 */
export function MouseParallax({
  children,
  className = '',
  depth = 7,
  invert = false,
}: MouseParallaxProps) {
  const enabled = useMotionEffectsEnabled();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const dir = invert ? -1 : 1;
  const rotateX = useSpring(useTransform(my, [0, 1], [depth * dir, -depth * dir]), {
    stiffness: 60,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-depth * dir, depth * dir]), {
    stiffness: 60,
    damping: 18,
  });

  useEffect(() => {
    if (!enabled) return;
    const move = (e: globalThis.MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [enabled, mx, my]);

  if (!enabled) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={`[transform-style:preserve-3d] ${className}`}
      style={{ rotateX, rotateY }}
    >
      {children}
    </motion.div>
  );
}
