// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const footerCols = [
  {
    title: "Products",
    links: [
      { label: "LeadQ.AI", to: "/products" },
      { label: "EmailQ.AI", to: "/products" },
      { label: "VocalQ.AI", to: "/products" },
      { label: "RightDoc.AI", to: "/products" },
      { label: "ZPOS.AI", to: "/products" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AI Strategy", to: "/solutions" },
      { label: "Generative AI", to: "/solutions" },
      { label: "Intelligent Automation", to: "/solutions" },
      { label: "Cloud", to: "/solutions" },
      { label: "SAP", to: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Events", to: "/events" },
      { label: "Contact", to: "/contact" },
      { label: "Case Studies", to: "/case-studies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-2">
              <span className="font-display font-bold text-xl text-white">
                Tekisho
              </span>
            </Link>
            <p className="font-body text-sm text-white/50 mt-1 mb-4 max-w-[240px]">
              The Right Place for Innovative Solutions
            </p>
            <div className="flex gap-4">
              <a
                href="#instagram"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#facebook"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#linkedin"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] text-white/30 uppercase tracking-[0.15em] mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-body text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/30 text-xs font-body pb-20">
          <span>&copy; 2026 Tekisho Infotech. All rights reserved.</span>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
