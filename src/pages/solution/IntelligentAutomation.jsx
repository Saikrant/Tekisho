import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, ArrowRight, RefreshCw, FileText, Users, DollarSign } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const useCases = [
  { icon: DollarSign, title: 'Finance Automation', desc: 'Invoice processing, AP/AR reconciliation, and expense management — automated end-to-end.' },
  { icon: Users, title: 'HR Workflows', desc: 'Onboarding, leave management, compliance reporting, and employee query resolution.' },
  { icon: FileText, title: 'Document Processing', desc: 'Extract, classify, and route documents from any source with RightDoc.AI.' },
  { icon: RefreshCw, title: 'Operations', desc: 'Supply chain updates, inventory alerts, and order management automation.' },
]

export default function IntelligentAutomation() {
  return (
    <>
      <SEOHead page="solutions/intelligent-automation" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950 text-sky-600 text-sm font-semibold mb-6">
                Intelligent Automation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                AI Agents That{' '}
                <span className="bg-gradient-to-r from-sky-500 to-[#1B4FD8] bg-clip-text text-transparent">
                  Work While You Sleep
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho builds intelligent automation agents for Finance, HR, Operations, and more —
                going beyond RPA to AI systems that reason, adapt, and handle exceptions autonomously.
              </p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Automate a Workflow <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Automation Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((uc, i) => {
                const Icon = uc.icon
                return (
                  <motion.div
                    key={uc.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-[#111827] border border-[var(--brand-border)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] mb-1">{uc.title}</h3>
                      <p className="text-sm text-[var(--text-muted)]">{uc.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4 font-display">
              Related Products
            </h2>
            <p className="text-[var(--text-muted)] mb-8">
              Tekisho's automation solutions are powered by our purpose-built AI products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products/rightdoc-ai" className="px-6 py-3 rounded-full border border-[var(--brand-border)] hover:border-[#1B4FD8] text-[var(--text-primary)] font-medium transition-colors">
                RightDoc.AI — Document Automation
              </Link>
              <Link to="/products/voice-agent" className="px-6 py-3 rounded-full border border-[var(--brand-border)] hover:border-[#1B4FD8] text-[var(--text-primary)] font-medium transition-colors">
                Voice Agent — Call Automation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
