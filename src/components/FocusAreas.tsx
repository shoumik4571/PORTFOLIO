'use client';

import { motion } from 'framer-motion';
import { SpotlightCard } from './skiper/SpotlightCard';

const focusAreas = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    description: 'Exploring autonomous AI agents and multi-agent workflows through hackathon builds.',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    description: 'Learning to build with large language models and AI APIs such as Gemini.',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Building full-stack applications with Next.js, TypeScript, and modern tooling.',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Exploring cloud platforms and deployment, including Firebase and Vercel.',
  },
];

export function FocusAreas() {
  return (
    <section
      id="focus"
      className="section bg-transparent"
      aria-labelledby="focus-heading"
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
            02 // Focus
          </span>
          <h2 id="focus-heading" className="heading-lg mb-4">
            Currently Exploring
          </h2>
          <p className="body text-textSecondary">
            Technologies and domains I&apos;m actively learning and experimenting with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
              aria-label={area.title}
            >
              <SpotlightCard className="h-full">
                <h3 className="heading-sm mb-3 text-textPrimary group-hover:text-accent transition-colors duration-fast relative z-10">
                  {area.title}
                </h3>
                <p className="body text-textSecondary relative z-10">
                  {area.description}
                </p>
              </SpotlightCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}