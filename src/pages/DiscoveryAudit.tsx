import ContactActions from '../components/ContactActions'
import ContactForm from '../components/ContactForm'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import PricingCard from '../components/PricingCard'
import ProcessStep from '../components/ProcessStep'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { discoveryAuditFaqs } from '../content/faqs'

const problems = [
  'ลูกค้าค้นหาแบรนด์ไม่เจอ หรือเจอได้ยาก',
  'คู่แข่งมีการมองเห็นบน Google และ AI Search มากกว่า',
  'Google และ AI อาจไม่เข้าใจธุรกิจของคุณอย่างถูกต้อง',
  'ไม่รู้ว่าควรเริ่มแก้จุดไหนก่อนเพื่อให้คุ้มค่าที่สุด',
]

const deliverables = [
  'สรุปการมองเห็นบน Google และ AI Search',
  'เปรียบเทียบการมองเห็นกับคู่แข่ง',
  'Roadmap ที่เรียงลำดับความสำคัญแล้ว',
  'โอกาสสำคัญและสิ่งที่ขวางการเติบโต',
  'ประชุมเพื่อวางแผนขั้นตอนต่อไป',
]

const workflow = [
  ['01', 'แชร์ข้อมูลเบื้องต้น', 'ส่ง URL เว็บไซต์ เป้าหมายธุรกิจ และปัญหาการมองเห็นที่พบอยู่'],
  ['02', 'วิเคราะห์การมองเห็น', 'ตรวจว่าแบรนด์ปรากฏอย่างไรบน Google, AI Search และ Local Search'],
  ['03', 'เปรียบเทียบคู่แข่ง', 'หาจุดที่คู่แข่งได้เปรียบด้านการค้นพบ ความเข้าใจ และความน่าเชื่อถือ'],
  ['04', 'จัดลำดับโอกาสเติบโต', 'ระบุสิ่งที่ควรแก้ก่อนเพื่อให้เกิดผลลัพธ์ชัดเจนที่สุด'],
  ['05', 'ประชุมวางแผนต่อ', 'รีวิว Roadmap และตัดสินใจระดับการสนับสนุนที่เหมาะสม'],
]

const checks = [
  'โอกาสที่ลูกค้าจะค้นพบแบรนด์',
  'การมองเห็นเทียบกับคู่แข่ง',
  'การมองเห็นบน Google Search',
  'ความเข้าใจของ AI Search ต่อแบรนด์',
  'การมองเห็นในพื้นที่ (ถ้าเกี่ยวข้อง)',
  'ความน่าเชื่อถือและ Brand Authority',
  'ลำดับความสำคัญในการเติบโต',
]

export default function DiscoveryAudit() {
  return (
    <main>
      <SEO
        title="Discovery Audit: ค้นหาโอกาสเติบโตบน Google และ AI Search | Saralak Search"
        description="Discovery Audit ช่วยวิเคราะห์ว่าเว็บไซต์กำลังพลาดโอกาสตรงไหน บน Google Search, AI Overview และ Google Maps พร้อม Roadmap และ Quick Wins ที่นำไปใช้ได้จริง"
        path="/discovery-audit"
        image="/image/og/saralak-search-discovery-audit-og.png"
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
          ],
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">
            Discovery Audit
          </p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            เว็บไซต์กำลังเสียโอกาสตรงไหน?
          </h1>
          <p className="thai-readable mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            ค้นหาปัญหาที่ทำให้เว็บไซต์ไม่ติด Google ไม่ถูก AI แนะนำ และพลาดโอกาสทางธุรกิจ ก่อนตัดสินใจลงทุนเพิ่ม
          </p>
          <p className="thai-readable mt-4 max-w-3xl leading-7 text-neutral-700">
            เหมาะสำหรับธุรกิจที่ต้องการเข้าใจ visibility gaps, โอกาสการเติบโต,
            คู่แข่ง และความเข้าใจของ Google หรือ AI Search ก่อนเปลี่ยนเป็น action plan
            เพื่อเพิ่ม Brand Visibility ในระยะยาว
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact">เริ่มต้นด้วย Discovery Audit</CTAButton>
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
            title="เน้นสิ่งที่ชี้ว่าควรเพิ่ม Brand Visibility จากจุดไหนก่อน"
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
          <SectionHeader
            eyebrow="สิ่งที่จะได้รับ"
            title="Action plan สำหรับเพิ่ม Brand Visibility"
          />
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
          title="Discovery Audit"
          description="ค้นหาโอกาสในการเติบโตบน Google Search, AI Search และ Google Maps ก่อนตัดสินใจลงทุนระยะยาว"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <PricingCard
            title="Starter"
            price="5,000 THB"
            detail="เหมาะกับธุรกิจที่ต้องการเข้าใจการมองเห็นปัจจุบันบน Google และ AI Search"
          />
          <PricingCard
            title="Growth"
            price="12,000 THB"
            badge="ยอดนิยม"
            detail="เหมาะกับธุรกิจที่ต้องการ Roadmap เรียงลำดับความสำคัญและวิเคราะห์คู่แข่ง"
          />
          <PricingCard
            title="Enterprise"
            price="Custom Pricing"
            detail="เหมาะกับเว็บไซต์ขนาดใหญ่ ธุรกิจหลายสาขา หรือแบรนด์ระดับองค์กร"
          />
        </div>
        <div className="mt-10 rounded-lg border border-neutral-200 bg-[#fbfaf6] p-6">
          <h2 className="text-xl font-semibold text-neutral-950">คำถามที่ Audit ช่วยตอบ</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              'ลูกค้าค้นพบแบรนด์ได้ง่ายแค่ไหน?',
              'เราถูกมองเห็นได้มากแค่ไหนเมื่อเทียบกับคู่แข่ง?',
              'Google และ AI เข้าใจธุรกิจของเราดีแค่ไหน?',
              'อะไรกำลังขวางการเติบโตของเว็บไซต์?',
              'ควรเริ่มแก้จากจุดไหนก่อนเพื่อให้ได้ผลลัพธ์เร็วที่สุด?',
            ].map((question) => (
              <p key={question} className="thai-readable leading-7 text-neutral-700">
                {question}
              </p>
            ))}
          </div>
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
        <ContactActions align="center" className="mt-8" lineSource="discovery_cta" />
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
