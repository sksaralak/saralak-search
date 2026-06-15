import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import ProofCard from '../components/ProofCard'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { servicesFaqs } from '../content/faqs'

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

const monitorPlatforms = [
  { name: 'Google Search', status: 'ok'      as const, label: 'Indexed & Ranking' },
  { name: 'AI Overview',   status: 'partial' as const, label: 'Partial Visibility' },
  { name: 'ChatGPT',       status: 'miss'    as const, label: 'Not Found' },
  { name: 'Gemini',        status: 'miss'    as const, label: 'Not Found' },
  { name: 'Perplexity',    status: 'partial' as const, label: 'Partial Visibility' },
]

const monitorDot: Record<typeof monitorPlatforms[number]['status'], string> = {
  ok:      'bg-emerald-400 animate-pulse-dot',
  partial: 'bg-amber-400 animate-pulse-dot',
  miss:    'bg-red-500',
}

const monitorText: Record<typeof monitorPlatforms[number]['status'], string> = {
  ok:      'text-emerald-400',
  partial: 'text-amber-400',
  miss:    'text-red-400',
}

function AiBrandMonitor() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl shadow-neutral-950/50">
      <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 font-mono text-xs text-neutral-600">brand-visibility-scan.sh</span>
      </div>
      <div className="p-6">
        <p className="font-mono text-xs text-neutral-600">$ scanning "your-brand" across AI platforms...</p>
        <div className="mt-5 grid gap-3">
          {monitorPlatforms.map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <span className={`h-2 w-2 shrink-0 rounded-full ${monitorDot[p.status]}`} />
              <span className="flex-1 font-mono text-xs text-neutral-400">{p.name}</span>
              <span className={`font-mono text-xs font-semibold ${monitorText[p.status]}`}>{p.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-neutral-800 pt-5">
          <p className="font-mono text-xs text-neutral-600">Result: 3 platforms have visibility gaps</p>
          <p className="mt-2 font-mono text-xs text-teal-400">→ Discovery Audit แก้ได้ภายใน 1 สัปดาห์</p>
        </div>
      </div>
    </div>
  )
}

const cardColors = [
  { bar: 'bg-teal-500',   iconBg: 'bg-teal-50',   iconText: 'text-teal-600',   glow: 'hover:shadow-teal-100/50'   },
  { bar: 'bg-sky-500',    iconBg: 'bg-sky-50',    iconText: 'text-sky-600',    glow: 'hover:shadow-sky-100/50'    },
  { bar: 'bg-violet-500', iconBg: 'bg-violet-50', iconText: 'text-violet-600', glow: 'hover:shadow-violet-100/50' },
]

function CardIcon({ index }: { index: number }) {
  if (index === 0) return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
  if (index === 1) return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  )
}

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
    cta: { label: 'SEO, AEO และ GEO ต่างกันอย่างไร', to: '/blog/seo-geo-aeo' },
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
          ],
        }}
      />

      {/* Section 1: Hero */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-teal-400">Services</p>
              <h1 className="break-words text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
                เพิ่มการมองเห็นของแบรนด์
                <br className="hidden sm:block" />
                <span className="animate-gradient-text">บน Google และ AI Search</span>
              </h1>
              <p className="thai-readable mt-6 text-lg leading-8 text-neutral-300">
                ลูกค้าไม่ได้ค้นหาธุรกิจผ่าน Google เพียงอย่างเดียวอีกต่อไป วันนี้พวกเขาค้นหาผ่าน
                Google Search, AI Overview, ChatGPT, Gemini, Perplexity และ Google Maps
                ก่อนตัดสินใจเลือกสินค้าและบริการ
              </p>
              <p className="thai-readable mt-4 text-sm leading-7 text-neutral-500">
                อ่านเพิ่มเติม:{' '}
                <Link to="/blog/what-is-seo" className="text-teal-400 hover:underline">SEO คืออะไร</Link>
                {' · '}
                <Link to="/blog/what-is-aeo" className="text-teal-400 hover:underline">AEO คืออะไร</Link>
                {' · '}
                <Link to="/blog/what-is-geo" className="text-teal-400 hover:underline">GEO คืออะไร</Link>
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton to="/discovery-audit">เริ่มต้นด้วย Discovery Audit</CTAButton>
                <CTAButton to="/case-studies" variant="secondary">
                  ดูตัวอย่างผลงาน
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-teal-500/10 blur-2xl" />
              <div className="relative">
                <AiBrandMonitor />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Common Problems */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="mb-8 text-sm font-semibold uppercase tracking-wide text-teal-800">
            ปัญหาที่พบบ่อย
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {commonProblems.map(({ setup, pain }) => (
              <article key={setup} className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
                <div className="border-b border-neutral-100 bg-neutral-50 px-5 py-4">
                  <p className="flex items-center gap-2 text-sm font-medium text-neutral-500">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-[9px] text-neutral-400">✓</span>
                    {setup}
                  </p>
                </div>
                <div className="bg-red-50/70 px-5 py-4">
                  <p className="flex items-start gap-2 font-semibold leading-6 text-red-800">
                    <span className="mt-0.5 shrink-0 text-red-400">✗</span>
                    <span className="thai-readable">{pain}</span>
                  </p>
                </div>
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
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ขั้นตอน" title="จากการวิเคราะห์สู่การเติบโตระยะยาว" tone="light" />
          <div className="mt-12">
            {/* Mobile: vertical flow */}
            <div className="lg:hidden">
              {journey.map((item, index) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-700 text-sm font-bold text-white shadow-lg shadow-teal-900/40">
                      {item.step}
                    </div>
                    {index < journey.length - 1 && (
                      <div className="mt-1 h-10 w-px bg-teal-800" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="thai-readable mt-1 text-sm leading-6 text-neutral-400">
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
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-700 text-base font-bold text-white shadow-xl shadow-teal-900/50">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="mt-5 font-semibold text-white">{item.title}</h3>
                    <p className="thai-readable mt-2 text-sm leading-6 text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                  {index < journey.length - 1 && (
                    <div
                      className="flex items-center justify-center px-1 pt-7 text-2xl text-teal-700"
                      aria-hidden="true"
                    >
                      →
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Business Outcomes */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ผลลัพธ์"
            title="สิ่งที่คุณจะได้รับ"
            description="ไม่ว่าคุณจะเลือกบริการใด นี่คือสิ่งที่คุณจะได้รับจากการทำงานร่วมกัน"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {businessOutcomes.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white px-5 py-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-600 text-[10px] font-bold text-white" aria-hidden="true">✓</span>
                <span className="thai-readable text-sm leading-6 text-neutral-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Choose the Right Service */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="บริการ"
          title="เลือกบริการที่เหมาะกับคุณ"
          description="แต่ละบริการออกแบบมาเพื่อวัตถุประสงค์ที่แตกต่างกัน เลือกตามเป้าหมายของธุรกิจ"
        />

        {/* Discovery Audit — featured dark card */}
        <article className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-950 via-[#0d3d36] to-neutral-900 p-8 text-white shadow-2xl shadow-teal-950/40 sm:p-10 md:flex md:items-center md:gap-10">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-300 ring-1 ring-teal-500/25">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              ไม่แน่ใจว่าควรเริ่มจากตรงไหน? เริ่มที่นี่
            </span>
            <h3 className="mt-5 text-2xl font-semibold text-white">Discovery Audit</h3>
            <p className="thai-readable mt-1 text-teal-200">{serviceCards[0].tagline}</p>
            <p className="mt-3 text-2xl font-bold text-teal-300">{serviceCards[0].price}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {serviceCards[0].outcomes.map((o) => (
                <span key={o} className="rounded-full bg-white/8 px-3 py-1 text-sm text-teal-100 ring-1 ring-white/10">
                  {o}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 shrink-0 md:mt-0">
            <CTAButton to="/discovery-audit">เริ่มต้นด้วย Discovery Audit</CTAButton>
          </div>
        </article>

        {/* Other 3 services — accent-colored cards */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {serviceCards.slice(1).map((card, i) => {
            const c = cardColors[i]
            return (
              <article
                key={card.title}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${c.glow}`}
              >
                <div className={`h-1 w-full ${c.bar}`} />
                <div className="flex flex-1 flex-col p-6">
                  <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${c.iconBg} ${c.iconText}`}>
                    <CardIcon index={i} />
                  </div>
                  <h3 className="break-words text-lg font-semibold text-neutral-950">{card.title}</h3>
                  <p className="thai-readable mt-1 text-sm text-neutral-500">{card.tagline}</p>
                  <p className="mt-3 text-lg font-bold text-neutral-900">{card.price}</p>

                  <div className="mt-4 border-t border-neutral-100 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">เหมาะสำหรับ</p>
                    <p className="thai-readable mt-1.5 text-sm leading-6 text-neutral-700">{card.fit}</p>
                  </div>

                  <ul className="mt-4 grid gap-1.5">
                    {card.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                        <span className={`mt-0.5 shrink-0 font-bold ${c.iconText}`} aria-hidden="true">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <CTAButton to={card.cta.to} className="w-full">
                      {card.cta.label}
                    </CTAButton>
                  </div>
                </div>
              </article>
            )
          })}
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

      {/* Section 7: Trust / Credibility */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ทำไม Saralak Search"
          title="ทำไมธุรกิจเลือก Saralak Search"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point, i) => (
            <div key={point} className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-150 hover:border-teal-200 hover:shadow-md hover:shadow-teal-50">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-900 text-xs font-bold text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="thai-readable text-sm leading-6 text-neutral-700">{point}</span>
            </div>
          ))}
        </div>
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
