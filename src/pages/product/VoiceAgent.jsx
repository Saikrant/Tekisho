import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageSquare, BarChart3, Zap } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema, ProductSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const features = [
  { icon: Phone, title: 'Inbound Call Handling', desc: 'AI agent answers inbound calls, qualifies callers, and routes to the right team — 24/7, no wait time.' },
  { icon: MessageSquare, title: 'Natural Language Understanding', desc: 'Understands complex spoken queries, accents, and industry terminology without rigid scripting.' },
  { icon: Zap, title: 'Outbound Campaign Automation', desc: 'AI places outbound calls for follow-ups, appointment reminders, and sales prospecting at scale.' },
  { icon: BarChart3, title: 'Call Analytics & Transcription', desc: 'Every call is transcribed, summarised, and analysed for sentiment, intent, and conversion signals.' },
]

export default function VoiceAgent() {
  return (
    <>
      <SEOHead page="products/voice-agent" />
      <OrgSchema />
      <ProductSchema
        name="Voice Agent"
        description="Autonomous AI voice communication platform that handles inbound and outbound enterprise calls with natural language understanding."
        url="https://tekisho.ai/products/voice-agent"
        image="https://tekisho.ai/og-image.jpg"
      />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950 text-orange-600 text-sm font-semibold">
                  AI Product
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-yellow-50 dark:bg-yellow-950 text-yellow-600 text-xs font-bold">
                  Beta
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-display">
                Voice Agent
              </h1>
              <p className="text-xl text-orange-600 font-semibold mb-4">Autonomous AI Voice Communication</p>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho's Voice Agent is an autonomous AI that handles enterprise phone calls — inbound
                and outbound — with human-like natural language understanding, freeing your teams from
                repetitive call handling.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/contact"
                  onClick={() => trackCTA()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
                >
                  Request Beta Access <ArrowRight size={16} />
                </Link>
                <Link to="/solutions/intelligent-automation" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-border)] rounded-full font-semibold text-[var(--text-primary)] hover:border-[#1B4FD8] transition-colors">
                  See Automation Solutions
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-[#0B1629] text-white">
                {[
                  { stat: '24/7', label: 'Always-on call handling' },
                  { stat: '92%', label: 'Query resolution rate' },
                  { stat: '60%', label: 'Call handling cost reduction' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-1">{item.stat}</div>
                    <div className="text-xs text-[#8FA3BF]">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Voice Agent Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-[#111827] border border-[var(--brand-border)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] mb-1">{feature.title}</h3>
                      <p className="text-sm text-[var(--text-muted)]">{feature.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
