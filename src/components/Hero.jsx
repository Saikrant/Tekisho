import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ 
      paddingTop: '6rem',
      paddingBottom: '8rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glass Glow Effect */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '60vw',
        height: '60vw',
        maxWidth: '800px',
        maxHeight: '800px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(80px)',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container grid-2 hero-responsive-container" style={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingRight: '1rem', position: 'relative', zIndex: 2 }}
        >
          {/* Top Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-pill)',
            marginBottom: '2rem',
            background: 'var(--bg-card)'
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
              Top AI Development Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className=" " style={{
            fontSize: 'clamp(3.5rem, 6vw, 5rem)',
            color: 'var(--text-primary)',
            lineHeight: '1.05',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            Agentic workflows <br />
            for your <span style={{ color: 'var(--accent-primary)', fontStyle: 'italic' }}>enterprise.</span>
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '500px',
            lineHeight: '1.7'
          }}>
            We build custom, high-performance autonomous AI agents designed to seamlessly automate your most complex business operations without sacrificing reliability.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" style={{ padding: '1.1rem 2.5rem' }}>
              Book a Strategy Call
            </button>
            <button className="btn btn-secondary" style={{ padding: '1.1rem 2.5rem' }}>
              Our Capabilities
            </button>
          </div>
        </motion.div>

        {/* Right Column: Staggered Images */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', height: 'min(600px, 80vw)', display: 'flex', justifyContent: 'center' }}
        >
          {/* Back Image / Accent Panel */}
          <div style={{
            position: 'absolute',
            top: '0',
            right: '10%',
            width: '60%',
            height: '80%',
            background: 'var(--accent-secondary)',
            borderRadius: 'var(--radius-lg)',
            transform: 'rotate(4deg)',
            zIndex: 1,
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
          }} />

          {/* Front Image Placeholder */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '10%',
            width: '65%',
            height: '85%',
            background: 'var(--accent-primary)',
            borderRadius: 'var(--radius-lg)',
            zIndex: 2,
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '2rem'
          }}>
             <span className=" " style={{ fontSize: '2rem', opacity: 0.8 }}>AI Dashboard Mockup<br/>(Illustration)</span>
          </div>

          {/* Floating Element/Badge */}
          <div style={{
             position: 'absolute',
             top: '40%',
             left: '-5%',
             zIndex: 3,
             background: 'var(--bg-card)',
             padding: '1rem 1.5rem',
             borderRadius: 'var(--radius-pill)',
             boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
             display: 'flex',
             alignItems: 'center',
             gap: '0.75rem'
          }}>
             <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
               99%
             </div>
             <div>
               <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Automation</div>
               <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Efficiency Rate</div>
             </div>
          </div>
        </motion.div>

      </div>

      {/* Hero Metrics Strip */}
      <div className="container" style={{ position: 'relative', zIndex: 3, marginTop: '6rem' }}>
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
          border: '1px solid var(--border-light)'
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[rgba(0,0,0,0.05)]">
            {[
              { value: "120+", title: "Successful Digital Projects", subtitle: "Delivered across industries" },
              { value: "35%", title: "Reduced Claims Denials", subtitle: "In healthcare clients" },
              { value: "45%", title: "Improved Checkout Speed", subtitle: "With AI POS systems" },
              { value: "Record Time", title: "SAP S/4HANA Migrations", subtitle: "Enterprise transformations" }
            ].map((metric, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4">
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight  " style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                  {metric.value}
                </h3>
                <h4 className="text-base font-bold" style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {metric.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {metric.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
