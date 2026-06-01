import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title: string
  description: string
  path?: string
  image?: string
  ogType?: 'website' | 'article'
  ogImageWidth?: number
  ogImageHeight?: number
  jsonLd?: Record<string, unknown>
}

const baseUrl = 'https://saralak-search.com'

export default function SEO({
  title,
  description,
  path = '/',
  image,
  ogType = 'website',
  ogImageWidth,
  ogImageHeight,
  jsonLd,
}: SEOProps) {
  const url = `${baseUrl}${path}`
  const imagePath = image ?? '/og-image.png'
  const imageUrl = imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Saralak Search" />
      <meta name="publisher" content="Saralak Search" />
      <link rel="canonical" href={url} />
      <meta property="og:locale" content="th_TH" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      {ogImageWidth != null && <meta property="og:image:width" content={String(ogImageWidth)} />}
      {ogImageHeight != null && <meta property="og:image:height" content={String(ogImageHeight)} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {jsonLd != null && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
