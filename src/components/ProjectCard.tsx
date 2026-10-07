'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function ProjectCard({ project, onClick, style }: ProjectCardProps) {
  const isInteractive = typeof onClick === 'function';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className={cn(
        'card group relative overflow-hidden shine h-full',
        isInteractive && 'cursor-pointer'
      )}
      style={style}
      onClick={onClick}
      onKeyDown={(e) => {
        if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick?.();
        }
      }}
      tabIndex={isInteractive ? 0 : undefined}
      role={isInteractive ? 'button' : 'article'}
      aria-label={isInteractive ? `View details for ${project.title}` : undefined}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal" aria-hidden="true" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-2">
          <span className="tag-accent text-caption">{project.category}</span>
        </div>

        <h3 className="heading-sm text-textPrimary group-hover:text-accent transition-colors duration-fast">
          {project.title}
        </h3>

        <p className="body text-textSecondary">
          {project.description}
        </p>

        {project.additionalInfo && (
          <p className="body-sm text-textMuted font-mono">
            {project.additionalInfo}
          </p>
        )}

        <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag" role="listitem">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost gap-2 text-body-sm group/github"
            aria-label={`View ${project.title} on GitHub`}
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon className="w-4 h-4" aria-hidden="true" />
            <span>GitHub</span>
            <ChevronRight className="w-3 h-3 transition-transform duration-fast group-hover/github:translate-x-1" aria-hidden="true" />
          </a>

          {project.liveDemoUrl && project.liveDemoUrl !== '[ADD LIVE DEMO]' && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost gap-2 text-body-sm group/demo"
              aria-label={`View live demo of ${project.title}`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Live Demo</span>
              <ChevronRight className="w-3 h-3 transition-transform duration-fast group-hover/demo:translate-x-1" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-normal"
        aria-hidden="true"
      />
    </motion.article>
  );
}