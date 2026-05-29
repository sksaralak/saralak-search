import CaseStudyCard from '../components/CaseStudyCard'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { caseStudies } from '../content/caseStudies'
import { caseStudiesFaqs, faqJsonLd } from '../content/faqs'

const selectedResults = [
  '#5 → #1 Ranking',
  'ChatGPT Mention',
  'AI Overview',
  'Organic Growth',
  'Google Maps Growth',
]

const searchVisibilitySteps = [
  {
    title: 'Technical SEO',
    description: 'Improve crawlability, indexation and site structure.',
  },
  {
    title: 'Content Optimization',
    description: 'Align content with search intent and user needs.',
  },
  {
    title: 'Internal Linking',
    description: 'Strengthen topical relevance and authority.',
  },
  {
    title: 'AEO',
    description: 'Improve answer visibility in AI-powered search.',
  },
  {
    title: 'GEO',
    description: 'Increase visibility across ChatGPT, Gemini and AI Search.',
  },
  {
    title: 'Local SEO / Google Maps',
    description: 'Improve local discoverability and map visibility.',
  },
  {
    title: 'Measurement & Reporting',
    description: 'Track rankings, visibility and business outcomes.',
  },
]

export default function CaseStudies() {
  return (
    <main>
      <SEO
        title="ตัวอย่างผลงาน SEO, AI Search และ Google Maps | Saralak Search"
        description="ตัวอย่างงานจริงจากการเพิ่มการมองเห็น ลูกค้าใหม่ และยอดขายผ่าน Google, Google Maps และ AI Search"
        path="/case-studies"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              name: 'Saralak Search Case Studies',
              about: [
                'SEO ranking growth',
                'ChatGPT visibility',
                'AI Overview visibility',
                'Google Maps visibility',
                'Technical SEO growth',
              ],
            },
            faqJsonLd(caseStudiesFaqs),
          ],
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Case Studies</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            ตัวอย่างผลงานจาก SEO, AI Search และ Google Maps
          </h1>
          <p className="thai-readable mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            หน้านี้แสดงหลักฐานจากงานจริงที่พิสูจน์ว่า Saralak Search สามารถช่วยเพิ่ม
            SEO ranking growth, AI Search visibility, Google Maps visibility และ organic growth
            ผ่านการวิเคราะห์ วางแผน และปรับเว็บไซต์จากข้อมูลจริง
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
            ตัวอย่างงานจริงจากการเพิ่มการมองเห็น ลูกค้าใหม่ และยอดขายผ่าน Google, Google Maps
            และ AI Search
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Selected Results" title="ผลลัพธ์ที่คัดมาให้เห็นภาพเร็ว" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {selectedResults.map((result) => (
              <article key={result} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
                <p className="text-sm font-semibold leading-6 text-neutral-950">{result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CASE STUDIES"
            title="ตัวอย่างผลลัพธ์จากงานจริง"
            description="แต่ละเคสแสดงโจทย์ วิธีทำงาน ช่องทางที่เกี่ยวข้อง และผลลัพธ์ เพื่อให้เห็นว่า Search สามารถช่วยสร้างการมองเห็น ลูกค้าใหม่ และโอกาสทางธุรกิจได้อย่างไร"
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Method"
          title="How We Create Search Visibility"
          description="การเพิ่มการมองเห็นไม่ได้เกิดจากงานชิ้นเดียว แต่เกิดจากการทำให้เว็บไซต์ คอนเทนต์ ข้อมูลธุรกิจ และการวัดผลทำงานร่วมกัน"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {searchVisibilitySteps.map((step) => (
            <article key={step.title} className="rounded-lg border border-neutral-200 bg-white p-5">
              <p className="font-semibold text-neutral-950">{step.title}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <FAQSection faqs={caseStudiesFaqs} />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-neutral-950 md:text-4xl">
          Want results like these for your business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
          We review your website, Google visibility, AI Search visibility and growth opportunities.
        </p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-teal-800">
          SEO • GEO • AEO • Google Maps
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton to="/discovery-audit">Request a Discovery Audit</CTAButton>
        </div>
      </section>
    </main>
  )
}
