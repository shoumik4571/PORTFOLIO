'use client';

import { motion, useReducedMotion } from 'framer-motion';
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
 * Skiper-style word-stagger blur reveal.
 * Renders the final readable state immediately when reduced motion is on.
 */
export function TextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.06,
  as = 'span',
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (reduceMotion) {
    const Tag = as as 'span';
    return <Tag className={className}>{text}</Tag>;
  }

  const Tag = MOTION_TAGS[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block will-change-transform"
          variants={{
            hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.55, ease: EASE },
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
