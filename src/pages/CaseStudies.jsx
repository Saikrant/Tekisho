import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Clock, CheckCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const caseStudies = [
  {
    industry: 'Healthcare',
    client: 'Multi-Specialty Hospital Network',
    location: 'Hyderabad, India',
    challenge: 'High claim denial rate causing revenue leakage and manual rework across the billing team.',
    solution: 'Deployed RightDoc.AI for intelligent document verification and claims pre-validation with AI routing.',
    results: [
      { metric: '35%', label: 'Reduction in claim denials' },
      { metric: '80%', label: 'Faster document turnaround' },
      { metric: '6 wks', label: 'Time to go-live' },
    ],
    product: '/products/rightdoc-ai',
    productName: 'RightDoc.AI',
    color: '#EF4444',
    industry_link: '/industries/healthcare',
  },
  {
    industry: 'Retail',
    client: 'Regional Retail Chain',
    location: 'South India',
    challenge: 'Long checkout queues during peak hours causing customer dissatisfaction and lost sales.',
    solution: 'Implemented ZPOS.AI with AI-powered checkout, real-time inventory sync, and demand forecasting.',
    results: [
      { metric: '2x', label: 'Faster checkout speed' },
      { metric: '22%', label: 'Inventory waste reduction' },
      { metric: '18%', label: 'Increase in basket size' },
    ],
    product: '/products/zpos-ai',
    productName: 'ZPOS.AI',
    color: '#8B5CF6',
    industry_link: '/industries/retail',
  },
  {
    industry: 'Manufacturing',
    client: 'Industrial Equipment Manufacturer',
    location: 'Pune, India',
    challenge: 'Unplanned equipment downtime costing millions in lost production and emergency maintenance.',
    solution: 'Built predictive maintenance AI trained on sensor data with real-time alerting and maintenance scheduling.',
    results: [
      { metric: '40%', label: 'Reduction in downtime' },
      { metric: '99.2%', label: 'Defect detection accuracy' },
      { metric: '12 wks', label: 'Deployment timeline' },
    ],
    product: '/solutions/intelligent-automation',
    productName: 'Intelligent Automation',
    color: '#F59E0B',
    industry_link: '/industries/manufacturing',
  },
  {
    industry: 'SAP Migration',
    client: 'Diversified Conglomerate',
    location: 'India',
    challenge: 'Legacy SAP ECC system limiting digital transformation and increasing maintenance costs.',
    solution: 'Delivered SAP S/4HANA greenfield implementation across Finance, Procurement, and Manufacturing modules.',
    results: [
      { metric: 'On time', label: 'Delivered within budget' },
      { metric: '60%', label: 'Faster financial close cycle' },
      { metric: '9 mo', label: 'Full implementation timeline' },
    ],
    product: '/solutions/sap',
    productName: 'SAP S/4HANA',
    color: '#10B981',
    industry_link: '/solutions/sap',
  },
]

export default function CaseStudies() {
  return (
    <>
      <SEOHead page="case-studies" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-sm font-semibold mb-6">
                Case Studies
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                AI Results That{' '}
                <span className="bg-gradient-to-r from-[#1B4FD8] to-[#3B82F6] bg-clip-text text-transparent">
                  Speak for Themselves
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-12">
                Real deployments. Measured outcomes. Enterprise clients across Healthcare, Retail,
                Manufacturing, and SAP who chose Tekisho to deliver AI that actually works.
              </p>
            </motion.div>

            <div className="space-y-8">
              {caseStudies.map((cs, i) => (
                <motion.article
                  key={cs.client}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-[var(--brand-border)] bg-white dark:bg-[#111827]"
                  aria-label={`Case study: ${cs.industry} — ${cs.client}`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: cs.color + '18', color: cs.color }}
                    >
                      {cs.industry}
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">{cs.location}</span>
                  </div>

                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">{cs.client}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Challenge</div>
                      <p className="text-sm text-[var(--text-primary)]">{cs.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Solution</div>
                      <p className="text-sm text-[var(--text-primary)]">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[var(--surface-subtle)] mb-6">
                    {cs.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="text-2xl font-bold mb-0.5" style={{ color: cs.color }}>{result.metric}</div>
                        <div className="text-xs text-[var(--text-muted)]">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      to={cs.product}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#1B4FD8] hover:underline"
                    >
                      {cs.productName} <ArrowRight size={13} />
                    </Link>
                    <Link
                      to={cs.industry_link}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-muted)] hover:text-[#1B4FD8] transition-colors"
                    >
                      {cs.industry} Solutions <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#0B1629] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-display">Ready to be our next case study?</h2>
            <p className="text-[#8FA3BF] mb-8">
              Book a free AI strategy call and let's map out your transformation.
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
