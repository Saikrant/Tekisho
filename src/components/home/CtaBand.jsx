// src/components/home/CtaBand.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function CtaBand() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#0B1629" }}
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

      {/* Blue glow — bottom right */}
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 80%, rgba(27,79,216,0.18) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12">

        {/* Split: headline left · content right */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20"
        >
          {/* Left — large typographic headline */}
          <motion.div variants={fadeInUp} className="flex-1">
            <p className="font-mono text-[11px] tracking-[0.18em] text-[rgba(255,255,255,0.35)] uppercase mb-5">
              Start Building
            </p>
            <h2 className="font-display font-black text-[42px] sm:text-[54px] lg:text-[64px]
                           leading-[1.0] tracking-[-0.04em] text-white">
              Ready to build<br />
              <span style={{
                background: "linear-gradient(130deg, #1B4FD8 0%, #6366F1 55%, #0EA5E9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                AI that works?
              </span>
            </h2>
          </motion.div>

          {/* Right — description + actions */}
          <motion.div variants={fadeInUp} className="lg:max-w-[360px] flex-shrink-0">
            <p className="font-body text-[16px] text-[rgba(255,255,255,0.55)] leading-[1.75] mb-8">
              Let&apos;s design your AI roadmap together. First consultation is on us — no commitment required.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2
                           font-body font-semibold text-[15px] text-[#0B1629]
                           bg-white rounded-full px-6 py-3.5
                           hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.15)]
                           transition-all duration-200 group"
              >
                Build Your AI Roadmap
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center
                           font-body font-semibold text-[15px] text-[rgba(255,255,255,0.65)]
                           border border-[rgba(255,255,255,0.15)] rounded-full px-6 py-3.5
                           hover:text-white hover:border-[rgba(255,255,255,0.35)]
                           transition-all duration-200"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom rule */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)]
                        flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-[11px] text-[rgba(255,255,255,0.2)] tracking-[0.1em]">
            TEKISHO INFOTECH · ENTERPRISE AI PLATFORM
          </p>
          <div className="flex items-center gap-5">
            {["SOC 2 Certified", "ISO 27001", "GDPR Ready"].map((badge) => (
              <span key={badge} className="font-mono text-[10px] text-[rgba(255,255,255,0.25)] tracking-[0.08em]">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
