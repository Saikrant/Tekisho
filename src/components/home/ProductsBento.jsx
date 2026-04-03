// src/components/home/ProductsBento.jsx
import { motion } from "framer-motion";
import { Target, Mail, Mic, FileText, ShoppingCart } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import { useTheme } from "@/context/ThemeContext";
import StackingCards from "@/components/ui/stacking-card";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const smallProducts = [
  {
    name: "VocalQ.AI",
    desc: "Voice AI for business communication and lead calling",
    icon: Mic,
    badge: "Coming Soon",
    badgeColor: "bg-amber-50 text-amber-600 border-amber-200",
    stats: "24/7 Coverage · 60% Cost Savings",
  },
  {
    name: "RightDoc.AI",
    desc: "Intelligent document automation and processing",
    icon: FileText,
    badge: "Preview",
    badgeColor: "bg-blue-50 text-brand-blue border-blue-200",
    stats: "Smart OCR · Auto-Classification",
  },
  {
    name: "ZPOS.AI",
    desc: "AI-powered point-of-sale system for modern retail",
    icon: ShoppingCart,
    badge: "Preview",
    badgeColor: "bg-blue-50 text-brand-blue border-blue-200",
    stats: "2x Checkout Speed · Real-time Analytics",
  },
];

// Cards for the bold/stacking theme
const STACK_CARDS = [
  {
    title: "LeadQ.AI",
    description:
      "Transform your sales pipeline with AI-powered lead scoring and qualification. Surface your highest-value prospects automatically and turn raw contacts into revenue, faster.",
    link: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    color: "#EEF2FF",
    category: "Lead Intelligence",
    badge: "Live",
    stats: ["2,847 Leads", "34% CVR", "12× Pipeline"],
  },
  {
    title: "EmailQ.AI",
    description:
      "Intelligent email sequences that personalize at scale, adapting to each recipient's behavior in real time. Drive open rates and replies that actually convert.",
    link: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop",
    color: "#F0F9FF",
    category: "Email Automation",
    badge: "Preview",
    stats: ["98% Delivery", "3.2× Open Rate", "41% Reply Rate"],
  },
  {
    title: "VocalQ.AI",
    description:
      "Human-quality voice agents that handle inbound calls, qualify leads, and schedule meetings autonomously — around the clock without extra headcount.",
    link: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop",
    color: "#FFFBEB",
    category: "Voice AI",
    badge: "Beta",
    stats: ["24/7 Always On", "60% Cost Reduction", "4.9★ CSAT"],
  },
  {
    title: "ZPOS.AI",
    description:
      "AI-powered point-of-sale built for modern retail. Real-time analytics, intelligent upsells, and lightning-fast checkout that keeps customers happy.",
    link: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    color: "#F0FDF4",
    category: "Retail AI",
    badge: "Preview",
    stats: ["2× Checkout Speed", "Real-time Analytics", "AI Upsells"],
  },
  {
    title: "RightDoc.AI",
    description:
      "Intelligent document automation that extracts, classifies, and routes information with enterprise-grade accuracy — eliminating manual processing at scale.",
    link: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&auto=format&fit=crop",
    color: "#FFF7F0",
    category: "Document Intelligence",
    badge: "Preview",
    stats: ["Smart OCR", "Auto-Classification", "99% Accuracy"],
  },
];

/* ─────────────────────────────────────────────
   Section header (shared)
───────────────────────────────────────────── */
function SectionHeader({ centered = false }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <motion.p variants={fadeInUp}
        className={`font-mono text-[11px] tracking-[0.18em] text-[#1B4FD8] uppercase mb-3 ${centered ? "" : ""}`}>
        Our Products
      </motion.p>

      <motion.div variants={fadeInUp}
        className={`flex flex-col lg:flex-row ${centered ? "items-center" : "items-start lg:items-end"} lg:justify-between gap-4`}>
        <h2 className="font-display font-black text-[32px] sm:text-[40px] lg:text-[50px]
                       text-[#0B1629] tracking-[-0.03em] leading-[1.0]">
          AI Products Built<br className="hidden lg:block" /> for Enterprise
        </h2>
        <p className={`font-body text-[15px] text-[#5A6A85] leading-[1.75] ${centered ? "max-w-[500px]" : "max-w-[280px] lg:text-right flex-shrink-0"}`}>
          From lead intelligence to voice automation — built to integrate,
          scale, and deliver ROI.
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Default theme — bento grid
───────────────────────────────────────────── */
function BentoGrid() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader centered={false} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* LeadQ.AI Featured */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.2 }}
            className="sm:col-span-2 rounded-2xl p-8 text-white relative overflow-hidden min-h-[240px] flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #1B4FD8 0%, #1541b8 100%)" }}
          >
            <svg className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-10" viewBox="0 0 300 300">
              <circle cx="200" cy="100" r="120" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="200" cy="100" r="80"  fill="none" stroke="white" strokeWidth="1" />
              <circle cx="200" cy="100" r="40"  fill="none" stroke="white" strokeWidth="1" />
            </svg>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 font-mono text-[10px] tracking-[0.12em] uppercase rounded-full px-3 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Official Launch · March 2026
              </span>
              <div className="flex items-center gap-3 mb-1">
                <Target size={22} className="text-white/80" />
                <h3 className="font-display font-extrabold text-[28px] sm:text-[32px] text-white">LeadQ.AI</h3>
              </div>
              <span className="font-mono text-[11px] text-white/60 mb-3 block">Lead Intelligence Suite</span>
              <p className="font-body text-[15px] text-white/80 leading-relaxed max-w-[380px]">
                Transform your sales pipeline with AI-powered lead scoring and qualification. Turn raw contacts into revenue, faster.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 gap-4">
              <span className="font-body font-semibold text-[14px] text-white/90 underline decoration-white/30 cursor-pointer hover:text-white transition-colors">
                Explore LeadQ.AI →
              </span>
              <div className="flex gap-2 flex-wrap">
                {["2,847 Leads", "34% CVR", "Live Now"].map((pill) => (
                  <span key={pill} className="bg-white/10 rounded-lg px-3 py-2 font-mono text-[11px] text-white/80">{pill}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* EmailQ.AI */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02, borderColor: "#1B4FD8" }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-brand-border rounded-2xl p-6 flex flex-col"
          >
            <span className="inline-flex self-start items-center bg-blue-50 text-brand-blue font-mono text-[10px] rounded-full px-3 py-1 mb-3 border border-blue-100">PREVIEW</span>
            <Mail size={24} className="text-brand-blue mb-3" />
            <h3 className="font-display font-bold text-[20px] text-text-primary mb-1">EmailQ.AI</h3>
            <p className="font-body text-sm text-text-muted flex-1">Intelligent email automation and personalization platform</p>
            <span className="font-mono text-[11px] text-text-light mt-4">98% Delivery · 3.2x Open Rate</span>
          </motion.div>

          {/* Small products */}
          {smallProducts.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, borderColor: "#1B4FD8" }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-brand-border rounded-2xl p-6 flex flex-col"
              >
                <span className={`inline-flex self-start items-center font-mono text-[10px] rounded-full px-3 py-1 mb-3 border ${product.badgeColor}`}>
                  {product.badge}
                </span>
                <Icon size={24} className="text-brand-blue mb-3" />
                <h3 className="font-display font-bold text-[20px] text-text-primary mb-1">{product.name}</h3>
                <p className="font-body text-sm text-text-muted flex-1">{product.desc}</p>
                <span className="font-mono text-[11px] text-text-light mt-4">{product.stats}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Bold theme — stacking scroll cards
───────────────────────────────────────────── */
function StackingSection() {
  return (
    <div className="bg-[#F7F9FC]">
      {/* Header above the scroll-stack */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 pt-28 pb-8">
        <SectionHeader centered={true} />
      </div>
      <StackingCards cards={STACK_CARDS} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Export — switches by theme
───────────────────────────────────────────── */
export default function ProductsBento() {
  const { theme } = useTheme();
  return theme === "bold" ? <StackingSection /> : <BentoGrid />;
}
