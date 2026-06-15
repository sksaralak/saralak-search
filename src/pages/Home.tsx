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

const audiences = [
  'ธุรกิจที่ต้องการให้ลูกค้าเจอแบรนด์มากขึ้นก่อนตัดสินใจซื้อ',
  'ทีมการตลาดที่ต้องการเปลี่ยน Search ให้เป็น lead และ demand ที่วัดผลได้',
  'ธุรกิจ local หรือหลายสาขาที่ต้องการลูกค้าจาก Google Maps',
  'E-commerce และ retail ที่ต้องการเพิ่มการมองเห็นของหมวดหมู่ สินค้า และบทความ',
  'Agency Partner ที่ต้องการ specialist support สำหรับตลาดค้นหาในไทย',
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
                label: 'SEO',
                headline: 'ช่วยให้คุณติดอันดับ',
                body: 'ทำให้เว็บไซต์ถูกค้นพบบน Google Search และ Search Engine อื่น ๆ',
              },
              {
                label: 'AEO',
                headline: 'ช่วยให้คุณเป็นคำตอบ',
                body: 'ทำให้เนื้อหาของคุณถูกเลือกไปตอบคำถามใน AI Overview, Featured Snippet และ People Also Ask',
              },
              {
                label: 'GEO',
                headline: 'ช่วยให้คุณเป็นคำแนะนำ',
                body: 'ทำให้ AI Search เช่น ChatGPT, Gemini และ Perplexity เข้าใจ เชื่อถือ และแนะนำแบรนด์ของคุณในคำตอบ',
              },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
                  {item.label}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-neutral-950">{item.headline}</h3>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-teal-200 bg-teal-50 px-6 py-5">
            <p className="thai-readable text-sm leading-7 text-teal-900">
              เมื่อทั้ง 3 ทำงานร่วมกัน ธุรกิจของคุณจะมีโอกาสถูกค้นพบมากขึ้นทั้งบน Google, AI Overview, ChatGPT, Gemini และแพลตฟอร์ม AI อื่น ๆ
            </p>
            <p className="thai-readable mt-2 font-semibold text-teal-950">
              ไม่ใช่แค่ถูกค้นหา แต่ต้องถูกเลือกและถูกแนะนำด้วย
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
                <div key={industry} className="rounded-md border border-neutral-200 bg-[#fbfaf6] p-4">
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
            {audiences.map((audience) => (
              <article key={audience} className="rounded-lg border border-white/15 bg-white/5 p-5">
                <p className="leading-7 text-teal-50">{audience}</p>
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
