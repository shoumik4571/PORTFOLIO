export interface Experience {
  id: string;
  organization: string;
  role: string;
  program: string;
  field: string;
  status: string;
  duration: string;
  structure: string;
  mode: string;
  startDate: string;
  endDate: string;
  supervisor: string;
  description: string;
  isUpcoming: boolean;
}

export const experience: Experience[] = [
  {
    id: 'persevex-internship',
    organization: 'PERSEVEX',
    role: 'AI Intern — Persevex',
    program: 'AI Training and Internship Program',
    field: 'Artificial Intelligence',
    status: 'Ongoing',
    duration: '3 Months',
    structure: '1 month of training followed by 2 months of internship',
    mode: 'Remote',
    startDate: '10 October 2026',
    endDate: '10 January 2027',
    supervisor: 'Mr. Shanmukh Shekar K C',
    description:
      'Accepted into a 3-month AI Training and Internship Program at Persevex, consisting of one month of training followed by two months of remote internship experience. Working on AI-powered solutions including LLM integration, prompt engineering, and building AI-powered applications.',
    isUpcoming: false,
  },
];

export const education = [
  {
    id: 'class-xii',
    degree: 'Class XII — CBSE (Science PCM)',
    board: 'CBSE',
    school: 'St. Kabir Modern School, Delhi',
    year: 'August 2026',
    description: 'Completed Class XII under the Central Board of Secondary Education.',
  },
  {
    id: 'pte-academic',
    degree: 'PTE Academic',
    score: '89',
    year: '2026',
    description: 'Pearson Test of English Academic — Overall score 89.',
  },
];