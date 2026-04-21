import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Factory, Landmark, Truck, ShoppingCart, ArrowRight } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const industries = [
  {
    icon: Heart,
    title: 'Healthcare',
    description: '35% fewer claim denials. AI-powered document verification and intelligent clinical workflows.',
    stat: '35% fewer claim denials',
    href: '/industries/healthcare',
    color: '#EF4444',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Predictive maintenance, quality control automation, and AI-optimised supply chains.',
    stat: '40% reduction in downtime',
    href: '/industries/manufacturing',
    color: '#F59E0B',
  },
  {
    icon: Landmark,
    title: 'BFSI',
    description: 'AI fraud detection, compliance automation, and intelligent document processing for banking and insurance.',
    stat: '60% faster compliance',
    href: '/industries/bfsi',
    color: '#1B4FD8',
  },
  {
    icon: Truck,
    title: 'Logistics',
    description: 'AI route optimisation, demand forecasting, and real-time supply chain visibility.',
    stat: '25% lower logistics cost',
    href: '/industries/logistics',
    color: '#10B981',
  },
  {
    icon: ShoppingCart,
    title: 'Retail',
    description: 'ZPOS.AI smart checkout, demand forecasting, and personalised customer intelligence.',
    stat: '2x faster checkout',
    href: '/industries/retail',
    color: '#8B5CF6',
  },
]

export default function Industries() {
  return (
    <>
      <SEOHead page="industries" />
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
                Industry Solutions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                AI Built for Your{' '}
                <span className="bg-gradient-to-r from-[#1B4FD8] to-[#3B82F6] bg-clip-text text-transparent">
                  Industry
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
                Tekisho's AI solutions are purpose-built for the specific challenges of your sector —
                not generic tools retrofitted to your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, i) => {
                const Icon = industry.icon
                return (
                  <motion.div
                    key={industry.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                  >
                    <Link
                      to={industry.href}
                      className="group block p-6 rounded-2xl border border-[var(--brand-border)] bg-white dark:bg-[#111827] hover:border-[#1B4FD8] hover:shadow-lg transition-all duration-200"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: industry.color + '18' }}
                      >
                        <Icon size={22} style={{ color: industry.color }} />
                      </div>
                      <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#1B4FD8] transition-colors">
                        {industry.title}
                      </h2>
                      <p className="text-sm text-[var(--text-muted)] mb-4">{industry.description}</p>
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                        style={{ backgroundColor: industry.color + '18', color: industry.color }}
                      >
                        {industry.stat}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium text-[#1B4FD8]">
                        Explore solutions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
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
