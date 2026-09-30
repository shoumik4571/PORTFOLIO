'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#hackathons', label: 'Hackathons' },
  { href: '#internship', label: 'Internship' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 20
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 transition-all duration-normal',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-custom h-full flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#"
          className="rounded-lg transition-transform duration-fast hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Shoumik Aggarwal - Home"
        >
          <Logo className="w-9 h-9" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-body-sm font-medium text-textSecondary hover:text-textPrimary transition-colors duration-fast relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent hover:after:w-full transition-all duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-1 py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume/Shoumik_Aggarwal_Resume.docx"
            download
            className="btn-primary gap-2"
          >
            <FileText className="w-4 h-4" aria-hidden="true" />
            Resume
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-textSecondary hover:text-textPrimary hover:bg-surface-elevated transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-custom py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-body font-medium text-textSecondary hover:text-textPrimary hover:bg-surface-elevated rounded-lg transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume/Shoumik_Aggarwal_Resume.docx"
                download
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full justify-center mt-2"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}