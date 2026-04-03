// src/components/home/MetricsSection.jsx
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const metrics = [
  { end: 35, suffix: "%", label: "Reduced Claim Denials", sub: "Healthcare" },
  { end: 2, suffix: "x", label: "Faster Checkout Speed", sub: "Retail AI POS" },
  { end: 100, suffix: "+", label: "Successful Digital Projects", sub: "" },
  { end: 4, suffix: "+", label: "Industries Transformed", sub: "" },
];

const caseStudies = [
  {
    industry: "HEALTHCARE",
    stat: "35%",
    description:
      "Reduced claim denials through AI-powered document verification and intelligent routing systems.",
    link: "Read Case Study →",
  },
  {
    industry: "RETAIL",
    stat: "2x",
    description:
      "Faster customer checkout experience with ZPOS.AI intelligent point-of-sale and real-time analytics.",
    link: "Read Case Study →",
  },
];

export default function MetricsSection() {
  return (
    <section className="bg-brand-navy py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Tiles */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`text-center px-4 sm:px-8 py-6 ${
                i < metrics.length - 1
                  ? "border-r border-white/10"
                  : ""
              } ${i === 1 ? "border-r-0 lg:border-r" : ""}`}
            >
              <div className="font-display font-black text-[48px] sm:text-[56px] lg:text-[64px] text-white leading-none">
                <AnimatedCounter
                  end={metric.end}
                  suffix={metric.suffix}
                />
              </div>
              <p className="font-body text-[14px] sm:text-[15px] text-white/60 mt-2">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 mb-10" />

        {/* Case Study Previews */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-2xl p-6 cursor-pointer"
            >
              <span className="font-mono text-[11px] text-white/50 uppercase tracking-[0.15em] block mb-3">
                {study.industry}
              </span>
              <span className="font-display font-black text-[36px] text-brand-light leading-none block mb-2">
                {study.stat}
              </span>
              <p className="font-body text-[14px] text-white/70 leading-relaxed mb-4">
                {study.description}
              </p>
              <span className="font-body text-sm text-brand-light hover:text-white transition-colors">
                {study.link}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
