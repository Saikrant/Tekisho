import React from 'react';
import { Heart, Factory, Truck, Building2, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

const industryItems = [
  { icon: <Heart className="w-6 h-6 text-[#153D2A]" />, name: "Healthcare" },
  { icon: <Factory className="w-6 h-6 text-[#153D2A]" />, name: "Manufacturing" },
  { icon: <Truck className="w-6 h-6 text-[#153D2A]" />, name: "Logistics" },
  { icon: <Building2 className="w-6 h-6 text-[#153D2A]" />, name: "BFSI" },
  { icon: <ShoppingBag className="w-6 h-6 text-[#153D2A]" />, name: "Retail" },
];

const repeatedIndustries = (items, repeat = 4) => Array.from({ length: repeat }).flatMap(() => items);

export const Industries = () => {
  return (
    <section className="relative py-24 overflow-hidden border-t border-[rgba(0,0,0,0.05)]" style={{ backgroundColor: 'var(--bg-main)' }}>
      
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '80vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(220, 228, 201, 0.3) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(60px)',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full font-medium" style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }}>
          Industries We Serve
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight   text-[#153D2A]">
          Delivering transformative solutions <br/> across diverse sectors.
        </h2>
        
        <Button className="mt-8 px-8 py-6 rounded-full font-medium text-white shadow-lg transition" style={{ backgroundColor: 'var(--accent-primary)' }}>
          See Case Studies
        </Button>

        {/* Scrolling Marquee */}
        <div className="mt-16 overflow-hidden relative pb-4">
          
          <div className="flex gap-6 whitespace-nowrap animate-scroll-left">
            {repeatedIndustries(industryItems, 4).map((item, i) => (
              <div key={i} className="h-16 px-8 flex-shrink-0 rounded-full flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.04)]" style={{ backgroundColor: 'var(--bg-card)' }}>
                {item.icon}
                <span className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{item.name}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-6 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIndustries([...industryItems].reverse(), 4).map((item, i) => (
              <div key={i} className="h-16 px-8 flex-shrink-0 rounded-full flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.04)]" style={{ backgroundColor: 'var(--bg-card)' }}>
                {item.icon}
                <span className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Fade overlays mapped to bg-main logic */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#F1F2ED] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#F1F2ED] to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
};
