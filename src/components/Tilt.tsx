'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, type ReactNode, type MouseEvent } from 'react';

interface TiltProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

export function Tilt({ children, className = '', max = 7 }: TiltProps) {
  const [fine] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const innerRef = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 250,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 250,
    damping: 22,
  });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!fine) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    px.set(nx);
    py.set(ny);
    innerRef.current?.style.setProperty('--gx', `${Math.round(nx * 100)}%`);
    innerRef.current?.style.setProperty('--gy', `${Math.round(ny * 100)}%`);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div
      className={`[perspective:1200px] ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        ref={innerRef}
        className="tilt relative h-full"
        style={fine ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
      >
        {children}
        <div className="tilt-glare" aria-hidden="true" />
      </motion.div>
    </div>
  );
}
