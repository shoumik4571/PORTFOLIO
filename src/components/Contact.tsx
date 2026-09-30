'use client';

import { motion } from 'framer-motion';
import { Mail, FileText, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { cn } from '@/lib/utils';

const contactLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/shoumik4571',
    icon: GithubIcon,
    description: 'View my repositories and contributions',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shoumik-aggarwal-220350383/',
    icon: LinkedinIcon,
    description: 'Connect with me professionally',
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:shoumik.aggarwal19@gmail.com',
    icon: Mail,
    description: 'Send me a direct message',
    external: false,
  },
  {
    id: 'resume',
    label: 'Resume',
    href: '/resume/Shoumik_Aggarwal_Resume.docx',
    icon: FileText,
    description: 'Download my full resume',
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="section bg-background"
      aria-labelledby="contact-heading"
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
            09 // Contact
          </span>
          <h2 id="contact-heading" className="heading-lg mb-4">
            Let&apos;s Connect
          </h2>
          <p className="body text-textSecondary">
            I&apos;m interested in internships, technical collaborations, hackathons, and opportunities to build useful technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.id}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className="card group flex flex-col items-center text-center p-8"
              aria-label={`${contact.label} - ${contact.description}`}
            >
              <div className={cn(
                'w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-normal',
                contact.id === 'resume' ? 'bg-accent/10' : 'bg-surface-elevated border border-border'
              )}>
                <contact.icon
                  className={cn(
                    'w-7 h-7 transition-colors duration-fast',
                    contact.id === 'resume' ? 'text-accent' : 'text-textSecondary group-hover:text-accent'
                  )}
                  aria-hidden="true"
                />
              </div>

              <h3 className="heading-sm text-textPrimary mb-1 group-hover:text-accent transition-colors duration-fast">
                {contact.label}
              </h3>
              <p className="body-sm text-textMuted mb-4">{contact.description}</p>

              <span className="inline-flex items-center gap-1 text-body-sm text-accent hover:text-accent-hover transition-colors duration-fast group/connect">
                {contact.external ? 'Open' : 'Contact'}
                <ExternalLink className="w-3 h-3 transition-transform duration-fast group-hover/connect:translate-x-1" aria-hidden="true" />
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="mt-16 text-center"
        >
          <p className="body-sm text-textMuted">
            Based in Ghaziabad, Uttar Pradesh — open to remote opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}