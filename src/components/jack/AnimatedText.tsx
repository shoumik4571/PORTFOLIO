'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

function Char({
  progress,
  index,
  total,
  char,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  char: string;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const display = char === ' ' ? '\u00A0' : char;
  return (
    <span className="relative" aria-hidden="true">
      <span className="invisible">{display}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {display}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  const chars = text.split('');
  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((c, i) => (
        <Char key={i} progress={scrollYProgress} index={i} total={chars.length} char={c} />
      ))}
    </p>
  );
}
