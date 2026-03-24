import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Customer Intelligence',
    description: 'AI agents that analyze interactions and predict customer needs in real-time, drastically reducing churn and increasing lifetime value.',
    icon: '💡'
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive back-office tasks across platforms. Our agents connect to your existing SaaS stack and operate 24/7 with zero errors.',
    icon: '⚙️'
  },
  {
    title: 'Revenue Operations',
    description: 'Autonomous agents that qualify leads, trigger personalized outreach, and optimize pricing models dynamically to maximize profitability.',
    icon: '📈'
  }
];

const Services = () => {
  return (
    <section id="services" style={{ padding: '8rem 0', background: 'var(--bg-card)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '700px', margin: '0 auto 5rem auto' }}>
          <h2 className=" " style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Capabilities designed to scale.
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
            We do not just build chatbots. We engineer complex, multi-step autonomous workflows that replace entire operational departments.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                background: 'var(--bg-primary)' // Slightly contrasting nested background
              }}
            >
              <div>
                <div style={{ 
                  fontSize: '2rem', 
                  marginBottom: '1.5rem',
                  background: 'var(--bg-card)', 
                  width: '60px', 
                  height: '60px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  borderRadius: '50%',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                }}>
                  {service.icon}
                </div>
                <h3 className=" " style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                  {service.description}
                </p>
              </div>
              
              <div style={{ 
                borderTop: '1px solid var(--border-light)', 
                paddingTop: '1.5rem',
                marginTop: 'auto'
              }}>
                <a href="#learn-more" style={{ 
                  color: 'var(--accent-primary)', 
                  fontWeight: '600', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem' 
                }}>
                  Learn more &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
