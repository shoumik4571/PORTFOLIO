import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0b',
        surface: '#141416',
        surfaceElevated: '#1c1c1f',
        border: '#2a2a2d',
        borderHover: '#3a3a3e',
        textPrimary: '#fafafa',
        textSecondary: '#a1a1aa',
        textMuted: '#71717a',
        accent: '#00d4aa',
        accentHover: '#00e8bb',
        accentMuted: '#00d4aa20',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-lg': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.3' }],
        'heading-md': ['clamp(1.5rem, 2.5vw, 1.875rem)', { lineHeight: '1.35' }],
        'heading-sm': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'space-4xs': '0.125rem',
        'space-3xs': '0.25rem',
        'space-2xs': '0.375rem',
        'space-xs': '0.5rem',
        'space-sm': '0.75rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2rem',
        'space-2xl': '3rem',
        'space-3xl': '4rem',
        'space-4xl': '6rem',
        'space-5xl': '8rem',
      },
      borderRadius: {
        'radius-sm': '0.375rem',
        'radius-md': '0.5rem',
        'radius-lg': '0.75rem',
        'radius-xl': '1rem',
        'radius-2xl': '1.5rem',
      },
      boxShadow: {
        'shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.3)',
        'shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)',
        'shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.2)',
        'shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
        'shadow-glow': '0 0 0 1px rgb(0 212 170 / 0.1), 0 0 20px rgb(0 212 170 / 0.05)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};

export default config;