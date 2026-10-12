'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';

interface MagnetProps {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export function Magnet({
  children,
  className = '',
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0)');
  const [active, setActive] = useState(false);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const range = Math.max(rect.width, rect.height) / 2 + padding;
    if (Math.hypot(dx, dy) < range) {
      setActive(true);
      setTransform(`translate3d(${(dx / strength).toFixed(1)}px, ${(dy / strength).toFixed(1)}px, 0)`);
    } else {
      setActive(false);
      setTransform('translate3d(0px, 0px, 0)');
    }
  };

  const reset = () => {
    setActive(false);
    setTransform('translate3d(0px, 0px, 0)');
  };

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} className={className}>
      <div
        style={{
          transform,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
