'use client';

import { useState } from 'react';
import { usePrefersReducedMotion, useFinePointer } from '@/lib/motion';

/**
 * Full-site video backdrop: a real 3D space-tunnel clip (Mixkit, free
 * license) playing behind everything. Skipped on small screens (bandwidth +
 * GPU), under reduced motion, or if the video can't load — the DeepSpace
 * canvas underneath carries the background in all those cases.
 */
export function VideoBackdrop() {
  const [failed, setFailed] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const finePointer = useFinePointer();
  const [wide] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
  );

  if (failed || reduceMotion || !wide || !finePointer) return null;

  return (
    <video
      className="fixed inset-0 z-[1] h-full w-full object-cover opacity-50 pointer-events-none"
      src="/videos/space-tunnel.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
      onError={() => setFailed(true)}
    />
  );
}
