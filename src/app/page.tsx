import { HeroSection } from '@/components/jack/HeroSection';
import { MarqueeSection } from '@/components/jack/MarqueeSection';
import { AboutSection } from '@/components/jack/AboutSection';
import { ServicesSection } from '@/components/jack/ServicesSection';
import { ProjectsSection } from '@/components/jack/ProjectsSection';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorGlow } from '@/components/CursorGlow';
import { DeepSpace } from '@/components/DeepSpace';
import { VideoBackdrop } from '@/components/VideoBackdrop';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <DeepSpace />
      <VideoBackdrop />
      <div className="space-veil" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <main id="main-content" className="min-h-screen relative z-10" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </main>
    </>
  );
}
