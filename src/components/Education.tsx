'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { education } from '@/data/experience';

function EducationItem({ edu, index }: { edu: typeof education[0]; index: number }) {
  const isDegree = 'degree' in edu && 'board' in edu;

  return (
    <motion.article
      key={edu.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      className="card group relative overflow-hidden"
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal" aria-hidden="true" />

      <div className="relative z-10 flex items-start gap-4">
        <div className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-normal',
          isDegree ? 'bg-blue-500/10' : 'bg-accent/10'
        )}>
          {isDegree ? (
            <GraduationCap className="w-6 h-6 text-blue-400" aria-hidden="true" />
          ) : (
            <Award className="w-6 h-6 text-accent" aria-hidden="true" />
          )}
        </div>

        <div className="flex-1 min-w-0 space-y-2">
          {isDegree && (
            <>
              <h3 className="heading-sm text-textPrimary">{edu.degree}</h3>
              <p className="body-sm text-textMuted font-medium">{edu.board}</p>
              {'school' in edu && (
                <p className="body text-textSecondary">{edu.school}</p>
              )}
              <p className="body text-textSecondary">{edu.description}</p>
              <p className="body-sm text-textMuted font-mono">Completed: {edu.year}</p>
            </>
          )}
          {!isDegree && (
            <>
              <h3 className="heading-sm text-textPrimary">{edu.degree}</h3>
              <p className="body-sm text-textMuted font-medium">Score: {edu.score}</p>
              <p className="body text-textSecondary">{edu.description}</p>
              <p className="body-sm text-textMuted font-mono">Year: {edu.year}</p>
            </>
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

export function Education() {
  return (
    <section
      id="education"
      className="section bg-surface/50"
      aria-labelledby="education-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 id="education-heading" className="heading-lg mb-4">
            Education
          </h2>
          <p className="body text-textSecondary">
            Academic background and testing credentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <EducationItem key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}