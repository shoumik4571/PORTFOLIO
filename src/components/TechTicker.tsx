'use client';

const defaultTechs = [
  'Next.js',
  'TypeScript',
  'Python',
  'JavaScript',
  'Gemini AI',
  'Agentic AI',
  'Firebase',
  'Tailwind CSS',
  'REST APIs',
  'Prompt Engineering',
  'Cybersecurity',
  'Git & GitHub',
];

interface TechTickerProps {
  items?: string[];
  reverse?: boolean;
}

export function TechTicker({ items = defaultTechs, reverse = false }: TechTickerProps) {
  const row = [...items, ...items];

  return (
    <div className="ticker" role="list" aria-label="Technologies I work with">
      <div
        className="ticker-track"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {row.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="ticker-item"
            role="listitem"
            aria-hidden={index >= items.length}
          >
            <span className="ticker-sep" aria-hidden="true">
              {'</>'}
            </span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
