'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface NumberTickerProps {
  value: number;
  className?: string;
  /** Left-pad the integer part with zeros (e.g. countdown digits). */
  padWidth?: number;
}

/**
 * Spring-animated number ticker (Magic UI pattern): counts up into view and
 * rolls smoothly on every value change instead of jumping between digits.
 */
export function NumberTicker({ value, className = '', padWidth = 0 }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 25 });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const format = (v: number) => {
      const rounded = Math.max(0, Math.round(v));
      return padWidth > 0 ? String(rounded).padStart(padWidth, '0') : String(rounded);
    };
    if (ref.current) ref.current.textContent = format(spring.get());
    const unsubscribe = spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = format(v);
    });
    return unsubscribe;
  }, [spring, padWidth]);

  return <span ref={ref} className={className} />;
}
