export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'PROGRAMMING',
    skills: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'AI',
    skills: ['Generative AI', 'Agentic AI', 'AI APIs', 'Prompt Engineering', 'Machine Learning', 'AI Fundamentals'],
  },
  {
    category: 'WEB DEVELOPMENT',
    skills: ['Web Development', 'React', 'Next.js', 'Tailwind CSS', 'REST APIs', 'Firebase', 'Git', 'GitHub'],
  },
  {
    category: 'CYBERSECURITY',
    skills: ['Cybersecurity Fundamentals', 'Python for Cybersecurity'],
  },
  {
    category: 'TOOLS',
    skills: ['Git', 'GitHub', 'Microsoft Excel'],
  },
  {
    category: 'CURRENTLY LEARNING',
    skills: ['Cloud Computing', 'Advanced AI Agents', 'Cybersecurity', 'Software Engineering'],
  },
];