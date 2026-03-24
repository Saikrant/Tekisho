// src/components/events/EventAgenda.jsx
import React, { useState, useEffect, useRef } from 'react'
import { Calendar, ChevronRight, CheckCircle2, Clock, MapPin, Users, Rocket, Award, Coffee } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const CHAPTERS = [
  {
    id: '01',
    title: 'Opening & Foundation',
    tag: '5:00 PM - 6:00 PM',
    desc: 'Setting the stage for a landmark event. From guest registration to the official inauguration and the founder\'s vision address.',
    items: [
      { time: '5:00 PM', title: 'Registration & Welcome', icon: <Users className="w-4 h-4" /> },
      { time: '5:30 PM', title: 'Inauguration Ceremony', icon: <MapPin className="w-4 h-4" /> },
    ],
    bg: 'bg-blue-50',
    accent: 'blue',
  },
  {
    id: '02',
    title: 'Innovation & Insight',
    tag: '6:00 PM - 7:45 PM',
    desc: 'The core of the summit. Witness the official unveiling of LeadQ.AI and engage in deep-dive discussions on the global AI shift.',
    items: [
      { time: '6:00 PM', title: 'LeadQ.AI Official Launch', icon: <Rocket className="w-4 h-4" /> },
      { time: '6:30 PM', title: 'Panel Discussion', icon: <Users className="w-4 h-4" /> },
      { time: '7:15 PM', title: 'Felicitation & Awards', icon: <Award className="w-4 h-4" /> },
    ],
    bg: 'bg-indigo-50',
    accent: 'indigo',
  },
  {
    id: '03',
    title: 'Celebration & Connection',
    tag: '7:45 PM - 9:30 PM',
    desc: 'Hands-on experience with new products followed by an exclusive networking dinner to forge meaningful industry connections.',
    items: [
      { time: '7:45 PM', title: 'Product Demos', icon: <Rocket className="w-4 h-4" /> },
      { time: '8:30 PM', title: 'Networking Dinner', icon: <Coffee className="w-4 h-4" /> },
    ],
    bg: 'bg-slate-50',
    accent: 'slate',
  },
]

const EventAgenda = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)
  const LOOP_DURATION = 8000 // 8 seconds per card

  const startLoop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setProgress(0)
    
    const startTime = Date.now()
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = (elapsed / LOOP_DURATION) * 100
      
      if (newProgress >= 100) {
        setActiveIndex(prev => (prev + 1) % CHAPTERS.length)
        setProgress(0)
        clearInterval(intervalRef.current)
        startLoop()
      } else {
        setProgress(newProgress)
      }
    }, 50)
  }

  useEffect(() => {
    startLoop()
    return () => clearInterval(intervalRef.current)
  }, [activeIndex])

  const handleCardClick = (index) => {
    setActiveIndex(index)
    setProgress(0)
  }

  return (
    <section id="agenda" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-semibold text-sm tracking-widest uppercase"
          >
            The Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-[#0A1D37] mt-2"
          >
            Event Agenda
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 max-w-2xl mx-auto"
          >
            Sunday, 29 March 2026 · T-Hub, Hyderabad. 
            A meticulously crafted experience from registration to celebration.
          </motion.p>
        </div>

        {/* Cards Wrapper */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {CHAPTERS.map((chapter, index) => {
            const isActive = activeIndex === index
            return (
              <motion.div
                key={chapter.id}
                onClick={() => handleCardClick(index)}
                layout
                className={`relative cursor-pointer transition-all duration-500 overflow-hidden rounded-[2.5rem] border
                  ${isActive 
                    ? 'flex-[2.5] bg-white border-blue-100 shadow-2xl shadow-blue-100/50' 
                    : 'flex-1 bg-slate-50 border-slate-100 opacity-60 hover:opacity-100'
                  }
                  hidden lg:block
                `}
              >
                <div className="p-10 h-full flex flex-col">
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`text-4xl font-black ${isActive ? 'text-blue-600' : 'text-slate-300'}`}>
                      {chapter.id}
                    </span>
                    {isActive && (
                      <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-wider">
                        Live Preview
                      </span>
                    )}
                  </div>

                  {/* Title & Progress (Only if active) */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 transition-colors ${isActive ? 'text-[#0A1D37]' : 'text-slate-500'}`}>
                      {chapter.title}
                    </h3>
                    <p className={`text-sm font-medium ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                      {chapter.tag}
                    </p>
                  </div>

                  {/* Vertical Progress Bar for Desktop (hidden inside card for now, using horizontal bar instead) */}
                  {isActive && (
                    <div className="w-full h-1 bg-slate-100 rounded-full mb-8 overflow-hidden">
                      <motion.div 
                        className="h-full bg-blue-600"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}

                  {/* Description & List (Only if active) */}
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="flex-1 flex flex-col"
                      >
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                          {chapter.desc}
                        </p>
                        
                        <div className="space-y-4 mt-auto">
                          {chapter.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm">
                                {item.icon}
                              </div>
                              <div>
                                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{item.time}</p>
                                <p className="text-sm font-bold text-[#0A1D37]">{item.title}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                       <div className="mt-auto">
                          <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400">
                            <ChevronRight className="w-6 h-6" />
                          </div>
                       </div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}

          {/* Mobile Layout: Fully Expanded Vertical Stack */}
          <div className="lg:hidden space-y-8">
            {CHAPTERS.map((chapter) => (
              <div key={chapter.id} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-blue-600">{chapter.id}</span>
                  <span className="text-xs font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                    {chapter.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0A1D37] mb-4">{chapter.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{chapter.desc}</p>
                <div className="space-y-4">
                  {chapter.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{item.time}</p>
                        <p className="text-sm font-bold text-[#0A1D37]">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
           <button
             onClick={() => {
                const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=TEKISHO+AI+Growth+Summit+2026&dates=20260329T113000Z/20260329T150000Z&details=Foundation+Day+Special+%E2%80%93+Official+Launch+of+LeadQ.AI&location=T-Hub%2C+5th+Floor%2C+Hyderabad%2C+Telangana&sf=true&output=xml`
                window.open(url, '_blank')
             }}
             className="inline-flex items-center gap-2 bg-[#0A1D37] text-white font-bold px-8 py-4 rounded-full hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
           >
             <Calendar className="w-5 h-5" /> Save the Date
           </button>
        </div>
      </div>
    </section>
  )
}

export default EventAgenda