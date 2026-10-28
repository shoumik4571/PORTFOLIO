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
    id: 'google-ai-essentials',
    name: 'GOOGLE AI ESSENTIALS',
    provider: 'Google / Coursera',
    description:
      'Foundational understanding of AI concepts and practical AI applications for everyday and professional use.',
    status: 'completed',
    completionDate: '2024',
    certificateUrl: 'https://coursera.org/verify/specialization/TNMKIGFJDZNA',
  },
  {
    id: 'google-ai-for-app-building',
    name: 'GOOGLE AI FOR APP BUILDING',
    provider: 'Google / Coursera',
    description:
      'Building AI-powered applications using Google AI technologies, including Vertex AI, Gemini API, and AI/ML model integration into applications.',
    status: 'completed',
    completionDate: '2024',
    certificateUrl: 'https://coursera.org/verify/M999R8TJWPRL',
  },
  {
    id: 'microsoft-azure-ai-fundamentals',
    name: 'MICROSOFT AZURE AI FUNDAMENTALS (AI-900)',
    provider: 'Microsoft',
    description:
      'Fundamental knowledge of AI concepts, Azure AI services, machine learning, computer vision, natural language processing, and responsible AI on Microsoft Azure.',
    status: 'in-progress',
  },
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
];