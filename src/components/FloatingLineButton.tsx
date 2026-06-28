import { useEffect, useState } from 'react'
import { trackLineClick } from './Analytics'
import { getCookieConsent } from './CookieConsent'
import { brand } from '../content/site'

export default function FloatingLineButton() {
  const [consentPending, setConsentPending] = useState(false)

  useEffect(() => {
    setConsentPending(!getCookieConsent())
    const handler = () => setConsentPending(false)
    window.addEventListener('cookie_consent_resolved', handler)
    return () => window.removeEventListener('cookie_consent_resolved', handler)
  }, [])

  return (
    <div className={`fixed right-4 z-[70] sm:right-6 transition-all duration-300 flex flex-col items-center gap-3 ${consentPending ? 'bottom-24 sm:bottom-28' : 'bottom-4 sm:bottom-6'}`}>
      {/* Call button */}
      <a
        href={brand.phoneUrl}
        aria-label={`โทร ${brand.phone}`}
        className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg shadow-neutral-950/20 ring-1 ring-neutral-200 transition hover:scale-105 hover:bg-neutral-50 hover:shadow-xl sm:h-[52px] sm:w-[52px]"
      >
        <span
          className="pointer-events-none absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded-md bg-neutral-950 px-3 py-1.5 text-xs font-semibold text-white shadow-md sm:group-hover:block"
          role="tooltip"
        >
          {brand.phone}
        </span>
        <svg className="h-5 w-5 text-neutral-700 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      </a>

      {/* LINE button */}
      <a
        href={brand.lineUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackLineClick('floating_line')}
        aria-label="ปรึกษา SEO / GEO / AEO ผ่าน LINE"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755] shadow-lg shadow-neutral-950/25 transition hover:scale-105 hover:bg-[#05b84f] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06C755] sm:h-[60px] sm:w-[60px]"
      >
        <span
          className="pointer-events-none absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded-md bg-neutral-950 px-3 py-1.5 text-xs font-semibold text-white shadow-md sm:group-hover:block"
          role="tooltip"
        >
          ปรึกษา SEO / GEO / AEO
        </span>
        <img
          src="/image/icon/Line-sara-search.png"
          alt="LINE"
          className="h-9 w-9 rounded-full sm:h-10 sm:w-10"
          draggable={false}
        />
      </a>
    </div>
  )
}
