import type { ReactNode } from 'react'

type AnswerBlockProps = {
  title?: string
  children: ReactNode
}

export default function AnswerBlock({ title = 'สรุปสั้น ๆ', children }: AnswerBlockProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-teal-100 bg-white p-5 shadow-sm shadow-neutral-950/5">
        <h2 className="text-lg font-semibold text-neutral-950">{title}</h2>
        <div className="thai-readable mt-2 text-neutral-700">{children}</div>
      </div>
    </section>
  )
}
