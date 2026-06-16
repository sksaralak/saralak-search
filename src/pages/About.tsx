import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import BlogCard from '../components/BlogCard'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { getLatestBlogPosts } from '../content/blog'
import type { FAQItem } from '../content/faqs'

const stats = [
  { value: '9+', label: 'ปี SEO Experience' },
  { value: '6',  label: 'Active Clients'    },
  { value: '#1', label: 'Keyword Rankings'  },
  { value: '3',  label: 'AI Search Channels'},
]

const capabilities = [
  { title: 'Technical SEO',           description: 'ปรับปรุงโครงสร้างเว็บไซต์ การเก็บข้อมูล และการจัดทำดัชนี',         color: 'border-teal-500',   link: '/blog/what-is-seo'  },
  { title: 'Content SEO',             description: 'วางกลยุทธ์เนื้อหาตาม Search Intent และ Topical Authority',           color: 'border-teal-600',   link: '/blog/what-is-seo'  },
  { title: 'AEO',                     description: 'เพิ่มโอกาสในการปรากฏใน AI Overview และ Answer Engines',              color: 'border-sky-500',    link: '/blog/what-is-aeo'  },
  { title: 'GEO',                     description: 'เพิ่มโอกาสในการถูกอ้างอิงใน ChatGPT และ AI Search',                 color: 'border-violet-500', link: '/blog/what-is-geo'  },
  { title: 'Local SEO',               description: 'เพิ่มการมองเห็นสำหรับธุรกิจที่มีพื้นที่ให้บริการ',                  color: 'border-emerald-500',link: '/blog/seo-geo-aeo'  },
  { title: 'Google Maps Optimization',description: 'เพิ่มประสิทธิภาพ Google Business Profile และ Local Visibility',      color: 'border-amber-500',  link: '/services'          },
]

const industries = [
  {
    title: 'Travel & OTA',
    description: 'โรงแรม เที่ยวบิน กิจกรรม และธุรกิจท่องเที่ยว',
    color: 'text-sky-400 bg-sky-950 border-sky-800/60',
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.038 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.038-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  },
  {
    title: 'Beauty & FMCG',
    description: 'Haircare, Skincare และ Personal Care',
    color: 'text-rose-400 bg-rose-950 border-rose-800/60',
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>,
  },
  {
    title: 'Ecommerce',
    description: 'Product Listing, Category SEO และ Organic Growth',
    color: 'text-amber-400 bg-amber-950 border-amber-800/60',
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" /></svg>,
  },
  {
    title: 'SaaS & B2B',
    description: 'B2B Acquisition และ Organic Growth',
    color: 'text-violet-400 bg-violet-950 border-violet-800/60',
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
  },
  {
    title: 'Local Business',
    description: 'Google Maps และ Location-based Visibility',
    color: 'text-emerald-400 bg-emerald-950 border-emerald-800/60',
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  },
  {
    title: 'Digital Agency & Insurance',
    description: 'Brand Visibility, Demand Capture และ Lead Generation',
    color: 'text-teal-400 bg-teal-950 border-teal-800/60',
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>,
  },
]

const selectedResults = [
  { metric: '#5 → #1', label: 'SEO Ranking Growth',       c: 'text-teal-400'    },
  { metric: 'AI ✓',    label: 'Answer Engine Visibility',  c: 'text-blue-400'    },
  { metric: 'GPT ✓',   label: 'AI Search Mention',         c: 'text-violet-400'  },
  { metric: '+180%',   label: 'Organic Visibility Growth', c: 'text-emerald-400' },
]

const process = [
  { title: 'Discovery Audit',           description: 'วิเคราะห์เว็บไซต์และโอกาสการเติบโต' },
  { title: 'Visibility Analysis',       description: 'วิเคราะห์การมองเห็นบน Search' },
  { title: 'SEO / GEO Roadmap',         description: 'วางแผนการเติบโตที่นำไปปฏิบัติได้จริง' },
  { title: 'Implementation Support',    description: 'สนับสนุนการนำแผนไปใช้งาน' },
  { title: 'Measurement & Optimization',description: 'วัดผลและปรับปรุงอย่างต่อเนื่อง' },
]

const aboutFaqs: FAQItem[] = [
  {
    question: 'SEO ใช้เวลานานแค่ไหน?',
    answer: 'ขึ้นอยู่กับการแข่งขันของตลาด สภาพเว็บไซต์เดิม และความเร็วในการลงมือทำ โดยทั่วไปอาจเริ่มเห็นสัญญาณใน 2–4 เดือน และเห็นผลชัดขึ้นในช่วง 6–12 เดือน',
  },
  {
    question: 'GEO คืออะไร?',
    answer: 'GEO หรือ Generative Engine Optimization คือการปรับข้อมูล แบรนด์ คอนเทนต์ และโครงสร้างเว็บไซต์ให้มีโอกาสถูกเข้าใจ อ้างอิง หรือแนะนำใน ChatGPT, Gemini, Perplexity และ AI Search',
  },
  {
    question: 'AEO คืออะไร?',
    answer: 'AEO หรือ Answer Engine Optimization คือการทำให้เนื้อหาตอบคำถามได้ชัดเจนขึ้น เพื่อเพิ่มโอกาสปรากฏใน AI Overview, featured answers และระบบค้นหาแบบคำตอบ',
  },
  {
    question: 'AI Search ต่างจาก Google Search อย่างไร?',
    answer: 'Google Search แบบเดิมแสดงรายการผลลัพธ์ให้ผู้ใช้เลือก ส่วน AI Search มักสรุปคำตอบหรือแนะนำตัวเลือกโดยดึงข้อมูลจากหลายแหล่ง เว็บไซต์จึงต้องมีข้อมูลที่ชัดเจนและน่าเชื่อถือมากขึ้น',
  },
  {
    question: 'Brand Visibility Audit คืออะไร?',
    answer: 'Brand Visibility Audit คือการวิเคราะห์เว็บไซต์เพื่อดูปัญหา โอกาสการเติบโต และลำดับความสำคัญของงาน SEO, AEO, GEO, AI Search และ Google Maps ที่ควรทำก่อน',
  },
  {
    question: 'ธุรกิจแบบไหนเหมาะกับ SEO?',
    answer: 'เหมาะกับธุรกิจที่ลูกค้ามักค้นหาข้อมูลก่อนตัดสินใจ เช่น Ecommerce, SaaS, โรงแรม, คลินิก, Local Business, B2B และธุรกิจบริการ',
  },
  {
    question: 'Local SEO คืออะไร?',
    answer: 'Local SEO คือการเพิ่มการมองเห็นของธุรกิจในพื้นที่เฉพาะ ผ่าน Google Search, Google Maps และ Google Business Profile เพื่อให้ลูกค้าใกล้เคียงค้นเจอง่ายขึ้น',
  },
  {
    question: 'ทำไมต้องมีทั้ง SEO, AEO และ GEO?',
    answer: 'เพราะพฤติกรรมค้นหาไม่ได้อยู่แค่ Google แบบเดิมอีกต่อไป ลูกค้าใช้ Google, AI Overview, ChatGPT, Gemini, Perplexity และ Google Maps ในการค้นหา เปรียบเทียบ และตัดสินใจ',
  },
]

export default function About() {
  return (
    <main>
      <SEO
        title="เกี่ยวกับ Saralak Search | SEO, GEO และ AI Search Consultancy"
        description="Saralak Search คือที่ปรึกษาด้าน SEO, GEO และ AI Search ที่ช่วยธุรกิจเพิ่มการมองเห็นบน Google Search, Google Maps และ AI Search ก่อตั้งและดูแลโดย Saralak Kaewkum"
        path="/about"
        image="/saralak-profile.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Person',
              '@id': 'https://saralak-search.com/#saralak',
              name: 'Saralak Kaewkum',
              url: 'https://saralak-search.com/about',
              image: 'https://saralak-search.com/saralak-profile.png',
              jobTitle: 'Founder and SEO, GEO and AI Search Consultant',
              description: 'Saralak Kaewkum is a Thai SEO, AEO and GEO consultant with over 9 years of experience helping businesses increase visibility on Google Search, AI Search and Google Maps.',
              worksFor: { '@id': 'https://saralak-search.com/#organization' },
              knowsLanguage: ['Thai', 'English'],
              sameAs: [
                'https://www.linkedin.com/in/saralakkaewkum',
                'https://www.linkedin.com/company/saralak-search',
              ],
              knowsAbout: [
                'Search Engine Optimization','Answer Engine Optimization','Generative Engine Optimization',
                'Technical SEO','Content SEO','Entity SEO','Structured Data','Google Maps Visibility',
                'AI Search Optimization','Local SEO','Keyword Research','Google Business Profile','International SEO',
              ],
              hasOccupation: {
                '@type': 'Occupation',
                name: 'SEO, AEO and GEO Consultant',
                occupationLocation: { '@type': 'Country', name: 'Thailand' },
              },
            },
            {
              '@type': 'Organization',
              '@id': 'https://saralak-search.com/#organization',
              name: 'Saralak Search',
              url: 'https://saralak-search.com',
              logo: { '@type': 'ImageObject', url: 'https://saralak-search.com/logo.svg' },
              description: 'SEO, GEO and AI Search Consultancy founded and operated by Saralak Kaewkum.',
              sameAs: ['https://www.linkedin.com/company/saralak-search','https://www.linkedin.com/in/saralakkaewkum'],
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home',  item: 'https://saralak-search.com/'      },
                { '@type': 'ListItem', position: 2, name: 'About', item: 'https://saralak-search.com/about' },
              ],
            },
          ],
        }}
      />

      {/* Hero — dark 2-col */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-teal-400">เกี่ยวกับ Saralak Search</p>
              <h1 className="break-words text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                ทำให้ SEO เข้าใจง่าย
                <br />
                <span className="animate-gradient-text">และเชื่อมกับธุรกิจจริง</span>
              </h1>
              <div className="thai-readable mt-6 space-y-3 text-lg leading-8 text-neutral-300">
                <p>
                  Saralak Search ช่วยธุรกิจเพิ่มการมองเห็นบน Google Search, Google Maps และ AI Search
                  ผ่าน SEO, AEO และ GEO
                </p>
                <p>
                  ก่อตั้งและดูแลโดย Saralak Kaewkum ผู้มีประสบการณ์ด้าน SEO มากกว่า 9 ปี
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['9+ ปี SEO Experience', 'Google Search', 'Google Maps', 'AI Search'].map((badge) => (
                  <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-neutral-300">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton to="/discovery-audit">เริ่มต้นด้วย Discovery Audit</CTAButton>
                <CTAButton to="/contact" variant="secondary">ติดต่อ</CTAButton>
              </div>
            </div>

            {/* Profile photo card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-teal-500/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/50">
                  <img
                    src="/saralak-profile.png"
                    alt="Saralak Kaewkum — Founder of Saralak Search"
                    className="h-auto w-full max-w-sm object-cover"
                    width="400"
                    height="500"
                  />
                  <div className="border-t border-neutral-800 bg-neutral-900 px-5 py-4">
                    <p className="font-semibold text-white">Saralak Kaewkum</p>
                    <p className="mt-0.5 text-sm text-teal-400">Founder · SEO, GEO &amp; AI Search Consultant</p>
                    <a
                      href="https://www.linkedin.com/in/saralakkaewkum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition hover:text-teal-400"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip — still dark */}
        <div className="border-t border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-4xl font-bold text-teal-400">{s.value}</p>
                  <p className="mt-1 text-sm text-neutral-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — dark */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="แนวคิดของ Saralak Search" title="Search ไม่ควรเป็นเรื่องซับซ้อน" tone="light" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
            <div className="thai-readable space-y-5 text-lg leading-8 text-neutral-400">
              <p>
                Saralak Search ก่อตั้งขึ้นจากความเชื่อว่า SEO ไม่ควรเป็นเรื่องซับซ้อนที่เข้าใจได้เฉพาะคนทำเทคนิค
              </p>
              <p>
                แต่ควรเป็นเครื่องมือที่ช่วยให้ธุรกิจมองเห็นโอกาสทางการตลาด ลูกค้าใหม่
                และการเติบโตที่วัดผลได้
              </p>
              <p>
                Search ไม่ใช่เพียงช่องทางสร้างทราฟฟิก แต่เป็นหนึ่งในช่องทางสำคัญในการสร้าง
                Business Visibility บน Google Search, Google Maps และ AI Search
              </p>
              <p className="text-base text-neutral-600">
                อ่านเพิ่มเติม:{' '}
                <Link to="/blog/seo-geo-aeo" className="text-teal-500 hover:underline">SEO, AEO และ GEO ต่างกันอย่างไร</Link>
              </p>
            </div>
            <blockquote className="rounded-xl border border-teal-800/60 bg-teal-950/60 px-7 py-6">
              <p className="thai-readable text-lg font-medium leading-8 text-teal-100">
                "ธุรกิจที่เข้าใจ Search Journey ของลูกค้า และเตรียมตัวก่อน มีโอกาสได้เปรียบคู่แข่งในช่วงที่คนยังไม่แน่นหนา"
              </p>
              <footer className="mt-4 text-sm font-semibold text-teal-400">— Saralak Kaewkum</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Capabilities — dark colored cards */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ความเชี่ยวชาญ"
            title="Saralak Search ทำอะไร"
            description="งานหลักคือการช่วยให้ธุรกิจมีโครงสร้างเว็บไซต์ คอนเทนต์ และข้อมูลที่เหมาะกับการถูกค้นพบทั้งบน Google, AI Search และ Google Maps"
            tone="light"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-800"
              >
                <div className={`absolute left-0 top-0 h-full w-1 ${item.color}`} />
                <h3 className="pl-4 font-semibold text-white group-hover:text-teal-300">{item.title}</h3>
                <p className="thai-readable mt-2 pl-4 text-sm leading-6 text-neutral-500">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries — dark */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="อุตสาหกรรม"
            title="อุตสาหกรรมที่เคยดูแล"
            description="ประสบการณ์ครอบคลุมธุรกิจที่ต้องพึ่งพา Search เพื่อสร้างการมองเห็น ลูกค้าใหม่ และการเติบโต"
            tone="light"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-700"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                <p className="thai-readable mt-1.5 text-sm leading-6 text-neutral-500">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results — dark with big metric numbers */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ผลลัพธ์" title="ตัวอย่างผลลัพธ์จากงานจริง" tone="light" />
          <div className="mt-10 grid grid-cols-2 gap-6 border-b border-t border-neutral-800 py-8 sm:grid-cols-4">
            {selectedResults.map((item) => (
              <div key={item.label} className="text-center">
                <p className={`text-4xl font-black sm:text-5xl ${item.c}`}>{item.metric}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-neutral-600">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton to="/case-studies" variant="secondary">ดู Case Studies ทั้งหมด</CTAButton>
          </div>
        </div>
      </section>

      {/* Process — dark vertical timeline */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="กระบวนการ" title="วิธีการทำงาน" tone="light" />
          <div className="mt-12">
            {process.map(({ title, description }, i) => (
              <div key={title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-700 font-bold text-white shadow-lg shadow-teal-900/50">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {i < process.length - 1 && (
                    <div className="mt-2 h-full min-h-[2.5rem] w-px bg-teal-900" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="thai-readable mt-2 text-sm leading-6 text-neutral-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Latest Insights"
          title="Latest SEO, AEO & GEO Insights"
          description="บทความล่าสุดจาก Saralak Search สำหรับอัปเดตมุมมองเรื่อง Google Search, AI Overviews, ChatGPT visibility และ search strategy"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {getLatestBlogPosts(3).map((post) => (
            <BlogCard key={post.slug} post={post} compact />
          ))}
        </div>
      </section>

      <FAQSection faqs={aboutFaqs} />

      {/* Final CTA */}
      <section className="bg-teal-950 px-4 pb-28 pt-16 text-center text-white sm:px-6 lg:px-8 lg:pb-16">
        <h2 className="text-3xl font-semibold md:text-4xl">
          อยากเพิ่มการมองเห็นบน Search?
        </h2>
        <p className="thai-readable mx-auto mt-4 max-w-2xl text-lg leading-8 text-teal-50">
          เริ่มต้นด้วย Discovery Audit เพื่อดูว่าเว็บไซต์มีโอกาสเติบโตตรงไหน
          และควรเริ่มปรับจากอะไร
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton to="/discovery-audit" variant="secondary">เริ่มต้นด้วย Discovery Audit</CTAButton>
          <a
            href="https://www.linkedin.com/in/saralakkaewkum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-2.5 text-center text-sm font-semibold leading-6 text-white transition hover:bg-white/10"
          >
            ดู LinkedIn Profile
          </a>
        </div>
      </section>
    </main>
  )
}
