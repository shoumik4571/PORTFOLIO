export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  additionalInfo?: string;
  problem?: string;
  solution?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  imagePlaceholder: string;
  filters: string[];
}

export const projects: Project[] = [
  {
    id: 'krishisense-ai',
    title: 'KRISHISENSE AI',
    category: 'AI / Web Development',
    description:
      'AI-powered agricultural intelligence and decision-support for small and marginal farmers in India, built as a hackathon MVP.',
    technologies: ['Next.js', 'TypeScript', 'Gemini AI', 'Firebase', 'Tailwind CSS'],
    additionalInfo: 'Hackathon MVP for GDG Code for Communities 2.0 — Track 4: Agricultural Intelligence.',
    problem:
      'Small and marginal farmers across India lack access to data-driven agricultural guidance, relying on traditional methods instead of satellite data, soil-health analytics, and climate forecasting.',
    solution:
      'An interoperable digital-agriculture network prototype delivering real-time, localised agro-advisories: farm profile, Gemini 2.5 Flash crop-photo analysis, a 7-day action plan, a farm intelligence dashboard, and a regional risk view, with Firebase persistence and a graceful offline demo fallback.',
    githubUrl: 'https://github.com/shoumik4571/krishisense-ai',
    liveDemoUrl: 'https://krishisense-ai-nine.vercel.app',
    imagePlaceholder: 'Farm intelligence dashboard with crop analysis and 7-day action plan',
    filters: ['ai', 'web-development', 'software'],
  },
  {
    id: 'buy-or-wait',
    title: 'BUY OR WAIT',
    category: 'AI / Python',
    description:
      'AI-powered financial decision agent that decides whether to pay in full, pay partially, use installments, wait, or not proceed.',
    technologies: ['Python', 'AI', 'OCR'],
    additionalInfo: 'Built for HackerRank Orchestrate, September 2026.',
    problem:
      'For every purchase request, decide the safest payment action while keeping the minimum balance safe across a 90-day forecast of income, expenses, and scheduled obligations.',
    solution:
      'A rule-based Python agent with strict CSV ingestion, runtime OCR for image-backed amounts, multilingual evidence weighting, a 90-day Decimal forecast, and ranked payment decisions. Runs fully offline with zero LLM or API calls.',
    githubUrl: 'https://github.com/shoumik4571/HackerRank-Orchestrate-Buy-or-Wait',
    imagePlaceholder: 'Financial decision agent processing payment forecasts',
    filters: ['ai', 'python', 'software'],
  },
  {
    id: 'password-security-toolkit',
    title: 'PASSWORD SECURITY TOOLKIT',
    category: 'Cybersecurity / Python',
    description:
      'A Python command-line application for checking password strength, generating secure passwords, and detecting commonly used passwords.',
    technologies: ['Python'],
    problem:
      'Weak and reused passwords are a common attack vector, and users need a simple offline way to evaluate password strength and generate secure alternatives.',
    solution:
      'An offline CLI tool that scores passwords 0–100 on length, character variety, and predictable patterns, generates cryptographically secure passwords with the secrets module, and checks entries against a local common-password list. No third-party dependencies; nothing is stored or transmitted.',
    githubUrl: 'https://github.com/shoumik4571/Password-Security-Toolkit',
    imagePlaceholder: 'Terminal interface showing password strength analysis',
    filters: ['python', 'cybersecurity', 'software'],
  },
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'python', label: 'Python' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'software', label: 'Software' },
];