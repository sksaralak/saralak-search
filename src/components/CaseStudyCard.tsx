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
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm shadow-neutral-950/5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full bg-neutral-100 p-3 text-left transition hover:bg-neutral-200/70"
          aria-label={`ขยายรูป ${study.projectName}`}
        >
          <span className="flex aspect-[16/10] items-center justify-center rounded-md border border-neutral-200 bg-white p-2">
            <img
              src={study.image}
              alt={study.projectName}
              className="max-h-full max-w-full rounded-sm object-contain"
              loading="lazy"
            />
          </span>
        </button>

        <div className="flex flex-1 flex-col p-6">
          <p className="inline-flex w-fit rounded-md border border-teal-200 bg-teal-50 px-3 py-1.5 text-sm font-semibold text-teal-950">
            Result: {study.result}
          </p>
          <h3 className="mt-4 text-xl font-semibold text-neutral-950">{study.projectName}</h3>
          <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">
            {study.description}
          </p>

          <dl className="mt-5 grid gap-3 border-y border-neutral-100 py-4 text-sm leading-6 text-neutral-600 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">Industry</dt>
              <dd className="mt-1">{study.industry}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">Service</dt>
              <dd className="mt-1">{study.service}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">Channel</dt>
              <dd className="mt-1">{study.channel}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">Duration</dt>
              <dd className="mt-1">{study.duration}</dd>
            </div>
          </dl>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
              Challenge
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-700">{study.card.challenge}</p>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
              Approach
            </p>
            <ul className="mt-2 grid gap-2 text-sm leading-6 text-neutral-700">
              {study.card.approach.map((item) => (
                <li key={item} className="rounded-md bg-[#fbfaf6] px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">Outcome</p>
            <p className="mt-2 text-sm leading-6 text-neutral-700">{study.card.outcome}</p>
          </div>

        </div>
      </article>

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
                alt={study.projectName}
                className="max-h-[84vh] w-full rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
