import { Helmet } from 'react-helmet-async'

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tekisho Infotech',
  alternateName: 'Tekisho',
  url: 'https://tekisho.ai',
  logo: 'https://tekisho.ai/tekisho-logo.png',
  description:
    'Tekisho delivers enterprise AI transformation through custom AI agents, SAP solutions, cloud deployment, and intelligent automation.',
  foundingDate: '2024',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@tekisho.ai',
    contactType: 'customer service',
    areaServed: ['IN', 'US'],
    availableLanguage: 'English',
  },
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Irving',
      addressRegion: 'Texas',
      addressCountry: 'US',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/tekisho',
    'https://www.instagram.com/tekisho.ai',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What AI services does Tekisho offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tekisho offers Generative AI development, Agentic AI systems, SAP S/4HANA implementation, cloud solutions, intelligent automation, cybersecurity AI, data analytics, and custom AI application development for enterprise clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an AI implementation take with Tekisho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Tekisho AI implementations achieve initial deployment within 90 days. SAP migrations typically take 6–12 months; focused automation projects go live in 8–12 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which industries does Tekisho specialise in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Healthcare, Manufacturing, Retail, BFSI (Banking, Financial Services, Insurance), and Logistics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tekisho work with companies outside India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Tekisho serves enterprise clients in both India and the USA, with offices in Hyderabad and Irving, Texas.',
      },
    },
  ],
}

export function OrgSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
    </Helmet>
  )
}

export function FaqSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  )
}

export function ProductSchema({ name, description, url, image }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    image,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Organization',
      name: 'Tekisho Infotech',
      url: 'https://tekisho.ai',
    },
  }
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
