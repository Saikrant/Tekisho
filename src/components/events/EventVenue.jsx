// src/components/events/EventVenue.jsx
import React from 'react'
import { MapPin, Train, Car, Info } from 'lucide-react'

const EventVenue = () => (
  <section id="venue" className="py-20 px-4 bg-slate-50">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Venue</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1D37] mt-2">Getting Here</h2>
        <p className="text-slate-500 mt-2">T-Hub, Hyderabad — India's premier innovation hub</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Map embed */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-64 lg:h-80 bg-slate-200">
          <iframe
            title="T-Hub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1234567890!2d78.38!3d17.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beda0abe7b!2sT-Hub!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Venue info */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-[#0A1D37] text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" /> Venue Details
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Venue', value: 'T-Hub' },
                { label: 'Floor', value: '5th Floor' },
                { label: 'Address', value: 'Raidurgam, Knowledge City Road, Hyderabad, Telangana 500081' },
                { label: 'Date', value: 'Sunday, 29 March 2026' },
                { label: 'Time', value: '5:00 PM – 8:30 PM IST' },
                { label: 'Entry', value: 'Free · Registration Required' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <span className="text-slate-400 text-sm min-w-[80px]">{label}</span>
                  <span className="text-slate-700 text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-[#0A1D37] mb-3 flex items-center gap-2">
              <Car className="w-5 h-5 text-blue-600" /> Getting There
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <Train className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Nearest metro: Raidurgam (HITEC City Line)</span>
              </li>
              <li className="flex gap-3">
                <Car className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Uber/Ola: Search "T-Hub, Knowledge City"</span>
              </li>
              <li className="flex gap-3">
                <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Parking available at the venue</span>
              </li>
            </ul>
          </div>

          <a
            href="https://maps.google.com/?q=T-Hub+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 shadow-md shadow-blue-100"
          >
            <MapPin className="w-4 h-4" /> Get Directions
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default EventVenue