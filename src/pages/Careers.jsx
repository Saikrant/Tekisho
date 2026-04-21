import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, ArrowRight, Code, Brain, TrendingUp, Users } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const openings = [
  {
    title: 'AI/ML Engineer',
    team: 'Engineering',
    location: 'Hyderabad / Remote',
    type: 'Full-time',
    icon: Brain,
    desc: 'Build and deploy production LLM applications, RAG pipelines, and agentic AI systems for enterprise clients.',
  },
  {
    title: 'Full-Stack Developer',
    team: 'Engineering',
    location: 'Hyderabad / Remote',
    type: 'Full-time',
    icon: Code,
    desc: 'Develop React frontends and Node/Python backends for Tekisho\'s AI product suite and client projects.',
  },
  {
    title: 'Enterprise Sales Executive',
    team: 'Sales',
    location: 'Hyderabad / Irving, TX',
    type: 'Full-time',
    icon: TrendingUp,
    desc: 'Drive enterprise AI deals across Healthcare, BFSI, and Manufacturing verticals in India and USA markets.',
  },
  {
    title: 'SAP Consultant',
    team: 'Delivery',
    location: 'Hyderabad / Client Sites',
    type: 'Full-time',
    icon: Users,
    desc: 'Lead SAP S/4HANA implementation and migration projects for Tekisho\'s enterprise client base.',
  },
]

const perks = [
  'AI-first culture — work on cutting-edge GenAI and agentic systems',
  'Flexible remote and hybrid working options',
  'Direct exposure to enterprise clients across India and USA',
  'Fast-growing startup with co-founder access',
  'CLAIM values-driven culture — integrity, innovation, and impact',
  'Competitive compensation and performance incentives',
]

export default function Careers() {
  return (
    <>
      <SEOHead page="careers" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-sm font-semibold mb-6">
                Careers at Tekisho
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                Join Tekisho's{' '}
                <span className="bg-gradient-to-r from-[#1B4FD8] to-[#3B82F6] bg-clip-text text-transparent">
                  AI-First Team
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Build enterprise AI products and solutions that are deployed and used by real
                organisations. At Tekisho, you'll work on meaningful AI, fast.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Open Positions</h2>
            <div className="space-y-4">
              {openings.map((job, i) => {
                const Icon = job.icon
                return (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-2xl bg-white dark:bg-[#111827] border border-[var(--brand-border)] hover:border-[#1B4FD8] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#1B4FD8]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-bold text-[var(--text-primary)]">{job.title}</h3>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-xs font-semibold">{job.team}</span>
                        <span className="px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-950 text-green-600 text-xs font-semibold">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-[var(--text-muted)] mb-2">
                        <MapPin size={12} />
                        {job.location}
                      </div>
                      <p className="text-sm text-[var(--text-muted)]">{job.desc}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full text-sm font-semibold text-white transition-colors flex-shrink-0"
                    >
                      Apply <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 font-display">Why Work at Tekisho</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-[var(--brand-border)] bg-white dark:bg-[#111827]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#1B4FD8] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-primary)]">{perk}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-[var(--text-muted)] mb-4">Don't see your role? We're always interested in exceptional talent.</p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Send Your CV <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
