import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import FAQSection from '../components/FAQSection'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { faqJsonLd, seoTrainingFaqs } from '../content/faqs'
import { brand } from '../content/site'

const pageUrl = 'https://saralak-search.com/services/seo-training'

const packages = [
  {
    name: 'เรียนเดี่ยว ออนไลน์',
    price: '9,900',
    unit: 'บาท / คน',
    format: 'ออนไลน์ผ่านวิดีโอคอล',
    detail: '6 ชั่วโมง แบ่ง 3 ครั้ง ครั้งละ 2 ชั่วโมง',
    seats: '1 คน',
    note: 'มีเวลากลับไปลองทำกับเว็บจริงระหว่างแต่ละครั้ง แล้วเอาปัญหามาถามรอบถัดไป',
    highlight: false,
  },
  {
    name: 'เรียนเดี่ยว onsite',
    price: '15,000',
    unit: 'บาท / 1–2 คน',
    format: 'นัดเรียนตัวต่อตัว',
    detail: '1 วัน 6 ชั่วโมง',
    seats: '1–2 คน',
    note: 'เรียนจบในวันเดียว นั่งทำกับเว็บของตัวเองไปพร้อมกัน เหมาะกับเจ้าของธุรกิจที่มากับหุ้นส่วนหรือคนดูแลเว็บ',
    highlight: true,
  },
  {
    name: 'กลุ่มเล็ก',
    price: '25,000',
    unit: 'บาท / กลุ่ม',
    format: 'onsite หรือออนไลน์',
    detail: '1 วัน 6 ชั่วโมง',
    seats: '3–5 คน',
    note: 'สำหรับทีมเล็กหรือเพื่อนที่ทำธุรกิจคล้ายกัน ใช้เว็บของผู้เรียนเป็นโจทย์ผลัดกันตรวจ',
    highlight: false,
  },
  {
    name: 'อบรมในองค์กร',
    price: '35,000',
    unit: 'บาท ขึ้นไป',
    format: 'onsite ที่บริษัท',
    detail: '1 วัน 6 ชั่วโมง',
    seats: '6–15 คน',
    note: 'ปรับหลักสูตรตามหน้าที่ของทีม เช่น ทีมคอนเทนต์ ทีมเว็บ หรือผู้บริหารที่ต้องตรวจงานเอเจนซี่',
    highlight: false,
  },
]

const syllabus = [
  {
    title: 'Google หาเว็บเจอและจัดอันดับยังไง',
    body: 'เข้าใจขั้นตอนเก็บข้อมูล จัดเก็บ และจัดอันดับ แล้วเปิด Google Search Console ของเว็บตัวเองดูว่าหน้าไหนติด หน้าไหนหาย',
  },
  {
    title: 'หาคีย์เวิร์ดที่ลูกค้าพิมพ์จริง',
    body: 'ใช้เครื่องมือฟรีหาคำค้น แยกว่าคนค้นอยากรู้ อยากเทียบ หรืออยากซื้อ แล้วเลือกคำที่เว็บมีโอกาสติดและพาไปสู่ยอดขาย',
  },
  {
    title: 'วางโครงเว็บและปรับหน้าเดิม',
    body: 'หนึ่งหน้า หนึ่งเรื่อง ปรับชื่อหน้า (Title) หัวข้อ และลิงก์ภายในให้ Google เข้าใจว่าหน้าไหนตอบคำค้นไหน',
  },
  {
    title: 'เขียนบทความ SEO ที่คนอ่านจบ',
    body: 'ตอบคำถามตั้งแต่ย่อหน้าแรก วางหัวข้อตามคำที่คนค้น ใส่ข้อมูลจริงจากธุรกิจ และไม่ยัดคีย์เวิร์ด',
  },
  {
    title: 'เช็กปัญหาเทคนิคที่เจ้าของเว็บตรวจเองได้',
    body: 'ความเร็ว มือถือ หน้าที่ไม่ถูกเก็บ หน้าซ้ำ และลิงก์เสีย พร้อมรู้ว่าเรื่องไหนแก้เองได้ เรื่องไหนต้องส่งต่อให้คนทำเว็บ',
  },
  {
    title: 'สร้างลิงก์จากเว็บอื่น (Backlink) แบบปลอดภัย',
    body: 'ลิงก์แบบไหนช่วย แบบไหนเสี่ยงโดนลงโทษ และวิธีให้แบรนด์ถูกพูดถึงจากเว็บอื่นโดยไม่ต้องซื้อลิงก์',
  },
  {
    title: 'จัดเนื้อหาให้ AI Overview และ ChatGPT หยิบไปตอบได้',
    body: 'จัดคำตอบให้ชัด ใส่หลักฐานที่ตรวจสอบได้ และทำข้อมูลแบรนด์ให้ตรงกันทุกที่ ต่อยอดจาก SEO เดิม ไม่ต้องเริ่มใหม่',
  },
  {
    title: 'วัดผลและวางแผน 90 วัน',
    body: 'อ่านตัวเลขใน Search Console และ GA4 ให้เป็น แล้วจัดลำดับงานของเว็บตัวเองว่าเดือนแรกควรทำอะไรก่อน',
  },
]

const audiences = [
  {
    label: 'เจ้าของธุรกิจ',
    text: 'อยากทำ SEO เอง หรืออย่างน้อยอยากรู้ว่าควรจ้างอะไร ไม่ควรจ่ายเรื่องไหน',
  },
  {
    label: 'ทีมการตลาดและคอนเทนต์',
    text: 'ต้องเขียนบทความและดูแลเว็บอยู่แล้ว แต่ยังไม่แน่ใจว่าทำถูกทางหรือวัดผลยังไง',
  },
  {
    label: 'คนที่จ้างเอเจนซี่อยู่',
    text: 'อยากอ่านรายงานเป็น ถามคำถามถูกจุด และรู้ว่างานที่จ่ายไปได้ผลจริงไหม',
  },
  {
    label: 'คนเริ่มสายงาน SEO',
    text: 'อยากได้ภาพการทำงานจริงจากเว็บลูกค้า ไม่ใช่แค่ทฤษฎีจากคลิป',
  },
]

const chooser = [
  { condition: 'เรียนคนเดียว อยากกลับไปลองทำระหว่างรอบ', choice: 'เรียนเดี่ยว ออนไลน์' },
  { condition: 'อยากเรียนจบในวันเดียว หรือมากับหุ้นส่วน', choice: 'เรียนเดี่ยว onsite' },
  { condition: 'ทีม 3–5 คน อยากเรียนพร้อมกัน', choice: 'กลุ่มเล็ก' },
  { condition: 'ทีมตั้งแต่ 6 คน หรืออยากได้หลักสูตรเฉพาะบริษัท', choice: 'อบรมในองค์กร' },
  { condition: 'ไม่มีเวลาทำเอง อยากให้คนอื่นดูแลทั้งหมด', choice: 'จ้างทำ SEO รายเดือน', to: '/services/seo' },
]

export default function ServiceSEOTraining() {
  return (
    <main>
      <SEO
        title="สอน SEO ตัวต่อตัว ออนไลน์ onsite และอบรมองค์กร | Saralak Search"
        description="คอร์สเรียน SEO ใช้เว็บของผู้เรียนเป็นโจทย์ เลือกได้ทั้งเรียนเดี่ยวออนไลน์ 9,900 บาท onsite 15,000 บาท กลุ่มเล็ก และอบรมในองค์กร ครอบคลุม AI Overview และ ChatGPT"
        path="/services/seo-training"
        image="/image/og/saralak-search-service-og.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': `${pageUrl}#service`,
              name: 'สอน SEO',
              serviceType: 'SEO Training',
              description: 'คอร์สสอน SEO แบบตัวต่อตัว กลุ่มเล็ก และอบรมในองค์กร ใช้เว็บของผู้เรียนเป็นโจทย์ ครอบคลุม SEO, AEO และ GEO',
              provider: { '@id': 'https://saralak-search.com/#organization' },
              areaServed: 'Thailand',
              offers: packages.map((item) => ({
                '@type': 'Offer',
                name: item.name,
                price: item.price.replace(',', ''),
                priceCurrency: 'THB',
              })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saralak-search.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://saralak-search.com/services' },
                { '@type': 'ListItem', position: 3, name: 'สอน SEO', item: pageUrl },
              ],
            },
            faqJsonLd(seoTrainingFaqs),
          ],
        }}
      />

      {/* Hero */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-400">
            <Link to="/services" className="hover:underline">Services</Link>
            {' / '}สอน SEO
          </p>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              สอน SEO จากเว็บจริง
              <br className="hidden sm:block" />
              <span className="animate-gradient-text">เรียนจบแล้วทำต่อเองได้</span>
            </h1>
            <p className="thai-readable mt-6 text-lg leading-8 text-neutral-300">
              คอร์สเรียน SEO แบบตัวต่อตัว กลุ่มเล็ก และอบรมในองค์กร ใช้เว็บของผู้เรียนเป็นโจทย์ตั้งแต่ชั่วโมงแรก
              สอนตั้งแต่หาคีย์เวิร์ด ปรับหน้าเว็บ เขียนบทความ ไปจนถึงจัดเนื้อหาให้ AI Overview และ ChatGPT มีโอกาสหยิบไปตอบ
              สอนโดยที่ปรึกษาที่ทำ SEO ให้ธุรกิจไทยมาตั้งแต่ปี 2016
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton to="/contact">จองคอร์สเรียน SEO</CTAButton>
              <a
                href={brand.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                ถามรายละเอียดทาง LINE
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { stat: '4', label: 'รูปแบบให้เลือก' },
                { stat: '6', label: 'ชั่วโมงต่อคอร์ส' },
                { stat: '8', label: 'หัวข้อ ตั้งแต่พื้นฐานถึง AI Search' },
                { stat: '0', label: 'บาท ค่าเครื่องมือที่ต้องซื้อเพิ่ม' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-4xl font-bold text-teal-400">{item.stat}</p>
                  <p className="mt-1 text-sm text-neutral-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ราคา"
            title="ราคาคอร์สเรียน SEO"
            description="ทุกแพ็กเกจเรียนหัวข้อหลักชุดเดียวกัน ต่างกันที่รูปแบบ จำนวนคน และการปรับเนื้อหาให้ตรงกับทีม"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((item) => (
              <article
                key={item.name}
                className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                  item.highlight ? 'border-teal-300 bg-teal-50' : 'border-neutral-200 bg-white'
                }`}
              >
                <h3 className="font-semibold text-neutral-950">{item.name}</h3>
                <p className="mt-3 text-4xl font-black text-neutral-950">
                  {item.price}
                  <span className="ml-1 text-sm font-normal text-neutral-500">{item.unit}</span>
                </p>
                <dl className="mt-5 grid gap-2 text-sm">
                  {[
                    ['รูปแบบ', item.format],
                    ['เวลาเรียน', item.detail],
                    ['ผู้เรียน', item.seats],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-2">
                      <dt className="w-20 shrink-0 text-neutral-500">{label}</dt>
                      <dd className="font-medium text-neutral-800">{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="thai-readable mt-4 text-sm leading-6 text-neutral-600">{item.note}</p>
              </article>
            ))}
          </div>
          <p className="thai-readable mt-6 text-sm leading-6 text-neutral-500">
            เรียน onsite ในกรุงเทพฯ และปริมณฑล ไม่มีค่าเดินทางเพิ่ม นอกพื้นที่คิดค่าเดินทางตามจริง แจ้งราคารวมก่อนยืนยันวันเรียน
          </p>
        </div>
      </section>

      {/* Syllabus */}
      <section className="bg-[#fbfaf6]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="เนื้อหา"
            title="เรียน SEO อะไรบ้าง"
            description="ลำดับหัวข้อปรับตามพื้นฐานของผู้เรียน ถ้ารู้เรื่องไหนแล้วจะข้ามไปใช้เวลากับปัญหาของเว็บตัวเองแทน"
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {syllabus.map((item, index) => (
              <li key={item.title} className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-900 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-950">{item.title}</h3>
                  <p className="thai-readable mt-1 text-sm leading-6 text-neutral-700">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Differences */}
      <section className="bg-teal-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ต่างจากคอร์สทั่วไปยังไง"
            title="เรียนกับเว็บของตัวเอง ไม่ใช่เว็บตัวอย่าง"
            tone="light"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'โจทย์คือเว็บของผู้เรียน',
                text: 'ตรวจ Search Console ของเว็บจริง หาคีย์เวิร์ดของธุรกิจจริง และปรับหน้าจริงระหว่างเรียน',
              },
              {
                title: 'สอนแบบสายขาวทั้งหมด',
                text: 'ไม่สอนซื้อลิงก์หรือทางลัดที่เสี่ยงโดนลดอันดับ เพราะเว็บเป็นทรัพย์สินของธุรกิจที่ต้องใช้ไปอีกหลายปี',
              },
              {
                title: 'รวม AI Search ในทุกแพ็กเกจ',
                text: 'ลูกค้าบางส่วนถาม AI ก่อนตัดสินใจ คอร์สนี้สอนให้เนื้อหาเดียวกันใช้ได้ทั้งบน Google และ AI Search',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="thai-readable mt-2 text-sm leading-6 text-teal-50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="เหมาะกับใคร" title="คอร์สสอน SEO นี้เหมาะกับใคร" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <article key={item.label} className="rounded-xl border border-neutral-200 bg-[#fbfaf6] p-5">
                <h3 className="font-semibold text-teal-900">{item.label}</h3>
                <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chooser */}
      <section className="border-y border-neutral-200 bg-[#fbfaf6]">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="เลือกแบบไหนดี" title="เรียน SEO แบบไหนเหมาะกับตัวเอง" />
          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 bg-white">
            <table className="min-w-[560px] w-full divide-y divide-neutral-200 text-left text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-5 py-3 font-semibold text-neutral-950">ถ้า…</th>
                  <th className="px-5 py-3 font-semibold text-neutral-950">เลือก</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                {chooser.map((row) => (
                  <tr key={row.condition}>
                    <td className="thai-readable px-5 py-4">{row.condition}</td>
                    <td className="px-5 py-4 font-semibold text-teal-900">
                      {row.to ? (
                        <Link to={row.to} className="underline underline-offset-2 hover:text-teal-700">{row.choice}</Link>
                      ) : (
                        row.choice
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Further reading */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">อ่านก่อนเรียน</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            {[
              { to: '/blog/what-is-seo', label: 'SEO คืออะไร' },
              { to: '/blog/seo-not-working', label: 'ทำ SEO แล้วไม่เห็นผล เกิดจากอะไร' },
              { to: '/blog/seo-geo-aeo', label: 'SEO, AEO และ GEO ต่างกันอย่างไร' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 hover:shadow-md"
              >
                <span className="text-teal-500">•</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={seoTrainingFaqs} title="คำถามเรื่องเรียน SEO" />

      {/* Final CTA */}
      <section className="bg-neutral-950 px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold text-white">พร้อมเรียน SEO กับเว็บของตัวเองแล้วหรือยัง?</h2>
          <p className="thai-readable mx-auto mt-4 max-w-lg text-lg leading-8 text-neutral-300">
            ส่ง URL เว็บไซต์ จำนวนผู้เรียน และรูปแบบที่สนใจมาทาง LINE แล้วนัดวันเวลาที่สะดวก
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton to="/contact" variant="secondary">จองคอร์สเรียน SEO</CTAButton>
            <a
              href={brand.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              ทัก LINE
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
