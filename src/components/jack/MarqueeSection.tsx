'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { SkillIcon } from '../SkillIcon';

const FOCUS = [
  'Agentic AI',
  'Generative AI',
  'Cybersecurity',
  'Web Development',
  'Cloud Computing',
  'Python',
  'Machine Learning',
  'Prompt Engineering',
];

const STACK = [
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Firebase',
  'Git',
  'GitHub',
  'HTML',
  'CSS',
];

function ScrollRow({ children, direction }: { children: ReactNode; direction: 1 | -1 }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    let raf = 0;
    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) raf = requestAnimationFrame(update);
      },
      { rootMargin: '200px' }
    );
    const update = () => {
      if (!visible) return;
      const section = wrapRef.current?.closest('section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setX(direction === 1 ? offset - 200 : -(offset - 200));
      }
      raf = requestAnimationFrame(update);
    };
    const el = wrapRef.current;
    if (el) observer.observe(el);
    raf = requestAnimationFrame(update);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [direction]);

  return (
    <div ref={wrapRef} className="overflow-hidden">
      <div className="flex gap-3 w-max items-center" style={{ transform: `translateX(${x}px)`, willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  const row1 = [...FOCUS, ...FOCUS, ...FOCUS];
  const row2 = [...STACK, ...STACK, ...STACK];

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden" aria-label="Focus areas and tech stack marquee">
      <div className="flex flex-col gap-6 sm:gap-8">
        <ScrollRow direction={1}>
          {row1.map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= FOCUS.length}
              className="font-black uppercase whitespace-nowrap leading-none text-5xl sm:text-6xl md:text-7xl"
              style={{ color: 'transparent', WebkitTextStroke: '1px rgba(215, 226, 234, 0.35)' }}
            >
              {item} <span className="text-[#00d4aa]" style={{ WebkitTextStroke: '0' }}>✦</span>
            </span>
          ))}
        </ScrollRow>
        <ScrollRow direction={-1}>
          {row2.map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= STACK.length}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base whitespace-nowrap"
            >
              <SkillIcon name={item} />
              {item}
            </span>
          ))}
        </ScrollRow>
      </div>
    </section>
  );
}
