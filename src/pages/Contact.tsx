import AnswerBlock from '../components/AnswerBlock'
import { trackLineClick } from '../components/Analytics'
import ContactActions from '../components/ContactActions'
import ContactForm from '../components/ContactForm'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { contactFaqs } from '../content/faqs'
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
        description="ติดต่อ Saralak Search ผ่าน LINE หรือ Email สำหรับ Discovery Audit, Increase Visibility on Google & AI Search, Monthly SEO Advisor หรือ recruiter conversations"
        path="/contact"
        image="/image/og/saralak-search-homepage-og.png"
        jsonLd={undefined}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Contact</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            คุยเรื่อง Search Visibility ของเว็บไซต์คุณ
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            ติดต่อเพื่อขอ Discovery Audit, Increase Visibility on Google & AI Search, Monthly SEO Advisor
            หรือ recruiter conversation ได้จากหน้านี้
          </p>
          <p className="thai-readable mt-4 max-w-3xl text-base text-neutral-700">
            ส่ง URL เว็บไซต์ หรือเล่าปัญหา SEO ที่เจออยู่ตอนนี้มาก่อนได้เลย หากต้องการคำตอบเร็ว
            แนะนำให้ติดต่อผ่าน LINE หรืออีเมลก่อน
          </p>
        </div>
      </section>

      <AnswerBlock>
        หากต้องการเริ่มปรับ SEO หรือยังไม่แน่ใจว่าเว็บไซต์ควรแก้จุดไหน สามารถส่งเว็บไซต์หรือปัญหาที่เจอมาเพื่อประเมินเบื้องต้นผ่าน LINE หรืออีเมลได้
      </AnswerBlock>

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
            <p className="mt-6 leading-7 text-neutral-700">
              หากต้องการคำตอบเร็ว แนะนำให้ติดต่อผ่าน LINE หรืออีเมลก่อน โดยปกติตอบกลับภายใน
              1-2 business days
            </p>
            <p className="thai-readable mt-3 text-neutral-700">
              หากต้องการคำตอบเร็ว แนะนำให้ติดต่อผ่าน LINE หรืออีเมลก่อน
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <FAQSection faqs={contactFaqs} />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-neutral-950 md:text-4xl">
          พร้อมส่งเว็บไซต์มาให้ประเมินเบื้องต้น?
        </h2>
        <p className="mt-4 text-lg leading-8 text-neutral-700">
          ส่ง URL เว็บไซต์หรือปัญหา SEO ที่เจอผ่าน LINE เพื่อเริ่มดูโอกาสในการเพิ่มการมองเห็นเว็บไซต์
        </p>
        <ContactActions align="center" className="mt-8" lineSource="contact_section" />
      </section>
    </main>
  )
}
