import React from 'react';
import EventHero from '../components/events/EventHero';
import EventHighlights from '../components/events/EventHighlights';
import SpeakersSection from '../components/events/SpeakersSection';
import EventAgenda from '../components/events/EventAgenda';
import ProductDemos from '../components/events/ProductDemos';
import EventVenue from '../components/events/EventVenue';
import EventFAQ from '../components/events/EventFAQ';
import EventRegister from '../components/events/EventRegister';

const Events = () => {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <EventHero />
      <EventHighlights />
      <SpeakersSection />
      <EventAgenda />
      <ProductDemos />
      <EventVenue />
      <EventFAQ />
      <EventRegister />
    </main>
  );
};

export default Events;
