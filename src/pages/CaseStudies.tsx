import { Link } from 'react-router-dom'
import CaseStudyCard from '../components/CaseStudyCard'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { caseStudies } from '../content/caseStudies'
import { caseStudiesFaqs } from '../content/faqs'

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
          ],
        }}
      />

      {/* Section 1: Hero */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-teal-400">Case Studies</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            ผลลัพธ์จริงจาก SEO, GEO
            <br className="hidden sm:block" />
            <span className="animate-gradient-text">และ AI Search</span>
          </h1>
          <p className="thai-readable mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            ตัวอย่างการเพิ่ม Organic Traffic, การติดอันดับคีย์เวิร์ดการแข่งขันสูง
            การปรากฏใน AI Overview และการถูกกล่าวถึงใน AI Search
            จากประสบการณ์การทำงานจริง
          </p>

          {/* Result preview grid */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {caseStudies.map((s) => (
              <div key={s.slug} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="font-bold text-white">{s.projectName}</p>
                <p className="mt-1 text-xs text-teal-400">{s.channel}</p>
              </div>
            ))}
          </div>
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
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="แนวทาง"
            title="แนวทางการทำงานของ Saralak Search"
            description="การเพิ่มการมองเห็นเกิดจากกระบวนการที่เป็นระบบ ไม่ใช่การทำ SEO แบบสุ่มหยิบ"
            tone="light"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workingFramework.map((item) => (
              <article
                key={item.step}
                className="group rounded-xl border border-white/8 bg-white/5 p-6 transition-all duration-150 hover:border-teal-500/30 hover:bg-white/8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-700 text-sm font-bold text-white shadow-lg shadow-teal-900/40">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-400">
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
