import CTAButton from './CTAButton'

type PricingCardProps = {
  title: string
  price: string
  detail: string
}

export default function PricingCard({ title, price, detail }: PricingCardProps) {
  return (
    <article className="rounded-lg border border-teal-100 bg-white p-6 shadow-sm shadow-neutral-950/5">
      <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>
      <p className="mt-3 text-2xl font-semibold text-teal-900">{price}</p>
      <p className="mt-3 leading-7 text-neutral-700">{detail}</p>
      <div className="mt-5">
        <CTAButton to="/contact">เริ่มปรึกษา</CTAButton>
      </div>
    </article>
  )
}
