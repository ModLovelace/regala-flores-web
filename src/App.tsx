import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OccasionsSection } from './components/OccasionsSection';
import { HowToGuide } from './components/HowToGuide';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { AudioShowcase } from './components/AudioShowcase';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#292524] flex flex-col font-sans selection:bg-amber-400/30 selection:text-amber-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OccasionsSection />
        <HowToGuide />
        <InteractiveSimulator />
        <AudioShowcase />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
