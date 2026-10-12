'use client';

import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './Buttons';
import { RocketScene } from '../skiper/RocketScene';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative" aria-labelledby="jack-hero-title">
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </motion.nav>

      <div className="overflow-hidden">
        <motion.h1
          id="jack-hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-[0.88] w-full mt-8 sm:mt-6 px-6 md:px-10 text-[17vw] sm:text-[15vw] lg:text-[12vw]"
        >
          Hi, i&apos;m
          <br />
          shoumik
        </motion.h1>
      </div>

      <div className="flex-1" />

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          An AI developer driven by crafting practical and intelligent software
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton href="mailto:shoumik.aggarwal19@gmail.com" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute z-10 left-1/2 -translate-x-1/2 bottom-32 w-[220px] sm:w-[260px] lg:left-auto lg:translate-x-0 lg:right-16 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:w-[380px] xl:w-[440px] pointer-events-none"
      >
        <Magnet
          padding={150}
          strength={3}
          className="flex justify-center pointer-events-auto"
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <RocketScene className="h-[240px] sm:h-[300px] lg:h-[420px]" />
        </Magnet>
      </motion.div>
    </section>
  );
}
