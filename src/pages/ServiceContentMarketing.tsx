import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'

const stats = [
  { stat: '1,500+', label: 'คำต่อบทความ — ครอบคลุม Topic ให้ Google และ AI ดึงไปใช้ได้' },
  { stat: 'Long-tail', label: 'Keyword Strategy เน้น Commercial Intent — ลูกค้าพร้อมซื้อมากกว่า High Volume' },
  { stat: 'AI Ready', label: 'บทความทุกชิ้น Structured ให้ AI ดึงไปอ้างอิงใน AI Overview ได้' },
]

const deliverables = [
  {
    title: 'Keyword Research & Topic Brief',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
    color: { icon: 'text-teal-400 bg-teal-950 border-teal-800/60' },
    items: [
      'วิเคราะห์ Keyword ที่ลูกค้าค้นหาจริง พร้อม Search Volume',
      'ตรวจ Search Intent — Informational, Commercial, Transactional',
      'วาง Topic Cluster เพื่อสะสม Authority รอบ Core Keyword',
      'Content Brief พร้อม Outline ก่อนเริ่มเขียนทุกครั้ง',
    ],
  },
  {
    title: 'Writing & Editing',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    color: { icon: 'text-sky-400 bg-sky-950 border-sky-800/60' },
    items: [
      'บทความยาว 1,500–3,000 คำ ตอบ Search Intent จริง',
      'เขียนโดยผู้เชี่ยวชาญ ไม่ใช่ AI Generate ล้วนๆ',
      'รวม Stat, Example และ Expert Insight ที่น่าเชื่อถือ',
      'ผ่าน Editing รอบก่อน Deliver — แก้ได้ 1 รอบ',
    ],
  },
  {
    title: 'On-page SEO Optimization',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: { icon: 'text-violet-400 bg-violet-950 border-violet-800/60' },
    items: [
      'Title Tag, H1, Meta Description ที่ใส่ Keyword ถูกจุด',
      'Header Structure (H2/H3) ตาม Topic Hierarchy',
      'FAQ Schema และ Article Schema สำหรับ Rich Snippet',
      'Image Alt Text และ Filename ที่เป็น SEO-friendly',
    ],
  },
  {
    title: 'Internal Linking & Publish',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    color: { icon: 'text-amber-400 bg-amber-950 border-amber-800/60' },
    items: [
      'เชื่อม Internal Link จากบทความใหม่ไปยังหน้า Service',
      'เพิ่ม Link จากบทความเก่าที่เกี่ยวข้องมาหาบทความใหม่',
      'Canonical Tag และ Robots ตั้งค่าถูกต้องก่อน Publish',
      'Submit URL ผ่าน Google Search Console หลัง Publish',
    ],
  },
  {
    title: 'AI-ready Content Structure',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    color: { icon: 'text-emerald-400 bg-emerald-950 border-emerald-800/60' },
    items: [
      'เขียนให้มี Direct Answer ที่ AI ดึงไปใช้ใน AI Overview ได้',
      'ใส่ Claim + Source ที่ Verifiable เพื่อ E-E-A-T Signal',
      'ใช้ภาษาที่ Query-based — ตอบคำถามตรงๆ ไม่อ้อมค้อม',
      'Summary block ต้นบทความที่ AI แนะนำได้ทันที',
    ],
  },
  {
    title: 'Performance Tracking',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: { icon: 'text-rose-400 bg-rose-950 border-rose-800/60' },
    items: [
      'ติดตาม Keyword Ranking ของแต่ละบทความรายเดือน',
      'วัด Organic Clicks, Impressions จาก Google Search Console',
      'รายงาน AI Mention — บทความถูก AI อ้างอิงบ้างไหม',
      'แนะนำ Update หรือ Refresh บทความเมื่อ Ranking ร่วง',
    ],
  },
]

const pricingTiers = [
  {
    name: 'Standalone',
    price: '3,000',
    unit: 'THB/บทความ',
    desc: 'สั่งเป็นรายบทความ ไม่ต้องสมัคร Package ใดๆ',
    features: ['Keyword Research', 'Writing 1,500+ คำ', 'On-page SEO', 'Internal Linking', 'AI-ready Structure'],
    cta: 'สั่งบทความ SEO 1 ชิ้น',
    color: { bar: 'bg-neutral-300', badge: 'bg-neutral-100 text-neutral-600 ring-neutral-200', arrow: 'text-neutral-500' },
    highlight: false,
  },
  {
    name: 'Bundle กับ SEO Package',
    price: '2,000',
    unit: 'THB/บทความ',
    desc: 'ประหยัด 1,000 บาท/บทความ เมื่อซื้อคู่กับ SEO Package ใดก็ได้',
    features: ['ทุกอย่างใน Standalone', 'ลด 33% จากราคาปกติ', 'Priority Queue', 'Topic Cluster Planning', 'Quarterly Content Audit'],
    cta: 'เพิ่มบทความใน SEO Package',
    ctaTo: '/services/seo',
    color: { bar: 'bg-teal-500', badge: 'bg-teal-50 text-teal-700 ring-teal-200', arrow: 'text-teal-600' },
    highlight: true,
  },
  {
    name: 'Monthly Package',
    price: '10,000',
    unit: 'THB/เดือน',
    desc: '4 บทความ/เดือน พร้อม Topic Cluster Strategy ครบวงจร',
    features: ['4 บทความ/เดือน (2,500/บทความ)', 'Topic Cluster Roadmap', 'Monthly Performance Report', 'Refresh บทความเก่า 1 ชิ้น/เดือน', 'Priority Support'],
    cta: 'วาง Content Roadmap รายเดือน',
    color: { bar: 'bg-violet-500', badge: 'bg-violet-50 text-violet-700 ring-violet-200', arrow: 'text-violet-600' },
    highlight: false,
  },
]

export default function ServiceContentMarketing() {
  return (
    <main>
      <SEO
        title="บริการเขียนบทความ SEO เพิ่มการมองเห็น | Saralak Search"
        description="บริการเขียนบทความ SEO คุณภาพสูงสำหรับธุรกิจไทย ทุกบทความผ่าน Keyword Research, On-page Optimization และ AI-ready Structure เริ่มต้น 3,000 บาท/บทความ"
        path="/services/content-marketing"
      />

      {/* Hero */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-400">
            <Link to="/services" className="hover:underline">Services</Link>
            {' / '}Content Marketing
          </p>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              บริการเขียนบทความ SEO
              <br className="hidden sm:block" />
              <span className="animate-gradient-text">ให้ Google ส่ง Traffic มาหาคุณทุกวัน</span>
            </h1>
            <p className="thai-readable mt-6 text-lg leading-8 text-neutral-300">
              รับเขียนบทความ SEO คุณภาพสูงสำหรับธุรกิจไทย — บทความส่วนใหญ่ไม่ติดอันดับเพราะเขียนตาม topic ที่ตัวเองอยากเขียน
              ไม่ใช่ keyword ที่ลูกค้ากำลังค้นหาจริง บทความที่ดีต้องตอบ Search Intent ได้ครบ และ Structured ให้ Google และ AI เข้าใจ
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {['SEO Article', 'Long-tail Keywords', 'AI-ready Content', 'Topic Cluster', 'E-E-A-T'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton to="/contact">วาง Content Roadmap</CTAButton>
              <CTAButton to="/contact" variant="secondary">สั่งบทความ SEO</CTAButton>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-4xl font-bold text-teal-400">{item.stat}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why content */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">ทำไมต้องมี Content</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-neutral-950">
                บทความคือ Asset<br />ที่ทำงานให้คุณ 24 ชั่วโมง
              </h2>
              <p className="thai-readable mt-4 text-base leading-8 text-neutral-600">
                ค่าโฆษณาหยุดจ่าย ลูกค้าก็หายไป แต่บทความ SEO ที่ดีสะสม Traffic ไปเรื่อยๆ
                และเมื่อ AI Search เติบโต บทความที่ถูก Structured ดีก็กลายเป็นแหล่งที่ AI ดึงไปอ้างอิง —
                <strong> ธุรกิจของคุณถูกแนะนำโดยไม่ต้องจ่ายเพิ่ม</strong>
              </p>
              <p className="thai-readable mt-3 text-base leading-8 text-neutral-600">
                นั่นคือเหตุผลที่ Content Marketing ให้ ROI ระยะยาวสูงกว่า Paid Ads — เพราะมัน
                <strong> สะสมได้ ไม่ Reset เมื่อหยุดจ่าย</strong>
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  ),
                  title: 'เพิ่ม Organic Traffic', color: 'bg-teal-100 text-teal-700',
                  desc: 'Long-tail Keyword แต่ละคำดึง Traffic ที่มี Intent สูง — รวมกันสะสม Traffic ระยะยาวโดยไม่มีค่าโฆษณา',
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  ),
                  title: 'ถูก AI อ้างอิง', color: 'bg-violet-100 text-violet-700',
                  desc: 'ChatGPT, Gemini และ Perplexity ดึงคำตอบจากบทความที่น่าเชื่อถือ — บทความที่ Structured ดีมีโอกาสถูกอ้างอิงสูงกว่า',
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  title: 'สร้าง E-E-A-T Signal', color: 'bg-amber-100 text-amber-700',
                  desc: 'บทความที่แสดง Experience, Expertise, Authority และ Trust ทำให้ Google และ AI ให้ความน่าเชื่อถือกับแบรนด์คุณมากขึ้น',
                },
              ].map(({ icon, title, color, desc }) => (
                <div key={title} className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${color}`}>{icon}</div>
                  <div>
                    <p className="font-semibold text-neutral-950">{title}</p>
                    <p className="thai-readable mt-1 text-sm leading-6 text-neutral-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ราคา"
            title="เลือกรูปแบบที่เหมาะกับธุรกิจ"
            description="ทุกรูปแบบรวม Keyword Research, Writing และ On-page SEO — ไม่มีค่าใช้จ่ายซ่อนเร้น"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${tier.highlight ? 'border-teal-300 ring-1 ring-teal-200' : 'border-neutral-200'}`}
              >
                <div className={`h-1.5 w-full ${tier.color.bar}`} />
                <div className="flex flex-1 flex-col p-7">
                  {tier.highlight && (
                    <span className="mb-3 inline-flex w-fit items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-700">
                      แนะนำ — ประหยัดสุด
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-neutral-950">{tier.name}</h3>
                  <p className="mt-1 text-3xl font-black text-neutral-950">
                    {tier.price}
                    <span className="text-base font-normal text-neutral-500"> {tier.unit}</span>
                  </p>
                  <p className="thai-readable mt-2 text-sm leading-6 text-neutral-500">{tier.desc}</p>
                  <div className="mt-6 border-t border-neutral-100 pt-6">
                    <ul className="grid gap-2.5">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-700">
                          <span className={`mt-0.5 shrink-0 font-bold ${tier.color.arrow}`}>→</span>
                          <span className="thai-readable">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-8">
                    <CTAButton to={tier.ctaTo ?? '/contact'} className="w-full">{tier.cta}</CTAButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Deliverables"
            title="สิ่งที่อยู่ในบทความทุกชิ้น"
            description="ไม่ใช่แค่เขียน — ทุกบทความผ่านกระบวนการ SEO ครบ ตั้งแต่ Research จนถึง Publish"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map(({ icon, title, items, color }) => (
              <article
                key={title}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${color.icon}`}>
                  {icon}
                </div>
                <h3 className="mt-4 font-semibold text-neutral-950">{title}</h3>
                <ul className="mt-4 grid gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="mt-0.5 shrink-0 font-bold text-teal-500">→</span>
                      <span className="thai-readable">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ขั้นตอน" title="จาก Brief สู่บทความที่ติดอันดับ" tone="light" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { step: '01', label: 'Keyword & Brief', color: 'text-teal-950', border: 'border-teal-800/50', bg: 'bg-teal-950/25', badge: 'bg-teal-900/60 text-teal-300', body: 'วิเคราะห์ Keyword, Search Intent และวาง Brief ก่อนเริ่มเขียนทุกครั้ง' },
              { step: '02', label: 'Writing', color: 'text-sky-950', border: 'border-sky-800/50', bg: 'bg-sky-950/25', badge: 'bg-sky-900/60 text-sky-300', body: 'เขียนบทความ 1,500–3,000 คำ พร้อม Stat และ Example ที่น่าเชื่อถือ' },
              { step: '03', label: 'SEO Optimize', color: 'text-violet-950', border: 'border-violet-800/50', bg: 'bg-violet-950/25', badge: 'bg-violet-900/60 text-violet-300', body: 'ปรับ Title, H-tags, Schema, Internal Links และ Meta ก่อน Deliver' },
              { step: '04', label: 'Approve & Publish', color: 'text-amber-950', border: 'border-amber-800/50', bg: 'bg-amber-950/25', badge: 'bg-amber-900/60 text-amber-300', body: 'คุณ Approve บทความ แก้ได้ 1 รอบ จากนั้น Publish และ Submit ใน GSC' },
              { step: '05', label: 'Track & Report', color: 'text-emerald-950', border: 'border-emerald-800/50', bg: 'bg-emerald-950/25', badge: 'bg-emerald-900/60 text-emerald-300', body: 'ติดตาม Ranking, Clicks, Impressions และ AI Mention รายเดือน' },
            ].map((item) => (
              <div key={item.label} className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 ${item.border} ${item.bg}`}>
                <span className={`select-none absolute -right-3 -top-5 text-[7rem] font-black leading-none ${item.color}`}>{item.step}</span>
                <span className={`relative z-10 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${item.badge}`}>
                  {item.label}
                </span>
                <p className="relative z-10 thai-readable mt-4 text-sm leading-6 text-neutral-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes good SEO content */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">บทความที่ดี vs ไม่ดี</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-neutral-950">
                ทำไม Content ส่วนใหญ่<br />ถึงไม่ติดอันดับ
              </h2>
              <p className="thai-readable mt-4 text-base leading-8 text-neutral-600">
                ปัญหาไม่ใช่เรื่องของการเขียนสวย — บทความส่วนใหญ่พลาดตั้งแต่ขั้นแรก คือการเลือก Keyword ที่ไม่ตรงกับ Search Intent จริงๆ
              </p>
            </div>
            <div className="grid gap-3">
              {[
                { bad: 'เขียนเรื่องที่ตัวเองอยากเขียน', good: 'เขียนเรื่องที่ลูกค้ากำลังค้นหา', badColor: 'text-red-600', goodColor: 'text-teal-700' },
                { bad: 'ใส่ Keyword เยอะๆ แบบยัดเยียด', good: 'ตอบ Search Intent ตรงๆ ครบถ้วน', badColor: 'text-red-600', goodColor: 'text-teal-700' },
                { bad: 'บทความสั้น ไม่ครอบคลุม Topic', good: 'ครอบคลุม Topic ดีกว่าหน้าคู่แข่ง', badColor: 'text-red-600', goodColor: 'text-teal-700' },
                { bad: 'ไม่มี Internal Link ไปยังหน้า Service', good: 'เชื่อมบทความกับ Service page ทุกชิ้น', badColor: 'text-red-600', goodColor: 'text-teal-700' },
                { bad: 'โครงสร้าง H-tag ไม่ชัดเจน', good: 'Structure ที่ AI และ Google อ่านง่าย', badColor: 'text-red-600', goodColor: 'text-teal-700' },
              ].map(({ bad, good, badColor, goodColor }) => (
                <div key={bad} className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 rounded-lg border border-red-100 bg-red-50/50 p-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                    <p className={`thai-readable text-xs leading-5 font-medium ${badColor}`}>{bad}</p>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-teal-100 bg-teal-50/50 p-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <p className={`thai-readable text-xs leading-5 font-medium ${goodColor}`}>{good}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency strip */}
      <section className="border-y border-teal-900/60 bg-gradient-to-r from-teal-950 via-teal-900 to-teal-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">ทุกเดือนที่รอ คือ Traffic ที่คู่แข่งได้ไปฟรีๆ</p>
              <p className="thai-readable mt-1 text-sm text-teal-200">บทความที่ดีสะสม Traffic ไปเรื่อยๆ ยิ่งเริ่มเร็ว ยิ่งได้เปรียบ</p>
            </div>
            <CTAButton to="/discovery-audit" variant="secondary">เริ่ม Discovery Audit</CTAButton>
          </div>
        </div>
      </section>

      {/* Blog link */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-400">ตัวอย่างบทความ SEO จากเรา</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { to: '/blog/what-is-seo', label: 'SEO คืออะไร — คู่มือฉบับสมบูรณ์สำหรับธุรกิจไทย' },
              { to: '/blog/increase-sale-google-maps', label: 'เพิ่มยอดขายบน Google Maps ให้ลูกค้าใกล้ฉันหาเจอ' },
              { to: '/blog/local-seo-customer-intent', label: 'Local SEO เหมาะกับธุรกิจไหน — ลูกค้าใกล้ฉัน' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 hover:shadow-md"
              >
                <span className="shrink-0 text-teal-500">→</span>
                <span className="thai-readable">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold">ยังไม่รู้ว่าควรเขียนบทความเรื่องอะไร?</h2>
          <p className="thai-readable mx-auto mt-4 max-w-lg text-lg leading-8 text-teal-100">
            เริ่มจาก Discovery Audit เพื่อดูว่า keyword ไหนที่ลูกค้ากำลังค้นหา และ content gap ที่ทำให้เว็บไซต์ยังไม่ได้ traffic ที่ควรได้
          </p>
          <ul className="mx-auto mt-5 max-w-sm space-y-2 text-left text-teal-100">
            {[
              'ไม่ต้องรู้ว่าจะเขียนเรื่องอะไร — เราหา Keyword ให้',
              'เห็นผล Ranking ภายใน 2–4 เดือนสำหรับ Long-tail',
              'บทความทุกชิ้น Structured ให้ AI อ้างอิงได้ทันที',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-teal-400">→</span>
                <span className="thai-readable text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact">วาง Content Roadmap</CTAButton>
            <CTAButton to="/contact" variant="secondary">สั่งบทความ SEO</CTAButton>
          </div>
        </div>
      </section>
    </main>
  )
}
