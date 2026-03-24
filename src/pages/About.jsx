import React from 'react';
import { Target, Eye, ChevronRight } from 'lucide-react';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';

export default function About() {
  const leadership = [
    {
      name: "Srikanth Bonugu",
      designation: "Co-Founder",
      quote: "20+ years in IT business development and growth. Focused on AI-powered solutions, client partnerships, and talent empowerment across India and the US.",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop"
    },
    {
      name: "Mallikarjun Dontula",
      designation: "Co-Founder",
      quote: "20+ years in U.S. tech strategy with expertise in SAP, Boomi, AWS, Azure Databricks, and Generative AI. Leads transformation where people and technology converge.",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3540&auto=format&fit=crop"
    },
    {
      name: "Manasa Donthineni",
      designation: "Managing Director",
      quote: "19+ years in IT with expertise in sales, recruitment, and project management. Passionate about empowering teams, driving innovation, and creating lasting impact.",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3540&auto=format&fit=crop"
    },
    {
      name: "Ramakrishna (Ram) Botta",
      designation: "Board Director & Strategic Advisor",
      quote: "20+ years in HR leadership, governance, and advisory across IT, pharma, and emerging tech. Guides Tekisho's strategy, partnerships, and AI-driven growth.",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3540&auto=format&fit=crop"
    }
  ];

  return (
    <main className="w-full bg-[var(--bg-main)]">
      {/* Intro Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-8 text-[var(--text-primary)] leading-tight">
            About <span className="text-[var(--accent-primary)] font-medium">Tekisho</span>
          </h1>
          
          <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed text-left md:text-center">
            <p>
              Tekisho means <strong className="text-[var(--text-primary)] font-medium">"the right place"</strong>—a perfect alignment of people, ideas, and purpose. At Tekisho we embody this principle by creating the right place where vision meets execution, and bold ideas become transformative realities.
            </p>
            <p>
              We are more than a technology company—we are architects of AI-powered digital transformation, combining deep expertise in ERP, Cloud, System Integration, Cybersecurity, and next-generation AI solutions. Every project we deliver is rooted in precision, tailored to the unique challenges of each client, and driven by a relentless pursuit of excellence.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-[var(--bg-card)] rounded-2xl p-8 md:p-12 border border-[var(--border-light)] mb-12">
          <h3 className="text-xl font-medium text-[var(--text-primary)] mb-6 text-center">At Tekisho, innovation is intentional. Our solutions are:</h3>
          <ul className="space-y-4 text-left max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)] font-medium">AI-Driven</strong> – Infusing intelligence into every workflow for smarter decision-making.</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)] font-medium">Cloud-Ready</strong> – Agile, secure, and built for scale.</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)] font-medium">Future-Proof</strong> – Combining innovation with measurable business outcomes.</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
              <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)] font-medium">Customer-Centric</strong> – Designed around the needs of those we serve.</span>
            </li>
          </ul>
        </div>
        
        <p className="text-center text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
          From startups to Fortune 500 enterprises, across industries like manufacturing, healthcare, logistics, energy, retail, and BFSI, we deliver results that are not only impactful but enduring.
        </p>
      </section>

      {/* Mission & Vision Section (Blue block morphed into Archio Accent block) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 w-full" style={{ backgroundColor: 'var(--accent-primary)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Mission</h2>
          <p className="text-xl text-green-50 max-w-3xl mx-auto mb-16 opacity-90">
            Driving transformation through purpose, vision, and unwavering commitment to excellence
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-10 md:p-12 text-center shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6">
                <Target className="w-8 h-8" style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ color: 'var(--text-primary)' }}>Our Mission</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                To make digital transformation accessible, intelligent, and impactful—delivering rapid, economical AI solutions with integrity, innovation, and an unwavering focus on our customers.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-10 md:p-12 text-center shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6">
                <Eye className="w-8 h-8" style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ color: 'var(--text-primary)' }}>Our Vision</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                To be the world's most trusted partner in AI-led transformation—driving agility, intelligence, and growth for every business we serve.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-green-50 max-w-4xl mx-auto leading-relaxed border-t border-green-800/50 pt-12">
            Guided by our <strong className="text-white font-medium">CLAIM</strong> values—<strong className="text-white font-medium">Customer Centricity, Leadership, Accountability, Integrity, and Mindful Innovation</strong>—we ensure that every solution we create is in its right place, bringing together technology, purpose, and human ingenuity.
          </p>
        </div>
      </section>

      {/* Core Values Expansion */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[var(--text-primary)]">
          Our Core <span className="text-[var(--accent-primary)] font-medium">Values</span>
        </h2>
        <div className="space-y-8 text-lg text-[var(--text-secondary)] leading-relaxed italic border-l-4 border-[var(--accent-primary)] pl-6 py-2 text-left bg-[var(--bg-card)] p-8 rounded-r-2xl">
          <p>
            Tekisho is where ideas find their perfect fit. Where innovation belongs. Where your business is in the right place to thrive.
          </p>
          <p>
            At Tekisho, we don't just offer solutions—we <strong className="text-[var(--text-primary)] font-medium not-italic">CLAIM</strong> responsibility for our clients' success. Through <strong className="text-[var(--text-primary)] font-medium not-italic">Customer focus, Leadership, Accountability, Integrity</strong> and <strong className="text-[var(--text-primary)] font-medium not-italic">Mindful Innovation</strong>, we build trust, deliver value and transform industries.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-light)] overflow-hidden">
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[var(--text-primary)]">
            Meet Our <span className="text-[var(--accent-primary)] font-medium">Leadership Team</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Visionary leaders driving innovation and transformation with decades of experience
          </p>
        </div>
        
        <AnimatedTestimonials testimonials={leadership} autoplay={true} />
      </section>
    </main>
  );
}
