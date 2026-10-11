'use client';

import { useSyncExternalStore } from 'react';

/** Shared expo-out easing used across the portfolio. */
export const EASE: [number, number, number, number] = [0.19, 1, 0.22, 1];

/** Standard fade-up reveal, pairs with whileInView + viewport once. */
export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
} as const;

export const viewportOnce = { once: true, margin: '-100px' } as const;

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

/** Live `prefers-reduced-motion` value (SSR-safe, subscribes to changes). */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false
  );
}

function subscribeFinePointer(callback: () => void) {
  const mq = window.matchMedia('(pointer: fine)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

/** Live fine-pointer value (SSR-safe, subscribes to changes). */
export function useFinePointer(): boolean {
  return useSyncExternalStore(
    subscribeFinePointer,
    () => window.matchMedia('(pointer: fine)').matches,
    () => false
  );
}

/** Motion effects (tilt, magnetic, glow) only make sense with fine pointer + motion allowed. */
export function useMotionEffectsEnabled(): boolean {
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  return finePointer && !reducedMotion;
}
