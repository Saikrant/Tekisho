import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import { trackCTA } from '@/lib/analytics'
import SEOHead from '@/components/SEOHead'
import { OrgSchema } from '@/components/SchemaMarkup'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const offices = [
  {
    city: 'Hyderabad',
    country: 'India',
    region: 'Telangana',
    description: 'India headquarters — serving enterprise clients across the subcontinent.',
  },
  {
    city: 'Irving',
    country: 'USA',
    region: 'Texas',
    description: 'North America office — serving enterprise clients across the United States.',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    trackCTA('Book a Strategy Call')
    setSubmitted(true)
  }

  return (
    <>
      <SEOHead page="contact" />
      <OrgSchema />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)]">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <BreadcrumbNav />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1B4FD8] text-sm font-semibold mb-6">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-display">
                Book a Free{' '}
                <span className="bg-gradient-to-r from-[#1B4FD8] to-[#3B82F6] bg-clip-text text-transparent">
                  Strategy Call
                </span>
              </h1>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl mb-12">
                Talk to a Tekisho AI consultant. We'll assess your current state, identify the
                highest-ROI AI opportunities, and outline a clear path to deployment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl border border-green-200 bg-green-50 dark:bg-green-950 text-center"
                  >
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Message Sent!</h2>
                    <p className="text-[var(--text-muted)]">
                      A Tekisho consultant will reach out within 1 business day to schedule your call.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--brand-border)] bg-white dark:bg-[#111827] text-[var(--text-primary)] focus:outline-none focus:border-[#1B4FD8] transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        Company *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--brand-border)] bg-white dark:bg-[#111827] text-[var(--text-primary)] focus:outline-none focus:border-[#1B4FD8] transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--brand-border)] bg-white dark:bg-[#111827] text-[var(--text-primary)] focus:outline-none focus:border-[#1B4FD8] transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        What are you looking to solve?
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--brand-border)] bg-white dark:bg-[#111827] text-[var(--text-primary)] focus:outline-none focus:border-[#1B4FD8] transition-colors resize-none"
                        placeholder="Briefly describe your challenge or goal..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
                    >
                      Book My Strategy Call <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Mail size={16} className="text-[#1B4FD8]" />
                    <span className="font-semibold text-[var(--text-primary)]">Email</span>
                  </div>
                  <a href="mailto:contact@tekisho.ai" className="text-[#1B4FD8] hover:underline">
                    contact@tekisho.ai
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={16} className="text-[#1B4FD8]" />
                    <span className="font-semibold text-[var(--text-primary)]">Our Offices</span>
                  </div>
                  <div className="space-y-4">
                    {offices.map((office) => (
                      <div key={office.city} className="p-4 rounded-xl border border-[var(--brand-border)] bg-white dark:bg-[#111827]">
                        <div className="font-bold text-[var(--text-primary)] mb-0.5">
                          {office.city}, {office.region}
                        </div>
                        <div className="text-sm text-[var(--text-muted)] mb-1">{office.country}</div>
                        <div className="text-sm text-[var(--text-muted)]">{office.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
                  <p className="text-sm font-semibold text-[#1B4FD8] mb-1">Response time</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    Our team responds to all enquiries within 1 business day.
                    Strategy calls are typically scheduled within 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
