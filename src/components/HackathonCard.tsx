'use client';

import { motion } from 'framer-motion';
import type { Hackathon } from '@/data/hackathons';

interface HackathonCardProps {
  hackathon: Hackathon;
  index: number;
}

export function HackathonCard({ hackathon, index }: HackathonCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      className="card relative h-full shine"
      tabIndex={0}
    >
      <span className="absolute top-4 right-4 font-mono text-caption text-textMuted/70" aria-hidden="true">
        0{index + 1}
      </span>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-normal" aria-hidden="true" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <p className="caption text-accent">{hackathon.name}</p>
            {hackathon.date && (
              <p className="body-sm text-textMuted">{hackathon.date}</p>
            )}
          </div>
        </div>

        <div className="pt-2 border-t border-border space-y-2">
          <div>
            <p className="caption text-textMuted">Role</p>
            <p className="body text-textPrimary">{hackathon.role}</p>
          </div>

          {hackathon.project && (
            <div>
              <p className="caption text-textMuted">Project</p>
              {hackathon.projectUrl ? (
                <a
                  href={hackathon.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body text-textPrimary font-medium link"
                  aria-label={`View ${hackathon.project} on GitHub`}
                >
                  {hackathon.project}
                </a>
              ) : (
                <p className="body text-textPrimary font-medium">{hackathon.project}</p>
              )}
            </div>
          )}

          <div>
            <p className="caption text-textMuted">Description</p>
            <p className="body text-textSecondary">{hackathon.description}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}