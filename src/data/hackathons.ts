export interface Hackathon {
  id: string;
  name: string;
  role: string;
  description: string;
  project?: string;
  projectUrl?: string;
  date?: string;
}

export const hackathons: Hackathon[] = [
  {
    id: 'hackerrank-orchestrate',
    name: 'HACKERRANK ORCHESTRATE',
    role: 'Participant / Developer',
    description: 'Participated in HackerRank Orchestrate and developed Buy or Wait as an AI-focused project.',
    project: 'Buy or Wait',
    projectUrl: 'https://github.com/shoumik4571/HackerRank-Orchestrate-Buy-or-Wait',
    date: 'September 2026',
  },
  {
    id: 'gdg-code-communities',
    name: 'GDG CODE FOR COMMUNITIES',
    role: 'Participant / Developer',
    description: 'Participated in GDG Code for Communities and developed KrishiSense AI, an AI-powered agricultural intelligence prototype, as part of the challenge.',
    project: 'KrishiSense AI',
    projectUrl: 'https://github.com/shoumik4571/krishisense-ai',
    date: 'September 2026',
  },
  {
    id: 'nvidia-nebius-ai-hackathon',
    name: 'NVIDIA × NEBIUS GLOBAL AI HACKATHON',
    role: 'Participant / Developer',
    description: 'Built Talverin — an AI-powered code review and analysis platform that helps developers catch bugs early and improve code quality using LLMs, built with Next.js, TypeScript, and NVIDIA AI technologies.',
    project: 'Talverin',
    projectUrl: 'https://github.com/shoumik4571/talverin',
    date: 'September 2026',
  },
];