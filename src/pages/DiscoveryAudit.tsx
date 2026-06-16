import { Link } from 'react-router-dom'
import ContactActions from '../components/ContactActions'
import ContactForm from '../components/ContactForm'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { discoveryAuditFaqs } from '../content/faqs'

const problems = [
  'ลูกค้าค้นหาแบรนด์ไม่เจอ หรือเจอได้ยาก',
  'คู่แข่งมีการมองเห็นบน Google และ AI Search มากกว่า',
  'Google และ AI อาจไม่เข้าใจธุรกิจของคุณอย่างถูกต้อง',
  'ไม่รู้ว่าควรเริ่มแก้จุดไหนก่อนเพื่อให้คุ้มค่าที่สุด',
]

const checks = [
  { label: 'โอกาสที่ลูกค้าจะค้นพบแบรนด์', icon: <svg className="h-4 w-4 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
  { label: 'การมองเห็นเทียบกับคู่แข่ง', icon: <svg className="h-4 w-4 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg> },
  { label: 'การมองเห็นบน Google Search', icon: <svg className="h-4 w-4 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
  { label: 'ความเข้าใจของ AI Search ต่อแบรนด์', icon: <svg className="h-4 w-4 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg> },
  { label: 'การมองเห็นในพื้นที่ (ถ้าเกี่ยวข้อง)', icon: <svg className="h-4 w-4 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> },
  { label: 'ความน่าเชื่อถือและ Brand Authority', icon: <svg className="h-4 w-4 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
  { label: 'ลำดับความสำคัญในการเติบโต', icon: <svg className="h-4 w-4 shrink-0 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg> },
]

const deliverables = [
  { label: 'Audit Report: สรุปการมองเห็นบน Google และ AI Search', icon: <svg className="h-4 w-4 shrink-0 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg> },
  { label: 'Competitor Gap: เปรียบเทียบการมองเห็นกับคู่แข่ง', icon: <svg className="h-4 w-4 shrink-0 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg> },
  { label: 'Prioritized Roadmap: เรียงลำดับความสำคัญแล้ว', icon: <svg className="h-4 w-4 shrink-0 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg> },
  { label: 'Opportunity List: โอกาสสำคัญและสิ่งที่ขวางการเติบโต', icon: <svg className="h-4 w-4 shrink-0 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg> },
  { label: 'Debrief Call: ประชุมวางแผนขั้นตอนต่อไปด้วยกัน', icon: <svg className="h-4 w-4 shrink-0 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg> },
]

const workflow = [
  { step: '01', title: 'แชร์ข้อมูลเบื้องต้น',    desc: 'ส่ง URL เว็บไซต์ เป้าหมายธุรกิจ และปัญหาการมองเห็นที่พบอยู่' },
  { step: '02', title: 'วิเคราะห์การมองเห็น',   desc: 'ตรวจว่าแบรนด์ปรากฏอย่างไรบน Google, AI Search และ Local Search' },
  { step: '03', title: 'เปรียบเทียบคู่แข่ง',    desc: 'หาจุดที่คู่แข่งได้เปรียบด้านการค้นพบ ความเข้าใจ และความน่าเชื่อถือ' },
  { step: '04', title: 'จัดลำดับโอกาสเติบโต',  desc: 'ระบุสิ่งที่ควรแก้ก่อนเพื่อให้เกิดผลลัพธ์ชัดเจนที่สุด' },
  { step: '05', title: 'ประชุมวางแผนต่อ',        desc: 'รีวิว Roadmap และตัดสินใจระดับการสนับสนุนที่เหมาะสม' },
]

const pricingPlans = [
  {
    tier: 'Starter',
    price: '5,000 THB',
    fit: 'ธุรกิจที่ต้องการเข้าใจการมองเห็นปัจจุบันบน Google และ AI Search',
    items: ['Visibility Report', 'Gap Analysis', '1 Platform Focus'],
    featured: false,
  },
  {
    tier: 'Growth',
    price: '12,000 THB',
    fit: 'ธุรกิจที่ต้องการ Roadmap เรียงลำดับความสำคัญและวิเคราะห์คู่แข่ง',
    items: ['Full Audit Report', 'Competitor Gap', 'Prioritized Roadmap', 'Quick Wins', 'Debrief Call'],
    featured: true,
    badge: 'ยอดนิยม',
  },
  {
    tier: 'Enterprise',
    price: 'Custom Pricing',
    fit: 'เว็บไซต์ขนาดใหญ่ ธุรกิจหลายสาขา หรือแบรนด์ระดับองค์กร',
    items: ['Multi-site Audit', 'Multi-market Analysis', 'Exec Presentation', 'Priority Roadmap'],
    featured: false,
  },
]

function AuditReportPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/50">
      <div className="border-b border-neutral-800 bg-neutral-950 px-6 py-4">
        <p className="font-mono text-xs font-semibold tracking-wider text-teal-400">DISCOVERY AUDIT REPORT</p>
        <p className="mt-1 font-mono text-[10px] text-neutral-600">your-brand.com · Jun 2026 · Saralak Search</p>
      </div>

      <div className="border-b border-neutral-800 px-6 py-5">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs text-neutral-500">Brand Visibility Score</p>
          <p className="font-mono text-2xl font-black text-amber-400">4.2<span className="text-sm text-neutral-600">/10</span></p>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-neutral-800">
          <div className="h-1.5 w-[42%] rounded-full bg-gradient-to-r from-amber-600 to-amber-400" />
        </div>
        <p className="mt-2 font-mono text-[10px] text-neutral-600">3 critical gaps · 8 quick wins available</p>
      </div>

      <div className="border-b border-neutral-800 px-6 py-4">
        <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-600">Platform Analysis</p>
        <div className="grid gap-2.5">
          {[
            { p: 'Google Search', bar: 60, score: '6/10', bar_c: 'bg-amber-500',   txt: 'text-amber-400',   icon: '⚠' },
            { p: 'AI Overview',   bar: 30, score: '3/10', bar_c: 'bg-red-500',     txt: 'text-red-400',     icon: '✗' },
            { p: 'ChatGPT',       bar: 10, score: '1/10', bar_c: 'bg-red-500',     txt: 'text-red-400',     icon: '✗' },
            { p: 'Google Maps',   bar: 70, score: '7/10', bar_c: 'bg-emerald-500', txt: 'text-emerald-400', icon: '✓' },
          ].map(({ p, bar, score, bar_c, txt, icon }) => (
            <div key={p} className="flex items-center gap-3">
              <span className={`shrink-0 text-xs ${txt}`}>{icon}</span>
              <span className="w-28 shrink-0 font-mono text-[11px] text-neutral-400">{p}</span>
              <div className="h-1 flex-1 rounded-full bg-neutral-800">
                <div className={`h-1 rounded-full ${bar_c}`} style={{ width: `${bar}%` }} />
              </div>
              <span className={`shrink-0 font-mono text-xs font-bold ${txt}`}>{score}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-5">
        <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-600">Priority Actions</p>
        <div className="grid gap-2">
          {[
            { p: 'P1', text: 'Fix AI Overview content structure', c: 'bg-red-900/50 text-red-300' },
            { p: 'P1', text: 'Add Entity schema + llms.txt',       c: 'bg-red-900/50 text-red-300' },
            { p: 'P2', text: 'Build topic authority cluster',       c: 'bg-amber-900/50 text-amber-300' },
          ].map((item) => (
            <div key={item.text} className="flex items-start gap-2.5">
              <span className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold ${item.c}`}>{item.p}</span>
              <span className="font-mono text-xs text-neutral-400">{item.text}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs text-teal-400">→ Full roadmap: 12 prioritized actions ready</p>
      </div>
    </div>
  )
}

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
              '@id': 'https://saralak-search.com/discovery-audit/#service',
              name: 'Discovery Audit',
              description: 'วิเคราะห์เว็บไซต์เพื่อค้นหาปัญหาและโอกาสบน Google Search, AI Overview และ Google Maps พร้อม Prioritized Roadmap และ Quick Wins',
              provider: { '@id': 'https://saralak-search.com/#organization' },
              areaServed: ['Thailand', 'Southeast Asia'],
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '5000',
                highPrice: '18000',
                priceCurrency: 'THB',
              },
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-teal-400">Discovery Audit</p>
              <h1 className="break-words text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
                เว็บไซต์กำลังเสียโอกาส
                <br className="hidden sm:block" />
                <span className="animate-gradient-text">ตรงไหน?</span>
              </h1>
              <p className="thai-readable mt-6 text-lg leading-8 text-neutral-300">
                ค้นหาปัญหาที่ทำให้เว็บไซต์ไม่ติด Google ไม่ถูก AI แนะนำ
                และพลาดโอกาสทางธุรกิจ — ก่อนตัดสินใจลงทุนเพิ่ม
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {['14 findings avg', '8 quick wins', '90-day roadmap', '1 debrief call'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-neutral-400">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton to="/contact">เริ่มต้นด้วย Discovery Audit</CTAButton>
                <CTAButton to="/case-studies" variant="secondary">ดูตัวอย่างผลงาน</CTAButton>
              </div>
              <p className="mt-6 text-xs text-neutral-600">
                ยังไม่แน่ใจ?{' '}
                <Link to="/blog/what-is-seo" className="text-teal-500 hover:underline">อ่าน SEO คืออะไร</Link>
                {' · '}
                <Link to="/blog/seo-geo-aeo" className="text-teal-500 hover:underline">SEO vs AEO vs GEO</Link>
              </p>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-teal-500/8 blur-2xl" />
              <div className="relative">
                <AuditReportPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="mb-8 text-sm font-semibold uppercase tracking-wide text-teal-800">ปัญหาที่ Audit ช่วยตอบ</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, i) => (
              <article
                key={problem}
                className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-50"
              >
                <div className="bg-neutral-50 px-5 py-3 border-b border-neutral-100">
                  <p className="font-mono text-2xl font-black text-neutral-200 group-hover:text-red-100 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p className="thai-readable font-semibold leading-7 text-neutral-950">{problem}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Checks + Deliverables */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-400">สิ่งที่ตรวจ</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">เน้นสิ่งที่ชี้ว่า<br />ควรเพิ่ม Visibility จากจุดไหนก่อน</h2>
              <div className="mt-8 grid gap-3">
                {checks.map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/5 px-5 py-3.5 transition hover:border-teal-500/30 hover:bg-white/8">
                    {icon}
                    <p className="thai-readable text-sm text-neutral-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-400">สิ่งที่จะได้รับ</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Action plan สำหรับ<br />เพิ่ม Brand Visibility</h2>
              <div className="mt-8 grid gap-3">
                {deliverables.map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-4 rounded-xl border border-teal-800/50 bg-teal-950/60 px-5 py-3.5 transition hover:border-teal-600/50 hover:bg-teal-950/80">
                    {icon}
                    <p className="thai-readable text-sm text-teal-100">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <CTAButton to="/contact">ขอรับ Audit</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process — vertical timeline on dark */}
      <section className="bg-neutral-950 border-t border-neutral-900">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ขั้นตอน" title="ขั้นตอนการทำงาน" tone="light" />
          <div className="mt-12">
            {workflow.map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-700 font-bold text-white shadow-lg shadow-teal-900/50">
                    {step}
                  </div>
                  {i < workflow.length - 1 && (
                    <div className="mt-2 h-full min-h-[2.5rem] w-px bg-teal-900" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="thai-readable mt-2 text-sm leading-6 text-neutral-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ราคา"
            title="เลือก Audit ที่เหมาะกับคุณ"
            description="ค้นหาโอกาสในการเติบโตบน Google Search, AI Search และ Google Maps ก่อนตัดสินใจลงทุนระยะยาว"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pricingPlans.map((plan) =>
              plan.featured ? (
                <article key={plan.tier} className="flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-teal-950 via-[#0d3d36] to-neutral-900 text-white shadow-2xl shadow-teal-950/40">
                  <div className="px-7 pt-7">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-300 ring-1 ring-teal-500/25">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {plan.badge}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-white">{plan.tier}</h3>
                    <p className="mt-1 text-3xl font-bold text-teal-300">{plan.price}</p>
                    <p className="thai-readable mt-3 text-sm leading-6 text-teal-200">{plan.fit}</p>
                    <ul className="mt-5 grid gap-2">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-teal-100">
                          <span className="text-teal-400">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto px-7 pb-7 pt-6">
                    <CTAButton to="/contact" className="w-full">เริ่มต้น Growth Audit</CTAButton>
                  </div>
                </article>
              ) : (
                <article key={plan.tier} className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-neutral-950">{plan.tier}</h3>
                  <p className="mt-2 text-2xl font-bold text-teal-900">{plan.price}</p>
                  <p className="thai-readable mt-3 text-sm leading-6 text-neutral-600">{plan.fit}</p>
                  <ul className="mt-5 grid gap-2">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                        <span className="text-teal-500">→</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <CTAButton to="/contact" className="w-full">เริ่มปรึกษา</CTAButton>
                  </div>
                </article>
              )
            )}
          </div>

          {/* Questions answered */}
          <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
            <div className="border-b border-neutral-200 px-6 py-4">
              <p className="font-semibold text-neutral-950">คำถามที่ Audit ช่วยตอบ</p>
            </div>
            <div className="grid gap-0 divide-y divide-neutral-100 md:grid-cols-2 md:divide-x md:divide-y-0">
              {[
                'ลูกค้าค้นพบแบรนด์ได้ง่ายแค่ไหน?',
                'เราถูกมองเห็นได้มากแค่ไหนเมื่อเทียบกับคู่แข่ง?',
                'Google และ AI เข้าใจธุรกิจของเราดีแค่ไหน?',
                'อะไรกำลังขวางการเติบโตของเว็บไซต์?',
              ].map((q) => (
                <div key={q} className="flex items-start gap-3 px-6 py-4">
                  <span className="mt-0.5 shrink-0 text-teal-500">→</span>
                  <p className="thai-readable text-sm text-neutral-700">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={discoveryAuditFaqs} />

      {/* Contact */}
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
