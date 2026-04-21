import React from 'react';
import { Target, BarChart3, MessageSquare, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { OrgSchema, ProductSchema } from '@/components/SchemaMarkup';

export default function Products() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-[var(--accent-primary)] mb-4" />,
      title: "Instant Lead Capture",
      desc: "Save contact details on the spot—zero manual data entry required."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[var(--accent-primary)] mb-4" />,
      title: "Deep Prospect Intelligence",
      desc: "Access comprehensive background research and context before every engagement, ensuring meaningful conversations from the first touchpoint."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[var(--accent-primary)] mb-4" />,
      title: "AI Meeting Intelligence",
      desc: "Our AI listens during conversations and generates precise summaries, extracting key insights and action items automatically."
    },
    {
      icon: <Zap className="w-8 h-8 text-[var(--accent-primary)] mb-4" />,
      title: "Scale Without Limits",
      desc: "Integrate effortlessly into your existing CRM workflows. Automatically sync captured data and meeting context in real-time, eliminating data silos instantly."
    }
  ];

  return (
    <>
      <SEOHead page="products" />
      <OrgSchema />
      <ProductSchema
        name="LeadQ.AI — AI Lead Intelligence Suite"
        description="Tekisho's AI-powered lead scoring, qualification, and routing platform for enterprise sales teams."
        url="https://tekisho.ai/products/leadq-ai"
        image="https://tekisho.ai/og-image.jpg"
      />
    <main id="main-content" className="min-h-screen pt-32 pb-48" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative items-start">
          
          {/* Left Column: Fixed/Sticky Hero */}
          <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)] flex flex-col justify-center w-full">
            
            <div className="relative p-10 lg:p-14 rounded-[2rem] overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
              {/* Subtle blue radial glow */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(0, 85, 255, 0.4) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(60px)',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
                pointerEvents: 'none'
              }} />

              <div className="relative z-10 flex flex-col items-center text-center">
                <BarChart3 className="w-16 h-16 text-white mb-6" strokeWidth={2.5} />
                
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white font-sans tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                  LeadQ.AI
                </h1>
                
                <h2 className="text-xl md:text-2xl font-medium mb-8 text-[var(--accent-primary)]">
                  AI Lead Intelligence Suite
                </h2>
                
                <p className="text-[17px] text-[#A3A3A3] mb-10 max-w-lg leading-relaxed font-sans">
                  Never let another opportunity slip away. LeadQ.AI transforms every business interaction into actionable intelligence, automatically capturing, enriching, and nurturing leads while you focus on building relationships.
                </p>
                
                <div className="flex items-center gap-4">
                  <button className="bg-[var(--accent-primary)] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-[rgba(0,85,255,0.3)] flex items-center gap-2">
                    <span>Book Strategy Call</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Scrollable Content (Why Choose) */}
          <div className="flex flex-col gap-8 lg:pt-0 pb-12">
            
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]  ">
                Why Choose <span className="text-[var(--accent-primary)]">LeadQ.AI</span>?
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                Discover the key advantages that make our intelligence suite the perfect solution for scaling your business.
              </p>
            </div>

            {/* Vertical Stack of Feature Cards */}
            <div className="flex flex-col gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start text-left p-8 bg-[var(--bg-card)] rounded-[1.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-[var(--accent-secondary)] flex items-center justify-center mb-6 sm:mb-0 sm:mr-8">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3  ">{feature.title}</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed font-sans text-lg">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Impact & CTA Split Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-12 border-t border-[rgba(0,0,0,0.05)] pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center bg-[var(--bg-card)] p-12 lg:p-20 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.03)]">
          {/* Left: Impact */}
          <div className="flex flex-col text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-sans tracking-tight">Impact</h2>
            <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed font-sans">
              LeadQ.AI ensures no lead is lost by automatically capturing every interaction, enriching prospect details, and triggering smart follow-ups—giving sales teams more time to sell, leaders clear pipeline visibility, and marketing higher ROI from every event and campaign.
            </p>
          </div>
          
          {/* Right: CTA */}
          <div className="flex flex-col text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6 leading-tight tracking-tight font-sans">
              Ready to Transform Your Business with <span className="text-[var(--accent-primary)]">LeadQ.AI</span>?
            </h2>
            <p className="text-[17px] text-[var(--text-secondary)] mb-10 leading-relaxed font-sans">
              Discover how LeadQ.AI can revolutionize your operations and deliver measurable results for your organization.
            </p>
            <div>
              <button className="bg-[var(--accent-primary)] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-[rgba(0,85,255,0.3)]">
                Explore Visual AI Interface
              </button>
            </div>
          </div>
        </div>
      </div>

    </main>
    </>
  );
}
