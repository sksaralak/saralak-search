import { trackLineClick } from './Analytics'
import { brand } from '../content/site'

export default function FloatingLineButton() {
  return (
    <div className="group fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Tooltip — desktop only, shown on hover */}
      <span
        className="pointer-events-none absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded-md bg-neutral-950 px-3 py-1.5 text-xs font-semibold text-white shadow-md sm:group-hover:block"
        role="tooltip"
      >
        ปรึกษา SEO / GEO / AEO
      </span>

      <a
        href={brand.lineUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackLineClick('floating_line')}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755] shadow-lg shadow-neutral-950/25 transition hover:scale-105 hover:bg-[#05b84f] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06C755] sm:h-[60px] sm:w-[60px]"
        aria-label="ปรึกษา SEO / GEO / AEO ผ่าน LINE"
      >
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
