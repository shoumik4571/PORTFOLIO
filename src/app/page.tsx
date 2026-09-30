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
import { experience } from '@/data/experience';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <FocusAreas />
        <ProjectGrid />
        <HackathonTimeline />
        <InternshipCard experience={experience[0]} />
        <CertificationGrid />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}