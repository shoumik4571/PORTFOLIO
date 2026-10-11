'use client';

import { useEffect, useRef } from 'react';

// Perspective projection constants
const DEPTH = 900;
const FOV = 320;
const STAR_BASE_R = 1.6;

interface Star {
  x: number;
  y: number;
  z: number;
  r: number;
  tint: number;
  tw: number;
}

/**
 * 3D warp-field backdrop (dependency-free perspective projection).
 *
 * Stars live in x/y/z world space and are projected with a pinhole camera.
 * Scroll velocity drives a warp burst, the mouse steers the camera, and
 * everything freezes to a single static frame under reduced motion.
 */
export function MotionBackground({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parent = canvas.parentElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const mouse = { x: 0.5, y: 0.5 };
    const cam = { x: 0, y: 0 };
    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let visible = true;
    let warp = 0;
    let lastScrollY = window.scrollY;

    const seed = () => {
      const count = Math.max(120, Math.min(260, Math.floor((w * h) / 9000)));
      const spreadX = w * 0.75;
      const spreadY = h * 0.75;
      stars = Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 2 * spreadX,
        y: (Math.random() - 0.5) * 2 * spreadY,
        z: Math.random() * DEPTH,
        r: Math.random() * STAR_BASE_R + 0.4,
        tint: Math.random(),
        tw: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const rect = parent?.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect?.width ?? window.innerWidth));
      h = Math.max(1, Math.floor(rect?.height ?? window.innerHeight));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const drawFrame = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;

      // Ease camera toward the mouse for parallax steering
      cam.x += ((mouse.x - 0.5) * 140 - cam.x) * 0.04;
      cam.y += ((mouse.y - 0.5) * 100 - cam.y) * 0.04;
      warp *= 0.94;

      const speed = 1.6 + warp * 14;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.z -= speed * (0.4 + (1 - s.z / DEPTH) * 0.6);
        if (s.z <= 1) {
          s.z = DEPTH;
          s.x = (Math.random() - 0.5) * 2 * w * 0.75;
          s.y = (Math.random() - 0.5) * 2 * h * 0.75;
        }

        const scale = FOV / (FOV + s.z);
        const sx = cx + (s.x - cam.x * scale) * scale;
        const sy = cy + (s.y - cam.y * scale) * scale;
        if (sx < -10 || sx > w + 10 || sy < -10 || sy > h + 10) continue;

        const twinkle = 0.72 + 0.28 * Math.sin(t * 0.002 + s.tw);
        const alpha = Math.min(1, scale * 1.15) * twinkle;
        const radius = Math.max(0.3, s.r * scale * (1 + warp * 0.9));

        ctx.globalAlpha = alpha * 0.9;
        ctx.fillStyle =
          s.tint > 0.86
            ? '#fafafa'
            : s.tint > 0.68
              ? '#8b7cf6'
              : '#00d4aa';
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fill();

        // Motion streaks while warping
        if (warp > 0.12) {
          const streak = warp * 46 * scale;
          ctx.globalAlpha = alpha * 0.35;
          ctx.strokeStyle = '#00d4aa';
          ctx.lineWidth = radius * 0.8;
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(cx + (sx - cx) * (1 + streak / Math.max(1, FOV)), cy + (sy - cy) * (1 + streak / Math.max(1, FOV)));
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      if (!visible || document.hidden) {
        running = false;
        return;
      }
      drawFrame(t);
      raf = requestAnimationFrame(loop);
    };

    const kick = (t: number) => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (reduced) {
        drawFrame(0);
        return;
      }
      kick(0);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
    };

    const onScroll = () => {
      const y = window.scrollY;
      const v = Math.min(6, Math.abs(y - lastScrollY) / 40);
      warp = Math.min(1, warp + v * 0.25);
      lastScrollY = y;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible && !document.hidden) kick(performance.now());
      },
      { threshold: 0 }
    );

    const onVisibilityChange = () => {
      if (!document.hidden && visible) kick(performance.now());
    };

    resize();
    observer.observe(canvas);
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    parent?.addEventListener('mousemove', onMouseMove);
    start();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      parent?.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
