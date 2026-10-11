'use client';

import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'p' | 'span';
}

const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  span: motion.span,
} as const;

/**
 * Skiper-style word-stagger rise reveal (opacity + vertical + scale only —
 * no blur filters, so gradient-clipped text stays razor sharp).
 */
export function TextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.06,
  as = 'span',
}: TextRevealProps) {
  const Tag = MOTION_TAGS[as];
  const words = text.split(' ');

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 22, scale: 0.96 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.6, ease: EASE },
            },
          }}
          aria-hidden="true"
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Tag>
  );
}
