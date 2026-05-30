import type { ReactNode } from 'react'
import type { BlogPost } from '../content/blog'
import FAQSection from './FAQSection'

type BlogArticleBodyProps = {
  post: BlogPost
}

type SectionProps = {
  title: string
  children: ReactNode
}

function ArticleSection({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="break-words text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 grid gap-5">{children}</div>
    </section>
  )
}

function P({ children }: { children: ReactNode }) {
  return (
    <p
      className="thai-readable text-lg leading-8 text-neutral-700"
      style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
    >
      {children}
    </p>
  )
}

function AISummary({ items }: { items: string[] }) {
  return (
    <section className="rounded-lg border border-teal-100 bg-[#fbfaf6] p-6">
      <h2 className="text-xl font-semibold text-neutral-950">AI Summary</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="thai-readable flex gap-3 text-neutral-700">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-700" />
            <span
              className="min-w-0"
              style={{ overflowWrap: 'anywhere', wordBreak: 'break-all' }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

type ArticleImageProps = {
  src: string
  alt: string
  caption?: string
  className?: string
}

function ArticleImage({ src, alt, caption, className = 'bg-[#fbfaf6]' }: ArticleImageProps) {
  return (
    <figure className={`overflow-hidden rounded-lg border border-neutral-200 ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-auto w-full" />
      {caption ? (
        <figcaption className="thai-readable border-t border-neutral-200 bg-white px-5 py-4 text-sm leading-6 text-neutral-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function ComparisonTable() {
  const rows = [
    [
      'เป้าหมายหลัก',
      'ทำให้เว็บไซต์ติดอันดับใน Google Search',
      'ทำให้เนื้อหาถูกดึงไปเป็นคำตอบสั้น เช่น Featured Snippet หรือ People Also Ask',
      'ทำให้ AI Search เข้าใจ อ้างอิง และแนะนำแบรนด์ในคำตอบ',
    ],
    [
      'แพลตฟอร์มที่เกี่ยวข้อง',
      'Google, Bing และ Search Engine',
      'Google Featured Snippet, People Also Ask, Voice Search, AI Overview',
      'ChatGPT, Gemini, Perplexity, Copilot, Claude และ Google AI Overview',
    ],
    [
      'รูปแบบผลลัพธ์',
      'ลิงก์เว็บไซต์บนหน้าผลการค้นหา',
      'คำตอบสั้น ตาราง รายการ หรือ FAQ',
      'คำตอบที่ AI สรุปขึ้นใหม่ พร้อมการกล่าวถึงแบรนด์หรืออ้างอิงเว็บไซต์',
    ],
    [
      'วิธีทำหลัก',
      'Keyword Research, On-page SEO, Technical SEO, Internal Link, Backlink',
      'Answer First, FAQ, How-to, ตารางเปรียบเทียบ, Schema',
      'Entity SEO, Topical Authority, E-E-A-T, Case Study, Brand Mention, Original Insight',
    ],
    [
      'วิธีวัดผล',
      'Ranking, Organic Traffic, Impression, CTR, Click',
      'Featured Snippet, PAA, FAQ visibility, Zero-click visibility',
      'AI Citation, Brand Mention, Share of AI Voice, AI Referral, Branded Search',
    ],
    [
      'เหมาะกับใคร',
      'ทุกเว็บไซต์ที่ต้องการ Organic Traffic',
      'เว็บไซต์ที่ต้องการตอบคำถามให้ชัดและเร็ว',
      'ธุรกิจที่ต้องการให้ AI พูดถึง แนะนำ หรืออ้างอิงแบรนด์',
    ],
  ]

  return (
    <section>
      <h2 className="break-words text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl">
        ตารางเปรียบเทียบ SEO, AEO และ GEO
      </h2>
      <div className="mt-5 overflow-x-auto rounded-lg border border-neutral-200">
        <table className="min-w-[760px] divide-y divide-neutral-200 bg-white text-left text-sm">
          <thead className="bg-[#fbfaf6] text-neutral-950">
            <tr>
              {['หัวข้อ', 'SEO', 'AEO', 'GEO'].map((heading) => (
                <th key={heading} scope="col" className="px-4 py-3 font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 text-neutral-700">
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td
                    key={cell}
                    className={`thai-readable px-4 py-4 align-top leading-6 ${
                      index === 0 ? 'font-semibold text-neutral-950' : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function GeoIntroArticle({ post }: { post: BlogPost }) {
  return (
    <article className="grid gap-10">
      {post.aiSummary ? <AISummary items={post.aiSummary} /> : null}

      <ArticleSection title="GEO คืออะไร?">
        <P>
          ในอดีต การทำ SEO มักโฟกัสที่การทำให้เว็บไซต์ติดอันดับบน Google Search เพื่อให้ผู้ใช้คลิกเข้ามาอ่านข้อมูล แต่พฤติกรรมการค้นหากำลังเปลี่ยนไป ผู้ใช้จำนวนมากไม่ได้พิมพ์คำค้นสั้น ๆ แล้วเปิดอ่านหลายเว็บไซต์เหมือนเดิมเสมอไป แต่เริ่มถามคำถามกับ AI โดยตรง เช่น “GEO คืออะไร”, “ทำยังไงให้ ChatGPT แนะนำเว็บไซต์เรา”, “SEO ยังสำคัญไหมในยุค AI” หรือ “ธุรกิจควรเริ่มทำ AI Search Optimization ยังไง”
        </P>
        <P>
          เมื่อ AI เป็นตัวกลางในการสรุปคำตอบ เว็บไซต์ที่มีข้อมูลชัดเจน น่าเชื่อถือ มีโครงสร้างดี และมีสัญญาณแบรนด์ที่แข็งแรง จะมีโอกาสถูก AI นำไปใช้ประกอบคำตอบมากกว่าเว็บไซต์ที่มีเนื้อหากว้าง ๆ ซ้ำ ๆ หรือไม่มีความเชี่ยวชาญเฉพาะทาง นี่คือเหตุผลที่ GEO กลายเป็นหนึ่งในกลยุทธ์สำคัญของ SEO ยุคใหม่
        </P>
      </ArticleSection>

      <ArticleSection title="GEO ย่อมาจากอะไร?">
        <P>
          GEO ย่อมาจาก Generative Engine Optimization แปลเป็นไทยได้ว่า การปรับแต่งเนื้อหาและเว็บไซต์ให้เหมาะกับระบบค้นหาแบบ Generative AI หรือระบบ AI ที่สามารถสร้างคำตอบใหม่จากข้อมูลหลายแหล่ง
        </P>
        <P>
          คำว่า Generative Engine หมายถึงเครื่องมือหรือระบบ AI ที่ไม่ได้แสดงผลลัพธ์เป็นเพียงลิงก์เว็บไซต์แบบ Search Engine เดิม แต่สามารถสรุป วิเคราะห์ เปรียบเทียบ และตอบคำถามให้ผู้ใช้ได้ทันที เช่น ChatGPT, Gemini, Perplexity, Claude, Copilot รวมถึง Google AI Overview ที่แสดงคำตอบสรุปบนหน้าผลการค้นหา
        </P>
        <P>
          ดังนั้น GEO ไม่ใช่แค่การทำให้เว็บไซต์ “ติดอันดับ” แต่คือการทำให้แบรนด์และเนื้อหาของเรามีโอกาสถูก AI “เลือกไปตอบ” หรือ “เลือกไปอ้างอิง” ในจังหวะที่ผู้ใช้กำลังต้องการคำตอบ
        </P>
        <ArticleImage
          src="/image/blog/what-is-geo/what-is-geo-chatgpt-brand-mention.webp"
          alt="ตัวอย่าง ChatGPT พูดถึงแบรนด์ในการสร้างคำตอบ"
          caption="ตัวอย่างการที่ AI ประเมินข้อมูลจากหลายสัญญาณก่อนสร้างคำตอบและพูดถึงแบรนด์"
        />
      </ArticleSection>

      <ArticleSection title="ทำไม GEO ถึงสำคัญในยุค AI Search?">
        <P>
          GEO สำคัญเพราะเส้นทางการค้นหาของผู้ใช้ไม่ได้จบที่หน้า Google แบบเดิมอีกต่อไป หลายคนเริ่มใช้ AI เพื่อขอคำแนะนำ เปรียบเทียบตัวเลือก สรุปข้อมูล หาวิธีแก้ปัญหา หรือถามคำถามเชิงลึกก่อนตัดสินใจซื้อสินค้าและบริการ
        </P>
        <P>
          ตัวอย่างเช่น ผู้ใช้ที่ต้องการหาบริการ SEO อาจไม่ได้ค้นแค่ “บริษัทรับทำ SEO” แต่ถาม AI ว่า “ควรเลือกเอเจนซี่ SEO แบบไหนดี”, “SEO, AEO, GEO ต่างกันยังไง”, “ถ้าอยากให้ ChatGPT แนะนำเว็บไซต์ ต้องทำอะไรบ้าง” หรือ “ธุรกิจไทยควรเริ่มทำ GEO ยังไง”
        </P>
        <P>
          ถ้าเว็บไซต์ของเรามีเนื้อหาที่ตอบคำถามเหล่านี้อย่างชัดเจน มีโครงสร้างข้อมูลที่ AI เข้าใจง่าย และมีความน่าเชื่อถือเพียงพอ ก็จะมีโอกาสปรากฏในคำตอบของ AI มากขึ้น แม้ผู้ใช้ยังไม่ได้คลิกเข้าเว็บไซต์ตั้งแต่แรกก็ตาม
        </P>
        <P>
          GEO ยังช่วยให้ธุรกิจสร้าง Brand Visibility ในพื้นที่ใหม่ของการค้นหา เพราะในโลก AI Search การถูกกล่าวถึง ถูกอ้างอิง หรือถูกแนะนำโดย AI อาจมีผลต่อความน่าเชื่อถือของแบรนด์ไม่ต่างจากการติดอันดับหน้าแรกของ Google ในอดีต
        </P>
        <ArticleImage
          src="/image/blog/what-is-geo/what-is-geo-search-vs-ai-search.svg"
          alt="แผนภาพเปรียบเทียบการค้นหาแบบเดิมกับ AI Search"
        />
      </ArticleSection>

      <ArticleSection title="GEO ทำงานอย่างไร?">
        <P>
          GEO ทำงานโดยการทำให้เนื้อหา เว็บไซต์ และแบรนด์มีคุณสมบัติที่ AI สามารถเข้าใจ ประมวลผล และเชื่อถือได้ง่ายขึ้น ระบบ AI มักเลือกใช้ข้อมูลจากแหล่งที่มีความเกี่ยวข้องกับคำถาม มีความชัดเจน มีโครงสร้างดี และมีสัญญาณความน่าเชื่อถือจากหลายแหล่งประกอบกัน
        </P>
        <P>
          สิ่งที่มีผลต่อ GEO ได้แก่ ความชัดเจนของคำตอบ ความครบถ้วนของเนื้อหา ความเชี่ยวชาญของผู้เขียน โครงสร้างหัวข้อ การใช้ FAQ การมี Schema Markup การทำ Internal Linking การมีข้อมูลต้นฉบับหรือมุมมองเฉพาะ และการมี Brand Mention จากเว็บไซต์หรือแพลตฟอร์มอื่น
        </P>
        <P>
          ถ้าอธิบายให้ง่าย SEO ทำให้ Google เข้าใจว่าเว็บไซต์เราควรติดอันดับเรื่องอะไร ส่วน GEO ทำให้ AI เข้าใจว่าเว็บไซต์หรือแบรนด์ของเราควรถูกนำไปใช้ตอบคำถามเรื่องอะไร
        </P>
        <ArticleImage
          src="/image/blog/what-is-geo/what-is-geo-how-ai-chooses-brands.svg"
          alt="แผนภาพอธิบายว่า AI เลือกพูดถึงแบรนด์ได้อย่างไร"
        />
      </ArticleSection>

      <ComparisonTable />
      <ArticleImage
        src="/image/blog/what-is-geo/what-is-geo-seo-vs-aeo-vs-geo.svg"
        alt="แผนภาพเปรียบเทียบ SEO AEO และ GEO"
      />

      <ArticleSection title="ทำยังไงให้ติด AI Search?">
        <P>
          การทำให้ติด AI Search หรือทำให้ AI แนะนำแบรนด์ เริ่มจากการทำให้เว็บไซต์มีคำตอบที่ชัดเจน มีโครงสร้างที่อ่านง่าย และมีสัญญาณความน่าเชื่อถือมากพอให้ AI เข้าใจว่าแบรนด์เชี่ยวชาญเรื่องอะไร โดยพื้นฐานต้องมี SEO ที่แข็งแรง เสริมด้วย AEO เช่น Answer First, FAQ, Schema และต่อยอดด้วย GEO เช่น Entity, Brand Mention, Case Study และ Topical Authority
        </P>
        <P>
          สำหรับรายละเอียดเชิงลึกเรื่องการทำให้ ChatGPT อ้างอิงเว็บไซต์ หรือทำให้ AI พูดชื่อแบรนด์ ควรแยกเป็นบทความเฉพาะ เพราะต้องอธิบายเรื่อง Entity, Citation, Brand Signal และการสร้างความน่าเชื่อถือของแบรนด์อย่างละเอียด
        </P>
      </ArticleSection>

      <ArticleSection title="GEO ต่างจาก SEO อย่างไร?">
        <P>
          SEO หรือ Search Engine Optimization คือการปรับเว็บไซต์ให้เหมาะกับ Search Engine เช่น Google เพื่อให้หน้าเว็บไซต์มีอันดับที่ดีขึ้นในผลการค้นหาแบบลิงก์ ส่วน GEO คือการปรับเว็บไซต์และเนื้อหาให้เหมาะกับ AI Search หรือ Generative Engine เพื่อให้ AI นำข้อมูลไปสรุป อ้างอิง หรือแนะนำต่อผู้ใช้
        </P>
        <P>
          ความแตกต่างสำคัญคือ SEO วัดผลจากอันดับ คำค้น Impression Click และ Organic Traffic เป็นหลัก ขณะที่ GEO ต้องมองเพิ่มเรื่อง AI Visibility, AI Citation, Brand Mention, Share of AI Voice และโอกาสที่ AI จะใช้ข้อมูลของเราในคำตอบ
        </P>
        <P>
          อย่างไรก็ตาม GEO ไม่ได้มาแทน SEO ทั้งหมด เพราะ AI Search ยังต้องอาศัยข้อมูลจากเว็บไซต์ที่ถูกจัดเก็บและประเมินความน่าเชื่อถือผ่านระบบ Search อยู่มาก การทำ SEO ที่ดีจึงยังเป็นฐานสำคัญของ GEO
        </P>
      </ArticleSection>

      <ArticleSection title="GEO ต่างจาก AEO อย่างไร?">
        <P>
          AEO หรือ Answer Engine Optimization คือการปรับเนื้อหาให้ตอบคำถามได้ชัดเจน กระชับ และตรงกับ Search Intent เพื่อเพิ่มโอกาสปรากฏใน Featured Snippet, People Also Ask, Voice Search หรือคำตอบสั้น ๆ บน Search Engine
        </P>
        <P>
          GEO มีขอบเขตกว้างกว่า AEO เพราะไม่ได้โฟกัสแค่การตอบคำถามให้ชัด แต่รวมถึงการสร้างความน่าเชื่อถือของแบรนด์ การทำ Entity SEO การเพิ่ม Citation Signals การจัดโครงสร้างข้อมูล และการทำให้ AI เข้าใจบริบทของธุรกิจอย่างครบถ้วน
        </P>
        <P>
          พูดให้เข้าใจง่าย SEO คือการทำให้เว็บติดอันดับ AEO คือการทำให้เนื้อหาตอบคำถามได้ดี ส่วน GEO คือการทำให้ AI เข้าใจ เชื่อถือ และเลือกแบรนด์ของเราไปแนะนำในคำตอบ
        </P>
      </ArticleSection>

      <ArticleSection title="ใครควรเริ่มทำ GEO?">
        <P>
          ธุรกิจที่ควรเริ่มทำ GEO คือธุรกิจที่ต้องการให้แบรนด์ถูกพบในเส้นทางการค้นหาแบบใหม่ โดยเฉพาะธุรกิจที่ลูกค้าต้องใช้ข้อมูลประกอบการตัดสินใจก่อนซื้อ เช่น Digital Agency, B2B Service, SaaS, E-commerce, Healthcare, Education, Finance, Travel, Real Estate และ Local Business
        </P>
        <P>
          สำหรับ Digital Agency การทำ GEO สำคัญมาก เพราะลูกค้าในอนาคตอาจไม่ได้ค้นหาแค่ “รับทำ SEO” แต่ถาม AI ว่า “เอเจนซี่ไหนทำ SEO และ GEO ได้ดี”, “ควรเลือกบริษัททำ SEO จากอะไร”, “ธุรกิจควรทำ AEO หรือ GEO ก่อน” หากเว็บไซต์ของเอเจนซี่มีเนื้อหาที่ตอบโจทย์เหล่านี้ ก็มีโอกาสถูก AI มองว่าเป็นแหล่งข้อมูลที่เกี่ยวข้อง
        </P>
        <P>
          สำหรับ E-commerce GEO ช่วยให้สินค้า หมวดหมู่สินค้า และบทความให้ความรู้มีโอกาสถูก AI นำไปแนะนำเมื่อลูกค้าถามเชิงเปรียบเทียบ เช่น “ซื้อกล่องอาหารพลาสติกออนไลน์ที่ไหนดี”, “โปรตีนจากพืชเหมาะกับใคร”, “ครีมกันแดดแบบไม่อุดตันควรเลือกยังไง”
        </P>
        <P>
          สำหรับ Local Business GEO ช่วยให้ธุรกิจมีโอกาสถูก AI แนะนำในคำถามที่เกี่ยวกับพื้นที่ บริการ และความน่าเชื่อถือ เช่น ร้านอาหาร คลินิก โรงแรม โรงเรียน หรือบริการใกล้ฉัน
        </P>
      </ArticleSection>

      <ArticleSection title="วิธีเริ่มทำ GEO เบื้องต้น">
        <P>
          การเริ่มทำ GEO ไม่จำเป็นต้องรื้อเว็บไซต์ทั้งหมดทันที แต่ควรเริ่มจากการทำให้เนื้อหาหลักของเว็บไซต์ตอบคำถามได้ชัดเจน มีโครงสร้างดี และแสดงความเชี่ยวชาญในหัวข้อที่แบรนด์ต้องการเป็นเจ้าของ
        </P>
        <P>
          ขั้นแรก ควรเลือก Topic หลักที่ธุรกิจต้องการให้ AI จดจำ เช่น SEO, GEO, AEO, Google Map Optimization, Content Marketing หรือบริการเฉพาะของธุรกิจ จากนั้นสร้าง Pillar Content ที่อธิบายหัวข้อหลักให้ครบ และทำ Cluster Content เพื่อขยายประเด็นย่อยรอบหัวข้อนั้น
        </P>
        <P>
          ขั้นที่สอง ควรใส่ Answer First ในช่วงต้นของบทความ เพื่อให้ AI และผู้อ่านเข้าใจคำตอบสำคัญได้ทันที โดยคำตอบควรกระชับ ชัดเจน และไม่อ้อมค้อม
        </P>
        <P>
          ขั้นที่สาม ควรเพิ่ม FAQ ที่ตอบคำถามจริงของผู้ใช้ เพราะ AI มักใช้โครงสร้างคำถาม-คำตอบในการทำความเข้าใจเนื้อหา และ FAQ ยังช่วยรองรับ Long-tail Keywords ได้ดี
        </P>
        <P>
          ขั้นที่สี่ ควรใช้ Structured Data เช่น Article Schema, FAQPage Schema, BreadcrumbList Schema และ Organization Schema เพื่อช่วยให้ Search Engine และ AI เข้าใจข้อมูลเชิงโครงสร้างของเว็บไซต์
        </P>
        <P>
          ขั้นที่ห้า ควรสร้าง E-E-A-T ให้ชัดเจน เช่น ระบุผู้เขียนหรือทีมผู้เชี่ยวชาญ ใส่ประสบการณ์จริง Case Study ข้อมูลต้นฉบับ ตัวอย่างงาน หรือผลลัพธ์ที่พิสูจน์ได้
        </P>
        <P>
          ขั้นที่หก ควรทำ Internal Linking ระหว่างบทความที่เกี่ยวข้อง เพื่อให้ AI เข้าใจความสัมพันธ์ของหัวข้อ และเห็นว่าเว็บไซต์มีความเชี่ยวชาญในเรื่องนั้นจริง
        </P>
      </ArticleSection>

      <ArticleSection title="องค์ประกอบสำคัญของเนื้อหาที่เหมาะกับ GEO">
        <P>
          เนื้อหาที่เหมาะกับ GEO ไม่ควรเป็นบทความทั่วไปที่รวมข้อมูลพื้นฐานจากหลายเว็บแล้วเขียนใหม่เท่านั้น แต่ควรมีมุมมองเฉพาะ มีคำตอบที่ชัด มีโครงสร้างที่อ่านง่าย และมีหลักฐานหรือประสบการณ์รองรับ
        </P>
        <P>
          องค์ประกอบที่ควรมี ได้แก่ คำตอบสั้นในช่วงต้นบทความ หัวข้อ H2 และ H3 ที่สอดคล้องกับคำถามจริง ตารางเปรียบเทียบ Checklist ตัวอย่าง Case Study FAQ Internal Link ข้อมูลผู้เขียน วันที่อัปเดต และแหล่งอ้างอิงที่น่าเชื่อถือ
        </P>
        <P>
          สำหรับบทความเชิงธุรกิจ ควรเพิ่มส่วนที่เชื่อมกับการใช้งานจริง เช่น “ธุรกิจควรเริ่มจากอะไร”, “ทีมการตลาดต้องเตรียมอะไร”, “วัดผลอย่างไร”, “ต้องใช้เครื่องมืออะไร” เพราะ AI มักให้ความสำคัญกับคำตอบที่ช่วยผู้ใช้ตัดสินใจหรือทำต่อได้จริง
        </P>
      </ArticleSection>

      <ArticleSection title="GEO ช่วยธุรกิจอย่างไร?">
        <P>
          GEO ช่วยธุรกิจใน 4 ด้านหลัก คือเพิ่มการมองเห็นของแบรนด์ใน AI Search เพิ่มความน่าเชื่อถือ เพิ่มโอกาสให้ลูกค้ารู้จักแบรนด์ก่อนเข้าเว็บไซต์ และช่วยรองรับพฤติกรรม Search ที่เปลี่ยนไป
        </P>
        <P>
          เมื่อ AI เริ่มเป็นจุดเริ่มต้นของ Customer Journey ธุรกิจที่ถูก AI กล่าวถึงหรือแนะนำบ่อยกว่า ย่อมมีโอกาสถูกจดจำมากกว่า แม้บางครั้งผู้ใช้จะยังไม่คลิกเข้าเว็บไซต์ทันที แต่การปรากฏในคำตอบของ AI สามารถสร้างความคุ้นเคยและความไว้วางใจได้ตั้งแต่ช่วงค้นหาข้อมูล
        </P>
        <P>
          สำหรับธุรกิจบริการ GEO ยังช่วยลดช่องว่างระหว่างการให้ความรู้และการขาย เพราะถ้าแบรนด์สามารถตอบคำถามเชิงลึกได้ดี ผู้ใช้จะมองว่าแบรนด์มีความเชี่ยวชาญจริง และมีโอกาสพิจารณาติดต่อใช้บริการมากขึ้น
        </P>
      </ArticleSection>

      <ArticleSection title="ตัวอย่างการทำ GEO สำหรับเว็บไซต์เอเจนซี่">
        <P>
          ถ้าเป็นเว็บไซต์ Digital Agency ที่ต้องการขายบริการ SEO, GEO และ AEO ควรเริ่มจากการสร้างชุดบทความที่ครอบคลุมคำถามสำคัญของลูกค้า เช่น GEO คืออะไร, GEO vs SEO vs AEO ต่างกันอย่างไร, วิธีทำ GEO ให้ ChatGPT อ้างอิงเว็บไซต์, วิธีทำ GEO ให้ติด Google AI Overview และ GEO Checklist สำหรับธุรกิจไทย
        </P>
        <P>
          จากนั้นควรเชื่อม Internal Link จากบทความเหล่านี้ไปยังหน้าบริการหลัก เช่น บริการ SEO, บริการ AEO, บริการ GEO, บริการ Content Optimization และ Case Study เพื่อให้ทั้งผู้ใช้และ AI เข้าใจว่าเว็บไซต์นี้ไม่ได้ให้ข้อมูลอย่างเดียว แต่มีบริการและประสบการณ์ที่เกี่ยวข้องกับหัวข้อนั้นจริง
        </P>
        <P>
          สิ่งที่ควรเพิ่มในเว็บไซต์คือหน้า Case Study ที่แสดงงานจริง ผลลัพธ์จริง หรือกระบวนการทำงานจริง เพราะ GEO ไม่ได้พิจารณาแค่ข้อความในบทความ แต่ยังต้องการสัญญาณความน่าเชื่อถือจากบริบทของทั้งเว็บไซต์
        </P>
      </ArticleSection>

      <ArticleSection title="GEO วัดผลอย่างไร?">
        <P>
          การวัดผล GEO ยังไม่มีมาตรฐานเดียวเหมือน SEO แต่สามารถติดตามได้จากหลายสัญญาณร่วมกัน เช่น การที่แบรนด์ถูกกล่าวถึงใน ChatGPT, Gemini, Perplexity หรือ Google AI Overview จำนวนครั้งที่เว็บไซต์ถูกอ้างอิงในคำตอบ AI การเพิ่มขึ้นของ Branded Search การเพิ่มขึ้นของ Direct Traffic และ Referral Traffic จาก AI Platform
        </P>
        <P>
          นอกจากนี้ยังสามารถทำ Manual AI Visibility Tracking โดยกำหนดชุดคำถามสำคัญของธุรกิจ แล้วทดสอบถาม AI เป็นระยะ เช่น “GEO คืออะไร”, “บริษัทรับทำ GEO ในไทยมีใครบ้าง”, “ทำอย่างไรให้ ChatGPT อ้างอิงเว็บไซต์”, “SEO Agency ที่ทำ AEO ได้ควรมีอะไรบ้าง” จากนั้นบันทึกว่า AI กล่าวถึงแบรนด์หรือไม่ อ้างอิงเว็บไซต์หรือไม่ และคำตอบมีความแม่นยำแค่ไหน
        </P>
        <P>
          ในระยะยาว GEO ควรถูกวัดร่วมกับ SEO ไม่ใช่แยกขาดจากกัน เพราะอันดับบน Google, Organic Traffic, Keyword Visibility, Brand Mention และ AI Citation ล้วนเป็นสัญญาณที่ช่วยเสริมกัน
        </P>
      </ArticleSection>

      <ArticleSection title="GEO Framework แบบย่อสำหรับเริ่มทำจริง">
        <P>
          การทำ GEO ให้ได้ผลควรมองเป็นระบบ ไม่ใช่การเขียนบทความเดียวแล้วรอให้ AI อ้างอิงเอง โดยภาพรวมสามารถเริ่มจาก 5 ขั้นตอน คือ กำหนด Entity ของแบรนด์ให้ชัด สร้าง Topic Cluster วางโครงสร้างคำตอบแบบ AEO เพิ่มหลักฐานความเชี่ยวชาญ เช่น Case Study และขยาย Brand Signal ผ่านเว็บไซต์และช่องทางภายนอก
        </P>
        <P>
          สำหรับธุรกิจที่ต้องการทำจริง ควรใช้บทความนี้เป็นจุดเริ่มต้นในการเข้าใจภาพรวมของ GEO แล้วค่อยต่อยอดไปยัง Checklist, Case Study และวิธีทำให้ AI อ้างอิงเว็บไซต์ในบทความเฉพาะ เพื่อไม่ให้เนื้อหาหน้านี้หนักเกินไปและยังคงตอบโจทย์คำค้นหลัก “GEO คืออะไร” ได้ชัดเจน
        </P>
      </ArticleSection>

      <ArticleSection title="สรุป GEO คืออะไร และควรเริ่มอย่างไร">
        <P>
          GEO คือการปรับเว็บไซต์ เนื้อหา และแบรนด์ให้เหมาะกับยุค AI Search โดยมีเป้าหมายเพื่อเพิ่มโอกาสให้ AI เข้าใจ เชื่อถือ อ้างอิง และแนะนำธุรกิจของเราในคำตอบของผู้ใช้งาน GEO ไม่ได้มาแทน SEO แต่เป็นการต่อยอดจาก SEO และ AEO เพื่อรองรับพฤติกรรมการค้นหาที่เปลี่ยนไป
        </P>
        <P>
          ธุรกิจที่ต้องการเริ่มทำ GEO ควรเริ่มจากการวาง Topic หลัก สร้าง Pillar Content ทำ Answer First เพิ่ม FAQ ใช้ Schema Markup เสริม E-E-A-T ทำ Internal Linking และสร้างหลักฐานความน่าเชื่อถือผ่าน Case Study หรือข้อมูลจริง
        </P>
        <P>
          สำหรับธุรกิจที่เริ่มก่อนในช่วงที่การแข่งขันยังไม่สูง มีโอกาสสร้างความได้เปรียบด้าน AI Visibility ได้เร็วกว่า เพราะเมื่อ AI เริ่มจดจำแบรนด์ในฐานะแหล่งข้อมูลของหัวข้อนั้น การต่อยอดไปสู่การถูกอ้างอิงและแนะนำในคำตอบก็มีโอกาสมากขึ้น
        </P>
      </ArticleSection>

      {post.faqs ? <FAQSection faqs={post.faqs} title="FAQ: GEO คืออะไร" /> : null}
    </article>
  )
}

export default function BlogArticleBody({ post }: BlogArticleBodyProps) {
  if (post.bodyVariant === 'geo-intro') {
    return <GeoIntroArticle post={post} />
  }

  return (
    <article className="grid gap-10">
      <section>
        <h2 className="text-2xl font-semibold text-neutral-950">Article placeholder</h2>
        <p className="thai-readable mt-4 text-lg leading-8 text-neutral-700">
          This is a lightweight placeholder body for the blog system. Replace this section with the
          full article copy when the post is ready to publish.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {['Search intent', 'AI readability', 'Business visibility'].map((item) => (
          <article key={item} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
            <h3 className="font-semibold text-neutral-950">{item}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-700">
              Placeholder notes for the final article structure.
            </p>
          </article>
        ))}
      </section>
    </article>
  )
}
