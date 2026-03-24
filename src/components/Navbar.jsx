// src/components/Navbar.jsx
import { Instagram, MessageCircle, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isEvents = location.pathname === '/events';

  const styles = {
    header: {
      padding: '1.5rem 0',
      width: '100%',
      position: isEvents ? 'absolute' : 'relative',
      top: 0,
      left: 0,
      zIndex: 50,
      background: 'transparent',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    logo: {
      fontSize: '2rem',
      fontWeight: '600',
      color: 'var(--text-primary)',
      letterSpacing: '-0.02em',
      textDecoration: 'none',
    },
    socials: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',
      borderLeft: '1px solid var(--border-light)',
      paddingLeft: '1.5rem',
      color: 'var(--text-primary)',
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        
        {/* Minimalist Text Logo */}
        <Link to="/" style={styles.logo}>
          Tekisho
        </Link>

        {/* Status Badge & Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {/* Social Icons matching image */}
          <div style={styles.socials}>
            <a href="#instagram" className="hover:opacity-60 transition-opacity"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="#whatsapp" className="hover:opacity-60 transition-opacity"><MessageCircle size={20} strokeWidth={1.5} /></a>
            <a href="#facebook" className="hover:opacity-60 transition-opacity"><Facebook size={20} strokeWidth={1.5} /></a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
