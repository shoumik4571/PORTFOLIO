'use client';

import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/shoumik4571',
      icon: GithubIcon,
      external: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shoumik-aggarwal-220350383/',
      icon: LinkedinIcon,
      external: true,
    },
    {
      label: 'Email',
      href: 'mailto:shoumik.aggarwal19@gmail.com',
      icon: Mail,
      external: false,
    },
  ];

  return (
    <footer
      className="border-t border-border bg-surface/50 overflow-hidden"
      role="contentinfo"
    >
      <div className="watermark-mask pt-10" aria-hidden="true">
        <div className="watermark-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="watermark-text">
              SHOUMIK AGGARWAL
            </span>
          ))}
        </div>
      </div>
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div>
              <p className="heading-sm font-medium tracking-tight text-textPrimary">
                SHOUMIK AGGARWAL
              </p>
              <p className="body text-textSecondary mt-1">AI & Software Developer</p>
            </div>

            <p className="body-sm text-textMuted max-w-xs">
              Early-career developer building practical applications with AI, automation, and modern software technologies.
            </p>

            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg text-textMuted hover:text-accent hover:bg-surface transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="md:col-span-2" aria-label="Footer navigation">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <h4 className="caption text-textMuted">Explore</h4>
                <ul className="space-y-2" role="list">
                  <li><a href="#about" className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">About</a></li>
                  <li><a href="#projects" className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">Projects</a></li>
                  <li><a href="#hackathons" className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">Hackathons</a></li>
                  <li><a href="#internship" className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">Internship</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="caption text-textMuted">Credentials</h4>
                <ul className="space-y-2" role="list">
                  <li><a href="#certifications" className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">Certifications</a></li>
                  <li><a href="#skills" className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">Skills</a></li>
                  <li><a href="#education" className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">Education</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="caption text-textMuted">Connect</h4>
                <ul className="space-y-2" role="list">
                  <li><a href="#contact" className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">Contact</a></li>
                  <li><a href="https://github.com/shoumik4571" target="_blank" rel="noopener noreferrer" className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/shoumik-aggarwal-220350383/" target="_blank" rel="noopener noreferrer" className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">LinkedIn</a></li>
                  <li><a href="/resume/Shoumik_Aggarwal_Resume.docx" download className="body-sm text-textSecondary hover:text-textPrimary transition-colors duration-fast">Resume</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="caption text-textMuted">Current Focus</h4>
                <ul className="space-y-2" role="list">
                  <li><span className="body-sm text-textMuted">Agentic AI</span></li>
                  <li><span className="body-sm text-textMuted">Generative AI</span></li>
                  <li><span className="body-sm text-textMuted">Cybersecurity</span></li>
                  <li><span className="body-sm text-textMuted">Software Development</span></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="body-sm text-textMuted">
              © {currentYear} Shoumik Aggarwal. All rights reserved.
            </p>

            <p className="body-sm text-textMuted">
              Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}