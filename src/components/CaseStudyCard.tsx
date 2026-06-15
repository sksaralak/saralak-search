import { useEffect, useState } from 'react'
import type { CaseStudy } from '../content/caseStudies'

type ColorScheme = { grad: string; accent: string; badge: string; dot: string; arrow: string }

const serviceColors: Record<string, ColorScheme> = {
  'SEO Strategy':  { grad: 'from-teal-950 to-[#0d3d36]',   accent: 'text-teal-300',   badge: 'bg-teal-900/80 text-teal-100',   dot: 'bg-teal-400',   arrow: 'text-teal-400'   },
  'GEO':           { grad: 'from-violet-950 to-violet-900', accent: 'text-violet-300', badge: 'bg-violet-900/80 text-violet-100', dot: 'bg-violet-400', arrow: 'text-violet-400' },
  'AEO':           { grad: 'from-sky-950 to-sky-900',       accent: 'text-sky-300',    badge: 'bg-sky-900/80 text-sky-100',      dot: 'bg-sky-400',    arrow: 'text-sky-400'    },
  'Technical SEO': { grad: 'from-teal-950 to-neutral-900', accent: 'text-teal-300',   badge: 'bg-teal-900/80 text-teal-100',   dot: 'bg-teal-400',   arrow: 'text-teal-400'   },
}

const fallback: ColorScheme = {
  grad: 'from-neutral-900 to-neutral-950', accent: 'text-neutral-300',
  badge: 'bg-neutral-800 text-neutral-100', dot: 'bg-neutral-400', arrow: 'text-neutral-400',
}

type Props = { study: CaseStudy }

export default function CaseStudyCard({ study }: Props) {
  const [open, setOpen] = useState(false)
  const c = serviceColors[study.service] ?? fallback

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <article className="overflow-hidden rounded-2xl border border-neutral-200 shadow-md shadow-neutral-950/8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-neutral-950/10">
        <div className="flex flex-col lg:flex-row">

          {/* Left: dark metric panel */}
          <div className={`flex flex-col bg-gradient-to-br ${c.grad} p-7 lg:w-72 lg:shrink-0`}>
            <span className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${c.badge}`}>
              {study.service}
            </span>
            <p className="mt-5 text-3xl font-bold leading-tight text-white lg:text-[2.25rem]">
              {study.projectName}
            </p>
            <p className={`mt-2 text-xs font-medium ${c.accent}`}>{study.channel}</p>

            {/* Proof screenshot — click to lightbox */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
              aria-label={`ดูหลักฐาน: ${study.projectName}`}
            >
              <img
                src={study.image}
                alt={`${study.projectName} — ${study.result}`}
                className="w-full rounded-md object-contain"
                loading="lazy"
              />
            </button>

            <p className={`mt-5 text-xs ${c.accent} opacity-50`}>{study.duration}</p>
          </div>

          {/* Right: details */}
          <div className="flex flex-col gap-5 bg-white p-7">

            {/* Result badge */}
            <div className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${c.badge}`}>
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
              {study.result}
            </div>

            <h3 className="text-xl font-semibold text-neutral-950">{study.businessImpact}</h3>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">ความท้าทาย</p>
              <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">{study.card.challenge}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">สิ่งที่ดำเนินการ</p>
              <ul className="mt-2 grid gap-1.5">
                {study.card.actions.map((action) => (
                  <li key={action} className="thai-readable flex items-start gap-2 text-sm leading-6 text-neutral-700">
                    <span className={`mt-0.5 shrink-0 font-bold ${c.arrow}`} aria-hidden="true">→</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">ผลลัพธ์</p>
              <ul className="mt-2 grid gap-1.5">
                {study.card.results.map((result) => (
                  <li key={result} className="thai-readable flex items-start gap-2 text-sm leading-6 text-neutral-700">
                    <span className="mt-0.5 shrink-0 font-bold text-emerald-500" aria-hidden="true">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex items-center border-t border-neutral-100 pt-4 text-xs text-neutral-400">
              <span>{study.industry}</span>
            </div>
          </div>
        </div>
      </article>

      {/* Lightbox */}
      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-neutral-950/88 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={study.projectName}
          onClick={() => setOpen(false)}
        >
          <div className="relative max-h-[92vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-0 top-0 z-10 rounded-md border border-white/20 bg-white px-3 py-2 text-sm font-semibold text-neutral-950 shadow-sm"
            >
              ปิด
            </button>
            <div className="rounded-xl bg-white p-3 shadow-2xl shadow-neutral-950/40">
              <img
                src={study.image}
                alt={`${study.projectName} — ${study.result}`}
                className="max-h-[84vh] w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
