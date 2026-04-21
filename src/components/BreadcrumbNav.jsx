import { Link, useLocation } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useBreadcrumbSchema } from '@/hooks/useBreadcrumbSchema'

const SEGMENT_LABELS = {
  about: 'About',
  products: 'Products',
  'leadq-ai': 'LeadQ.AI',
  'rightdoc-ai': 'RightDoc.AI',
  'zpos-ai': 'ZPOS.AI',
  presence: 'Presence',
  'voice-agent': 'Voice Agent',
  solutions: 'Solutions',
  'ai-strategy': 'AI Strategy',
  'generative-ai': 'Generative AI',
  'intelligent-automation': 'Intelligent Automation',
  sap: 'SAP Implementation',
  cloud: 'Cloud Strategy',
  'custom-dev': 'Custom Development',
  cybersecurity: 'Cybersecurity',
  industries: 'Industries',
  healthcare: 'Healthcare',
  manufacturing: 'Manufacturing',
  bfsi: 'BFSI',
  logistics: 'Logistics',
  retail: 'Retail',
  events: 'Events',
  careers: 'Careers',
  contact: 'Contact',
  'case-studies': 'Case Studies',
}

export default function BreadcrumbNav() {
  const { pathname } = useLocation()
  const schema = useBreadcrumbSchema()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const crumbs = [{ label: 'Home', href: '/' }]
  segments.forEach((seg, i) => {
    crumbs.push({
      label: SEGMENT_LABELS[seg] || seg,
      href: '/' + segments.slice(0, i + 1).join('/'),
    })
  })

  return (
    <>
      {schema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      )}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-[var(--text-muted)]">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1
            return (
              <li key={crumb.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={13} className="text-[var(--text-muted)] opacity-50" />}
                {isLast ? (
                  <span className="text-[var(--text-primary)] font-medium">{crumb.label}</span>
                ) : (
                  <Link to={crumb.href} className="hover:text-[#1B4FD8] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
