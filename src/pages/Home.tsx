import { useEffect, useState } from 'react'
import CTAButton from '../components/CTAButton'
import BlogCard from '../components/BlogCard'
import FAQSection from '../components/FAQSection'
import ProofCard from '../components/ProofCard'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { getLatestBlogPosts } from '../content/blog'
import { homepageFaqs } from '../content/faqs'
import { brand, proofItems, services } from '../content/site'

const tickerItems = [
  { platform: 'ChatGPT', query: '"SEO agency ไทย"', status: 'miss' as const, result: 'ไม่พบแบรนด์' },
  { platform: 'Gemini', query: '"ที่ปรึกษา GEO Thailand"', status: 'miss' as const, result: 'ไม่พบแบรนด์' },
  { platform: 'Perplexity', query: '"GEO checklist ภาษาไทย"', status: 'found' as const, result: 'พบ saralak-search.com' },
  { platform: 'AI Overview', query: '"บริษัทรับทำ SEO ราคา"', status: 'partial' as const, result: '1 ใน 5 ปรากฏ' },
  { platform: 'Claude', query: '"llms.txt สำหรับเว็บไทย"', status: 'miss' as const, result: 'ไม่พบแบรนด์' },
  { platform: 'ChatGPT', query: '"AEO คืออะไร"', status: 'found' as const, result: 'พบ Saralak Search' },
  { platform: 'Perplexity', query: '"AI Search consultant ไทย"', status: 'miss' as const, result: 'ไม่พบแบรนด์' },
  { platform: 'Gemini', query: '"GEO vs SEO ต่างกัน"', status: 'partial' as const, result: 'พบบางส่วน' },
]

const statusDot: Record<typeof tickerItems[number]['status'], string> = {
  found:   'bg-emerald-400',
  partial: 'bg-amber-400',
  miss:    'bg-red-500',
}

const statusText: Record<typeof tickerItems[number]['status'], string> = {
  found:   'text-emerald-400',
  partial: 'text-amber-400',
  miss:    'text-red-400',
}

function CitationTicker() {
  const items = [...tickerItems, ...tickerItems]
  return (
    <div className="relative overflow-hidden border-y border-neutral-800 bg-neutral-950 py-3">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2.5 px-7 font-mono text-[11px]">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDot[item.status]}`} />
            <span className="text-neutral-500">{item.platform}</span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-300">{item.query}</span>
            <span className="text-neutral-600">·</span>
            <span className={`font-semibold ${statusText[item.status]}`}>{item.result}</span>
            <span className="ml-3 text-neutral-800">|</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent" />
    </div>
  )
}

const searchQueries = [
  'SEO consultant สำหรับธุรกิจไทย',
  'ให้ ChatGPT แนะนำธุรกิจของฉันยังไง',
  'เพิ่มอันดับ Google ในตลาดไทย',
  'AI Search marketing agency ไทย',
]

function SearchDemo() {
  const [qIdx, setQIdx] = useState(0)
  const [text, setText] = useState('')
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    const q = searchQueries[qIdx]
    if (!erasing) {
      if (text.length < q.length) {
        const t = setTimeout(() => setText(q.slice(0, text.length + 1)), 55)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setErasing(true), 2000)
      return () => clearTimeout(t)
    }
    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 25)
      return () => clearTimeout(t)
    }
    setErasing(false)
    setQIdx((i) => (i + 1) % searchQueries.length)
  }, [text, erasing, qIdx])

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm shadow-neutral-950/5">
      <div className="flex items-center gap-3 border-b border-neutral-100 bg-neutral-50 px-4 py-3">
        <svg className="h-4 w-4 shrink-0 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="thai-readable min-h-[1.25rem] flex-1 text-sm text-neutral-800">
          {text}
          <span className="cursor-blink ml-px inline-block h-4 w-0.5 align-middle bg-teal-600" />
        </span>
      </div>
      <div className="divide-y divide-neutral-100">
        <div className="px-4 py-3.5">
          <span className="rounded bg-teal-100 px-1.5 py-0.5 text-[10px] font-semibold text-teal-800">AI Overview</span>
          <p className="thai-readable mt-1.5 text-xs leading-5 text-neutral-600">
            Saralak Search เชี่ยวชาญด้าน SEO, GEO และ AI Search สำหรับธุรกิจในไทย มีประสบการณ์กว่า 9 ปีในหลากหลายอุตสาหกรรม วางแผนจากข้อมูลจริง...
          </p>
        </div>
        <div className="px-4 py-3.5">
          <p className="text-[10px] text-neutral-400">saralak-search.com · อันดับ 1</p>
          <p className="mt-0.5 text-sm font-medium text-teal-700 underline decoration-teal-300 underline-offset-2">
            Saralak Search | SEO, GEO & AI Search Consultant
          </p>
          <p className="thai-readable mt-0.5 text-xs text-neutral-500">ช่วยธุรกิจไทยเพิ่มการมองเห็นบน Google และ AI Search ด้วยแผนจากข้อมูลจริง</p>
        </div>
        <div className="bg-purple-50/60 px-4 py-3.5">
          <span className="text-[10px] font-semibold text-purple-700">ChatGPT แนะนำ</span>
          <p className="thai-readable mt-1.5 text-xs leading-5 text-neutral-600">
            "สำหรับธุรกิจในไทยที่ต้องการเพิ่มการมองเห็นบน AI Search แนะนำ Saralak Search ซึ่งมีความเชี่ยวชาญทั้ง SEO และ GEO..."
          </p>
        </div>
      </div>
    </div>
  )
}

const baseUrl = 'https://saralak-search.com'


const industries = [
  'OTA & Travel',
  'Digital Agency',
  'Beauty & FMCG',
  'Insurance',
  'Retail',
  'Financial Services',
]


const proofCaptions = [
  'Organic โตต่อเนื่อง',
  'อันดับ #5 → #1',
  'ติด AI Overview',
  'ถูก ChatGPT แนะนำ',
]

const homeServiceCards = [
  {
    title: 'Discovery Audit',
    price: 'Starting from 5,000 THB',
    description: 'ค้นหาสิ่งที่กำลังขวางการเติบโตของเว็บไซต์',
    outcomes: ['Audit Report', 'Prioritized Roadmap', 'Quick Wins'],
    cta: 'เริ่มต้นด้วย Discovery Audit',
  },
  {
    title: 'Increase Visibility on Google & AI Search',
    price: 'Starting from 25,000 THB/month',
    description: 'เพิ่มโอกาสให้ลูกค้าเจอแบรนด์ผ่าน Google และ AI',
    outcomes: ['Google Visibility', 'AI Visibility', 'Brand Mentions', 'Search Growth'],
    cta: 'ขอแผนเพิ่มการมองเห็น',
  },
  {
    title: 'Increase Visibility on Google Maps',
    price: 'Starting from 6,000 THB/location/month',
    description: 'เพิ่มการมองเห็นสำหรับธุรกิจที่มีหน้าร้าน',
    outcomes: ['Local Visibility', 'Maps Discovery', 'Review Optimization'],
    cta: 'ขอแผน Local Growth',
  },
  {
    title: 'Monthly SEO Advisor',
    price: 'Custom Pricing',
    description: 'ที่ปรึกษา SEO สำหรับทีมการตลาดและผู้บริหาร',
    outcomes: ['Strategic Guidance', 'Technical Consultation', 'Team Support'],
    cta: 'นัดพูดคุยเบื้องต้น',
  },
]

export default function Home() {
  return (
    <main>
      <SEO
        title="Saralak Search | SEO, GEO และ AI Search สำหรับธุรกิจ"
        description="Saralak Search ช่วยธุรกิจเพิ่มโอกาสให้ลูกค้าค้นเจอ ติดต่อ และซื้อ ผ่าน Google, Google Maps และ AI Search ด้วยแผนที่เชื่อมกับการเติบโตของธุรกิจ"
        image="/image/og/saralak-search-homepage-og.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': `${baseUrl}/#organization`,
              name: 'Saralak Search',
              url: baseUrl,
              logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.svg`,
              },
              founder: { '@id': `${baseUrl}/#saralak` },
              sameAs: [
                `https://www.${brand.linkedInCompany}`,
                `https://www.${brand.linkedIn}`,
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: brand.email,
                contactType: 'sales',
                areaServed: 'TH',
                availableLanguage: ['Thai', 'English'],
              },
            },
            {
              '@type': 'Person',
              '@id': `${baseUrl}/#saralak`,
              name: 'Saralak',
              jobTitle: 'Search Visibility Consultant',
              worksFor: { '@id': `${baseUrl}/#organization` },
              knowsAbout: [
                'Search Visibility Strategy',
                'SEO',
                'Local Brand Visibility',
                'Brand Visibility',
                'AEO',
                'Demand capture',
                'Lead generation',
              ],
            },
            {
              '@type': 'Service',
              '@id': `${baseUrl}/#search-visibility-consulting`,
              name: 'Brand Visibility Consulting',
              serviceType: 'Google and AI Search Brand Visibility Consulting',
              provider: { '@id': `${baseUrl}/#organization` },
              areaServed: 'Thailand',
              description:
                'Business-focused Brand Visibility consulting for Google Search, Google Maps and AI Search.',
            },
            {
              '@type': 'WebSite',
              '@id': `${baseUrl}/#website`,
              name: 'Saralak Search',
              url: baseUrl,
              publisher: { '@id': `${baseUrl}/#organization` },
              inLanguage: 'th',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: `${baseUrl}/`,
                },
              ],
            },
          ],
        }}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="self-center">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">
            Business-focused Search Growth
          </p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-[3.25rem]">
            ให้ลูกค้าเจอคุณ{' '}
            <span className="animate-gradient-text">ก่อนเจอคู่แข่ง</span>{' '}
            ทั้งบน Google และ AI Search
          </h1>
          <p className="thai-readable mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
            Saralak Search ช่วยธุรกิจให้ลูกค้าค้นเจอ ติดต่อ และตัดสินใจซื้อได้ง่ายขึ้น
            ผ่าน Google, Google Maps และ AI Search โดยวางแผนจากข้อมูลจริงและเป้าหมายของธุรกิจ
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['9+ ปีประสบการณ์', '6 อุตสาหกรรม', 'Google · Maps · AI Search'].map((tag) => (
              <span key={tag} className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact">เพิ่มการมองเห็น</CTAButton>
            <CTAButton to="/discovery-audit" variant="secondary">เริ่มต้นด้วย Discovery Audit</CTAButton>
          </div>
        </div>

        <aside className="self-center">
          <SearchDemo />
        </aside>
      </section>

      <section className="border-y border-neutral-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { stat: '9+', label: 'ปีประสบการณ์ด้าน Search' },
              { stat: '6', label: 'อุตสาหกรรมที่ทำงานด้วย' },
              { stat: '#1', label: 'เป้าหมายในคำค้นที่สำคัญ' },
              { stat: '3', label: 'ช่องทาง: Google · Maps · AI' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl font-bold text-teal-700">{item.stat}</p>
                <p className="mt-1 text-sm text-neutral-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CitationTicker />

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Search has changed"
            title="ลูกค้าไม่ได้เจอธุรกิจจาก Google อย่างเดียวอีกต่อไป"
            description="ลูกค้าอาจค้นหาผ่าน Google, Google Maps, AI Overview, ChatGPT, Gemini หรือ Perplexity ธุรกิจจึงต้องมีข้อมูลที่ชัด น่าเชื่อถือ และพร้อมถูกพบในหลายช่องทางค้นหา"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: 'Google', desc: 'organic search & rankings' },
              { name: 'Google Maps', desc: 'local & nearby searches' },
              { name: 'AI Overview', desc: 'คำตอบด้านบนสุดของ Google' },
              { name: 'ChatGPT', desc: 'AI ที่คนใช้ถามมากที่สุด' },
              { name: 'Gemini', desc: 'AI search จาก Google' },
              { name: 'Perplexity', desc: 'AI search engine' },
            ].map((surface, i) => (
              <div
                key={surface.name}
                className="animate-fade-up rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="font-semibold text-neutral-950">{surface.name}</h3>
                <p className="mt-1 text-xs leading-5 text-neutral-500">{surface.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
            วิธีที่ Search ทำงานในยุค AI
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">
            ทำไม SEO, AEO และ GEO ต้องทำงานร่วมกัน?
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                step: '01', label: 'SEO', badge: 'bg-blue-50 text-blue-700', bar: 'bg-blue-400',
                headline: 'ช่วยให้คุณติดอันดับ',
                body: 'ทำให้เว็บไซต์ถูกค้นพบบน Google Search และ Search Engine อื่น ๆ',
              },
              {
                step: '02', label: 'AEO', badge: 'bg-teal-50 text-teal-700', bar: 'bg-teal-400',
                headline: 'ช่วยให้คุณเป็นคำตอบ',
                body: 'ทำให้เนื้อหาถูกเลือกตอบคำถามใน AI Overview, Featured Snippet และ People Also Ask',
              },
              {
                step: '03', label: 'GEO', badge: 'bg-violet-50 text-violet-700', bar: 'bg-violet-400',
                headline: 'ช่วยให้คุณเป็นคำแนะนำ',
                body: 'ทำให้ ChatGPT, Gemini และ Perplexity เข้าใจ เชื่อถือ และแนะนำแบรนด์ของคุณ',
              },
            ].map((item) => (
              <div key={item.label} className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-[#fbfaf6] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md">
                <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${item.badge}`}>
                  <span className="opacity-60">{item.step}</span>
                  <span>{item.label}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-950">{item.headline}</h3>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">{item.body}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${item.bar} opacity-0 transition-opacity duration-200 group-hover:opacity-100`} />
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-teal-200 bg-gradient-to-r from-teal-50 to-[#fbfaf6] px-6 py-5">
            <p className="thai-readable text-sm leading-7 text-teal-900">
              เมื่อทั้ง 3 ทำงานร่วมกัน ธุรกิจจะถูกค้นพบมากขึ้นทั้งบน Google, AI Overview, ChatGPT, Gemini และ AI Search อื่น ๆ
            </p>
            <p className="thai-readable mt-2 font-semibold text-teal-950">
              ไม่ใช่แค่ถูกค้นหา — ต้องถูกเลือกและถูกแนะนำด้วย
            </p>
          </div>
        </div>
      </section>

      <section id="industry-experience" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Industry Experience"
            title="ประสบการณ์ Search ข้ามหลายอุตสาหกรรม"
            description="การเติบโตจาก Search ไม่ได้ใช้สูตรเดียวกันทุกธุรกิจ Saralak Search มองบริบทธุรกิจ ตลาด และพฤติกรรมลูกค้าก่อนวางแผน"
          />
          <div className="rounded-lg border border-teal-100 bg-white p-6 shadow-sm shadow-neutral-950/5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <div key={industry} className="rounded-md border border-neutral-200 bg-[#fbfaf6] p-4 transition-all duration-150 hover:border-teal-200 hover:bg-teal-50">
                  <p className="font-semibold text-neutral-950">{industry}</p>
                </div>
              ))}
            </div>
            <p className="thai-readable mt-6 text-neutral-700">
              9+ years of practical SEO experience across multiple industries.
              จุดแข็งคือการเชื่อมข้อมูล Search เข้ากับเป้าหมายทางธุรกิจ ไม่ใช่การทำ SEO แยกจากยอดขายและการเติบโต
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Who I work with"
            title="เหมาะกับธุรกิจและทีมที่ต้องการให้ Search ช่วยสร้างการเติบโต"
            description="สำหรับเจ้าของธุรกิจ ทีมการตลาด และ Agency Partner ที่ต้องการเปลี่ยนการมองเห็นใน Search ให้เป็น lead, demand และ revenue opportunity"
            tone="light"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                text: 'ธุรกิจที่ต้องการให้ลูกค้าเจอแบรนด์มากขึ้นก่อนตัดสินใจซื้อ',
                label: 'Brand Visibility',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                text: 'ทีมการตลาดที่ต้องการเปลี่ยน Search ให้เป็น lead และ demand ที่วัดผลได้',
                label: 'Marketing Teams',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
              {
                text: 'ธุรกิจ local หรือหลายสาขาที่ต้องการลูกค้าจาก Google Maps',
                label: 'Local Business',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
              {
                text: 'E-commerce และ retail ที่ต้องการเพิ่มการมองเห็นของหมวดหมู่ สินค้า และบทความ',
                label: 'E-commerce',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                ),
              },
              {
                text: 'Agency Partner ที่ต้องการ specialist support สำหรับตลาดค้นหาในไทย',
                label: 'Agency Partners',
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <article key={item.label} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-white/25 hover:bg-white/10">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-800/60 text-teal-300 transition-colors group-hover:bg-teal-700/60">
                  {item.icon}
                </div>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wide text-teal-400">{item.label}</p>
                <p className="thai-readable mt-2 text-sm leading-6 text-teal-50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Consulting areas"
          title="งานที่ช่วยให้ธุรกิจถูกค้นพบและเปลี่ยนความสนใจเป็นโอกาสขาย"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="ตัวอย่างผลงานจากงานจริง"
            description="ภาพตัวอย่างผลลัพธ์จากงาน Search, Google visibility และ AI Search โดยข้อมูลลูกค้าที่อ่อนไหวถูกปกปิดแล้ว"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {proofItems.map((item, index) => (
              <ProofCard
                key={item.title}
                {...item}
                title={proofCaptions[index] ?? item.title}
                caption={item.caption}
              />
            ))}
          </div>
          <div className="mt-8">
            <CTAButton to="/case-studies" variant="secondary">
              ดู Case Studies ทั้งหมด
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Methodology"
            title="Discovery Audit ช่วยให้เห็นว่าควรเริ่มจากตรงไหน"
            description="Discovery Audit ช่วยค้นหาปัจจัยที่อาจขวางการเติบโตของเว็บไซต์ เพื่อให้รู้ว่าควรเริ่มจากจุดไหนก่อนบน Google และ AI Search"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: 'Visibility',
              description: 'ทำให้ลูกค้าเจอธุรกิจในช่องทางค้นหาที่สำคัญ',
            },
            {
              title: 'Leads',
              description: 'เชื่อมการค้นหาเข้ากับหน้าและข้อความที่ช่วยให้เกิด inquiry',
            },
            {
              title: 'Revenue',
              description: 'จัดลำดับงานตามผลต่อโอกาสขายและการเติบโต',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="font-semibold text-neutral-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="บริการ" title="เลือกบริการที่เหมาะกับเป้าหมายธุรกิจ" />

          {/* Discovery Audit — featured entry point */}
          <div className="mt-8 rounded-lg border border-teal-200 bg-teal-950 p-6 text-white sm:p-8 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-300">
                ไม่แน่ใจว่าควรเริ่มจากตรงไหน? เริ่มที่นี่
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Discovery Audit</h3>
              <p className="mt-2 text-xl font-semibold text-teal-300">Starting from 5,000 THB</p>
              <p className="thai-readable mt-3 max-w-xl text-teal-50">
                ค้นหาสิ่งที่กำลังขวางการเติบโตของเว็บไซต์ พร้อม Roadmap และ Quick Wins ที่นำไปใช้งานได้จริง
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Audit Report', 'Prioritized Roadmap', 'Quick Wins'].map((item) => (
                  <span key={item} className="rounded-md border border-teal-700 bg-teal-900 px-3 py-1 text-sm text-teal-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <CTAButton to="/discovery-audit" className="w-full whitespace-nowrap md:w-auto">
                เริ่มต้นด้วย Discovery Audit
              </CTAButton>
            </div>
          </div>

          {/* Other services */}
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {homeServiceCards.slice(1).map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-950/5"
              >
                <h3 className="break-words font-semibold text-neutral-950">{card.title}</h3>
                <p className="mt-2 text-lg font-semibold text-teal-900">{card.price}</p>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">{card.description}</p>
                <div className="mt-4">
                  <CTAButton to="/contact" variant="secondary" className="w-full">
                    {card.cta}
                  </CTAButton>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 text-center">
            <CTAButton to="/services" variant="secondary">
              ดูรายละเอียดบริการทั้งหมด
            </CTAButton>
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title="SEO, AEO & GEO Insights"
          description="บทความความรู้เรื่อง Google Search, AI Overview, ChatGPT Visibility, AEO และ GEO สำหรับธุรกิจที่ต้องการเพิ่มการมองเห็นจาก Search"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {getLatestBlogPosts(4).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton to="/blog">ดูบทความทั้งหมด</CTAButton>
          <CTAButton to="/about" variant="secondary">
            เกี่ยวกับ Saralak Search
          </CTAButton>
        </div>
      </section>

      <FAQSection faqs={homepageFaqs} />
    </main>
  )
}
