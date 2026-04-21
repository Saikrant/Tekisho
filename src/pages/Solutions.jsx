import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Zap, Settings, Cloud, Shield, Code, TrendingUp, ArrowRight } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const solutions = [
  {
    icon: TrendingUp,
    title: 'AI Strategy & Consulting',
    description: 'Enterprise AI roadmaps from assessment to deployment in 90 days.',
    href: '/solutions/ai-strategy',
    color: '#1B4FD8',
  },
  {
    icon: Brain,
    title: 'Generative AI & RAG',
    description: 'LLM-powered applications, RAG pipelines, and agentic workflows.',
    href: '/solutions/generative-ai',
    color: '#6366F1',
  },
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description: 'AI agents that automate Finance, HR, and Operations end-to-end.',
    href: '/solutions/intelligent-automation',
    color: '#0EA5E9',
  },
  {
    icon: Settings,
    title: 'SAP S/4HANA',
    description: 'Certified SAP implementations and migrations in record time.',
    href: '/solutions/sap',
    color: '#10B981',
  },
  {
    icon: Cloud,
    title: 'Cloud Strategy & Deployment',
    description: 'Azure, AWS, and GCP migrations with enterprise-grade security.',
    href: '/solutions/cloud',
    color: '#F59E0B',
  },
  {
    icon: Code,
    title: 'Custom Enterprise Dev',
    description: 'Bespoke applications built for unique business workflows.',
    href: '/solutions/custom-dev',
    color: '#EC4899',
  },
  {
    icon: Shield,
    title: 'AI Cybersecurity',
    description: 'Intelligent threat detection and AI-powered security analytics.',
    href: '/solutions/cybersecurity',
    color: '#EF4444',
  },
]

export default function Solutions() {
  return (
    <>
      <SEOHead page="solutions" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <BreadcrumbNav />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-sm font-semibold mb-6">
                Enterprise Solutions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                End-to-End{' '}
                <span className="bg-gradient-to-r from-[#1B4FD8] to-[#3B82F6] bg-clip-text text-transparent">
                  AI &amp; Enterprise Solutions
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
                From AI strategy through deployment — Tekisho delivers solutions that generate
                measurable outcomes for enterprise organisations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, i) => {
                const Icon = solution.icon
                return (
                  <motion.div
                    key={solution.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.45 }}
                  >
                    <Link
                      to={solution.href}
                      className="group block p-6 rounded-2xl border border-[var(--brand-border)] bg-white dark:bg-[#111827] hover:border-[#1B4FD8] hover:shadow-lg transition-all duration-200"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: solution.color + '18' }}
                      >
                        <Icon size={22} style={{ color: solution.color }} />
                      </div>
                      <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#1B4FD8] transition-colors">
                        {solution.title}
                      </h2>
                      <p className="text-sm text-[var(--text-muted)] mb-4">{solution.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1B4FD8]">
                        Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#0B1629] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-display">Ready to transform your enterprise?</h2>
            <p className="text-[#8FA3BF] mb-8">
              Book a free strategy session with Tekisho's AI consultants.
            </p>
            <Link
              to="/contact"
              onClick={() => trackCTA()}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
            >
              Book a Strategy Call <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
