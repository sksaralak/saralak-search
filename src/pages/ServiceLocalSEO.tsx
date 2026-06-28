import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { localSeoFaqs } from '../content/faqs'

const stats = [
  { stat: '15,000', label: 'THB/เดือน รวมทุกอย่าง' },
  { stat: '4 หมวด', label: 'GBP · SEO · Citations · Report' },
  { stat: '3–6 เดือน', label: 'เห็นผล Keyword Ranking' },
]

const deliverables = [
  {
    title: 'Google Maps (GBP)',
    color: { icon: 'text-teal-400 bg-teal-950 border-teal-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    items: [
      'GBP Audit และ Optimization ครั้งแรก',
      'ปรับ Profile ให้ครบทุก Field — ชั่วโมง รูป เมนู คำอธิบาย',
      'GBP Posts 4 โพสต์/เดือน (โปรโมชั่น อัพเดท รีวิว)',
      'ตอบรีวิวแทนคุณ — ทั้งบวกและลบ',
      'Monthly Insights Report: Call, Direction, Website Clicks',
    ],
  },
  {
    title: 'Local SEO บนเว็บไซต์',
    color: { icon: 'text-sky-400 bg-sky-950 border-sky-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    items: [
      'Local Keyword Research: "[บริการ] + [ย่าน]" ของคุณ',
      'On-page Optimization 2 หน้า/เดือน',
      'Location Page — หน้าสาขาที่ติด Google ได้',
      'LocalBusiness Schema Markup',
      'NAP Consistency Check (ชื่อ-ที่อยู่-เบอร์ตรงกันทุกที่)',
    ],
  },
  {
    title: 'Citations & Reputation',
    color: { icon: 'text-amber-400 bg-amber-950 border-amber-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    items: [
      'ส่งข้อมูลธุรกิจไปยัง Thai Directories 2 แห่ง/เดือน',
      'ตรวจสอบ NAP consistency บน Wongnai, Facebook, TripAdvisor',
      'Review Strategy — วิธีขอรีวิวจากลูกค้าจริง',
    ],
  },
  {
    title: 'รายงานรายเดือน',
    color: { icon: 'text-emerald-400 bg-emerald-950 border-emerald-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    items: [
      'Local Keyword Ranking: อันดับ "[บริการ] [ย่าน]" ของคุณ',
      'GBP Performance: Call / Direction / Website Clicks',
      'Review Count และ Average Rating',
      'Recommendations สำหรับเดือนถัดไป',
    ],
  },
]

const kpis = [
  {
    label: 'โทรศัพท์ (Calls)',
    desc: 'ลูกค้าโทรหาคุณโดยตรงจาก Google Maps',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'ขอเส้นทาง (Directions)',
    desc: 'ลูกค้าตั้งใจเดินทางมาร้านคุณ',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    label: 'คลิกเว็บไซต์',
    desc: 'ลูกค้าดูข้อมูลเพิ่มก่อนตัดสินใจ',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
]

const audiences = [
  {
    label: 'ร้านอาหาร / คาเฟ่',
    text: 'ต้องการทั้งลูกค้า Walk-in จาก Maps และลูกค้าจาก Google Search "[ชื่อร้าน] ใกล้ฉัน"',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    label: 'คลินิก / ทันตกรรม',
    text: 'ผู้ป่วยค้น "คลินิก[ย่าน]" บน Google Search ก่อน แล้วค่อยโทรหรือดูรีวิวบน Maps',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    label: 'โรงแรม / ที่พัก',
    text: 'นักท่องเที่ยวค้น "[จังหวัด] hotel" ทั้งบน Maps และ Google Search ก่อนจอง',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    label: 'ร้านนวด / สปา',
    text: 'ลูกค้าค้น "นวดใกล้ฉัน" หลังเลิกงาน Local SEO ดึง Organic Call โดยไม่ต้องซื้อโฆษณา',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
]

export default function ServiceLocalSEO() {
  return (
    <main>
      <SEO
        title="บริการ Local SEO ไทย สำหรับธุรกิจที่มีหน้าร้าน | Saralak Search"
        description="Local SEO ครบวงจร รวม Google Maps + SEO เว็บไซต์ เริ่มต้น 15,000 บาท/เดือน สำหรับร้านอาหาร คลินิก โรงแรม และธุรกิจที่มีหน้าร้านในไทย"
        path="/services/local-seo"
        image="/image/og/saralak-search-service-og.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': 'https://saralak-search.com/services/local-seo#service',
              name: 'บริการ Local SEO ไทย',
              description: 'Local SEO ครบวงจร รวม Google Maps + SEO เว็บไซต์ สำหรับร้านอาหาร คลินิก โรงแรม และธุรกิจที่มีหน้าร้านในไทย',
              provider: { '@id': 'https://saralak-search.com/#organization' },
              areaServed: 'Thailand',
              offers: {
                '@type': 'Offer',
                price: '15000',
                priceCurrency: 'THB',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saralak-search.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://saralak-search.com/services' },
                { '@type': 'ListItem', position: 3, name: 'Local SEO', item: 'https://saralak-search.com/services/local-seo' },
              ],
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-400">
            <Link to="/services" className="hover:underline">Services</Link>
            {' / '}Local SEO
          </p>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              บริการ Local SEO ให้ลูกค้า
              <br className="hidden sm:block" />
              <span className="animate-gradient-text">ในย่านค้นหาเจอคุณก่อนคู่แข่ง</span>
            </h1>
            <p className="thai-readable mt-6 text-lg leading-8 text-neutral-300">
              บริการ Local SEO ครบวงจร — ช่วยให้ธุรกิจที่มีหน้าร้านปรากฏทั้งบน Google Search และ Google Maps
              เมื่อลูกค้าใกล้ๆ ค้นหา ไม่ว่าจะเป็น "คลินิกลาดพร้าว" หรือ "ร้านอาหารสีลม"
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {['ร้านอาหาร / คาเฟ่', 'คลินิก / ทันตกรรม', 'โรงแรม / ที่พัก', 'ร้านนวด / สปา'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton to="/contact">ดูแผน Local SEO</CTAButton>
              <CTAButton to="/contact" variant="secondary">ขอ Google Maps Quick Check</CTAButton>
            </div>
            <p className="mt-3 text-xs leading-5 text-neutral-500">
              Google Maps Quick Check คือการดูภาพรวม GBP เบื้องต้นฟรี ·{' '}
              <a href="/discovery-audit" className="underline hover:text-teal-300">Discovery Audit</a>
              {' '}คือการวิเคราะห์เต็มรูปแบบ เริ่มต้น 5,000 THB
            </p>
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

      {/* Price + KPIs */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">ราคา</p>
              <p className="mt-2 text-5xl font-black text-neutral-950">
                15,000
                <span className="text-xl font-normal text-neutral-500"> THB/เดือน</span>
              </p>
              <p className="thai-readable mt-3 text-base leading-7 text-neutral-600">
                รวม Google Maps (GBP) + Local SEO เว็บไซต์ + Citations + Monthly Report
                ในแพ็กเกจเดียว ไม่คิดแยก
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                ธุรกิจ 5 สาขาขึ้นไป?{' '}
                <Link to="/contact" className="text-teal-600 hover:underline">
                  ติดต่อขอราคา Multi-location
                </Link>
              </p>
              <div className="mt-6 rounded-xl border border-teal-100 bg-teal-50 p-4">
                <p className="text-sm font-semibold text-teal-800">ทำไม Local SEO ดีกว่า Google Maps อย่างเดียว?</p>
                <p className="thai-readable mt-1.5 text-sm leading-6 text-teal-700">
                  ลูกค้าค้นหาทั้งบน Google Search ("คลินิก ลาดพร้าว") และ Maps
                  แพ็กเกจนี้ครอบคลุมทั้งสองช่องทางในราคาเดียว
                </p>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">KPI ที่วัดผลทุกเดือน</p>
              <div className="grid gap-3">
                {kpis.map(({ label, desc, icon }) => (
                  <div key={label} className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-4 transition-all hover:border-teal-200 hover:bg-teal-50/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-teal-600">
                      {icon}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{label}</p>
                      <p className="thai-readable mt-0.5 text-sm text-neutral-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency strip */}
      <section className="border-y border-teal-900/60 bg-gradient-to-r from-teal-950 via-teal-900 to-teal-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-2xl font-bold text-white">ลูกค้าในย่านของคุณกำลังค้นหาอยู่ทุกวัน</p>
              <p className="thai-readable mt-2 text-base leading-7 text-teal-200">
                ถ้า Google Maps ไม่แสดงธุรกิจของคุณในอันดับต้น ลูกค้าเหล่านั้นก็โทรหาคู่แข่ง
              </p>
            </div>
            <div className="shrink-0">
              <CTAButton to="/discovery-audit">เริ่ม Discovery Audit</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-teal-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="เหมาะสำหรับ"
            title="ธุรกิจที่ต้องการลูกค้าทั้ง Maps และ Google Search"
            description="Local SEO Package เหมาะกับธุรกิจที่ลูกค้าค้นหาทั้งบน Google Search และ Maps ก่อนตัดสินใจ"
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
            description="ทุกรายการคือสิ่งที่ทำจริง วัดได้จริง ไม่ใช่แค่รายการบน Proposal"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
          <SectionHeader eyebrow="ขั้นตอน" title="จาก Audit สู่ลูกค้าในย่านที่วัดผลได้" tone="light" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01', label: 'GBP & SEO Audit',
                border: 'border-teal-800/50', bg: 'bg-teal-950/25', badge: 'bg-teal-900/60 text-teal-300', color: 'text-teal-950',
                body: 'ตรวจ GBP ทุก Field และ SEO เว็บไซต์ — ชื่อ ที่อยู่ เบอร์ รูป ชั่วโมง NAP Consistency และ Local Keyword Gaps',
              },
              {
                step: '02', label: 'Keyword & On-page',
                border: 'border-sky-800/50', bg: 'bg-sky-950/25', badge: 'bg-sky-900/60 text-sky-300', color: 'text-sky-950',
                body: 'วิเคราะห์ "[บริการ] [ย่าน]" ที่ลูกค้าใช้จริง ปรับ On-page 2 หน้า/เดือน และเพิ่ม LocalBusiness Schema',
              },
              {
                step: '03', label: 'Monthly Activities',
                border: 'border-violet-800/50', bg: 'bg-violet-950/25', badge: 'bg-violet-900/60 text-violet-300', color: 'text-violet-950',
                body: '4 GBP Posts, ตอบรีวิวทุกรีวิว, Citations ใหม่ 2 แห่ง/เดือน และอัพเดท GBP Photos ต่อเนื่อง',
              },
              {
                step: '04', label: 'Report & Strategy',
                border: 'border-emerald-800/50', bg: 'bg-emerald-950/25', badge: 'bg-emerald-900/60 text-emerald-300', color: 'text-emerald-950',
                body: 'รายงาน Calls, Directions, Clicks และ Local Keyword Ranking พร้อม Recommendations สำหรับเดือนถัดไป',
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

      {/* Blog links */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-400">อ่านเพิ่มเติม</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/blog/local-seo-customer-intent"
              className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 hover:shadow-md"
            >
              <span className="text-teal-500">→</span>
              ลูกค้าใกล้ฉันรอคุณอยู่ — ทำไม [บริการ+ย่าน] คือ Search ที่พร้อมซื้อที่สุด
            </Link>
            <Link
              to="/blog/increase-sale-restaurant"
              className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 hover:shadow-md"
            >
              <span className="text-teal-500">→</span>
              เพิ่มยอดขายร้านอาหารด้วย Google
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={localSeoFaqs} />

      {/* Final CTA */}
      <section className="bg-teal-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold">ลูกค้าในย่านคุณกำลังหาคู่แข่งอยู่</h2>
          <p className="thai-readable mx-auto mt-4 max-w-lg text-lg leading-8 text-teal-100">
            เริ่มจาก Discovery Audit เพื่อดูว่า Google Maps มองเห็น Profile ของคุณอย่างไร
            และ Local SEO ช่วยดึงลูกค้าในย่านได้แค่ไหน
          </p>
          <ul className="mx-auto mt-5 max-w-sm space-y-2 text-left text-teal-100">
            {[
              'GBP ของคุณสมบูรณ์และ active แค่ไหน',
              'คีย์เวิร์ด "[บริการ] [ย่าน]" ติดอันดับไหน',
              'มี Citation ที่ผิดพลาดทำให้ Google สับสนไหม',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-teal-400">→</span>
                <span className="thai-readable text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact">ตรวจโอกาสบน Google Maps และ Local Search</CTAButton>
            <CTAButton to="/discovery-audit" variant="secondary">เริ่ม Discovery Audit</CTAButton>
          </div>
        </div>
      </section>
    </main>
  )
}
