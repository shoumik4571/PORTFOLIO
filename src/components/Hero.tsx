'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { MotionBackground } from './MotionBackground';
import { Magnetic } from './Magnetic';

export function Hero() {
  const socialLinks = [
    {
      href: 'https://github.com/shoumik4571',
      label: 'GitHub',
      icon: GithubIcon,
      external: true,
    },
    {
      href: 'https://www.linkedin.com/in/shoumik-aggarwal-220350383/',
      label: 'LinkedIn',
      icon: LinkedinIcon,
      external: true,
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <MotionBackground />
      <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern grid-fade opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 hairline-top opacity-70" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="kicker">
                <span className="kicker-dot" aria-hidden="true" />
                Early-Career Developer · Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="heading-xl gradient-text"
            >
              SHOUMIK AGGARWAL
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="heading-md font-normal gradient-accent text-glow-accent"
            >
              AI & SOFTWARE DEVELOPER
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="body-lg text-textSecondary max-w-xl"
            >
              Building practical applications with AI, automation, and modern software technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="body text-textMuted max-w-md font-mono text-[0.9rem]"
            >
              <span className="text-accent">$</span> Early-career developer focused on AI, software
              development, web technologies, and cybersecurity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Magnetic>
                <a
                  href="#projects"
                  className="btn-primary group"
                  aria-label="View my projects"
                >
                  View Projects
                  <ExternalLink className="w-4 h-4 transition-transform duration-fast group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/resume/Shoumik_Aggarwal_Resume.docx"
                  download
                  className="btn-secondary"
                  aria-label="Download my resume"
                >
                  Download Resume
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="flex items-center gap-6 pt-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-body-sm text-textMuted hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 py-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                  <span>{social.label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 aurora-blob aurora-b left-[10%] top-[10%] w-[80%] h-[80%] bg-accent/10" aria-hidden="true" />
            <div className="relative aspect-square max-w-md mx-auto">
              <TerminalVisual />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-textMuted"
          aria-hidden="true"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

function TerminalVisual() {
  const lines = [
    { prompt: '~/projects', command: 'ls', output: '' },
    { prompt: '', command: '', output: 'krishisense-ai/' },
    { prompt: '', command: '', output: 'HackerRank-Orchestrate-Buy-or-Wait/' },
    { prompt: '', command: '', output: 'Password-Security-Toolkit/' },
    { prompt: '~/projects', command: 'python main.py', output: '' },
    { prompt: '', command: '', output: '> Initializing AI agent...' },
    { prompt: '', command: '', output: '> Loading model weights...' },
    { prompt: '', command: '', output: '> Ready. Awaiting input.' },
  ];

  return (
    <div className="card-elevated terminal-glow h-full flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" aria-hidden="true" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" aria-hidden="true" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" aria-hidden="true" />
        </div>
        <div className="flex-1 text-center text-caption text-textMuted font-mono">shoumik — zsh</div>
        <div className="w-12" />
      </div>

      <div className="flex-1 overflow-y-auto p-4 font-mono text-body-sm text-textSecondary">
        <div className="space-y-1.5">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.18, duration: 0.35, ease: 'easeOut' }}
              className="flex gap-2 items-baseline"
            >
              {line.prompt && (
                <>
                  <span className="text-accent font-medium whitespace-nowrap">{line.prompt}</span>
                  <span className="text-textMuted">$</span>
                </>
              )}
              {line.command && (
                <span className="text-textPrimary whitespace-nowrap">{line.command}</span>
              )}
              {line.output && (
                <span className="text-textMuted whitespace-pre-wrap">{line.output}</span>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + lines.length * 0.18, duration: 0.3 }}
            className="flex gap-2 items-baseline"
            aria-hidden="true"
          >
            <span className="text-accent font-medium whitespace-nowrap">~/projects</span>
            <span className="text-textMuted">$</span>
            <span className="cursor-blink" />
          </motion.div>
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-3 border-t border-border bg-surface">
        <span className="text-caption text-textMuted">Python 3.11</span>
        <span className="w-px h-4 bg-border mx-2" aria-hidden="true" />
        <span className="text-caption text-textMuted">UTF-8</span>
        <span className="w-px h-4 bg-border mx-2" aria-hidden="true" />
        <span className="text-caption text-accent">● ACTIVE</span>
      </div>
    </div>
  );
}
