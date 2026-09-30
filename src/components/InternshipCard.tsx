'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Experience } from '@/data/experience';

interface InternshipCardProps {
  experience: Experience;
}

export function InternshipCard({ experience }: InternshipCardProps) {
  return (
    <section
      id="internship"
      className="section bg-background"
      aria-labelledby="internship-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="kicker">
              <span className="kicker-dot" aria-hidden="true" />
              05 // Next role
            </span>
            <h2 id="internship-heading" className="heading-lg mb-4">
              Upcoming Internship
            </h2>
            <p className="body text-textSecondary">
              Professional experience starting soon.
            </p>
          </div>

          <motion.article
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="card-elevated relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent-hover" aria-hidden="true" />

            <div className="relative z-10 p-8 lg:p-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" aria-hidden="true">
                    <path d="M22 10v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6" />
                    <polyline points="6 12 10 16 18 8" />
                  </svg>
                </div>
                <div>
                  <p className="caption text-accent mb-1">Organization</p>
                  <p className="heading-sm text-textPrimary">{experience.organization}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="caption text-textMuted">Role</p>
                  <p className="body text-textPrimary font-medium">{experience.role}</p>
                </div>
                <div className="space-y-1">
                  <p className="caption text-textMuted">Status</p>
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      'px-3 py-1 text-caption font-medium rounded-full',
                      experience.isUpcoming
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    )}>
                      {experience.status}
                    </span>
                    {experience.isUpcoming && (
                      <span className="text-body-sm text-textMuted font-mono">Starts {experience.startDate}</span>
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="caption text-textMuted">Program</p>
                  <p className="body text-textPrimary">{experience.program}</p>
                </div>
                <div className="space-y-1">
                  <p className="caption text-textMuted">Field</p>
                  <p className="body text-textPrimary">{experience.field}</p>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <p className="caption text-textMuted">Duration</p>
                  <p className="body text-textPrimary font-mono">
                    {experience.startDate} → {experience.endDate} · {experience.duration}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="caption text-textMuted">Structure</p>
                  <p className="body text-textPrimary">{experience.structure}</p>
                </div>
                <div className="space-y-1">
                  <p className="caption text-textMuted">Mode</p>
                  <p className="body text-textPrimary">{experience.mode}</p>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <p className="caption text-textMuted">Supervisor</p>
                  <p className="body text-textPrimary">{experience.supervisor}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="caption text-textMuted mb-2">Description</p>
                <p className="body text-textSecondary">{experience.description}</p>
                <p className="body text-textSecondary mt-3">
                  The program includes hands-on practical experience and domain-specific tasks under mentor guidance, with weekly check-ins to review progress and evaluate performance.
                </p>
              </div>

              {experience.isUpcoming && (
                <div className="pt-4 border-t border-border">
                  <p className="body-sm text-textMuted">
                    <strong className="text-textPrimary">Note:</strong> This internship has not started yet. Responsibilities, projects, technologies, and achievements will be added once the internship begins.
                  </p>
                </div>
              )}
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}