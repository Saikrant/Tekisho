// src/components/home/WhyTekisho.jsx
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { X, Check, Sparkles } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"

/* ─────────────────────────────────────────────
   Comparison data
───────────────────────────────────────────── */
const OTHERS = [
  "Generic AI tools bolted onto your existing stack",
  "Implementations that drag 6–12 months with no clear end",
  "No measurable ROI — just dashboards full of vanity metrics",
  "Vendors disappear after go-live with no ongoing support",
  "Off-the-shelf automation that ignores your business context",
  "AI pilots that never reach production",
]

const TEKISHO = [
  "Custom AI agents built for your exact workflow and data",
  "Deployed in 6 weeks using proven enterprise accelerators",
  "Every engagement defined by measurable business outcomes",
  "Dedicated partnership from discovery through optimisation",
  "Tailored solutions across LeadQ, EmailQ and VocalQ products",
  "Production-ready systems — not proof-of-concepts",
]

/* ─────────────────────────────────────────────
   Single comparison card with mouse spotlight
───────────────────────────────────────────── */
function ComparisonCard({ title, subtitle, badge, items, isOthers, delay = 0 }) {
  const cardRef = useRef(null)
  const [mouse, setMouse] = useState({ x: -999, y: -999 })
  const [active, setActive] = useState(false)
  const [hoveredRow, setHoveredRow] = useState(null)

  const accentRgb = isOthers ? "239,68,68" : "27,79,216"
  const checkColor = isOthers ? "#f87171" : "#34d399"

  function handleMove(e) {
    if (!cardRef.current) return
    const r = cardRef.current.getBoundingClientRect()
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => { setActive(false); setMouse({ x: -999, y: -999 }); setHoveredRow(null) }}
      className="relative flex-1 min-w-0 rounded-2xl overflow-hidden"
      style={{
        background: isOthers
          ? "rgba(255,255,255,0.80)"
          : "rgba(27,79,216,0.04)",
        border: `1px solid ${isOthers ? "rgba(0,0,0,0.08)" : "rgba(27,79,216,0.22)"}`,
      }}
    >
      {/* ── Mouse spotlight ── */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px,
            rgba(${accentRgb},0.10) 0%,
            transparent 65%)`,
        }}
      />

      {/* ── Top edge glow (Tekisho card only) ── */}
      {!isOthers && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px
          bg-gradient-to-r from-transparent via-[#1B4FD8] to-transparent opacity-60" />
      )}

      <div className="relative z-10 p-8">
        {/* ── Card header ── */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.2)` }}
            >
              {isOthers
                ? <X size={16} style={{ color: `rgb(${accentRgb})` }} />
                : <Check size={16} style={{ color: `rgb(${accentRgb})` }} />
              }
            </div>
            <div>
              <h3 className="font-display font-bold text-[16px] text-[#0B1629] leading-tight">
                {title}
              </h3>
              <p className="font-mono text-[11px] mt-0.5"
                style={{ color: `rgba(${accentRgb},0.65)` }}>
                {subtitle}
              </p>
            </div>
          </div>

          {badge && (
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-1.5 font-mono text-[10px] font-semibold
                         tracking-[0.12em] text-white rounded-full px-3 py-1.5 flex-shrink-0"
              style={{ background: "rgba(27,79,216,0.9)", border: "1px solid rgba(27,79,216,0.4)" }}
            >
              <Sparkles size={9} />
              {badge}
            </motion.span>
          )}
        </div>

        {/* ── Item list ── */}
        <div className="flex flex-col gap-1">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isOthers ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: delay + 0.2 + i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              className="flex items-start gap-3 px-3 py-2.5 rounded-xl cursor-default
                         transition-colors duration-150"
              style={{
                background: hoveredRow === i
                  ? `rgba(${accentRgb},0.07)`
                  : "transparent",
              }}
            >
              {/* Number */}
              <span
                className="font-mono text-[11px] font-bold leading-none mt-[3px] flex-shrink-0 w-5 text-right"
                style={{ color: `rgba(${accentRgb},0.35)` }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <span className="flex-shrink-0 mt-[3px]">
                {isOthers
                  ? <X size={11} style={{ color: `rgba(${accentRgb},0.5)` }} />
                  : <Check size={11} style={{ color: checkColor, opacity: 0.85 }} />
                }
              </span>

              {/* Text */}
              <p
                className="font-body text-[14px] leading-[1.55] transition-all duration-150 flex-1"
                style={{
                  color: hoveredRow === i
                    ? "#0B1629"
                    : isOthers
                      ? "rgba(11,22,41,0.38)"
                      : "rgba(11,22,41,0.80)",
                  textDecoration: isOthers && hoveredRow !== i ? "line-through" : "none",
                  textDecorationColor: `rgba(${accentRgb},0.3)`,
                }}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
export default function WhyTekisho() {
  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: "#F7F9FC" }}>

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full blur-[180px]"
          style={{ width: 600, height: 600, top: "-20%", left: "-10%",
            background: "radial-gradient(circle, rgba(27,79,216,0.10) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full blur-[160px]"
          style={{ width: 500, height: 500, bottom: "-15%", right: "-8%",
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeInUp}
            className="font-display font-black text-[38px] sm:text-[50px] lg:text-[60px]
                       leading-[1.0] tracking-[-0.03em] text-[#0B1629] mb-4">
            Not all AI partners
            <br />
            <span style={{
              background: "linear-gradient(130deg, #1B4FD8 0%, #6366F1 55%, #0EA5E9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              are built the same.
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp}
            className="font-body text-[16px] text-[#5A6A85] max-w-[400px] mx-auto leading-[1.75]">
            The difference between a typical AI vendor and a true transformation partner.
          </motion.p>
        </motion.div>

        {/* ── Comparison cards ── */}
        <div className="flex flex-col lg:flex-row gap-5">
          <ComparisonCard
            title="Typical AI Vendors"
            subtitle="The industry standard"
            items={OTHERS}
            isOthers={true}
            delay={0}
          />
          <ComparisonCard
            title="Tekisho"
            subtitle="Engineered for outcomes"
            badge="RECOMMENDED"
            items={TEKISHO}
            isOthers={false}
            delay={0.12}
          />
        </div>

      </div>
    </section>
  )
}
