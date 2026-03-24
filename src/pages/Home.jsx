import React from 'react';
import Hero from '../components/Hero';
import { Industries } from '../components/Industries';
import WhyTekisho from '../components/WhyTekisho';
import Services from '../components/Services';
import { RoadmapSection } from '../components/RoadmapSection';
import Comparison from '../components/Comparison';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Industries />
      <WhyTekisho />
      <RoadmapSection />
      <Services />
      <Comparison />
      <TestimonialsSection />
    </main>
  );
}
