import type { BlogPost } from '../../content/blog'
import {
  BlogProse,
  CaseStudyBox,
  FAQSection as ArticleFAQ,
  RelatedLinks as ReadMoreLinks,
  ResponsiveTable,
  SourceBox,
  StepList as NumberedList,
  SummaryBox as AISummary,
  TableOfContents,
} from './BlogUI'

const contents = [
  { id: 'find-bottleneck', label: 'เริ่มจากหาคอขวดของยอดขาย' },
  { id: 'local-discovery', label: 'ทำให้ลูกค้าในพื้นที่ค้นหาร้านเจอ' },
  { id: 'clear-menu', label: 'ทำเมนูให้อ่านง่ายและตัดสินใจได้' },
  { id: 'increase-ticket', label: 'เพิ่มยอดต่อบิลด้วยชุดอาหารและเมนูเสริม' },
  { id: 'promotions', label: 'ทำโปรโมชันให้ตรงกับช่วงที่ต้องการ' },
  { id: 'repeat-customers', label: 'ชวนลูกค้าเดิมกลับมาอย่างเหมาะสม' },
  { id: 'sales-channels', label: 'เลือกช่องทางขายให้เหมาะกับร้าน' },
  { id: 'measure-profit', label: 'วัดผลจากออร์เดอร์และกำไร' },
  { id: 'saralak-case', label: 'ตัวอย่างผลงานด้านการค้นหาท้องถิ่น' },
]

const steps = [
  { title: 'เพิ่มยอดต่อบิล', description: 'ทดลองชุดอาหาร เครื่องดื่ม หรือเมนูเสริมที่เข้ากัน โดยแจ้งราคาและสิ่งที่ได้รับให้ชัด แล้วตรวจต้นทุนต่อชุด' },
  { title: 'กระตุ้นช่วงเวลาที่เงียบ', description: 'เลือกช่วงเวลาและกลุ่มลูกค้าให้เฉพาะเจาะจง เช่น ชุดมื้อกลางวันวันธรรมดา แล้วเทียบจำนวนบิลกับช่วงก่อนทดลอง' },
  { title: 'สร้างการกลับมาซื้อซ้ำ', description: 'ดูแลคุณภาพและประสบการณ์ให้สม่ำเสมอ ขอความยินยอมก่อนส่งข่าวเมนูใหม่หรือข้อเสนอที่เกี่ยวข้อง' },
]

export default function RestaurantSalesArticle({ post }: { post: BlogPost }) {
  return (
    <article className="grid gap-10">
      {post.aiSummary && <AISummary items={post.aiSummary} heading="สรุปวิธีเพิ่มยอดขายร้านอาหาร" />}
      <BlogProse>
        <p>การเพิ่มยอดขายร้านอาหารเริ่มจากหาว่ายอดติดตรงไหน: คนยังไม่รู้จักร้าน ลูกค้าเห็นเมนูแล้วไม่สั่ง ยอดเฉลี่ยต่อบิลต่ำ หรือคนที่เคยมากินไม่กลับมา จากนั้นเลือกวิธีแก้ให้ตรงจุด เช่น ปรับข้อมูลร้านบน Google Maps ทำชุดมื้อกลางวัน หรือชวนลูกค้าเดิมกลับมาลองเมนูใหม่</p>
        <p>ยอดขายที่เพิ่มขึ้นไม่ได้แปลว่ากำไรจะเพิ่มตามเสมอ ก่อนทำโปรโมชันหรือเปิดช่องทางขายใหม่ ให้คิดต้นทุนอาหาร ส่วนลด ค่าธรรมเนียม และกำลังของครัวควบคู่กัน</p>
      </BlogProse>

      <TableOfContents items={contents} />

      <section id="find-bottleneck" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">เริ่มเพิ่มยอดขายร้านอาหารจากการหาคอขวด</h2>
        <div className="mt-4 grid gap-5">
          <BlogProse><p>ย้อนดูยอดขายช่วง 4–8 สัปดาห์ แยกตามวัน ช่วงเวลา ช่องทาง และเมนู จดจำนวนบิล ยอดเฉลี่ยต่อบิล และเมนูที่ขายดีหรือแทบไม่มีคนสั่ง แล้วเลือกปัญหาหนึ่งข้อเพื่อลองแก้ อย่าเปลี่ยนหลายอย่างพร้อมกันจนแยกไม่ออกว่าอะไรได้ผล</p></BlogProse>
          <ResponsiveTable
            headers={['สิ่งที่เห็นในร้าน', 'จุดที่ควรตรวจ', 'ตัวอย่างวิธีทดลอง']}
            rows={[
              ['ช่วงกลางวันวันธรรมดาคนน้อย', 'คนในพื้นที่รู้จักร้านหรือไม่ และมีเมนูที่เหมาะกับมื้อกลางวันหรือเปล่า', 'ทำชุดมื้อกลางวันในช่วงเวลาที่กำหนด แล้วเทียบจำนวนบิล'],
              ['คนดูเมนูแต่ไม่สั่ง', 'รูป ราคา ตัวเลือก และวิธีสั่งชัดเจนหรือไม่', 'ปรับเมนูขายดีให้เห็นราคาและช่องทางสั่งชัดเจน'],
              ['มีลูกค้าแต่ยอดต่อบิลต่ำ', 'ลูกค้ารู้จักเมนูจับคู่หรือเมนูเสริมหรือไม่', 'ทดลองชุดอาหารหรือเครื่องดื่มคู่กับเมนูหลัก'],
              ['ลูกค้าใหม่มาแต่ไม่กลับ', 'ประสบการณ์หลังการขายและช่องทางติดตามเป็นอย่างไร', 'ขอความยินยอมก่อนแจ้งข่าวเมนูใหม่หรือสิทธิพิเศษ'],
            ]}
          />
        </div>
      </section>

      <section id="local-discovery" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">1. ทำให้ลูกค้าในพื้นที่ค้นหาร้านเจอ</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>ลูกค้าที่กำลังเลือกร้านอยากรู้ว่าร้านอยู่ตรงไหน เปิดหรือยัง มีเมนูอะไร ราคาเท่าไร และจอดรถได้หรือไม่ ตรวจชื่อร้าน หมุดแผนที่ เบอร์โทร เวลาเปิด เมนู รูปอาหาร และรูปบรรยากาศบน Google Business Profile ให้ตรงกับการให้บริการจริง เพิ่มช่องทางสั่งหรือจองเมื่อร้านมีระบบรองรับ</p>
          <p><a href="https://support.google.com/business/answer/14189260?hl=th" target="_blank" rel="noreferrer">คู่มือ Google Business Profile สำหรับร้านอาหาร</a> อธิบายการจัดการเวลา เมนู รูปภาพ และตัวเลือกสั่งหรือจองตามฟีเจอร์ที่มี เมื่อต้องเปลี่ยนราคา เมนู หรือเวลาเปิด ควรตรวจข้อมูลในช่องทางต่าง ๆ ให้ตรงกัน</p>
          <p>ถ้ามีหลายสาขา ให้ตรวจข้อมูลแยกตามสถานที่จริง อ่านเพิ่มเติมได้ที่ <a href="/blog/increase-sale-google-maps">แนวทางเพิ่มยอดขายจาก Google Maps</a></p>
          <h3>วิธีเพิ่มร้านอาหารใน Google Maps ถ้ายังไม่มีหมุดร้าน</h3>
          <ol>
            <li>ค้นชื่อร้านใน Google Maps ก่อน ถ้ามีหมุดอยู่แล้วแต่ยังไม่มีเจ้าของ ให้กด "อ้างสิทธิ์ธุรกิจนี้" แทนการสร้างใหม่ เพื่อไม่ให้มีหมุดซ้ำ</li>
            <li>ถ้ายังไม่มี เข้า Google Business Profile แล้วกรอกชื่อร้านตามป้ายหน้าร้านจริง เลือกหมวดหมู่ "ร้านอาหาร" หรือประเภทที่ตรงที่สุด เช่น ร้านก๋วยเตี๋ยว ร้านกาแฟ</li>
            <li>ใส่ที่อยู่และลากหมุดให้ตรงประตูร้าน ใส่เบอร์โทรและเวลาเปิดปิด</li>
            <li>ยืนยันตัวตนตามวิธีที่ Google เสนอ เช่น อัดวิดีโอหน้าร้านและป้ายร้าน หมุดจะขึ้นบน Google Maps หลังยืนยันผ่าน</li>
            <li>เพิ่มเมนู รูปอาหาร รูปหน้าร้าน และลิงก์สั่งหรือจอง ให้คนที่เจอหมุดตัดสินใจได้เลย</li>
          </ol>
          <p>การเพิ่มร้านอาหารใน Google Maps ไม่เสียค่าใช้จ่าย</p>
        </BlogProse></div>
      </section>

      <section id="clear-menu" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">2. ทำเมนูให้อ่านง่ายและช่วยให้ลูกค้าตัดสินใจ</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>จัดหมวดอาหารให้เข้าใจง่าย ระบุราคาปัจจุบัน และเขียนคำอธิบายสั้น ๆ ที่บอกส่วนประกอบหรือขนาดเสิร์ฟตามจริง ใช้ภาพถ่ายอาหารที่แสดงหน้าตาและปริมาณอย่างตรงไปตรงมา จัดเมนูเด่น ชุดอาหาร หรือเมนูสำหรับแชร์ไว้ในตำแหน่งที่หาเจอง่าย</p>
          <p>Google ระบุว่าร้านอาหารสามารถจัดการรายการอาหาร คำอธิบาย และราคาได้ตามฟีเจอร์ที่เปิดให้ใช้ใน <a href="https://support.google.com/business/answer/9455840?hl=th" target="_blank" rel="noreferrer">เครื่องมือแก้ไขเมนูบน Business Profile</a> ควรแก้หรือเอาข้อมูลที่ล้าสมัยออก</p>
        </BlogProse></div>
      </section>

      <section id="increase-ticket" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">3. เพิ่มยอดต่อบิลด้วยชุดอาหารและเมนูเสริม</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>ถ้าลูกค้าสั่งอาหารจานหลักเป็นประจำ ลองเสนอเครื่องดื่ม ของทานเล่น หรือของหวานที่เข้ากัน โดยแสดงราคาและสิ่งที่ได้รับชัดเจน ลูกค้าเลือกได้เองว่าจะรับหรือไม่ ก่อนดันเมนูใดให้เช็กต้นทุนวัตถุดิบ เวลาในครัว ความพร้อมของพนักงาน และกำไรต่อจาน</p>
          <p>ทดลองชุดอาหารหนึ่งแบบในช่วงเวลาที่กำหนด แล้วเทียบยอดเฉลี่ยต่อบิลและกำไรขั้นต้นกับช่วงใกล้เคียงกัน หากยอดต่อบิลสูงขึ้นแต่กำไรลดลง ให้ปรับราคา ส่วนลด หรือองค์ประกอบของชุดก่อนขยายโปร</p>
        </BlogProse></div>
      </section>

      <section id="promotions" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">4. ทำโปรโมชันให้ตรงกับช่วงที่ร้านต้องการกระตุ้น</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>ส่วนลดไม่ใช่คำตอบเดียว ร้านอาจจัดชุดอาหารที่คุ้มขึ้น ทำเมนูพิเศษเฉพาะวันธรรมดา หรือเพิ่มตัวเลือกสำหรับกลุ่มที่จองโต๊ะล่วงหน้า กำหนดเป้าหมายให้ชัด เช่น เติมโต๊ะช่วงบ่ายหรือแนะนำเมนูใหม่ แล้วคำนวณส่วนลด ต้นทุนอาหาร บรรจุภัณฑ์ และกำลังครัวก่อนเริ่ม</p>
          <p>ใช้รหัสโปรหรือบันทึกช่วงเวลาที่จัดแคมเปญเพื่อเทียบจำนวนบิล ยอดขาย และกำไรกับช่วงปกติ ถ้าโปรเพิ่มออร์เดอร์แต่ทำให้ครัวรับงานไม่ไหวหรือกำไรลด ให้ปรับเงื่อนไข</p>
        </BlogProse></div>
      </section>

      <section id="repeat-customers" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">5. ชวนลูกค้าเดิมกลับมาอย่างเหมาะสม</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>ลูกค้าเดิมรู้จักรสชาติและบริการของร้านแล้ว แต่การกลับมาซื้อซ้ำยังขึ้นกับคุณภาพและประสบการณ์ที่สม่ำเสมอ แจ้งเมนูใหม่หรือสิทธิพิเศษผ่านช่องทางที่ลูกค้าเลือกไว้ ขอความยินยอมก่อนส่งข้อความ และหลีกเลี่ยงการส่งถี่จนรบกวน</p>
          <p>ถ้ามีระบบสมาชิกหรือ LINE OA ให้บันทึกการใช้สิทธิ์และการกลับมาซื้อ โดยเก็บเฉพาะข้อมูลที่จำเป็นและดูแลข้อมูลลูกค้าอย่างเหมาะสม</p>
        </BlogProse></div>
      </section>

      <section id="sales-channels" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">6. เลือกช่องทางขายให้เหมาะกับร้าน</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>หน้าร้าน รับจอง เว็บไซต์ โทรศัพท์ และแพลตฟอร์มเดลิเวอรีมีต้นทุนและรูปแบบลูกค้าต่างกัน เลือกช่องทางที่ทีมดูแลไหว และแสดงเวลา วิธีสั่ง พื้นที่จัดส่ง รวมถึงราคาสุทธิให้ชัดเจน</p>
          <p>เมื่อทดลองช่องทางใหม่ ให้เริ่มจากช่วงเวลาหรือพื้นที่จำกัด แล้วคำนวณยอดสุทธิหลังหักค่าธรรมเนียม ส่วนลด บรรจุภัณฑ์ และแรงงานเพิ่มเติมก่อนตัดสินใจขยาย</p>
        </BlogProse></div>
      </section>

      <section id="measure-profit" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">7. วัดผลจากออร์เดอร์และกำไร ไม่หยุดที่ยอดเห็น</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p><a href="https://support.google.com/business/answer/9918094?hl=th" target="_blank" rel="noreferrer">รายงาน Performance ของ Google Business Profile</a> แสดงข้อมูลการค้นหาและการกระทำบางประเภท เช่น การโทร การคลิกเว็บไซต์ หรือการจองตามฟีเจอร์ที่ใช้ได้ ตัวเลขเหล่านี้ช่วยให้เห็นว่าผู้ใช้ทำอะไรบนโปรไฟล์ แต่การคลิกโทรไม่ได้ยืนยันว่าคุยสำเร็จ และการขอเส้นทางไม่ได้ยืนยันว่าซื้ออาหาร</p>
        </BlogProse>
        <NumberedList items={[
          { title: 'จำนวนบิลและยอดเฉลี่ยต่อบิล', description: 'แยกตามวัน ช่วงเวลา และช่องทางขาย' },
          { title: 'ผลของชุดอาหารหรือโปรโมชัน', description: 'บันทึกจำนวนออร์เดอร์และยอดจากรหัสหรือเมนูที่ทดลอง' },
          { title: 'กำไรหลังหักต้นทุน', description: 'รวมต้นทุนอาหาร ส่วนลด ค่าธรรมเนียม และค่าใช้จ่ายของแคมเปญ' },
          { title: 'ลูกค้าที่ติดต่อแล้วซื้อจริง', description: 'บันทึกสายที่รับได้ การจอง ลูกค้าที่มาถึง และยอดซื้อเมื่อทำได้' },
        ]} />
        </div>
      </section>

      <section id="saralak-case" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">ตัวอย่างผลงานด้านการค้นหาท้องถิ่น</h2>
        <div className="mt-4 grid gap-5">
          <BlogProse><p>หนึ่งในกรณีศึกษาของ Saralak Search เป็นเว็บไซต์ธุรกิจในกลุ่มคำค้น Local / Commercial Search ซึ่งขยับจากอันดับ 5 เป็นอันดับ 1 ใน Google Organic Search สำหรับคำค้นเป้าหมายภายใน 3 เดือน หลังปรับเนื้อหา ลิงก์ภายใน และเนื้อหาสนับสนุน</p></BlogProse>
          <CaseStudyBox title="ผลลัพธ์ด้านอันดับบน Google Organic Search">
            <p>อันดับคำค้นเป้าหมาย: จากอันดับ 5 เป็นอันดับ 1 ภายใน 3 เดือน</p>
            <p>ขอบเขตผลลัพธ์: Google Organic Search ไม่ใช่ Google Maps และไม่มีข้อมูลยืนยันจำนวนลูกค้าหรือยอดขายร้านอาหาร</p>
          </CaseStudyBox>
          <BlogProse><p>กรณีศึกษานี้แสดงผลงานด้านการค้นหาท้องถิ่นเท่านั้น ไม่ใช่ผลงานร้านอาหารหรือยอดขายหน้าร้าน ร้านควรวัดผลด้วยข้อมูลออร์เดอร์และต้นทุนของตัวเอง</p></BlogProse>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">สรุป: เพิ่มยอดขายร้านอาหารด้วยการแก้ให้ตรงจุด</h2>
        <div className="mt-4 grid gap-5"><BlogProse>
          <p>เริ่มจากดูว่าร้านขาดลูกค้าใหม่ ยอดต่อบิลต่ำ หรือคนไม่กลับมา แล้วเลือกทดลองวิธีเดียวให้ชัด ตั้งแต่ปรับข้อมูลร้านและเมนูบน Google Maps ทำชุดอาหารที่คุ้มทั้งสองฝ่าย ไปจนถึงสื่อสารกับลูกค้าเดิม วัดจำนวนบิล ยอดเฉลี่ยต่อบิล และกำไรหลังหักต้นทุนทุกครั้ง</p>
        </BlogProse>
        <NumberedList items={steps} />
        </div>
      </section>

      <ReadMoreLinks items={[
        { to: '/blog/increase-sale-google-maps', label: 'เพิ่มยอดขายจาก Google Maps' },
        { to: '/blog/local-seo-customer-intent', label: 'Local SEO กับความตั้งใจค้นหาของลูกค้า' },
        { to: '/services/local-seo', label: 'บริการ Local SEO โดย Saralak Search' },
      ]} />
      <SourceBox items={[
        <a href="https://support.google.com/business/answer/14189260?hl=th" target="_blank" rel="noreferrer">Google Business Profile สำหรับร้านอาหาร</a>,
        <a href="https://support.google.com/business/answer/9455840?hl=th" target="_blank" rel="noreferrer">เครื่องมือแก้ไขเมนูบน Business Profile</a>,
        <a href="https://support.google.com/business/answer/9918094?hl=th" target="_blank" rel="noreferrer">รายงาน Performance ของ Business Profile</a>,
      ]} />
      <ArticleFAQ post={post} heading="คำถามที่พบบ่อยเกี่ยวกับการเพิ่มยอดขายร้านอาหาร" />
    </article>
  )
}
