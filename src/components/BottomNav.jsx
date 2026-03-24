// src/components/BottomNav.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { Home, Info, Calendar, Box, Smartphone, Layers } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { path: '/about', label: 'About', icon: <Info className="w-4 h-4" /> },
    { path: '/events', label: 'Events', icon: <Calendar className="w-4 h-4" /> },
    { path: '/products', label: 'Products', icon: <Box className="w-4 h-4" /> },
    { path: '/solutions', label: 'Solutions', icon: <Layers className="w-4 h-4" /> },
  ];

  return (
    <motion.div 
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: 0,
        right: 0,
        margin: '0 auto',
        zIndex: 1000,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 0.75rem'
      }}
    >
      <div 
        style={{
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.15rem',
          boxShadow: '0 8px 32px rgba(0, 5, 25, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          pointerEvents: 'auto',
          maxWidth: '96vw',
          padding: '0.3rem 0.4rem 0.3rem 0.5rem'
        }}
      >
        
        {/* All nav links — icons + labels on all screen sizes */}
        <nav className="flex items-center gap-0.5">
          {navLinks.map(({ path, label, icon }) => (
            <Link 
              key={path}
              to={path} 
              className={`flex flex-col items-center gap-0.5 px-2 sm:px-3 py-1.5 rounded-full transition-all text-center min-w-[40px] ${
                location.pathname === path 
                  ? 'text-blue-600 bg-blue-50/60' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50/50'
              }`}
              title={label}
            >
              {icon}
              <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-wider leading-none">{label}</span>
            </Link>
          ))}
        </nav>

        <div className="h-7 w-[1px] bg-slate-200/60 mx-1 flex-shrink-0" />

        {/* Primary CTA */}
        <button className="bg-[#0055FF] text-white font-black px-3 sm:px-7 py-2.5 sm:py-3 rounded-full text-[8.5px] sm:text-[10px] uppercase tracking-[0.1em] shadow-lg shadow-blue-500/25 active:scale-95 hover:scale-[1.02] transition-all whitespace-nowrap flex-shrink-0">
          GET STARTED
        </button>

      </div>
    </motion.div>
  );
};

export default BottomNav;
