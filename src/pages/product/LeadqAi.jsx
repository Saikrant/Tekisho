import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Brain, Calendar, TrendingUp } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema, ProductSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const features = [
  { icon: Target, title: 'Instant Lead Capture', desc: 'Capture leads from every channel — web, email, LinkedIn, and inbound calls — in a unified AI workspace.' },
  { icon: Brain, title: 'Deep Prospect Intelligence', desc: 'AI enriches every lead with firmographic data, intent signals, and behavioural scoring in real time.' },
  { icon: Calendar, title: 'AI Meeting Intelligence', desc: 'Automated meeting scheduling, follow-up drafts, and deal progression recommendations.' },
  { icon: TrendingUp, title: 'Scale Without Limits', desc: 'Handle 10x lead volume without adding headcount. LeadQ.AI scales with your pipeline.' },
]

export default function LeadqAi() {
  return (
    <>
      <SEOHead page="products/leadq-ai" />
      <OrgSchema />
      <ProductSchema
        name="LeadQ.AI"
        description="AI-powered lead scoring, qualification, and routing platform for enterprise sales teams."
        url="https://tekisho.ai/products/leadq-ai"
        image="https://tekisho.ai/og-image.jpg"
      />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-sm font-semibold">
                  AI Product
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-green-50 dark:bg-green-950 text-green-600 text-xs font-bold">
                  Live
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-display">
                LeadQ.AI
              </h1>
              <p className="text-xl text-[#1B4FD8] font-semibold mb-4">AI Lead Intelligence Suite</p>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                LeadQ.AI is Tekisho's AI-powered lead scoring, qualification, and routing platform.
                Increase conversion rates by 34% with intelligent lead management that works 24/7.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/contact"
                  onClick={() => trackCTA()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
                >
                  Request a Demo <ArrowRight size={16} />
                </Link>
                <Link to="/solutions/intelligent-automation" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-border)] rounded-full font-semibold text-[var(--text-primary)] hover:border-[#1B4FD8] transition-colors">
                  See Automation Solutions
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-[#0B1629] text-white">
                {[
                  { stat: '34%', label: 'Higher conversion rate' },
                  { stat: '10x', label: 'Lead volume handled' },
                  { stat: '6 wks', label: 'Time to deploy' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-3xl font-bold text-[#3B82F6] mb-1">{item.stat}</div>
                    <div className="text-xs text-[#8FA3BF]">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Why Choose LeadQ.AI</h2>
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
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#1B4FD8]" />
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
