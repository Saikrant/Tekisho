// src/components/home/TrustStrip.jsx
import { motion } from "framer-motion";

const industries = ["Healthcare", "Manufacturing", "BFSI", "Logistics", "Retail"];

export default function TrustStrip() {
  return (
    <section className="bg-surface-off border-y border-[rgba(0,0,0,0.05)] py-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-center gap-4 sm:gap-10 flex-wrap">
          <span className="font-body text-sm text-text-light">
            Trusted by enterprises across:
          </span>
          <span className="hidden sm:block w-px h-5 bg-[rgba(0,0,0,0.1)]" />
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
            {industries.map((industry, i) => (
              <div key={industry} className="flex items-center gap-3 sm:gap-6">
                <span className="font-mono text-[12px] text-text-muted uppercase tracking-[0.12em]">
                  {industry}
                </span>
                {i < industries.length - 1 && (
                  <span className="hidden sm:block w-px h-4 bg-[rgba(0,0,0,0.1)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
