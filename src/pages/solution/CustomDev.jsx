import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code, ArrowRight, CheckCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const capabilities = [
  'AI-powered enterprise web applications',
  'Mobile apps for field operations and workforce',
  'API-first microservices architecture',
  'Integration with SAP, Salesforce, ServiceNow',
  'Real-time dashboards and data visualisation',
  'Legacy system modernisation',
  'Multi-tenant SaaS platform development',
  'DevOps, CI/CD pipeline setup and management',
]

export default function CustomDev() {
  return (
    <>
      <SEOHead page="solutions/custom-dev" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-950 text-pink-600 text-sm font-semibold mb-6">
                Custom Enterprise Development
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                Bespoke Software Built for{' '}
                <span className="bg-gradient-to-r from-pink-500 to-[#1B4FD8] bg-clip-text text-transparent">
                  Your Exact Workflow
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                When off-the-shelf software doesn't fit your enterprise needs, Tekisho builds it from
                scratch — production-ready, scalable, and integrated with your existing stack.
              </p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Discuss Your Project <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">What We Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#111827] border border-[var(--brand-border)]"
                >
                  <CheckCircle size={16} className="text-pink-500 flex-shrink-0" />
                  <span className="text-[var(--text-primary)] font-medium">{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
