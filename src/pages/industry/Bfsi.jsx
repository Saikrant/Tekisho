import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Landmark, ArrowRight, ShieldAlert, FileText, TrendingUp, Users } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const solutions = [
  { icon: ShieldAlert, title: 'Fraud Detection', desc: 'Real-time AI models analyse transaction patterns to flag fraud with <0.1% false positive rate.' },
  { icon: FileText, title: 'Document Intelligence', desc: 'Automated KYC, loan application processing, and policy document extraction with RightDoc.AI.' },
  { icon: TrendingUp, title: 'Risk Analytics', desc: 'AI-powered credit scoring, portfolio risk assessment, and regulatory stress testing.' },
  { icon: Users, title: 'Customer Intelligence', desc: 'Personalised product recommendations and churn prediction across retail banking customers.' },
]

export default function Bfsi() {
  return (
    <>
      <SEOHead page="industries/bfsi" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-sm font-semibold mb-6">
                BFSI AI
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                AI for Banking, Financial Services{' '}
                <span className="bg-gradient-to-r from-[#1B4FD8] to-[#3B82F6] bg-clip-text text-transparent">
                  &amp; Insurance
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho delivers compliant, production-ready AI for BFSI — fraud detection, intelligent
                document processing, and customer intelligence built for regulated environments.
              </p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Book a BFSI AI Demo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">BFSI AI Solutions</h2>
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
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#1B4FD8]" />
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
                { stat: '<0.1%', label: 'False positive rate on fraud detection' },
                { stat: '60%', label: 'Faster KYC processing' },
                { stat: '90%', label: 'Document extraction accuracy' },
              ].map((item) => (
                <div key={item.label} className="p-8 rounded-2xl border border-[var(--brand-border)] bg-white dark:bg-[#111827]">
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
