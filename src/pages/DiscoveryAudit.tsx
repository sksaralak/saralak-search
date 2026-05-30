import ContactActions from '../components/ContactActions'
import ContactForm from '../components/ContactForm'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import PricingCard from '../components/PricingCard'
import ProcessStep from '../components/ProcessStep'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { discoveryAuditFaqs, faqJsonLd } from '../content/faqs'

const problems = [
  'Customers cannot discover your brand easily',
  'Competitors are more visible in Google and AI Search',
  'Google and AI platforms may not understand your business clearly',
  'Growth priorities are unclear before investing long term',
]

const deliverables = [
  'Visibility summary for Google and AI Search',
  'Competitor visibility comparison',
  'Prioritized growth roadmap',
  'Key opportunities and blockers',
  'Strategic consultation',
]

const workflow = [
  ['01', 'Share context', 'Share your website, business goals and visibility concerns.'],
  ['02', 'Review visibility', 'Review how your brand appears across Google, AI Search and local search.'],
  ['03', 'Compare competitors', 'Identify where competitors are easier to find, understand or trust.'],
  ['04', 'Prioritize growth', 'Clarify the opportunities that should be addressed first.'],
  ['05', 'Discuss next steps', 'Review the roadmap and decide the right level of support.'],
]

const checks = [
  'Customer discovery potential',
  'Competitor visibility',
  'Google Search visibility',
  'AI Search understanding',
  'Local visibility when relevant',
  'Brand authority and trust signals',
  'Growth priorities',
]

export default function DiscoveryAudit() {
  return (
    <main>
      <SEO
        title="Brand Visibility Audit for Google and AI Search | Saralak Search"
        description="Understand what is limiting your visibility on Google and AI Search before investing in long-term growth."
        path="/discovery-audit"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Brand Visibility Audit',
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
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">
            Brand Visibility Audit
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
            <CTAButton to="/contact">ขอรับ Brand Visibility Audit</CTAButton>
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
          title="Brand Visibility Audit"
          description="Understand what is limiting your visibility on Google and AI Search before investing in long-term growth."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <PricingCard
            title="Starter"
            price="5,000 THB"
            detail="For businesses that want to understand their current visibility on Google and AI Search."
          />
          <PricingCard
            title="Growth"
            price="12,000 THB"
            badge="Most Popular"
            detail="For businesses that need a prioritized growth roadmap and competitor analysis."
          />
          <PricingCard
            title="Enterprise"
            price="Custom Pricing"
            detail="For large websites, multi-location businesses or international brands."
          />
        </div>
        <div className="mt-10 rounded-lg border border-neutral-200 bg-[#fbfaf6] p-6">
          <h2 className="text-xl font-semibold text-neutral-950">Questions we help answer</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              'How easily can customers discover your brand?',
              'How visible are you compared to competitors?',
              'How well do Google and AI platforms understand your business?',
              'What is limiting your growth potential?',
              'What should be prioritized first?',
            ].map((question) => (
              <p key={question} className="leading-7 text-neutral-700">
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
        <ContactActions align="center" className="mt-8" />
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
