// src/components/events/LeadQAILaunch.jsx
import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import InteractiveGradient from '../ui/InteractiveGradient'
import { motion } from 'framer-motion'

const LeadQAILaunch = () => (
  <section id="leadqai" className="py-24 px-4 bg-[#0A1D37] relative overflow-hidden">
    {/* Interactive Background */}
    <InteractiveGradient className="opacity-40" />
    
    <div className="relative max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-md border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">Official Launch · 29 March 2026</span>
          </div>

          <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            LeadQ<span className="text-blue-500">.AI</span>
          </h2>
          <p className="text-blue-100/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            TEKISHO's flagship AI product — a powerful lead generation and qualification engine built for modern sales teams.
            Officially launching at the AI Growth Summit.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              'AI-powered lead scoring',
              'CRM integration',
              'Real-time insights',
              'Built for Enterprise',
            ].map(f => (
              <div key={f} className="flex items-center gap-3 text-blue-100/80">
                <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-400" />
                </div>
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://leadq.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-900/20"
            >
              Explore LeadQ.AI <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white font-bold px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 transition-all"
            >
              Attend the Launch
            </button>
          </div>
        </motion.div>

        {/* Right card visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glassmorphic Dashboard Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 text-white shadow-2xl relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-black text-2xl">L</span>
              </div>
              <div>
                <h3 className="font-bold text-xl tracking-tight">LeadQ Intelligence</h3>
                <p className="text-blue-400 text-sm font-semibold">Active Session · v1.0.4</p>
              </div>
              <div className="ml-auto flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-green-500 text-[10px] font-black uppercase tracking-widest">Live</span>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Leads Qualified', val: '2,847', change: '+12%', color: 'from-blue-500/20 to-transparent' },
                { label: 'Conversion Rate', val: '34.2%', change: '+8%', color: 'from-indigo-500/20 to-transparent' },
                { label: 'AI Savings', val: '124 hrs', change: '+22%', color: 'from-cyan-500/20 to-transparent' },
              ].map(({ label, val, change, color }) => (
                <div key={label} className={`flex items-center justify-between bg-gradient-to-r ${color} border border-white/5 rounded-2xl px-5 py-4`}>
                  <span className="text-blue-100/60 text-sm font-medium">{label}</span>
                  <div className="text-right">
                    <p className="font-bold text-lg">{val}</p>
                    <p className="text-green-400 text-[10px] font-bold uppercase">{change}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-blue-100/30 text-[10px] font-bold uppercase tracking-[0.2em] mt-8">
              Launching 29 March 2026
            </p>
          </div>

          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-600/20 rounded-full blur-[100px] -z-1" />
        </motion.div>
      </div>
    </div>
  </section>
)

export default LeadQAILaunch