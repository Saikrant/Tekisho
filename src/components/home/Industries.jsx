// src/components/home/Industries.jsx
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import {
  Heart,
  Factory,
  Truck,
  Shield,
  ShoppingBag,
  Landmark,
  GraduationCap,
  Zap,
  Building2,
  Plane,
} from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const INDUSTRIES = [
  { name: "Healthcare", icon: Heart, stat: "35% Reduced Claim Denials", accent: "#EF4444" },
  { name: "Manufacturing", icon: Factory, stat: "Digitally integrated production flows", accent: "#F59E0B" },
  { name: "Logistics", icon: Truck, stat: "AI-powered supply chain optimization", accent: "#10B981" },
  { name: "BFSI", icon: Shield, stat: "Smart compliance & risk management", accent: "#1B4FD8" },
  { name: "Retail", icon: ShoppingBag, stat: "AI-driven POS and analytics", accent: "#8B5CF6" },
  { name: "Banking", icon: Landmark, stat: "Fraud detection at scale", accent: "#0EA5E9" },
  { name: "Education", icon: GraduationCap, stat: "Personalised learning pathways", accent: "#F97316" },
  { name: "Energy", icon: Zap, stat: "Predictive maintenance & efficiency", accent: "#EAB308" },
  { name: "Real Estate", icon: Building2, stat: "Intelligent lead qualification", accent: "#6366F1" },
  { name: "Travel", icon: Plane, stat: "Hyper-personalised customer journeys", accent: "#14B8A6" },
]

function IndustryCard({ name, icon, stat, accent }) {
  const Icon = icon
  return (
    <div
      className="flex-shrink-0 flex flex-col gap-3 px-6 py-5 rounded-2xl
                 bg-white border border-[rgba(0,0,0,0.07)]
                 hover:border-[rgba(27,79,216,0.18)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                 transition-all duration-200 cursor-default select-none w-[220px]"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${accent}14`, border: `1px solid ${accent}28` }}
      >
        <Icon size={18} style={{ color: accent }} />
      </div>

      {/* Text */}
      <div>
        <p className="font-display font-bold text-[14px] text-[#0B1629] leading-tight mb-1">
          {name}
        </p>
        <p className="font-body text-[12px] text-[#5A6A85] leading-[1.55]">
          {stat}
        </p>
      </div>

      {/* Bottom accent */}
      <div
        className="h-[2px] w-8 rounded-full mt-auto"
        style={{ background: accent }}
      />
    </div>
  )
}

function SingleCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  return (
    <div className="relative">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #F7F9FC, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #F7F9FC, transparent)" }} />

      <div ref={emblaRef} className="overflow-hidden w-full">
        <div className="flex gap-5 py-2">
          {[...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
            <IndustryCard key={`${industry.name}-${i}`} {...industry} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Industries() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "#F7F9FC" }}>

      {/* Subtle background orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full blur-[200px]"
          style={{
            width: 700, height: 700,
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(27,79,216,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10">

        {/* ── Header ── */}
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 mb-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={fadeInUp}
              className="font-mono text-[11px] tracking-[0.18em] text-[#1B4FD8] uppercase mb-3">
              Industries We Serve
            </motion.p>

            <motion.div variants={fadeInUp}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="font-display font-black text-[32px] sm:text-[44px] lg:text-[52px]
                             leading-[1.0] tracking-[-0.03em] text-[#0B1629]">
                Deep domain expertise<br />
                <span style={{
                  background: "linear-gradient(130deg, #1B4FD8 0%, #6366F1 55%, #0EA5E9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  across every sector.
                </span>
              </h2>
              <p className="font-body text-[15px] text-[#5A6A85] max-w-[280px] lg:text-right flex-shrink-0 leading-[1.7]">
                From healthcare to travel — precision AI tailored to each industry's unique challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Single carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SingleCarousel />
        </motion.div>


      </div>
    </section>
  )
}
