import { useEffect, useState } from 'react'
import type { CaseStudy } from '../content/caseStudies'

type CaseStudyCardProps = {
  study: CaseStudy
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <article className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm shadow-neutral-950/5">
        <div className="flex flex-col lg:flex-row">

          {/* Image panel — click to open lightbox */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="block w-full bg-neutral-100 p-3 text-left transition hover:bg-neutral-200/70 lg:w-72 lg:shrink-0"
            aria-label={`ดูรูปหลักฐาน: ${study.projectName} — ${study.result}`}
          >
            <span className="flex aspect-[4/3] items-center justify-center rounded-md border border-neutral-200 bg-white p-2 lg:aspect-auto lg:min-h-[260px]">
              <img
                src={study.image}
                alt={`${study.projectName} — ${study.result}`}
                className="max-h-full max-w-full rounded-sm object-contain"
                loading="lazy"
              />
            </span>
          </button>

          {/* Content panel — all fields visible, no clicks required */}
          <div className="flex flex-col gap-4 p-6 lg:p-8">

            {/* Result tag */}
            <p className="inline-flex w-fit rounded-md border border-teal-200 bg-teal-50 px-3 py-1.5 text-sm font-semibold text-teal-950">
              {study.result}
            </p>

            {/* Title */}
            <h3 className="text-xl font-semibold text-neutral-950">{study.projectName}</h3>

            {/* Challenge */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
                ความท้าทาย
              </p>
              <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">
                {study.card.challenge}
              </p>
            </div>

            {/* Actions Taken */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
                สิ่งที่ดำเนินการ
              </p>
              <ul className="mt-2 grid gap-1.5">
                {study.card.actions.map((item) => (
                  <li
                    key={item}
                    className="thai-readable flex items-start gap-2 text-sm leading-6 text-neutral-700"
                  >
                    <span className="mt-0.5 shrink-0 text-teal-500" aria-hidden="true">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
                ผลลัพธ์
              </p>
              <ul className="mt-2 grid gap-1.5">
                {study.card.results.map((item) => (
                  <li
                    key={item}
                    className="thai-readable flex items-start gap-2 text-sm leading-6 text-neutral-700"
                  >
                    <span className="mt-0.5 shrink-0 font-bold text-teal-600" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service + Duration */}
            <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
              <span className="rounded bg-neutral-100 px-2 py-0.5 font-medium">
                {study.service}
              </span>
              <span aria-hidden="true">·</span>
              <span>{study.duration}</span>
            </div>

          </div>
        </div>
      </article>

      {/* Lightbox */}
      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-neutral-950/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={study.projectName}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-0 top-0 z-10 rounded-md border border-white/20 bg-white px-3 py-2 text-sm font-semibold text-neutral-950 shadow-sm"
            >
              ปิด
            </button>
            <div className="rounded-lg bg-white p-3 shadow-2xl shadow-neutral-950/30">
              <img
                src={study.image}
                alt={`${study.projectName} — ${study.result}`}
                className="max-h-[84vh] w-full rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
