import ContactForm from '../components/ContactForm'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import PricingCard from '../components/PricingCard'
import ProcessStep from '../components/ProcessStep'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { discoveryAuditFaqs, faqJsonLd } from '../content/faqs'

const problems = [
  'เว็บไซต์ไม่ติด Google ในคำค้นที่ควรเจอ',
  'คอนเทนต์ยังไม่ถูก AI Overview หรือ AI Search ดึงไปใช้',
  'ไม่รู้ว่างานไหนควรแก้ก่อนเพื่อให้คุ้มงบ',
  'Google Maps หรือ Local Visibility ยังไม่สร้างลูกค้าเท่าที่ควร',
]

const deliverables = [
  'รายงาน Google Doc หรือ PDF',
  'Priority Matrix สำหรับสิ่งที่ควรแก้ก่อน',
  'ตัวอย่างปัญหาพร้อม screenshots',
  'Action Plan ที่นำไปใช้ต่อได้',
  'Present ผล Audit และคำแนะนำสำคัญ',
]

const workflow = [
  ['01', 'ส่ง URL และปัญหาที่พบ', 'แชร์เว็บไซต์ เป้าหมายธุรกิจ และสิ่งที่อยากให้ตรวจเป็นพิเศษ'],
  ['02', 'วิเคราะห์ SEO และ AI Visibility', 'ดูการมองเห็นบน Google, AI Search และ Google Maps เท่าที่เกี่ยวข้อง'],
  ['03', 'จัดทำรายงานพร้อม Priority Matrix', 'แยกปัญหาตามผลกระทบ ความเร่งด่วน และความคุ้มค่าในการแก้'],
  ['04', 'Present ผล Audit', 'สรุปสิ่งที่พบ เหตุผล และทิศทางที่ควรตัดสินใจต่อ'],
  ['05', 'ส่ง Action Plan', 'ส่งลำดับงานที่ทีมสามารถนำไปทำต่อได้จริง'],
]

const checks = [
  'Technical SEO และ indexation',
  'Content gaps และ search intent',
  'Internal linking และ site structure',
  'AI Overview / AEO readiness',
  'GEO และ AI Search visibility',
  'Google Maps และ Local SEO ถ้าเกี่ยวข้อง',
  'Quick wins และ priority actions',
]

export default function DiscoveryAudit() {
  return (
    <main>
      <SEO
        title="Discovery Audit สำหรับ SEO, GEO และ AI Search | Saralak Search"
        description="Discovery Audit ช่วยค้นหาปัญหาที่ทำให้เว็บไซต์ไม่ติด Google ไม่ถูก AI แนะนำ และเสียโอกาสทางธุรกิจ พร้อม Priority Matrix และ Action Plan"
        path="/discovery-audit"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Discovery Audit',
              provider: { '@type': 'ProfessionalService', name: 'Saralak Search' },
              areaServed: 'Thailand',
              offers: { '@type': 'AggregateOffer', lowPrice: '5000', priceCurrency: 'THB' },
            },
            faqJsonLd(discoveryAuditFaqs),
          ],
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Discovery Audit</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            เว็บไซต์กำลังเสียโอกาสตรงไหน?
          </h1>
          <p className="thai-readable mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            ค้นหาปัญหาที่ทำให้เว็บไซต์ไม่ติด Google ไม่ถูก AI แนะนำ และพลาดโอกาสทางธุรกิจ ก่อนตัดสินใจลงทุนเพิ่ม
          </p>
          <p className="thai-readable mt-4 max-w-3xl leading-7 text-neutral-700">
            เหมาะสำหรับธุรกิจที่ต้องการตัดสินใจจากข้อมูลจริง ก่อนลงทุนกับ SEO, Google Maps
            หรือ AI Search ในระยะยาว
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact">ขอรับ Discovery Audit</CTAButton>
            <CTAButton to="/case-studies" variant="secondary">
              ดูตัวอย่างผลงาน
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ปัญหาที่ Audit ช่วยตอบ"
            title="รู้ว่าควรแก้อะไรก่อน เพื่อไม่เสียเวลาและงบประมาณ"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => (
              <article key={problem} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
                <p className="thai-readable font-semibold leading-7 text-neutral-950">{problem}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="สิ่งที่ตรวจ"
            title="เน้นสิ่งที่มีผลต่อการเติบโตและการตัดสินใจ"
          />
          <div className="mt-8 grid gap-3">
            {checks.map((check) => (
              <div key={check} className="rounded-md border border-neutral-200 bg-white p-4">
                <p className="font-medium text-neutral-950">{check}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="สิ่งที่จะได้รับ" title="รายงานที่ใช้ตัดสินใจได้จริง" />
          <div className="mt-8 grid gap-3">
            {deliverables.map((deliverable) => (
              <div key={deliverable} className="rounded-md border border-teal-100 bg-white p-4">
                <p className="font-medium text-neutral-950">{deliverable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ขั้นตอน" title="ขั้นตอนการทำงาน" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {workflow.map(([step, title, description]) => (
              <ProcessStep key={title} step={step} title={title} description={description} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ราคา"
          title="เริ่มจาก Audit ก่อน แล้วค่อยตัดสินใจเรื่องการทำต่อ"
          description="แต่ละแพ็กเกจปรับตามขนาดเว็บไซต์ ความซับซ้อน และจำนวนพื้นที่ที่ต้องวิเคราะห์"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <PricingCard
            title="Discovery Audit"
            price="5,000 THB"
            detail="เหมาะกับเว็บไซต์ขนาดเล็ก local business หรือ service website ที่ต้องการรู้จุดเริ่มต้น"
          />
          <PricingCard
            title="Growth Audit"
            price="12,000 THB"
            detail="เหมาะกับ SME, content site หรือ lead-generation website ที่ต้องการ roadmap ชัดเจน"
          />
          <PricingCard
            title="Enterprise Audit"
            price="from 18,000 THB"
            detail="เหมาะกับ e-commerce, เว็บไซต์ขนาดใหญ่ หรือธุรกิจที่มีหลายหมวดหมู่และหลายตลาด"
          />
        </div>
      </section>

      <FAQSection faqs={discoveryAuditFaqs} />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Request Audit"
          title="ส่งเว็บไซต์หรือปัญหาที่อยากให้ตรวจมาได้เลย"
          description="หากต้องการคำตอบเร็ว แนะนำให้ติดต่อผ่าน LINE หรืออีเมลก่อน หรือใช้ฟอร์มด้านล่างได้"
        />
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
