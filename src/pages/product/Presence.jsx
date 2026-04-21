import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, MapPin, Clock, BarChart3 } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema, ProductSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const features = [
  { icon: Users, title: 'Smart Attendance', desc: 'AI-powered attendance tracking via facial recognition and mobile check-in across distributed teams.' },
  { icon: MapPin, title: 'Location Intelligence', desc: 'Real-time workforce location visibility for field teams, remote workers, and multi-site operations.' },
  { icon: Clock, title: 'Workforce Analytics', desc: 'Productivity patterns, overtime tracking, and shift optimisation powered by AI analytics.' },
  { icon: BarChart3, title: 'Compliance Reporting', desc: 'Automated labour compliance reports for statutory requirements across India and USA.' },
]

export default function PresencePage() {
  return (
    <>
      <SEOHead page="products/presence" />
      <OrgSchema />
      <ProductSchema
        name="Presence"
        description="AI-powered workforce presence and attendance tracking platform for distributed enterprise teams."
        url="https://tekisho.ai/products/presence"
        image="https://tekisho.ai/og-image.jpg"
      />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-600 text-sm font-semibold">
                  AI Product
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-xs font-bold">
                  Preview
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-display">
                Presence
              </h1>
              <p className="text-xl text-teal-600 font-semibold mb-4">AI Workforce Tracking</p>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Presence is Tekisho's AI-powered workforce tracking platform — giving HR and operations
                leaders real-time visibility across distributed teams with intelligent attendance,
                location, and productivity analytics.
              </p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Request Early Access <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Presence Features</h2>
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
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-teal-500" />
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
