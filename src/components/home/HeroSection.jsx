// src/components/home/HeroSection.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Target, Mail, Mic, TrendingUp, ArrowRight,
  Zap, Users, BarChart3, PhoneCall, ChevronLeft, ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useTheme } from '@/context/ThemeContext'

/* ─────────────────────────────────────────────
   Cards config
───────────────────────────────────────────── */
const CARDS = [
  {
    id: 'leadq',
    product: 'LeadQ.AI',
    category: 'Lead Intelligence',
    icon: Target,
    accent: '#1B4FD8',
    badge: 'Live',
    stats: [
      { icon: Users,      value: '2,847', label: 'Leads Qualified' },
      { icon: TrendingUp, value: '34.2%', label: 'Conversion Rate' },
      { icon: BarChart3,  value: '12×',   label: 'Pipeline Growth' },
    ],
    desc: 'AI-powered lead scoring and qualification that surfaces your highest-value prospects automatically.',
  },
  {
    id: 'emailq',
    product: 'EmailQ.AI',
    category: 'Email Automation',
    icon: Mail,
    accent: '#6366F1',
    badge: 'New',
    stats: [
      { icon: TrendingUp, value: '98%',  label: 'Delivery Rate' },
      { icon: Zap,        value: '3.2×', label: 'Open Rate Lift' },
      { icon: BarChart3,  value: '41%',  label: 'Reply Rate' },
    ],
    desc: "Intelligent email sequences that personalize at scale, adapting to each recipient's behavior in real time.",
  },
  {
    id: 'vocalq',
    product: 'VocalQ.AI',
    category: 'Voice AI',
    icon: Mic,
    accent: '#0EA5E9',
    badge: 'Beta',
    stats: [
      { icon: PhoneCall,  value: '24/7', label: 'Always On' },
      { icon: TrendingUp, value: '60%',  label: 'Cost Reduction' },
      { icon: Users,      value: '4.9★', label: 'CSAT Score' },
    ],
    desc: 'Human-quality voice agents that handle inbound calls, qualify leads, and schedule meetings autonomously.',
  },
]

/* ─────────────────────────────────────────────
   Coverflow position targets
───────────────────────────────────────────── */
const POSITIONS = {
  center: { x: 0,    scale: 1.04, rotateY: 0,   opacity: 1,    zIndex: 20 },
  right:  { x: 285,  scale: 0.80, rotateY: -16, opacity: 0.55, zIndex: 10 },
  left:   { x: -285, scale: 0.80, rotateY: 16,  opacity: 0.55, zIndex: 10 },
}

function getPosition(cardIndex, activeIndex) {
  const n = CARDS.length
  const diff = ((cardIndex - activeIndex) + n) % n
  if (diff === 0) return 'center'
  if (diff === 1) return 'right'
  return 'left'
}

/* ─────────────────────────────────────────────
   Animated AI network background
───────────────────────────────────────────── */
// Node positions as [x%, y%]
const NET_NODES = [
  [4,12],[16,5],[30,16],[48,6],[66,11],[82,5],[95,18],
  [2,46],[14,36],[26,50],[42,30],[58,46],[76,38],[92,50],
  [7,76],[20,66],[36,80],[52,70],[68,78],[85,68],[96,82],
]
const NET_EDGES = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],
  [7,8],[8,9],[9,10],[10,11],[11,12],[12,13],
  [14,15],[15,16],[16,17],[17,18],[18,19],
  [0,7],[1,8],[2,9],[3,10],[4,11],[5,12],[6,13],
  [7,14],[8,15],[9,16],[10,17],[11,18],[12,19],
  [2,8],[4,10],[6,12],[9,15],[11,17],
]

function AINetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* SVG neural net */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{`
            @keyframes netFlow {
              0%   { stroke-dashoffset: 220; opacity: 0.07; }
              50%  { opacity: 0.22; }
              100% { stroke-dashoffset: 0;   opacity: 0.07; }
            }
            @keyframes netPulse {
              0%,100% { opacity: 0.18; r: 2.5; }
              50%     { opacity: 0.42; r: 4.5; }
            }
            .ne { stroke:rgba(27,79,216,0.18); stroke-width:1; fill:none;
                  stroke-dasharray:6 5; animation:netFlow linear infinite; }
            .nn { fill:rgba(27,79,216,0.32); animation:netPulse ease-in-out infinite; }
          `}</style>
        </defs>
        {NET_EDGES.map(([a, b], i) => {
          const [x1, y1] = NET_NODES[a]
          const [x2, y2] = NET_NODES[b]
          return (
            <line
              key={i} className="ne"
              x1={`${x1}%`} y1={`${y1}%`}
              x2={`${x2}%`} y2={`${y2}%`}
              style={{
                animationDuration: `${3.5 + (i % 5) * 0.7}s`,
                animationDelay: `${(i * 0.27) % 4}s`,
              }}
            />
          )
        })}
        {NET_NODES.map(([cx, cy], i) => (
          <circle
            key={i} className="nn"
            cx={`${cx}%`} cy={`${cy}%`} r="2.5"
            style={{
              animationDuration: `${2.5 + (i % 4) * 0.6}s`,
              animationDelay: `${(i * 0.18) % 3}s`,
            }}
          />
        ))}
      </svg>

      {/* Soft blue orbs */}
      <div className="absolute rounded-full blur-[160px]"
        style={{ width: 640, height: 640, top: '-18%', left: '-12%',
          background: 'radial-gradient(circle, rgba(27,79,216,0.09) 0%, transparent 70%)' }} />
      <div className="absolute rounded-full blur-[180px]"
        style={{ width: 520, height: 520, bottom: '0%', right: '-10%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)' }} />
      <div className="absolute rounded-full blur-[120px]"
        style={{ width: 440, height: 260, top: '55%', left: '48%', transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)' }} />
    </div>
  )
}

/* ─────────────────────────────────────────────
   Floating stat badges
───────────────────────────────────────────── */
function FloatingBadge({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay, duration: 0.6 },
        y: { delay, duration: 4, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={`absolute bg-white rounded-2xl px-3 py-2.5
                  shadow-[0_4px_20px_rgba(27,79,216,0.10)]
                  border border-[rgba(27,79,216,0.08)]
                  hidden xl:flex items-center gap-2 ${className}`}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   Single product card
───────────────────────────────────────────── */
function ProductCard({ card, position, onClick }) {
  const target = POSITIONS[position]
  const isCenter = position === 'center'
  const Icon = card.icon
  const { theme } = useTheme()
  const isBold = theme === 'bold'
  // In bold theme the center card gets a full accent background
  const centerFilled = isCenter && isBold

  return (
    <motion.div
      animate={target}
      transition={{ type: 'spring', stiffness: 280, damping: 30 }}
      onClick={onClick}
      className="absolute w-[280px] lg:w-[296px] cursor-pointer select-none"
      style={{ left: 'calc(50% - 140px)', top: 0 }}
    >
      {/* Glow halo — only on center card */}
      {isCenter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute -inset-3 rounded-3xl pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 40%, ${card.accent}22 0%, transparent 72%)`,
            filter: 'blur(12px)',
          }}
        />
      )}

      <div
        className="relative rounded-2xl overflow-hidden border transition-all duration-300"
        style={{
          background: centerFilled ? card.accent : 'white',
          borderColor: centerFilled
            ? 'rgba(255,255,255,0.18)'
            : isCenter ? `${card.accent}35` : 'rgba(0,0,0,0.07)',
          boxShadow: isCenter
            ? `0 0 0 2px ${card.accent}25, 0 20px 60px rgba(0,0,0,0.13), 0 0 40px ${card.accent}18`
            : '0 6px 20px rgba(0,0,0,0.07)',
        }}
      >
        {/* Top accent bar — white on filled, coloured otherwise */}
        <div
          style={{
            height: isCenter ? 5 : 3,
            background: centerFilled
              ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)'
              : `linear-gradient(90deg, transparent 0%, ${card.accent} 50%, transparent 100%)`,
            opacity: isCenter ? 1 : 0.45,
            transition: 'height 0.3s, opacity 0.3s',
          }}
        />

        <div className="p-5">
          {/* Header row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <motion.div
                animate={isCenter ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: centerFilled ? 'rgba(255,255,255,0.18)' : `${card.accent}12`,
                  border: `1px solid ${centerFilled ? 'rgba(255,255,255,0.3)' : card.accent + '22'}`,
                }}
              >
                <Icon size={16} style={{ color: centerFilled ? '#fff' : card.accent }} />
              </motion.div>
              <div>
                <div className="font-display font-bold text-[14px] leading-tight"
                  style={{ color: centerFilled ? '#fff' : '#0B1629' }}>
                  {card.product}
                </div>
                <div className="font-mono text-[9px] tracking-wide mt-0.5"
                  style={{ color: centerFilled ? 'rgba(255,255,255,0.6)' : '#8FA3BF' }}>
                  {card.category}
                </div>
              </div>
            </div>
            <span className="font-mono text-[9px] font-semibold rounded-full px-2.5 py-1"
              style={{
                background: centerFilled ? 'rgba(255,255,255,0.18)' : `${card.accent}10`,
                color: centerFilled ? '#fff' : card.accent,
              }}>
              {card.badge}
            </span>
          </div>

          {/* Description */}
          <p className="font-body text-[12px] leading-[1.65] mb-4"
            style={{ color: centerFilled ? 'rgba(255,255,255,0.72)' : '#5A6A85' }}>
            {card.desc}
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-1.5 mb-4">
            {card.stats.map((stat) => {
              const StatIcon = stat.icon
              return (
                <div key={stat.label}
                  className="rounded-xl p-2 text-center transition-colors duration-300"
                  style={{
                    background: centerFilled ? 'rgba(255,255,255,0.12)' : isCenter ? `${card.accent}08` : '#F7F9FC',
                    border: `1px solid ${centerFilled ? 'rgba(255,255,255,0.18)' : isCenter ? card.accent + '18' : 'rgba(0,0,0,0.05)'}`,
                  }}>
                  <StatIcon size={9} className="mx-auto mb-1"
                    style={{ color: centerFilled ? 'rgba(255,255,255,0.6)' : isCenter ? card.accent : '#8FA3BF' }} />
                  <div className="font-display font-bold text-[13px] leading-none mb-0.5 transition-colors duration-300"
                    style={{ color: centerFilled ? '#fff' : isCenter ? card.accent : '#0B1629' }}>
                    {stat.value}
                  </div>
                  <div className="font-mono text-[8px] leading-tight"
                    style={{ color: centerFilled ? 'rgba(255,255,255,0.5)' : '#8FA3BF' }}>
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-1.5 transition-colors duration-200"
            style={{ color: centerFilled ? 'rgba(255,255,255,0.75)' : isCenter ? card.accent : '#8FA3BF' }}>
            <span className="font-mono text-[10px] tracking-wide">Explore {card.product}</span>
            <ArrowRight size={10} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   Progress dots
───────────────────────────────────────────── */
function ProgressDots({ count, active, onSelect }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onSelect(i)}
          animate={{ width: i === active ? 22 : 6, background: i === active ? '#1B4FD8' : 'rgba(27,79,216,0.2)' }}
          transition={{ duration: 0.3 }}
          className="h-[6px] rounded-full cursor-pointer border-0 p-0"
          style={{ minWidth: i === active ? 22 : 6 }}
        />
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { theme } = useTheme()

  // Auto-rotate
  useEffect(() => {
    const t = setInterval(() => setActiveIndex(p => (p + 1) % CARDS.length), 3800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7F9FC] flex flex-col items-center justify-start pt-20">
      <AINetworkBackground />

      {/* Floating stat badges around the hero (xl only) */}
      <FloatingBadge delay={1.2} className="top-[140px] left-[4%]">
        <div className="w-7 h-7 rounded-lg bg-[#1B4FD8]/10 flex items-center justify-center flex-shrink-0">
          <Users size={13} className="text-[#1B4FD8]" />
        </div>
        <div>
          <div className="font-display font-bold text-[13px] text-[#0B1629] leading-none">500+</div>
          <div className="font-mono text-[9px] text-[#8FA3BF]">Enterprise Clients</div>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.5} className="top-[200px] right-[4%]">
        <div className="w-7 h-7 rounded-lg bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0">
          <Zap size={13} className="text-[#6366F1]" />
        </div>
        <div>
          <div className="font-display font-bold text-[13px] text-[#0B1629] leading-none">99.9%</div>
          <div className="font-mono text-[9px] text-[#8FA3BF]">Uptime SLA</div>
        </div>
      </FloatingBadge>

      <FloatingBadge delay={1.8} className="top-[140px] right-[16%]">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <div className="font-mono text-[11px] text-[#5A6A85]">SOC 2 Certified</div>
      </FloatingBadge>

      {/* ── Editorial center ── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-[680px] mx-auto"
      >
        {/* Label chip */}
        <motion.div variants={fadeInUp}
          className="inline-flex items-center gap-2 mb-6
                     bg-white border border-[rgba(27,79,216,0.15)]
                     rounded-full px-4 py-2
                     shadow-[0_1px_8px_rgba(27,79,216,0.08)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1B4FD8] animate-pulse" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-[#1B4FD8] uppercase">
            Enterprise AI Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={fadeInUp}
          className="font-display font-black leading-[1.0] tracking-[-0.04em]
                     text-[48px] lg:text-[64px] xl:text-[72px] mb-5">
          <span className="block" style={
            theme === 'bold' ? {
              background: 'linear-gradient(130deg, #7C3AED 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            } : { color: '#0B1629' }
          }>Build Enterprise AI</span>
          <span className="block" style={{
            background: 'linear-gradient(130deg, #1B4FD8 0%, #6366F1 55%, #0EA5E9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            That Actually Works.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p variants={fadeInUp}
          className="font-body text-[16px] lg:text-[17px] leading-[1.75] text-[#5A6A85] max-w-[500px] mb-8">
          Custom AI agents, intelligent automation, and enterprise integrations
          that create measurable business impact — connected, orchestrated, ready to deploy.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 flex-wrap">
          <Link to="/contact"
            className="font-body font-semibold text-[15px] text-white
                       bg-[#1B4FD8] rounded-full px-7 py-3.5
                       hover:bg-[#1541b8] hover:-translate-y-0.5
                       hover:shadow-[0_8px_24px_rgba(27,79,216,0.35)]
                       transition-all duration-200 active:translate-y-0">
            Build Your AI Roadmap →
          </Link>
          <Link to="/products"
            className="font-body font-semibold text-[15px] text-[#1B4FD8]
                       bg-white rounded-full px-7 py-3.5
                       border border-[rgba(27,79,216,0.2)]
                       hover:border-[#1B4FD8] hover:bg-[rgba(27,79,216,0.03)]
                       hover:-translate-y-0.5 transition-all duration-200">
            Explore Products
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p variants={fadeInUp}
          className="mt-8 font-mono text-[11px] tracking-[0.12em] text-[#8FA3BF] uppercase">
          500+ Enterprises · SOC 2 Certified · Deployed in 6 Weeks
        </motion.p>
      </motion.div>

      {/* ── 3D Carousel ── */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-12 w-full flex flex-col items-center"
      >
        {/* Cards stage */}
        <div className="hidden lg:block relative w-full"
          style={{ perspective: '1100px', height: 340 }}>
          {CARDS.map((card, i) => (
            <ProductCard
              key={card.id}
              card={card}
              position={getPosition(i, activeIndex)}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>


        {/* Mobile: stacked chips */}
        <div className="flex gap-2 flex-wrap justify-center mt-8 px-6 lg:hidden">
          {CARDS.map(c => {
            const Icon = c.icon
            return (
              <span key={c.id}
                className="flex items-center gap-2 bg-white border border-[rgba(27,79,216,0.12)]
                           rounded-full px-4 py-2 font-display font-semibold
                           text-[13px] text-[#0B1629]">
                <Icon size={12} style={{ color: c.accent }} />
                {c.product}
              </span>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
