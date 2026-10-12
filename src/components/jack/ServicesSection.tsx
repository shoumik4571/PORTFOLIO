'use client';

import { FadeIn } from './FadeIn';

const SERVICES = [
  {
    n: '01',
    name: 'AI Solutions',
    description: 'Practical AI features powered by modern LLM APIs — assistants, automation, and intelligent tooling built for real use cases.',
  },
  {
    n: '02',
    name: 'Web Development',
    description: 'Fast, responsive websites and web apps with Next.js, React, TypeScript, and Tailwind CSS.',
  },
  {
    n: '03',
    name: 'Cybersecurity',
    description: 'Security-first thinking and Python tooling — password auditing, hardening basics, and safe defaults.',
  },
  {
    n: '04',
    name: 'Automation',
    description: 'Scripts and agents that remove repetitive work — OCR pipelines, data workflows, and scheduled tasks.',
  },
  {
    n: '05',
    name: 'Prompt Engineering',
    description: 'Designing reliable prompts and evaluation loops that make AI systems behave in production.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" aria-labelledby="jack-services-heading">
      <FadeIn y={40}>
        <h2 id="jack-services-heading" className="text-[#0C0C0C] font-black uppercase text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto mb-16 sm:mb-20 md:mb-28" />

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.n} delay={i * 0.1} y={30}>
            <div className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)] last:border-b">
              <span className="font-black text-[#0C0C0C] shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {service.n}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0C0C0C] font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {service.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
