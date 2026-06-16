type ServiceCardProps = {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-800/60 hover:shadow-lg hover:shadow-teal-950/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
      <h3 className="break-words font-semibold text-white">{title}</h3>
      <p className="thai-readable mt-3 break-words text-sm leading-6 text-neutral-400">{description}</p>
      <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-500 transition-colors group-hover:text-teal-400">
        <span>ดูรายละเอียด</span>
        <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </article>
  )
}
