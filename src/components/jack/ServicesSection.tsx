'use client';

import { FadeIn } from './FadeIn';

const FOCUS_AREAS = [
  {
    n: '01',
    name: 'AI Engineering',
    description: 'Building practical AI-powered applications — from local-first desktop assistants to LLM-integrated web apps using modern APIs.',
  },
  {
    n: '02',
    name: 'Web Development',
    description: 'Fast, responsive websites and web apps with Next.js 15, React 19, TypeScript, and Tailwind CSS.',
  },
  {
    n: '03',
    name: 'Desktop Applications',
    description: 'Native cross-platform desktop apps with Electron — menubar utilities, background agents, and system-level integrations.',
  },
  {
    n: '04',
    name: 'Automation & Agents',
    description: 'Scripts and AI agents that remove repetitive work — scheduling, data pipelines, and intelligent workflows.',
  },
  {
    n: '05',
    name: 'Prompt Engineering',
    description: 'Designing reliable prompts, evaluation loops, and LLM workflows that behave predictably in production.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" aria-labelledby="jack-services-heading">
      <FadeIn y={40}>
        <h2 id="jack-services-heading" className="text-[#0C0C0C] font-black uppercase text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Focus Areas
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto mb-16 sm:mb-20 md:mb-28" />

      <div className="max-w-5xl mx-auto">
        {FOCUS_AREAS.map((area, i) => (
          <FadeIn key={area.n} delay={i * 0.1} y={30}>
            <div className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)] last:border-b">
              <span className="font-black text-[#0C0C0C] shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {area.n}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0C0C0C] font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {area.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {area.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
