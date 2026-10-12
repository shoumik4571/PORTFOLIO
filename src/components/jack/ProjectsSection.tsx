'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './Buttons';
import { ProjectArt } from '../skiper/ProjectArt';
import { projects } from '@/data/projects';

const KIND: Record<string, string> = {
  'krishisense-ai': 'Client',
  'buy-or-wait': 'Personal',
  'password-security-toolkit': 'Personal',
};

function ProjectCard({
  index,
  total,
  id,
  title,
  category,
  description,
  technologies,
  href,
}: {
  index: number;
  total: number;
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  href: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div ref={containerRef} className="md:h-[85vh] flex items-start justify-center py-4 md:py-0">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className="md:sticky md:top-24 lg:top-32 w-full rounded-[28px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top"
        aria-label={`${title} project card`}
      >
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <span className="font-black text-[#D7E2EA] leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
            {num}
          </span>
          <span className="text-[#D7E2EA]/70 font-medium uppercase tracking-widest text-xs sm:text-sm">
            {KIND[id] ?? 'Project'}
          </span>
          <h3 className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
            {title} <span className="opacity-50 font-light normal-case tracking-normal">· {category}</span>
          </h3>
          <span className="ml-auto">
            <LiveProjectButton href={href} />
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[40%_60%] gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <ProjectArt id={id} label={`${title} detail view`} variant="detail" className="mx-0" />
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 p-4 sm:p-5 overflow-hidden"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <p className="text-[#D7E2EA]/60 font-light leading-relaxed line-clamp-4" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                {description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-[#D7E2EA]/80 font-mono text-[0.65rem] sm:text-xs border border-[#D7E2EA]/25 rounded-full px-2.5 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ height: '100%' }}>
            <ProjectArt id={id} label={`${title} artwork`} tall className="mx-0 h-full" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 pb-24" aria-labelledby="jack-projects-heading">
      <FadeIn y={40}>
        <h2 id="jack-projects-heading" className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-20" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            index={i}
            total={projects.length}
            id={project.id}
            title={project.title}
            category={project.category}
            description={project.description}
            technologies={project.technologies}
            href={project.liveDemoUrl && project.liveDemoUrl !== '[ADD LIVE DEMO]' ? project.liveDemoUrl : project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
}
