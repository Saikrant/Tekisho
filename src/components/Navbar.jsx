// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/solutions", label: "Solutions" },
  { path: "/industries", label: "Industries" },
  { path: "/events", label: "Events" },
  { path: "/careers", label: "Careers" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 60);
    });
    return unsubscribe;
  }, [scrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-brand-border"
          : "bg-white border-b border-brand-border"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-w-[140px] h-8">
            <img
              src="/tekisho-logo.png"
              alt="Tekisho"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-body font-medium text-sm px-3 py-2 rounded-lg transition-colors",
                  location.pathname === link.path
                    ? "text-brand-blue"
                    : "text-text-muted hover:text-brand-blue"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex bg-brand-blue text-white rounded-full px-5 py-2.5 text-sm font-body font-semibold hover:bg-[#1541b8] hover:shadow-[0_0_20px_rgba(27,79,216,0.35)] transition-all"
            >
              Book a Strategy Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-primary"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white shadow-xl overflow-hidden border-t border-brand-border"
          >
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col px-4 py-4 gap-1"
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={fadeInUp}>
                  <Link
                    to={link.path}
                    className={cn(
                      "block font-body font-medium text-[15px] px-4 py-3 rounded-xl transition-colors",
                      location.pathname === link.path
                        ? "text-brand-blue bg-[rgba(27,79,216,0.06)]"
                        : "text-text-muted hover:text-brand-blue hover:bg-surface-off"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={fadeInUp} className="pt-2">
                <Link
                  to="/contact"
                  className="block bg-brand-blue text-white rounded-full px-5 py-3 text-center text-sm font-body font-semibold"
                >
                  Book a Strategy Call
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
