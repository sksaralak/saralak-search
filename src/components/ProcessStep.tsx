type ProcessStepProps = {
  step: string
  title: string
  description: string
}

export default function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white p-5">
      <p className="text-sm font-semibold text-teal-800">{step}</p>
      <h3 className="mt-2 text-lg font-semibold text-neutral-950">{title}</h3>
      <p className="mt-2 leading-7 text-neutral-700">{description}</p>
    </article>
  )
}
