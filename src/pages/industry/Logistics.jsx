import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Truck, ArrowRight, Map, BarChart3, Package, Clock } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const solutions = [
  { icon: Map, title: 'AI Route Optimisation', desc: 'Dynamic routing that adapts to traffic, weather, and delivery windows — reducing fuel costs by 18%.' },
  { icon: BarChart3, title: 'Demand Forecasting', desc: 'Accurate demand prediction across SKUs and geographies reduces overstocking and stockouts.' },
  { icon: Package, title: 'Warehouse Automation', desc: 'AI-powered slotting, picking optimisation, and inventory tracking for modern fulfilment centres.' },
  { icon: Clock, title: 'Real-Time Visibility', desc: 'End-to-end supply chain tracking with AI-generated exception alerts and ETA predictions.' },
]

export default function Logistics() {
  return (
    <>
      <SEOHead page="industries/logistics" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 text-sm font-semibold mb-6">
                Logistics AI
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                AI-Optimised Logistics &amp;{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-[#1B4FD8] bg-clip-text text-transparent">
                  Supply Chain
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho's logistics AI reduces costs, improves on-time delivery, and gives you
                real-time visibility across your entire supply chain.
              </p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Book a Logistics AI Demo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Logistics AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map((sol, i) => {
                const Icon = sol.icon
                return (
                  <motion.div
                    key={sol.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-[#111827] border border-[var(--brand-border)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] mb-1">{sol.title}</h3>
                      <p className="text-sm text-[var(--text-muted)]">{sol.desc}</p>
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
