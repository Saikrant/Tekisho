import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingCart, BarChart3, Zap, RefreshCw } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema, ProductSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const features = [
  { icon: Zap, title: 'AI-Powered Checkout', desc: 'Computer vision identifies items instantly, eliminating barcode scanning and reducing checkout time by 2x.' },
  { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Live dashboards show sales velocity, basket analysis, and inventory levels across all locations.' },
  { icon: RefreshCw, title: 'Smart Inventory Sync', desc: 'Automatic inventory deduction on sale, with AI-triggered replenishment alerts before stockouts.' },
  { icon: ShoppingCart, title: 'Omnichannel Integration', desc: 'Unified POS across in-store, kiosk, and online channels with single inventory management.' },
]

export default function ZposAi() {
  return (
    <>
      <SEOHead page="products/zpos-ai" />
      <OrgSchema />
      <ProductSchema
        name="ZPOS.AI"
        description="AI-powered retail point-of-sale system with smart checkout and real-time analytics for modern retail."
        url="https://tekisho.ai/products/zpos-ai"
        image="https://tekisho.ai/og-image.jpg"
      />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-600 text-sm font-semibold">
                  AI Product
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-xs font-bold">
                  Preview
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-display">
                ZPOS.AI
              </h1>
              <p className="text-xl text-purple-600 font-semibold mb-4">AI Retail Point of Sale System</p>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                ZPOS.AI delivers AI-powered POS and checkout analytics for retail — reducing checkout
                time by 2x and providing real-time insights that drive better inventory and staffing
                decisions.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/contact"
                  onClick={() => trackCTA()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
                >
                  Request ZPOS.AI Demo <ArrowRight size={16} />
                </Link>
                <Link to="/industries/retail" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-border)] rounded-full font-semibold text-[var(--text-primary)] hover:border-[#1B4FD8] transition-colors">
                  Retail AI Solutions
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-[#0B1629] text-white">
                {[
                  { stat: '2x', label: 'Faster checkout' },
                  { stat: '22%', label: 'Inventory waste reduction' },
                  { stat: '18%', label: 'Basket size increase' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1">{item.stat}</div>
                    <div className="text-xs text-[#8FA3BF]">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">ZPOS.AI Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
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
                      <h3 className="font-semibold text-[var(--text-primary)] mb-1">{feature.title}</h3>
                      <p className="text-sm text-[var(--text-muted)]">{feature.desc}</p>
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
