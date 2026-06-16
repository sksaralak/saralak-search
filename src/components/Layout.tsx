import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { brand } from '../content/site'
import Analytics, { trackLineClick } from './Analytics'
import CTAButton from './CTAButton'
import CookieConsent from './CookieConsent'
import FloatingLineButton from './FloatingLineButton'
import FontLoader from './FontLoader'

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
]

const footerCols = [
  { heading: 'บริการ', items: [
    { label: 'Discovery Audit', to: '/discovery-audit' },
    { label: 'Services', to: '/services' },
    { label: 'Case Studies', to: '/case-studies' },
  ]},
  { heading: 'เรียนรู้', items: [
    { label: 'Blog', to: '/blog' },
    { label: 'SEO คืออะไร', to: '/blog/what-is-seo' },
    { label: 'GEO คืออะไร', to: '/blog/what-is-geo' },
    { label: 'AEO คืออะไร', to: '/blog/what-is-aeo' },
  ]},
  { heading: 'Saralak Search', items: [
    { label: 'About', to: '/about' },
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
            <CTAButton to="/contact">{brand.primaryCta}</CTAButton>
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
              <CTAButton to="/contact" className="mt-2" onClick={() => setOpen(false)}>
                {brand.primaryCta}
              </CTAButton>
            </div>
          </div>
        ) : null}
      </header>

      <Analytics />
      <FontLoader />
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
            </div>
          </div>
        </div>
      </footer>

      <FloatingLineButton />
      <CookieConsent />

      {/* Mobile floating CTA */}
      <div className="fixed bottom-4 left-4 right-28 z-50 lg:hidden">
        <Link
          to="/contact"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-teal-900 bg-teal-900 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition hover:bg-teal-800"
        >
          เพิ่มการมองเห็น
        </Link>
      </div>
    </div>
  )
}
