import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const CONSENT_KEY = 'saralak_cookie_consent'

export function getCookieConsent(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(CONSENT_KEY)
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!getCookieConsent()) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    window.dispatchEvent(new Event('cookie_consent_accepted'))
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-neutral-200 bg-white px-4 py-4 shadow-lg shadow-neutral-950/10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="thai-readable text-sm leading-6 text-neutral-700">
          เว็บไซต์นี้ใช้คุกกี้เพื่อวิเคราะห์การใช้งาน (Google Analytics) และปรับปรุงประสบการณ์ผู้ใช้งาน (Microsoft Clarity){' '}
          <Link
            to="/privacy"
            className="font-medium text-teal-800 underline underline-offset-2 hover:text-teal-600"
          >
            นโยบายความเป็นส่วนตัว
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={decline}
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
          >
            ปฏิเสธ
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-teal-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-800"
          >
            ยอมรับ
          </button>
        </div>
      </div>
    </div>
  )
}
