import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { brand } from '../content/site'
import CTAButton from './CTAButton'
import FloatingLineButton from './FloatingLineButton'

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/#blog' },
  { label: 'Discovery Audit', to: '/discovery-audit' },
]

function navClass({ isActive }: { isActive: boolean }) {
  return `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-teal-50 text-teal-950' : 'text-neutral-700 hover:bg-neutral-100'
  }`
}

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#fbfaf6] text-neutral-900">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-[#fbfaf6]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="text-lg font-semibold text-teal-950">
            {brand.name}
          </NavLink>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:block">
            <CTAButton to="/contact">{brand.primaryCta}</CTAButton>
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-3 text-sm font-semibold text-neutral-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </nav>
        {open ? (
          <div id="mobile-nav" className="border-t border-neutral-200 px-4 pb-4 lg:hidden">
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
              <CTAButton to="/contact" className="mt-2" onClick={() => setOpen(false)}>
                {brand.primaryCta}
              </CTAButton>
            </div>
          </div>
        ) : null}
      </header>
      <Outlet />
      <footer className="border-t border-neutral-200 bg-white pb-16 sm:pb-10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div>
            <p className="text-lg font-semibold text-teal-950">{brand.name}</p>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-700">
              SEO, GEO และ AI Search Visibility สำหรับธุรกิจไทยและ Agency Partner
            </p>
          </div>
        </div>
      </footer>
      <FloatingLineButton />
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
