'use client';

import { motion } from 'framer-motion';
import { CertificationCard } from './CertificationCard';
import { certifications } from '@/data/certifications';

export function CertificationGrid() {
  const completed = certifications.filter((c) => c.status === 'completed');
  const inProgress = certifications.filter((c) => c.status === 'in-progress');

  return (
    <section
      id="certifications"
      className="section bg-surface/50"
      aria-labelledby="certifications-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 id="certifications-heading" className="heading-lg mb-4">
            Certifications
          </h2>
          <p className="body text-textSecondary">
            Completed credentials and certifications currently in progress.
          </p>
        </motion.div>

        {completed.length > 0 && (
          <div className="mb-12">
            <h3 className="caption text-textMuted mb-6 text-center">Completed</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completed.map((certification, index) => (
                <CertificationCard key={certification.id} certification={certification} index={index} />
              ))}
            </div>
          </div>
        )}

        {inProgress.length > 0 && (
          <div>
            <h3 className="caption text-textMuted mb-6 text-center">Currently Pursuing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inProgress.map((certification, index) => (
                <CertificationCard key={certification.id} certification={certification} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}