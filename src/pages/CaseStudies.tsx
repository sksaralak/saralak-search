import { Link } from 'react-router-dom'
import CaseStudyCard from '../components/CaseStudyCard'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { caseStudies } from '../content/caseStudies'
import { caseStudiesFaqs, faqJsonLd } from '../content/faqs'

const trustSignals = [
  'ประสบการณ์ SEO ตั้งแต่ปี 2016',
  'เชี่ยวชาญ SEO, GEO และ AEO',
  'เคยดูแลเว็บไซต์ในหลายอุตสาหกรรม',
  'ทำงานบนข้อมูลจริง ไม่ใช่การคาดเดา',
  'เน้นผลลัพธ์ทางธุรกิจมากกว่า Traffic เพียงอย่างเดียว',
]

const workingFramework = [
  {
    step: '1',
    title: 'วิเคราะห์โอกาสจากข้อมูลการค้นหา',
    description:
      'ใช้ข้อมูลจริงเพื่อค้นหาว่าลูกค้ากำลังมองหาอะไร เว็บไซต์พลาดโอกาสตรงไหน และควรเริ่มจากจุดใดเพื่อสร้างผลลัพธ์ที่คุ้มค่าที่สุด',
  },
  {
    step: '2',
    title: 'วางโครงสร้างเว็บไซต์ให้ตรงกับความต้องการของผู้ค้นหา',
    description:
      'จัดระเบียบเนื้อหาและหน้าเว็บไซต์ให้ตอบคำถามของลูกค้าได้ชัดเจน พร้อมรองรับทั้ง Google และ AI Search',
  },
  {
    step: '3',
    title: 'สร้างเนื้อหาที่ช่วยให้ลูกค้าตัดสินใจ',
    description:
      'พัฒนาเนื้อหาที่ให้คำตอบอย่างชัดเจน น่าเชื่อถือ และมีประโยชน์ต่อทั้งผู้ใช้งาน Google และ AI Search',
  },
  {
    step: '4',
    title: 'สร้างความน่าเชื่อถือให้แบรนด์และเว็บไซต์',
    description:
      'พัฒนา Signal และข้อมูลอ้างอิงที่ช่วยให้ Google, AI Overview และ ChatGPT เข้าใจธุรกิจและเชื่อมโยงแบรนด์ได้ถูกต้อง',
  },
  {
    step: '5',
    title: 'วัดผลและพัฒนาจากข้อมูลจริง',
    description:
      'ติดตามผลลัพธ์อย่างต่อเนื่อง วิเคราะห์สิ่งที่ได้ผลและสิ่งที่ควรปรับปรุง เพื่อเพิ่มการมองเห็นและโอกาสทางธุรกิจในระยะยาว',
  },
]

export default function CaseStudies() {
  return (
    <main>
      <SEO
        title="Case Studies: ผลลัพธ์จริงจาก SEO, GEO และ AI Search | Saralak Search"
        description="รวมตัวอย่าง Case Studies และผลลัพธ์จริงจาก SEO, GEO, AI Search และ Google Maps เช่น การเพิ่ม Organic Traffic, การปรากฏใน AI Overview และการถูกกล่าวถึงใน ChatGPT"
        path="/case-studies"
        image="/image/og/saralak-search-case-studies-og.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              name: 'Case Studies: ผลลัพธ์จริงจาก SEO, GEO และ AI Search',
              description:
                'Real case studies from SEO, GEO and AI Search — including ranking growth, ChatGPT visibility, AI Overview and Organic Traffic growth.',
              url: 'https://saralak-search.com/case-studies',
            },
            {
              '@type': 'ItemList',
              name: 'Saralak Search Case Studies',
              itemListElement: caseStudies.map((study, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'CreativeWork',
                  name: study.projectName,
                  description: study.businessImpact,
                  about: {
                    '@type': 'Thing',
                    name: study.result,
                  },
                },
              })),
            },
            faqJsonLd(caseStudiesFaqs),
          ],
        }}
      />

      {/* Section 1: Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Case Studies</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            ผลลัพธ์จริงจาก SEO, GEO
            <br className="hidden sm:block" />
            และ AI Search
          </h1>
          <p className="thai-readable mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            ตัวอย่างการเพิ่ม Organic Traffic, การติดอันดับคีย์เวิร์ดการแข่งขันสูง
            การปรากฏใน AI Overview และการถูกกล่าวถึงใน AI Search
            จากประสบการณ์การทำงานจริง
          </p>
          <p className="thai-readable mt-4 max-w-3xl leading-8 text-neutral-600">
            ทุกธุรกิจมีโอกาสเติบโตผ่าน Search Visibility หากเข้าใจ Search Intent,
            Website Structure และการทำงานของ Google และ AI Search อย่างถูกต้อง
          </p>
        </div>
      </section>

      {/* Section 2: Trust Signals — compact, before evidence */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="font-semibold text-neutral-950">
            ทำไมลูกค้าจึงให้ Saralak Search ช่วยวิเคราะห์เว็บไซต์
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {trustSignals.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="mt-0.5 shrink-0 font-bold text-teal-700" aria-hidden="true">
                  ✓
                </span>
                <span className="thai-readable">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: Case Studies — 1 row per case, all content visible */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="ตัวอย่างผลลัพธ์จากงานจริง"
          description="แต่ละเคสแสดงปัญหา แนวทาง ผลลัพธ์ และหลักฐานจากงานจริง"
        />
        <div className="mt-8 grid gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* Section 4: Working Framework */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="แนวทาง"
            title="แนวทางการทำงานของ Saralak Search"
            description="การเพิ่มการมองเห็นเกิดจากกระบวนการที่เป็นระบบ ไม่ใช่การทำ SEO แบบสุ่มหยิบ"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workingFramework.map((item) => (
              <article
                key={item.step}
                className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5"
              >
                <p className="text-2xl font-bold text-teal-900">{item.step}</p>
                <h3 className="mt-2 font-semibold text-neutral-950">{item.title}</h3>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <FAQSection faqs={caseStudiesFaqs} />

      {/* Section 6: Discovery Audit CTA — pb-28 clears mobile floating bar */}
      <section className="bg-teal-950 px-4 pb-28 pt-16 text-center text-white sm:px-6 lg:px-8 lg:pb-16">
        <h2 className="text-3xl font-semibold md:text-4xl">
          อยากรู้ว่าเว็บไซต์ของคุณมีโอกาสแบบไหน?
        </h2>
        <p className="thai-readable mx-auto mt-4 max-w-xl text-lg leading-8 text-teal-50">
          เริ่มต้นด้วย Discovery Audit เพื่อค้นหาโอกาสในการเติบโตผ่าน Google Search,
          AI Search และ Search Visibility
        </p>
        <ul className="mx-auto mt-5 max-w-xs space-y-2 text-left text-teal-100">
          {[
            'โอกาสจาก SEO',
            'โอกาสจาก AI Search',
            'ปัญหาเชิงโครงสร้างเว็บไซต์',
            'Quick Wins ที่ควรทำก่อน',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-teal-400" aria-hidden="true">
                →
              </span>
              <span className="thai-readable">{item}</span>
            </li>
          ))}
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
