import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = 'G-J7W349SBP7'
const CLARITY_PROJECT_ID = 'wz10zywese'

declare global {
  interface Window {
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
    clarity?: ((...args: any[]) => void) & {
      q?: any[]
    }
  }
}

let analyticsInitialized = false
let lastTrackedPath = ''
let clarityInitialized = false

function getPageType(pathname: string): string {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/blog')) return 'blog'
  if (pathname === '/services') return 'services'
  if (pathname === '/case-studies') return 'case_studies'
  if (pathname === '/discovery-audit') return 'discovery_audit'
  if (pathname === '/contact') return 'contact'
  if (pathname === '/about') return 'about'
  if (pathname === '/proof') return 'case_studies'
  return 'other'
}

export function trackLineClick(source: string) {
  if (typeof window === 'undefined') return

  const pagePath = `${window.location.pathname}${window.location.search}${window.location.hash}`

  try {
    window.gtag?.('event', 'line_click', {
      event_category: 'engagement',
      page_path: pagePath,
      page_type: getPageType(window.location.pathname),
      source,
    })
    window.clarity?.('event', 'line_click')
  } catch {
    // tracking must never block navigation
  }
}

export function trackContactFormSubmission(params: { interest: string; budget: string }) {
  if (typeof window === 'undefined') return

  window.gtag?.('event', 'generate_lead', {
    event_category: 'engagement',
    event_label: 'contact_form',
    form_name: 'contact_form',
    interest: params.interest,
    budget: params.budget,
    page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    page_location: window.location.href,
  })

  window.clarity?.('event', 'contact_form_submit')
}

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (analyticsInitialized) return

    window.dataLayer = window.dataLayer ?? []
    window.gtag =
      window.gtag ||
      function gtag(...args: any[]) {
        window.dataLayer?.push(args)
      }

    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false,
    })

    const scriptId = 'ga4-gtag-script'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      document.head.appendChild(script)
    }

    analyticsInitialized = true
  }, [])

  useEffect(() => {
    if (clarityInitialized) return

    window.clarity =
      window.clarity ||
      function clarity(...args: any[]) {
        window.clarity?.q?.push(args)
      }
    window.clarity.q = window.clarity.q ?? []

    if (!document.getElementById('clarity-script')) {
      const script = document.createElement('script')
      script.id = 'clarity-script'
      script.async = true
      script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`
      document.head.appendChild(script)
    }

    clarityInitialized = true
  }, [])

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}${location.hash}`

    if (!analyticsInitialized || lastTrackedPath === pagePath) {
      return
    }

    lastTrackedPath = pagePath

    window.gtag?.('event', 'page_view', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    })

    window.clarity?.('set', 'page_path', pagePath)
    window.clarity?.('set', 'page_title', document.title)
    window.clarity?.('event', 'page_view')
  }, [location.pathname, location.search, location.hash])

  return null
}
