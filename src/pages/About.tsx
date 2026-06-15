import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import BlogCard from '../components/BlogCard'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { getLatestBlogPosts } from '../content/blog'
import type { FAQItem } from '../content/faqs'

const trustBadges = ['9+ ปี SEO Experience', 'Google Search', 'Google Maps', 'AI Search']

const stats = [
  { value: '9+', label: 'ปี SEO Experience' },
  { value: '6', label: 'Active Clients' },
  { value: '#1', label: 'Keyword Rankings' },
  { value: '3', label: 'AI Search Channels' },
]

const capabilities = [
  {
    title: 'Technical SEO',
    description: 'ปรับปรุงโครงสร้างเว็บไซต์ การเก็บข้อมูล และการจัดทำดัชนี',
    color: 'border-teal-500',
    link: '/blog/what-is-seo',
  },
  {
    title: 'Content SEO',
    description: 'วางกลยุทธ์เนื้อหาตาม Search Intent และ Topical Authority',
    color: 'border-teal-600',
    link: '/blog/what-is-seo',
  },
  {
    title: 'AEO',
    description: 'เพิ่มโอกาสในการปรากฏใน AI Overview และ Answer Engines',
    color: 'border-sky-500',
    link: '/blog/what-is-aeo',
  },
  {
    title: 'GEO',
    description: 'เพิ่มโอกาสในการถูกอ้างอิงใน ChatGPT และ AI Search',
    color: 'border-indigo-500',
    link: '/blog/what-is-geo',
  },
  {
    title: 'Local SEO',
    description: 'เพิ่มการมองเห็นสำหรับธุรกิจที่มีพื้นที่ให้บริการ',
    color: 'border-emerald-500',
    link: '/blog/seo-geo-aeo',
  },
  {
    title: 'Google Maps Optimization',
    description: 'เพิ่มประสิทธิภาพ Google Business Profile และ Local Visibility',
    color: 'border-amber-500',
    link: '/services',
  },
]

const industries = [
  { title: 'Travel', description: 'โรงแรม เที่ยวบิน กิจกรรม และธุรกิจท่องเที่ยว' },
  { title: 'Beauty', description: 'Haircare, Skincare และ Personal Care' },
  { title: 'Ecommerce', description: 'Product Listing, Category SEO และ Organic Growth' },
  { title: 'SaaS', description: 'B2B Acquisition และ Organic Growth' },
  { title: 'Local Business', description: 'Google Maps และ Location Visibility' },
  { title: 'Monthly SEO Advisor', description: 'SEO Audit, Strategy และ Consulting Support' },
]

const selectedResults = [
  { title: 'อันดับ #5 → #1', description: 'SEO Ranking Growth' },
  { title: 'ติด AI Overview', description: 'Answer Engine Visibility' },
  { title: 'ถูก ChatGPT แนะนำ', description: 'AI Search Mention' },
  { title: 'Organic Visibility เติบโต', description: 'Search Performance Growth' },
]

const process = [
  { title: 'Discovery Audit', description: 'วิเคราะห์เว็บไซต์และโอกาสการเติบโต' },
  { title: 'Visibility Analysis', description: 'วิเคราะห์การมองเห็นบน Search' },
  { title: 'SEO / GEO Roadmap', description: 'วางแผนการเติบโตที่นำไปปฏิบัติได้จริง' },
  { title: 'Implementation Support', description: 'สนับสนุนการนำแผนไปใช้งาน' },
  { title: 'Measurement & Optimization', description: 'วัดผลและปรับปรุงอย่างต่อเนื่อง' },
]

const aboutFaqs: FAQItem[] = [
  {
    question: 'SEO ใช้เวลานานแค่ไหน?',
    answer:
      'ขึ้นอยู่กับการแข่งขันของตลาด สภาพเว็บไซต์เดิม และความเร็วในการลงมือทำ โดยทั่วไปอาจเริ่มเห็นสัญญาณใน 2–4 เดือน และเห็นผลชัดขึ้นในช่วง 6–12 เดือน',
  },
  {
    question: 'GEO คืออะไร?',
    answer:
      'GEO หรือ Generative Engine Optimization คือการปรับข้อมูล แบรนด์ คอนเทนต์ และโครงสร้างเว็บไซต์ให้มีโอกาสถูกเข้าใจ อ้างอิง หรือแนะนำใน ChatGPT, Gemini, Perplexity และ AI Search',
  },
  {
    question: 'AEO คืออะไร?',
    answer:
      'AEO หรือ Answer Engine Optimization คือการทำให้เนื้อหาตอบคำถามได้ชัดเจนขึ้น เพื่อเพิ่มโอกาสปรากฏใน AI Overview, featured answers และระบบค้นหาแบบคำตอบ',
  },
  {
    question: 'AI Search ต่างจาก Google Search อย่างไร?',
    answer:
      'Google Search แบบเดิมแสดงรายการผลลัพธ์ให้ผู้ใช้เลือก ส่วน AI Search มักสรุปคำตอบหรือแนะนำตัวเลือกโดยดึงข้อมูลจากหลายแหล่ง เว็บไซต์จึงต้องมีข้อมูลที่ชัดเจนและน่าเชื่อถือมากขึ้น',
  },
  {
    question: 'Brand Visibility Audit คืออะไร?',
    answer:
      'Brand Visibility Audit คือการวิเคราะห์เว็บไซต์เพื่อดูปัญหา โอกาสการเติบโต และลำดับความสำคัญของงาน SEO, AEO, GEO, AI Search และ Google Maps ที่ควรทำก่อน',
  },
  {
    question: 'ธุรกิจแบบไหนเหมาะกับ SEO?',
    answer:
      'เหมาะกับธุรกิจที่ลูกค้ามักค้นหาข้อมูลก่อนตัดสินใจ เช่น Ecommerce, SaaS, โรงแรม, คลินิก, Local Business, B2B และธุรกิจบริการ',
  },
  {
    question: 'Local SEO คืออะไร?',
    answer:
      'Local SEO คือการเพิ่มการมองเห็นของธุรกิจในพื้นที่เฉพาะ ผ่าน Google Search, Google Maps และ Google Business Profile เพื่อให้ลูกค้าใกล้เคียงค้นเจอง่ายขึ้น',
  },
  {
    question: 'ทำไมต้องมีทั้ง SEO, AEO และ GEO?',
    answer:
      'เพราะพฤติกรรมค้นหาไม่ได้อยู่แค่ Google แบบเดิมอีกต่อไป ลูกค้าใช้ Google, AI Overview, ChatGPT, Gemini, Perplexity และ Google Maps ในการค้นหา เปรียบเทียบ และตัดสินใจ',
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
                'Search Engine Optimization',
                'Answer Engine Optimization',
                'Generative Engine Optimization',
                'Technical SEO',
                'Content SEO',
                'Entity SEO',
                'Structured Data',
                'Google Maps Visibility',
                'AI Search Optimization',
                'Local SEO',
                'Keyword Research',
                'Google Business Profile',
                'International SEO',
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
              sameAs: [
                'https://www.linkedin.com/company/saralak-search',
                'https://www.linkedin.com/in/saralakkaewkum',
              ],
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saralak-search.com/' },
                { '@type': 'ListItem', position: 2, name: 'About', item: 'https://saralak-search.com/about' },
              ],
            },
          ],
        }}
      />

      {/* Hero — 2-col with photo */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase text-teal-800">เกี่ยวกับ Saralak Search</p>
            <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              ทำให้ SEO เข้าใจง่าย
              <br />
              <span className="animate-gradient-text">และเชื่อมกับธุรกิจจริง</span>
            </h1>
            <div className="thai-readable mt-6 space-y-3 text-lg leading-8 text-neutral-700">
              <p>
                Saralak Search ช่วยธุรกิจเพิ่มการมองเห็นบน Google Search, Google Maps และ AI Search
                ผ่าน SEO, AEO และ GEO
              </p>
              <p>
                ก่อตั้งและดูแลโดย Saralak Kaewkum ผู้มีประสบการณ์ด้าน SEO มากกว่า 9 ปี
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-teal-100 bg-white px-3 py-2 text-sm font-semibold text-teal-950"
                >
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
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-teal-400 via-sky-400 to-teal-600 opacity-20 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-950/10">
                <img
                  src="/saralak-profile.png"
                  alt="Saralak Kaewkum — Founder of Saralak Search"
                  className="h-auto w-full max-w-sm object-cover"
                  width="400"
                  height="500"
                />
                <div className="border-t border-neutral-100 bg-white px-5 py-4">
                  <p className="font-semibold text-neutral-950">Saralak Kaewkum</p>
                  <p className="mt-0.5 text-sm text-teal-700">Founder · SEO, GEO &amp; AI Search Consultant</p>
                  <a
                    href="https://www.linkedin.com/in/saralakkaewkum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition hover:text-teal-700"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-teal-900 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-neutral-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="แนวคิดของ Saralak Search"
            title="Search ไม่ควรเป็นเรื่องซับซ้อน"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
            <div className="thai-readable space-y-5 text-lg leading-8 text-neutral-700">
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
              <p className="text-base text-neutral-500">
                อ่านเพิ่มเติม:{' '}
                <Link to="/blog/seo-geo-aeo" className="text-teal-700 hover:underline">SEO, AEO และ GEO ต่างกันอย่างไร</Link>
              </p>
            </div>
            <blockquote className="rounded-xl border-l-4 border-teal-500 bg-[#fbfaf6] px-6 py-5">
              <p className="thai-readable text-lg font-medium leading-8 text-neutral-800">
                "ธุรกิจที่เข้าใจ Search Journey ของลูกค้า และเตรียมตัวก่อน มีโอกาสได้เปรียบคู่แข่งในช่วงที่คนยังไม่แน่นหนา"
              </p>
              <footer className="mt-4 text-sm font-semibold text-teal-800">— Saralak Kaewkum</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ความเชี่ยวชาญ"
            title="Saralak Search ทำอะไร"
            description="งานหลักคือการช่วยให้ธุรกิจมีโครงสร้างเว็บไซต์ คอนเทนต์ และข้อมูลที่เหมาะกับการถูกค้นพบทั้งบน Google, AI Search และ Google Maps"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className={`group relative overflow-hidden rounded-xl border border-neutral-200 bg-[#fbfaf6] p-5 transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md`}
              >
                <div className={`absolute left-0 top-0 h-full w-1 ${item.color}`} />
                <h3 className="pl-3 font-semibold text-neutral-950 group-hover:text-teal-900">{item.title}</h3>
                <p className="thai-readable mt-2 pl-3 text-sm leading-6 text-neutral-700">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="อุตสาหกรรม"
          title="อุตสาหกรรมที่เคยดูแล"
          description="ประสบการณ์ครอบคลุมธุรกิจที่ต้องพึ่งพา Search เพื่อสร้างการมองเห็น ลูกค้าใหม่ และการเติบโต"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-sm"
            >
              <h3 className="font-semibold text-neutral-950">{item.title}</h3>
              <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ผลลัพธ์" title="ตัวอย่างผลลัพธ์จากงานจริง" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {selectedResults.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-neutral-200 bg-[#fbfaf6] p-6 text-center transition hover:border-teal-200 hover:shadow-sm"
              >
                <p className="text-2xl font-bold text-teal-900">{item.title}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton to="/case-studies" variant="secondary">
              ดู Case Studies ทั้งหมด
            </CTAButton>
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

      {/* Process */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="กระบวนการ" title="วิธีการทำงาน" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <article
                key={item.title}
                className="relative rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-semibold text-neutral-950">{item.title}</h3>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">{item.description}</p>
              </article>
            ))}
          </div>
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
