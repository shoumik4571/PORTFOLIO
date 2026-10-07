'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ProjectCard } from './ProjectCard';
import { Tilt } from './Tilt';
import { projects, projectFilters } from '@/data/projects';
import type { Project } from '@/data/projects';

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.filters.includes(activeFilter));
  }, [activeFilter]);

  const handleProjectClick = (project: Project) => {
    setExpandedProject(expandedProject === project.id ? null : project.id);
  };

  return (
    <section
      id="projects"
      className="section bg-background"
      aria-labelledby="projects-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <span className="kicker">
                <span className="kicker-dot" aria-hidden="true" />
                03 // Work
              </span>
              <h2 id="projects-heading" className="heading-lg mb-2">
                Featured Projects
              </h2>
              <p className="body text-textSecondary max-w-xl">
                Projects I&apos;ve built while exploring AI, software development, and cybersecurity.
              </p>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
              {projectFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    'px-4 py-2 text-body-sm font-medium rounded-full transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                    activeFilter === filter.id
                      ? 'bg-accent text-background shadow-[0_0_20px_#00d4aa40]'
                      : 'bg-surface border border-border text-textSecondary hover:text-textPrimary hover:border-border-hover'
                  )}
                  role="tab"
                  aria-selected={activeFilter === filter.id}
                  aria-controls="project-list"
                  id={`filter-${filter.id}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            id="project-list"
            role="tabpanel"
            aria-label={`${activeFilter} projects`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Tilt key={project.id} className="h-full">
                  <ProjectCard
                    project={project}
                    onClick={() => handleProjectClick(project)}
                    style={{ transitionDelay: `${index * 50}ms` } as React.CSSProperties}
                  />
                </Tilt>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="body text-textMuted">No projects found for this filter.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {expandedProject && (
        <ProjectModal
          project={projects.find((p) => p.id === expandedProject)!}
          onClose={() => setExpandedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="card-elevated w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <span className="tag-accent capitalize mb-3 block">{project.category}</span>
            <h3 id="modal-title" className="heading-md text-textPrimary">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-textMuted hover:text-textPrimary hover:bg-surface transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="card mb-6">
          <div className="aspect-video bg-surface-elevated rounded-lg flex items-center justify-center border border-border">
            <span className="text-body text-textMuted text-center px-4">{project.imagePlaceholder}</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="heading-sm mb-3">Overview</h4>
            <p className="body text-textSecondary">{project.description}</p>
          </div>

          {project.problem && (
            <div>
              <h4 className="heading-sm mb-3">Problem</h4>
              <p className="body text-textSecondary">{project.problem}</p>
            </div>
          )}

          {project.solution && (
            <div>
              <h4 className="heading-sm mb-3">Solution</h4>
              <p className="body text-textSecondary">{project.solution}</p>
            </div>
          )}

          {project.additionalInfo && (
            <div>
              <h4 className="heading-sm mb-3">Additional Information</h4>
              <p className="body text-textSecondary">{project.additionalInfo}</p>
            </div>
          )}

          <div>
            <h4 className="heading-sm mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            {project.liveDemoUrl && project.liveDemoUrl !== '[ADD LIVE DEMO]' && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary gap-2"
                aria-label={`View live demo of ${project.title}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}