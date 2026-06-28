import AnswerBlock from '../components/AnswerBlock'
import { trackLineClick } from '../components/Analytics'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import { contactFaqs, faqJsonLd } from '../content/faqs'
import { brand } from '../content/site'

const secondaryContacts = [
  { label: 'โทรศัพท์', value: brand.phone, href: brand.phoneUrl },
  { label: 'อีเมล', value: brand.email, href: `mailto:${brand.email}` },
  { label: 'LinkedIn', value: brand.linkedIn, href: `https://${brand.linkedIn}`, external: true },
]

export default function Contact() {
  return (
    <main>
      <SEO
        title="ติดต่อ Saralak Search | Discovery Audit และ SEO Consulting"
        description="ติดต่อ Saralak Search ผ่าน LINE สำหรับ Discovery Audit, Search Growth Retainer, SEO, Google Maps หรือ Monthly SEO Advisor"
        path="/contact"
        image="/image/og/saralak-search-homepage-og.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'ContactPage',
              '@id': 'https://saralak-search.com/contact#webpage',
              name: 'ติดต่อ Saralak Search',
              url: 'https://saralak-search.com/contact',
              isPartOf: { '@id': 'https://saralak-search.com/#organization' },
            },
            {
              '@type': 'Organization',
              '@id': 'https://saralak-search.com/#organization',
              name: brand.name,
              url: 'https://saralak-search.com',
              email: brand.email,
              telephone: brand.phone,
              contactPoint: {
                '@type': 'ContactPoint',
                email: brand.email,
                telephone: '+66622944999',
                contactType: 'customer service',
                availableLanguage: ['Thai', 'English'],
              },
            },
            faqJsonLd(contactFaqs),
          ],
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Contact</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            คุยเรื่อง Search Visibility ของเว็บไซต์คุณ
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            ยังไม่รู้ว่าปัญหาอยู่ที่ SEO, Google Maps หรือ AI Search? เริ่มจาก Discovery Audit —
            ส่ง URL เว็บไซต์มาและเล่าให้ฟังว่าธุรกิจทำอะไรและอยากได้อะไรจาก Search
          </p>
        </div>
      </section>

      <AnswerBlock>
        ส่ง URL เว็บไซต์หรือปัญหาที่เจอมาทาง LINE ได้เลย ตอบกลับภายใน 1–2 วันทำการ
      </AnswerBlock>

      {/* What to send */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">ส่งข้อมูลอะไรมาได้บ้าง</p>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'URL เว็บไซต์',
              'ประเภทธุรกิจ',
              'เป้าหมายหลัก เช่น lead, call, booking, AI visibility',
              'ปัญหาที่เจอในปัจจุบัน',
              'บริการที่สนใจ ถ้ามี',
              'งบประมาณคร่าวๆ ถ้าสะดวกแจ้ง',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700">
                <span className="mt-0.5 shrink-0 font-bold text-teal-500">→</span>
                <span className="thai-readable">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINE primary CTA */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">ช่องทางหลัก</p>
          <p className="mt-4 text-5xl font-bold tracking-tight text-neutral-950">{brand.line}</p>
          <p className="thai-readable mt-3 text-base text-neutral-600">
            ส่ง URL เว็บไซต์ + ปัญหาที่เจอมาได้เลย ไม่ต้องรอนัด
          </p>
          <a
            href={brand.lineUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackLineClick('contact_line_primary')}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[#06C755] px-8 py-3 text-base font-semibold text-white shadow-md shadow-green-900/20 transition hover:bg-[#05b34c]"
          >
            เพิ่มเพื่อน LINE
          </a>
          <p className="mt-4 text-sm text-neutral-400">ตอบกลับภายใน 1–2 วันทำการ</p>
        </div>
      </section>

      {/* Secondary contacts */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">ช่องทางอื่น</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {secondaryContacts.map(({ label, value, href, external }) => (
            <article key={label} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">{label}</h2>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="mt-2 inline-block break-words text-teal-900 hover:text-teal-700"
              >
                {value}
              </a>
            </article>
          ))}
        </div>
      </section>

      <FAQSection faqs={contactFaqs} />
    </main>
  )
}
