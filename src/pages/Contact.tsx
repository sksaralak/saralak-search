import AnswerBlock from '../components/AnswerBlock'
import { trackLineClick } from '../components/Analytics'
import ContactActions from '../components/ContactActions'
import ContactForm from '../components/ContactForm'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { contactFaqs, faqJsonLd } from '../content/faqs'
import { brand } from '../content/site'

const contactOptions = [
  ['LINE', brand.line, brand.lineUrl],
  ['Phone', brand.phone, brand.phoneUrl],
  ['Email', brand.email, `mailto:${brand.email}`],
  ['LinkedIn', brand.linkedIn, `https://${brand.linkedIn}`],
]

export default function Contact() {
  return (
    <main>
      <SEO
        title="ติดต่อ Saralak Search | Discovery Audit และ SEO Consulting"
        description="ติดต่อ Saralak Search ผ่าน LINE หรือ Email สำหรับ Discovery Audit, Search Growth Retainer, SEO, Google Maps หรือ Monthly SEO Advisor"
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
          <p className="thai-readable mt-4 max-w-3xl text-base text-neutral-700">
            หากต้องการคำตอบเร็ว แนะนำให้ติดต่อผ่าน LINE หรืออีเมลก่อน โดยปกติตอบกลับภายใน 1–2 วันทำการ
          </p>
        </div>
      </section>

      <AnswerBlock>
        หากต้องการเริ่มปรับ SEO หรือยังไม่แน่ใจว่าเว็บไซต์ควรแก้จุดไหน สามารถส่งเว็บไซต์หรือปัญหาที่เจอมาเพื่อประเมินเบื้องต้นผ่าน LINE หรืออีเมลได้
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

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeader eyebrow="Contact options" title="ช่องทางติดต่อหลัก" />
            <div className="mt-8 grid gap-4">
              {contactOptions.map(([label, value, href]) => (
                <article key={label} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
                  <h2 className="text-lg font-semibold text-neutral-950">{label}</h2>
                  <a
                    href={href}
                    target={label === 'Email' || label === 'Phone' ? undefined : '_blank'}
                    rel={label === 'Email' || label === 'Phone' ? undefined : 'noreferrer'}
                    onClick={label === 'LINE' ? () => trackLineClick('contact_section') : undefined}
                    className="mt-2 inline-block break-words text-teal-900 hover:text-teal-700"
                  >
                    {value}
                  </a>
                </article>
              ))}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <FAQSection faqs={contactFaqs} />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-neutral-950 md:text-4xl">
          ยังไม่แน่ใจว่าควรเริ่มจากอะไร?
        </h2>
        <p className="mt-4 text-lg leading-8 text-neutral-700">
          ส่ง URL เว็บไซต์ผ่าน LINE หรือ Email — Discovery Audit ช่วยตรวจว่า Google, Google Maps
          และ AI Search มองเห็นแบรนด์ของคุณอย่างไรก่อนเริ่ม service ใดก็ตาม
        </p>
        <ContactActions align="center" className="mt-8" lineSource="contact_section" />
      </section>
    </main>
  )
}
