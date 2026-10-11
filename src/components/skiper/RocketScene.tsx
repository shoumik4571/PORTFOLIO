'use client';

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * Scroll-linked 3D rocket scene (scroll-scene pattern, dependency-free).
 *
 * The rocket ascends and banks as its section scrolls through the viewport,
 * wrapped in idle float loops, a flickering exhaust flame, rising smoke and
 * a rotating orbit ring. Fully static when reduced motion is requested.
 */
export function RocketScene({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const rawY = useTransform(smooth, [0, 1], [70, -70]);
  const rawTilt = useTransform(smooth, [0, 1], [7, -7]);
  const ascentY = reduceMotion ? 0 : rawY;
  const bank = reduceMotion ? 0 : rawTilt;

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <motion.svg
        viewBox="0 0 200 250"
        className="h-full w-auto overflow-visible"
        style={{ y: ascentY }}
        role="presentation"
      >
        <defs>
          <linearGradient id="rocket-body" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1c1c1f" />
            <stop offset="45%" stopColor="#3a3a3e" />
            <stop offset="55%" stopColor="#2a2a2d" />
            <stop offset="100%" stopColor="#141416" />
          </linearGradient>
          <linearGradient id="rocket-flame" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00e8bb" />
            <stop offset="55%" stopColor="#00d4aa" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="rocket-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ambient glow */}
        <circle cx="100" cy="120" r="95" fill="url(#rocket-glow)" />

        {/* twinkling stars */}
        {[
          { cx: 28, cy: 40, r: 1.6, d: 0 },
          { cx: 168, cy: 62, r: 1.3, d: 0.9 },
          { cx: 42, cy: 190, r: 1.2, d: 1.7 },
          { cx: 172, cy: 200, r: 1.7, d: 0.4 },
          { cx: 150, cy: 24, r: 1.1, d: 2.2 },
        ].map((s, i) => (
          <motion.circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="#fafafa"
            animate={reduceMotion ? { opacity: 0.8 } : { opacity: [0.25, 1, 0.25] }}
            transition={reduceMotion ? { duration: 0 } : { duration: 2.6, repeat: Infinity, delay: s.d, ease: 'easeInOut' }}
          />
        ))}

        {/* orbit ring */}
        <motion.g
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={reduceMotion ? undefined : { duration: 26, repeat: Infinity, ease: 'linear' }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        >
          <ellipse
            cx="100"
            cy="122"
            rx="88"
            ry="30"
            fill="none"
            stroke="#00d4aa"
            strokeOpacity="0.35"
            strokeWidth="1.2"
            strokeDasharray="7 6"
            transform="rotate(-18 100 122)"
          />
          <circle cx="176" cy="96" r="3.2" fill="#8b7cf6" />
        </motion.g>

        {/* rising smoke */}
        {!reduceMotion &&
          [0, 1, 2].map((i) => (
            <motion.circle
              key={`smoke-${i}`}
              cx={100 + (i - 1) * 14}
              cy={208}
              r={7}
              fill="#a1a1aa"
              initial={{ opacity: 0, y: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.35, 0], y: [0, 34, 52], scale: [0.6, 1.4, 1.8] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: 'easeOut' }}
            />
          ))}

        {/* rocket */}
        <motion.g
          style={{ rotate: bank }}
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={reduceMotion ? undefined : { duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* exhaust flame */}
          <motion.path
            d="M91 188 Q100 236 109 188 Z"
            fill="url(#rocket-flame)"
            animate={reduceMotion ? undefined : { scaleY: [1, 1.28, 1], opacity: [0.9, 1, 0.9] }}
            transition={reduceMotion ? undefined : { duration: 0.45, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformBox: 'fill-box', transformOrigin: 'top center' }}
          />
          {/* fins */}
          <path d="M82 148 L70 182 L86 176 Z" fill="#00d4aa" opacity="0.9" />
          <path d="M118 148 L130 182 L114 176 Z" fill="#00d4aa" opacity="0.9" />
          {/* body */}
          <rect x="82" y="72" width="36" height="118" rx="17" fill="url(#rocket-body)" stroke="#3a3a3e" strokeWidth="1" />
          {/* nose cone */}
          <path d="M82 76 Q82 44 100 38 Q118 44 118 76 Z" fill="#00d4aa" opacity="0.92" />
          {/* window */}
          <circle cx="100" cy="108" r="10" fill="#0a0a0b" stroke="#8b7cf6" strokeWidth="2.5" />
          <circle cx="97" cy="105" r="3" fill="#8b7cf6" opacity="0.8" />
          {/* body stripe */}
          <rect x="82" y="150" width="36" height="7" fill="#8b7cf6" opacity="0.85" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
