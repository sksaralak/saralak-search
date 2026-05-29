import { brand } from '../content/site'

export default function FloatingLineButton() {
  return (
    <a
      href={brand.lineUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex min-h-11 items-center justify-center rounded-full border border-teal-800 bg-teal-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition hover:bg-teal-800 sm:bottom-6 sm:right-6"
      aria-label="ทัก LINE"
    >
      ทัก LINE
    </a>
  )
}
