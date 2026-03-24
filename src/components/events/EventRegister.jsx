// src/components/events/EventRegister.jsx
import React, { useState } from 'react'
import { Check, MapPin, Monitor, Rocket, Mic, Award, Users, Smartphone, Tv, MessageSquare, Link, Mail, AlertTriangle, ArrowRight } from 'lucide-react'

const FIELDS_IN_PERSON = [
  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX', required: true },
  { id: 'org', label: 'Organisation / College', type: 'text', placeholder: 'Where do you work or study?' },
  { id: 'role', label: 'Your Role', type: 'text', placeholder: 'e.g. Founder, Engineer, Student' },
]

const FIELDS_ONLINE = [
  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
  { id: 'phone', label: 'WhatsApp Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
  { id: 'org', label: 'Organisation / College', type: 'text', placeholder: 'Where do you work or study?' },
]

const Form = ({ fields, type }) => {
  const [form, setForm] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with your actual form submission logic / API call
    console.log('Registration submitted:', { type, ...form })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-[#0A1D37] mb-2">Registration Confirmed!</h3>
        <p className="text-slate-500 text-sm max-w-xs">
          {type === 'in-person'
            ? 'We\'ll send your entry pass to your email. Limited seats — see you on March 29!'
            : 'Check your email for the online event link. See you on March 29!'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map(({ id, label, type: fType, placeholder, required }) => (
        <div key={id}>
          <label htmlFor={`${type}-${id}`} className="block text-sm font-medium text-slate-700 mb-1">
            {label} {required && <span className="text-blue-600">*</span>}
          </label>
          <input
            id={`${type}-${id}`}
            type={fType}
            placeholder={placeholder}
            required={required}
            onChange={(e) => setForm(p => ({ ...p, [id]: e.target.value }))}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 mt-2 shadow-md shadow-blue-100 flex items-center justify-center gap-2"
      >
        Complete Registration <ArrowRight className="w-4 h-4" />
      </button>
      <p className="text-xs text-slate-400 text-center">
        Seats are limited. Registration required for entry.
      </p>
    </form>
  )
}

const EventRegister = () => {
  const [mode, setMode] = useState('in-person')

  return (
    <section id="register" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Register</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1D37] mt-2">Secure Your Spot</h2>
          <p className="text-slate-500 mt-2">Registration is required. Limited seats available.</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 rounded-full p-1 flex gap-1">
            {[
              { id: 'in-person', label: 'In Person', icon: <MapPin className="w-4 h-4" /> },
              { id: 'online', label: 'Online', icon: <Monitor className="w-4 h-4" /> },
            ].map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setMode(id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${mode === id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 items-start">
          {/* Active form card */}
          <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 shadow-lg shadow-blue-50 order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                {mode === 'in-person' ? <MapPin className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-bold text-[#0A1D37]">
                  {mode === 'in-person' ? 'In-Person Attendance' : 'Online Attendance'}
                </h3>
                <p className="text-xs text-slate-500">
                  {mode === 'in-person' ? 'T-Hub, Hyderabad · 5 PM onwards' : 'Join via live stream link'}
                </p>
              </div>
            </div>
            <Form
              key={mode}
              fields={mode === 'in-person' ? FIELDS_IN_PERSON : FIELDS_ONLINE}
              type={mode}
            />
          </div>

          {/* Info card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 order-2">
            <h3 className="font-bold text-[#0A1D37] mb-4">What to expect</h3>
            <div className="space-y-4">
              {[
                { icon: <Rocket className="w-5 h-5" />, text: 'Official LeadQ.AI launch ceremony' },
                { icon: <Mic className="w-5 h-5" />, text: 'Panel discussion with industry leaders' },
                ...(mode === 'in-person'
                  ? [
                      { icon: <Award className="w-5 h-5" />, text: 'Intrapreneur recognition' },
                      { icon: <Users className="w-5 h-5" />, text: 'Networking dinner' },
                      { icon: <Smartphone className="w-5 h-5" />, text: 'Product demos' }
                    ]
                  : [
                      { icon: <Tv className="w-5 h-5" />, text: 'HD live stream' },
                      { icon: <MessageSquare className="w-5 h-5" />, text: 'Live Q&A' },
                      { icon: <Mail className="w-5 h-5" />, text: 'Recording after event' }
                    ]),
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-4">
                  <span className="text-blue-600 mt-0.5">{icon}</span>
                  <span className="text-sm text-slate-600 font-medium leading-tight">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <p className="text-xs text-amber-700 font-medium leading-normal">
                Seating is strictly limited. Register early to confirm your place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventRegister