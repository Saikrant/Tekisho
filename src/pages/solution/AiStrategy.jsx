import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle, ArrowRight, Clock, Target, BarChart3 } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema, FaqSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const steps = [
  { icon: Target, title: 'AI Readiness Assessment', desc: 'Week 1–2: Audit your data, processes, and infrastructure to identify high-impact AI opportunities.' },
  { icon: TrendingUp, title: 'Strategic AI Roadmap', desc: 'Week 3–4: Prioritised implementation plan with ROI projections for each AI initiative.' },
  { icon: BarChart3, title: 'Pilot Deployment', desc: 'Week 5–10: Build and deploy the first AI agent or automation in your highest-value workflow.' },
  { icon: CheckCircle, title: 'Scale & Optimise', desc: 'Week 11–16: Expand successful pilots across the enterprise with governance and monitoring in place.' },
]

export default function AiStrategy() {
  return (
    <>
      <SEOHead page="solutions/ai-strategy" />
      <OrgSchema />
      <FaqSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-sm font-semibold mb-6">
                AI Strategy &amp; Consulting
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                AI Strategy Built for{' '}
                <span className="bg-gradient-to-r from-[#1B4FD8] to-[#3B82F6] bg-clip-text text-transparent">
                  Enterprise Scale
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho's AI consultants guide your organisation from readiness assessment to production
                deployment — with a structured 90-day engagement designed for measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  onClick={() => trackCTA()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
                >
                  Book a Strategy Call <ArrowRight size={16} />
                </Link>
                <Link to="/case-studies" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-border)] rounded-full font-semibold text-[var(--text-primary)] hover:border-[#1B4FD8] transition-colors">
                  See Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={16} className="text-[#1B4FD8]" />
              <span className="text-sm font-semibold text-[#1B4FD8] uppercase tracking-wider">90-Day Framework</span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">
              From Assessment to Deployment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-[#111827] border border-[var(--brand-border)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#1B4FD8]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] mb-1">{step.title}</h3>
                      <p className="text-sm text-[var(--text-muted)]">{step.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 font-display">Why Choose Tekisho for AI Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stat: '90 days', label: 'From assessment to first deployment' },
                { stat: '100+', label: 'Enterprise AI projects delivered' },
                { stat: '6 weeks', label: 'Average pilot go-live time' },
              ].map((item) => (
                <div key={item.label} className="text-center p-8 rounded-2xl border border-[var(--brand-border)] bg-white dark:bg-[#111827]">
                  <div className="text-4xl font-bold text-[#1B4FD8] mb-2">{item.stat}</div>
                  <div className="text-sm text-[var(--text-muted)]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
