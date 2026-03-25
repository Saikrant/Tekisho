// src/components/events/EventHero.jsx
import React, { useState, useEffect, useRef } from 'react'
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* ── Typewriter ── */
const Typewriter = ({ text, delay = 80, startDelay = 0 }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => setIsStarted(true), startDelay)
    return () => clearTimeout(startTimeout)
  }, [startDelay])

  useEffect(() => {
    if (isStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text, isStarted])

  return (
    <span className="inline-block relative">
      {currentText}
      {isStarted && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[0.05em] h-[0.7em] bg-blue-500 ml-[0.05em] align-middle rounded-full"
        />
      )}
    </span>
  )
}

/* ── Floating Animated Orbs ── */
const FloatingOrbs = () => (
  <>
    <motion.div
      className="absolute rounded-full"
      style={{
        top: '5%', right: '8%', width: '22vw', height: '22vw',
        maxWidth: 360, maxHeight: 360,
        background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute rounded-full"
      style={{
        bottom: '10%', left: '5%', width: '18vw', height: '18vw',
        maxWidth: 280, maxHeight: 280,
        background: 'radial-gradient(circle, rgba(199,210,254,0.5) 0%, transparent 70%)',
        filter: 'blur(30px)',
      }}
      animate={{ y: [0, 25, 0], x: [0, -20, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    />
    <motion.div
      className="absolute rounded-full"
      style={{
        top: '35%', left: '15%', width: '10vw', height: '10vw',
        maxWidth: 160, maxHeight: 160,
        background: 'radial-gradient(circle, rgba(96,165,250,0.3) 0%, transparent 70%)',
        filter: 'blur(25px)',
      }}
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
  </>
)

/* ── Countdown ── */
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const target = new Date('2026-03-29T17:00:00+05:30')
    const calc = () => {
      const diff = target - new Date()
      if (diff <= 0) return setTimeLeft({ expired: true })
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [])

  if (timeLeft.expired) return null

  return (
    <div className="flex items-center gap-3 justify-center mt-8 flex-wrap">
      {[
        { v: timeLeft.days, l: 'Days' },
        { v: timeLeft.hours, l: 'Hours' },
        { v: timeLeft.mins, l: 'Mins' },
        { v: timeLeft.secs, l: 'Secs' },
      ].map(({ v, l }, i) => (
        <React.Fragment key={l}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
          >
            <div className="bg-white/70 backdrop-blur-lg text-[#0B2447] border border-blue-100 rounded-2xl px-5 py-3 min-w-[70px] shadow-sm">
              <span className="text-2xl font-black tabular-nums tracking-tighter">
                {String(v ?? 0).padStart(2, '0')}
              </span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">{l}</p>
          </motion.div>
          {i < 3 && <span className="text-2xl font-bold text-slate-200 mb-6">:</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

/* ── Stagger container ── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

/* ── Main Hero ── */
const EventHero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background fill */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(160deg, #FFFFFF 0%, #F5F8FF 35%, #EDF1FF 65%, #F0F4FF 100%)'
      }} />

      {/* Background illustration — faded */}
      <img
        src="/hero-bg-abstract.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none select-none"
      />

      {/* Animated floating gradient orbs */}
      <FloatingOrbs />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #0B2447 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-16">
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100 rounded-full px-5 py-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-widest uppercase">Foundation Day · March 29, 2026</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp} className="mb-8">
            <h1
              className="font-black text-[#0B2447] leading-[1] tracking-tighter uppercase flex flex-col items-center"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 7rem)' }}
            >
              <span className="block">
                <Typewriter text="TEKISHO" delay={100} />
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 py-1 whitespace-nowrap">
                <Typewriter text="AI Growth Summit" delay={60} startDelay={1000} />
              </span>
              <span className="block text-blue-600 mt-2 font-black">
                <Typewriter text="2026" delay={150} startDelay={2500} />
              </span>
            </h1>
          </motion.div>

          {/* Accent line */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
          </motion.div>

          {/* Subheadline */}
          <motion.p variants={fadeUp} className="text-base sm:text-xl font-medium text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the innovators and leaders shaping the agentic future of India.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('register')}
              className="bg-[#0055FF] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:scale-[0.98] text-xs sm:text-sm tracking-wide uppercase"
            >
              Register In Person
            </button>
            <button
              onClick={() => scrollTo('agenda')}
              className="inline-flex items-center gap-2 bg-white/80 text-[#0B2447] font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all text-xs sm:text-sm tracking-wide uppercase justify-center hover:-translate-y-0.5"
            >
              View Agenda <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Info pills */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full text-[10px] sm:text-xs font-semibold text-slate-500 border border-slate-100/80 backdrop-blur-sm shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-blue-500" /> 29 March 2026
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full text-[10px] sm:text-xs font-semibold text-slate-500 border border-slate-100/80 backdrop-blur-sm shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-blue-500" /> T-Hub, Hyderabad
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full text-[10px] sm:text-xs font-semibold text-slate-500 border border-slate-100/80 backdrop-blur-sm shadow-sm">
              <Clock className="w-3.5 h-3.5 text-blue-500" /> 5:00 PM Onwards
            </span>
          </motion.div>

          {/* Countdown */}
          <Countdown />
        </motion.div>
      </div>
    </section>
  )
}

export default EventHero