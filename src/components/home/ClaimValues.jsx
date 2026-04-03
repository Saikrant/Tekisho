// src/components/home/ClaimValues.jsx
import { motion } from "framer-motion"
import { Users, TrendingUp, CheckCircle, Shield, Lightbulb } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const CLAIM_VALUES = [
  {
    letter: "C",
    name: "Customer Centricity",
    desc: "Every decision starts and ends with the customer. We build AI that serves people, not just pipelines.",
    icon: Users,
    accent: "#1B4FD8",
  },
  {
    letter: "L",
    name: "Leadership",
    desc: "We lead with vision and courage — setting the standard for what responsible AI transformation looks like.",
    icon: TrendingUp,
    accent: "#6366F1",
  },
  {
    letter: "A",
    name: "Accountability",
    desc: "We own outcomes, not just outputs. Every engagement is measured against the results that matter.",
    icon: CheckCircle,
    accent: "#0EA5E9",
  },
  {
    letter: "I",
    name: "Integrity",
    desc: "Trust is built in every interaction. We do what is right — even when it is difficult.",
    icon: Shield,
    accent: "#10B981",
  },
  {
    letter: "M",
    name: "Mindful Innovation",
    desc: "We innovate with purpose — solving real problems at scale without losing sight of the human impact.",
    icon: Lightbulb,
    accent: "#F59E0B",
  },
]

export default function ClaimValues() {
  return (
    <section className="bg-white py-16 border-t border-[rgba(0,0,0,0.05)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* ── Header — left-aligned ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
        >
          <div>
            <motion.p variants={fadeInUp}
              className="font-mono text-[11px] tracking-[0.18em] text-[#1B4FD8] uppercase mb-3">
              Our Values
            </motion.p>
            <motion.h2 variants={fadeInUp}
              className="font-display font-black text-[28px] sm:text-[36px] lg:text-[42px]
                         leading-[1.05] tracking-[-0.03em] text-[#0B1629]">
              We don&apos;t just build AI.{" "}
              <span style={{
                background: "linear-gradient(130deg, #1B4FD8 0%, #6366F1 55%, #0EA5E9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                We CLAIM it.
              </span>
            </motion.h2>
          </div>

          <motion.p variants={fadeInUp}
            className="font-body text-[15px] text-[#5A6A85] max-w-[320px] leading-[1.7] lg:text-right flex-shrink-0">
            Five principles that define how every Tekisho team member thinks,
            works, and delivers.
          </motion.p>
        </motion.div>

        {/* ── Value cards grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {CLAIM_VALUES.map((v) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.letter}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col gap-4 p-5 rounded-2xl
                           bg-[#F7F9FC] border border-[rgba(0,0,0,0.06)]
                           hover:border-[rgba(27,79,216,0.15)]
                           hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)]
                           transition-all duration-200 cursor-default"
              >
                {/* Top row: icon + letter */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${v.accent}12`,
                      border: `1px solid ${v.accent}22`,
                    }}
                  >
                    <Icon size={16} style={{ color: v.accent }} />
                  </div>
                  <span
                    className="font-display font-black text-[32px] leading-none select-none
                               transition-colors duration-200"
                    style={{ color: `${v.accent}25` }}
                  >
                    {v.letter}
                  </span>
                </div>

                {/* Name */}
                <div>
                  <h3 className="font-display font-bold text-[14px] text-[#0B1629] leading-tight mb-2">
                    {v.name}
                  </h3>
                  <p className="font-body text-[12px] leading-[1.7] text-[#5A6A85]">
                    {v.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="h-[2px] w-8 rounded-full mt-auto transition-all duration-300
                             group-hover:w-full"
                  style={{ background: v.accent }}
                />
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
