import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const features = [
    { name: 'Custom AI Architecture', tekisho: true, standard: false },
    { name: 'Full Workflow Automation', tekisho: true, standard: false },
    { name: '24/7 Unsupervised Operation', tekisho: true, standard: 'Partial' },
    { name: 'Pre-built SaaS Integrations', tekisho: true, standard: true },
    { name: 'Dedicated Support Channel', tekisho: true, standard: 'Extra' },
  ];

  return (
    <section style={{ padding: 'clamp(3rem, 6vw, 8rem) 0', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 4rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Why Choose Tekisho?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem, 2vw, 1.1rem)' }}>
            We do not just hand you software; we give you an entire digital workforce.
          </p>
        </div>

        {/* Table Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            background: 'var(--bg-card)', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid var(--border-light)',
            overflow: 'hidden'
          }}
        >
          {/* Table Headers */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.4fr 1fr 1fr', 
            borderBottom: '1px solid var(--border-light)', 
            background: '#FAFAFA' 
          }}>
            <div style={{ padding: 'clamp(1rem, 2vw, 2rem)' }}></div>
            <div style={{ 
              padding: 'clamp(0.75rem, 2vw, 2rem)', 
              textAlign: 'center', 
              fontWeight: '600', 
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.7rem, 1.8vw, 1rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Standard Agencies
            </div>
            <div style={{ 
              padding: 'clamp(0.75rem, 2vw, 2rem)', 
              textAlign: 'center', 
              fontWeight: '700', 
              color: 'white', 
              background: 'var(--accent-primary)',
              borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
              margin: '-1px -1px 0 0',
              fontSize: 'clamp(0.75rem, 1.8vw, 1rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Tekisho
            </div>
          </div>

          {/* Table Rows */}
          {features.map((feature, i) => (
            <div key={i} style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.4fr 1fr 1fr', 
              borderBottom: i === features.length - 1 ? 'none' : '1px solid var(--border-light)' 
            }}>
              <div style={{ 
                padding: 'clamp(0.75rem, 2vw, 1.5rem) clamp(0.75rem, 2vw, 2rem)', 
                fontWeight: '500', 
                display: 'flex', 
                alignItems: 'center',
                fontSize: 'clamp(0.7rem, 1.6vw, 1rem)',
                lineHeight: '1.3'
              }}>
                {feature.name}
              </div>
              
              <div style={{ 
                padding: 'clamp(0.75rem, 2vw, 1.5rem)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--text-muted)',
                fontSize: 'clamp(0.7rem, 1.6vw, 1rem)'
              }}>
                {feature.standard === true ? <Check size={20} /> : feature.standard === false ? <X size={20} opacity={0.5} /> : feature.standard}
              </div>

              <div style={{ 
                padding: 'clamp(0.75rem, 2vw, 1.5rem)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'var(--accent-primary)',
                color: 'white',
                margin: '0 -1px 0 0',
                borderBottom: i === features.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.1)'
              }}>
                {feature.tekisho === true ? <Check size={24} color="var(--accent-secondary)" /> : feature.tekisho}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Comparison;
