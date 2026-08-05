import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { googleMapsFaqs } from '../content/faqs'

const stats = [
  { stat: '97%', label: 'คนค้น Google ก่อนเลือกธุรกิจใกล้บ้าน' },
  { stat: '3 KPIs', label: 'Call · Direction · Website Click' },
  { stat: '6,000', label: 'THB/สาขา/เดือน' },
]

const deliverables = [
  {
    title: 'GBP Setup & Optimization',
    color: { icon: 'text-teal-400 bg-teal-950 border-teal-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      'Audit GBP ทุก Field — ชื่อ ที่อยู่ หมวดหมู่ คำอธิบาย',
      'Business Description พร้อม Keywords ที่ลูกค้าใช้จริง',
      'ตรวจ Pin บน Maps ให้ตรงตำแหน่งจริง',
      'เพิ่ม Products / Services พร้อมราคา',
      'เปิด Business Messaging + Booking Link',
    ],
  },
  {
    title: 'Photos & Visual',
    color: { icon: 'text-sky-400 bg-sky-950 border-sky-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    items: [
      'แนะนำรูปที่ควรถ่ายและอัพโหลด (ตามประเภทธุรกิจ)',
      'อัพโหลดรูปใหม่ 4 รูป/เดือน (ถ้าได้รับรูปจาก client)',
      'ตรวจรูปปกและรูป Profile ให้ถูกต้องตาม Google Guideline',
    ],
  },
  {
    title: 'GBP Posts',
    color: { icon: 'text-violet-400 bg-violet-950 border-violet-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    items: [
      '4 โพสต์/เดือน — โปรโมชั่น อัพเดท สินค้าใหม่ รีวิวลูกค้า',
      'แต่ละโพสต์มี CTA ชัดเจน (โทร ขอเส้นทาง เข้าเว็บ)',
      'Special Hours อัพเดทล่วงหน้าก่อนวันหยุดและเทศกาล',
    ],
  },
  {
    title: 'Review Management',
    color: { icon: 'text-amber-400 bg-amber-950 border-amber-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    items: [
      'ตอบรีวิวทุกรีวิว — ทั้งบวกและลบ ภายใน 48 ชม.',
      'Draft คำตอบให้ approve ก่อน post (optional)',
      'Review Strategy — วิธีขอรีวิวจากลูกค้าจริงอย่างถูกวิธี',
    ],
  },
  {
    title: 'Monthly GBP Report',
    color: { icon: 'text-emerald-400 bg-emerald-950 border-emerald-800/60' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    items: [
      'Call: จำนวนโทรเข้าจาก Google Maps',
      'Direction: จำนวนขอเส้นทาง',
      'Website Clicks: จำนวนคลิกเว็บ',
      'Search Impressions: คนเห็น Profile กี่ครั้ง',
      'Recommendations สำหรับเดือนถัดไป',
    ],
  },
]

const multilocation = [
  { range: '1 สาขา', price: '6,000', note: '' },
  { range: '2–4 สาขา', price: '5,000', note: '/สาขา' },
  { range: '5 สาขาขึ้นไป', price: 'Custom', note: '— ติดต่อขอราคา' },
]

const audiences = [
  {
    label: 'ร้านอาหาร / คาเฟ่',
    text: 'ลูกค้าค้น "ร้านอาหารใกล้ฉัน" ทุกวัน GBP ที่แข็งแกร่งช่วยให้ติด 3-Pack',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    label: 'คลินิก / ทันตกรรม',
    text: 'คนค้น "คลินิกใกล้ฉัน" ก่อนโทรนัดเสมอ — รีวิวและชั่วโมงทำการต้องชัด',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    label: 'โรงแรม / ที่พัก',
    text: 'นักท่องเที่ยวเปิด Maps ก่อนจองเสมอ รูปและรีวิวคือปัจจัยตัดสินใจหลัก',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    label: 'ร้านค้า / Retail',
    text: 'ลูกค้าเช็ค Maps ก่อนออกจากบ้าน ชั่วโมงเปิดปิดและรูปสินค้าต้องอัพเดท',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    label: 'ร้านนวด / สปา',
    text: 'คนค้น "นวดใกล้ฉัน" หลังเลิกงานทุกวัน — GBP ที่ดีดึง Walk-in ได้',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
]

function GBPMockup() {
  const metrics = [
    { label: 'โทรศัพท์เข้า', before: '12', after: '47' },
    { label: 'ขอเส้นทาง', before: '8', after: '35' },
    { label: 'คลิกเว็บไซต์', before: '23', after: '91' },
    { label: 'Photo Views', before: '340', after: '1,240' },
  ]
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/60">
      <div className="border-b border-neutral-100 bg-neutral-50 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
            B
          </div>
          <div>
            <p className="font-semibold text-neutral-900">ธุรกิจของคุณ</p>
            <div className="mt-0.5 flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="h-3 w-3 fill-amber-400" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
              ))}
              <span className="ml-1 text-xs text-neutral-500">4.8 · 127 รีวิว</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 grid grid-cols-3 font-mono text-[10px] font-semibold text-neutral-400">
          <span>KPI</span>
          <span className="text-center text-red-500">ก่อน</span>
          <span className="text-right text-emerald-600">หลัง</span>
        </div>
        {metrics.map((r) => (
          <div key={r.label} className="flex items-center justify-between border-b border-neutral-100 py-2.5 last:border-0">
            <span className="text-sm text-neutral-600">{r.label}</span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-red-400 line-through">{r.before}</span>
              <span className="font-mono text-sm font-bold text-emerald-600">{r.after}</span>
              <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
            </div>
          </div>
        ))}
        <p className="mt-3 font-mono text-[10px] text-teal-600">→ ตัวอย่างผลลัพธ์เฉลี่ย 6 เดือน</p>
      </div>
    </div>
  )
}

export default function ServiceGoogleMaps() {
  return (
    <main>
      <SEO
        title="บริการ Google Maps Optimization สำหรับธุรกิจไทย | Saralak Search"
        description="เพิ่ม Call, Direction และ Website Clicks จาก Google Maps เริ่มต้น 6,000 บาท/สาขา/เดือน สำหรับร้านอาหาร คลินิก โรงแรม และธุรกิจที่มีหน้าร้าน"
        path="/services/google-maps"
        image="/image/og/saralak-search-service-og.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': 'https://saralak-search.com/services/google-maps#service',
              name: 'บริการ Google Maps Optimization',
              description: 'เพิ่ม Call, Direction และ Website Clicks จาก Google Maps สำหรับร้านอาหาร คลินิก โรงแรม และธุรกิจที่มีหน้าร้านในไทย',
              provider: { '@id': 'https://saralak-search.com/#organization' },
              areaServed: 'Thailand',
              offers: {
                '@type': 'Offer',
                price: '6000',
                priceCurrency: 'THB',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saralak-search.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://saralak-search.com/services' },
                { '@type': 'ListItem', position: 3, name: 'Google Maps', item: 'https://saralak-search.com/services/google-maps' },
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
            {' / '}Google Maps
          </p>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              บริการ Google Maps Optimization
              <br className="hidden sm:block" />
              <span className="animate-gradient-text">ให้ลูกค้าในย่านโทรหาคุณก่อนคู่แข่ง</span>
            </h1>
            <p className="thai-readable mt-6 text-lg leading-8 text-neutral-300">
              บริการ Google Maps Optimization ช่วยให้ธุรกิจของคุณปรากฏในอันดับต้นเมื่อลูกค้าค้นหาในย่าน
              วัดผลด้วย Call, Direction Requests และ Website Clicks — ไม่ใช่แค่อันดับ
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {['ร้านอาหาร / คาเฟ่', 'คลินิก / ทันตกรรม', 'โรงแรม / ที่พัก', 'ร้านค้า / Retail'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton to="/contact">ขอ Google Maps Quick Check</CTAButton>
              <CTAButton to="/services/local-seo" variant="secondary">ดูแผน Local SEO</CTAButton>
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

      {/* Price + Mockup */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">ราคา</p>
              <p className="mt-2 text-5xl font-black text-neutral-950">
                6,000
                <span className="text-xl font-normal text-neutral-500"> THB/สาขา/เดือน</span>
              </p>
              <p className="thai-readable mt-3 text-base leading-7 text-neutral-600">
                รวม GBP Optimization, 4 โพสต์/เดือน, Review Management และ Monthly Report
              </p>
              <p className="thai-readable mt-3 text-sm leading-6 text-neutral-500">
                ต้องการ SEO เว็บไซต์ด้วย?{' '}
                <Link to="/services/local-seo" className="text-teal-600 hover:underline">
                  ดู Local SEO Package
                </Link>
                {' '}ที่รวมทั้งสองไว้ด้วยกัน
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
                <div className="border-b border-neutral-100 bg-neutral-50 px-5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">ราคาหลายสาขา</p>
                </div>
                {multilocation.map(({ range, price, note }) => (
                  <div key={range} className="flex items-center justify-between border-b border-neutral-100 px-5 py-4 last:border-0">
                    <span className="text-sm text-neutral-600">{range}</span>
                    <span className="font-bold text-neutral-950">
                      {price === 'Custom' ? (
                        <span className="text-teal-600">{price}{note}</span>
                      ) : (
                        <>{price} THB<span className="text-xs font-normal text-neutral-400">{note}/เดือน</span></>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-teal-500/8 blur-2xl" />
              <div className="relative">
                <GBPMockup />
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
              <p className="text-2xl font-bold text-white">ลูกค้าที่ค้นหาบน Google Maps พร้อมโทรและพร้อมมา</p>
              <p className="thai-readable mt-2 text-base leading-7 text-teal-200">
                ถ้า Profile ไม่สมบูรณ์หรืออันดับต่ำกว่าคู่แข่ง ลูกค้าเหล่านั้นก็ไม่มีโอกาสเจอคุณ
              </p>
            </div>
            <div className="shrink-0">
              <CTAButton to="/discovery-audit" variant="secondary">เริ่ม Discovery Audit</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Google Maps matters */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">ทำไมต้องทำ</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-neutral-950">
                Google Maps คือ Channel<br />ที่ลูกค้าพร้อมซื้อมากที่สุด
              </h2>
              <p className="thai-readable mt-4 text-base leading-8 text-neutral-600">
                ต่างจาก Social Media ที่ลูกค้า scroll ผ่านโดยไม่มี intent — คนที่ค้นหาบน Google Maps <strong>กำลังหาสถานที่จะไปอยู่แล้ว</strong> พวกเขาหิวข้าว ต้องการนัดหมอ หรืออยากรู้ว่าร้านปิดกี่โมง
              </p>
              <p className="thai-readable mt-3 text-base leading-8 text-neutral-600">
                นั่นคือเหตุผลที่ Call Rate จาก Google Maps สูงกว่า Social Media 3–5 เท่า — เพราะ <strong>intent ต่างกัน</strong> ลูกค้าใน Maps พร้อมโทร พร้อมมา พร้อมจ่าย
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  stat: '76%', desc: 'ของคนที่ค้นหา local บน mobile ไปที่ร้านภายใน 24 ชั่วโมง',
                  color: 'text-teal-700', bg: 'bg-teal-50 border-teal-100',
                },
                {
                  stat: '28%', desc: 'ของการค้นหา local ทำให้เกิดการซื้อจริงทันที — สูงกว่า non-local search 10 เท่า',
                  color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-100',
                },
                {
                  stat: '3–4×', desc: 'ตัวอย่างการเพิ่มขึ้นของ Call เมื่อ GBP ได้รับการปรับปรุงครบถ้วน — ผลลัพธ์จริงขึ้นอยู่กับประเภทธุรกิจและพื้นที่',
                  color: 'text-sky-700', bg: 'bg-sky-50 border-sky-100',
                },
              ].map(({ stat, desc, color, bg }) => (
                <div key={stat} className={`flex items-start gap-4 rounded-xl border p-5 ${bg}`}>
                  <p className={`shrink-0 text-3xl font-extrabold ${color}`}>{stat}</p>
                  <p className="thai-readable text-sm leading-6 text-neutral-700">{desc}</p>
                </div>
              ))}
              <p className="mt-1 text-xs text-neutral-400">ข้อมูลอ้างอิงจาก Google Consumer Insights & BrightLocal Local Consumer Review Survey — ผลลัพธ์จริงขึ้นอยู่กับประเภทธุรกิจ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-teal-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="เหมาะสำหรับ"
            title="ธุรกิจที่ได้ประโยชน์สูงสุดจาก Google Maps"
            description="ธุรกิจที่ลูกค้าค้นหาตามพื้นที่และเดินเข้าร้าน คือกลุ่มที่ Google Maps ให้ผลตอบแทนสูงที่สุด"
            tone="light"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
            description="ทุกรายการทำจริง วัดได้จริง ไม่ใช่แค่รายการบน Proposal"
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

      {/* How it works */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="ขั้นตอน" title="จาก Audit สู่ผลลัพธ์ที่วัดได้" tone="light" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { step: '01', label: 'Audit & Setup', color: 'text-teal-950', border: 'border-teal-800/50', bg: 'bg-teal-950/25', badge: 'bg-teal-900/60 text-teal-300', body: 'ตรวจ GBP ทุก Field ตั้งแต่ชั่วโมงทำการ รูปภาพ คำอธิบาย ไปจนถึง Pin บนแผนที่' },
              { step: '02', label: 'Optimize Monthly', color: 'text-sky-950', border: 'border-sky-800/50', bg: 'bg-sky-950/25', badge: 'bg-sky-900/60 text-sky-300', body: 'โพสต์ 4 ครั้ง/เดือน ตอบรีวิว อัพโหลดรูป และอัพเดทชั่วโมงพิเศษล่วงหน้า' },
              { step: '03', label: 'Measure & Report', color: 'text-violet-950', border: 'border-violet-800/50', bg: 'bg-violet-950/25', badge: 'bg-violet-900/60 text-violet-300', body: 'รายงาน Call, Direction, Click ทุกเดือน พร้อม Recommendation สำหรับเดือนถัดไป' },
            ].map((item) => (
              <div key={item.label} className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-200 hover:-translate-y-0.5 ${item.border} ${item.bg}`}>
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

      {/* Case study — blog-backed */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">ตัวอย่างและบทความเชิงลึก</p>
          <h2 className="mt-2 text-3xl font-semibold text-neutral-950">Google Maps ช่วยธุรกิจได้ยังไงบ้าง?</h2>
          <p className="thai-readable mt-3 max-w-2xl text-base leading-7 text-neutral-500">
            อ่านบทความเชิงลึกที่อธิบายแต่ละ use case พร้อม stat จริง วิธีทำ และสิ่งที่ธุรกิจพลาดบ่อยที่สุด
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            {/* Blog card: เพิ่มยอดขายร้านอาหาร */}
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md">
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">ร้านอาหาร / คาเฟ่</span>
                </div>
                <h3 className="thai-readable mt-3 text-lg font-semibold leading-7 text-neutral-950">
                  เพิ่มยอดขายร้านอาหาร ด้วย Google Maps<br />ลูกค้ากำลังหิวกำลังหาคุณอยู่
                </h3>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-500 flex-1">
                  คนหิวข้าว 2,240,000 คน/เดือนค้นหา "ร้านอาหารใกล้ฉัน" บน Google — บทความนี้อธิบายว่าทำไม GBP ที่ไม่สมบูรณ์ทำให้คุณพลาดพวกเขาทุกวัน และต้องแก้ตรงไหนก่อน
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['เพิ่ม Calls', 'Review Strategy', 'Platform เปรียบเทียบ', 'Peak Time'].map(t => (
                    <span key={t} className="rounded-full bg-teal-50 px-2.5 py-0.5 text-[10px] font-semibold text-teal-700">{t}</span>
                  ))}
                </div>
              </div>
              <div className="border-t border-neutral-200 px-6 py-4">
                <Link
                  to="/blog/increase-sale-restaurant"
                  className="flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-800"
                >
                  อ่านบทความเต็ม
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Blog cards: อุตสาหกรรมอื่น */}
            {[
              {
                eyebrow: 'นวด / สปา',
                title: 'เพิ่มยอดขายร้านนวดและสปา ด้วย Google Maps',
                body: 'คำค้นหากลุ่มนวดและสปาแบบ "ใกล้ฉัน" รวมกัน 1.34 ล้านครั้ง/เดือน และโตขึ้นถึง +49% เทียบปีก่อน — แต่ร้านส่วนใหญ่ยังไม่ใส่ราคาและรูปหน้าร้าน',
                tags: ['ราคาบน GBP', 'ร้านเปิดดึก', 'นักท่องเที่ยว', 'ลิงก์จอง'],
                to: '/blog/increase-sale-massage-spa',
              },
              {
                eyebrow: 'อาบน้ำตัดขนสัตว์เลี้ยง',
                title: 'เพิ่มยอดขายร้านอาบน้ำตัดขนสุนัข ด้วย Google Maps',
                body: 'คำค้นหากลุ่มกรูมมิ่งมี competition ระดับ Low แทบทุกคำ ติด 3-pack ง่ายกว่าธุรกิจอื่น และลูกค้ากลับมาซ้ำทุก 4–8 สัปดาห์',
                tags: ['Before / After', 'ราคาเป็นช่วง', 'ลูกค้าประจำ', 'Service area'],
                to: '/blog/increase-sale-pet-grooming',
              },
              {
                eyebrow: 'ร้านสัตว์เลี้ยง / อาหารสัตว์',
                title: 'เพิ่มยอดขายร้านขายสัตว์เลี้ยง ด้วย Google Maps',
                body: '"ร้านขายอาหารสัตว์ ใกล้ฉัน" 40,500 ครั้ง/เดือน คนกลุ่มนี้ต้องการของวันนี้ ไม่ใช่รอส่ง 2 วัน — จุดที่ร้านออนไลน์เลียนแบบไม่ได้',
                tags: ['แบรนด์ที่มีขาย', 'หมวดหมู่ GBP', 'บริการเสริม', 'แข่งกับ e-commerce'],
                to: '/blog/increase-sale-pet-shop',
              },
            ].map((card) => (
              <article key={card.to} className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md">
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">{card.eyebrow}</span>
                  </div>
                  <h3 className="thai-readable mt-3 text-lg font-semibold leading-7 text-neutral-950">{card.title}</h3>
                  <p className="thai-readable mt-2 flex-1 text-sm leading-6 text-neutral-500">{card.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.tags.map(t => (
                      <span key={t} className="rounded-full bg-teal-50 px-2.5 py-0.5 text-[10px] font-semibold text-teal-700">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-neutral-200 px-6 py-4">
                  <Link
                    to={card.to}
                    className="flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-800"
                  >
                    อ่านบทความเต็ม
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}

            {/* Blog card: เพิ่มยอดขาย Google Maps */}
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">ทุกประเภทธุรกิจ</span>
                </div>
                <h3 className="thai-readable mt-3 text-lg font-semibold leading-7 text-neutral-950">
                  เพิ่มยอดขายบน Google Maps<br />ให้ลูกค้าใกล้ฉันหาเจอ!
                </h3>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-500 flex-1">
                  วัดผลด้วย Call · Direction · Website Click ไม่ใช่อันดับ — พร้อมตารางเปรียบเทียบ Google Maps vs SEO vs Local SEO และเหตุผลที่ Google Maps คือ 1 ใน 3 ปัจจัยหลักของ GEO
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['3 KPI จริง', 'GEO Connection', 'Quick Win', 'ตารางเปรียบเทียบ'].map(t => (
                    <span key={t} className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700">{t}</span>
                  ))}
                </div>
              </div>
              <div className="border-t border-neutral-200 px-6 py-4">
                <Link
                  to="/blog/increase-sale-google-maps"
                  className="flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors group-hover:text-emerald-800"
                >
                  อ่านบทความเต็ม
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </article>

          </div>
          <div className="mt-8 text-center">
            <CTAButton to="/discovery-audit">เริ่ม Discovery Audit</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={googleMapsFaqs} />

      {/* Final CTA */}
      <section className="bg-teal-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold">ยังไม่รู้ว่า Google Maps ของคุณพร้อมแค่ไหน?</h2>
          <p className="thai-readable mx-auto mt-4 max-w-lg text-lg leading-8 text-teal-100">
            เริ่มจาก Discovery Audit เพื่อดูว่า Google Maps มองเห็น Profile ของคุณอย่างไร
            และอะไรที่ทำให้ลูกค้าเลือกคู่แข่งแทน
          </p>
          <ul className="mx-auto mt-5 max-w-sm space-y-2 text-left text-teal-100">
            {[
              'GBP สมบูรณ์แค่ไหน และตรงไหนที่ขาดหายไป',
              'ลูกค้าในย่านเจอธุรกิจคุณบน Maps ได้ไหม',
              'รีวิวและรูปภาพส่งผลต่อ Ranking อย่างไร',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-teal-400">→</span>
                <span className="thai-readable text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact">ขอ Google Maps Quick Check</CTAButton>
            <CTAButton to="/services/local-seo" variant="secondary">ดูแผน Local SEO</CTAButton>
          </div>
        </div>
      </section>
    </main>
  )
}
