import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Factory, ArrowRight, Wrench, BarChart3, AlertTriangle, Package } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const solutions = [
  { icon: Wrench, title: 'Predictive Maintenance', desc: 'AI models trained on sensor data predict equipment failures before they occur, reducing downtime by 40%.' },
  { icon: BarChart3, title: 'Quality Control AI', desc: 'Computer vision systems detect defects on the production line in real time with sub-millisecond latency.' },
  { icon: Package, title: 'Supply Chain Optimisation', desc: 'Demand forecasting and inventory optimisation powered by AI reduce waste and stockouts simultaneously.' },
  { icon: AlertTriangle, title: 'Safety & Compliance', desc: 'AI monitoring of safety protocols, PPE compliance, and regulatory reporting across factory floors.' },
]

export default function Manufacturing() {
  return (
    <>
      <SEOHead page="industries/manufacturing" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-600 text-sm font-semibold mb-6">
                Manufacturing AI
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                AI-Powered Manufacturing{' '}
                <span className="bg-gradient-to-r from-amber-500 to-[#1B4FD8] bg-clip-text text-transparent">
                  Efficiency
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho brings AI to the factory floor — predictive maintenance, quality control,
                and supply chain intelligence that reduce downtime and increase output.
              </p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Book a Manufacturing AI Demo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Manufacturing AI Solutions</h2>
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
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-amber-500" />
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

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { stat: '40%', label: 'Reduction in unplanned downtime' },
                { stat: '99.2%', label: 'Defect detection accuracy' },
                { stat: '20%', label: 'Inventory cost reduction' },
              ].map((item) => (
                <div key={item.label} className="p-8 rounded-2xl border border-[var(--brand-border)] bg-white dark:bg-[#111827]">
                  <div className="text-4xl font-bold text-amber-500 mb-2">{item.stat}</div>
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
