import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OccasionsSection } from './components/OccasionsSection';
import { HowToGuide } from './components/HowToGuide';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { AudioShowcase } from './components/AudioShowcase';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { Watermark } from './components/Watermark';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#faf7f2] dark:bg-[#0c0a09] text-[#292524] dark:text-[#f5f5f4] flex flex-col font-sans selection:bg-amber-400/30 selection:text-amber-950 dark:selection:bg-amber-500/30 dark:selection:text-amber-200 transition-colors duration-300">
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
        <Watermark />
      </div>
    </ThemeProvider>
  );
}
