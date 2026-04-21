import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, ArrowRight, Zap, BarChart3, Users, Package } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const solutions = [
  { icon: Zap, title: 'ZPOS.AI Smart Checkout', desc: '2x faster checkout with AI-powered POS, real-time inventory sync, and customer analytics.' },
  { icon: BarChart3, title: 'Demand Intelligence', desc: 'SKU-level demand forecasting reduces overstock by 22% and eliminates stockouts on top sellers.' },
  { icon: Users, title: 'Personalisation Engine', desc: 'AI-driven product recommendations and loyalty programmes that increase basket size by 18%.' },
  { icon: Package, title: 'Inventory Optimisation', desc: 'Automated replenishment and smart allocation across stores, warehouses, and online channels.' },
]

export default function Retail() {
  return (
    <>
      <SEOHead page="industries/retail" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-600 text-sm font-semibold mb-6">
                Retail AI
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                AI Retail Solutions —{' '}
                <span className="bg-gradient-to-r from-purple-500 to-[#1B4FD8] bg-clip-text text-transparent">
                  2x Faster Checkout
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                From smart checkout with ZPOS.AI to demand forecasting and personalisation — Tekisho
                transforms retail operations with purpose-built AI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  onClick={() => trackCTA()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
                >
                  Book a Retail AI Demo <ArrowRight size={16} />
                </Link>
                <Link to="/products/zpos-ai" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-border)] rounded-full font-semibold text-[var(--text-primary)] hover:border-[#1B4FD8] transition-colors">
                  Explore ZPOS.AI
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Retail AI Solutions</h2>
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
                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-purple-500" />
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
      </main>
    </>
  )
}
