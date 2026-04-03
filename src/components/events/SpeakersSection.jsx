import React, { useState } from 'react';

// Images are stored in public/leaders - use direct path strings
const imgChiefGuest = '/leaders/00_chief_guest_Duddilla_Sridhar_Babu.png';
const imgKiran = '/leaders/01_Kiran_Komatla.png';
const imgSatya = '/leaders/02_Satyanarayana_Kasturi.png';
const imgKRC = '/leaders/03_KRC_Murthy.png';
const imgAshish = '/leaders/04_Dr_Ashish_Shrivastava.png';
const imgSanjeev = '/leaders/05_Sanjeev_Arcot.png';
const imgBhaskar = '/leaders/06_Bhaskar_Vadlamani.png';
const imgSaurabh = '/leaders/07_Saurabh_Agrawal.png';
const imgSanjana = '/leaders/08_Sanjana_Shah.png';

const chiefGuest = {
  name: 'Sri Duddilla Sridhar Babu',
  role: "Hon'ble Minister for IT, Electronics & Communications; Industries & Commerce and Legislative Affairs",
  org: 'Government of Telangana',
  photo: imgChiefGuest,
};

const panelMembers = [
  {
    name: 'Kiran Komatla',
    role: 'Group Chief Technology Officer',
    org: 'Restaurant Brand Asia',
    photo: imgKiran,
    linkedin: 'https://linkedin.com/in/kirankomatla',
  },
  {
    name: 'Satyanarayana Kasturi',
    role: 'Chief Information Officer',
    org: 'Dilip Buildcon Ltd.',
    photo: imgSatya,
    linkedin: 'https://linkedin.com/in/satyanarayana-kasturi-994a3b4',
  },
  {
    name: 'KRC Murthy',
    role: 'Executive VP, Head IT',
    org: 'SBI Life Insurance',
    photo: imgKRC,
    linkedin: 'https://linkedin.com/in/kmurty',
  },
  {
    name: 'Dr Ashish Shrivastava',
    role: 'Business Head, Digital Engineering',
    org: 'Financial Software & System Pvt. Ltd.',
    photo: imgAshish,
    linkedin: 'https://linkedin.com/in/ashish-shrivastava-0a1b2c3d',
  },
  {
    name: 'Sanjeev Arcot',
    role: 'Founder',
    org: 'Augmetek',
    photo: imgSanjeev,
    linkedin: 'https://linkedin.com/in/sanjeevarcot',
  },
  {
    name: 'Bhaskar Vadlamani',
    role: 'Founder',
    org: 'NexTurn',
    photo: imgBhaskar,
    linkedin: 'https://linkedin.com/in/bhaskar-vadlamani-698b94a',
  },
  {
    name: 'Saurabh Agrawal',
    role: 'Managing Director',
    org: 'RxBenefits India GCC',
    photo: imgSaurabh,
    linkedin: 'https://linkedin.com/in/saurabh1509',
  },
  {
    name: 'Sanjana Shah',
    role: 'Executive Director',
    org: 'BNI Hyderabad West',
    photo: imgSanjana,
    linkedin: 'https://linkedin.com/in/sanjana-shah-001584118',
  },
];

const panels = [
  {
    id: 'P1',
    topic: 'India & the Global AI Shift: Adoption, Trust, and the Future of Work',
  },
  {
    id: 'P2',
    topic: 'Building AI Products and Future Leaders: The Road Ahead from India',
  },
];

/* ─── Chief Guest Card ─────────────────────────────────── */
const ChiefGuestCard = ({ name, role, org, photo }) => (
  <div className="group relative w-full bg-[#0A1D37] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/5">
    {/* Subtle blue radial glow */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48" />

    <div className="relative flex flex-col lg:flex-row min-h-[400px]">
      {/* Left side: large photo */}
      <div className="lg:w-2/5 relative overflow-hidden h-[300px] lg:h-auto">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay for mobile bottom transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37] via-transparent to-transparent lg:hidden" />
      </div>

      {/* Right side: details */}
      <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">
            Expected Chief Guest
          </span>
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {name}
        </h3>

        <div className="w-16 h-0.5 bg-blue-500/50 mb-6" />

        <p className="text-blue-100/90 text-lg lg:text-xl font-medium leading-relaxed mb-2">
          {role}
        </p>
        <p className="text-blue-400 font-semibold tracking-wide">
          {org}
        </p>
      </div>
    </div>
  </div>
);

/* ─── Panel Topic Card ─────────────────────────────────── */
const PanelTopicCard = ({ id, topic }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-100 transition-all">
    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-100">
      {id}
    </div>
    <div>
      <h4 className="text-[#0A1D37] font-bold text-lg leading-snug mb-2">{topic}</h4>
      <p className="text-slate-500 text-sm italic font-medium">Moderator: TBD</p>
    </div>
  </div>
);

/* ─── Panel Member Card ────────────────────────────────── */
const PanelMemberCard = ({ name, role, org, photo, linkedin }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer bg-[#0A1D37] border border-white/5 shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image - Increase base scale to hide circular borders */}
      <img
        src={photo}
        alt={name}
        className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out scale-[1.12] ${isHovered ? 'scale-[1.22]' : ''}`}
      />

      {/* Persistent Gradient Overlay (Bottom) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37] via-[#0A1D37]/20 to-transparent opacity-90" />

      {/* Hover Reveal Overlay (Slightly darker highlight) */}
      <div className={`absolute inset-0 bg-[#0A1D37]/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Info Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        {/* Hover Details (Role) */}
        <div className={`transition-all duration-300 transform ${isHovered ? 'translate-y-0 opacity-100 mb-2' : 'translate-y-4 opacity-0 h-0 overflow-hidden'}`}>
          <p className="text-blue-100/90 text-[11px] font-medium leading-[1.4] line-clamp-3">
            {role}
          </p>
        </div>

        {/* Name and Org (Always visible) */}
        <div className="mb-2">
          <h4 className="text-white font-bold text-sm sm:text-base leading-tight">
            {name}
          </h4>
          <p className="text-blue-300 text-[10px] uppercase tracking-widest font-bold mt-1">
            {org}
          </p>
        </div>

        {/* LinkedIn Button (Always visible if exists) */}
        {linkedin && (
          <div className="flex items-center">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0077B5] hover:bg-blue-600 text-white px-3 py-1.5 rounded-full text-[10px] font-bold transition-all shadow-lg active:scale-95"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Main Section ─────────────────────────────────────── */
const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-sm tracking-[0.25em] uppercase block mb-4">
            Speakers
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A1D37] mb-6">
            Special Guests & Speakers
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Industry leaders, CXOs, and AI innovators — all on one stage to shape the future of growth.
          </p>
        </div>

        {/* Chief Guest Section */}
        <div className="mb-20">
          <ChiefGuestCard {...chiefGuest} />
        </div>

        {/* Panel Discussion Topics */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 whitespace-nowrap">
              Panel Discussions
            </h3>
            <div className="h-px w-full bg-slate-200" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {panels.map((p) => (
              <PanelTopicCard key={p.id} {...p} />
            ))}
          </div>
        </div>

        {/* Panel Members Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">
              Panel Members
            </h3>
            <span className="text-[10px] font-bold text-blue-500/60 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
              Hover to see details
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {panelMembers.map((m, i) => (
              <PanelMemberCard key={i} {...m} />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-400 italic max-w-xl mx-auto leading-relaxed">
            * Speaker lineup subject to final confirmation. Moderators and additional panel members to be announced. All listed speakers have been invited or confirmed as of March 2026.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SpeakersSection;