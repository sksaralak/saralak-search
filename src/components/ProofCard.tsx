import { useEffect, useState } from 'react'

type ProofCardProps = {
  title: string
  caption: string
  metric: string
  image: string
}

export default function ProofCard({ title, caption, metric, image }: ProofCardProps) {
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
      <article className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm shadow-neutral-950/5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full bg-neutral-100 p-3 text-left transition hover:bg-neutral-200/70"
          aria-label={`ขยายรูป ${title}`}
        >
          <span className="flex aspect-[16/10] items-center justify-center rounded-md border border-neutral-200 bg-white p-2">
            <img
              src={image}
              alt={title}
              className="max-h-full max-w-full rounded-sm object-contain"
              loading="lazy"
            />
          </span>
        </button>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">{metric}</p>
          <h3 className="mt-2 font-semibold text-neutral-950">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-700">{caption}</p>
        </div>
      </article>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-neutral-950/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
        >
          <div className="relative max-h-[92vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-0 top-0 z-10 rounded-md border border-white/20 bg-white px-3 py-2 text-sm font-semibold text-neutral-950 shadow-sm"
            >
              ปิด
            </button>
            <div className="rounded-lg bg-white p-3 shadow-2xl shadow-neutral-950/30">
              <img
                src={image}
                alt={title}
                className="max-h-[84vh] w-full rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
