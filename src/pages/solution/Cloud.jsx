import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cloud, ArrowRight, CheckCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const platforms = [
  { name: 'Microsoft Azure', services: ['Azure OpenAI Service', 'Azure Kubernetes Service', 'Azure Data Factory', 'Azure DevOps'] },
  { name: 'Amazon Web Services', services: ['AWS SageMaker', 'Amazon EKS', 'AWS Lambda', 'Amazon Bedrock'] },
  { name: 'Google Cloud Platform', services: ['Vertex AI', 'Google Kubernetes Engine', 'BigQuery', 'Cloud Run'] },
]

export default function CloudPage() {
  return (
    <>
      <SEOHead page="solutions/cloud" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-600 text-sm font-semibold mb-6">
                Cloud Strategy &amp; Deployment
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                Cloud Infrastructure Built for{' '}
                <span className="bg-gradient-to-r from-amber-500 to-[#1B4FD8] bg-clip-text text-transparent">
                  AI Workloads
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho's cloud architects design, migrate, and manage enterprise infrastructure on
                Azure, AWS, and GCP — optimised for AI workloads, security, and cost efficiency.
              </p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Plan Your Cloud Migration <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Platforms We Work With</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platforms.map((platform, i) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-[var(--brand-border)]"
                >
                  <h3 className="font-bold text-[var(--text-primary)] mb-4">{platform.name}</h3>
                  <ul className="space-y-2">
                    {platform.services.map((svc) => (
                      <li key={svc} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <CheckCircle size={13} className="text-[#1B4FD8] flex-shrink-0" />
                        {svc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
