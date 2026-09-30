'use client';

import { motion } from 'framer-motion';
import { HackathonCard } from './HackathonCard';
import { hackathons } from '@/data/hackathons';

export function HackathonTimeline() {
  return (
    <section
      id="hackathons"
      className="section bg-surface/50"
      aria-labelledby="hackathons-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="kicker">
            <span className="kicker-dot" aria-hidden="true" />
            04 // Journey
          </span>
          <h2 id="hackathons-heading" className="heading-lg mb-4">
            Hackathons & Technical Activities
          </h2>
          <p className="body text-textSecondary">
            Competitions and challenges where I&apos;ve built projects and collaborated with other developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mt-12 text-center"
        >
          <p className="body-sm text-textMuted">
            No rankings, prizes, or awards claimed unless explicitly stated. Focus on participation and learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}