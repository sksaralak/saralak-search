import CTAButton from './CTAButton'

type PricingCardProps = {
  title: string
  price: string
  detail: string
  badge?: string
  supportingText?: string
  sections?: {
    title: string
    items: string[]
  }[]
}

export default function PricingCard({
  title,
  price,
  detail,
  badge,
  supportingText,
  sections,
}: PricingCardProps) {
  return (
    <article className="rounded-lg border border-teal-100 bg-white p-6 shadow-sm shadow-neutral-950/5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="break-words text-lg font-semibold text-neutral-950">{title}</h3>
        {badge ? (
          <span className="shrink-0 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-900">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-3 break-words text-xl font-semibold text-teal-900 sm:text-2xl">{price}</p>
      {supportingText ? (
        <p className="mt-1 text-sm leading-6 text-neutral-600">{supportingText}</p>
      ) : null}
      <p className="mt-3 break-words leading-7 text-neutral-700">{detail}</p>
      {sections?.map((section) => (
        <div key={section.title} className="mt-5 border-t border-neutral-200 pt-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
            {section.title}
          </p>
          <div className="mt-3 grid gap-2">
            {section.items.map((item) => (
              <p key={item} className="break-words text-sm leading-6 text-neutral-700">
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-5">
        <CTAButton to="/contact">เริ่มปรึกษา</CTAButton>
      </div>
    </article>
  )
}
