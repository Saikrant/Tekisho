import { Mail, Mic, Zap } from 'lucide-react'

const products = [
  {
    name: 'LeadQ.AI',
    tagline: 'Flagship Lead Intelligence',
    desc: 'Advanced AI-powered lead generation and qualification engine built for modern sales enterprise teams.',
    icon: <Zap className="w-6 h-6" />,
    status: 'Official Launch',
    statusColor: 'bg-blue-100 text-blue-700',
    features: ['AI-powered lead scoring', 'Real-time qualification', 'CRM & ERP integration'],
  },
  {
    name: 'EmailQ.AI',
    tagline: 'Intelligent Email Automation',
    desc: 'AI-powered personalisation and automation for email marketing. Smart segmentation, dynamic content, and conversion optimisation.',
    icon: <Mail className="w-6 h-6" />,
    status: 'Preview Demo',
    statusColor: 'bg-purple-100 text-purple-700',
    features: ['Smart personalisation', 'Auto-segmentation', 'A/B test automation'],
  },
  {
    name: 'VocalQ.AI',
    tagline: 'Voice AI for Business',
    desc: 'Next-generation voice assistant built for business communication. Handle calls, qualify leads, and deliver insights automatically.',
    icon: <Mic className="w-6 h-6" />,
    status: 'Coming Soon',
    statusColor: 'bg-amber-100 text-amber-700',
    features: ['AI voice calling', 'Call analytics', 'CRM sync'],
  },
]

const ProductDemos = () => (
  <section id="demos" className="py-20 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">In Progress</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1D37] mt-2">Upcoming Product Demos</h2>
        <p className="text-slate-500 mt-2">
          Get an early preview of what's coming next from TEKISHO
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {products.map(({ name, tagline, desc, icon, status, statusColor, features }) => (
          <div key={name} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1D37]">{name}</h3>
                  <p className="text-slate-500 text-sm">{tagline}</p>
                </div>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor} flex-shrink-0 ml-2`}>
                {status}
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">{desc}</p>

            <ul className="space-y-1.5 mb-4">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              disabled
              className="w-full bg-white border border-slate-200 text-slate-400 font-medium py-2.5 rounded-xl text-sm cursor-not-allowed"
            >
              Demo available at event
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-slate-400 mt-6">
        Only LeadQ.AI is officially launching. EmailQ.AI and VocalQ.AI are preview demos.
      </p>
    </div>
  </section>
)

export default ProductDemos