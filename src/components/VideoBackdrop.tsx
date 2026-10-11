'use client';

import { useState } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion';

/**
 * Full-site video backdrop: a real 3D space-tunnel clip (Mixkit, free
 * license) playing behind everything. If the video can't load, it unmounts
 * and the DeepSpace canvas underneath carries the background. Never renders
 * under reduced motion — the static canvas frame is enough there.
 */
export function VideoBackdrop() {
  const [failed, setFailed] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

  if (failed || reduceMotion) return null;

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
