// src/components/events/SpeakersSection.jsx
// Replace placeholder items with real speaker data when confirmed
import React from 'react'

const speakers = [
  // Replace these with confirmed speakers
  // { name: 'Speaker Name', role: 'Title, Organisation', initials: 'SN', confirmed: true },
  { name: 'Special Guest', role: 'Confirming Shortly', initials: '?', confirmed: false },
  { name: 'Industry Leader', role: 'Confirming Shortly', initials: '?', confirmed: false },
  { name: 'AI Innovator', role: 'Confirming Shortly', initials: '?', confirmed: false },
  { name: 'Keynote Speaker', role: 'Confirming Shortly', initials: '?', confirmed: false },
]

const SpeakerCard = ({ name, role, initials, confirmed }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-200">
    <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold
      ${confirmed ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 border-2 border-dashed border-slate-300'}`}>
      {confirmed ? initials : '?'}
    </div>
    <h3 className={`font-bold text-base ${confirmed ? 'text-[#0A1D37]' : 'text-slate-400'}`}>{name}</h3>
    <p className={`text-sm mt-1 ${confirmed ? 'text-slate-500' : 'text-slate-400 italic'}`}>{role}</p>
    {!confirmed && (
      <span className="inline-block mt-2 text-xs bg-amber-50 text-amber-600 border border-amber-200 px-3 py-1 rounded-full">
        Confirming shortly
      </span>
    )}
  </div>
)

const SpeakersSection = () => (
  <section id="speakers" className="py-20 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Speakers</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1D37] mt-2">Special Guests & Speakers</h2>
        <p className="text-slate-500 mt-2">Confirmations in progress — check back soon</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {speakers.map((s, i) => <SpeakerCard key={i} {...s} />)}
      </div>
    </div>
  </section>
)

export default SpeakersSection