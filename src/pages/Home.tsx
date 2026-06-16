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
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-950 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
        <div className="ml-2 flex flex-1 items-center gap-2 rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5">
          <svg className="h-3.5 w-3.5 shrink-0 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="thai-readable min-h-[1.25rem] flex-1 font-mono text-sm text-neutral-300">
            {text}
            <span className="cursor-blink ml-px inline-block h-4 w-0.5 align-middle bg-teal-500" />
          </span>
        </div>
      </div>
      <div className="divide-y divide-neutral-800">
        <div className="px-4 py-3.5">
          <span className="rounded bg-teal-900/60 px-1.5 py-0.5 text-[10px] font-semibold text-teal-300">AI Overview</span>
          <p className="thai-readable mt-1.5 text-xs leading-5 text-neutral-500">
            Saralak Search เชี่ยวชาญด้าน SEO, GEO และ AI Search สำหรับธุรกิจในไทย มีประสบการณ์กว่า 9 ปีในหลากหลายอุตสาหกรรม วางแผนจากข้อมูลจริง...
          </p>
        </div>
        <div className="px-4 py-3.5">
          <p className="text-[10px] text-neutral-600">saralak-search.com · อันดับ 1</p>
          <p className="mt-0.5 text-sm font-medium text-teal-400 underline decoration-teal-700 underline-offset-2">
            Saralak Search | SEO, GEO & AI Search Consultant
          </p>
          <p className="thai-readable mt-0.5 text-xs text-neutral-500">ช่วยธุรกิจไทยเพิ่มการมองเห็นบน Google และ AI Search ด้วยแผนจากข้อมูลจริง</p>
        </div>
        <div className="bg-violet-950/40 px-4 py-3.5">
          <span className="text-[10px] font-semibold text-violet-400">ChatGPT แนะนำ</span>
          <p className="thai-readable mt-1.5 text-xs leading-5 text-neutral-500">
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
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    iconColor: 'text-teal-400 bg-teal-950 border-teal-800/60',
    accent: 'hover:border-teal-700/60',
    title: 'Increase Visibility on Google & AI Search',
    price: 'Starting from 25,000 THB/month',
    priceColor: 'text-teal-300',
    description: 'เพิ่มโอกาสให้ลูกค้าเจอแบรนด์ผ่าน Google และ AI',
    outcomes: ['Google Visibility', 'AI Visibility', 'Brand Mentions', 'Search Growth'],
    cta: 'ขอแผนเพิ่มการมองเห็น',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    iconColor: 'text-emerald-400 bg-emerald-950 border-emerald-800/60',
    accent: 'hover:border-emerald-700/60',
    title: 'Increase Visibility on Google Maps',
    price: 'Starting from 6,000 THB/location/month',
    priceColor: 'text-emerald-300',
    description: 'เพิ่มการมองเห็นสำหรับธุรกิจที่มีหน้าร้าน',
    outcomes: ['Local Visibility', 'Maps Discovery', 'Review Optimization'],
    cta: 'ขอแผน Local Growth',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    iconColor: 'text-violet-400 bg-violet-950 border-violet-800/60',
    accent: 'hover:border-violet-700/60',
    title: 'Monthly SEO Advisor',
    price: 'Custom Pricing',
    priceColor: 'text-violet-300',
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

      {/* Hero — dark */}
      <section className="bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="self-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-teal-400">
              Business-focused Search Growth
            </p>
            <h1 className="break-words text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              ให้ลูกค้าเจอคุณ{' '}
              <span className="animate-gradient-text">ก่อนเจอคู่แข่ง</span>{' '}
              ทั้งบน Google และ AI Search
            </h1>
            <p className="thai-readable mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Saralak Search ช่วยธุรกิจให้ลูกค้าค้นเจอ ติดต่อ และตัดสินใจซื้อได้ง่ายขึ้น
              ผ่าน Google, Google Maps และ AI Search โดยวางแผนจากข้อมูลจริงและเป้าหมายของธุรกิจ
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['9+ ปีประสบการณ์', '6 อุตสาหกรรม', 'Google · Maps · AI Search'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-neutral-300">
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
        </div>

        {/* Stats — inline in hero */}
        <div className="border-t border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { stat: '9+', label: 'ปีประสบการณ์ด้าน Search' },
                { stat: '6', label: 'อุตสาหกรรมที่ทำงานด้วย' },
                { stat: '#1', label: 'เป้าหมายในคำค้นที่สำคัญ' },
                { stat: '3', label: 'ช่องทาง: Google · Maps · AI' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-4xl font-bold text-teal-400">{item.stat}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation Ticker */}
      <CitationTicker />

      {/* Search has changed — dark */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-400">Search has changed</p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">
            ลูกค้าไม่ได้เจอธุรกิจจาก<br className="hidden sm:block" />Google อย่างเดียวอีกต่อไป
          </h2>
          <p className="thai-readable mt-4 max-w-2xl text-lg leading-8 text-neutral-400">
            ลูกค้าอาจค้นหาผ่าน Google, Google Maps, AI Overview, ChatGPT, Gemini หรือ Perplexity
            ธุรกิจจึงต้องมีข้อมูลที่ชัด น่าเชื่อถือ และพร้อมถูกพบในหลายช่องทางค้นหา
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: 'Google', desc: 'Organic search & rankings',   icon: '🔍', c: 'border-blue-800/40 bg-blue-950/20 hover:border-blue-600/60' },
              { name: 'Google Maps', desc: 'Local & nearby searches',  icon: '📍', c: 'border-emerald-800/40 bg-emerald-950/20 hover:border-emerald-600/60' },
              { name: 'AI Overview', desc: 'คำตอบด้านบนสุดของ Google', icon: '✨', c: 'border-teal-800/40 bg-teal-950/20 hover:border-teal-600/60' },
              { name: 'ChatGPT', desc: 'AI ที่คนใช้ถามมากที่สุด',    icon: '💬', c: 'border-green-800/40 bg-green-950/20 hover:border-green-600/60' },
              { name: 'Gemini', desc: 'AI search จาก Google',         icon: '♊', c: 'border-violet-800/40 bg-violet-950/20 hover:border-violet-600/60' },
              { name: 'Perplexity', desc: 'AI search engine',          icon: '🔮', c: 'border-sky-800/40 bg-sky-950/20 hover:border-sky-600/60' },
            ].map((surface, i) => (
              <div
                key={surface.name}
                className={`animate-fade-up rounded-xl border p-5 transition-all duration-200 hover:-translate-y-0.5 ${surface.c}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-2xl">{surface.icon}</span>
                <h3 className="mt-3 font-semibold text-white">{surface.name}</h3>
                <p className="mt-1 text-xs leading-5 text-neutral-500">{surface.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO / AEO / GEO — dark */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-400">วิธีที่ Search ทำงานในยุค AI</p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">
            ทำไม SEO, AEO และ GEO<br className="hidden sm:block" />ต้องทำงานร่วมกัน?
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                step: '01', label: 'SEO',
                border: 'border-blue-800/50', bg: 'bg-blue-950/25', badge: 'bg-blue-900/60 text-blue-300', num: 'text-blue-950',
                headline: 'ช่วยให้คุณติดอันดับ',
                body: 'ทำให้เว็บไซต์ถูกค้นพบบน Google Search และ Search Engine อื่น ๆ',
              },
              {
                step: '02', label: 'AEO',
                border: 'border-teal-800/50', bg: 'bg-teal-950/25', badge: 'bg-teal-900/60 text-teal-300', num: 'text-teal-950',
                headline: 'ช่วยให้คุณเป็นคำตอบ',
                body: 'ทำให้เนื้อหาถูกเลือกตอบคำถามใน AI Overview, Featured Snippet และ People Also Ask',
              },
              {
                step: '03', label: 'GEO',
                border: 'border-violet-800/50', bg: 'bg-violet-950/25', badge: 'bg-violet-900/60 text-violet-300', num: 'text-violet-950',
                headline: 'ช่วยให้คุณเป็นคำแนะนำ',
                body: 'ทำให้ ChatGPT, Gemini และ Perplexity เข้าใจ เชื่อถือ และแนะนำแบรนด์ของคุณ',
              },
            ].map((item) => (
              <div key={item.label} className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-200 hover:-translate-y-0.5 ${item.border} ${item.bg}`}>
                <span className={`select-none absolute -right-3 -top-5 text-[7rem] font-black leading-none ${item.num}`}>{item.step}</span>
                <span className={`relative z-10 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${item.badge}`}>
                  {item.label}
                </span>
                <h3 className="relative z-10 mt-4 text-xl font-semibold text-white">{item.headline}</h3>
                <p className="relative z-10 thai-readable mt-2 text-sm leading-6 text-neutral-400">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-teal-800/50 bg-teal-950/50 px-6 py-5">
            <p className="thai-readable text-sm leading-7 text-teal-200">
              เมื่อทั้ง 3 ทำงานร่วมกัน ธุรกิจจะถูกค้นพบมากขึ้นทั้งบน Google, AI Overview, ChatGPT, Gemini และ AI Search อื่น ๆ
            </p>
            <p className="thai-readable mt-2 font-semibold text-white">
              ไม่ใช่แค่ถูกค้นหา — ต้องถูกเลือกและถูกแนะนำด้วย
            </p>
          </div>
        </div>
      </section>

      {/* Urgency strip */}
      <section className="border-y border-teal-900/60 bg-gradient-to-r from-teal-950 via-teal-900 to-teal-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">ทุกวันที่รอ คือวันที่ลูกค้าเลือกคู่แข่ง</p>
              <p className="thai-readable mt-1 text-sm text-teal-200">AI Search กำลังแนะนำแบรนด์อื่นให้ลูกค้าของคุณอยู่ในขณะนี้</p>
            </div>
            <CTAButton to="/discovery-audit">รู้จุดอ่อนวันนี้ — Discovery Audit</CTAButton>
          </div>
        </div>
      </section>

      {/* Industry experience — white contrast */}
      <section id="industry-experience" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader
              eyebrow="Industry Experience"
              title="ประสบการณ์ Search ข้ามหลายอุตสาหกรรม"
              description="การเติบโตจาก Search ไม่ได้ใช้สูตรเดียวกันทุกธุรกิจ Saralak Search มองบริบทธุรกิจ ตลาด และพฤติกรรมลูกค้าก่อนวางแผน"
            />
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {industries.map((industry) => (
                  <div key={industry} className="rounded-xl border border-neutral-200 bg-white px-4 py-3 transition-all duration-150 hover:border-teal-200 hover:bg-teal-50 hover:shadow-sm">
                    <p className="font-semibold text-neutral-950">{industry}</p>
                  </div>
                ))}
              </div>
              <p className="thai-readable mt-6 text-sm leading-7 text-neutral-600">
                9+ years of practical SEO experience across multiple industries.
                จุดแข็งคือการเชื่อมข้อมูล Search เข้ากับเป้าหมายทางธุรกิจ ไม่ใช่การทำ SEO แยกจากยอดขายและการเติบโต
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I work with — dark teal */}
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

      {/* Results — dark with big numbers */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-400">ผลลัพธ์จริง</p>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white md:text-4xl">ตัวอย่างผลลัพธ์<br />จากงานจริง</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 border-b border-t border-neutral-800 py-8 sm:grid-cols-4">
            {[
              { metric: '+180%', label: 'Organic Traffic Growth', c: 'text-emerald-400' },
              { metric: '#1',    label: 'อันดับในคำค้นหลัก',      c: 'text-teal-400'    },
              { metric: 'AI ✓',  label: 'ปรากฏใน AI Overview',    c: 'text-blue-400'    },
              { metric: 'GPT ✓', label: 'ChatGPT แนะนำแบรนด์',   c: 'text-violet-400'  },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className={`text-4xl font-black sm:text-5xl ${item.c}`}>{item.metric}</p>
                <p className="mt-2 text-sm text-neutral-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Proof — white */}
      <section className="border-b border-neutral-200 bg-white">
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

      {/* Consulting areas */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Consulting areas"
            title="งานที่ช่วยให้ธุรกิจถูกค้นพบและเปลี่ยนความสนใจเป็นโอกาสขาย"
            tone="light"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Audit CTA — dark featured */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-teal-800/50 bg-teal-950/70 px-8 py-10 md:px-12 md:py-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-400">เริ่มจากตรงไหน?</p>
                <h2 className="mt-3 text-3xl font-semibold text-white lg:text-4xl">
                  Discovery Audit ช่วยให้เห็นว่า<br className="hidden sm:block" />ควรเริ่มจากตรงไหน
                </h2>
                <p className="thai-readable mt-4 text-lg leading-8 text-teal-100">
                  ค้นหาปัญหาที่ทำให้เว็บไซต์ไม่ติด Google ไม่ถูก AI แนะนำ
                  และพลาดโอกาสทางธุรกิจ ก่อนตัดสินใจลงทุนเพิ่ม
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CTAButton to="/discovery-audit">เริ่มต้นด้วย Discovery Audit</CTAButton>
                  <CTAButton to="/services" variant="secondary">ดูบริการทั้งหมด</CTAButton>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Visibility', stat: 'Google · Maps · AI', desc: 'ทำให้ลูกค้าเจอธุรกิจในช่องทางค้นหาที่สำคัญ', dot: 'bg-teal-400', border: 'border-teal-700/60', bg: 'bg-teal-900/30' },
                  { label: 'Leads', stat: 'Inquiry · Form · Call', desc: 'เชื่อมการค้นหาเข้ากับหน้าที่ช่วยให้เกิด inquiry', dot: 'bg-blue-400', border: 'border-blue-800/60', bg: 'bg-blue-950/30' },
                  { label: 'Revenue', stat: 'ROI · Growth · Scale', desc: 'จัดลำดับงานตามผลต่อโอกาสขายและการเติบโต', dot: 'bg-emerald-400', border: 'border-emerald-800/60', bg: 'bg-emerald-950/30' },
                ].map((item) => (
                  <div key={item.label} className={`rounded-xl border ${item.border} ${item.bg} p-5`}>
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{item.stat}</p>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-white">{item.label}</h3>
                    <p className="thai-readable mt-1 text-sm leading-6 text-neutral-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="บริการ" title="เลือกบริการที่เหมาะกับเป้าหมายธุรกิจ" tone="light" />

          {/* Discovery Audit featured */}
          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-950 p-6 text-white sm:p-8 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-300 ring-1 ring-teal-500/25">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                ไม่แน่ใจว่าควรเริ่มจากตรงไหน? เริ่มที่นี่
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-white">Discovery Audit</h3>
              <p className="mt-1 text-xl font-semibold text-teal-300">Starting from 5,000 THB</p>
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
            {homeServiceCards.map((card) => (
              <article
                key={card.title}
                className={`group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 ${card.accent}`}
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${card.iconColor}`}>
                  {card.icon}
                </div>
                <h3 className="mt-4 break-words font-semibold text-white">{card.title}</h3>
                <p className={`mt-1 text-sm font-semibold ${card.priceColor}`}>{card.price}</p>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-400">{card.description}</p>
                <div className="mt-auto pt-5">
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

      {/* Blog */}
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
