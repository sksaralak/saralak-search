import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { brand } from '../content/site'
import Analytics, { trackLineClick } from './Analytics'
import CTAButton from './CTAButton'
import CookieConsent, { CONSENT_KEY } from './CookieConsent'
import FloatingLineButton from './FloatingLineButton'
import ScrollToTop from './ScrollToTop'

const navItems = [
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
]

const serviceDropdown = [
  {
    to: '/services/seo',
    label: 'SEO',
    desc: 'ติด Google Search · ลูกค้าใหม่จาก Organic',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    to: '/services/local-seo',
    label: 'Local SEO',
    desc: 'ลูกค้าในย่าน · Google Maps 3-pack',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    to: '/services/google-maps',
    label: 'Google Maps',
    desc: 'GBP · Call · Direction · Website Clicks',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    to: '/services/geo',
    label: 'GEO',
    desc: 'AI Search · ChatGPT · Gemini · Perplexity',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
  },
  {
    to: '/services/content-marketing',
    label: 'Content',
    desc: 'เขียนบทความ SEO · AI-ready · Topic Cluster',
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
]

const footerCols = [
  { heading: 'บริการ', items: [
    { label: 'Discovery Audit', to: '/discovery-audit' },
    { label: 'SEO', to: '/services/seo' },
    { label: 'Local SEO', to: '/services/local-seo' },
    { label: 'Google Maps', to: '/services/google-maps' },
    { label: 'GEO', to: '/services/geo' },
    { label: 'Content Marketing', to: '/services/content-marketing' },
  ]},
  { heading: 'เรียนรู้', items: [
    { label: 'Blog', to: '/blog' },
    { label: 'SEO คืออะไร', to: '/blog/what-is-seo' },
    { label: 'GEO คืออะไร', to: '/blog/what-is-geo' },
    { label: 'AEO คืออะไร', to: '/blog/what-is-aeo' },
  ]},
  { heading: 'Saralak Search', items: [
    { label: 'About', to: '/about' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
  ]},
]

function navClass({ isActive }: { isActive: boolean }) {
  return `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-white/10 text-white'
      : 'text-neutral-400 hover:bg-white/8 hover:text-white'
  }`
}

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#fbfaf6] text-neutral-900">
      {/* Header — dark sticky */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/96 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex shrink-0 items-center gap-2.5">
            <img src="/logo.svg" alt={brand.name} className="h-7 w-auto" />
            <span className="hidden text-sm font-bold tracking-tight text-white sm:block">
              Saralak <span className="text-teal-400">Search</span>
            </span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {/* Services dropdown */}
            <div className="group relative">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/8 hover:text-white'
                  }`
                }
              >
                Services
                <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </NavLink>
              {/* Dropdown panel */}
              <div className="invisible absolute left-0 top-full z-50 mt-1 w-64 origin-top-left scale-95 rounded-xl border border-neutral-800 bg-neutral-900 p-2 opacity-0 shadow-xl shadow-black/40 transition-all duration-150 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
                {serviceDropdown.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                        isActive ? 'bg-white/10' : 'hover:bg-white/8'
                      }`
                    }
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal-900/60 text-teal-400">
                      {item.icon}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{item.label}</span>
                      <span className="mt-0.5 block text-xs leading-4 text-neutral-500">{item.desc}</span>
                    </span>
                  </NavLink>
                ))}
                <div className="mt-1.5 border-t border-neutral-800 pt-1.5">
                  <NavLink
                    to="/services"
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-teal-400 hover:bg-white/8"
                  >
                    ดูบริการทั้งหมด
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <NavLink
              to="/discovery-audit"
              className={({ isActive }) =>
                `inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'border-teal-500 bg-teal-900/60 text-teal-200'
                    : 'border-teal-800 bg-teal-900/30 text-teal-300 hover:border-teal-600 hover:bg-teal-900/60 hover:text-teal-200'
                }`
              }
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-500" />
              </span>
              Discovery Audit
            </NavLink>
            <a href={brand.lineUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-md border border-teal-900 bg-teal-900 px-5 py-2.5 text-center text-sm font-semibold leading-6 text-white shadow-sm shadow-teal-950/10 transition hover:bg-teal-800">{brand.primaryCta}</a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-md border border-neutral-700 px-3 text-sm font-semibold text-neutral-300 transition hover:border-neutral-600 hover:text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {open ? (
          <div id="mobile-nav" className="border-t border-neutral-800 px-4 pb-4 lg:hidden">
            <div className="grid gap-1 pt-3">
              <p className="px-3 pt-1 text-[10px] font-semibold uppercase tracking-widest text-neutral-600">บริการ</p>
              {serviceDropdown.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-white/8 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-teal-900/60 text-teal-400">{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/services" className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold text-teal-400" onClick={() => setOpen(false)}>
                ดูบริการทั้งหมด →
              </NavLink>
              <div className="my-1 border-t border-neutral-800" />
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={navClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/discovery-audit"
                className="mt-1 rounded-md border border-teal-800 bg-teal-900/30 px-3 py-2 text-sm font-semibold text-teal-300"
                onClick={() => setOpen(false)}
              >
                Discovery Audit
              </NavLink>
              <a href={brand.lineUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md border border-teal-900 bg-teal-900 px-5 py-2.5 text-center text-sm font-semibold leading-6 text-white shadow-sm shadow-teal-950/10 transition hover:bg-teal-800">{brand.primaryCta}</a>
            </div>
          </div>
        ) : null}
      </header>

      <ScrollToTop />
      <Analytics />
      <Outlet />

      {/* Footer — dark */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        {/* Top CTA strip */}
        <div className="border-b border-neutral-800">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div>
              <p className="font-semibold text-white">พร้อมให้ลูกค้าเจอคุณมากขึ้น?</p>
              <p className="thai-readable mt-0.5 text-sm text-neutral-500">เริ่มต้นด้วย Discovery Audit หรือติดต่อเพื่อปรึกษาก่อนได้เลย</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <CTAButton to="/discovery-audit">Discovery Audit</CTAButton>
              <CTAButton to="/contact" variant="secondary">พูดคุย</CTAButton>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-8">
          {/* Brand col */}
          <div>
            <img src="/logo.svg" alt={brand.name} className="h-8 w-auto" />
            <p className="thai-readable mt-4 max-w-xs text-sm leading-7 text-neutral-500">
              ที่ปรึกษา SEO, GEO และ AI Search สำหรับธุรกิจไทย
              ช่วยให้แบรนด์ถูกเจอบน Google, ChatGPT, Gemini และ Perplexity
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['SEO', 'AEO', 'GEO', 'AI Search'].map((tag) => (
                <span key={tag} className="rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs font-semibold text-neutral-500">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={brand.lineUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackLineClick('footer_line')}
                className="text-sm font-medium text-neutral-500 transition hover:text-teal-400"
              >
                LINE
              </a>
              <a
                href={`https://${brand.linkedIn}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-neutral-500 transition hover:text-teal-400"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="text-sm font-medium text-neutral-500 transition hover:text-teal-400"
              >
                Email
              </a>
            </div>
          </div>

          {/* Nav cols */}
          {footerCols.map((col) => (
            <nav key={col.heading} aria-label={`Footer — ${col.heading}`}>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">{col.heading}</p>
              <ul className="mt-4 grid gap-2.5">
                {col.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-neutral-400 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-900">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p className="text-xs text-neutral-700">
              © {new Date().getFullYear()} Saralak Search. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-xs text-neutral-700 hover:text-neutral-400">Privacy Policy</Link>
              <Link to="/privacy#cookies" className="text-xs text-neutral-700 hover:text-neutral-400">Cookie Policy</Link>
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem(CONSENT_KEY)
                  window.dispatchEvent(new Event('cookie_settings_open'))
                }}
                className="text-xs text-neutral-700 hover:text-neutral-400"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </footer>

      <FloatingLineButton />
      <CookieConsent />

      {/* Mobile floating CTA */}
      <div className="fixed bottom-4 left-4 right-28 z-50 lg:hidden">
        <a
          href={brand.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-teal-900 bg-teal-900 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition hover:bg-teal-800"
        >
          คุยกับเรา
        </a>
      </div>
    </div>
  )
}
