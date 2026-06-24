import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { caseStudies } from '../content/caseStudies'
import { geoFaqs } from '../content/faqs'

const deliverables = [
  {
    title: 'AI Visibility Scan',
    color: { icon: 'text-teal-400 bg-teal-950 border-teal-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      'ทดสอบ 10–15 คำถามที่ลูกค้าอาจถาม AI เกี่ยวกับธุรกิจคุณ',
      'ตรวจบน ChatGPT, Gemini, Perplexity และ Google AI Overview',
      'บันทึกว่าแบรนด์ถูกพูดถึง ถูกแนะนำ หรือไม่มีอยู่เลย',
      'เปรียบเทียบกับเดือนที่แล้ว — เพิ่มขึ้นหรือลดลง',
    ],
  },
  {
    title: 'Page Optimization for AI',
    color: { icon: 'text-sky-400 bg-sky-950 border-sky-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3.75L16.5 6.75m0 0L13.5 9.75M16.5 6.75H7.5" />
      </svg>
    ),
    items: [
      '1 หน้า/เดือน — ปรับ Structure ให้ AI อ่านและอ้างอิงได้ง่ายขึ้น',
      'เพิ่ม Entity Signals — ใคร ทำอะไร อยู่ที่ไหน เชี่ยวชาญอะไร',
      'ปรับ Heading และ Content Structure ให้ตอบคำถามชัดเจน',
      'FAQ Schema Markup — AI ชอบดึง FAQ มาตอบ',
    ],
  },
  {
    title: 'llms.txt & AI Signals',
    color: { icon: 'text-violet-400 bg-violet-950 border-violet-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    items: [
      'สร้างหรืออัพเดท llms.txt — บอก AI ว่าแบรนด์คุณคืออะไร',
      'Brand Entity Optimization — ชื่อ ความเชี่ยวชาญ ที่ตั้ง',
      'ตรวจ Structured Data ที่ส่งผลต่อ AI Citation',
    ],
  },
  {
    title: 'Monthly GEO Report',
    color: { icon: 'text-emerald-400 bg-emerald-950 border-emerald-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    items: [
      'AI Platform Status: ChatGPT / Gemini / Perplexity / AI Overview',
      'คำถามไหนที่แบรนด์ติด vs หลุด',
      'เปรียบเทียบ Month-over-Month',
      'Recommendations: ควรทำอะไรเดือนถัดไป',
    ],
  },
]

const platforms = [
  {
    name: 'Google AI Overview',
    note: 'แสดงผลบน Google Search โดยตรง — คนเห็นก่อน Organic Results',
    color: 'border-blue-800/40 bg-blue-950/20',
    dot: 'bg-blue-400',
  },
  {
    name: 'Google Gemini',
    note: 'AI Assistant ของ Google ที่รวมเข้ากับ Search, Docs, Gmail',
    color: 'border-violet-800/40 bg-violet-950/20',
    dot: 'bg-violet-400',
  },
  {
    name: 'ChatGPT',
    note: 'AI ที่คนใช้ถามมากที่สุดในโลก — คนถามเรื่องสินค้าและบริการทุกวัน',
    color: 'border-emerald-800/40 bg-emerald-950/20',
    dot: 'bg-emerald-400',
  },
  {
    name: 'Perplexity',
    note: 'AI Search Engine ที่เติบโตเร็วที่สุด — ให้คำตอบพร้อม Citation',
    color: 'border-sky-800/40 bg-sky-950/20',
    dot: 'bg-sky-400',
  },
]

const audiences = [
  {
    label: 'ธุรกิจที่ทำ SEO อยู่',
    text: 'ต่อยอด SEO ที่มีอยู่ให้ AI แนะนำแบรนด์ได้ด้วย — เพิ่มแค่ 3,000 บาท/เดือน',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    label: 'B2B / บริการเฉพาะทาง',
    text: 'ลูกค้า B2B ใช้ AI ถามหาผู้เชี่ยวชาญก่อนติดต่อ — GEO ช่วยให้แบรนด์ถูกแนะนำ',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    label: 'Brand ที่ต้องการ Trust',
    text: 'แบรนด์ที่ต้องการให้ AI พูดถึงในแง่ดี และอ้างอิงเป็น authoritative source',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    label: 'E-commerce / Retail',
    text: 'ลูกค้าถาม AI ว่า "สินค้าไหนดีกว่า" หรือ "แบรนด์ไหนน่าเชื่อถือ" — GEO ช่วยให้ตอบถูก',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
]

function AIBrandScan() {
  const checks = [
    { platform: 'Google AI Overview', status: 'found' as const, result: 'Featured — อ้างอิงแบรนด์โดยตรง' },
    { platform: 'ChatGPT', status: 'miss' as const, result: 'ไม่พบ — คู่แข่งถูกแนะนำแทน' },
    { platform: 'Gemini', status: 'partial' as const, result: 'Partial — พูดถึงแต่ไม่แนะนำ' },
    { platform: 'Perplexity', status: 'miss' as const, result: 'ไม่พบ — ไม่มี Citation' },
  ]
  const dot: Record<typeof checks[number]['status'], string> = {
    found: 'bg-emerald-400',
    partial: 'bg-amber-400',
    miss: 'bg-red-500',
  }
  const text: Record<typeof checks[number]['status'], string> = {
    found: 'text-emerald-400',
    partial: 'text-amber-400',
    miss: 'text-red-400',
  }
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
        <span className="ml-2 font-mono text-xs text-neutral-600">ai-brand-scan.sh</span>
      </div>
      <div className="p-6">
        <p className="font-mono text-xs text-neutral-600">$ scan --brand "your-brand" --platforms all</p>
        <div className="mt-5 grid gap-3">
          {checks.map((c) => (
            <div key={c.platform} className="flex items-center gap-3">
              <span className={`h-2 w-2 shrink-0 rounded-full ${dot[c.status]}`} />
              <span className="w-36 shrink-0 font-mono text-xs text-neutral-400">{c.platform}</span>
              <span className={`font-mono text-xs font-semibold ${text[c.status]}`}>{c.result}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-neutral-800 pt-5">
          <p className="font-mono text-xs text-neutral-600">Result: 3 platforms have visibility gaps</p>
          <p className="mt-2 font-mono text-xs text-teal-400">→ GEO Add-on เพิ่มโอกาสให้แบรนด์ถูกพบใน AI Search</p>
        </div>
      </div>
    </div>
  )
}

export default function ServiceGEO() {
  return (
    <main>
      <SEO
        title="บริการ GEO — AI Search Visibility สำหรับธุรกิจไทย | Saralak Search"
        description="GEO (Generative Engine Optimization) ช่วยให้แบรนด์คุณถูก ChatGPT, Gemini และ Perplexity แนะนำ Add-on 3,000 บาท/เดือน"
        path="/services/geo"
      />

      {/* Hero */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-400">
            <Link to="/services" className="hover:underline">Services</Link>
            {' / '}GEO
          </p>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                บริการ GEO ให้ AI แนะนำ
                <br className="hidden sm:block" />
                <span className="animate-gradient-text">แบรนด์คุณ ไม่ใช่คู่แข่ง</span>
              </h1>
              <p className="thai-readable mt-6 text-lg leading-8 text-neutral-300">
                บริการ GEO (Generative Engine Optimization) — ปรับ Content และ Brand Signals
                เพื่อเพิ่มโอกาสให้ ChatGPT, Gemini, Perplexity และ Google AI Overview
                พบและอ้างอิงแบรนด์ของคุณเมื่อลูกค้าถาม
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-900/30 px-4 py-2 text-sm text-teal-300 ring-1 ring-teal-700/40">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <span>Add-on กับ SEO หรือ Local SEO Package — ไม่ต้องซื้อแยกเป็น Service หลัก</span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton to="/contact">ตรวจ AI Visibility เบื้องต้น</CTAButton>
                <CTAButton to="/services/seo" variant="secondary">ดู SEO Package ที่รองรับ GEO</CTAButton>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-teal-500/10 blur-2xl" />
              <div className="relative">
                <AIBrandScan />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { stat: '3,000', label: 'THB/เดือน — Add-on' },
                { stat: '4', label: 'AI Platforms ที่ติดตาม' },
                { stat: '10–15', label: 'Prompt Tests/เดือน' },
                { stat: '2–4', label: 'เดือน — ระยะเวลาที่เริ่มสังเกตเห็น AI Mention (ขึ้นอยู่กับ niche)' },
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

      {/* Price + Platforms */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">ราคา</p>
              <p className="mt-2 text-5xl font-black text-neutral-950">
                3,000
                <span className="text-xl font-normal text-neutral-500"> THB/เดือน</span>
              </p>
              <p className="thai-readable mt-3 text-base leading-7 text-neutral-600">
                Add-on กับ SEO Starter, Growth, Pro หรือ Local SEO Package
              </p>
              <div className="mt-5 rounded-xl border border-teal-100 bg-teal-50 p-5">
                <p className="font-semibold text-teal-800">ทำไมต้องเป็น Add-on?</p>
                <p className="thai-readable mt-2 text-sm leading-6 text-teal-700">
                  GEO ทำงานได้ดีที่สุดเมื่อมี SEO Content เป็นฐาน
                  เราปรับ Content ที่มีอยู่แล้วให้ AI อ่านได้ดีขึ้น
                  ไม่ใช่สร้างทุกอย่างจากศูนย์
                </p>
                <div className="mt-3">
                  <Link
                    to="/services/seo"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 hover:underline"
                  >
                    ดู SEO Package ที่รองรับ GEO Add-on
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">AI Platforms ที่ติดตาม</p>
              <div className="grid gap-3">
                {platforms.map(({ name, note, color, dot }) => (
                  <div key={name} className={`flex items-start gap-4 rounded-xl border p-4 ${color}`}>
                    <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} />
                    <div>
                      <p className="font-semibold text-white">{name}</p>
                      <p className="thai-readable mt-0.5 text-xs text-neutral-400">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real case studies */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">ผลลัพธ์จริง</p>
              <h2 className="mt-1 text-3xl font-semibold text-neutral-950">Case Studies จากงานจริง</h2>
            </div>
            <Link to="/case-studies" className="shrink-0 text-sm font-semibold text-violet-600 hover:underline">ดูทั้งหมด →</Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {caseStudies
              .filter(s => ['chatgpt-visibility', 'ai-overview-visibility'].includes(s.slug))
              .map((study) => (
              <article key={study.slug} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
                <div className="aspect-[16/7] overflow-hidden bg-neutral-100">
                  <img src={study.image} alt={study.projectName} className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-700">{study.service}</span>
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
                          <span className="mt-0.5 shrink-0 font-bold text-violet-500">→</span>
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
              <p className="text-lg font-semibold text-white">ตอนนี้ AI กำลังแนะนำคู่แข่งให้กับลูกค้าของคุณ</p>
              <p className="thai-readable mt-1 text-sm text-teal-200">
                ทุกวันที่ AI ไม่พูดถึงแบรนด์คุณ คือโอกาสที่หายไป
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
            title="ธุรกิจที่ต้องการให้ AI แนะนำแบรนด์"
            description="GEO ได้ผลดีกับธุรกิจที่ลูกค้าถาม AI ก่อนตัดสินใจ — ไม่ว่าจะ B2B, E-commerce หรือบริการเฉพาะทาง"
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

      {/* Deliverables */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Deliverables"
            title="สิ่งที่คุณจะได้รับทุกเดือน"
            description="ทุกรายการวัดได้จริง — คุณรู้ทุกเดือนว่า AI มองแบรนด์คุณอย่างไร"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {deliverables.map(({ icon, title, items, color }) => (
              <article
                key={title}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${color.icon}`}>
                  {icon}
                </div>
                <h3 className="mt-4 font-semibold text-neutral-950">{title}</h3>
                <ul className="mt-4 grid gap-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
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
          <SectionHeader eyebrow="ขั้นตอน" title="จาก Brand ที่ AI ไม่รู้จัก สู่ Brand ที่ AI แนะนำ" tone="light" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                step: '01', label: 'AI Visibility Scan',
                border: 'border-teal-800/50', bg: 'bg-teal-950/25', badge: 'bg-teal-900/60 text-teal-300', color: 'text-teal-950',
                body: 'ทดสอบ 10–15 Prompt บน ChatGPT, Gemini, Perplexity และ AI Overview — บันทึกว่าแบรนด์ถูกพบ ถูกแนะนำ หรือไม่มีอยู่เลย',
              },
              {
                step: '02', label: 'Optimize & Signal',
                border: 'border-sky-800/50', bg: 'bg-sky-950/25', badge: 'bg-sky-900/60 text-sky-300', color: 'text-sky-950',
                body: 'ปรับ 1 หน้า/เดือน ให้ AI อ่านได้ง่ายขึ้น เพิ่ม Entity Signals อัพเดท llms.txt และ FAQ Schema ที่ AI ชอบดึง',
              },
              {
                step: '03', label: 'Monthly GEO Report',
                border: 'border-emerald-800/50', bg: 'bg-emerald-950/25', badge: 'bg-emerald-900/60 text-emerald-300', color: 'text-emerald-950',
                body: 'เปรียบเทียบ AI Mention Month-over-Month — Platform ไหนดีขึ้น Platform ไหนยังหลุด พร้อม Recommendations เดือนถัดไป',
              },
            ].map((item) => (
              <div key={item.label} className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-200 hover:-translate-y-0.5 ${item.border} ${item.bg}`}>
                <span className={`select-none absolute -right-3 -top-5 text-[7rem] font-black leading-none ${item.color}`}>{item.step}</span>
                <span className={`relative z-10 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${item.badge}`}>{item.label}</span>
                <p className="relative z-10 thai-readable mt-4 text-sm leading-6 text-neutral-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO, AEO, GEO distinction */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ทำไม GEO" title="GEO ต่างจาก SEO อย่างไร?" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'SEO', color: 'border-blue-200 bg-blue-50', badge: 'bg-blue-100 text-blue-700', goal: 'ติดอันดับ Google Search', how: 'Technical, Content, Links', result: 'Organic Traffic' },
              { label: 'AEO', color: 'border-teal-200 bg-teal-50', badge: 'bg-teal-100 text-teal-700', goal: 'ตอบคำถามใน AI Overview', how: 'FAQ, Schema, Answer Structure', result: 'Featured Snippets' },
              { label: 'GEO', color: 'border-violet-200 bg-violet-50', badge: 'bg-violet-100 text-violet-700', goal: 'ถูก AI แนะนำโดยตรง', how: 'Entity, Brand Signal, llms.txt', result: 'AI Citations & Recommendations' },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl border p-5 ${item.color}`}>
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${item.badge}`}>{item.label}</span>
                <p className="mt-3 font-semibold text-neutral-950">{item.goal}</p>
                <p className="mt-1 text-xs text-neutral-500">วิธี: {item.how}</p>
                <p className="mt-3 text-sm font-semibold text-neutral-700">→ {item.result}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-teal-100 bg-teal-50 px-5 py-4">
            <p className="thai-readable text-sm leading-7 text-teal-800">
              <span className="font-semibold">แนะนำ:</span> ทำ SEO + GEO พร้อมกันได้ผลดีที่สุด เพราะ AI ดึงข้อมูลจากเว็บที่ Google เชื่อถือ
              Package Pro รวม GEO ไว้แล้ว — หรือเพิ่ม GEO Add-on 3,000 บาทกับทุก Package
            </p>
          </div>
        </div>
      </section>

      {/* Blog links */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-400">อ่านเพิ่มเติม</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link to="/blog/what-is-geo" className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 hover:shadow-md">
              <span className="text-teal-500">→</span>
              GEO คืออะไร และทำงานอย่างไร
            </Link>
            <Link to="/blog/seo-geo-aeo" className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 hover:shadow-md">
              <span className="text-teal-500">→</span>
              SEO, AEO และ GEO ต่างกันอย่างไร
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={geoFaqs} />

      {/* Final CTA */}
      <section className="bg-neutral-950 px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold">อยากรู้ว่า AI มองแบรนด์คุณอย่างไร?</h2>
          <p className="thai-readable mx-auto mt-4 max-w-lg text-lg leading-8 text-neutral-400">
            เริ่มจาก Discovery Audit เพื่อดูว่า ChatGPT, Gemini และ AI Overview
            มองเห็นและเข้าใจแบรนด์ของคุณอย่างไร
          </p>
          <ul className="mx-auto mt-5 max-w-sm space-y-2 text-left text-neutral-300">
            {[
              'AI พูดถึงแบรนด์คุณหรือแนะนำคู่แข่งแทน',
              'Content ของคุณพร้อมถูก AI อ้างอิงแค่ไหน',
              'ต้องปรับ Entity Signal อะไรบ้าง',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-teal-400">→</span>
                <span className="thai-readable text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact">ตรวจ AI Visibility เบื้องต้น</CTAButton>
            <Link
              to="/discovery-audit"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              เริ่ม Discovery Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
