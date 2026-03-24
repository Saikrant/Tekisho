import React from 'react';
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--border-light)', 
      marginTop: '6rem', 
      padding: '5rem 0 2rem 0',
      background: 'var(--bg-main)'
    }}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        
        {/* Top Section - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          {/* 1. Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-block mb-2">
              <img 
                src="/tekisho-logo.png" 
                alt="Tekisho Logo" 
                style={{ height: '48px', width: 'auto', minWidth: '150px', objectFit: 'contain' }} 
              />
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-[280px]">
              AI-driven innovation delivering cutting-edge solutions across Integration, ERP, Cloud Technologies, and Application Development.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-[var(--accent-primary)] transition-colors"><Linkedin size={18} strokeWidth={2} /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--accent-primary)] transition-colors"><Twitter size={18} strokeWidth={2} /></a>
              <a href="#" className="text-gray-400 hover:text-[var(--accent-primary)] transition-colors"><Facebook size={18} strokeWidth={2} /></a>
            </div>
          </div>

          {/* 2. Our Products */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[var(--text-primary)] mb-2">Our Products</h4>
            <Link to="/products" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">LeadQ.AI</Link>
            <Link to="/products" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">RightDoc.AI</Link>
            <Link to="/products" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">ZPOS.AI</Link>
            <Link to="/products" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Presence</Link>
            <Link to="/products" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Autonomous Voice Agent</Link>
          </div>

          {/* 3. Our Services */}
          <div className="flex flex-col gap-3 lg:col-span-1">
            <h4 className="font-bold text-[var(--text-primary)] mb-2">Our Services</h4>
            <Link to="/services" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors leading-tight">Digital Transformation & ERP Solutions</Link>
            <Link to="/services" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors leading-tight">AI & Intelligent Automation Solutions</Link>
            <Link to="/services" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors leading-tight">Custom Software & Product Engineering Solutions</Link>
            <Link to="/services" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors leading-tight">Cloud & Infrastructure Solutions</Link>
            <Link to="/services" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors leading-tight">Cybersecurity & Enterprise Integration Solutions</Link>
            <Link to="/services" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors leading-tight">Data Science & Advanced Analytics Solutions</Link>
            <Link to="/services" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors leading-tight">Quality Engineering & Testing Solutions</Link>
          </div>

          {/* 4. Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[var(--text-primary)] mb-2">Quick Links</h4>
            <Link to="/about" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">About Us</Link>
            <Link to="/industries" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Industries</Link>
            <Link to="/careers" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Careers</Link>
            <Link to="/contact" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">Contact Us</Link>
          </div>

          {/* 5. Get In Touch */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-[var(--text-primary)]">Get In Touch</h4>
            
            <div className="flex flex-col gap-4">
              <div>
                <h5 className="text-sm font-semibold text-[var(--text-primary)] mb-1">USA Office</h5>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>Tekisho Infotech Inc.<br/>5005 W Royal Ln, Suite 288,<br/>Irving, TX. 75063</span>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-[var(--text-primary)] mb-1">India Office</h5>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>Tekisho Infotech Pvt. Ltd.<br/>505 A, 5th Floor, Techno 1,<br/>Gachibowli Road, Raidurg,<br/>Hyderabad, Telangana - 500032</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <a href="tel:+917331104192" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                  <Phone size={16} /> +91 7331104192
                </a>
                <a href="mailto:info@tekishoinfotech.com" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                  <Mail size={16} /> info@tekishoinfotech.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-[var(--border-light)] pb-24 text-center">
          <p className="text-gray-400 text-xs">
            &copy; 2026 Tekisho. All rights reserved. | <Link to="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link> | <Link to="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
