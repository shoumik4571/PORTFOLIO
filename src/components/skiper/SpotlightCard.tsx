'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';
import { useMotionEffectsEnabled } from '@/lib/motion';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Skiper-style spotlight card: a cursor-tracked accent glow follows
 * the pointer inside the card border. Renders as a plain card when
 * motion effects are disabled (touch / reduced motion).
 */
export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const effectsEnabled = useMotionEffectsEnabled();

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !effectsEnabled) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${Math.round(e.clientX - rect.left)}px`);
    el.style.setProperty('--spot-y', `${Math.round(e.clientY - rect.top)}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`card group relative overflow-hidden ${className}`}
    >
      {effectsEnabled && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-normal group-hover:opacity-100 group-focus-within:opacity-100"
          style={{
            background:
              'radial-gradient(360px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(0, 212, 170, 0.09), transparent 65%)',
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10">{children}</div>
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 origin-left transition-transform duration-normal"
        aria-hidden="true"
      />
    </div>
  );
}
