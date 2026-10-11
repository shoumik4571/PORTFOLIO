'use client';

import { useState } from 'react';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

const ICONS: Record<string, string> = {
  Python: 'python/python-original',
  JavaScript: 'javascript/javascript-original',
  TypeScript: 'typescript/typescript-original',
  HTML: 'html5/html5-original',
  CSS: 'css3/css3-original',
  React: 'react/react-original',
  'Next.js': 'nextjs/nextjs-original',
  'Tailwind CSS': 'tailwindcss/tailwindcss-original',
  Firebase: 'firebase/firebase-plain',
  Git: 'git/git-original',
  GitHub: 'github/github-original',
};

/**
 * Tech logo via the devicon CDN. Silently renders nothing when a logo is
 * missing or offline, so the text label always survives.
 */
export function SkillIcon({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const path = ICONS[name];
  if (!path || failed) return null;
  return (
    <img
      src={`${CDN}${path}.svg`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      width={14}
      height={14}
      className="w-3.5 h-3.5 shrink-0"
      onError={() => setFailed(true)}
    />
  );
}
