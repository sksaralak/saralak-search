import AnswerBlock from '../components/AnswerBlock'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import ProofCard from '../components/ProofCard'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { faqJsonLd, proofFaqs } from '../content/faqs'
import { brand, proofItems } from '../content/site'

const tools = [
  'Google Search Console',
  'Google Analytics 4',
  'Ahrefs',
  'Semrush',
  'Screaming Frog',
  'Google Keyword Planner',
]

export default function Proof() {
  return (
    <main>
      <SEO
        title="ตัวอย่างงาน SEO และ AI Search Visibility | Saralak Search"
        description="รวมตัวอย่างหลักฐานจากงานจริง เช่น การเติบโตของ Organic Traffic, อันดับคีย์เวิร์ด, การปรากฏใน AI Overview และการถูกแนะนำใน ChatGPT โดยปกปิดข้อมูลลูกค้าที่อ่อนไหวแล้ว"
        path="/proof"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [faqJsonLd(proofFaqs)],
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Proof</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            ตัวอย่างงาน SEO และ AI Search Visibility
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            รวมตัวอย่างหลักฐานจากงานจริง เช่น การเติบโตของ Organic Traffic, อันดับคีย์เวิร์ด,
            การปรากฏใน AI Overview และการถูกแนะนำใน ChatGPT โดยปกปิดข้อมูลลูกค้าที่อ่อนไหวแล้ว
          </p>
        </div>
      </section>

      <AnswerBlock>
        ตัวอย่างผลงานในหน้านี้แสดงหลักฐานจากงานจริง เช่น Organic Traffic, Keyword Ranking, AI Overview และ ChatGPT Visibility โดยปกปิดข้อมูลลูกค้าที่อ่อนไหวแล้ว
      </AnswerBlock>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Result blocks"
            title="หลักฐานจากงานจริงที่ช่วยให้เห็นภาพชัดขึ้น"
            description="ตัวอย่างเหล่านี้แสดงประเภทของผลลัพธ์ที่ใช้ประกอบการวิเคราะห์ SEO, Content Strategy, AI Search และ Reporting โดยไม่เปิดเผยข้อมูลลูกค้าที่อ่อนไหว"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {proofItems.map((item) => (
              <ProofCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Mini case study"
          title="ตัวอย่างกระบวนการทำงาน Content SEO"
          description="งาน SEO ที่ดีไม่จบแค่ keyword list แต่ต้องเชื่อม research, content outline, on-page direction และการวัดผลให้ทีมทำต่อได้"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-5">
          {[
            ['Problem', 'คอนเทนต์มีหลายหัวข้อ แต่ยังขาด SEO direction และ publishing plan ที่ชัดเจน'],
            ['Work done', 'ทำ topic research, content outline, SEO optimization direction และ upload support'],
            ['Output', 'ได้ content pipeline และ article planning assets ที่ทีมสามารถนำไปใช้ต่อได้'],
            ['Value', 'ลดความไม่ชัดเจนของงานคอนเทนต์ และทำให้เห็นลำดับงานที่ควรทำก่อน'],
            ['Next opportunity', 'ต่อยอดจาก content work ไปสู่ SEO, AEO และ reporting support รายเดือน'],
          ].map(([title, description]) => (
            <article key={title} className="rounded-lg border border-neutral-200 bg-white p-5">
              <h3 className="font-semibold text-neutral-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-700">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Tools and data"
            title="เครื่องมือและข้อมูลที่ใช้ประกอบการตัดสินใจ SEO"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {tools.map((tool) => (
              <div key={tool} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
                <p className="font-medium text-neutral-950">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={proofFaqs} />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-neutral-950 md:text-4xl">
          อยากรู้ว่าเว็บไซต์ของคุณมีโอกาสแบบไหน?
        </h2>
        <p className="mt-4 text-lg leading-8 text-neutral-700">
          เริ่มจาก Discovery Audit เพื่อดูปัญหาหลัก โอกาสที่ควรโฟกัส และแผน SEO ที่ทำต่อได้จริง
        </p>
        <div className="mt-8">
          <CTAButton to="/discovery-audit">{brand.primaryCta}</CTAButton>
        </div>
      </section>
    </main>
  )
}
