import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import ProofCard from '../components/ProofCard'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { faqJsonLd, servicesFaqs } from '../content/faqs'

const commonProblems = [
  { setup: 'เว็บไซต์ติดอันดับแล้ว', pain: 'แต่ลูกค้าไม่ติดต่อ' },
  { setup: 'AI ตอบคำถาม', pain: 'แต่ไม่พูดถึงแบรนด์' },
  { setup: 'Google Maps มีอยู่', pain: 'แต่คนไม่เจอ' },
  { setup: 'ทำ SEO มาหลายเดือน', pain: 'แต่ยอดขายไม่โต' },
]

const journey = [
  {
    step: '01',
    title: 'Discovery Audit',
    description: 'วิเคราะห์สถานะการมองเห็นของแบรนด์',
  },
  {
    step: '02',
    title: 'Growth Roadmap',
    description: 'กำหนดลำดับความสำคัญและแผนงาน',
  },
  {
    step: '03',
    title: 'Increase Visibility',
    description: 'พัฒนาและเพิ่มการมองเห็นอย่างต่อเนื่อง',
  },
  {
    step: '04',
    title: 'Long-Term Growth',
    description: 'สร้างการเติบโตระยะยาว',
  },
]

const businessOutcomes = [
  'รู้ว่าอะไรคือปัญหาที่แท้จริง',
  'รู้ว่าควรแก้อะไรก่อนหลัง',
  'เข้าใจว่า Google และ AI มองเว็บไซต์อย่างไร',
  'ได้ Roadmap ที่นำไปใช้งานได้จริง',
  'มีผู้เชี่ยวชาญช่วยวางแผนการเติบโต',
]

type ServiceCard = {
  title: string
  tagline: string
  price: string
  fit: string
  outcomes: string[]
  cta: { label: string; to: string }
}

const serviceCards: ServiceCard[] = [
  {
    title: 'Discovery Audit',
    tagline: 'ค้นหาสิ่งที่กำลังขวางการเติบโตของเว็บไซต์',
    price: 'Starting from 5,000 THB',
    fit: 'ธุรกิจที่ยังไม่รู้ว่าปัญหาอยู่ตรงไหน',
    outcomes: ['Audit Report', 'Prioritized Roadmap', 'Quick Wins', 'Strategic Recommendations'],
    cta: { label: 'เริ่มต้นด้วย Discovery Audit', to: '/discovery-audit' },
  },
  {
    title: 'Increase Visibility on Google & AI Search',
    tagline: 'เพิ่มโอกาสให้ลูกค้าเจอแบรนด์ผ่าน Google และ AI',
    price: 'Starting from 25,000 THB/month',
    fit: 'SME, B2B, E-commerce และธุรกิจที่ต้องการลูกค้าใหม่จากการค้นหา',
    outcomes: [
      'เพิ่มการมองเห็นบน Google Search',
      'เพิ่มการมองเห็นใน AI Overview และ ChatGPT',
      'พัฒนาเนื้อหาและความน่าเชื่อถือ',
      'สร้างการเติบโตระยะยาว',
    ],
    cta: { label: 'ขอแผนเพิ่มการมองเห็น', to: '/contact' },
  },
  {
    title: 'Increase Visibility on Google Maps',
    tagline: 'เพิ่มการมองเห็นสำหรับธุรกิจที่มีหน้าร้าน',
    price: 'Starting from 6,000 THB/location/month',
    fit: 'คลินิก ร้านอาหาร โรงแรม ร้านค้า และธุรกิจที่มีหน้าร้าน',
    outcomes: [
      'เพิ่มสายโทรเข้า',
      'เพิ่มคำขอเส้นทาง',
      'เพิ่มลูกค้าเข้าหน้าร้าน',
      'เพิ่มการมองเห็นในพื้นที่',
    ],
    cta: { label: 'ขอแผน Local Growth', to: '/contact' },
  },
  {
    title: 'Monthly SEO Advisor',
    tagline: 'ที่ปรึกษา SEO สำหรับทีมการตลาดและผู้บริหาร',
    price: 'Custom Pricing',
    fit: 'Marketing Agency, In-house Team และ SEO Consultant ที่ต้องการผู้เชี่ยวชาญ',
    outcomes: [
      'White-label SEO & GEO Support',
      'Technical Consultation',
      'Thailand Market Expertise',
      'Strategy & Reporting Support',
    ],
    cta: { label: 'นัดพูดคุยเบื้องต้น', to: '/contact' },
  },
]

const decisionGuide = [
  {
    condition: 'ยังไม่รู้ว่าปัญหาอยู่ตรงไหน',
    service: 'Discovery Audit',
    to: '/discovery-audit',
  },
  {
    condition: 'ต้องการเพิ่มการมองเห็นและการเติบโต',
    service: 'Increase Visibility on Google & AI Search',
    to: '/contact',
  },
  {
    condition: 'ต้องการลูกค้าในพื้นที่มากขึ้น',
    service: 'Increase Visibility on Google Maps',
    to: '/contact',
  },
  {
    condition: 'ต้องการผู้เชี่ยวชาญสนับสนุนทีม',
    service: 'Monthly SEO Advisor',
    to: '/contact',
  },
]

const trustPoints = [
  'ประสบการณ์ด้าน SEO ตั้งแต่ปี 2016',
  'เคยดูแลเว็บไซต์ในหลายอุตสาหกรรม',
  'เชี่ยวชาญ Google Search, AI Search และ Google Maps',
  'เน้นผลลัพธ์ทางธุรกิจ ไม่ใช่เพียง Traffic',
  'ทำงานร่วมกับผู้เชี่ยวชาญโดยตรง',
]

const proofCards = [
  {
    title: 'เพิ่ม Organic Traffic ผ่าน Product Listing Page',
    caption:
      'ปรับโครงสร้าง Product Listing Page, Internal Linking และ Search Intent Alignment เพื่อเพิ่มการเติบโตของ Organic Traffic อย่างต่อเนื่อง',
    metric: 'Organic Traffic Growth',
    image: '/proof/gsc-product-listing-growth.png',
    cta: { label: 'ดู Case Study', to: '/case-studies' },
  },
  {
    title: 'เพิ่มโอกาสให้แบรนด์ถูกพูดถึงใน AI Search',
    caption:
      'วางโครงสร้างเนื้อหาและความน่าเชื่อถือของเว็บไซต์เพื่อเพิ่มโอกาสให้ AI Search นำข้อมูลไปใช้อ้างอิง',
    metric: 'GEO & AI Search Visibility',
    image: '/proof/chatgpt-product-recommendation.png',
    cta: { label: 'ดูแนวทาง GEO', to: '/blog/what-is-geo' },
  },
  {
    title: 'เพิ่มโอกาสปรากฏใน AI Overview',
    caption:
      'ปรับปรุงเนื้อหาและ Search Visibility เพื่อให้ AI เข้าใจเว็บไซต์และนำข้อมูลไปใช้อ้างอิงได้ง่ายขึ้น',
    metric: 'AI Overview Visibility',
    image: '/proof/google-ai-overview-visibility.png',
    cta: { label: 'ดูแนวทาง AEO', to: '/blog/aeo-vs-seo' },
  },
  {
    title: 'ผลักดันคีย์เวิร์ดการแข่งขันสูงขึ้นหน้าแรก',
    caption:
      'วิเคราะห์ Search Intent และปรับหน้า Landing Page ให้ตอบโจทย์ผู้ค้นหาและสร้างโอกาสในการติดอันดับ',
    metric: 'Keyword Ranking Improvement',
    image: '/proof/ranking-bangsaen-serp.png',
    cta: { label: 'ดู Case Study', to: '/case-studies' },
  },
]

export default function Services() {
  return (
    <main>
      <SEO
        title="เพิ่มการมองเห็นให้แบรนด์บน Google, ChatGPT, Gemini และ Google Maps | Saralak Search"
        description="เพิ่มการมองเห็นให้แบรนด์ผ่าน Google Search, ChatGPT, Gemini, AI Overview และ Google Maps พร้อมบริการ Discovery Audit, SEO, GEO และ AEO เพื่อช่วยให้ธุรกิจเข้าถึงลูกค้าได้มากขึ้น"
        path="/services"
        image="/image/og/saralak-search-service-og.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'ItemList',
              name: 'Saralak Search Brand Visibility Services',
              itemListElement: serviceCards.map((service, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: service.title,
                description: service.tagline,
              })),
            },
            faqJsonLd(servicesFaqs),
          ],
        }}
      />

      {/* Section 1: Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Services</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            เพิ่มการมองเห็นของแบรนด์
            <br className="hidden sm:block" />
            บน Google และ AI Search
          </h1>
          <p className="thai-readable mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            ลูกค้าไม่ได้ค้นหาธุรกิจผ่าน Google เพียงอย่างเดียวอีกต่อไป วันนี้พวกเขาค้นหาผ่าน
            Google Search, AI Overview, ChatGPT, Gemini, Perplexity และ Google Maps
            ก่อนตัดสินใจเลือกสินค้าและบริการ
          </p>
          <p className="thai-readable mt-4 max-w-3xl leading-8 text-neutral-700">
            Saralak Search ช่วยให้ธุรกิจเข้าใจสถานะการมองเห็นของแบรนด์ ค้นหาโอกาสในการเติบโต
            และเพิ่มการค้นพบจาก Google และ AI Search อย่างเป็นระบบ
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/discovery-audit">เริ่มต้นด้วย Discovery Audit</CTAButton>
            <CTAButton to="/case-studies" variant="secondary">
              ดูตัวอย่างผลงาน
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Section 2: Common Problems (P3 — problem-focused, replaces feature channels) */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-teal-800">
            ปัญหาที่พบบ่อย
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {commonProblems.map(({ setup, pain }) => (
              <article
                key={setup}
                className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5"
              >
                <p className="text-sm font-medium text-neutral-500">{setup}</p>
                <p className="thai-readable mt-1 font-semibold leading-7 text-neutral-950">{pain}</p>
              </article>
            ))}
          </div>
          <p className="thai-readable mt-6 max-w-2xl leading-7 text-neutral-600">
            หากคุณกำลังเจอหนึ่งในปัญหาเหล่านี้ Saralak Search
            สามารถช่วยวิเคราะห์และวางแผนแนวทางที่เหมาะสมกับธุรกิจของคุณ
          </p>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="ขั้นตอน" title="จากการวิเคราะห์สู่การเติบโตระยะยาว" />
        <div className="mt-10">
          {/* Mobile: vertical flow */}
          <div className="lg:hidden">
            {journey.map((item, index) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-900 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  {index < journey.length - 1 && (
                    <div className="mt-1 h-10 w-px bg-teal-300" />
                  )}
                </div>
                <div className="pb-5">
                  <h3 className="font-semibold text-neutral-950">{item.title}</h3>
                  <p className="thai-readable mt-1 text-sm leading-6 text-neutral-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop: horizontal flow */}
          <div
            className="hidden lg:grid items-start"
            style={{ gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr' }}
          >
            {journey.map((item, index) => (
              <Fragment key={item.step}>
                <div className="px-4 text-center">
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-900 text-base font-bold text-white">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="mt-4 font-semibold text-neutral-950">{item.title}</h3>
                  <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">
                    {item.description}
                  </p>
                </div>
                {index < journey.length - 1 && (
                  <div
                    className="flex items-center justify-center px-1 pt-6 text-2xl text-teal-400"
                    aria-hidden="true"
                  >
                    →
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Business Outcomes (P4 — NEW: value before service menu) */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ผลลัพธ์"
            title="สิ่งที่คุณจะได้รับ"
            description="ไม่ว่าคุณจะเลือกบริการใด นี่คือสิ่งที่คุณจะได้รับจากการทำงานร่วมกัน"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {businessOutcomes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-0.5 shrink-0 font-bold text-teal-700"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="thai-readable text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5: Choose the Right Service (P1+P2+P7 — renamed, simplified, 2×2 grid) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="บริการ"
          title="เลือกบริการที่เหมาะกับคุณ"
          description="แต่ละบริการออกแบบมาเพื่อวัตถุประสงค์ที่แตกต่างกัน เลือกตามเป้าหมายของธุรกิจ"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-lg border border-teal-100 bg-white p-6 shadow-sm shadow-neutral-950/5"
            >
              <h3 className="break-words text-xl font-semibold text-neutral-950">{card.title}</h3>
              <p className="thai-readable mt-1 text-sm text-neutral-600">{card.tagline}</p>
              <p className="mt-3 text-xl font-semibold text-teal-900">{card.price}</p>

              <div className="mt-5 border-t border-neutral-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
                  เหมาะสำหรับ
                </p>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">{card.fit}</p>
              </div>

              <div className="mt-5 border-t border-neutral-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
                  สิ่งที่ได้รับ
                </p>
                <ul className="mt-3 grid gap-1.5">
                  {card.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="mt-0.5 text-teal-500" aria-hidden="true">
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <CTAButton to={card.cta.to} className="w-full">
                  {card.cta.label}
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 6: Decision Guide */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ไม่แน่ใจ?" title="เลือกบริการจากสิ่งที่ต้องการ" />
          <div className="mt-8 grid max-w-2xl gap-3">
            {decisionGuide.map(({ condition, service, to }) => (
              <div
                key={condition}
                className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5 sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="thai-readable flex-1 text-neutral-700">{condition}</span>
                <span
                  className="hidden shrink-0 text-lg text-teal-400 sm:block"
                  aria-hidden="true"
                >
                  →
                </span>
                <Link to={to} className="shrink-0 font-semibold text-teal-900 hover:underline">
                  {service}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Trust / Credibility (P5 — strengthened, trust-focused) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ทำไม Saralak Search"
          title="ทำไมธุรกิจเลือก Saralak Search"
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 font-bold text-teal-700" aria-hidden="true">
                ✓
              </span>
              <span className="thai-readable text-neutral-700">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 8: Social Proof (P2 — real work examples, before FAQ) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ผลงาน"
          title="ผลลัพธ์จากประสบการณ์ที่ผ่านมา"
          description="ตัวอย่างแนวทางและผลลัพธ์จากประสบการณ์ด้าน SEO, GEO และการเพิ่มการมองเห็นบน Search Platform"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {proofCards.map((card) => (
            <div key={card.title} className="flex flex-col gap-3">
              <ProofCard
                title={card.title}
                caption={card.caption}
                metric={card.metric}
                image={card.image}
              />
              <CTAButton to={card.cta.to} variant="secondary">
                {card.cta.label}
              </CTAButton>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: FAQ */}
      <FAQSection faqs={servicesFaqs} />

      {/* Section 10: Final CTA */}
      <section className="bg-teal-950 px-4 pb-28 pt-16 text-center text-white sm:px-6 lg:px-8 lg:pb-16">
        <h2 className="text-3xl font-semibold md:text-4xl">
          เว็บไซต์ของคุณมีโอกาสถูก AI พูดถึงหรือยัง?
        </h2>
        <p className="thai-readable mx-auto mt-4 max-w-xl text-lg leading-8 text-teal-50">
          รับ Discovery Audit เพื่อดูว่า
        </p>
        <ul className="mx-auto mt-4 max-w-sm space-y-2 text-left text-teal-100">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-teal-400" aria-hidden="true">→</span>
            <span className="thai-readable">Google มองเว็บไซต์อย่างไร</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-teal-400" aria-hidden="true">→</span>
            <span className="thai-readable">AI มองแบรนด์อย่างไร</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-teal-400" aria-hidden="true">→</span>
            <span className="thai-readable">อะไรคือโอกาสที่ควรทำก่อน</span>
          </li>
        </ul>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton to="/discovery-audit" variant="secondary">
            เริ่มต้นด้วย Discovery Audit
          </CTAButton>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-2.5 text-center text-sm font-semibold leading-6 text-white transition hover:bg-white/10"
          >
            พูดคุยกับเรา
          </Link>
        </div>
      </section>
    </main>
  )
}
