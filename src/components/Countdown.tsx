'use client';

import { useEffect, useState } from 'react';

const START = new Date('2026-10-10T00:00:00').getTime();
const END = new Date('2027-01-10T00:00:00').getTime();

function getParts(now: number) {
  const diff = Math.max(0, START - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

const pad = (n: number) => String(n).padStart(2, '0');

export function Countdown() {
  const [now, setNow] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  if (now !== 0 && now >= END) {
    return (
      <p className="body text-textSecondary">
        This program has concluded. Details of the completed internship will be shared here.
      </p>
    );
  }

  if (now !== 0 && now >= START) {
    return (
      <p className="body text-textSecondary">
        The program is currently in session —{' '}
        <span className="text-accent font-mono">10 October 2026 → 10 January 2027</span>.
      </p>
    );
  }

  const { d, h, m, s } = getParts(now);
  const cells = [
    { value: now === 0 ? '--' : pad(d), label: 'Days' },
    { value: now === 0 ? '--' : pad(h), label: 'Hours' },
    { value: now === 0 ? '--' : pad(m), label: 'Mins' },
    { value: now === 0 ? '--' : pad(s), label: 'Secs' },
  ];

  return (
    <div>
      <p className="caption text-textMuted mb-3">Countdown to start</p>
      <div className="countdown-grid" role="timer" aria-label="Time remaining until the internship starts">
        {cells.map((cell) => (
          <div key={cell.label} className="countdown-cell">
            <span className="countdown-num">{cell.value}</span>
            <span className="countdown-label">{cell.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
