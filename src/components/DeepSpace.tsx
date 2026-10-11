'use client';

import { useEffect, useRef } from 'react';

const DEPTH = 900;
const FOV = 320;

interface Star {
  x: number;
  y: number;
  z: number;
  r: number;
  tint: number;
  tw: number;
}

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

interface Nebula {
  sprite: number;
  bx: number;
  by: number;
  size: number;
  drift: number;
  depth: number;
}

function makeGlowSprite(color: string): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, color);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  return c;
}

/**
 * Full-page living 3D backdrop — fixed behind everything, like a video.
 * Perspective starfield + drifting nebulae + occasional comets, with the
 * camera steered by the mouse and warp bursts driven by scroll velocity.
 */
export function DeepSpace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const mouse = { x: 0.5, y: 0.5 };
    const cam = { x: 0, y: 0 };
    let stars: Star[] = [];
    let comets: Comet[] = [];
    let nebulae: Nebula[] = [];
    let w = 0;
    let h = 0;
    let maxScroll = 1;
    let raf = 0;
    let running = false;
    let warp = 0;
    let lastScrollY = window.scrollY;
    let nextComet = 0;

    const sprites = [
      makeGlowSprite('rgba(0, 212, 170, 0.16)'),
      makeGlowSprite('rgba(139, 124, 246, 0.15)'),
      makeGlowSprite('rgba(0, 120, 200, 0.12)'),
    ];

    const seed = () => {
      const count = Math.max(150, Math.min(300, Math.floor((w * h) / 8000)));
      stars = Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 2 * w * 0.75,
        y: (Math.random() - 0.5) * 2 * h * 0.75,
        z: Math.random() * DEPTH,
        r: Math.random() * 1.9 + 0.4,
        tint: Math.random(),
        tw: Math.random() * Math.PI * 2,
      }));
      nebulae = [
        { sprite: 0, bx: 0.18, by: 0.12, size: 1.15, drift: 0.9, depth: 0.35 },
        { sprite: 1, bx: 0.85, by: 0.42, size: 1.35, drift: 1.3, depth: 0.6 },
        { sprite: 2, bx: 0.45, by: 0.82, size: 1.5, drift: 0.7, depth: 0.5 },
      ];
    };

    const resize = () => {
      w = Math.max(1, window.innerWidth);
      h = Math.max(1, window.innerHeight);
      maxScroll = Math.max(1, document.documentElement.scrollHeight - h);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const spawnComet = (t: number) => {
      const fromLeft = Math.random() > 0.5;
      const speed = 7 + Math.random() * 5;
      comets.push({
        x: fromLeft ? -60 : Math.random() * w,
        y: fromLeft ? Math.random() * h * 0.5 : -60,
        vx: fromLeft ? speed : speed * 0.4,
        vy: fromLeft ? speed * 0.4 : speed,
        life: 0,
        maxLife: 90 + Math.random() * 40,
      });
      nextComet = t + 4000 + Math.random() * 6000;
    };

    const drawFrame = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const scrollP = Math.min(1, window.scrollY / maxScroll);

      cam.x += ((mouse.x - 0.5) * 150 - cam.x) * 0.04;
      cam.y += ((mouse.y - 0.5) * 110 - cam.y) * 0.04;
      warp *= 0.94;

      // nebulae (pre-rendered sprites — one drawImage each)
      for (const n of nebulae) {
        const size = Math.max(w, h) * n.size;
        const nx = n.bx * w - cam.x * n.depth + Math.sin(t * 0.00012 * n.drift) * 30;
        const ny = n.by * h - scrollP * 220 * n.depth - cam.y * n.depth + Math.cos(t * 0.0001 * n.drift) * 24;
        ctx.drawImage(sprites[n.sprite], nx - size / 2, ny - size / 2, size, size);
      }

      // stars
      const speed = 1.4 + warp * 13;
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
        const twinkle = 0.7 + 0.3 * Math.sin(t * 0.002 + s.tw);
        ctx.globalAlpha = Math.min(1, scale * 1.1) * twinkle;
        ctx.fillStyle = s.tint > 0.86 ? '#fafafa' : s.tint > 0.68 ? '#8b7cf6' : '#00d4aa';
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.3, s.r * scale * (1 + warp)), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // comets
      if (!reduced && t > nextComet && comets.length < 2) spawnComet(t);
      comets = comets.filter((c) => c.life < c.maxLife);
      for (const c of comets) {
        c.x += c.vx;
        c.y += c.vy;
        c.life += 1;
        const fade = Math.sin((c.life / c.maxLife) * Math.PI);
        const tx = c.x - c.vx * 9;
        const ty = c.y - c.vy * 9;
        const grad = ctx.createLinearGradient(c.x, c.y, tx, ty);
        grad.addColorStop(0, `rgba(250, 250, 250, ${0.9 * fade})`);
        grad.addColorStop(0.3, `rgba(0, 212, 170, ${0.5 * fade})`);
        grad.addColorStop(1, 'rgba(0, 212, 170, 0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();
      }
    };

    const loop = (t: number) => {
      if (document.hidden) {
        running = false;
        return;
      }
      drawFrame(t);
      raf = requestAnimationFrame(loop);
    };

    const kick = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / w;
      mouse.y = e.clientY / h;
    };

    const onScroll = () => {
      const y = window.scrollY;
      const v = Math.min(6, Math.abs(y - lastScrollY) / 40);
      warp = Math.min(1, warp + v * 0.22);
      lastScrollY = y;
    };

    const onVisibilityChange = () => {
      if (!document.hidden) kick();
    };

    resize();
    nextComet = performance.now() + 2500;
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    if (reduced) drawFrame(0);
    else kick();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
