import { useEffect } from 'react'

type SEOProps = {
  title: string
  description: string
  path?: string
  jsonLd?: Record<string, unknown>
}

const baseUrl = 'https://saralak-search.com'

function setMeta(selector: string, attr: 'content', value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector)
  if (element) {
    element.setAttribute(attr, value)
  }
}

function setCanonical(value: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }
  element.href = value
}

export default function SEO({ title, description, path = '/', jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[name="robots"]', 'content', 'index, follow')
    setMeta('meta[name="author"]', 'content', 'Saralak Search')
    setMeta('meta[name="publisher"]', 'content', 'Saralak Search')
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', `${baseUrl}${path}`)
    setCanonical(`${baseUrl}${path}`)

    const existing = document.getElementById('page-json-ld')
    existing?.remove()

    if (jsonLd) {
      const script = document.createElement('script')
      script.id = 'page-json-ld'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [description, jsonLd, path, title])

  return null
}
