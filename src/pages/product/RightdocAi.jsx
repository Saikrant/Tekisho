import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Search, GitBranch, CheckCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema, ProductSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const features = [
  { icon: FileText, title: 'Intelligent Extraction', desc: 'AI reads PDFs, scanned documents, and images to extract structured data with 95%+ accuracy.' },
  { icon: Search, title: 'Classification & Tagging', desc: 'Automatically classify thousands of document types and tag metadata for instant retrieval.' },
  { icon: GitBranch, title: 'Smart Routing', desc: 'AI routes documents to the correct team, system, or workflow based on content and context.' },
  { icon: CheckCircle, title: 'Compliance Audit Trail', desc: 'Every document action is logged for HIPAA, GDPR, and SOC 2 compliance audit trails.' },
]

export default function RightdocAi() {
  return (
    <>
      <SEOHead page="products/rightdoc-ai" />
      <OrgSchema />
      <ProductSchema
        name="RightDoc.AI"
        description="Intelligent document automation platform that extracts, classifies, and routes enterprise documents using AI."
        url="https://tekisho.ai/products/rightdoc-ai"
        image="https://tekisho.ai/og-image.jpg"
      />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 text-sm font-semibold">
                  AI Product
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-xs font-bold">
                  Preview
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-display">
                RightDoc.AI
              </h1>
              <p className="text-xl text-indigo-600 font-semibold mb-4">Intelligent Document Automation</p>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                RightDoc.AI automates document verification, extraction, and routing using AI. Reduce
                manual document processing by 80% and eliminate errors across Healthcare, BFSI, and
                Legal workflows.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/contact"
                  onClick={() => trackCTA()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
                >
                  Request Early Access <ArrowRight size={16} />
                </Link>
                <Link to="/industries/healthcare" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-border)] rounded-full font-semibold text-[var(--text-primary)] hover:border-[#1B4FD8] transition-colors">
                  Healthcare Use Cases
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-[#0B1629] text-white">
                {[
                  { stat: '95%+', label: 'Extraction accuracy' },
                  { stat: '80%', label: 'Processing time reduction' },
                  { stat: '100+', label: 'Document types supported' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-1">{item.stat}</div>
                    <div className="text-xs text-[#8FA3BF]">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">What RightDoc.AI Does</h2>
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
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-indigo-600" />
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
