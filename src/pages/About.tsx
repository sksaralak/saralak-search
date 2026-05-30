import CTAButton from '../components/CTAButton'
import BlogCard from '../components/BlogCard'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { getLatestBlogPosts } from '../content/blog'
import { type FAQItem, faqJsonLd } from '../content/faqs'

const trustBadges = ['9+ ปี SEO Experience', 'Google Search', 'Google Maps', 'AI Search']

const capabilities = [
  {
    title: 'Technical SEO',
    description: 'ปรับปรุงโครงสร้างเว็บไซต์ การเก็บข้อมูล และการจัดทำดัชนี',
  },
  {
    title: 'Content SEO',
    description: 'วางกลยุทธ์เนื้อหาตาม Search Intent และ Topical Authority',
  },
  {
    title: 'AEO',
    description: 'เพิ่มโอกาสในการปรากฏใน AI Overview และ Answer Engines',
  },
  {
    title: 'GEO',
    description: 'เพิ่มโอกาสในการถูกอ้างอิงใน ChatGPT และ AI Search',
  },
  {
    title: 'Local SEO',
    description: 'เพิ่มการมองเห็นสำหรับธุรกิจที่มีพื้นที่ให้บริการ',
  },
  {
    title: 'Local Brand Visibility',
    description: 'เพิ่มประสิทธิภาพ Google Business Profile และ Local Visibility',
  },
]

const industries = [
  {
    title: 'Travel',
    description: 'โรงแรม เที่ยวบิน กิจกรรม และธุรกิจท่องเที่ยว',
  },
  {
    title: 'Beauty',
    description: 'Haircare, Skincare และ Personal Care',
  },
  {
    title: 'Ecommerce',
    description: 'Product Listing, Category SEO และ Organic Growth',
  },
  {
    title: 'SaaS',
    description: 'B2B Acquisition และ Organic Growth',
  },
  {
    title: 'Local Business',
    description: 'Google Maps และ Location Visibility',
  },
  {
    title: 'Agency Partner Support',
    description: 'SEO Audit, Strategy และ Consulting Support',
  },
]

const selectedResults = [
  {
    title: 'อันดับ #5 → #1',
    description: 'SEO Ranking Growth',
  },
  {
    title: 'ติด AI Overview',
    description: 'Answer Engine Visibility',
  },
  {
    title: 'ถูก ChatGPT แนะนำ',
    description: 'AI Search Mention',
  },
  {
    title: 'Organic Visibility เติบโต',
    description: 'Search Performance Growth',
  },
]

const process = [
  {
    title: 'Brand Visibility Audit',
    description: 'วิเคราะห์เว็บไซต์และโอกาสการเติบโต',
  },
  {
    title: 'Visibility Analysis',
    description: 'วิเคราะห์การมองเห็นบน Search',
  },
  {
    title: 'SEO / GEO Roadmap',
    description: 'วางแผนการเติบโตที่นำไปปฏิบัติได้จริง',
  },
  {
    title: 'Implementation Support',
    description: 'สนับสนุนการนำแผนไปใช้งาน',
  },
  {
    title: 'Measurement & Optimization',
    description: 'วัดผลและปรับปรุงอย่างต่อเนื่อง',
  },
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
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Person',
              name: 'Saralak Kaewkum',
              jobTitle: 'Founder and SEO, GEO and AI Search Consultant',
              worksFor: {
                '@type': 'Organization',
                name: 'Saralak Search',
                url: 'https://saralak-search.com',
              },
              knowsAbout: [
                'SEO',
                'AEO',
                'GEO',
                'Technical SEO',
                'Content SEO',
                'Local Brand Visibility',
                'Increase Brand Visibility',
                'Local SEO',
              ],
            },
            {
              '@type': 'Organization',
              name: 'Saralak Search',
              url: 'https://saralak-search.com',
              description:
                'SEO, GEO and AI Search Consultancy founded and operated by Saralak Kaewkum.',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://saralak-search.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'About',
                  item: 'https://saralak-search.com/about',
                },
              ],
            },
            faqJsonLd(aboutFaqs),
          ],
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">
            เกี่ยวกับ Saralak Search
          </p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            ทำให้ SEO เข้าใจง่าย
            <br />
            และเชื่อมกับการเติบโตของธุรกิจจริง
          </h1>
          <div className="thai-readable mt-6 max-w-3xl space-y-3 text-lg leading-8 text-neutral-700">
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
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="แนวคิดของ Saralak Search"
            title="Search ไม่ควรเป็นเรื่องซับซ้อน"
          />
          <div className="thai-readable mt-8 max-w-4xl space-y-5 text-lg leading-8 text-neutral-700">
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
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ความเชี่ยวชาญ"
            title="Saralak Search ทำอะไร"
            description="งานหลักคือการช่วยให้ธุรกิจมีโครงสร้างเว็บไซต์ คอนเทนต์ และข้อมูลที่เหมาะกับการถูกค้นพบทั้งบน Google, AI Search และ Google Maps"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
                <h3 className="font-semibold text-neutral-950">{item.title}</h3>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="อุตสาหกรรม"
          title="อุตสาหกรรมที่เคยดูแล"
          description="ประสบการณ์ครอบคลุมธุรกิจที่ต้องพึ่งพา Search เพื่อสร้างการมองเห็น ลูกค้าใหม่ และการเติบโต"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <article key={item.title} className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="font-semibold text-neutral-950">{item.title}</h3>
              <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ผลลัพธ์" title="ตัวอย่างผลลัพธ์จากงานจริง" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {selectedResults.map((item) => (
              <article key={item.title} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
                <p className="text-xl font-semibold leading-tight text-neutral-950">{item.title}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-teal-800">
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="กระบวนการ" title="วิธีการทำงาน" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {process.map((item, index) => (
            <article key={item.title} className="rounded-lg border border-neutral-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-semibold text-neutral-950">{item.title}</h3>
              <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FAQSection faqs={aboutFaqs} />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-neutral-950 md:text-4xl">
          อยากเพิ่มการมองเห็นบน Search?
        </h2>
        <p className="thai-readable mx-auto mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
          เริ่มต้นด้วย Brand Visibility Audit เพื่อดูว่าเว็บไซต์มีโอกาสเติบโตตรงไหน
          และควรเริ่มปรับจากอะไร
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton to="/discovery-audit">ขอรับ Brand Visibility Audit</CTAButton>
        </div>
      </section>
    </main>
  )
}
