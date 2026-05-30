import { brand } from '../content/site'

type ContactActionsProps = {
  align?: 'left' | 'center'
  className?: string
}

export default function ContactActions({ align = 'left', className = '' }: ContactActionsProps) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row ${
        align === 'center' ? 'justify-center' : ''
      } ${className}`}
    >
      <a
        href={brand.lineUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-md border border-teal-900 bg-teal-900 px-5 py-2.5 text-center text-sm font-semibold leading-6 text-white shadow-sm shadow-teal-950/10 transition hover:bg-teal-800"
      >
        {brand.primaryCta}
      </a>
      <a
        href={brand.phoneUrl}
        className="inline-flex min-h-11 items-center justify-center rounded-md border border-teal-200 bg-white px-5 py-2.5 text-center text-sm font-semibold leading-6 text-teal-950 shadow-sm shadow-teal-950/5 transition hover:bg-teal-50"
      >
        โทรปรึกษา
      </a>
    </div>
  )
}
