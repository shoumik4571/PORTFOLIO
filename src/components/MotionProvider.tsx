'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * App-wide motion defaults: spring-smooth transitions everywhere and
 * automatic reduced-motion support (motion-framer skill pattern).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </MotionConfig>
  );
}
