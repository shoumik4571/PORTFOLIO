export interface Certification {
  id: string;
  name: string;
  provider: string;
  description: string;
  status: 'completed' | 'in-progress';
  completionDate?: string;
  certificateUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: 'microsoft-python-fundamentals',
    name: 'MICROSOFT PYTHON PROGRAMMING FUNDAMENTALS',
    provider: 'Microsoft / Coursera',
    description:
      'Online course in Python programming fundamentals, authorized by Microsoft and offered through Coursera. Covers core Python concepts including data structures, control flow, functions, and modules.',
    status: 'completed',
    completionDate: '20 September 2026',
    certificateUrl: 'https://coursera.org/verify/OY6Y1HKMHTM1',
  },
  {
    id: 'google-ai-essentials',
    name: 'GOOGLE AI ESSENTIALS',
    provider: 'Google',
    description:
      'Foundational understanding of AI concepts and practical AI applications for everyday and professional use.',
    status: 'in-progress',
  },
  {
    id: 'google-foundations-cybersecurity',
    name: 'GOOGLE FOUNDATIONS OF CYBERSECURITY',
    provider: 'Google',
    description:
      'Introduction to cybersecurity fundamentals, security models, threats, vulnerabilities, and risk management.',
    status: 'in-progress',
  },
];