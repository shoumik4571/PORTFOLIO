import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { FocusAreas } from '@/components/FocusAreas';
import { ProjectGrid } from '@/components/ProjectGrid';
import { HackathonTimeline } from '@/components/HackathonTimeline';
import { InternshipCard } from '@/components/InternshipCard';
import { CertificationGrid } from '@/components/CertificationGrid';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { TechTicker } from '@/components/TechTicker';
import { CursorGlow } from '@/components/CursorGlow';
import { experience } from '@/data/experience';

const focusTickerItems = [
  'Agentic AI',
  'Generative AI',
  'Cybersecurity',
  'Software Development',
  'Cloud Computing',
  'Python',
  'Machine Learning',
  'Prompt Engineering',
];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <TechTicker />
        <About />
        <FocusAreas />
        <ProjectGrid />
        <HackathonTimeline />
        <InternshipCard experience={experience[0]} />
        <CertificationGrid />
        <Skills />
        <Education />
        <TechTicker items={focusTickerItems} reverse />
        <Contact />
      </main>
      <Footer />
    </>
  );
}