import { Helmet } from 'react-helmet-async'
import { SEO_DATA } from '@/lib/seo'

export default function SEOHead({ page, customTitle, customDesc }) {
  const data = SEO_DATA[page] || SEO_DATA.home
  const title = customTitle || data.title
  const desc = customDesc || data.description
  const canonical = data.canonical
  const ogImage = 'https://tekisho.ai/og-image.jpg'

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Tekisho Infotech" />

      {/* Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Hreflang for India + USA */}
      <link rel="alternate" hrefLang="en-IN" href={canonical} />
      <link rel="alternate" hrefLang="en-US" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
    </Helmet>
  )
}
