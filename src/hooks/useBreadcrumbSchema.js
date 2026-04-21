import { useLocation } from 'react-router-dom'

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

const BASE_URL = 'https://tekisho.ai'

export function useBreadcrumbSchema() {
  const { pathname } = useLocation()

  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${BASE_URL}/`,
    },
  ]

  segments.forEach((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/')
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: SEGMENT_LABELS[segment] || segment,
      item: `${BASE_URL}${path}`,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}
