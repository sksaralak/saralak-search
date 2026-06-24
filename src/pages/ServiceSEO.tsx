import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { caseStudies } from '../content/caseStudies'
import { seoPackageFaqs } from '../content/faqs'

const tiers = [
  {
    name: 'Starter',
    cta: 'ตรวจว่า Starter พอไหม',
    price: '5,000',
    fit: 'ธุรกิจที่เพิ่งเริ่มทำ SEO หรืองบประมาณจำกัด',
    color: { bar: 'bg-teal-400', badge: 'bg-teal-50 text-teal-700 ring-teal-200', arrow: 'text-teal-500' },
    gets: [
      'Technical SEO Audit เริ่มต้น (1 ครั้ง)',
      'ติดตาม 5 Keywords หลัก',
      'บทความ SEO 1 บทความ/เดือน',
      'On-page optimization 2 หน้า/เดือน',
      'Monthly Report: ranking + traffic',
    ],
  },
  {
    name: 'Growth',
    cta: 'เริ่ม Growth SEO',
    price: '12,000',
    fit: 'SME ที่ต้องการเติบโตอย่างจริงจัง',
    color: { bar: 'bg-sky-500', badge: 'bg-sky-50 text-sky-700 ring-sky-200', arrow: 'text-sky-500' },
    gets: [
      'Technical SEO Audit รายไตรมาส',
      'ติดตาม 15 Keywords',
      'บทความ SEO 2 บทความ/เดือน',
      'On-page optimization 4 หน้า/เดือน',
      'Competitor Analysis รายเดือน',
      'Internal Link Strategy',
      'Monthly Report พร้อม Recommendations',
    ],
  },
  {
    name: 'Pro',
    cta: 'คุยแผน SEO + GEO',
    price: '20,000',
    fit: 'ธุรกิจที่จริงจังกับ SEO และต้องการครอบคลุมทั้ง Google + AI Search',
    color: { bar: 'bg-violet-500', badge: 'bg-violet-50 text-violet-700 ring-violet-200', arrow: 'text-violet-500' },
    gets: [
      'Technical SEO Audit รายเดือน',
      'ติดตาม 30 Keywords',
      'บทความ SEO 4 บทความ/เดือน',
      'On-page optimization ไม่จำกัด',
      'Competitor Analysis รายเดือน',
      'Internal Link + Topic Cluster Strategy',
      'Schema Markup & Entity Optimization',
      'GEO Optimization รวมอยู่แล้ว',
      'Monthly Report พร้อม Strategy Review',
    ],
  },
]

const contentAddon = [
  { label: 'ราคา Standalone', value: '3,000 THB/บทความ' },
  { label: 'ราคา Bundle (คู่กับ SEO Package)', value: '2,000 THB/บทความ' },
  { label: 'ภาษา', value: 'ไทย หรือ English' },
  { label: 'รวม', value: 'Keyword Research + On-page SEO + Internal Links' },
]

const audiences = [
  {
    label: 'SME ไทย',
    text: 'ธุรกิจขนาดกลางที่ต้องการลูกค้าใหม่จาก Google Search โดยไม่พึ่งโฆษณา',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    label: 'E-commerce',
    text: 'ร้านค้าออนไลน์ที่ต้องการเพิ่ม Organic Traffic ไปยังหมวดหมู่และหน้าสินค้า',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    label: 'B2B / บริการ',
    text: 'ธุรกิจ B2B และบริการที่ลูกค้าค้นหาและเปรียบเทียบผู้ให้บริการก่อนตัดสินใจ',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    label: 'Content / Media',
    text: 'สื่อ บล็อก และเว็บไซต์ที่ต้องการ Topical Authority และ Organic Traffic ระยะยาว',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
]

function RankingMockup() {
  const rows = [
    { kw: 'ชื่อบริการ + ไทย', before: 'Page 3', after: 'Page 1', s: 'up' as const },
    { kw: 'คู่แข่ง vs แบรนด์', before: 'Not ranked', after: 'Top 5', s: 'up' as const },
    { kw: 'บทความ How-to', before: 'Page 4', after: 'Page 1', s: 'up' as const },
    { kw: 'AI Overview', before: 'Missing', after: 'Featured', s: 'up' as const },
    { kw: 'Long-tail เฉพาะทาง', before: 'Page 5', after: 'Top 3', s: 'up' as const },
  ]
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/60">
      <div className="border-b border-neutral-100 bg-neutral-50 px-5 py-3.5">
        <p className="font-mono text-xs text-neutral-500">keyword-ranking-tracker.sh</p>
      </div>
      <div className="grid grid-cols-3 border-b border-neutral-100 px-5 py-2.5 font-mono text-[10px] font-semibold text-neutral-400">
        <span>Keyword</span>
        <span className="text-center text-red-500">ก่อน</span>
        <span className="text-right text-emerald-600">หลัง</span>
      </div>
      <div className="divide-y divide-neutral-100">
        {rows.map((r) => (
          <div key={r.kw} className="grid grid-cols-3 items-center gap-2 px-5 py-3">
            <span className="truncate font-mono text-xs text-neutral-500">{r.kw}</span>
            <span className="text-center font-mono text-xs text-red-400 line-through">{r.before}</span>
            <span className="text-right font-mono text-xs font-semibold text-emerald-600">{r.after}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-100 px-5 py-3.5">
        <p className="font-mono text-[10px] text-teal-600">→ ตัวอย่างผลลัพธ์หลัง 6 เดือน (Pro Package)</p>
      </div>
    </div>
  )
}

export default function ServiceSEO() {
  return (
    <main>
      <SEO
        title="บริการ SEO ไทย เริ่มต้น 5,000 บาท/เดือน | Saralak Search"
        description="บริการ SEO สำหรับธุรกิจไทย 3 แพ็กเกจ Starter 5,000 / Growth 12,000 / Pro 20,000 บาทต่อเดือน เห็นผลลัพธ์ชัดเจนหลัง 6 เดือน"
        path="/services/seo"
      />

      {/* Hero */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-400">
            <Link to="/services" className="hover:underline">Services</Link>
            {' / '}SEO
          </p>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                รับทำ SEO ให้ลูกค้าค้นหาเจอ
                <br className="hidden sm:block" />
                <span className="animate-gradient-text">เว็บไซต์คุณ ก่อนเจอคู่แข่ง</span>
              </h1>
              <p className="thai-readable mt-6 text-lg leading-8 text-neutral-300">
                บริการรับทำ SEO สำหรับธุรกิจไทย — วางระบบให้เว็บไซต์ถูกค้นเจอในทุก keyword
                ที่ลูกค้าใช้ค้นหาก่อนตัดสินใจ ไม่ใช่แค่ traffic แต่คือ lead, call และโอกาสขาย
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-900/30 px-4 py-2 text-sm text-amber-300 ring-1 ring-amber-700/40">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>SEO ใช้เวลา — ผลลัพธ์ชัดเจนหลัง 6 เดือน รายงานทุกเดือนระหว่างทาง</span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton to="/contact">ดู SEO Package</CTAButton>
                <CTAButton to="/discovery-audit" variant="secondary">เริ่ม Discovery Audit ก่อน</CTAButton>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-teal-500/8 blur-2xl" />
              <div className="relative">
                <RankingMockup />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { stat: '3', label: 'แพ็กเกจ ตั้งแต่ 5K–20K/เดือน' },
                { stat: '30', label: 'Keywords ติดตาม (Pro)' },
                { stat: '4', label: 'บทความ SEO/เดือน (Pro)' },
                { stat: '6+', label: 'เดือน เห็นผลชัดเจน' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-4xl font-bold text-teal-400">{item.stat}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real case studies */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">ผลลัพธ์จริง</p>
              <h2 className="mt-1 text-3xl font-semibold text-neutral-950">Case Studies จากงานจริง</h2>
            </div>
            <Link
              to="/case-studies"
              className="shrink-0 text-sm font-semibold text-teal-600 hover:underline"
            >
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {caseStudies
              .filter(s => ['ranking-growth', 'organic-growth'].includes(s.slug))
              .map((study) => (
              <article key={study.slug} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md">
                <div className="aspect-[16/7] overflow-hidden bg-neutral-100">
                  <img
                    src={study.image}
                    alt={study.projectName}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-700">{study.service}</span>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-neutral-500">{study.duration}</span>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-neutral-500">{study.channel}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-neutral-950">{study.projectName}</h3>
                  <p className="thai-readable mt-1 text-sm leading-6 text-neutral-500">{study.businessImpact}</p>
                  <div className="mt-4 border-t border-neutral-200 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">ผลลัพธ์</p>
                    <ul className="mt-2 grid gap-1.5">
                      {study.card.results.map(r => (
                        <li key={r} className="flex items-start gap-2 text-sm text-neutral-700">
                          <span className="mt-0.5 shrink-0 font-bold text-teal-500">→</span>
                          <span className="thai-readable">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency strip */}
      <section className="border-y border-teal-900/60 bg-gradient-to-r from-teal-950 via-teal-900 to-teal-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">ทุกวันที่รอ คือวันที่ลูกค้าเลือกคู่แข่ง</p>
              <p className="thai-readable mt-1 text-sm text-teal-200">
                Google แสดงผลคู่แข่งที่ทำ SEO ให้กับลูกค้าของคุณอยู่ทุกวัน
              </p>
            </div>
            <div className="shrink-0">
              <CTAButton to="/discovery-audit" variant="secondary">เริ่ม Discovery Audit</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-teal-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="เหมาะสำหรับ"
            title="ธุรกิจที่ต้องการ Organic Traffic ระยะยาว"
            description="SEO ได้ผลดีกับธุรกิจที่ลูกค้าต้อง Google ก่อนตัดสินใจ — ถ้าคุณขายสินค้าหรือบริการแบบนั้น คุณต้องอยู่ใน Page 1"
            tone="light"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <article key={item.label} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-white/25 hover:bg-white/10">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-800/60 text-teal-300 transition-colors group-hover:bg-teal-700/60">
                  {item.icon}
                </div>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wide text-teal-400">{item.label}</p>
                <p className="thai-readable mt-2 text-sm leading-6 text-teal-50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="แพ็กเกจ"
            title="เลือก Package ที่เหมาะกับธุรกิจ"
            description="ทุก Package รวม Monthly Report และ Strategy Review — คุณรู้ทุกเดือนว่าเราทำอะไรไปแล้ว"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className={`h-1.5 w-full ${tier.color.bar}`} />
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-neutral-950">{tier.name}</h3>
                    <span className={`shrink-0 rounded-full px-3 py-0.5 text-xs font-semibold ring-1 ${tier.color.badge}`}>
                      {tier.name}
                    </span>
                  </div>
                  <p className="mt-1 text-3xl font-black text-neutral-950">
                    {tier.price}
                    <span className="text-base font-normal text-neutral-500"> THB/เดือน</span>
                  </p>
                  <p className="thai-readable mt-2 text-sm leading-6 text-neutral-500">{tier.fit}</p>

                  <div className="mt-6 border-t border-neutral-100 pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      สิ่งที่คุณจะได้รับทุกเดือน
                    </p>
                    <ul className="grid gap-2.5">
                      {tier.gets.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                          <span className={`mt-0.5 shrink-0 font-bold ${tier.color.arrow}`}>→</span>
                          <span className="thai-readable">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8">
                    <CTAButton to="/contact" className="w-full">{tier.cta}</CTAButton>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white shadow-sm">
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-neutral-950">ไม่รู้จะเลือก Package ไหน?</p>
                <p className="thai-readable mt-1 text-sm leading-6 text-neutral-500">
                  มาคุยกันก่อนได้เลย — ไม่มีข้อผูกมัด ใช้เวลาแค่ 15 นาที แล้วคุณจะรู้ว่า Package ไหนคุ้มที่สุดสำหรับธุรกิจของคุณ
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                <a
                  href="https://line.me/ti/p/~sariahihi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#06C755] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 hover:-translate-y-0.5"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  LINE: @sariahihi
                </a>
                <a
                  href="tel:+66622944999"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 hover:-translate-y-0.5"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  062-294-4999
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Add-on */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">Add-on</p>
              <h2 className="mt-2 text-2xl font-semibold text-neutral-950">Content Marketing</h2>
              <p className="thai-readable mt-3 text-base leading-7 text-neutral-600">
                บทความ SEO คุณภาพสูงที่ทำงานทั้งบน Google Search และ AI Search
                เขียนโดยผู้เชี่ยวชาญ พร้อม Keyword Research และ On-page Optimization
              </p>
              <p className="thai-readable mt-3 text-sm leading-6 text-neutral-500">
                ใช้คู่กับ SEO Package ได้ในราคา Bundle — ประหยัดกว่าซื้อแยก 1,000 บาท/บทความ
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
              {contentAddon.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 last:border-0">
                  <span className="text-sm text-neutral-500">{label}</span>
                  <span className="text-sm font-semibold text-neutral-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO takes time + cheap SEO warning */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* Why time */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-400">Transparency</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">ทำไม SEO ถึงต้องใช้เวลา?</h2>
              <p className="thai-readable mt-4 leading-7 text-neutral-400">
                Google ใช้เวลา <strong className="text-white">crawl, index และประเมินความน่าเชื่อถือ</strong> ของหน้าเว็บก่อนจะขยับอันดับ — กระบวนการนี้ไม่สามารถข้ามได้ไม่ว่าจะจ่ายเงินเท่าไหร่
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  {
                    reason: 'Google ต้องเห็น Pattern ก่อน',
                    detail: 'อัลกอริทึมประเมินสัญญาณหลายร้อยจุดตลอดหลายสัปดาห์ — ไม่ใช่แค่วันเดียว',
                    icon: 'text-sky-400',
                  },
                  {
                    reason: 'Search Volume กำหนด Timeline',
                    detail: 'Keyword ที่คนค้นหาน้อย (< 500/เดือน) อาจติดอันดับใน 2–3 เดือน แต่ Keyword Volume สูง (10,000+) ต้องใช้ 6–12 เดือน เพราะคู่แข่งแน่นกว่า',
                    icon: 'text-violet-400',
                  },
                  {
                    reason: 'Authority สะสมได้แต่ข้ามไม่ได้',
                    detail: 'เว็บไซต์ที่ทำ SEO ต่อเนื่อง 12 เดือน ได้เปรียบมากกว่าเว็บที่เพิ่งเริ่ม — Google ให้ความเชื่อถือกับ consistency',
                    icon: 'text-amber-400',
                  },
                ].map(({ reason, detail, icon }) => (
                  <div key={reason} className="flex gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-4">
                    <svg className={`mt-0.5 h-5 w-5 shrink-0 ${icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-white">{reason}</p>
                      <p className="thai-readable mt-1 text-sm leading-6 text-neutral-500">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cheap SEO warning */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-red-400">คำเตือน</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">ทำไม SEO บางเจ้าถึงราคาถูกมาก?</h2>
              <p className="thai-readable mt-4 leading-7 text-neutral-400">
                SEO ราคาถูก (ต่ำกว่า 3,000 บาท/เดือน) มักใช้เทคนิคที่ <strong className="text-white">ขัดกับ Google Guideline</strong> — ซึ่งอาจให้ผลเร็วแต่โดน penalty ในภายหลัง
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  { label: 'Link Farm & Paid Links', risk: 'เสี่ยง Manual Penalty โดน Google ลบออกจาก Index' },
                  { label: 'Keyword Stuffing', risk: 'หน้าเว็บถูกลดอันดับหรือ deindex ทั้งหมด' },
                  { label: 'Auto-generated Content', risk: 'Google ตรวจจับได้และถือว่า Spam' },
                  { label: 'Report ที่ไม่โปร่งใส', risk: 'ไม่รู้ว่าทำอะไรจริงๆ — เมื่อหยุดจ้างอันดับหายทันที' },
                ].map(({ label, risk }) => (
                  <div key={label} className="rounded-xl border border-red-900/40 bg-red-950/20 p-4">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <p className="font-semibold text-red-300">{label}</p>
                    </div>
                    <p className="thai-readable mt-1.5 pl-6 text-sm leading-6 text-neutral-500">{risk}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-teal-800/50 bg-teal-950/30 p-4">
                <p className="thai-readable text-sm leading-6 text-teal-300">
                  <strong className="text-white">Saralak Search</strong> ทำ SEO ตาม Google Guideline อย่างเคร่งครัด — ผลลัพธ์ใช้เวลาแต่ปลอดภัยจาก penalty และสะสมได้ระยะยาว
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-24">
            <h2 className="text-center text-4xl font-semibold text-white md:text-5xl">Timeline ที่คาดได้จาก SEO</h2>
            <p className="thai-readable mt-5 text-center text-lg leading-8 text-neutral-400">
              ผลลัพธ์จะเริ่มเห็นชัดเจนหลัง <strong className="text-white">6 เดือน</strong> — รายงานทุกเดือนเพื่อให้คุณรู้ว่าเราทำอะไรไปแล้ว ไม่ใช่แค่รอผล
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                {
                  period: 'เดือน 1–2',
                  phase: 'Phase 1',
                  label: 'Technical Fix + Foundation',
                  items: ['แก้ปัญหา Crawl & Index', 'ตั้ง Keyword tracking', 'เริ่ม Content Calendar', 'On-page optimization'],
                  color: 'text-amber-400', border: 'border-amber-700/60', bg: 'bg-amber-950/30', glow: 'shadow-amber-900/40',
                  num: 'text-amber-900/80',
                },
                {
                  period: 'เดือน 3–4',
                  phase: 'Phase 2',
                  label: 'Early Ranking Signals',
                  items: ['Keyword เริ่มขยับ', 'Long-tail เริ่มติด Page 1', 'Organic traffic เพิ่มขึ้น', 'Internal link structure'],
                  color: 'text-sky-400', border: 'border-sky-700/60', bg: 'bg-sky-950/30', glow: 'shadow-sky-900/40',
                  num: 'text-sky-900/80',
                },
                {
                  period: 'เดือน 5–6+',
                  phase: 'Phase 3',
                  label: 'Traffic + Conversion',
                  items: ['Main keyword ติด Page 1', 'Organic traffic เติบโตชัดเจน', 'Lead/Conversion เพิ่ม', 'Authority สะสมต่อเนื่อง'],
                  color: 'text-emerald-400', border: 'border-emerald-700/60', bg: 'bg-emerald-950/30', glow: 'shadow-emerald-900/40',
                  num: 'text-emerald-900/80',
                },
              ].map(({ period, phase, label, items, color, border, bg, glow, num }) => (
                <div key={period} className={`relative overflow-hidden rounded-2xl border p-7 shadow-xl ${border} ${bg} ${glow}`}>
                  <span className={`select-none pointer-events-none absolute -right-4 -top-6 text-[9rem] font-black leading-none ${num}`}>
                    {phase.replace('Phase ', '')}
                  </span>
                  <p className={`relative z-10 font-mono text-base font-bold ${color}`}>{period}</p>
                  <p className={`relative z-10 mt-1 text-xs font-semibold uppercase tracking-widest ${color} opacity-70`}>{phase}</p>
                  <p className="relative z-10 thai-readable mt-3 text-xl font-semibold leading-tight text-white">{label}</p>
                  <ul className="relative z-10 mt-5 grid gap-3">
                    {items.map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${border} ${color} text-[10px] font-bold`}>→</span>
                        <span className={`thai-readable text-base ${color} opacity-90`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <CTAButton to="/discovery-audit">เริ่ม Discovery Audit</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Process + Monthly Report */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ขั้นตอน"
            title="ขั้นตอนการทำ SEO กับเรา"
            description="โปร่งใส วัดผลได้ และรายงานทุกเดือน — คุณรู้ตลอดว่าเราทำอะไรและผลเป็นอย่างไร"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="grid gap-4">
              {[
                {
                  step: '01',
                  title: 'Discovery Audit',
                  desc: 'วิเคราะห์ Technical SEO, Keyword Gaps, Competitor Landscape และ Content Opportunity ก่อนเริ่มงาน เพื่อให้รู้ว่าควรแก้อะไรก่อน',
                  color: 'bg-teal-900 text-teal-300',
                },
                {
                  step: '02',
                  title: 'Keyword Strategy & Mapping',
                  desc: 'เลือก Keyword ที่มี Commercial Intent สูง, Search Volume เหมาะสม และคู่แข่งไม่สูงเกินไปสำหรับระยะเวลาและ Budget ที่มี',
                  color: 'bg-sky-900 text-sky-300',
                },
                {
                  step: '03',
                  title: 'Technical SEO & On-page',
                  desc: 'แก้ปัญหา Crawlability, Site Speed, Core Web Vitals, Schema Markup, Internal Links และ On-page Optimization ทุกหน้า',
                  color: 'bg-violet-900 text-violet-300',
                },
                {
                  step: '04',
                  title: 'Content Creation & Optimization',
                  desc: 'เขียนบทความ SEO ที่ตอบ Search Intent จริงๆ ไม่ใช่แค่ใส่ Keyword — พร้อม Internal Linking และ Topic Cluster Strategy',
                  color: 'bg-amber-900 text-amber-300',
                },
                {
                  step: '05',
                  title: 'Monthly Report & Strategy Review',
                  desc: 'รายงานทุกเดือน: Keyword Rankings, Organic Traffic, Clicks, Impressions และ Recommendations สำหรับเดือนถัดไป — คุณรู้ทุกอย่างที่เราทำ',
                  color: 'bg-emerald-900 text-emerald-300',
                },
              ].map(({ step, title, desc, color }) => (
                <div key={step} className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${color}`}>{step}</span>
                  <div>
                    <p className="text-base font-semibold text-neutral-950">{title}</p>
                    <p className="thai-readable mt-1 text-sm leading-7 text-neutral-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Monthly Report Preview */}
            <div className="self-start lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/60">
                <div className="border-b border-neutral-100 bg-neutral-50 px-5 py-3.5">
                  <p className="font-mono text-xs text-neutral-500">monthly-seo-report.pdf · มิถุนายน 2026</p>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">สรุปผล เดือนนี้</p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {[
                      { label: 'Keywords ติด Page 1', value: '8', change: '+3', up: true },
                      { label: 'Organic Clicks', value: '1,240', change: '+22%', up: true },
                      { label: 'Impressions', value: '18,400', change: '+31%', up: true },
                      { label: 'Keywords Tracked', value: '15', change: 'Growth', up: true },
                    ].map(({ label, value, change, up }) => (
                      <div key={label} className="rounded-lg bg-neutral-50 p-3">
                        <p className="text-xs text-neutral-500">{label}</p>
                        <p className="mt-1 text-lg font-black text-neutral-950">{value}</p>
                        <p className={`text-xs font-semibold ${up ? 'text-emerald-600' : 'text-red-500'}`}>{change}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-neutral-100 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">งานที่ทำเดือนนี้</p>
                    <div className="mt-3 grid gap-2">
                      {[
                        'เขียน 2 บทความ SEO (ตาม Content Calendar)',
                        'Optimize 4 หน้าบริการตาม Search Intent',
                        'แก้ 3 Technical issues จาก GSC',
                        'Internal Link ระหว่าง cluster articles',
                      ].map(item => (
                        <div key={item} className="flex items-start gap-2 text-xs text-neutral-600">
                          <span className="mt-0.5 shrink-0 text-teal-500">✓</span>
                          <span className="thai-readable">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 border-t border-neutral-100 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">แผนเดือนหน้า</p>
                    <div className="mt-2 grid gap-1.5">
                      {[
                        'เขียน 2 บทความ Pillar Content',
                        'ขยาย keyword cluster "บริการ + กรุงเทพ"',
                        'Schema markup สำหรับ FAQ pages',
                      ].map(item => (
                        <div key={item} className="flex items-start gap-2 text-xs text-neutral-500">
                          <span className="mt-0.5 shrink-0 text-sky-400">→</span>
                          <span className="thai-readable">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related blog + GEO add-on */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-400">อ่านเพิ่มเติม</p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  to="/blog/what-is-seo"
                  className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 hover:shadow-md"
                >
                  <span className="text-teal-500">→</span>
                  SEO คืออะไร และทำงานอย่างไร
                </Link>
                <Link
                  to="/blog/seo-geo-aeo"
                  className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 hover:shadow-md"
                >
                  <span className="text-teal-500">→</span>
                  SEO, AEO และ GEO ต่างกันอย่างไร
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">ต้องการเพิ่ม AI Visibility?</p>
              <h3 className="mt-2 text-lg font-semibold text-teal-900">เพิ่ม GEO Add-on 3,000 บาท/เดือน</h3>
              <p className="thai-readable mt-2 text-sm leading-6 text-teal-700">
                เพิ่มโอกาสให้แบรนด์ถูกพบใน ChatGPT, Gemini และ Perplexity ควบคู่กับ SEO
                Package Pro รวม GEO ไว้แล้ว
              </p>
              <div className="mt-4">
                <Link
                  to="/services/geo"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 hover:underline"
                >
                  ดูรายละเอียด GEO Add-on
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={seoPackageFaqs} />

      {/* Final CTA */}
      <section className="bg-teal-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold">ยังไม่รู้ว่า SEO จะช่วยธุรกิจคุณได้แค่ไหน?</h2>
          <p className="thai-readable mx-auto mt-4 max-w-lg text-lg leading-8 text-teal-100">
            เริ่มจาก Discovery Audit เพื่อดูว่า Google มองเว็บไซต์ของคุณอย่างไร
            คู่แข่งได้เปรียบตรงไหน และควรเริ่มแก้จากจุดใดก่อน
          </p>
          <ul className="mx-auto mt-5 max-w-sm space-y-2 text-left text-teal-100">
            {[
              'รู้ว่า Google มองเว็บไซต์คุณอย่างไร',
              'เห็นว่าคู่แข่งติดอันดับอะไรที่คุณยังพลาด',
              'ได้ Roadmap ที่ชัดเจนพร้อม Quick Wins',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-teal-400">→</span>
                <span className="thai-readable text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact">ส่งเว็บไซต์ให้ประเมินเบื้องต้น</CTAButton>
            <CTAButton to="/discovery-audit" variant="secondary">เริ่ม Discovery Audit</CTAButton>
          </div>
        </div>
      </section>
    </main>
  )
}
