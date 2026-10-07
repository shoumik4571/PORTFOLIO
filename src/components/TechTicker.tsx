'use client';

const techs = [
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

export function TechTicker() {
  const row = [...techs, ...techs];

  return (
    <div className="ticker" role="list" aria-label="Technologies I work with">
      <div className="ticker-track">
        {row.map((tech, index) => (
          <span key={`${tech}-${index}`} className="ticker-item" role="listitem" aria-hidden={index >= techs.length}>
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
