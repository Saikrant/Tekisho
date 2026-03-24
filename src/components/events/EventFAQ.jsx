// src/components/events/EventFAQ.jsx
import React, { useState } from 'react'
import { Plus, X, ArrowRight } from 'lucide-react'

const faqs = [
  { q: 'Is the event free to attend?', a: 'Yes, the event is completely free. However, registration is mandatory as seating is strictly limited.' },
  { q: 'Is registration required?', a: 'Yes. You must register in advance to secure your spot. Walk-ins will only be allowed if seats are available.' },
  { q: 'Can I attend online?', a: 'Yes! Register for online attendance and we will send you the live stream link before the event.' },
  { q: 'What should I bring for in-person attendance?', a: 'Bring a valid photo ID and the registration confirmation email. Your entry pass will be checked at the door.' },
  { q: 'Will the event be recorded?', a: 'Yes, the key sessions will be recorded. Online registrants will receive the recording link after the event.' },
  { q: 'What is LeadQ.AI?', a: 'LeadQ.AI is TEKISHO\'s flagship AI product — an intelligent lead generation and qualification platform built for modern sales teams. It officially launches at this event.' },
  { q: 'Who should attend this event?', a: 'Founders, business leaders, sales professionals, AI enthusiasts, students, and anyone interested in the future of AI in India.' },
]

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left"
      >
        <span className={`font-medium text-sm sm:text-base ${open ? 'text-blue-600' : 'text-[#0A1D37]'}`}>{q}</span>
        <span className={`transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-90 text-blue-600' : 'text-slate-400'}`}>
          {open ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      {open && (
        <p className="text-slate-500 text-sm leading-relaxed pb-4">{a}</p>
      )}
    </div>
  )
}

const EventFAQ = () => {
  const [feedbackSent, setFeedbackSent] = useState(false)
  const [feedback, setFeedback] = useState({ name: '', email: '', msg: '' })

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* FAQ */}
          <div>
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1D37] mt-2 mb-6">Frequently Asked</h2>
            <div className="bg-white border border-slate-200 rounded-2xl px-6 divide-y divide-slate-100">
              {faqs.map(item => <FAQItem key={item.q} {...item} />)}
            </div>
          </div>

          {/* Contact + Feedback */}
          <div className="space-y-6">
            {/* Contact card */}
            <div>
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Contact</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1D37] mt-2 mb-4">Get in Touch</h2>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                {[
                  { label: 'Event Coordinator', value: 'Karan', sub: '+91 96245 58848', href: 'tel:+919624558848' },
                  { label: 'Email', value: 'Karunakar.G@Tekisho.ai', sub: null, href: 'mailto:Karunakar.G@Tekisho.ai' },
                  { label: 'Website', value: 'www.tekisho.ai', sub: null, href: 'https://www.tekisho.ai' },
                ].map(({ label, value, sub, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{label}</p>
                      <a href={href} className="text-[#0A1D37] font-semibold text-sm hover:text-blue-600 transition-colors">{value}</a>
                      {sub && <p className="text-slate-500 text-xs">{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback form */}
            <div>
              <h3 className="font-bold text-[#0A1D37] mb-4">Post-Event Feedback</h3>
              {feedbackSent ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                  <p className="text-green-700 font-medium">Thanks for your feedback!</p>
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                  <input
                    placeholder="Your name"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e => setFeedback(p => ({ ...p, name: e.target.value }))}
                  />
                  <input
                    placeholder="Email address"
                    type="email"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e => setFeedback(p => ({ ...p, email: e.target.value }))}
                  />
                  <textarea
                    placeholder="Share your thoughts about the event..."
                    rows={3}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    onChange={e => setFeedback(p => ({ ...p, msg: e.target.value }))}
                  />
                  <button
                    onClick={() => { console.log('Feedback:', feedback); setFeedbackSent(true) }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Feedback <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventFAQ