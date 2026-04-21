import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, ArrowRight, AlertTriangle, Eye, Lock, Activity } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const services = [
  { icon: Eye, title: 'AI Threat Detection', desc: 'Machine learning models that identify anomalies and threats in real time across your network.' },
  { icon: AlertTriangle, title: 'Incident Response', desc: 'Automated playbooks and AI-assisted triage to reduce mean time to response (MTTR).' },
  { icon: Lock, title: 'Zero Trust Architecture', desc: 'Identity-first security design with continuous verification for all users and devices.' },
  { icon: Activity, title: 'Security Analytics', desc: 'SIEM enhancement with AI to correlate events, reduce false positives, and surface real risks.' },
]

export default function Cybersecurity() {
  return (
    <>
      <SEOHead page="solutions/cybersecurity" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950 text-red-600 text-sm font-semibold mb-6">
                AI Cybersecurity
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                Enterprise Security Powered by{' '}
                <span className="bg-gradient-to-r from-red-500 to-[#1B4FD8] bg-clip-text text-transparent">
                  Artificial Intelligence
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho applies AI to cybersecurity — enabling faster threat detection, automated
                response, and intelligent analytics that evolve with the threat landscape.
              </p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Get a Security Assessment <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Our Cybersecurity Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((svc, i) => {
                const Icon = svc.icon
                return (
                  <motion.div
                    key={svc.title}
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
                      <h3 className="font-semibold text-[var(--text-primary)] mb-1">{svc.title}</h3>
                      <p className="text-sm text-[var(--text-muted)]">{svc.desc}</p>
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
