import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title: string
  description: string
  path?: string
  jsonLd?: Record<string, unknown>
}

const baseUrl = 'https://saralak-search.com'

export default function SEO({ title, description, path = '/', jsonLd }: SEOProps) {
  const url = `${baseUrl}${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Saralak Search" />
      <meta name="publisher" content="Saralak Search" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd != null && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
