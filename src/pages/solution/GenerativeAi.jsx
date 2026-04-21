import { trackCTA } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, ArrowRight, Database, MessageSquare, GitBranch, Layers } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const capabilities = [
  { icon: Brain, title: 'LLM Fine-Tuning', desc: 'Custom-trained models on your enterprise data for domain-specific accuracy.' },
  { icon: Database, title: 'RAG Pipelines', desc: 'Retrieval-Augmented Generation over your internal knowledge base and documents.' },
  { icon: MessageSquare, title: 'Conversational AI', desc: 'Intelligent chatbots and virtual assistants for customer and employee engagement.' },
  { icon: GitBranch, title: 'Agentic Workflows', desc: 'Multi-agent systems that reason, plan, and execute complex multi-step tasks.' },
  { icon: Layers, title: 'Multimodal AI', desc: 'Vision + language models for document understanding, image analysis, and more.' },
  { icon: ArrowRight, title: 'API & Integration', desc: 'Seamless integration with SAP, Salesforce, ServiceNow, and enterprise systems.' },
]

export default function GenerativeAi() {
  return (
    <>
      <SEOHead page="solutions/generative-ai" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 text-sm font-semibold mb-6">
                Generative AI &amp; RAG
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                Enterprise-Grade{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-[#3B82F6] bg-clip-text text-transparent">
                  Generative AI Applications
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-8">
                Tekisho's AI engineering team builds production-ready generative AI systems — from RAG
                pipelines over your knowledge base to autonomous multi-agent workflows.
              </p>
              <Link
                to="/contact"
                onClick={() => trackCTA()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
              >
                Start a GenAI Project <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[var(--surface-subtle)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-display">Our Generative AI Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-[var(--brand-border)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">{cap.title}</h3>
                    <p className="text-sm text-[var(--text-muted)]">{cap.desc}</p>
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
