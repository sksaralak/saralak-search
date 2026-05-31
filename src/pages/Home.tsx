import CTAButton from '../components/CTAButton'
import BlogCard from '../components/BlogCard'
import FAQSection from '../components/FAQSection'
import PricingCard from '../components/PricingCard'
import ProofCard from '../components/ProofCard'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { getLatestBlogPosts } from '../content/blog'
import { faqJsonLd, homepageFaqs } from '../content/faqs'
import { brand, packages, proofItems, services } from '../content/site'

const baseUrl = 'https://saralak-search.com'

const credibility = [
  'เปลี่ยนการค้นหาให้เป็นลูกค้าและยอดขาย',
  'ดูทั้ง Google, Google Maps และ AI Search',
  'วางแผนจากข้อมูลจริง ไม่ใช่การเดา',
  'ทำงานได้ทั้งธุรกิจไทยและ Agency Partner',
]

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
  'Google Search Performance',
  'Search Ranking Improvement',
  'AI Overview Visibility',
  'ChatGPT Visibility',
]

export default function Home() {
  return (
    <main>
      <SEO
        title="Saralak Search | Business-focused SEO and AI Search Consultancy"
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
              founder: { '@id': `${baseUrl}/#saralak` },
              sameAs: [`https://${brand.linkedIn}`],
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
            faqJsonLd(homepageFaqs),
          ],
        }}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="self-center">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">
            Business-focused Search Growth
          </p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-[3.25rem]">
            เพิ่มการมองเห็น เพิ่มลูกค้าใหม่ และสร้างยอดขายจาก Search
          </h1>
          <section className="mt-6 rounded-lg border border-teal-100 bg-white p-5 shadow-sm shadow-neutral-950/5">
            <p className="thai-readable text-neutral-700">
              Saralak Search ช่วยธุรกิจให้ลูกค้าค้นเจอ ติดต่อ และตัดสินใจซื้อได้ง่ายขึ้น
              ผ่าน Google, Google Maps และ AI Search โดยวางแผนจากข้อมูลจริงและเป้าหมายการเติบโตของธุรกิจ
            </p>
          </section>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
            เหมาะสำหรับธุรกิจที่ต้องการเพิ่มลูกค้าใหม่จากช่องทางค้นหา และต้องการรู้ว่าควรโฟกัสอะไรเพื่อให้เว็บไซต์ช่วยสร้างโอกาสทางธุรกิจได้จริง
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact">เพิ่มการมองเห็น</CTAButton>
          </div>
        </div>
        <aside className="rounded-lg border border-teal-100 bg-white p-6 shadow-sm shadow-neutral-950/5">
          <p className="text-sm font-semibold uppercase text-teal-800">Business outcomes</p>
          <div className="mt-5 grid gap-3">
            {credibility.map((item) => (
              <div key={item} className="rounded-md border border-neutral-200 bg-neutral-50 p-4">
                <p className="font-medium text-neutral-950">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Search has changed"
            title="ลูกค้าไม่ได้เจอธุรกิจจาก Google อย่างเดียวอีกต่อไป"
            description="ลูกค้าอาจค้นหาผ่าน Google, Google Maps, AI Overview, ChatGPT, Gemini หรือ Perplexity ธุรกิจจึงต้องมีข้อมูลที่ชัด น่าเชื่อถือ และพร้อมถูกพบในหลายช่องทางค้นหา"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-6">
            {['Google', 'Google Maps', 'AI Overview', 'ChatGPT', 'Gemini', 'Perplexity'].map((surface) => (
              <div key={surface} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
                <h3 className="font-semibold text-neutral-950">{surface}</h3>
              </div>
            ))}
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
          <SectionHeader eyebrow="Engagement options" title="วิธีทำงานที่เลือกได้ตามเป้าหมายธุรกิจ" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => (
              <PricingCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title="SEO, AEO & GEO Insights"
          description="Practical insights on Google Search, AI Overviews, ChatGPT visibility, and modern search strategy."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {getLatestBlogPosts(4).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton to="/blog">View Blog</CTAButton>
          <CTAButton to="/about" variant="secondary">
            About Saralak
          </CTAButton>
        </div>
      </section>

      <FAQSection faqs={homepageFaqs} />
    </main>
  )
}
