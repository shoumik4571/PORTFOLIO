'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section
      id="about"
      className="section bg-background"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
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
              My interests span artificial intelligence, Agentic AI, Python, web development, cybersecurity, and software engineering.
            </p>
            <p className="body-lg">
              I actively participate in hackathons and technical challenges while building projects to develop practical technical skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}