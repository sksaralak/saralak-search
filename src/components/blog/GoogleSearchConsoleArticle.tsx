import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { BlogPost } from '../../content/blog'
import {
  CTABox,
  BlogProse,
  CaseStudyBox,
  FAQSection as ArticleFAQ,
  FigureImage,
  RelatedLinks as ReadMoreLinks,
  ResponsiveTable,
  SourceBox,
  SummaryBox as AISummary,
  TableOfContents,
} from './BlogUI'

const h2 = 'text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl'

const contents = [
  { id: 'gsc-what-is', label: 'Google Search Console คืออะไร ใช้ทำอะไร' },
  { id: 'gsc-vs-ga4', label: 'Search Console ต่างจาก Google Analytics ยังไง' },
  { id: 'gsc-install', label: 'วิธีติดตั้ง Google Search Console' },
  { id: 'gsc-metrics', label: 'Impression, Click, CTR, Position คืออะไร' },
  { id: 'gsc-tips', label: '8 เคล็ดลับ ดูตัวเลขแล้วเอาไปทำอะไรต่อ' },
  { id: 'gsc-case', label: 'ตัวอย่างจากงานลูกค้า' },
  { id: 'gsc-ai-report', label: 'รายงาน AI ใน Search Console' },
  { id: 'gsc-summary', label: 'สรุป' },
]

function Tip({ id, title, see, children }: { id: string; title: string; see: ReactNode; children: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h3>{title}</h3>
      <p><strong>เห็นอะไร:</strong> {see}</p>
      {children}
    </div>
  )
}

export default function GoogleSearchConsoleArticle({ post }: { post: BlogPost }) {
  return (
    <article className="grid gap-10">
      <BlogProse>
        <p>
          <strong>Google Search Console คือเครื่องมือฟรีจาก Google ที่บอกว่าเว็บไซต์ปรากฏบนผลค้นหาด้วยคำอะไร มีคนเห็นกี่ครั้ง คลิกกี่ครั้ง และหน้าไหนที่ Google ยังไม่เก็บเข้าระบบ</strong>{' '}
          ถ้าทำเว็บแล้วอยากรู้ว่า SEO ได้ผลไหม เครื่องมือนี้คือจุดเริ่มต้นที่ต้องมี
        </p>
        <p>
          ปัญหาคือหลายคนติดตั้งแล้วเปิดดูกราฟสักพักก็ปิด เพราะไม่รู้ว่าตัวเลขแต่ละตัวบอกอะไร และต้องทำอะไรต่อ
          บทความนี้จึงอธิบายตั้งแต่ติดตั้ง ไปจนถึงวิธีอ่านตัวเลขแล้วเอาไปแก้เว็บจริง
        </p>
      </BlogProse>

      {post.aiSummary && <AISummary items={post.aiSummary} heading="สรุป Google Search Console ใน 30 วินาที" />}

      <TableOfContents items={contents} />

      <section id="gsc-what-is" className="scroll-mt-24">
        <h2 className={h2}>Google Search Console คืออะไร ใช้ทำอะไร</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>
            Google Search Console (เรียกสั้น ๆ ว่า GSC ชื่อเดิมคือ Google Webmaster Tools) เป็นบริการของ Google
            ที่ให้เจ้าของเว็บดูข้อมูลจากฝั่ง Google โดยตรง ใช้ได้ 4 เรื่องหลัก
          </p>
          <ul>
            <li><strong>ดูคำค้นและยอดคลิก</strong> ว่าเว็บไปโผล่ในคำค้นอะไร อยู่อันดับเท่าไร มีคนคลิกกี่ครั้ง</li>
            <li><strong>เช็กว่าหน้าไหนถูกเก็บเข้าระบบ (index) แล้ว</strong> และหน้าไหนยังไม่ถูกเก็บ เพราะอะไร</li>
            <li><strong>ส่งแผนผังเว็บไซต์ (Sitemap)</strong> ให้ Google รู้ว่าเว็บมีหน้าอะไรบ้าง</li>
            <li><strong>รับแจ้งเตือนปัญหา</strong> เช่น หน้าเว็บโหลดช้าบนมือถือ ปัญหาความปลอดภัย หรือโดนลงโทษจาก Google</li>
          </ul>
          <p>
            ข้อมูลทั้งหมดมาจาก Google เอง จึงใกล้ความจริงกว่าตัวเลขจากเครื่องมืออื่นสำหรับการค้นหาบน Google
            เพราะเครื่องมือ SEO แบบเสียเงินใช้วิธีประมาณการ
          </p>
        </BlogProse></div>
      </section>

      <section id="gsc-vs-ga4" className="scroll-mt-24">
        <h2 className={h2}>Search Console ต่างจาก Google Analytics ยังไง</h2>
        <div className="mt-4 grid gap-5">
          <BlogProse><p>สองเครื่องมือนี้ดูคนละช่วงของลูกค้า</p></BlogProse>
          <ResponsiveTable
            label="เทียบ Google Search Console กับ Google Analytics 4"
            headers={['', 'Google Search Console', 'Google Analytics 4']}
            rows={[
              ['ดูช่วงไหน', 'ก่อนคลิก: บนหน้าผลค้นหาของ Google', 'หลังคลิก: ตอนคนอยู่ในเว็บแล้ว'],
              ['ตอบคำถาม', 'คนค้นคำอะไรแล้วเจอเรา อันดับเท่าไร', 'คนเข้ามาแล้วดูหน้าไหน อยู่นานไหม ซื้อหรือติดต่อไหม'],
              ['ข้อมูลมาจาก', 'การค้นหาบน Google เท่านั้น', 'ทุกช่องทาง: Google, Facebook, LINE, โฆษณา'],
              ['เหมาะกับงาน', 'วางแผนคำค้นและแก้ SEO', 'วัดยอดขายและพฤติกรรมในเว็บ'],
            ]}
          />
          <BlogProse><p>
            ควรใช้คู่กัน Search Console บอกว่าคนเจอเราจากคำไหน ส่วน Analytics บอกว่าคนกลุ่มนั้นเข้ามาแล้วซื้อหรือเปล่า
            ถ้าอยากดูยอดคนเข้าเว็บแบบรวม ๆ อ่านต่อที่ <Link to="/blog/check-website-traffic-free">เช็ค Traffic Website ฟรี</Link>
          </p></BlogProse>
        </div>
      </section>

      <section id="gsc-install" className="scroll-mt-24">
        <h2 className={h2}>วิธีติดตั้ง Google Search Console</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>ติดตั้งครั้งเดียว ใช้ได้ตลอด ใช้เวลาประมาณ 10–15 นาที</p>
          <ol>
            <li>เข้า search.google.com/search-console แล้วล็อกอินด้วยบัญชี Google ที่จะใช้ดูแลเว็บ</li>
            <li>
              เลือกประเภทพร็อพเพอร์ตี้ (Property) มี 2 แบบ
              <ul>
                <li><strong>Domain:</strong> ครอบคลุมทุกแบบของเว็บ ทั้ง http, https, www และโดเมนย่อย ยืนยันด้วยการเพิ่มระเบียน TXT ในระบบจัดการโดเมน <strong>แนะนำแบบนี้</strong> เพราะข้อมูลไม่ตกหล่น</li>
                <li><strong>URL prefix:</strong> ครอบคลุมเฉพาะ URL ที่ใส่ ยืนยันได้หลายวิธี เช่น อัปโหลดไฟล์ HTML ใส่แท็กในหน้าเว็บ หรือใช้บัญชี Google Analytics เดิม เหมาะกับคนที่เข้าระบบจัดการโดเมนไม่ได้</li>
              </ul>
            </li>
            <li>ยืนยันความเป็นเจ้าของตามวิธีที่เลือก ถ้าใช้ระเบียน TXT อาจต้องรอระบบโดเมนอัปเดตสักพัก</li>
            <li>ไปที่เมนู Sitemaps แล้วใส่ที่อยู่ไฟล์ เช่น sitemap.xml กดส่ง</li>
            <li>รอ 2–3 วัน ข้อมูลจะเริ่มขึ้น โดยนับจากวันที่ติดตั้ง</li>
          </ol>
          <p><strong>ใช้ WordPress:</strong> ติดตั้งผ่านปลั๊กอิน Site Kit ของ Google ได้เลย หรือใช้ช่องใส่รหัสยืนยันในปลั๊กอิน SEO ที่ใช้อยู่ เช่น Yoast หรือ Rank Math</p>
        </BlogProse></div>
      </section>

      <section id="gsc-metrics" className="scroll-mt-24">
        <h2 className={h2}>Impression, Click, CTR, Position คืออะไร คิดยังไง</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>เมนูที่ใช้บ่อยคือ "ผลการค้นหา" (Performance) ซึ่งมีตัวเลข 4 ตัวนี้</p>
          <p><strong>Impression (การแสดงผล)</strong> คือจำนวนครั้งที่ลิงก์ของเว็บแสดงอยู่ในหน้าผลค้นหาที่คนเปิดดู ไม่จำเป็นต้องเลื่อนลงไปเห็นก็นับ ตัวเลขนี้บอกว่าเว็บมีโอกาสถูกเห็นมากแค่ไหน</p>
          <p><strong>Click (คลิก)</strong> คือจำนวนครั้งที่คนคลิกจากผลค้นหาเข้ามาที่เว็บ</p>
          <p>
            <strong>CTR (อัตราการคลิก)</strong> คือสัดส่วนคนที่คลิกเมื่อเทียบกับคนที่เห็น คิดจาก คลิก ÷ การแสดงผล × 100
            ตัวอย่าง: แสดงผล 2,000 ครั้ง ได้คลิก 50 ครั้ง CTR = 50 ÷ 2,000 × 100 = 2.5%
          </p>
          <p>
            <strong>Position (อันดับเฉลี่ย)</strong> คืออันดับเฉลี่ยของเว็บในผลค้นหา เลขยิ่งน้อยยิ่งดี อันดับ 1–10 คือหน้าแรก อันดับ 11–20 คือหน้าสอง
            ข้อควรรู้: เป็นค่าเฉลี่ยจากทุกครั้งที่แสดงผล ถ้าคำหนึ่งอยู่อันดับ 3 อีกคำอยู่อันดับ 80 ค่าเฉลี่ยรวมจะออกมาแถว 40
            ซึ่งไม่ได้แปลว่าทุกคำอยู่อันดับ 40 จึงควรดูแยกทีละคำหรือทีละหน้า
          </p>
        </BlogProse></div>
      </section>

      <section id="gsc-tips" className="scroll-mt-24">
        <h2 className={h2}>8 เคล็ดลับ ดูตัวเลขแล้วเอาไปทำอะไรต่อ</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>ตัวเลขใน Search Console มีประโยชน์ก็ต่อเมื่อนำไปตัดสินใจ ด้านล่างคือ 8 วิธีที่ใช้จริงในงานลูกค้า เรียงจากทำง่ายและเห็นผลเร็วไปหายาก</p>

          <Tip id="gsc-tip-1" title="1. หาคำที่อยู่อันดับ 11–20 แล้วเติมคำนั้นลงในหน้า" see="คำค้นที่อันดับเฉลี่ยอยู่ระหว่าง 11–20">
            <p><strong>ทำอะไรต่อ:</strong> หน้าพวกนี้ Google มองว่าเกี่ยวข้องอยู่แล้ว แค่ยังไม่พอจะขึ้นหน้าแรก ให้เปิดหน้านั้นแล้วเพิ่มคำค้นลงในหัวข้อย่อย ย่อหน้าแรก หรือ FAQ ให้ตอบตรงสิ่งที่คนค้น</p>
            <p>วิธีหา: เปิดแท็บ "คำค้นหา" เปิดคอลัมน์อันดับเฉลี่ย แล้วเรียงจากน้อยไปมาก ไล่ดูช่วง 11–20 ที่มีการแสดงผลเยอะ</p>
          </Tip>

          <Tip id="gsc-tip-2" title="2. การแสดงผลสูง แต่ CTR ต่ำ ทั้งที่อันดับดี → เขียนชื่อหน้าใหม่" see="คำที่อยู่อันดับ 1–5 แต่ CTR ต่ำกว่าคำอื่นในอันดับใกล้กันชัดเจน">
            <p><strong>ทำอะไรต่อ:</strong> คนเห็นแต่ไม่อยากคลิก มักเป็นเพราะชื่อหน้า (title) และคำอธิบาย (meta description) ไม่ตรงกับสิ่งที่คนอยากรู้ ให้ใส่คำค้นไว้ต้นชื่อหน้า บอกประโยชน์ที่คนจะได้ เช่น ตัวเลข ขั้นตอน หรือคำตอบสั้น แล้วรอดูผล 2–4 สัปดาห์</p>
          </Tip>

          <Tip id="gsc-tip-3" title="3. คำเดียวกันโผล่หลายหน้า → เลือกหน้าเจ้าของคำ" see={'คลิกที่คำค้นหนึ่ง แล้วไปดูแท็บ "หน้าเว็บ" พบว่ามี 2–3 หน้าขึ้นสลับกัน'}>
            <p><strong>ทำอะไรต่อ:</strong> หน้าในเว็บกำลังแย่งคำกันเอง Google ไม่แน่ใจว่าจะดันหน้าไหน ให้เลือกหน้าที่ตอบคำนั้นตรงกว่าเป็นเจ้าของ แล้ว</p>
            <ul>
              <li>ใส่ลิงก์จากหน้าอื่นมาที่หน้าเจ้าของ โดยใช้คำนั้นเป็นข้อความลิงก์</li>
              <li>เอาคำนั้นออกจากชื่อหน้าของหน้าที่เหลือ</li>
              <li>ถ้าเนื้อหาซ้ำกันมาก ให้รวมเป็นหน้าเดียว แล้วเปลี่ยนเส้นทาง (redirect) หน้าเก่ามาที่หน้าใหม่</li>
            </ul>
          </Tip>

          <Tip id="gsc-tip-4" title="4. กรองคำถามด้วย regex → ได้ไอเดีย FAQ และบทความใหม่" see="คำค้นที่เป็นคำถาม ซึ่งเว็บยังตอบไม่ตรง">
            <p><strong>ทำอะไรต่อ:</strong> ใช้เป็นหัวข้อ FAQ หรือหัวข้อบทความใหม่ ได้ไอเดียจากสิ่งที่คนค้นจริง ไม่ต้องเดา</p>
            <p>วิธีกรอง: ในหน้าผลการค้นหา กด "+ เพิ่มตัวกรอง" เลือก "คำค้นหา" เปลี่ยนเป็น "Custom (regex)" แล้วใส่</p>
            <pre><code>คือ|ยังไง|อย่างไร|ไหม|วิธี|เท่าไร</code></pre>
            <p>จะเหลือเฉพาะคำค้นที่เป็นคำถาม ดูว่าคำถามไหนมีการแสดงผลเยอะ แต่หน้าที่ขึ้นยังไม่ได้ตอบคำถามนั้นโดยตรง</p>
          </Tip>

          <Tip id="gsc-tip-5" title="5. แยกคำที่มีชื่อแบรนด์ออก → รู้ว่า SEO โตจริงไหม" see="คลิกส่วนใหญ่มาจากคนค้นชื่อแบรนด์ แปลว่าคนรู้จักอยู่แล้ว SEO ยังไม่ได้พาคนใหม่มา">
            <p><strong>ทำอะไรต่อ:</strong> ใส่ตัวกรองคำค้นแบบ regex ด้วยชื่อแบรนด์ทุกแบบที่คนพิมพ์ (ไทย อังกฤษ สะกดผิด) แล้วเลือก "ไม่ตรงกับ regex" จะเหลือคลิกจากคนที่ยังไม่รู้จักแบรนด์ ตัวเลขนี้คือตัววัดว่าเนื้อหาช่วยหาลูกค้าใหม่ได้จริงหรือเปล่า</p>
          </Tip>

          <Tip id="gsc-tip-6" title="6. เทียบ 28 วันล่าสุดกับช่วงก่อน → หาหน้าที่ตก แล้วอัปเดต" see="คลิกรวมลดลง แต่ไม่รู้ว่าลดจากตรงไหน">
            <p><strong>ทำอะไรต่อ:</strong> ที่ตัวเลือกวันที่ กด "เปรียบเทียบ" เลือก 28 วันล่าสุดกับช่วงก่อนหน้า แล้วเรียงคอลัมน์ผลต่างของคลิก จะเห็นทันทีว่าหน้าไหนหรือคำไหนตก</p>
            <ul>
              <li>อันดับตก: ดูว่าคู่แข่งที่ขึ้นมาเขียนอะไรเพิ่ม แล้วอัปเดตเนื้อหาให้ครบกว่า</li>
              <li>อันดับเท่าเดิมแต่การแสดงผลลด: คนค้นน้อยลงตามฤดูกาล หรือหน้าผลค้นหามีกล่องคำตอบมาแทน ไม่จำเป็นต้องแก้หน้า</li>
            </ul>
          </Tip>

          <Tip id="gsc-tip-7" title={'7. รายงาน "หน้าเว็บ" → แยกหน้าที่ไม่ถูก index ให้ถูกประเภท'} see={'ในเมนู "หน้าเว็บ" (Pages) มีหน้าที่ไม่ถูกจัดทำดัชนี และมีเหตุผลกำกับ สองสถานะที่เจอบ่อยแก้คนละแบบ'}>
            <p>แก้เสร็จแล้ว ใช้ "ตรวจสอบ URL" (URL Inspection) แล้วกด "ขอการจัดทำดัชนี" ให้ Google กลับมาอ่านอีกครั้ง</p>
          </Tip>
        </BlogProse>
        <ResponsiveTable
          label="แก้หน้าที่ไม่ถูก index ตามสถานะ"
          headers={['สถานะ', 'แปลว่า', 'ทำอะไรต่อ']}
          rows={[
            ['Crawled – currently not indexed', 'Google เข้ามาอ่านแล้ว แต่ตัดสินใจยังไม่เก็บ', 'ปรับเนื้อหาให้มีข้อมูลที่หน้าอื่นไม่มี รวมหน้าที่เนื้อหาซ้ำกัน เพิ่มลิงก์จากหน้าสำคัญมาหา'],
            ['Discovered – currently not indexed', 'Google รู้ว่ามีหน้านี้ แต่ยังไม่เข้ามาอ่าน', 'เพิ่มลิงก์ภายในจากหน้าที่ถูก index แล้ว เช็กว่าอยู่ใน Sitemap'],
          ]}
        />
        <BlogProse>
          <Tip id="gsc-tip-8" title="8. รายงานลิงก์ → ส่งพลังจากหน้าที่มีลิงก์ภายนอกไปหน้าขาย" see={'ในเมนู "ลิงก์" ส่วนหน้าที่เว็บอื่นลิงก์มาหามาก (Top linked pages)'}>
            <p><strong>ทำอะไรต่อ:</strong> หน้าพวกนี้มีความน่าเชื่อถือในสายตา Google มากกว่าหน้าอื่น ให้ใส่ลิงก์ภายในจากหน้าเหล่านี้ไปยังหน้าสินค้าหรือหน้าบริการที่อยากให้ติดอันดับ</p>
          </Tip>
        </BlogProse>
        </div>
      </section>

      <CTABox
        headingTag="p"
        eyebrow="อยากทำเอง แต่ไม่อยากเดา"
        headline="ทำ SEO เองแล้วไม่รู้ว่าแก้ถูกจุดไหม?"
        description="คอร์สสอน SEO แบบเรียนสด ใช้เว็บของผู้เรียนเป็นโจทย์ เปิด Search Console ของจริงแล้ววางแผนแก้ไปด้วยกัน จบแล้วทำต่อเองได้ เริ่มต้น 9,900 บาท"
        href="/services/seo-training"
        buttonText="ดูคอร์สสอน SEO"
      />

      <section id="gsc-case" className="scroll-mt-24">
        <h2 className={h2}>ตัวอย่างจากงานลูกค้า: จากคลิกจากชื่อแบรนด์ สู่ 2,157 คลิกต่อเดือน</h2>
        <div className="mt-4 grid gap-5">
          <FigureImage
            src="/proof/nutrition-content-growth.png"
            alt="ข้อมูล Google Search Console แสดงจำนวนคลิกเพิ่มจากประมาณ 150 เป็น 2,157 ครั้งต่อเดือน"
            caption="ข้อมูลของลูกค้าธุรกิจสุขภาพและโภชนาการ โดยปกปิดชื่อแบรนด์"
          />
          <CaseStudyBox title="เว็บไซต์ขายสินค้าออนไลน์ด้านสุขภาพและโภชนาการ">
            <p>เดิมได้คลิกจาก Google เป็นหลักจากคนที่ค้นชื่อแบรนด์ ตรงกับเคล็ดลับข้อ 5 คือคนรู้จักแบรนด์อยู่แล้ว แต่คนที่ค้นหาข้อมูลก่อนเลือกซื้อยังไม่เจอเว็บ</p>
            <ul>
              <li>ใช้คำค้นจาก Search Console วางหัวข้อเนื้อหาด้านโภชนาการและสุขภาพ (ข้อ 1 และ 4)</li>
              <li>ปรับหน้าให้ตอบสิ่งที่คนค้น แล้วเชื่อมไปยังสินค้าที่เกี่ยวข้อง (ข้อ 3 และ 8)</li>
              <li>แก้ปัญหาหน้าหลักและการเก็บหน้าเข้าระบบ (ข้อ 7)</li>
            </ul>
            <p>ผล: คลิกจาก Google เพิ่มจากประมาณ 150 เป็น 2,157 ครั้งต่อเดือน หรือราว 14 เท่า ผลนี้เป็นตัวอย่างจากเว็บไซต์หนึ่ง ผลของแต่ละธุรกิจต่างกันตามสินค้า คู่แข่ง และสภาพเว็บ</p>
          </CaseStudyBox>
        </div>
      </section>

      <CTABox
        headingTag="p"
        eyebrow="ได้ลูกค้าโดยไม่ต้องจ่ายต่อคลิก"
        headline="อยากให้เว็บขึ้นหน้าแรกในคำที่ลูกค้าค้นก่อนซื้อ?"
        description="บริการ SEO รายเดือนสำหรับธุรกิจไทย เลือกคำที่มีคนพร้อมซื้อ ปรับหน้าเว็บ แก้ปัญหาเทคนิค และรายงานผลทุกเดือน เริ่มต้น 5,000 บาท/เดือน"
        href="/services/seo"
        buttonText="ดูแพ็กเกจ SEO"
      />

      <section id="gsc-ai-report" className="scroll-mt-24">
        <h2 className={h2}>รายงาน AI ใน Search Console ดูอะไรได้บ้าง</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>
            ข้อมูลการแสดงผลใน AI Overview และ AI Mode ของ Google นับรวมอยู่ในรายงานผลการค้นหา
            บางบัญชีเริ่มเห็นรายงานด้าน Generative AI แยกออกมา ซึ่งยังเป็นช่วงทดลอง
            ถ้าบัญชีมีรายงานนี้ ให้ดูว่าหน้าไหนเริ่มถูกแสดงในคำตอบของ AI แล้วใช้หลักเดียวกับเคล็ดลับข้อ 1:
            หน้าที่เริ่มมีการแสดงผล คือหน้าที่ควรเติมคำตอบให้ตรงและชัดขึ้น
            อ่านต่อเรื่องนี้ได้ที่ <Link to="/blog/what-is-ai-overview">AI Overview คืออะไร</Link>
          </p>
        </BlogProse></div>
      </section>

      <section id="gsc-summary" className="scroll-mt-24">
        <h2 className={h2}>สรุป</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <ul>
            <li><strong>Google Search Console คือ:</strong> เครื่องมือฟรีที่บอกว่าเว็บติดคำค้นอะไร คนเห็นกี่ครั้ง คลิกกี่ครั้ง</li>
            <li><strong>ติดตั้ง:</strong> เลือกแบบ Domain เพื่อให้ข้อมูลครบ แล้วส่ง Sitemap</li>
            <li><strong>อ่านตัวเลข:</strong> Impression = เห็น, Click = คลิก, CTR = คลิก ÷ เห็น, Position = อันดับเฉลี่ย</li>
            <li><strong>เริ่มแก้จาก:</strong> คำอันดับ 11–20 และหน้าที่ CTR ต่ำทั้งที่อันดับดี</li>
            <li><strong>ใช้ regex:</strong> กรองคำถามเพื่อหาไอเดีย และกรองชื่อแบรนด์ออกเพื่อวัดผล SEO จริง</li>
            <li><strong>หน้าไม่ถูก index:</strong> Crawled กับ Discovered แก้คนละแบบ</li>
          </ul>
          <p>
            อยากอ่าน Search Console ของเว็บตัวเองเป็น <Link to="/services/seo-training">คอร์สสอน SEO</Link> เรียนสดโดยใช้เว็บของผู้เรียนเป็นโจทย์
            เปิด Search Console ของจริงแล้วฝึกอ่านตัวเลขและวางแผนแก้ไปพร้อมกัน
          </p>
        </BlogProse></div>
      </section>

      <ReadMoreLinks items={[
        { to: '/blog/check-website-traffic-free', label: 'เช็ค Traffic Website ฟรี ด้วย Search Console และ GA4' },
        { to: '/blog/increase-seo-traffic', label: 'เพิ่ม Traffic ให้เว็บจาก Google' },
        { to: '/blog/do-seo-yourself', label: 'วิธีทำ SEO ด้วยตัวเอง 8 ขั้นตอน' },
        { to: '/services/seo-training', label: 'คอร์สสอน SEO แบบเรียนสด' },
      ]} />
      <SourceBox items={[
        <a href="https://support.google.com/webmasters/answer/9128668?hl=th" target="_blank" rel="noreferrer">เกี่ยวกับ Search Console (Google)</a>,
        <a href="https://support.google.com/webmasters/answer/7576553?hl=th" target="_blank" rel="noreferrer">รายงานประสิทธิภาพของ Search Console</a>,
        <a href="https://support.google.com/webmasters/answer/7440203?hl=th" target="_blank" rel="noreferrer">รายงานการจัดทำดัชนีหน้าเว็บ</a>,
      ]} />
      <ArticleFAQ post={post} heading="คำถามที่พบบ่อยเกี่ยวกับ Google Search Console" />
    </article>
  )
}
