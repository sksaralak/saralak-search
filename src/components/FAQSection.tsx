import type { FAQItem } from '../content/faqs'
import SectionHeader from './SectionHeader'

type FAQSectionProps = {
  faqs: FAQItem[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="คำถามที่พบบ่อย" />
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-neutral-950">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {item.question}
                  <span className="text-xl leading-none text-teal-800 group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="thai-readable mt-3 text-neutral-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
