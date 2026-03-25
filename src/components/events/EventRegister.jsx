// src/components/events/EventRegister.jsx
import React, { useState } from 'react'
import { Check, MapPin, Monitor, Rocket, Mic, Award, Users, Smartphone, Tv, MessageSquare, Mail, AlertTriangle, ArrowRight, ChevronDown } from 'lucide-react'

const FIELDS = [
  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
  { id: 'phone', label: 'Phone / WhatsApp Number', type: 'tel', placeholder: '+91 XXXXX XXXXX', required: true },
  { id: 'attendanceType', label: 'Attendance Mode', type: 'select', options: ['In-person', 'Online'], required: true },
  { id: 'org', label: 'Organisation / College', type: 'text', placeholder: 'Where do you work or study?' },
  { id: 'role', label: 'Your Role (In-person)', type: 'text', placeholder: 'e.g. Founder, Engineer, Student' },
]

const Form = () => {
  const [form, setForm] = useState({ attendanceType: 'In-person' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Registration submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-[#0A1D37] mb-2">Registration Confirmed!</h3>
        <p className="text-slate-500 text-sm max-w-xs">
          {form.attendanceType === 'In-person'
            ? 'We\'ll send your entry pass to your email. Limited seats — see you on March 29!'
            : 'Check your email for the online event link. See you on March 29!'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {FIELDS.map(({ id, label, type: fType, placeholder, required, options }) => (
          <div key={id} className={id === 'name' || id === 'email' ? 'sm:col-span-2' : ''}>
            <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
              {label} {required && <span className="text-blue-600 font-bold">*</span>}
            </label>
            
            {fType === 'select' ? (
              <div className="relative">
                <select
                  id={id}
                  required={required}
                  value={form[id] || ''}
                  onChange={(e) => setForm(p => ({ ...p, [id]: e.target.value }))}
                  className="w-full appearance-none border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="" disabled>Select option</option>
                  {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            ) : (
              <input
                id={id}
                type={fType}
                placeholder={placeholder}
                required={required}
                value={form[id] || ''}
                onChange={(e) => setForm(p => ({ ...p, [id]: e.target.value }))}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            )}
          </div>
        ))}
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 mt-2 shadow-lg shadow-blue-100 flex items-center justify-center gap-2 hover:-translate-y-0.5"
      >
        Register Free <ArrowRight className="w-5 h-5" />
      </button>
      
      <p className="text-xs text-slate-400 text-center mt-4">
        By registering, you agree to receive event-related communications.
      </p>
    </form>
  )
}

const EventRegister = () => {
  return (
    <section id="register" className="py-24 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-sm tracking-[0.25em] uppercase block mb-4">Registration</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A1D37] mb-6">Secure Your Spot</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Join the TEKISHO AI Growth Summit 2026. Whether online or in-person, ensure you don't miss the future of AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main Form Card */}
          <div className="lg:col-span-3 bg-white border border-slate-100 rounded-[2rem] p-8 sm:p-10 shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A1D37]">Registration Details</h3>
                <p className="text-sm text-slate-500">Fill in the fields below to complete your registration.</p>
              </div>
            </div>
            <Form />
          </div>

          {/* Info Card */}
          <div className="lg:col-span-2 flex flex-col w-full space-y-6">
            <div className="w-full bg-[#0A1D37] rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl shadow-blue-900/10">
              {/* Glow effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-[80px]" />
              
              <h3 className="text-xl font-bold mb-6 relative z-10 text-white">What's in store</h3>
              <div className="space-y-5 relative z-10">
                {[
                  { icon: <Rocket className="w-5 h-5" />, text: 'LeadQ.AI Public Launch' },
                  { icon: <Mic className="w-5 h-5" />, text: 'CXO Panel Discussion' },
                  { icon: <Award className="w-5 h-5" />, text: 'Intrapreneur Awards' },
                  { icon: <Users className="w-5 h-5" />, text: 'Networking & Dinner (In-person)' },
                  { icon: <Monitor className="w-5 h-5" />, text: 'HD Digital Stream (Online)' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-4 text-white">
                    <div className="mt-1 p-1 bg-white/10 rounded-lg text-blue-400">
                      {icon}
                    </div>
                    <span className="text-[15px] font-medium text-blue-50 leading-snug">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-blue-500/10 border border-blue-400/20 rounded-2xl flex gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <p className="text-xs text-blue-100/80 leading-relaxed">
                  <strong>Note:</strong> In-person attendance is limited to 200 CXOs and invited guests. Online stream link will be shared via email.
                </p>
              </div>
            </div>

            {/* Support card */}
            <div className="w-full bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0A1D37]">Need Support?</h4>
              </div>
              <p className="text-sm text-slate-500 mb-2">
                Questions about registration or the venue?
              </p>
              <a href="mailto:events@tekisho.ai" className="text-blue-600 font-bold text-sm hover:underline">
                events@tekisho.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventRegister;