type ServiceCardProps = {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-950/5">
      <h3 className="break-words text-xl font-semibold text-neutral-950">{title}</h3>
      <p className="mt-3 break-words leading-7 text-neutral-700">{description}</p>
    </article>
  )
}
