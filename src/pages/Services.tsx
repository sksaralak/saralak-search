import AnswerBlock from '../components/AnswerBlock'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import PricingCard from '../components/PricingCard'
import ProcessStep from '../components/ProcessStep'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { faqJsonLd, servicesFaqs } from '../content/faqs'
import { brand, packages } from '../content/site'

const searchChannels = [
  ['SEO', 'ติด Google Search'],
  ['AEO', 'ติด AI Overview'],
  ['GEO', 'ให้ ChatGPT, Gemini และ AI Search พูดถึงแบรนด์'],
  ['Google Maps', 'ให้ลูกค้าเจอธุรกิจจากการค้นหาในพื้นที่'],
]

const serviceCards = [
  {
    title: 'อยากติด Google มากขึ้น',
    description:
      'ปรับเว็บไซต์และคอนเทนต์ให้ลูกค้าค้นเจอธุรกิจมากขึ้นบน Google Search โดยเน้นคำค้นที่มีผลต่อยอดขายและลูกค้าใหม่',
  },
  {
    title: 'อยากติด AI Overview',
    description:
      'จัดโครงสร้างคำตอบ คำถาม และเนื้อหาให้ชัดเจนขึ้น เพื่อเพิ่มโอกาสถูกนำไปแสดงใน AI Overview และ Answer Engines',
  },
  {
    title: 'อยากให้ ChatGPT พูดถึงแบรนด์',
    description:
      'ทำให้ข้อมูลธุรกิจ สินค้า บริการ และความเชี่ยวชาญชัดเจนขึ้น เพื่อเพิ่มโอกาสถูกเข้าใจและอ้างอิงใน AI Search',
  },
  {
    title: 'อยากให้ลูกค้าเจอบน Google Maps',
    description:
      'ปรับ Google Business Profile และ Local Visibility เพื่อช่วยให้ลูกค้าในพื้นที่ค้นเจอ โทร ขอเส้นทาง และติดต่อธุรกิจได้ง่ายขึ้น',
  },
  {
    title: 'ต้องการ SEO Support สำหรับ Agency',
    description:
      'สนับสนุน Agency และทีมการตลาดด้วย SEO Audit, strategy, content direction, technical review และ Thailand search insight',
  },
  {
    title: 'ยังไม่แน่ใจว่าควรเริ่มจากอะไร',
    description:
      'เริ่มจาก Discovery Audit เพื่อดูว่าเว็บไซต์ควรลงทุนกับ Google Search, Google Maps หรือ AI Search ในส่วนใดก่อน',
  },
]

const resultHighlights = [
  '#5 → #1 Ranking',
  'ติด AI Overview',
  'ถูก ChatGPT แนะนำ',
  'Organic Visibility เติบโต',
]

const process = [
  ['01', 'Audit', 'ตรวจเว็บไซต์ ตลาด เนื้อหา และจุดที่ขวางการเติบโตจาก Search'],
  ['02', 'Prioritize', 'จัดลำดับงานที่ควรทำก่อนให้เหลือเป็น action list ที่ชัดเจน'],
  ['03', 'Execute', 'ช่วยทำหรือ guide งาน SEO, content, AI Search และ Local Search ตามเป้าหมาย'],
  ['04', 'Report', 'รายงานผลแบบอ่านง่าย พร้อม next actions ที่ทีมใช้ต่อได้'],
  ['05', 'Improve', 'ปรับแผนจากข้อมูล ranking, traffic, lead และบริบทธุรกิจจริง'],
]

export default function Services() {
  return (
    <main>
      <SEO
        title="บริการ SEO, Google Maps และ AI Search | Saralak Search"
        description="บริการเพิ่มการมองเห็น ลูกค้าใหม่ และยอดขายจาก Google, Google Maps และ AI Search สำหรับธุรกิจไทยและ Agency Partner"
        path="/services"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'ItemList',
              name: 'Saralak Search Services',
              itemListElement: serviceCards.map((service, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: service.title,
                description: service.description,
              })),
            },
            faqJsonLd(servicesFaqs),
          ],
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Services</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            เปลี่ยน Search ให้เป็นลูกค้าและยอดขาย
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            ช่วยให้ธุรกิจถูกค้นพบมากขึ้นบน Google, Google Maps และ AI Search
            พร้อมวางแผนการเติบโตจากข้อมูลการค้นหาจริง
            เพื่อเปลี่ยนการค้นหาให้เป็นลูกค้าและยอดขายที่วัดผลได้
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/discovery-audit">{brand.primaryCta}</CTAButton>
            <CTAButton to="/case-studies" variant="secondary">
              ดูตัวอย่างผลงาน
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {searchChannels.map(([label, text]) => (
              <article key={label} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
                  {label}
                </p>
                <p className="thai-readable mt-2 font-semibold leading-7 text-neutral-950">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnswerBlock title="เหมาะกับใคร">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            'ธุรกิจที่ต้องการลูกค้าใหม่จาก Google',
            'ธุรกิจที่ต้องการเพิ่มยอดขายจาก Search',
            'ธุรกิจที่ต้องการเริ่ม AI Search Visibility',
            'Agency ที่ต้องการ SEO Support เพิ่มเติม',
            'ธุรกิจที่ต้องการเพิ่มการมองเห็นบน Google Maps',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-0.5 font-semibold text-teal-700">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </AnswerBlock>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="บริการ"
            title="คุณต้องการผลลัพธ์แบบไหน?"
            description="เริ่มจากสิ่งที่ธุรกิจอยากเห็น ไม่ใช่จากศัพท์เทคนิค"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="ผลลัพธ์" title="ตัวอย่างผลลัพธ์" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resultHighlights.map((item) => (
            <article key={item} className="rounded-lg border border-neutral-200 bg-white p-5">
              <p className="text-xl font-semibold leading-tight text-neutral-950">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <CTAButton to="/case-studies" variant="secondary">
            ดู Case Studies ทั้งหมด
          </CTAButton>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="แพ็กเกจ" title="รูปแบบการทำงาน" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => (
              <PricingCard key={item.title} {...item} />
            ))}
          </div>
          <p className="thai-readable mt-6 max-w-3xl text-sm leading-7 text-neutral-600">
            ราคาข้างต้นเป็นเพียงแนวทางเบื้องต้น แต่ละธุรกิจมีเป้าหมาย การแข่งขัน
            และขอบเขตงานที่แตกต่างกัน สามารถปรึกษาเพื่อออกแบบแนวทางและงบประมาณให้เหมาะสมกับธุรกิจได้
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="ขั้นตอน" title="ขั้นตอนการทำงาน" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {process.map(([step, title, description]) => (
            <ProcessStep key={title} step={step} title={title} description={description} />
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <article className="rounded-lg border border-teal-100 bg-[#fbfaf6] p-6 shadow-sm shadow-neutral-950/5">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
              Agency Partner
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-neutral-950">
              SEO Support สำหรับ Agency และทีมการตลาด
            </h2>
            <p className="thai-readable mt-4 max-w-3xl leading-7 text-neutral-700">
              สำหรับ Agency, PR team, web team, content team หรือทีมการตลาดที่ต้องการคนช่วยดู
              SEO Audit, strategy, technical review, content direction และ Thailand search insight
              โดยไม่ต้องสร้างทีม SEO เพิ่มเอง
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CTAButton to="/contact">คุยเรื่อง Agency Support</CTAButton>
              <a
                href={brand.phoneUrl}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-teal-200 bg-white px-5 py-2.5 text-center text-sm font-semibold leading-6 text-teal-950 shadow-sm shadow-teal-950/5 transition hover:bg-teal-50"
              >
                โทรปรึกษา
              </a>
            </div>
          </article>
        </div>
      </section>

      <FAQSection faqs={servicesFaqs} />

      <section className="bg-teal-950 px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">
          ไม่แน่ใจว่าธุรกิจควรเริ่มจาก SEO, Google Maps หรือ AI Search?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-teal-50">
          เริ่มจาก Discovery Audit เพื่อดูว่าธุรกิจควรลงทุนกับ SEO, Google Maps หรือ AI Search
          ในส่วนใดก่อน
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton to="/contact" variant="secondary">
            ปรึกษา Saralak
          </CTAButton>
          <a
            href={brand.phoneUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-2.5 text-center text-sm font-semibold leading-6 text-white transition hover:bg-white/10"
          >
            โทรปรึกษา
          </a>
        </div>
      </section>
    </main>
  )
}
