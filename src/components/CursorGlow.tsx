'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { useMotionEffectsEnabled } from '@/lib/motion';

export function CursorGlow() {
  // Live value: unmounts the glow on touch devices or reduced motion,
  // and reacts if the user changes OS settings mid-session.
  const enabled = useMotionEffectsEnabled();
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 120, damping: 25, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 25, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e: globalThis.MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return <motion.div className="cursor-glow" style={{ x: sx, y: sy }} aria-hidden="true" />;
}
