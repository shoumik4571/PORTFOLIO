'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { NumberTicker } from './magic/NumberTicker';

const OrbitGem = dynamic(() => import('./three/OrbitGem').then((m) => m.OrbitGem), {
  ssr: false,
  loading: () => (
    <div
      className="aspect-square w-full max-w-sm mx-auto rounded-2xl border border-border bg-surface/50"
      aria-hidden="true"
    />
  ),
});

export function About() {
  return (
    <section
      id="about"
      className="section bg-transparent"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center max-w-5xl mx-auto"
        >
          <div className="text-center lg:text-left">
            <span className="kicker">
              <span className="kicker-dot" aria-hidden="true" />
              01 // Profile
            </span>
            <h2 id="about-heading" className="heading-lg mb-6">
              About Me
            </h2>
            <div className="prose prose-invert max-w-none text-left">
              <p className="body-lg mb-6">
                I&apos;m an early-career AI and software developer who recently completed Class XII and is focused on building practical applications and exploring emerging technologies.
              </p>
              <p className="body-lg mb-6">
                My interests span artificial intelligence, Agentic AI, Python, web development, and software engineering.
              </p>
              <p className="body-lg">
                I actively participate in hackathons and technical challenges while building projects to develop practical technical skills.
              </p>
              <dl className="mt-8 flex items-center gap-6 sm:gap-8 flex-wrap font-mono">
                {[
                  { value: 3, label: 'Projects' },
                  { value: 3, label: 'Hackathons' },
                  { value: 26, label: 'Technologies' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dd className="text-3xl font-bold text-accent tabular-nums">
                      <NumberTicker value={stat.value} />
                    </dd>
                    <dt className="text-caption text-textMuted uppercase tracking-widest">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <OrbitGem className="aspect-square w-full max-w-sm mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}