import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Settings, ArrowRight, CheckCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const services = [
  'SAP S/4HANA Greenfield Implementation',
  'SAP S/4HANA Migration from ECC',
  'SAP Rise with Cloud transition',
  'SAP FICO, MM, SD, PP module rollouts',
  'SAP BTP and Integration Suite',
  'SAP Analytics Cloud and BW/4HANA',
  'Post-go-live AMS and optimisation',
  'SAP security and authorisation',
]

export default function Sap() {
  return (
    <>
      <SEOHead page="solutions/sap" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 text-sm font-semibold mb-6">
                SAP Solutions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                SAP S/4HANA Implementation{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-[#1B4FD8] bg-clip-text text-transparent">
                  in Record Time
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho's certified SAP team delivers greenfield implementations, ECC migrations, and
                ongoing AMS — with a track record of on-time, on-budget delivery.
              </p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Discuss Your SAP Project <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">SAP Services We Deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#111827] border border-[var(--brand-border)]"
                >
                  <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                  <span className="text-[var(--text-primary)] font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { stat: '50+', label: 'SAP projects delivered' },
                { stat: '98%', label: 'On-time delivery rate' },
                { stat: '6–12 mo', label: 'Typical S/4HANA migration' },
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
