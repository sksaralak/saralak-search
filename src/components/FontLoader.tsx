import { useEffect } from 'react'
import { getCookieConsent } from './CookieConsent'

let fontsLoaded = false

function loadFonts() {
  if (fontsLoaded) return
  fontsLoaded = true

  const pc1 = document.createElement('link')
  pc1.rel = 'preconnect'
  pc1.href = 'https://fonts.googleapis.com'
  document.head.appendChild(pc1)

  const pc2 = document.createElement('link')
  pc2.rel = 'preconnect'
  pc2.href = 'https://fonts.gstatic.com'
  pc2.crossOrigin = 'anonymous'
  document.head.appendChild(pc2)

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href =
    'https://fonts.googleapis.com/css2?family=Prompt:wght@500;600;700&family=Sarabun:wght@400;500;600&display=swap'
  document.head.appendChild(link)
}

export default function FontLoader() {
  useEffect(() => {
    if (getCookieConsent() === 'accepted') {
      loadFonts()
    }

    function handleConsent() {
      loadFonts()
    }

    window.addEventListener('cookie_consent_accepted', handleConsent)
    return () => window.removeEventListener('cookie_consent_accepted', handleConsent)
  }, [])

  return null
}
