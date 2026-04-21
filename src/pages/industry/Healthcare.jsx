import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, FileCheck, ClipboardList, Activity, CheckCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const solutions = [
  { icon: FileCheck, title: 'Claims Processing Automation', desc: 'AI verifies, routes, and processes medical claims with 35% fewer denials and 80% faster turnaround.' },
  { icon: ClipboardList, title: 'Intelligent Document Processing', desc: 'RightDoc.AI extracts and classifies clinical documents, referral letters, and prior authorisations.' },
  { icon: Activity, title: 'Clinical Workflow Automation', desc: 'AI agents handle appointment scheduling, patient follow-ups, and discharge summaries.' },
  { icon: CheckCircle, title: 'Compliance & Audit Readiness', desc: 'Automated HIPAA compliance checks and audit trails across all patient data touchpoints.' },
]

export default function Healthcare() {
  return (
    <>
      <SEOHead page="industries/healthcare" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950 text-red-600 text-sm font-semibold mb-6">
                Healthcare AI
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                AI That Reduces Claim Denials{' '}
                <span className="bg-gradient-to-r from-red-500 to-[#1B4FD8] bg-clip-text text-transparent">
                  by 35%
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho's healthcare AI solutions streamline claims processing, clinical documentation,
                and compliance — so your teams can focus on patient outcomes, not paperwork.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  onClick={() => trackCTA()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
                >
                  Book a Healthcare AI Demo <ArrowRight size={16} />
                </Link>
                <Link to="/products/rightdoc-ai" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-border)] rounded-full font-semibold text-[var(--text-primary)] hover:border-[#1B4FD8] transition-colors">
                  See RightDoc.AI
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4 font-display">Healthcare Solutions</h2>
            <p className="text-[var(--text-muted)] mb-10 max-w-xl">
              Purpose-built AI for hospital systems, payers, and healthcare providers.
            </p>
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
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-red-500" />
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
                { stat: '35%', label: 'Reduction in claim denials' },
                { stat: '80%', label: 'Faster document turnaround' },
                { stat: '6 wks', label: 'Average deployment time' },
              ].map((item) => (
                <div key={item.label} className="p-8 rounded-2xl border border-[var(--brand-border)] bg-white dark:bg-[#111827]">
                  <div className="text-4xl font-bold text-red-500 mb-2">{item.stat}</div>
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
