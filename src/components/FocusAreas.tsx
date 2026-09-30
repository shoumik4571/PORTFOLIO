'use client';

import { motion } from 'framer-motion';

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
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Learning security fundamentals and building Python-based security tooling.',
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
      className="section bg-surface/50"
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
              className="card group"
              tabIndex={0}
              role="region"
              aria-label={area.title}
            >
              <div className="relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal"
                  aria-hidden="true"
                />
                <h3 className="heading-sm mb-3 text-textPrimary group-hover:text-accent transition-colors duration-fast relative z-10">
                  {area.title}
                </h3>
                <p className="body text-textSecondary relative z-10">
                  {area.description}
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-normal"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}