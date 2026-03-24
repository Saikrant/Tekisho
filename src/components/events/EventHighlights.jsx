// src/components/events/EventHighlights.jsx
import React from 'react'
import { PartyPopper, Rocket, Mic, Award, Star, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const highlights = [
  {
    icon: <PartyPopper className="w-7 h-7" />,
    title: 'Inauguration Ceremony',
    desc: 'Official opening by TEKISHO founders and special guests marking the Foundation Day milestone.',
    span: 'col-span-1 sm:col-span-2',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    textColor: 'text-white',
    subtextColor: 'text-blue-200',
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    title: 'AI Product Releases',
    desc: 'Official launch of LeadQ.AI with live demos of upcoming products.',
    span: 'col-span-1',
    bg: 'bg-white',
    textColor: 'text-[#0A1D37]',
    subtextColor: 'text-slate-500',
  },
  {
    icon: <Mic className="w-7 h-7" />,
    title: 'Panel Discussion',
    desc: 'India & Global AI Shift: Adoption, Trust, and the Future of Work.',
    span: 'col-span-1',
    bg: 'bg-white',
    textColor: 'text-[#0A1D37]',
    subtextColor: 'text-slate-500',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Felicitation Ceremony',
    desc: 'Recognising renowned industry leaders and change makers shaping AI in India.',
    span: 'col-span-1',
    bg: 'bg-white',
    textColor: 'text-[#0A1D37]',
    subtextColor: 'text-slate-500',
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: 'Intrapreneur Recognition',
    desc: '15 Innovation Associates honoured for driving AI innovation from within.',
    span: 'col-span-1',
    bg: 'bg-[#0A1D37]',
    textColor: 'text-white',
    subtextColor: 'text-slate-400',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Dinner & Networking',
    desc: 'Wind down with an exclusive networking dinner. Build connections that matter.',
    span: 'col-span-1 sm:col-span-2',
    bg: 'bg-blue-50/50',
    textColor: 'text-[#0A1D37]',
    subtextColor: 'text-slate-500',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }
  })
}

const EventHighlights = () => (
  <section id="highlights" className="py-24 px-4" style={{ background: 'linear-gradient(180deg, #E0E7FF 0%, #F8FAFF 20%, #FFFFFF 100%)' }}>
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Highlights</span>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0A1D37] mt-3 tracking-tight">What's happening</h2>
        <p className="text-slate-500 mt-3 text-lg">An evening packed with AI, innovation, and inspiration</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights.map(({ icon, title, desc, span, bg, textColor, subtextColor }, i) => (
          <motion.div
            key={title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className={`${span} ${bg} rounded-2xl p-6 border border-slate-200/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default`}
          >
            <span className={`mb-4 block ${textColor === 'text-white' ? 'text-white' : 'text-blue-600'}`}>
              {icon}
            </span>
            <h3 className={`text-lg font-bold ${textColor} mb-2`}>{title}</h3>
            <p className={`text-sm leading-relaxed ${subtextColor}`}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default EventHighlights