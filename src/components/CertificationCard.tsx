'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import type { Certification } from '@/data/certifications';

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export function CertificationCard({ certification, index }: CertificationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
      className="card group relative overflow-hidden h-full"
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal" aria-hidden="true" />

      <div className="relative z-10 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-normal">
          <Award className="w-6 h-6 text-accent" aria-hidden="true" />
        </div>

        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="heading-sm text-textPrimary group-hover:text-accent transition-colors duration-fast">
              {certification.name}
            </h3>
            {certification.status === 'in-progress' ? (
              <span className="tag-accent shrink-0 bg-amber-500/10 text-amber-400 border-amber-500/30 animate-pulse">
                In Progress
              </span>
            ) : (
              <span className="tag-accent shrink-0">Completed</span>
            )}
          </div>
          <p className="body-sm text-textMuted font-medium">{certification.provider}</p>
          <p className="body text-textSecondary">{certification.description}</p>

          {certification.completionDate && (
            <p className="body-sm text-textMuted font-mono">
              Completed: {certification.completionDate}
            </p>
          )}

          {certification.certificateUrl && (
            <a
              href={certification.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-body-sm text-accent hover:text-accent-hover transition-colors duration-fast group/verify"
              aria-label={`Verify ${certification.name} certificate`}
            >
              <span>Verify Certificate</span>
              <ExternalLink className="w-3 h-3 transition-transform duration-fast group-hover/verify:translate-x-1" aria-hidden="true" />
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