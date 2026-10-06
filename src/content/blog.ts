import type { FAQItem } from './faqs'

export type BlogPost = {
  title: string
  slug: string
  category: string
  excerpt: string
  readingTime: string
  publishedDate: string
  lastModifiedDate?: string
  authorName: string
  authorRole: string
  authorUrl: string
  metaTitle: string
  metaDescription: string
  heroImageDesktop?: string
  heroImageMobile?: string
  heroImageAlt?: string
  ogImage?: string
  aiSummary?: string[]
  faqs?: FAQItem[]
  includeFaqSchema?: boolean
  bodyVariant?: 'geo-intro' | 'seo-geo-aeo' | 'geo-agency' | 'how-to-do-geo' | 'what-is-seo' | 'what-is-aeo' | 'geo-checklist' | 'llms-txt' | 'ai-website-seo' | 'seo-not-working' | 'increase-sale-google-maps' | 'local-seo-customer-intent' | 'increase-sale-restaurant' | 'increase-sale-massage-spa' | 'increase-sale-pet-grooming' | 'increase-sale-pet-shop' | 'increase-sale-pet-hospital' | 'increase-sale-pet-hotel' | 'tham-web-claude' | 'increase-seo-traffic' | 'check-website-traffic-free' | 'protein-seo' | 'increase-online-sales' | 'sales-techniques' | 'aeo-checklist' | 'spa-marketing-plan' | 'what-is-ai-overview'
  cta?: {
    headline: string
    description: string
    buttonText: string
    href: string
  }
  ctaPlaceholderOnly?: boolean
}

export const geoIntroFaqs: FAQItem[] = [
  {
    question: 'GEO เป็น Ranking Factor ของ Google หรือไม่?',
    answer:
      'ไม่ใช่ Google ไม่ได้ประกาศ Ranking Factor ชื่อ GEO สำหรับ AI Overviews หรือ AI Mode โดย Google ระบุว่า SEO best practices, Search index, crawlability, indexability และเนื้อหาที่มีคุณค่ายังเป็นพื้นฐานของ Generative AI Search',
  },
  {
    question: 'ทำ GEO ต้องมี FAQ, Schema หรือ llms.txt หรือไม่?',
    answer:
      'ไม่มีองค์ประกอบใดเป็นเงื่อนไขรับประกันการถูก AI อ้างอิง Google ไม่ได้กำหนด special AI schema หรือ markup สำหรับ AI Overviews/AI Mode และ Structured Data ควรตรงกับ visible content ส่วน FAQ ช่วยจัดโครงคำถาม–คำตอบให้ชัดสำหรับผู้อ่านและระบบค้นหา แต่ไม่ควรทำเพียงเพื่อหวัง FAQ Rich Result',
  },
  {
    question: 'ทำ GEO แล้ว ChatGPT จะอ้างอิงเว็บไซต์แน่นอนหรือไม่?',
    answer:
      'ไม่แน่นอน OpenAI ระบุว่าเว็บไซต์สาธารณะที่ต้องการให้เนื้อหามีสิทธิ์ถูกค้นพบใน ChatGPT Search ควรไม่บล็อก OAI-SearchBot แต่ crawler access ไม่ได้รับประกัน placement, brand mention หรือ citation ในทุกคำถาม',
  },
  {
    question: 'SEO ยังจำเป็นเมื่อทำ GEO หรือไม่?',
    answer:
      'ยังจำเป็น โดยเฉพาะ crawlability, indexability, Search Intent, Internal Link และ Content Quality เพราะ Google ระบุว่า Generative AI features ยังคงอาศัย core Search ranking and quality systems และข้อมูลจาก Search index',
  },
  {
    question: 'GEO วัดผลจากอะไร?',
    answer:
      'ควรวัดหลายชั้น ได้แก่ Organic Search Visibility, AI Search/AI Overview Visibility, Brand Mentions, Citation หรือ Source Appearance, Non-brand Query Coverage, Search Console metrics, Assisted Conversion, Leads และ Revenue พร้อม Manual Prompt Tracking ด้วย Query Set เดิมเป็นช่วงเวลา',
  },
  {
    question: 'Google Search Console แยกข้อมูล AI Overview และ AI Mode ได้หรือไม่?',
    answer:
      'ได้ในระดับ Generative AI performance report ตั้งแต่วันที่ 31 สิงหาคม 2026 รายงานนี้ครอบคลุม AI Overviews และ AI Mode และแสดงข้อมูล Impressions แยกตาม Pages, Countries, Dates และ Devices แต่ไม่ได้แจกแจงทุก Citation เป็นราย Prompt',
  },
]

export const seoGeoAeoFaqs: FAQItem[] = [
  {
    question: 'SEO GEO AEO คืออะไร',
    answer:
      'SEO, AEO และ GEO เป็นกรอบงานที่มีพื้นที่ทับซ้อนกันแต่เน้นคนละปัญหา SEO ครอบคลุมการค้นพบ Crawl, Index, Ranking และ Organic Visibility, AEO เน้นความชัดของคำตอบในระดับหน้าและ Section ส่วน GEO มองกว้างไปถึง Entity, Evidence, Brand Mention และ AI Search Visibility โดยทั้งสามควรทำบนพื้นฐานข้อมูลและ Search Intent เดียวกัน',
  },
  {
    question: 'SEO กับ AEO ต่างกันอย่างไร',
    answer:
      'SEO เน้นให้หน้าเว็บถูกค้นพบและจัดอันดับได้ ส่วน AEO เน้นให้คำตอบบนหน้าเว็บชัด กระชับ และแยกเป็น passage ที่เข้าใจได้เอง เช่น ย่อหน้า answer-first ตารางเปรียบเทียบ หรือคำถามเฉพาะ AEO จึงควรต่อยอดจาก SEO ไม่ใช่ทำแยกจากฐานการ index และ content quality',
  },
  {
    question: 'SEO กับ GEO ต่างกันอย่างไร',
    answer:
      'SEO วัดผลหลักจากการมองเห็นและ traffic ใน Search Engine ส่วน GEO มองภาพกว้างกว่า คือแบรนด์ถูกเข้าใจและกล่าวถึงใน AI Search หรือ Generative AI ได้หรือไม่ งาน GEO จึงดูทั้งเว็บไซต์ บทความ case study ข้อมูลแบรนด์ citation และความสอดคล้องของ entity นอกเว็บไซต์',
  },
  {
    question: 'GEO ทำให้เว็บติด ChatGPT ได้จริงไหม',
    answer:
      'GEO ไม่สามารถการันตีได้ว่า ChatGPT, Gemini, Perplexity หรือ AI ใดจะอ้างอิงเว็บไซต์เสมอไป สิ่งที่ทำได้คือจัดข้อมูลให้ชัด crawlable น่าเชื่อถือ และเชื่อมโยงแบรนด์กับหัวข้อที่เกี่ยวข้องมากขึ้น แล้วติดตามผลผ่าน query set, citation/mention log, referral, engagement และ conversion',
  },
  {
    question: 'AEO เกี่ยวกับ AI Overview อย่างไร',
    answer:
      'AEO เกี่ยวกับ AI Overview ในมุมการจัดคำตอบให้ชัดและเข้าใจง่าย แต่ไม่ใช่วิธีรับประกันการถูกเลือกเป็นแหล่งข้อมูล Google ระบุว่า AI features ยังอาศัย SEO fundamentals, Search index และระบบคุณภาพของ Search ดังนั้น answer-first, heading ที่ดี และ FAQ ควรใช้เพื่อช่วยคนอ่านและทำให้ข้อมูลชัด ไม่ใช่อ้างว่าเป็น ranking factor พิเศษ',
  },
  {
    question: 'ธุรกิจเล็กควรเริ่มจากอะไร',
    answer:
      'ธุรกิจเล็กควรเริ่มจากฐาน SEO ก่อน เช่น หน้า service ชัด index ได้ ไม่มี technical blocker มี Google Business Profile ครบ และมีบทความที่ตอบคำถามลูกค้าจริง จากนั้นค่อยปรับ AEO ในหน้าที่มี demand และทำ GEO ผ่านข้อมูลแบรนด์ case study review และ citation ที่ตรวจสอบได้',
  },
  {
    question: 'ต้องมีเว็บไซต์ก่อนทำ GEO หรือไม่',
    answer:
      'ควรมีเว็บไซต์เป็นฐาน เพราะเว็บไซต์คือแหล่งข้อมูลที่ควบคุมข้อความ โครงสร้าง และ internal link ได้เอง แต่ GEO ไม่ได้จบที่เว็บไซต์เท่านั้น ยังเกี่ยวกับ Google Business Profile, social profile, directory, review, PR และเว็บไซต์อื่นที่กล่าวถึงแบรนด์ด้วย',
  },
  {
    question: 'SEO ยังสำคัญอยู่ไหมเมื่อ Search มี AI features',
    answer:
      'SEO ยังสำคัญ เพราะ Google ระบุว่า generative AI features ใน Search ยัง rooted in core Search ranking and quality systems และใช้ข้อมูลจาก Search index หากเว็บไซต์ crawl ไม่ได้ index ไม่ได้ เนื้อหาไม่ชัด หรือมี canonical/internal link ผิด ฐานสำหรับ AEO และ GEO จะอ่อนตามไปด้วย',
  },
  {
    question: 'GEO กับ AEO ต่างกันอย่างไร',
    answer:
      'AEO เน้นโครงสร้างคำตอบในระดับหน้าและ passage ส่วน GEO เน้นความเข้าใจแบรนด์ในระดับ entity และ ecosystem เช่น topic ownership, case study, author/entity clarity, citation, review และการกล่าวถึงจากแหล่งอื่น AEO จึงเป็นส่วนหนึ่งของการทำให้คำตอบชัด ส่วน GEO เป็นภาพรวมของแบรนด์ใน AI Search',
  },
]

export const geoAgencyFaqs: FAQItem[] = [
  {
    question: 'ทำ GEO ที่ไหนดี ควรเลือกจากอะไร?',
    answer:
      'ควรเลือกจากวิธีทำงานที่ตรวจสอบได้ ไม่ใช่ดูเพียงคำว่า GEO บนหน้าเว็บ โดยดูว่าทีมอธิบายได้หรือไม่ว่าเว็บไซต์มีปัญหาตรงไหน จะตรวจ Search, Content และข้อมูลแบรนด์อย่างไร วัด AI Visibility แบบไหน และเชื่อมผลไปถึง Lead หรือยอดขายอย่างไร',
  },
  {
    question: 'ควรขอดูอะไรจาก GEO Agency ก่อนจ้าง?',
    answer:
      'อย่างน้อยควรขอดูขอบเขตงาน ตัวอย่าง Audit หรือรายงาน สถานะก่อนเริ่ม ชุดคำถามที่ใช้ติดตาม เกณฑ์นับ Mention/Citation วิธีเชื่อมข้อมูลกับ Google Search Console และ GA4 รวมถึงสิ่งที่ทีมลูกค้าต้องช่วยลงมือทำ เพื่อให้เปรียบเทียบข้อเสนอจากหลายทีมได้บนฐานเดียวกัน',
  },
  {
    question: 'GEO Agency รับประกันให้ ChatGPT หรือ Google AI อ้างอิงได้ไหม?',
    answer:
      'ไม่ควรรับประกันการถูกอ้างอิงหรือการจัดอันดับ เพราะแต่ละแพลตฟอร์มเปลี่ยนวิธีเลือกแหล่งข้อมูลและสร้างคำตอบได้ตลอด สำหรับ Google ข้อมูลจาก Search Central ระบุว่าพื้นฐาน SEO เดิมยังสำคัญต่อ AI features และไม่มี Schema หรือการปรับพิเศษที่รับประกันการปรากฏใน AI Overviews หรือ AI Mode',
  },
  {
    question: 'GEO วัดผลอย่างไรในปี 2026?',
    answer:
      'ควรวัดหลายชั้นร่วมกัน ได้แก่ Search visibility, impressions จาก Generative AI performance report ใน Google Search Console สำหรับ AI Overviews และ AI Mode, Brand Mention/Citation จากชุดคำถามที่กำหนดบนแพลตฟอร์มอื่น, Referral และ Engagement ใน GA4 รวมถึง Lead, LINE, Call, Purchase หรือ Assisted Conversion',
  },
  {
    question: 'ต้องทำ SEO ก่อนจ้างทำ GEO หรือไม่?',
    answer:
      'ไม่จำเป็นต้องรอให้ SEO สมบูรณ์ก่อน แต่ต้องตรวจพื้นฐาน Search ไปพร้อมกัน เช่น Crawlability, Indexability, หน้า Service, Internal Link และคุณภาพเนื้อหา หากฐานเหล่านี้มีปัญหารุนแรง ควรแก้ก่อนหรือทำควบคู่กับ GEO แทนการข้ามไปทำ AI Visibility อย่างเดียว',
  },
]

export const howToDoGeoFaqs: FAQItem[] = [
  {
    question: 'วิธีทำ GEO Optimization ควรเริ่มจากอะไร?',
    answer:
      'ควรเริ่มจากเก็บ Baseline และตรวจ Search Foundation ก่อน เช่น Crawl, Index, Canonical, Rendering และ Owner URL ของแต่ละ Topic จากนั้นค่อยปรับ Content, Evidence, Entity, Internal Link และ External Evidence แล้ววัดผลเป็นรอบ วิธีนี้ช่วยแยกปัญหาพื้นฐานออกจากงาน GEO และลดการสร้าง Content ซ้ำ Intent เดิม',
  },
  {
    question: 'ทำ GEO แล้ว ChatGPT จะอ้างอิงเว็บไซต์แน่นอนหรือไม่?',
    answer:
      'ไม่แน่นอน OpenAI ระบุว่าเว็บไซต์สาธารณะที่ต้องการมีสิทธิ์ปรากฏใน ChatGPT Search ควรอนุญาต OAI-SearchBot แต่การเข้าถึงของ crawler ไม่ได้รับประกัน placement, mention หรือ citation ในทุกคำถาม จึงควรวัดผลด้วยชุด Query เดิมเป็นช่วงเวลาแทนการสรุปจาก Prompt ครั้งเดียว',
  },
  {
    question: 'Schema จำเป็นต่อ GEO หรือไม่?',
    answer:
      'Structured Data มีประโยชน์เมื่อใช้เพื่ออธิบายข้อมูลที่แสดงจริงบนหน้าและรองรับ Search feature ที่เกี่ยวข้อง แต่ Google ระบุว่าไม่มี special AI schema หรือ markup ที่จำเป็นต่อการปรากฏใน AI Overviews หรือ AI Mode จึงไม่ควรเพิ่ม FAQPage, HowTo หรือ Schema อื่นเพียงเพื่อหวัง AI Citation',
  },
  {
    question: 'llms.txt จำเป็นต่อ Google AI Search หรือไม่?',
    answer:
      'ไม่จำเป็นสำหรับ Google Search เอกสาร Google Search Central ปี 2026 ระบุว่าไม่ต้องเพิ่ม llms.txt หรือไฟล์พิเศษเพื่อให้เว็บไซต์ปรากฏใน AI features และการมีหรือไม่มี llms.txt ไม่มีผลเชิงบวกหรือลบต่อ Google Search ส่วนระบบ AI อื่นอาจมีนโยบายการค้นพบเว็บไซต์ต่างกัน จึงควรตรวจเอกสารของแต่ละแพลตฟอร์มแยกกัน',
  },
  {
    question: 'วัดผล GEO อย่างไรในปี 2026?',
    answer:
      'ควรวัดหลายชั้นร่วมกัน ได้แก่ Search Visibility ใน Google Search Console, Generative AI performance report สำหรับ AI Overviews และ AI Mode, Mention/Citation จากชุดคำถามที่กำหนดบนแพลตฟอร์มอื่น, GA4 Referral/Engagement และ Business Outcome เช่น Form, LINE, Call, Lead หรือ Purchase โดยไม่สรุปเหตุและผลจาก Visibility เพียงตัวเดียว',
  },
  {
    question: 'GEO ใช้เวลานานแค่ไหนถึงเห็นผล?',
    answer:
      'ไม่มีระยะเวลามาตรฐานที่รับประกันได้ เพราะขึ้นอยู่กับสภาพเว็บไซต์เดิม Demand ของ Topic, Crawl/Index, คุณภาพข้อมูล, Authority และระบบของแต่ละแพลตฟอร์ม ควรตั้ง Baseline ก่อนเริ่มและวัดเป็นรอบรายสัปดาห์หรือรายเดือนตาม KPI แทนการกำหนดเส้นตายตายตัว',
  },
]

export const whatIsSeoFaqs: FAQItem[] = [
  {
    question: 'ทำ SEO ใช้เวลานานแค่ไหนถึงจะเห็นผล?',
    answer:
      'ไม่มีระยะเวลาตายตัว Google ระบุว่าการเปลี่ยนแปลงบางอย่างอาจสะท้อนใน Search ภายในไม่กี่ชั่วโมง ขณะที่บางอย่างอาจใช้เวลาหลายเดือน ควรดูสัญญาณเป็นลำดับตั้งแต่ Crawl/Index, Impression และ Query ไปจนถึง Click, Lead และ Conversion แทนการยึดตัวเลข 3 หรือ 6 เดือนเป็นกฎเดียวกับทุกเว็บไซต์',
  },
  {
    question: 'ทำ SEO เองได้ไหม?',
    answer:
      'ทำเองได้ในระดับพื้นฐาน เช่น ตั้งค่า Search Console, ตรวจ Index, ปรับ Title/H1, เขียน Content ให้ตรง Search Intent และวาง Internal Link แต่เว็บไซต์ที่มี JavaScript, Migration, Duplicate URL, Canonical หรือการแข่งขันสูงอาจต้องใช้ Technical SEO และการวิเคราะห์ข้อมูลเชิงลึกมากขึ้น',
  },
  {
    question: 'SEO ยังจำเป็นไหมในยุค AI Search?',
    answer:
      'ยังจำเป็น โดยเฉพาะบน Google เพราะเอกสารทางการระบุว่า SEO best practices และข้อมูลจาก Search index ยังเป็นพื้นฐานของ Generative AI features อย่าง AI Overviews และ AI Mode อย่างไรก็ตาม SEO ที่ดีไม่ได้รับประกันว่าเว็บไซต์จะถูก AI อ้างอิง และแต่ละแพลตฟอร์ม AI อาจมีระบบค้นแหล่งข้อมูลต่างกัน',
  },
  {
    question: 'SEO กับ SEM ต่างกันอย่างไร?',
    answer:
      'SEO เน้น Organic Search ส่วน Paid Search เช่น Google Ads ใช้งบโฆษณาเพื่อซื้อการมองเห็นตามระบบประมูล คำว่า SEM มีการใช้ต่างกัน บางองค์กรใช้หมายถึง Search Marketing ที่รวม SEO และ Paid Search ขณะที่บางตลาดใช้ SEM เพื่อหมายถึง Search Ads ดังนั้นควรระบุความหมายให้ชัดเมื่อวาง KPI',
  },
  {
    question: 'Schema Markup จำเป็นต่อ SEO ไหม?',
    answer:
      'Structured Data ไม่ใช่ข้อกำหนดที่ทำให้เว็บติดอันดับและไม่รับประกัน Rich Result หน้าที่หลักคือช่วยอธิบายข้อมูลบนหน้าในรูปแบบที่ระบบรองรับ โดย Markup ต้องสอดคล้องกับเนื้อหาที่มองเห็นจริงและใช้ประเภทที่ Google รองรับ',
  },
  {
    question: 'ทำ SEO แล้วรับประกันอันดับ 1 หรือหน้าแรก Google ได้ไหม?',
    answer:
      'รับประกันไม่ได้ Google ระบุใน SEO Starter Guide ว่าไม่มีเคล็ดลับที่ทำให้เว็บไซต์ติดอันดับ 1 อัตโนมัติ และแม้ทำตาม Search Essentials ก็ยังไม่รับประกันว่าจะถูก Crawl, Index หรือแสดงในผลค้นหา SEO จึงควรวัดจากแนวโน้ม Visibility, Traffic และ Business Outcome หลายตัวร่วมกัน',
  },
]

export const whatIsAeoFaqs: FAQItem[] = [
  {
    question: 'AEO คืออะไร?',
    answer:
      'AEO หรือ Answer Engine Optimization คือแนวทางจัดคำตอบและโครงสร้างหน้าเว็บให้ตรงกับ Search Intent อ่านแยกเป็นส่วนได้ และมี Context หรือ Evidence เพียงพอสำหรับคน รวมถึงระบบ Search หรือ AI ที่อาจนำข้อมูลไปใช้ประกอบคำตอบ โดย AEO ไม่ใช่ Ranking Factor ที่ Google ประกาศ',
  },
  {
    question: 'AEO ย่อมาจากอะไร?',
    answer:
      'ในบริบท SEO และ AI Search คำว่า AEO ย่อมาจาก Answer Engine Optimization แต่คำย่อเดียวกันยังหมายถึง Authorized Economic Operator ในงานศุลกากรได้ด้วย จึงควรดูบริบทของคำค้นและระบุชื่อเต็มให้ชัดเมื่อเขียน Content',
  },
  {
    question: 'AEO ต่างจาก SEO อย่างไร?',
    answer:
      'SEO ครอบคลุมการทำให้เว็บไซต์ถูกค้นพบ Crawl, Index, Rank และสร้าง Organic Traffic ส่วน AEO โฟกัสการออกแบบคำตอบในระดับหน้าและ Section ให้ตรง ชัด และใช้ต่อได้ เช่น Answer-first, Comparison, Evidence และ Context จากมุมมองของ Google งานที่เรียก AEO หรือ GEO สำหรับ Generative AI Search ยังอยู่ในกรอบ SEO',
  },
  {
    question: 'AEO ต่างจาก GEO อย่างไร?',
    answer:
      'AEO โฟกัสการออกแบบคำตอบบนหน้าให้ชัดและใช้งานได้ ส่วน GEO มองกว้างไปถึง Content, Evidence, Entity, Brand Mention และ Citation ใน Generative AI หรือ AI Search เส้นแบ่งของสองคำนี้ไม่ได้มีมาตรฐานสากลตายตัว',
  },
  {
    question: 'AEO ต้องใช้ Schema หรือ FAQPage ไหม?',
    answer:
      'ไม่จำเป็นต้องมี Schema พิเศษสำหรับ AI Overviews หรือ AI Mode Google ระบุว่า Structured Data ควรตรงกับเนื้อหาที่ผู้ใช้เห็นจริง และไม่มี special AI markup ที่ต้องเพิ่ม ส่วน FAQ ที่มีประโยชน์ต่อผู้อ่านยังเขียนได้ แต่ Google ยกเลิก FAQ rich results ใน Search ตั้งแต่ปี 2026 จึงไม่ควรเพิ่ม FAQPage Schema เพียงเพื่อหวัง Rich Result หรือ AI Citation',
  },
  {
    question: 'AEO วัดผลอย่างไร?',
    answer:
      'ควรวัดเป็นหลายชั้น ได้แก่ Search Visibility ใน Google Search Console, Featured Snippet หรือ Answer Visibility, Generative AI impressions จาก Search Console สำหรับ AI Overviews และ AI Mode, Engagement ใน GA4 และ Business Outcome เช่น Form, LINE, Call, Lead หรือ Purchase',
  },
  {
    question: 'AEO เกี่ยวกับ ChatGPT อย่างไร?',
    answer:
      'หลัก Answer-first และ Passage clarity ช่วยให้เนื้อหาอ่านและตีความได้ชัดขึ้น แต่ไม่ได้รับประกันว่า ChatGPT จะอ้างอิงเว็บไซต์ เพราะแต่ละแพลตฟอร์มมีระบบ Retrieval และ Citation ต่างกัน หากเป้าหมายคือ Brand Mention หรือ Citation บน ChatGPT, Gemini และ Perplexity ควรวัดในกรอบ GEO ควบคู่กัน',
  },
]

export const llmsTxtFaqs: FAQItem[] = [
  {
    question: 'llm.txt คืออะไร ต่างจาก llms.txt ไหม?',
    answer:
      'คำค้น “llm.txt” มักใช้เรียกไฟล์ llms.txt แบบย่อหรือพิมพ์ตกตัว s แต่ชื่อไฟล์ตาม proposal คือ llms.txt ไฟล์นี้ใช้ Markdown เพื่อให้ overview และลิงก์ไปยังทรัพยากรสำคัญสำหรับ agent หรือ LLM ที่รองรับ',
  },
  {
    question: 'llms.txt ต่างจาก robots.txt อย่างไร',
    answer:
      'robots.txt เป็นมาตรฐานสำหรับควบคุมการเข้าถึงของ crawler ผ่านคำสั่งอย่าง User-agent และ Disallow ส่วน llms.txt เป็น proposal สำหรับไฟล์ Markdown ที่ให้ context และรายการลิงก์ ไม่มีหน้าที่แทน robots.txt และไม่ใช่ access-control file',
  },
  {
    question: 'llms.txt จำเป็นกับ Google Search หรือ GEO ไหม',
    answer:
      'ไม่จำเป็นสำหรับ Google Search โดย Google ระบุว่า llms.txt ไม่มีผลบวกหรือลบต่อ Visibility หรือ Ranking บน Google Search สำหรับ GEO ควรมองเป็นไฟล์เสริมสำหรับระบบที่รองรับ ไม่ใช่ Ranking Factor หรือข้อบังคับ',
  },
  {
    question: 'llms.txt ต้องอยู่ที่ root เสมอไหม',
    answer:
      'proposal v2 รองรับทั้ง /llms.txt ที่ root และ llms.txt ใน subpath เช่น /docs/llms.txt โดยไฟล์จะอธิบาย URL ใต้ path นั้น และถ้ามีหลายไฟล์ให้ใช้ไฟล์ที่เจาะจง path มากกว่า',
  },
  {
    question: 'AI ทุกระบบอ่าน llms.txt ไหม',
    answer:
      'ไม่ควรสมมติว่า AI ทุกระบบรองรับ llms.txt การใช้งานขึ้นอยู่กับแต่ละ agent, tool หรือ platform จึงควรตรวจเอกสารของระบบที่ต้องการรองรับและไม่ใช้ llms.txt แทนการทำเว็บไซต์ให้ crawlable, indexable และมีเนื้อหาชัดเจน',
  },
  {
    question: 'llms.txt ควรอัปเดตเมื่อไร',
    answer:
      'ควรอัปเดตเมื่อข้อมูลในไฟล์ไม่ตรงกับเว็บไซต์ เช่น เปลี่ยนบริการ เพิ่มหรือลบ section สำคัญ เปลี่ยน URL หรือมี resource ใหม่ที่ควรแนะนำ ไม่มีรอบเวลามาตรฐานที่ต้องอัปเดตทุกสัปดาห์หรือทุกเดือน',
  },
]

export const geoChecklistFaqs: FAQItem[] = [
  {
    question: 'ทำ GEO ควรเริ่มจากอะไรก่อน',
    answer:
      'เริ่มจาก Search Foundation ก่อน ได้แก่ Indexability, Canonical, Rendered Content, Crawlable Internal Links และ Topic Ownership แล้วจึงตรวจ Entity, Content, Evidence และ Measurement ตามลำดับ เพราะเทคนิคอย่าง Schema, FAQ, llms.txt หรือ External Mention ไม่สามารถแก้หน้าที่ Google ยังเข้าไม่ถึงหรือมีหลาย URL แย่ง Intent กันเองได้',
  },
  {
    question: 'ต้องทำ GEO Checklist ครบทั้ง 40 ข้อไหม',
    answer:
      'ไม่จำเป็นต้องทำครบพร้อมกัน ให้แก้ Blocker ที่กระทบการ Crawl, Index, Canonical, Rendering และ Topic Ownership ก่อน จากนั้นค่อยเพิ่ม Content, Entity, Evidence และ Measurement ตามบริบทของเว็บไซต์ บางข้อ เช่น Google Business Profile หรือ Person Schema ใช้เฉพาะเมื่อเกี่ยวข้องจริง',
  },
  {
    question: 'llms.txt จำเป็นต่อ GEO หรือ Google AI Search ไหม',
    answer:
      'ไม่จำเป็นสำหรับ Google Search โดย Google ระบุว่า Google Search ไม่ใช้ llms.txt และไฟล์นี้ไม่มีผลบวกหรือลบต่อการมองเห็นใน Google Search จึงควรมอง llms.txt เป็นไฟล์เสริมสำหรับระบบหรือ Agent ที่รองรับ ไม่ใช่ Ranking Factor หรือข้อบังคับของ GEO',
  },
  {
    question: 'GEO ต้องใช้ Schema Markup อะไรเป็นพิเศษไหม',
    answer:
      'ไม่มี Special AI Schema ที่ต้องเพิ่มเพื่อให้มีสิทธิ์ปรากฏใน AI Overviews หรือ AI Mode ควรใช้ Structured Data ประเภทที่ตรงกับ Visible Content และรองรับตามวัตถุประสงค์ของหน้า เช่น Article, Organization หรือ BreadcrumbList เมื่อเหมาะสม โดย Schema ไม่รับประกัน Ranking หรือ AI Citation',
  },
  {
    question: 'เว็บไซต์ควรอนุญาต AI Crawler ตัวไหน',
    answer:
      'ขึ้นอยู่กับแพลตฟอร์มที่ต้องการให้ค้นพบเว็บไซต์ สำหรับ Google Search ต้องไม่ปิดกั้น Googlebot ในหน้าที่ต้องการ Index ส่วน OpenAI ระบุว่าเว็บไซต์ที่ต้องการมีสิทธิ์ปรากฏใน ChatGPT Search ไม่ควรบล็อก OAI-SearchBot ทั้งนี้ GPTBot เป็น User Agent คนละหน้าที่กับ OAI-SearchBot และไม่ควรใช้แทนกัน',
  },
  {
    question: 'วัดผล GEO และ AI Visibility อย่างไร',
    answer:
      'สำหรับ Google ใช้ Search Console Generative AI performance report เพื่อติดตาม Impression จาก AI Overviews และ AI Mode ควบคู่กับ Search Console ปกติ สำหรับ ChatGPT สามารถแยก Referral ที่มี utm_source=chatgpt.com ได้เมื่อเกิดการคลิก ส่วน Gemini และ Perplexity ควรเก็บ Prompt Set, Mention, Citation, URL และ Referral ที่ตรวจซ้ำได้ แล้วเชื่อมกลับไปยัง Lead หรือ Conversion โดยระวังข้อจำกัดด้าน Attribution',
  },
  {
    question: 'ทำครบ Checklist แล้วรับประกันว่าจะถูก AI อ้างอิงไหม',
    answer:
      'ไม่รับประกัน แต่ละแพลตฟอร์มมี Retrieval, Ranking, Source Selection และ Interface ต่างกัน อีกทั้งผลลัพธ์อาจเปลี่ยนตามคำถาม เวลา และบริบท Checklist มีหน้าที่ช่วยลดปัญหาพื้นฐานและทำให้ข้อมูลชัด ตรวจสอบได้ และวัดผลได้มากขึ้น ไม่ใช่สูตรบังคับให้ระบบเลือก Citation',
  },
]

export const aiWebsiteSeoFaqs: FAQItem[] = [
  {
    question: 'AI ทำเว็บได้จริงไหม?',
    answer:
      'ได้ เครื่องมือ AI สามารถช่วยสร้างโครงหน้า เขียนโค้ด ทำ component และร่างเนื้อหาได้เร็วขึ้น แต่คำว่า “สร้างเว็บได้” ไม่เท่ากับ “พร้อมติด Google” เว็บไซต์ยังต้องมี URL ที่ crawl และ index ได้, metadata, canonical, internal link, sitemap, เนื้อหาที่ตอบ Search Intent และการตรวจผลหลัง deploy',
  },
  {
    question: 'เว็บที่สร้างด้วย AI ติด Google ได้ไหม?',
    answer:
      'ติดได้ เอกสาร Google Search ไม่กำหนดว่าเว็บไซต์ต้องสร้างด้วยแพลตฟอร์มหรือเครื่องมือใด สิ่งที่ต้องตรวจคือ Google เข้าถึงและประมวลผลหน้าได้หรือไม่ เนื้อหามีประโยชน์และเป็นต้นฉบับเพียงพอหรือไม่ รวมถึง Search Essentials และนโยบายสแปมต้องผ่าน',
  },
  {
    question: 'ใช้ AI ทำเว็บแล้วต้องทำ SEO เพิ่มอะไร?',
    answer:
      'อย่างน้อยควรตรวจ Crawl/Index, HTTP status, canonical, sitemap, robots.txt, title, meta description, H1-H3, internal link, mobile usability, Core Web Vitals และ Search Intent ของหน้าสำคัญ ส่วน structured data ใช้เมื่อเหมาะกับข้อมูลที่แสดงจริง ไม่ใช่เพิ่มเพียงเพื่อหวังอันดับ',
  },
  {
    question: 'ใช้ Claude หรือ AI coding assistant ทำ SEO ได้ไหม?',
    answer:
      'ใช้ช่วย implement งาน SEO ได้ดี เช่น metadata, canonical, sitemap, structured data, semantic HTML และ internal link เมื่อมี requirement ชัด แต่การตัดสินว่า keyword ไหนควรเป็น owner page, หน้าใดควร index, intent ไหนมีมูลค่าทางธุรกิจ หรือควรแก้อะไรก่อน ยังต้องอาศัยข้อมูล Search Console, keyword data, SERP และบริบทธุรกิจ',
  },
  {
    question: 'Google มองเนื้อหาที่สร้างด้วย AI อย่างไร?',
    answer:
      'Google ระบุว่า Generative AI มีประโยชน์ต่อการค้นคว้าและการจัดโครงเนื้อหา แต่การสร้างหน้าเว็บจำนวนมากโดยไม่เพิ่มคุณค่าให้ผู้ใช้อาจเข้าข่าย scaled content abuse สิ่งสำคัญจึงไม่ใช่ว่าใช้ AI หรือไม่ แต่คือคุณภาพ ความถูกต้อง ความเป็นต้นฉบับ และประโยชน์ของเนื้อหา',
  },
  {
    question: 'หลังเปิดเว็บด้วย AI ควรวัดผลจากอะไร?',
    answer:
      'เริ่มจาก Google Search Console เพื่อตรวจ Indexing, Impressions, Clicks, Queries และ Landing Pages จากนั้นดู GA4 สำหรับ Sessions, Engagement และ Conversion เช่น Form, LINE, Call หรือ Purchase การมีหน้า index เพิ่มขึ้นอย่างเดียวไม่ควรถูกใช้แทนผลลัพธ์ทางธุรกิจ',
  },
]

export const seoNotWorkingFaqs: FAQItem[] = [
  {
    question: 'Organic Traffic คืออะไร?',
    answer:
      'Organic Traffic คือผู้เข้าชมที่เข้ามายังเว็บไซต์จากผลการค้นหาแบบไม่เสียค่าโฆษณา เช่น Google Search ในทางปฏิบัติควรดูร่วมกับ Impressions, Clicks, Queries, Landing Pages และ Conversion เพราะ Traffic เพียงตัวเดียวไม่บอกว่าหน้าใดกำลังโตหรือปัญหาอยู่ตรงไหน',
  },
  {
    question: 'Organic Traffic ลดลงควรเช็กอะไรก่อน?',
    answer:
      'เริ่มจาก Google Search Console โดยเทียบช่วงเวลาก่อนและหลัง แล้วแยกดู Pages, Queries, Countries, Devices และ Search appearance เพื่อหาว่าการลดลงเกิดกับทั้งเว็บไซต์หรือเฉพาะบางหน้า จากนั้นค่อยตรวจ Indexing, Search Intent, Technical SEO, Content และการแข่งขันของ SERP ตามลำดับ',
  },
  {
    question: 'ทำ SEO กี่เดือนถึงจะเห็น Organic Traffic เพิ่ม?',
    answer:
      'ไม่มีระยะเวลามาตรฐานที่รับประกันได้ Google ระบุว่าการเปลี่ยนแปลงบางอย่างอาจสะท้อนเร็ว ขณะที่บางอย่างอาจใช้เวลาหลายสัปดาห์หรือหลายเดือน ระยะเวลาจริงขึ้นอยู่กับการ crawl/index, demand, competition, คุณภาพของหน้าและสถานะเว็บไซต์เดิม จึงควรดู trend ของ Impressions, Queries และ Landing Pages มากกว่ายึดตัวเลขเดือนตายตัว',
  },
  {
    question: 'มี Impression แต่ Organic Clicks ไม่โต เกิดจากอะไร?',
    answer:
      'อาจเกิดจากอันดับเฉลี่ยยังไม่ดีพอ, Query ไม่ตรงกับ intent ที่หน้าอยากได้, SERP มีองค์ประกอบอื่นแย่งความสนใจ หรือ Title/Snippet ยังไม่แข่งขัน ควรแยกดู Query และ Page ใน Search Console ก่อนสรุปว่าเป็นปัญหา CTR เพราะ Average Position และ CTR เป็นค่าเฉลี่ยจากหลายผลการค้นหา',
  },
  {
    question: 'site:domain.com ใช้เช็ก Index ได้แม่นไหม?',
    answer:
      'ใช้ดูคร่าว ๆ ได้ แต่ไม่ควรใช้เป็นหลักฐานว่าทุก URL ถูกหรือไม่ถูก Index วิธีที่แม่นกว่าสำหรับ URL สำคัญคือ URL Inspection และ Page indexing report ใน Google Search Console',
  },
  {
    question: 'Organic Traffic เยอะขึ้นแปลว่า SEO สำเร็จไหม?',
    answer:
      'ยังสรุปไม่ได้ ควรดูคุณภาพ Traffic และผลทางธุรกิจร่วมด้วย เช่น Non-brand Queries, Landing Pages, Engaged Sessions, Form, LINE, Call, Lead, Purchase หรือ Assisted Conversion เพราะ Traffic ที่โตจากคำค้นไม่เกี่ยวข้องอาจไม่สร้างผลลัพธ์ทางธุรกิจ',
  },
]

export const googleMapsSalesFaqs: FAQItem[] = [
  {
    question: 'Google Maps กับ Google Business Profile ต่างกันอย่างไร?',
    answer: 'Google Business Profile (GBP) คือ dashboard ที่คุณจัดการข้อมูลธุรกิจ ส่วน Google Maps คือที่ที่ลูกค้าเห็นและโต้ตอบกับธุรกิจของคุณ ทั้งสองเชื่อมกัน — GBP ที่ดีทำให้ Maps ทำงานได้ดีขึ้น',
  },
  {
    question: 'ธุรกิจหลายสาขาต้องทำ GBP กี่โปรไฟล์?',
    answer: '1 GBP ต่อ 1 สาขา แต่ละสาขามีที่อยู่ เบอร์โทร ชั่วโมงทำการ และรูปภาพของตัวเอง การใช้โปรไฟล์เดียวสำหรับทุกสาขาทำให้ลูกค้าสับสนและเสีย Direction/Call ไปจำนวนมาก',
  },
  {
    question: 'ต้องอัพเดท GBP บ่อยแค่ไหน?',
    answer: 'ขั้นต่ำเดือนละ 2–4 ครั้ง ผ่าน GBP Posts และตรวจ Insights สัปดาห์ละครั้ง ถ้าชั่วโมงทำการหรือที่อยู่เปลี่ยน อัพเดททันที — ข้อมูลผิดทำให้เสีย Direction โดยตรง',
  },
  {
    question: 'รีวิวช่วยเพิ่ม KPI ทั้ง 3 ได้ไหม?',
    answer: 'ได้ รีวิวดีทำให้คนกล้าโทรมากขึ้น กล้าขอเส้นทางมากขึ้น และคลิกเข้าเว็บเพื่อหาข้อมูลเพิ่มมากขึ้น สำคัญกว่าจำนวนคือการตอบรีวิวทุกรีวิว ทั้งบวกและลบ — แสดงให้เห็นว่าธุรกิจยังแอคทีฟและใส่ใจลูกค้า',
  },
  {
    question: 'ต้องจ่ายเงินสำหรับ Google Business Profile ไหม?',
    answer: 'GBP ฟรี แต่ถ้าต้องการให้ GBP ดึง Call/Direction/Website ได้อย่างสม่ำเสมอ จะต้องใช้เวลาในการจัดการ optimize และ monitor อยู่ตลอด — นั่นคือจุดที่หลายธุรกิจเลือกใช้บริการผู้เชี่ยวชาญแทน',
  },
]

export const localSeoCustomerIntentFaqs: FAQItem[] = [
  {
    question: 'Local SEO ต่างจาก SEO ทั่วไปยังไง?',
    answer: 'SEO ทั่วไปเน้นให้ติดอันดับในหัวข้อกว้างๆ ทั่วประเทศหรือทั่วโลก Local SEO เน้นให้ธุรกิจของคุณปรากฏเมื่อคนในพื้นที่ค้นหาบริการที่คุณให้ — เหมาะกับธุรกิจที่มีหน้าร้านหรือให้บริการเฉพาะพื้นที่',
  },
  {
    question: 'ธุรกิจออนไลน์ 100% ต้องทำ Local SEO ไหม?',
    answer: 'ถ้าไม่มีหน้าร้านและรับลูกค้าจากทั่วประเทศหรือทั่วโลก Local SEO ไม่ใช่ priority หลัก แต่ถ้ามีทีมหรือ office ที่ไหนสักที่ ก็ยังมีประโยชน์บ้าง',
  },
  {
    question: 'ใช้เวลานานแค่ไหนกว่าจะเห็นผล?',
    answer: 'Local SEO เห็นผลเร็วกว่า SEO ทั่วไป โดยเฉลี่ย 4–8 สัปดาห์สำหรับ GBP optimization และ 3–6 เดือนสำหรับ keyword ranking ใน local search',
  },
  {
    question: 'ธุรกิจที่มีหลายสาขาต้องทำแยกกันไหม?',
    answer: 'ใช่ — แต่ละสาขาต้องมี GBP แยกกัน location page แยกกัน และ local content ที่พูดถึงย่านของแต่ละสาขา ธุรกิจที่ทำถูกต้องจะปรากฏใน local search ของทุกย่านที่มีสาขาอยู่',
  },
  {
    question: 'ทำ Local SEO เองได้ไหม?',
    answer: 'ได้บางส่วน โดยเฉพาะ GBP setup และการขอรีวิว แต่ส่วนที่ซับซ้อนกว่า เช่น schema markup, citation building, local content strategy และการติดตาม ranking แต่ละย่าน มักต้องการผู้เชี่ยวชาญเพื่อให้ได้ผลเร็วและถูกต้อง',
  },
]

export const restaurantSalesFaqs: FAQItem[] = [
  {
    question: 'ร้านอาหารเล็กๆ ไม่มีเว็บไซต์ ทำ Google Maps ได้ไหม?',
    answer: 'ได้เลย GBP ไม่จำเป็นต้องมีเว็บไซต์ แค่มีที่อยู่จริงและเบอร์โทรก็สมัครได้ เว็บไซต์ช่วยเพิ่ม Website Clicks แต่ไม่ใช่เงื่อนไขบังคับ',
  },
  {
    question: 'ร้านอาหาร Delivery อย่างเดียว ไม่มีหน้าร้าน ทำได้ไหม?',
    answer: 'GBP มีตัวเลือก "Service area business" สำหรับธุรกิจที่ไม่มีหน้าร้าน แต่ผลลัพธ์จะน้อยกว่าร้านที่มีที่ตั้งชัดเจน เพราะ Google Maps เน้น local presence',
  },
  {
    question: 'รีวิวปลอมจากคู่แข่งทำยังไงดี?',
    answer: 'Report ผ่าน GBP Dashboard ได้เลย Google จะตรวจสอบและลบถ้าพบว่าผิด guidelines วิธีป้องกันระยะยาวคือมีรีวิวจริงจำนวนมากพอที่รีวิวปลอมไม่สามารถเปลี่ยนภาพรวมได้',
  },
  {
    question: 'ต้องมีรีวิวกี่อันถึงจะติด Google Maps 3-pack?',
    answer: 'ไม่มีตัวเลขตายตัว ปัจจัยหลักคือ ความใกล้เคียง (proximity), ความเกี่ยวข้อง (relevance) และความโดดเด่น (prominence) รีวิวเป็นส่วนหนึ่งของ prominence — คุณภาพสำคัญกว่าจำนวน',
  },
  {
    question: 'เปิดร้านใหม่ ต้องรอนานไหมกว่า Google จะเห็น?',
    answer: 'หลัง verify GBP แล้ว Google จะ index ภายใน 1–2 สัปดาห์ แต่การติด 3-pack สำหรับคำค้นหาที่มีการแข่งขันสูงอาจใช้เวลา 1–3 เดือน ขึ้นอยู่กับความครบถ้วนของ GBP และจำนวนรีวิว',
  },
]

export const massageSpaFaqs: FAQItem[] = [
  {
    question: 'ร้านนวดเปิดใหม่ ต้องทำอะไรก่อนเป็นอย่างแรก?',
    answer:
      'สร้างและ verify Google Business Profile ให้เสร็จก่อน แล้วเลือกหมวดหมู่ให้ตรง เช่น Massage Therapist, Thai Massage Shop หรือ Day Spa เพราะหมวดหมู่คือสิ่งที่บอก Google ว่าควรแสดงร้านคุณกับคำค้นหาแบบไหน หลังจากนั้นค่อยเติมรูป ราคา และชั่วโมงทำการ',
  },
  {
    question: 'ร้านนวดควรใส่ราคาบน Google Business Profile ไหม?',
    answer:
      'ควรใส่ เพราะลูกค้านวดเทียบราคาก่อนเสมอ การใส่รายการบริการพร้อมราคา (นวดไทย 60 นาที, นวดเท้า 60 นาที, นวดน้ำมัน 90 นาที) ช่วยกรองคนที่งบไม่ตรงออกไป และเพิ่มคุณภาพของสายที่โทรเข้ามา',
  },
  {
    question: 'ทำไมร้านนวดต้องระวังเรื่องภาพลักษณ์บน Google เป็นพิเศษ?',
    answer:
      'เพราะคำค้นหากลุ่มนวดมีทั้ง intent ที่ถูกต้องและ intent ที่ไม่เกี่ยวกับบริการของคุณ การใช้รูปหน้าร้าน รูปเตียงนวด รูปพนักงานในเครื่องแบบ และคำอธิบายที่ระบุชัดว่าเป็นนวดเพื่อสุขภาพ ช่วยให้ทั้ง Google และลูกค้าเข้าใจตรงกันว่าร้านคุณคือบริการประเภทไหน',
  },
  {
    question: 'ร้านนวดที่รับเฉพาะนัดล่วงหน้า ทำ Google Maps ได้ไหม?',
    answer:
      'ได้ ใส่ลิงก์จองใน GBP แล้วระบุในคำอธิบายว่ารับเฉพาะการจองล่วงหน้า จะช่วยลดสายที่ walk-in ไม่ได้ และ Google ยังนับ Website Click กับ Booking Click เป็นสัญญาณความ active ของโปรไฟล์เหมือนกัน',
  },
  {
    question: 'สปาในโรงแรมควรแยก Google Business Profile จากโรงแรมไหม?',
    answer:
      'ควรแยก ถ้าสปาเปิดให้บุคคลภายนอกใช้บริการและมีทางเข้า ชั่วโมงทำการ หรือเบอร์โทรของตัวเอง เพราะจะได้ติดคำค้นหากลุ่ม "สปา ใกล้ฉัน" ด้วยตัวเอง ไม่ถูกกลืนอยู่ใต้โปรไฟล์โรงแรม',
  },
]

export const petGroomingFaqs: FAQItem[] = [
  {
    question: 'ร้านอาบน้ำตัดขนสุนัขเล็กๆ ทำ Google Maps คุ้มไหม?',
    answer:
      'คุ้ม เพราะคำค้นหากลุ่มนี้มี volume ไม่สูงมากแต่ competition ต่ำ (Low เกือบทุกคำ) แปลว่าใช้แรงน้อยกว่าธุรกิจอย่างร้านอาหารหรือคลินิกในการติด 3-pack และลูกค้ากลุ่มนี้กลับมาซ้ำทุก 4–8 สัปดาห์ ทำให้มูลค่าต่อลูกค้าหนึ่งคนสูงกว่าที่เห็น',
  },
  {
    question: 'ควรใส่ราคาตัดขนบน Google Business Profile ไหม ทั้งที่ราคาขึ้นกับขนาดและสภาพขน?',
    answer:
      'ใส่เป็นช่วงราคาตามขนาดหรือสายพันธุ์ เช่น พุดเดิ้ลทอย 500–700 บาท ชิห์สุ 450–650 บาท และระบุว่าราคาสุดท้ายขึ้นกับสภาพขน ลูกค้ากลุ่มนี้กลัวโดนบวกเพิ่มหน้างานมากกว่ากลัวราคาแพง ความโปร่งใสจึงเพิ่ม conversion',
  },
  {
    question: 'รูปแบบไหนที่ควรลงใน GBP สำหรับร้านตัดขน?',
    answer:
      'รูป before/after ของสัตว์จริงคือรูปที่ทรงพลังที่สุด รองลงมาคือรูปโต๊ะกรูมมิ่งที่สะอาด รูปกรงพักที่ปลอดภัย และรูปช่างขณะทำงาน ควรขออนุญาตเจ้าของก่อนลงรูปสัตว์เลี้ยงของลูกค้าทุกครั้ง',
  },
  {
    question: 'บริการรับ-ส่งถึงบ้าน ควรตั้ง GBP แบบไหน?',
    answer:
      'ถ้ามีหน้าร้านให้ตั้งเป็น storefront ปกติแล้วเพิ่ม service area ครอบคลุมย่านที่วิ่งรับ-ส่ง แต่ถ้าเป็นกรูมมิ่งเคลื่อนที่ไม่มีหน้าร้าน ให้ตั้งเป็น Service area business และซ่อนที่อยู่ ไม่ควรใส่ที่อยู่บ้านตัวเองเป็นหน้าร้านปลอม เพราะเสี่ยงโดนระงับโปรไฟล์',
  },
  {
    question: 'รีวิวสำหรับร้านตัดขนสำคัญแค่ไหน?',
    answer:
      'สำคัญมากกว่าธุรกิจทั่วไป เพราะลูกค้ากำลังฝากสิ่งมีชีวิตไว้กับคุณ รีวิวที่พูดถึงความปลอดภัย ความใจเย็นกับสัตว์ที่กลัว และการดูแลระหว่างรอ มีน้ำหนักในการตัดสินใจมากกว่ารีวิวที่ชมว่าตัดสวย',
  },
]

export const petShopFaqs: FAQItem[] = [
  {
    question: 'ร้านขายอุปกรณ์สัตว์เลี้ยงแข่งกับร้านออนไลน์ไม่ได้ ยังควรทำ Google Maps ไหม?',
    answer:
      'ควร เพราะคนที่ค้นหา "ร้านขายอาหารสัตว์ ใกล้ฉัน" คือคนที่ต้องการของวันนี้ ไม่ใช่คนที่รอส่ง 2 วัน นี่คือความได้เปรียบที่ร้านออนไลน์ให้ไม่ได้ และเป็น intent ที่ปิดการขายง่ายที่สุด',
  },
  {
    question: 'ควรใส่สินค้าลงใน Google Business Profile ทุกตัวไหม?',
    answer:
      'ไม่ต้องทุกตัว ให้ใส่เฉพาะยี่ห้อและหมวดที่คนค้นหาบ่อยและเป็นตัวดึงคนเข้าร้าน เช่น อาหารแมวเกรดโฮลิสติก อาหารสูตรเฉพาะโรค ทรายแมว และแบรนด์ที่คุณเป็นตัวแทนจำหน่าย เพราะชื่อแบรนด์คือคำที่ลูกค้าใช้ค้นหาจริง',
  },
  {
    question: 'ร้านที่ขายสัตว์มีชีวิตด้วย ต้องระวังอะไรบน Google?',
    answer:
      'Google Business Profile เองไม่ได้ห้ามธุรกิจประเภทนี้ แต่ Google Ads มีนโยบายจำกัดการโฆษณาการขายสัตว์มีชีวิต ถ้าจะยิงโฆษณาควรเน้นที่อาหารและอุปกรณ์แทน ส่วนฝั่ง organic ให้เน้นความน่าเชื่อถือ ใบอนุญาต และมาตรฐานการดูแลสัตว์ในร้าน',
  },
  {
    question: 'ควรตั้งหมวดหมู่ GBP เป็นอะไรสำหรับร้านสัตว์เลี้ยง?',
    answer:
      'หมวดหลักเลือกให้ตรงกับรายได้หลัก เช่น Pet Store, Pet Supply Store หรือ Pet Food Store แล้วเพิ่มหมวดรองตามบริการที่มีจริง เช่น Pet Groomer หรือ Veterinary Care การใส่หมวดรองที่ไม่ได้ให้บริการจริงเสี่ยงถูกรายงานและระงับโปรไฟล์',
  },
  {
    question: 'ร้านสัตว์เลี้ยงควรโพสต์ GBP Posts เรื่องอะไร?',
    answer:
      'สินค้าเข้าใหม่ โปรโมชั่นอาหารกระสอบใหญ่ ตารางวันที่มีสัตวแพทย์เข้ามาให้บริการ และเนื้อหาให้ความรู้สั้นๆ เช่น วิธีเปลี่ยนอาหารแมวโดยไม่ให้ท้องเสีย เพราะโพสต์ให้ความรู้ช่วยสร้างความเชื่อถือกับลูกค้าใหม่ที่ยังไม่เคยเข้าร้าน',
  },
]

export const petHospitalFaqs: FAQItem[] = [
  {
    question: 'คลินิกสัตวแพทย์เล็กๆ แข่งกับโรงพยาบาลสัตว์เชนใหญ่บน Google Maps ได้จริงไหม?',
    answer:
      'ได้ เพราะคนที่ค้นหา "คลินิกสัตว์ ใกล้ฉัน" หรือ "สัตวแพทย์ ใกล้ฉัน" ส่วนใหญ่ต้องการหมอที่ใกล้และว่างเร็วที่สุด ไม่ใช่เชนที่ใหญ่ที่สุด ถ้าคลินิกคุณตอบสนองไว มีชั่วโมงทำการถูกต้อง และมีรีวิวที่น่าเชื่อถือ ก็แข่งกับเชนใหญ่ในรัศมีใกล้บ้านได้สบาย',
  },
  {
    question: 'ควรตั้งหมวดหมู่ GBP เป็นอะไรสำหรับโรงพยาบาลสัตว์หรือคลินิก?',
    answer:
      'หมวดหลักใช้ Veterinarian หรือ Animal Hospital ตามขนาดและใบอนุญาตจริง ถ้ามีบริการฉุกเฉินตลอด 24 ชั่วโมงให้เพิ่มหมวดรอง Emergency Veterinarian Service และถ้ามีอาบน้ำตัดขนหรือขายอาหารสัตว์ด้วย ให้เพิ่มเป็นหมวดรองแยกต่างหาก',
  },
  {
    question: 'ราคาค่ารักษาที่แตกต่างกันมากในแต่ละเคส ควรใส่ราคาบน Google Business Profile ไหม?',
    answer:
      'ใส่เป็นราคาเริ่มต้นของบริการที่ประเมินล่วงหน้าได้ เช่น ค่าตรวจสุขภาพทั่วไป ค่าฉีดวัคซีนตามชนิด และค่าทำหมัน พร้อมระบุว่าราคาสุดท้ายขึ้นกับอาการและการวินิจฉัยจริง ความโปร่งใสระดับนี้ช่วยลดความกังวลของเจ้าของสัตว์ก่อนโทรเข้ามา',
  },
  {
    question: 'ควรขอรีวิวจากเจ้าของสัตว์ตอนไหน?',
    answer:
      'จังหวะที่ดีที่สุดคือหลังการรักษาสำเร็จและเจ้าของกลับมาติดตามอาการว่าดีขึ้น หรือหลังฉีดวัคซีน/ทำหมันแล้วไม่มีภาวะแทรกซ้อน ควรหลีกเลี่ยงการขอรีวิวในเคสที่สัตว์เลี้ยงอาการหนักหรือเสียชีวิต เพราะเป็นช่วงเวลาที่ละเอียดอ่อนสำหรับเจ้าของ',
  },
  {
    question: 'ต้องแสดงใบอนุญาตหรือข้อมูลสัตวแพทย์บน Google Maps ไหม?',
    answer:
      'ควรแสดง เพราะความน่าเชื่อถือคือปัจจัยตัดสินใจอันดับต้นของธุรกิจสุขภาพ ใส่ชื่อและใบอนุญาตประกอบวิชาชีพการสัตวแพทย์ของทีมสัตวแพทย์ในเว็บไซต์และคำอธิบายธุรกิจ พร้อมรูปอุปกรณ์และห้องตรวจที่สะอาด เพราะทั้งเจ้าของสัตว์และ AI Search ให้น้ำหนักกับสัญญาณความน่าเชื่อถือเหล่านี้',
  },
]

export const petHotelFaqs: FAQItem[] = [
  {
    question: 'ธุรกิจรับฝากเลี้ยงสัตว์เลี้ยงเล็กๆ ควรทำ Google Maps ไหม?',
    answer:
      'ควรทำ เพราะเจ้าของสัตว์ส่วนใหญ่ค้นหา "ฝากเลี้ยงหมา ใกล้ฉัน" หรือ "โรงแรมหมา ใกล้ฉัน" ก่อนเดินทางไกล จังหวัดหรือช่วงหยุดยาว การอยู่ใกล้บ้านลูกค้าคือข้อได้เปรียบที่จับต้องได้ทันที และ competition ของกลุ่มนี้ยังไม่สูงเท่าธุรกิจอื่น',
  },
  {
    question: 'ควรตั้งหมวดหมู่ GBP เป็นอะไรสำหรับโรงแรมสัตว์เลี้ยง?',
    answer:
      'หมวดหลักใช้ Pet Boarding Service หรือ Kennel ตามลักษณะธุรกิจจริง ถ้ามีบริการอาบน้ำตัดขนหรือรับส่งด้วย ให้เพิ่มเป็นหมวดรอง Pet Groomer หรือ Pet Sitter การตั้งหมวดให้ตรงช่วยให้ Google จับคู่กับคำค้นหาที่ตรง intent ที่สุด',
  },
  {
    question: 'ลูกค้าอยากเห็นอะไรก่อนตัดสินใจฝากสัตว์เลี้ยงไว้กับที่ไหนสักแห่ง?',
    answer:
      'สิ่งที่มีผลต่อการตัดสินใจมากที่สุดคือรูปกรงหรือห้องพักจริง วิดีโอบรรยากาศระหว่างวัน และรีวิวที่พูดถึงความปลอดภัยกับความใส่ใจของพนักงาน เพราะเจ้าของกำลังฝากสิ่งมีชีวิตที่รักไว้กับคนแปลกหน้าเป็นเวลาหลายวัน ความโปร่งใสจึงสำคัญกว่าราคาที่ถูกที่สุด',
  },
  {
    question: 'ควรใส่ราคาค่าฝากเลี้ยงบน Google Business Profile ไหม?',
    answer:
      'ควรใส่เป็นราคาต่อคืนหรือต่อวันแยกตามขนาดสัตว์ เช่น สุนัขเล็ก กลาง ใหญ่ พร้อมระบุว่าราคารวมอะไรบ้าง เช่น อาหาร การเดินเล่น หรือค่าบริการเสริม ความชัดเจนเรื่องราคาช่วยลดคำถามซ้ำๆ ทางแชทหรือโทรศัพท์',
  },
  {
    question: 'ช่วงเวลาไหนที่ธุรกิจรับฝากเลี้ยงควรเตรียมโปรไฟล์ให้พร้อมที่สุด?',
    answer:
      'ช่วงเทศกาลและวันหยุดยาว เช่น สงกรานต์ ปีใหม่ และช่วงปิดเทอม เป็นช่วงที่คำค้นหากลุ่มนี้พุ่งสูงที่สุด ควรอัปเดตความพร้อมให้บริการ (Availability) และตอบข้อความให้เร็วเป็นพิเศษในช่วงนี้ เพราะลูกค้ามักจองล่วงหน้าไม่นานและเปลี่ยนใจง่ายถ้ารอนาน',
  },
]

export const thamWebClaudeFaqs: FAQItem[] = [
  {
    question: 'ทำเว็บด้วย Claude ต้องรู้โค้ดไหม?',
    answer:
      'ไม่จำเป็น สำหรับ brochure site หรือ landing page ธรรมดา Claude.ai แบบ chat เขียน HTML/CSS ให้ได้เลย เพียงแต่ต้องรู้จะสื่อสารกับ Claude ว่าต้องการอะไร และ deploy ขึ้น Netlify ซึ่งแค่ลากโฟลเดอร์ไปวาง',
  },
  {
    question: 'เว็บที่ทำด้วย Claude ติด Google ได้ไหม?',
    answer:
      'ติดได้ แต่ต้องทำ SEO ด้วย การสร้างเว็บด้วย Claude เป็นแค่ขั้นแรก Google ต้องรู้ว่าเว็บมีอยู่ก่อน (ผ่าน Google Search Console) จากนั้นต้องมี keyword ที่ถูกต้องในตำแหน่งที่ใช่ และ authority เพียงพอ สิ่งเหล่านี้ต้องการ SEO strategy แยกต่างหาก',
  },
  {
    question: 'Claude.ai กับ Claude Code ต่างกันอย่างไรสำหรับการทำเว็บ?',
    answer:
      'Claude.ai คือแบบ chat ผ่านเบราว์เซอร์ เหมาะกับเจ้าของธุรกิจทั่วไปที่ต้องการ brochure site ส่วน Claude Code คือ command-line tool สำหรับ developer ที่สร้าง web application เต็มรูปแบบ มีระบบ database, auth และ backend ได้',
  },
  {
    question: 'ทำเว็บด้วย Claude เสร็จแล้วต้องทำ SEO เพิ่มอีกไหม?',
    answer:
      'ต้องทำแน่นอน Claude สร้างโครงสร้างเว็บได้ แต่ไม่รู้ว่าลูกค้าของธุรกิจคุณค้นหา keyword ไหนจริงๆ ไม่รู้ว่าคู่แข่งทำอะไรอยู่บน Google และไม่ได้สร้าง authority หรือ backlink ให้ สิ่งเหล่านี้ต้องการ SEO consultant วางแผน',
  },
  {
    question: 'ค่าใช้จ่ายในการทำเว็บด้วย Claude เท่าไหร่?',
    answer:
      'ค่า Claude Pro อยู่ที่ $20/เดือน (ราว 700 บาท) บวกค่า domain ประมาณ 300–500 บาท/ปี และ hosting บน Netlify หรือ GitHub Pages ฟรีสำหรับ static site ต้นทุนสร้างเว็บต่ำมาก แต่ SEO strategy ที่ทำให้เว็บติด Google มีต้นทุนแยกต่างหาก',
  },
]

export const increaseSeoTrafficFaqs: FAQItem[] = [
  {
    question: 'เพิ่ม Traffic เว็บได้จากช่องทางไหนบ้าง?',
    answer:
      'หลัก ๆ มาจาก SEO, Paid Ads, Social Media, Direct/Brand, Referral และช่องทาง AI/Search อื่น ๆ วิธีเลือกควรดูทั้งความเร็ว ต้นทุน ความต่อเนื่อง และคุณภาพของ Traffic ไม่ใช่ดูจำนวน Session อย่างเดียว',
  },
  {
    question: 'ถ้าต้องการเพิ่ม Traffic แบบไม่พึ่งค่าโฆษณาควรเริ่มจากอะไร?',
    answer:
      'เริ่มจาก SEO โดยตรวจ Search Demand, หน้าเป้าหมาย, Crawl/Index, Search Intent, On-page, Internal Link และ Content Gap ก่อนสร้างบทความเพิ่ม เพราะ Traffic จาก Organic Search ต้องอาศัยทั้ง Demand และหน้าที่ตอบ Intent ได้จริง',
  },
  {
    question: 'เพิ่ม Traffic ด้วย SEO ต้องใช้เวลานานแค่ไหน?',
    answer:
      'ไม่มีระยะเวลาตายตัว Google ระบุว่าการเปลี่ยนแปลงบางอย่างอาจสะท้อนเร็ว ขณะที่บางอย่างอาจใช้หลายสัปดาห์หรือหลายเดือน ระยะเวลาจริงขึ้นอยู่กับการ crawl/index, การแข่งขัน, คุณภาพของหน้า, authority และสถานะเว็บไซต์เดิม',
  },
  {
    question: 'เขียนบทความเยอะขึ้นแล้ว Traffic จะเพิ่มไหม?',
    answer:
      'ไม่จำเป็น ถ้าบทความใหม่ซ้ำ Intent, ไม่มี Search Demand, ไม่มี Internal Link หรือหน้าเดิมยังมี Technical Issue การเพิ่มจำนวน Content อาจไม่ช่วย ควรกำหนด Topic Ownership และแก้ owner page ก่อน scale content',
  },
  {
    question: 'ควรวัดผลการเพิ่ม Traffic จากอะไร?',
    answer:
      'สำหรับ SEO ให้ดู Impressions, Clicks, Queries และ Landing Pages ใน Search Console แล้วดู Sessions, Engagement และ Conversion ใน GA4 ต่ออีกชั้น เช่น Form, LINE, Call, Lead หรือ Purchase เพื่อแยกว่า Traffic เพิ่มแล้วสร้างผลทางธุรกิจหรือไม่',
  },
  {
    question: 'เพิ่ม Traffic กับเพิ่ม Organic Traffic ต่างกันอย่างไร?',
    answer:
      'เพิ่ม Traffic เป็นโจทย์กว้างที่รวมทุกช่องทาง เช่น SEO, Ads, Social และ Referral ส่วน Organic Traffic หมายถึง Traffic จากผลค้นหาแบบไม่เสียค่าโฆษณา หน้านี้เน้นวิธีเพิ่ม Traffic โดยให้ SEO เป็นกลยุทธ์หลักระยะกลางถึงยาว',
  },
]

export const checkTrafficFreeFaqs: FAQItem[] = [
  {
    question: 'เช็ค Traffic Website ฟรี ใช้เครื่องมืออะไรดีที่สุด?',
    answer:
      'ถ้าเป็นเว็บไซต์ของตัวเอง ให้ใช้ Google Search Console เพื่อดู Clicks, Impressions, Queries และ Pages จาก Google Search และใช้ GA4 เพื่อดู Sessions, Engagement และ Traffic source หลังผู้ใช้เข้ามาในเว็บไซต์ ส่วนเว็บไซต์คู่แข่งใช้เครื่องมือภายนอกได้ แต่ข้อมูลเป็นค่าประมาณการ ไม่ใช่ข้อมูล Analytics ภายในของคู่แข่ง',
  },
  {
    question: 'Google Search Console กับ GA4 ต่างกันอย่างไร?',
    answer:
      'Search Console ตอบคำถามว่าเว็บไซต์ถูกเห็นและถูกคลิกจาก Google Search อย่างไร ส่วน GA4 ตอบว่าหลังเข้ามาแล้วเกิด Session, Engagement และ Conversion อย่างไร ตัวเลขจึงไม่ควรถูกคาดหวังให้ตรงกันแบบหนึ่งต่อหนึ่ง เพราะสองระบบวัดคนละช่วงของ journey และใช้วิธีประมวลผลต่างกัน',
  },
  {
    question: 'เช็ค Traffic เว็บไซต์คู่แข่งฟรีได้ไหม?',
    answer:
      'เช็คได้ในระดับประมาณการผ่านเครื่องมือ SEO หรือ competitive research บางราย แต่ควรใช้เพื่อดูแนวโน้ม, keyword visibility และหน้าเด่นของคู่แข่ง มากกว่านำตัวเลขมาเทียบตรง ๆ กับ Search Console หรือ GA4 ของเว็บไซต์ตัวเอง',
  },
  {
    question: 'ดูได้ไหมว่า Traffic มาจาก Brand หรือ Non-brand?',
    answer:
      'Google Search Console มี Branded / Non-branded query filter ใน Performance report สำหรับ property ที่รองรับ โดยข้อมูลส่วนนี้ช่วยแยกว่าการเติบโตมาจากคนที่รู้จักแบรนด์อยู่แล้ว หรือมาจากคำค้นทั่วไปที่พาคนใหม่เข้าสู่เว็บไซต์',
  },
  {
    question: 'เช็ค Traffic แล้วควรดูช่วงเวลาเท่าไร?',
    answer:
      'ใช้ช่วงเวลาที่สะท้อนธุรกิจและ seasonality ได้ เช่น เทียบ 28 วันล่าสุดกับ 28 วันก่อน หรือเทียบปีต่อปีเมื่อธุรกิจมีฤดูกาล ไม่ควรตัดสินจากวันเดียว เพราะวันหยุด แคมเปญ และ demand ของตลาดทำให้ Traffic แกว่งได้',
  },
  {
    question: 'ถ้า Traffic ลดลงควรทำอะไรต่อ?',
    answer:
      'เริ่มจากแยกก่อนว่าลดใน Search Console หรือ GA4 ถ้า Search Visibility ลด ให้ดู Queries, Pages, Indexing และ Search Intent หาก Search Console ยังทรงตัวแต่ GA4 ลด ให้ตรวจ tracking, channel attribution, landing page และ conversion path ต่อ',
  },
]

export const proteinSeoFaqs: FAQItem[] = [
  {
    question: 'ทำ SEO ให้ธุรกิจขายเวย์โปรตีนหรือโปรตีนจากพืชควรเริ่มจากอะไร?',
    answer:
      'ควรเริ่มจากคีย์เวิร์ดหางยาวที่มีเงื่อนไขเฉพาะเจาะจง เช่น เงื่อนไขด้านสุขภาพหรือไลฟ์สไตล์การกิน แทนที่จะไล่ตามคำกว้างอย่าง "เวย์โปรตีน" ซึ่งถูกแบรนด์ใหญ่และมาร์เก็ตเพลสครองพื้นที่อยู่แล้ว',
  },
  {
    question: 'ทำไมคำว่า "เวย์โปรตีน" หรือ "โปรตีนจากพืช" ถึงติดอันดับยาก?',
    answer:
      'เพราะหน้าแรกของคำเหล่านี้เต็มไปด้วยหน้าสินค้าจาก Shopee, Lazada และแบรนด์ระดับประเทศที่มีงบโฆษณาและลิงก์ย้อนกลับสะสมมาหลายปี ธุรกิจขนาดเล็กแข่งด้วยคำกว้างแบบนี้ได้ยากมาก',
  },
  {
    question: 'ควรแยกหน้าเว็บระหว่าง Plant Protein กับ Whey Protein หรือไม่?',
    answer:
      'ควรแยก เพราะลูกค้าสองกลุ่มนี้มีเหตุผลในการเลือกซื้อต่างกัน คนหาโปรตีนจากพืชมักกังวลเรื่องกลิ่นและความเป็นมังสวิรัติ ส่วนคนหาเวย์โปรตีนมักสนใจปริมาณโปรตีนและการดูดซึม การแยกหน้าให้เนื้อหาตอบโจทย์แต่ละกลุ่มได้ลึกกว่า',
  },
  {
    question: 'ธุรกิจขายโปรตีนที่ไม่มีหน้าร้านควรทำ Google Business Profile ไหม?',
    answer:
      'ไม่จำเป็น เพราะ Google Business Profile เหมาะกับธุรกิจที่มีที่ตั้งจริงให้ลูกค้าค้นหาเจอ ธุรกิจที่ขายออนไลน์ล้วนควรให้ความสำคัญกับหน้าเว็บและคีย์เวิร์ดหางยาวเป็นหลักแทน',
  },
  {
    question: 'ทำ SEO คีย์เวิร์ดหางยาวสำหรับธุรกิจโปรตีนแล้วต้องรอนานแค่ไหนถึงเห็นผล?',
    answer:
      'มักเห็นผลช้ากว่าการยิงโฆษณา แต่ต้นทุนต่อการเข้าชมในระยะยาวต่ำกว่ามาก ตัวชี้วัดที่ควรติดตามคือจำนวนคำค้นหาเฉพาะเจาะจงที่เริ่มมีอันดับดีขึ้น ไม่ใช่แค่ยอดเข้าชมรวม',
  },
  {
    question: 'ผลลัพธ์ Organic Clicks เพิ่มจาก 150 เป็น 2,157 ในบทความนี้เป็นตัวอย่างจริงไหม?',
    answer:
      'เป็นข้อมูลจริงจาก Google Search Console ของลูกค้ากลุ่มสุขภาพและโภชนาการรายหนึ่ง (ไม่เปิดเผยชื่อแบรนด์ตามข้อตกลงความเป็นส่วนตัว) แสดงเพื่อให้เห็นภาพว่าคีย์เวิร์ดกลุ่ม Non-Brand ที่เจาะจงสามารถสร้างผลลัพธ์ได้จริงภายในระยะเวลา 3 เดือน ไม่ได้การันตีว่าทุกธุรกิจจะได้ผลลัพธ์เท่ากัน เพราะขึ้นอยู่กับอุตสาหกรรมและการแข่งขันของแต่ละเว็บไซต์',
  },
]

export const increaseOnlineSalesFaqs: FAQItem[] = [
  {
    question: 'วิธีเพิ่มยอดขายออนไลน์ที่ได้ผลจริงมีอะไรบ้าง?',
    answer:
      'เริ่มจากทำให้ลูกค้าเจอธุรกิจก่อนผ่าน SEO, Google Maps และ AEO/GEO จากนั้นปรับหน้าเว็บให้เปลี่ยนคนเข้าชมเป็นลูกค้าได้ง่ายขึ้น เช่น ความเร็วเว็บ, รีวิว และ CTA ที่ชัดเจน แล้ววัดผลต่อเนื่องด้วย Google Search Console และ GA4 เพื่อรู้ว่าจุดไหนควรปรับปรุงต่อ',
  },
  {
    question: 'เพิ่มยอดขายออนไลน์ต้องใช้งบโฆษณาไหม?',
    answer:
      'ไม่จำเป็นต้องใช้โฆษณาเสมอไป การทำ SEO และ AEO/GEO ช่วยให้ลูกค้าเจอธุรกิจแบบ Organic โดยไม่ต้องจ่ายค่าคลิก แต่ต้องใช้เวลานานกว่าโฆษณา จึงเหมาะกับธุรกิจที่มองผลระยะยาวมากกว่าผลทันที',
  },
  {
    question: 'ทำ SEO แล้วยอดขายจะเพิ่มขึ้นเลยไหม?',
    answer:
      'SEO ช่วยให้ลูกค้าเจอธุรกิจมากขึ้น แต่ยอดขายจะเพิ่มจริงต้องอาศัยหน้าเว็บที่เปลี่ยนคนเข้าชมเป็นลูกค้าได้ดีด้วย เช่น ข้อมูลสินค้าครบถ้วน มีรีวิว และขั้นตอนสั่งซื้อที่ไม่ยุ่งยาก SEO เพียงอย่างเดียวไม่รับประกันยอดขาย แต่เป็นจุดเริ่มต้นที่จำเป็น',
  },
  {
    question: 'ธุรกิจขนาดเล็กควรเริ่มเพิ่มยอดขายออนไลน์จากตรงไหนก่อน?',
    answer:
      'ควรเริ่มจากตรวจสอบว่าตอนนี้ลูกค้าเจอธุรกิจผ่านช่องทางไหนบ้างใน Google Search Console แล้วดูว่าคำค้นหาที่มี Impression สูงแต่ Click ต่ำคือคำไหน นั่นมักเป็นจุดที่ปรับปรุงแล้วเห็นผลเร็วที่สุด ก่อนขยายไปทำคอนเทนต์หรือ AEO/GEO เพิ่มเติม',
  },
]

export const salesTechniquesFaqs: FAQItem[] = [
  {
    question: '15 เทคนิคการเพิ่มยอดขายในบทความนี้เหมาะกับธุรกิจแบบไหน?',
    answer:
      'เหมาะกับธุรกิจที่ขายผ่านช่องทางออนไลน์หรือมีเว็บไซต์เป็นหลัก ทั้งธุรกิจที่มีหน้าร้านจริงและขายออนไลน์ล้วน เพราะเทคนิคส่วนใหญ่เน้นเรื่องการถูกค้นเจอ การเปลี่ยนผู้เข้าชมเป็นลูกค้า และการรักษาลูกค้าเดิม ซึ่งใช้ได้กับธุรกิจส่วนใหญ่',
  },
  {
    question: 'ต้องทำครบทั้ง 15 เทคนิคพร้อมกันไหม?',
    answer:
      'ไม่จำเป็น ควรเริ่มจากกลุ่มที่ธุรกิจยังขาดมากที่สุดก่อน เช่น ถ้ายังไม่มีใครเจอเว็บไซต์เลย ควรเริ่มจากกลุ่ม SEO และ Visibility ก่อน แต่ถ้ามีคนเข้าเว็บอยู่แล้วแต่ไม่ซื้อ ควรเริ่มจากกลุ่มเปลี่ยนผู้เข้าชมเป็นลูกค้าก่อน',
  },
  {
    question: 'เทคนิคไหนในบทความนี้เห็นผลเร็วที่สุด?',
    answer:
      'เทคนิคที่เกี่ยวกับการเปลี่ยนผู้เข้าชมเป็นลูกค้า เช่น ใส่ CTA ให้ชัดเจน ลดขั้นตอนการสั่งซื้อ และเพิ่มรีวิว มักเห็นผลเร็วที่สุดเพราะใช้กับคนที่เข้าเว็บไซต์อยู่แล้ว ส่วนเทคนิคด้าน SEO และ AEO/GEO ต้องใช้เวลานานกว่าจะเห็นผลแต่ให้ผลระยะยาวที่ยั่งยืนกว่า',
  },
]

export const aeoChecklistFaqs: FAQItem[] = [
  {
    question: 'AEO Checklist ต่างจาก GEO Checklist อย่างไร?',
    answer:
      'AEO เน้นการติด Featured Snippet, People Also Ask และ Google AI Overview บน Google Search โดยเฉพาะ ส่วน GEO ครอบคลุมกว้างกว่า คือการถูกอ้างอิงโดย Generative AI เช่น ChatGPT, Gemini และ Perplexity ทั้งสองใช้หลักการ Answer-First และ FAQ Schema ร่วมกัน แต่ AEO Checklist จะเจาะจงไปที่รูปแบบคำตอบที่ Google เลือกไปแสดงมากกว่า',
  },
  {
    question: 'ต้องทำ AEO Checklist ครบทุกข้อก่อนถึงจะเห็นผลไหม?',
    answer:
      'ไม่จำเป็น ควรเริ่มจากหมวด Content Structure ก่อน เพราะเป็นพื้นฐานที่ทุกข้ออื่นต่อยอดจาก จากนั้นค่อยทำ Schema และ Technical แล้วปิดท้ายด้วยการวัดผล การทำบางส่วนให้ดีมีผลมากกว่าการทำครบทุกข้อแบบผิวเผิน',
  },
  {
    question: 'ธุรกิจขนาดเล็กในไทยควรเริ่ม AEO จากตรงไหนก่อน?',
    answer:
      'เริ่มจากเลือกคำถามที่ลูกค้าถามบ่อยที่สุด 5 คำถาม แล้วเขียนคำตอบแบบ Answer-First ในบทความหรือหน้าเว็บที่มีอยู่แล้ว พร้อมใส่ FAQ Schema ให้ครบ ไม่ต้องเริ่มจากการเขียนบทความใหม่ทั้งหมด',
  },
  {
    question: 'วัดผลว่า AEO ได้ผลหรือไม่ ดูจากอะไร?',
    answer:
      'ดูจาก Google Search Console ว่าคำค้นที่เป็นคำถามเริ่มมี Impression เพิ่มขึ้นหรือไม่ และลองค้นหาคำถามเป้าหมายใน Google เพื่อดูว่าเว็บไซต์ถูกดึงไปแสดงใน Featured Snippet หรือ AI Overview หรือยัง ควรเช็คอย่างน้อยเดือนละครั้งเพราะตำแหน่ง Snippet เปลี่ยนแปลงได้ตลอดเวลา',
  },
]

export const spaMarketingPlanFaqs: FAQItem[] = [
  {
    question: 'แผนการตลาดสปาที่ดีต้องมีอะไรบ้าง?',
    answer:
      'ต้องมี 5 ส่วนหลัก: กลุ่มเป้าหมายและงบประมาณที่ชัดเจน, ช่องทางให้ลูกค้าใหม่เจอร้าน (Google Maps, SEO), การสร้างความน่าเชื่อถือด้วยรีวิวและคอนเทนต์, การเตรียมพร้อมสำหรับ AI Search และการรักษาลูกค้าเดิมให้กลับมาใช้บริการซ้ำ ขาดส่วนใดส่วนหนึ่งไปแผนก็มักไม่ครบวงจร',
  },
  {
    question: 'ร้านสปาขนาดเล็กมีงบจำกัด ควรเริ่มวางแผนการตลาดจากตรงไหนก่อน?',
    answer:
      'ควรเริ่มจาก Google Business Profile ให้ครบก่อน เพราะไม่มีค่าใช้จ่ายและลูกค้าที่ค้นหา "นวด ใกล้ฉัน" หรือ "สปา ใกล้ฉัน" พร้อมจองทันทีถ้าข้อมูลครบและน่าเชื่อถือ จากนั้นค่อยขยายไปทำ SEO และคอนเทนต์เมื่อมีงบเพิ่ม',
  },
  {
    question: 'แผนการตลาดสปาควรทำระยะสั้นหรือระยะยาว?',
    answer:
      'ควรมีทั้งสองระยะ ระยะสั้น 1-3 เดือนควรโฟกัสที่ Google Maps และรีวิวเพราะเห็นผลเร็ว ส่วนระยะยาว 6-12 เดือนควรลงทุนกับ SEO, คอนเทนต์ และ AEO/GEO เพราะใช้เวลานานกว่าจะเห็นผลแต่ให้ผลตอบแทนที่ยั่งยืนกว่า',
  },
  {
    question: 'ทำไมร้านสปาต้องสนใจ AI Search ด้วย ไม่ใช่แค่ Google?',
    answer:
      'เพราะลูกค้าบางกลุ่มเริ่มถาม AI อย่าง ChatGPT หรือ Gemini ว่า "สปาไหนดีแถวบ้าน" ก่อนค้นหาใน Google เอง ถ้าร้านไม่มีข้อมูลที่ AI เข้าใจและอ้างอิงได้ ก็จะพลาดลูกค้ากลุ่มนี้ไปทั้งที่ไม่เคยรู้ตัว',
  },
]

export const aiOverviewFaqs: FAQItem[] = [
  {
    question: 'AI Overview คืออะไร?',
    answer:
      'AI Overview คือคำตอบที่ Google สร้างด้วย Generative AI บนหน้าผลการค้นหา โดยรวบรวมและสรุปข้อมูลที่เกี่ยวข้อง พร้อมแสดงลิงก์ไปยังแหล่งข้อมูลที่ใช้ประกอบคำตอบ',
  },
  {
    question: 'ต้องเป็นคำค้นเฉพาะทางแบบมีแบรนด์เท่านั้นถึงจะติด AI Overview ได้ไหม?',
    answer:
      'ไม่จำเป็น AI Overview สามารถแสดงบนคำค้นแบบ Non-brand เช่น "ขายอะไรดีตลาดนัด" ได้ โดยไม่จำเป็นต้องเป็นคำค้นที่มีชื่อแบรนด์',
  },
  {
    question: 'ทำ AI Overview แล้วรับประกันติดไหม?',
    answer:
      'ไม่มีวิธีรับประกันว่าเว็บไซต์จะถูกอ้างอิงใน AI Overview เพราะ Google เป็นผู้ตัดสินใจว่าจะแสดง AI Overview สำหรับคำค้นใดและเลือกแหล่งข้อมูลใดมาใช้ สิ่งที่ทำได้คือสร้างเนื้อหาที่ตอบ Search Intent ชัดเจน มีข้อมูลที่ตรวจสอบได้ โครงสร้างอ่านง่าย และทำ Technical SEO ให้ Search Engine เข้าถึงเนื้อหาได้ตามปกติ',
  },
  {
    question: 'AI Overview กับ Featured Snippet ต่างกันอย่างไร?',
    answer:
      'Featured Snippet ดึงข้อความจากเว็บไซต์เดียวมาแสดงเป็นคำตอบ ส่วน AI Overview ใช้ AI สรุปและรวมข้อมูลจากหลายเว็บไซต์เข้าด้วยกัน มักมีความยาวและความซับซ้อนมากกว่า และสามารถอ้างอิงแหล่งที่มาได้มากกว่าหนึ่งเว็บไซต์ในคำตอบเดียว',
  },
]

export const blogPosts: BlogPost[] = [
  {
    title: 'ทำเว็บด้วย Claude ยังไงให้มีคนเข้า',
    slug: 'build-website-with-claude',
    category: 'SEO',
    excerpt:
      'Claude ทำเว็บได้จริง — แต่ "ทำเว็บเสร็จ" กับ "มีคนเข้าเว็บ" คือคนละขั้นตอนกันทั้งหมด บทความนี้บอก 5 ขั้นตอนสร้างเว็บด้วย Claude และสิ่งที่ต้องทำต่อให้ Google พาลูกค้ามาเจอ',
    readingTime: '10 min read',
    publishedDate: '2026-06-28',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    heroImageDesktop: '/image/blog/tham-web-claude/tham-web-claude-banner-web.png',
    heroImageMobile: '/image/blog/tham-web-claude/tham-web-claude-banner-mweb.png',
    heroImageAlt: 'ทำเว็บด้วย Claude ยังไงให้มีคนเข้า — Claude สร้างเว็บ แต่ยังไม่มีคนเข้า จากนั้นจึงวาง SEO Strategy เพื่อเพิ่ม Organic Traffic',
    ogImage: '/image/blog/tham-web-claude/tham-web-claude-banner-web.png',
    metaTitle: 'ทำเว็บด้วย Claude ยังไงให้มีคนเข้า | Saralak Search',
    metaDescription:
      'วิธีใช้ Claude สร้างเว็บไซต์ตั้งแต่ต้น + สิ่งที่ต้องทำต่อให้เว็บที่สร้างด้วย AI ติด Google และมีลูกค้าเข้ามาจริง',
    aiSummary: [
      'Claude ทำเว็บได้จริงใน 5 ขั้นตอน ตั้งแต่วาง structure จนถึง deploy โดยไม่ต้องรู้โค้ด',
      'แต่เว็บที่สร้างด้วย Claude ไม่ได้ติด Google อัตโนมัติ เพราะ Google ยังไม่รู้ว่าเว็บมีอยู่ และไม่มี keyword strategy',
      'Claude ช่วยด้าน technical ได้ดี — แต่ keyword research, content strategy, Local SEO และ GEO ต้องการผู้เชี่ยวชาญวางแผน',
      'วิธีที่ได้ผลที่สุดคือ ใช้ Claude สร้างเว็บ + ให้ SEO consultant วาง strategy ว่าต้องทำอะไรต่อ',
    ],
    faqs: thamWebClaudeFaqs,
    bodyVariant: 'tham-web-claude',
    cta: {
      headline: 'ทำเว็บด้วย Claude แล้ว อยากให้มีคนเจอจริงๆ?',
      description:
        'ดูบริการ SEO สำหรับวิเคราะห์ Search demand, Technical SEO, Content และหน้าที่มีผลต่อธุรกิจ แล้วจัดลำดับงานตามโอกาสที่วัดผลได้',
      buttonText: 'ดูบริการ SEO',
      href: '/services/seo',
    },
  },
  {
    title: 'เพิ่มยอดขายบน Google Maps ให้ลูกค้าใกล้ฉันหาเจอ!',
    slug: 'increase-sale-google-maps',
    category: 'Local SEO',
    excerpt: 'เพิ่มยอดขายบน Google Maps ด้วยวิธีที่ได้ผลจริง — ลูกค้ากว่า 2.24 ล้านคน/เดือนหา "ร้านอาหาร ใกล้ฉัน" แต่ร้านส่วนใหญ่พลาดโอกาสเพราะ GBP ไม่สมบูรณ์ เรียนรู้ 3 KPI ที่แปลงเป็นเงินได้จริง',
    readingTime: '14 min read',
    publishedDate: '2026-06-22',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    heroImageDesktop: '/image/blog/Increase-sale-gbp/increase-sale-google-maps-banner-desktop.png',
    heroImageMobile: '/image/blog/Increase-sale-gbp/increase-sale-google-maps-banner-mobile.png',
    heroImageAlt: 'เพิ่มยอดขายบน Google Maps ให้ลูกค้าใกล้ฉันหาเจอ — เพิ่ม Call Direction Website',
    ogImage: '/image/blog/Increase-sale-gbp/increase-sale-google-maps-banner-desktop.png',
    metaTitle: 'เพิ่มยอดขายบน Google Maps ให้ลูกค้าใกล้ฉันหาเจอ | Saralak Search',
    metaDescription: 'วิธีเพิ่มยอดขายบน Google Maps — ลูกค้า 2.24 ล้านคน/เดือนค้นหา "ใกล้ฉัน" แต่คุณพลาดพวกเขาไปทุกวัน เรียนรู้ 3 KPI และ quick win ที่เห็นผลได้ภายใน 30 วัน',
    aiSummary: [
      'เพิ่มยอดขายบน Google Maps ได้จากการเพิ่ม Call, Direction Requests และ Website Clicks — ไม่ใช่อันดับ',
      'คนไทยค้นหา "ร้านอาหาร ใกล้ฉัน" กว่า 2,240,000 ครั้งต่อเดือน ทุกคนพร้อมซื้อทันที — ถ้าหาเจอคุณ',
      'Google Maps เป็น 1 ใน 3 ปัจจัยหลักของ GEO ที่ทำให้ AI แนะนำแบรนด์คุณ',
      'Vans เพิ่ม store visits ได้ 70% และธุรกิจที่ทำ GBP ครบเพิ่ม Call ได้ 3–4 เท่าภายใน 90 วัน',
    ],
    faqs: googleMapsSalesFaqs,
    bodyVariant: 'increase-sale-google-maps',
    cta: {
      headline: 'ไม่แน่ใจว่า GBP ของคุณดึงยอดโทร-เส้นทาง-เว็บได้ดีแค่ไหน?',
      description:
        'ดูแนวทางเพิ่มการมองเห็นบน Google Search และ Google Maps สำหรับธุรกิจที่ต้องการลูกค้าจากพื้นที่และคำค้นที่มี Local Intent',
      buttonText: 'ดูบริการ Local SEO',
      href: '/services/local-seo',
    },
  },
  {
    title: 'Local SEO เหมาะกับธุรกิจไหน - ลูกค้าใกล้ฉัน',
    slug: 'local-seo-customer-intent',
    category: 'Local SEO',
    excerpt: 'Local SEO เหมาะกับธุรกิจที่อยากให้ลูกค้าใกล้บ้านเจอก่อนคู่แข่ง ทุกครั้งที่มีคนพิมพ์ "[บริการ] + [ย่าน]" คือลูกค้าพร้อมซื้อที่กำลังรอเจอคุณอยู่ — และบทความนี้จะบอกว่าธุรกิจแบบไหนได้ประโยชน์มากที่สุด',
    readingTime: '10 min read',
    publishedDate: '2026-06-22',
    lastModifiedDate: '2026-06-24',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    heroImageDesktop: '/image/blog/local-seo/local-seo-banner-web.png',
    heroImageMobile: '/image/blog/local-seo/local-seo-banner-mweb.png',
    heroImageAlt: 'Local SEO เหมาะกับธุรกิจไหน — ดึงลูกค้าในย่านโดยไม่ซื้อโฆษณา',
    ogImage: '/image/blog/local-seo/local-seo-banner-web.png',
    metaTitle: 'Local SEO เหมาะกับธุรกิจไหน? ดึงลูกค้าใกล้ฉันโดยไม่ซื้อโฆษณา | Saralak Search',
    metaDescription: 'Local SEO เหมาะกับธุรกิจท้องถิ่นทุกประเภท ตั้งแต่ร้านอาหาร คลินิก ไปจนถึงสปา — ทุกครั้งที่มีคนพิมพ์ "[บริการ] + [ย่าน]" คือลูกค้าพร้อมซื้อที่คุณต้องไม่พลาด',
    aiSummary: [
      'การค้นหา "[บริการ] + [ย่าน]" คือ search intent ที่พร้อมซื้อที่สุด เพราะผู้ค้นหารู้แล้วว่าต้องการอะไรและอยู่ที่ไหน',
      'ร้านอาหาร อารีย์ มีคนค้นหา 14,800 ครั้ง/เดือน — 1% คือ 148 ลูกค้าใหม่โดยไม่ซื้อโฆษณา',
      'Local SEO ประกอบด้วย 5 องค์ประกอบ: GBP, Local Keywords, Citations, Reviews และ Local Content',
      'AI เช่น Gemini, ChatGPT และ Perplexity ดึงข้อมูล Local SEO มาแนะนำธุรกิจเช่นกัน',
    ],
    faqs: localSeoCustomerIntentFaqs,
    bodyVariant: 'local-seo-customer-intent',
    cta: {
      headline: 'ลูกค้าในย่านคุณกำลังหาคู่แข่งอยู่',
      description:
        'ดูแนวทางเพิ่มการมองเห็นบน Google Search และ Google Maps สำหรับธุรกิจที่ต้องการลูกค้าจากพื้นที่และคำค้นที่มี Local Intent',
      buttonText: 'ดูบริการ Local SEO',
      href: '/services/local-seo',
    },
  },
  {
    title: 'เพิ่มยอดขายร้านอาหาร ด้วย Google Maps ลูกค้ากำลังหิวกำลังหาคุณอยู่',
    slug: 'increase-sale-restaurant',
    category: 'Local SEO',
    excerpt: 'ลูกค้า 2.24 ล้านคนหา "ร้านอาหาร ใกล้ฉัน" ทุกเดือน แต่ร้านส่วนใหญ่พลาดลูกค้าเหล่านี้เพราะ Google Maps ไม่สมบูรณ์ เรียนรู้ 6 สิ่งที่เพิ่มยอดโทร ยอดเส้นทาง และยอดคลิกได้จริง',
    readingTime: '8 min read',
    publishedDate: '2026-06-22',
    lastModifiedDate: '2026-06-24',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    heroImageDesktop: '/image/blog/increase-sale-resturant/resturant-increase-sale-banner.png',
    heroImageMobile: '/image/blog/increase-sale-resturant/resturant-increase-sale-banner-mweb.png',
    heroImageAlt: 'เพิ่มยอดขายร้านอาหาร ด้วย Google Maps — ลูกค้า 2.24 ล้านคนค้นหาร้านอาหารใกล้ฉันทุกเดือน',
    ogImage: '/image/blog/increase-sale-resturant/resturant-increase-sale-banner.png',
    metaTitle: 'เพิ่มยอดขายร้านอาหาร ด้วย Google Maps: ลูกค้าหิวหาคุณอยู่ | Saralak Search',
    metaDescription: 'เพิ่มยอดขายร้านอาหารด้วย Google Maps — "ร้านอาหาร ใกล้ฉัน" มีคนค้นหา 2,240,000 ครั้ง/เดือน เรียนรู้ 6 เทคนิคเพิ่ม Call, Direction และ Website Clicks โดยไม่ต้องซื้อโฆษณา',
    aiSummary: [
      '"ร้านอาหาร ใกล้ฉัน" มีคนค้นหา 2,240,000 ครั้ง/เดือน — คนเหล่านี้หิวข้าวและพร้อมจ่ายทันที',
      'ตัวชี้วัดที่แปลงเป็นเงินได้คือ Call, Direction Requests และ Website Clicks — ไม่ใช่อันดับ',
      '6 สิ่งที่ร้านอาหารต้องทำ: รูปภาพ, เมนู, ชั่วโมงทำการ, ลิงก์จอง, ตอบรีวิว, GBP Posts',
      'AI เช่น Gemini, ChatGPT และ Perplexity แนะนำร้านอาหารจาก GBP ที่ครบและรีวิวดี',
    ],
    faqs: restaurantSalesFaqs,
    bodyVariant: 'increase-sale-restaurant',
    cta: {
      headline: 'ลูกค้า 2.24 ล้านคนกำลังหาร้านอาหารอยู่ตอนนี้',
      description:
        'ดูแนวทางเพิ่มการมองเห็นบน Google Search และ Google Maps สำหรับธุรกิจที่ต้องการลูกค้าจากพื้นที่และคำค้นที่มี Local Intent',
      buttonText: 'ดูบริการ Local SEO',
      href: '/services/local-seo',
    },
  },
  {
    title: 'เพิ่มยอดขายร้านนวดและสปา ด้วย Google Maps ลูกค้าที่เมื่อยกำลังหาคุณอยู่',
    slug: 'increase-sale-massage-spa',
    heroImageDesktop: '/image/blog/increase-sale-massage-spa/increase-sale-massage-spa-hero.webp',
    heroImageAlt: 'ร้านนวดและสปาที่ลูกค้าค้นพบผ่าน Google Maps และจองบริการ',
    ogImage: '/image/blog/increase-sale-massage-spa/increase-sale-massage-spa-hero.webp',
    category: 'Local SEO',
    excerpt:
      'คำค้นหากลุ่มนวดและสปาแบบ "ใกล้ฉัน" รวมกันกว่า 1.34 ล้านครั้งต่อเดือนในไทย และยังโตขึ้น +22% ถึง +49% เทียบปีก่อน แต่ร้านส่วนใหญ่ยังไม่มีราคา รูป หรือชั่วโมงทำการที่ถูกต้องบน Google Maps',
    readingTime: '12 min read',
    publishedDate: '2026-08-04',
    lastModifiedDate: '2026-08-04',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'เพิ่มยอดขายร้านนวดและสปา ด้วย Google Maps | Saralak Search',
    metaDescription:
      'เพิ่มยอดขายร้านนวดและสปาด้วย Google Maps — "ร้านนวด ใกล้ฉัน" มีคนค้นหา 450,000 ครั้ง/เดือน และ "นวด ใกล้ฉัน" อีก 201,000 ครั้ง เรียนรู้วิธีเปลี่ยนคนค้นหาเป็น Call, Direction และ Booking',
    aiSummary: [
      'คำค้นหากลุ่มนวดและสปาแบบ "ใกล้ฉัน" ในไทยรวมกันประมาณ 1,348,900 ครั้ง/เดือน นำโดย massage near me 673,000 และ ร้านนวด ใกล้ฉัน 450,000',
      'กลุ่มคำหลักโตขึ้นเทียบปีก่อน: massage near me +49%, ร้านนวด ใกล้ฉัน และ นวด ใกล้ฉัน +22%, นวดเท้า ใกล้ฉัน +21%',
      'ธุรกิจนวดต่างจากร้านอาหารตรงที่ลูกค้าตัดสินใจจากราคา ความสะอาด และความน่าเชื่อถือของภาพลักษณ์ ไม่ใช่รูปอาหาร',
      'สิ่งที่ต้องมีบน GBP: หมวดหมู่ที่ถูกต้อง รายการบริการพร้อมราคา รูปหน้าร้านและเตียงนวด ลิงก์จอง และการตอบรีวิวทุกอัน',
    ],
    faqs: massageSpaFaqs,
    bodyVariant: 'increase-sale-massage-spa',
    cta: {
      headline: 'คนค้นหา "นวด ใกล้ฉัน" 1.3 ล้านครั้งต่อเดือน — ร้านคุณอยู่ตรงไหน',
      description:
        'ดูแนวทางเพิ่มการมองเห็นบน Google Search และ Google Maps สำหรับธุรกิจที่ต้องการลูกค้าจากพื้นที่และคำค้นที่มี Local Intent',
      buttonText: 'ดูบริการ Local SEO',
      href: '/services/local-seo',
    },
  },
  {
    title: 'เพิ่มยอดขายร้านอาบน้ำตัดขนสุนัข ด้วย Google Maps คู่แข่งน้อยกว่าที่คิด',
    slug: 'increase-sale-pet-grooming',
    heroImageDesktop: '/image/blog/increase-sale-pet-grooming/increase-sale-pet-grooming-hero.webp',
    heroImageAlt: 'ร้านอาบน้ำตัดขนสัตว์เลี้ยงที่ลูกค้าค้นพบผ่าน Google Maps',
    ogImage: '/image/blog/increase-sale-pet-grooming/increase-sale-pet-grooming-hero.webp',
    category: 'Local SEO',
    excerpt:
      'คำค้นหากลุ่มอาบน้ำตัดขนสัตว์เลี้ยงมี competition ระดับ Low แทบทุกคำ แปลว่าติด 3-pack ง่ายกว่าธุรกิจอื่นมาก และลูกค้ากลุ่มนี้กลับมาซ้ำทุก 4–8 สัปดาห์ ซึ่งเป็นมูลค่าที่ธุรกิจส่วนใหญ่มองข้าม',
    readingTime: '12 min read',
    publishedDate: '2026-08-04',
    lastModifiedDate: '2026-08-04',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'เพิ่มยอดขายร้านอาบน้ำตัดขนสุนัข ด้วย Google Maps | Saralak Search',
    metaDescription:
      'เพิ่มยอดขายร้านอาบน้ำตัดขนสุนัขด้วย Google Maps — "อาบน้ำตัดขนสุนัข ใกล้ฉัน" 9,900 ครั้ง/เดือน competition Low ทั้งกลุ่ม เรียนรู้วิธีติด 3-pack และสร้างลูกค้าประจำที่กลับมาทุกเดือน',
    aiSummary: [
      'คำค้นหากลุ่มอาบน้ำตัดขนสัตว์เลี้ยงรวมกันประมาณ 15,540 ครั้ง/เดือน นำโดย อาบน้ำตัดขนสุนัข ใกล้ฉัน 9,900 ครั้ง',
      'เกือบทุกคำในกลุ่มนี้มี competition ระดับ Low ซึ่งหมายถึงต้นทุนการแข่งขันต่ำกว่าร้านอาหารหรือคลินิกอย่างมาก',
      'ลูกค้ากรูมมิ่งกลับมาซ้ำทุก 4–8 สัปดาห์ ทำให้ลูกค้าใหม่ 1 คนมีมูลค่าตลอดปีสูงกว่าธุรกิจ transactional ทั่วไป',
      'รูป before/after ราคาแบบช่วงตามขนาด และรีวิวที่พูดถึงความปลอดภัย คือ 3 สิ่งที่ปิดการตัดสินใจของเจ้าของสัตว์',
    ],
    faqs: petGroomingFaqs,
    bodyVariant: 'increase-sale-pet-grooming',
    cta: {
      headline: 'คู่แข่งในกลุ่มกรูมมิ่งยังน้อย — ช่วงนี้คือจังหวะที่ติดง่ายที่สุด',
      description:
        'ดูแนวทางเพิ่มการมองเห็นบน Google Search และ Google Maps สำหรับธุรกิจที่ต้องการลูกค้าจากพื้นที่และคำค้นที่มี Local Intent',
      buttonText: 'ดูบริการ Local SEO',
      href: '/services/local-seo',
    },
  },
  {
    title: 'เพิ่มยอดขาย Pet Shop ด้วย Google Maps',
    slug: 'increase-sale-pet-shop',
    heroImageDesktop: '/image/blog/increase-sale-pet-shop/increase-sale-pet-shop-hero.webp',
    heroImageAlt: 'Pet Shop ใกล้บ้านที่ลูกค้าค้นพบและมาซื้อสินค้าได้ทันทีผ่าน Google Maps',
    ogImage: '/image/blog/increase-sale-pet-shop/increase-sale-pet-shop-hero.webp',
    category: 'Local SEO',
    excerpt:
      'คนค้นหา "ร้านขายอาหารสัตว์ ใกล้ฉัน" 40,500 ครั้งต่อเดือน คนกลุ่มนี้ต้องการของวันนี้ ไม่ใช่รอส่ง 2 วัน นี่คือความได้เปรียบเดียวที่ร้านออนไลน์เลียนแบบไม่ได้ — ถ้าคุณอยู่บน Google Maps',
    readingTime: '12 min read',
    publishedDate: '2026-08-04',
    lastModifiedDate: '2026-08-04',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'เพิ่มยอดขาย pet shop ด้วย Google Maps | Saralak Search',
    metaDescription:
      'เพิ่มยอดขายร้านขายสัตว์เลี้ยงและอาหารสัตว์ด้วย Google Maps — "ร้านขายอาหารสัตว์ ใกล้ฉัน" 40,500 ครั้ง/เดือน เรียนรู้วิธีดึงลูกค้าที่ต้องการของวันนี้ แทนที่จะเสียให้ร้านออนไลน์',
    aiSummary: [
      'คำค้นหากลุ่มร้านสัตว์เลี้ยงและอาหารสัตว์รวมกันประมาณ 134,900 ครั้ง/เดือน นำโดย โรงพยาบาลสัตว์ ใกล้ฉัน 74,000 และ ร้านขายอาหารสัตว์ ใกล้ฉัน 40,500',
      'จุดแข็งเดียวที่ร้านหน้าร้านมีเหนือ e-commerce คือ "ได้ของวันนี้" ซึ่งตรงกับ intent ของคำค้นหาแบบใกล้ฉันพอดี',
      'ควรใส่แบรนด์และหมวดสินค้าที่คนค้นหาจริงลงใน GBP เพราะชื่อแบรนด์คือคำที่ลูกค้าพิมพ์ ไม่ใช่คำว่า "อุปกรณ์สัตว์เลี้ยง"',
      'ร้านที่มีบริการเสริมอย่างกรูมมิ่งหรือสัตวแพทย์ประจำ ควรใส่เป็นหมวดรองใน GBP เพื่อรับ traffic จากคำค้นหาอีกกลุ่มหนึ่ง',
    ],
    faqs: petShopFaqs,
    bodyVariant: 'increase-sale-pet-shop',
    cta: {
      headline: 'ลูกค้าที่ต้องการของวันนี้กำลังค้นหาร้านใกล้บ้านอยู่',
      description:
        'ดูแนวทางเพิ่มการมองเห็นบน Google Search และ Google Maps สำหรับธุรกิจที่ต้องการลูกค้าจากพื้นที่และคำค้นที่มี Local Intent',
      buttonText: 'ดูบริการ Local SEO',
      href: '/services/local-seo',
    },
  },
  {
    title: 'เพิ่มยอดขายโรงพยาบาลสัตว์และคลินิกสัตวแพทย์ ด้วย Google Maps',
    slug: 'increase-sale-pet-hospital',
    heroImageDesktop: '/image/blog/increase-sale-pet-hospital/increase-sale-pet-hospital-hero.webp',
    heroImageAlt: 'โรงพยาบาลสัตว์และคลินิกสัตวแพทย์ที่เจ้าของสัตว์ค้นพบผ่าน Google Maps',
    ogImage: '/image/blog/increase-sale-pet-hospital/increase-sale-pet-hospital-hero.webp',
    category: 'Local SEO',
    excerpt:
      'คำค้นหากลุ่มโรงพยาบาลสัตว์และคลินิกสัตวแพทย์แบบ "ใกล้ฉัน" รวมกันกว่า 130,000 ครั้งต่อเดือนในไทย ลูกค้ากลุ่มนี้ตัดสินใจเร็วเพราะเป็นเรื่องฉุกเฉิน แต่คลินิกส่วนใหญ่ยังไม่มีชั่วโมงทำการ บริการ หรือราคาที่ถูกต้องบน Google Maps',
    readingTime: '12 min read',
    publishedDate: '2026-08-06',
    lastModifiedDate: '2026-08-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'เพิ่มยอดขายโรงพยาบาลสัตว์ ด้วย Google Maps | Saralak Search',
    metaDescription:
      'เพิ่มยอดขายโรงพยาบาลสัตว์และคลินิกสัตวแพทย์ด้วย Google Maps — "โรงพยาบาลสัตว์ ใกล้ฉัน" มีคนค้นหา 74,000 ครั้ง/เดือน เรียนรู้วิธีเปลี่ยนคนค้นหาเป็น Call และ Direction ในเคสฉุกเฉิน',
    aiSummary: [
      'คำค้นหากลุ่มโรงพยาบาลสัตว์และคลินิกสัตวแพทย์แบบ "ใกล้ฉัน" ในไทยรวมกันประมาณ 132,800 ครั้ง/เดือน นำโดย โรงพยาบาลสัตว์ ใกล้ฉัน 74,000 และ คลินิกสัตว์ ใกล้ฉัน 33,100',
      'ลูกค้ากลุ่มนี้ต่างจากธุรกิจอื่นตรงที่ intent มักเร่งด่วนหรือเป็นเหตุฉุกเฉิน การตอบสนองไวและชั่วโมงทำการที่ถูกต้องมีผลต่อการตัดสินใจมากกว่าราคา',
      'สิ่งที่ต้องมีบน GBP: หมวดหมู่ที่ตรงกับบริการจริง (รวมถึง Emergency Veterinarian Service ถ้ามี) เบอร์โทรที่รับสายจริง ชั่วโมงทำการที่อัปเดตตลอด และรีวิวที่พูดถึงความน่าเชื่อถือ',
      'ควรแสดงใบอนุญาตประกอบวิชาชีพการสัตวแพทย์และสัญญาณความน่าเชื่อถืออื่นๆ ให้ชัดเจน เพราะทั้งเจ้าของสัตว์และ AI Search ให้น้ำหนักกับสิ่งเหล่านี้ในธุรกิจสายสุขภาพ',
    ],
    faqs: petHospitalFaqs,
    bodyVariant: 'increase-sale-pet-hospital',
    cta: {
      headline: 'เคสฉุกเฉินกำลังค้นหาคลินิกที่ใกล้และว่างที่สุดอยู่',
      description:
        'ดูแนวทางเพิ่มการมองเห็นบน Google Search และ Google Maps สำหรับธุรกิจที่ต้องการลูกค้าจากพื้นที่และคำค้นที่มี Local Intent',
      buttonText: 'ดูบริการ Local SEO',
      href: '/services/local-seo',
    },
  },
  {
    title: 'เพิ่มยอดขายโรงแรมสัตว์เลี้ยงและรับฝากเลี้ยง ด้วย Google Maps',
    slug: 'increase-sale-pet-hotel',
    heroImageDesktop: '/image/blog/increase-sale-pet-hotel/increase-sale-pet-hotel-hero.webp',
    heroImageAlt: 'โรงแรมสัตว์เลี้ยงที่เจ้าของสัตว์ค้นพบและจองผ่าน Google Maps',
    ogImage: '/image/blog/increase-sale-pet-hotel/increase-sale-pet-hotel-hero.webp',
    category: 'Local SEO',
    excerpt:
      'คำค้นหากลุ่ม "ฝากเลี้ยงหมา" และ "โรงแรมหมา" แบบใกล้ฉันรวมกันกว่า 25,000 ครั้งต่อเดือนในไทย และพุ่งสูงช่วงเทศกาลหยุดยาว แต่โรงแรมสัตว์เลี้ยงส่วนใหญ่ยังไม่มีรูปกรงจริง ราคา หรือความพร้อมให้บริการบน Google Maps',
    readingTime: '12 min read',
    publishedDate: '2026-08-06',
    lastModifiedDate: '2026-08-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'เพิ่มยอดขายโรงแรมสัตว์เลี้ยง (รับฝากเลี้ยง) ด้วย Google Maps | Saralak Search',
    metaDescription:
      'เพิ่มยอดขายโรงแรมหมาและรับฝากเลี้ยงสัตว์เลี้ยงด้วย Google Maps — "โรงแรมหมา ใกล้ฉัน" และ "ฝากเลี้ยงหมา ใกล้ฉัน" รวมกันกว่า 25,000 ครั้ง/เดือน เรียนรู้วิธีเปลี่ยนคนค้นหาเป็นการจองล่วงหน้า',
    aiSummary: [
      'คำค้นหากลุ่มรับฝากเลี้ยงและโรงแรมสัตว์เลี้ยงแบบ "ใกล้ฉัน" ในไทยรวมกันประมาณ 25,200 ครั้ง/เดือน นำโดย โรงแรมหมา ใกล้ฉัน 8,100 และ ฝากเลี้ยงหมา ใกล้ฉัน 6,600',
      'คำค้นหากลุ่มนี้พุ่งสูงเป็นพิเศษช่วงเทศกาลและวันหยุดยาว เช่น สงกรานต์ ปีใหม่ และช่วงปิดเทอม ซึ่งเป็นช่วงเวลาที่ต้องเตรียมโปรไฟล์ให้พร้อมล่วงหน้า',
      'เจ้าของสัตว์ตัดสินใจจากความน่าเชื่อถือมากกว่าราคา — รูปกรงหรือห้องพักจริง วิดีโอบรรยากาศ และรีวิวที่พูดถึงความปลอดภัยมีผลต่อการตัดสินใจมากที่สุด',
      'สิ่งที่ต้องมีบน GBP: หมวดหมู่ Pet Boarding Service ที่ถูกต้อง ราคาต่อคืนแยกตามขนาดสัตว์ รูปสถานที่จริง และความพร้อมให้บริการที่อัปเดตตลอด',
    ],
    faqs: petHotelFaqs,
    bodyVariant: 'increase-sale-pet-hotel',
    cta: {
      headline: 'ช่วงหยุดยาวลูกค้ากำลังหาที่ฝากสัตว์เลี้ยงที่ไว้ใจได้อยู่',
      description:
        'ดูแนวทางเพิ่มการมองเห็นบน Google Search และ Google Maps สำหรับธุรกิจที่ต้องการลูกค้าจากพื้นที่และคำค้นที่มี Local Intent',
      buttonText: 'ดูบริการ Local SEO',
      href: '/services/local-seo',
    },
  },
  {
    title: 'Organic Traffic คืออะไร? ทำไม Traffic จาก Google ไม่โต และควรเช็กอะไร',
    slug: 'seo-not-working',
    category: 'SEO',
    excerpt:
      'Organic Traffic คือผู้เข้าชมจากผลการค้นหาแบบไม่เสียค่าโฆษณา หาก Traffic ไม่โตหรือลดลง ควรไล่ตรวจจาก Search Console, Indexing, Query, Landing Page, Search Intent และ Technical SEO ก่อนแก้แบบสุ่ม',
    readingTime: '14 min read',
    publishedDate: '2026-06-17',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    heroImageDesktop: '/image/blog/seo-not-working/seo-not-working-banner-web.png',
    heroImageMobile: '/image/blog/seo-not-working/seo-not-working-banner-mweb.png',
    heroImageAlt: 'Organic Traffic คืออะไร และวิธีวิเคราะห์สาเหตุที่ Traffic จาก Google ไม่โต',
    ogImage: '/image/blog/seo-not-working/seo-not-working-banner-web.png',
    metaTitle: 'Organic Traffic คืออะไร? Traffic จาก Google ไม่โต เช็กอะไรบ้าง | Saralak Search',
    metaDescription:
      'Organic Traffic คือผู้เข้าชมจากผลค้นหาแบบไม่เสียโฆษณา ดูวิธีอ่าน Search Console และไล่เช็ก Indexing, Query, Landing Page, Intent, Technical SEO เมื่อ Traffic ไม่โตหรือลดลง',
    aiSummary: [
      'Organic Traffic คือผู้เข้าชมที่มาจากผลการค้นหาแบบไม่เสียค่าโฆษณา แต่การวิเคราะห์ไม่ควรดู Sessions หรือ Clicks ตัวเดียว ต้องดู Impressions, Queries, Landing Pages และ Business Outcome ร่วมกัน',
      'ถ้า Organic Traffic ไม่โต ให้เริ่มจาก Search Console แล้วแยกปัญหาเป็น 4 ชั้น: Discovery/Indexing → Visibility → Click → Conversion เพื่อไม่แก้ผิดจุด',
      'ไม่มีระยะเวลาตายตัวว่า SEO ต้องเห็นผลใน 3 หรือ 6 เดือน Google ระบุว่าผลจากการเปลี่ยนแปลงอาจใช้เวลาต่างกันตามเว็บไซต์และประเภทการแก้',
      'site:domain.com ใช้เช็กได้คร่าว ๆ แต่ URL Inspection และ Page indexing report ใน Search Console เหมาะกว่าสำหรับยืนยันสถานะของ URL สำคัญ',
      'Organic Traffic ที่เพิ่มขึ้นไม่เท่ากับผลลัพธ์ทางธุรกิจ ควรวัด Non-brand visibility, Engagement และ Conversion เช่น Form, LINE, Call, Lead หรือ Purchase เพิ่มด้วย',
    ],
    faqs: seoNotWorkingFaqs,
    bodyVariant: 'seo-not-working',
    cta: {
      headline: 'Organic Traffic ไม่โต แต่ยังไม่รู้ว่าปัญหาอยู่ที่จุดไหน?',
      description:
        'บริการ SEO ของ Saralak Search ช่วยแยกปัญหาจาก Search demand, Indexing, Technical SEO, Content และ Landing Page แล้วจัดลำดับสิ่งที่ควรแก้ก่อนตามข้อมูลจริง',
      buttonText: 'ดูบริการ SEO',
      href: '/services/seo',
    },
  },
  {
    title: 'AI ทำเว็บได้ไหม? วิธีสร้างเว็บไซต์ด้วย AI ให้พร้อม SEO ตั้งแต่วันแรก',
    slug: 'ai-website-seo',
    category: 'SEO',
    excerpt:
      'AI ทำเว็บได้เร็วขึ้น แต่เว็บที่เปิดใช้งานได้ยังไม่เท่ากับเว็บที่พร้อมติด Google บทความนี้สรุปวิธีใช้ AI สร้างเว็บไซต์ พร้อม SEO checklist, workflow ก่อน publish และวิธีวัดผลหลัง deploy',
    readingTime: '12 min read',
    publishedDate: '2026-06-15',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    heroImageDesktop: '/image/blog/ai-website/ai-website-banner-web.png',
    heroImageMobile: '/image/blog/ai-website/ai-website-banner-mweb.png',
    heroImageAlt: 'AI ทำเว็บได้ไหม วิธีสร้างเว็บไซต์ด้วย AI และตรวจ SEO ก่อนเปิดใช้งาน',
    ogImage: '/image/blog/ai-website/ai-website-banner-web.png',
    metaTitle: 'AI ทำเว็บได้ไหม? วิธีสร้างเว็บไซต์ด้วย AI ให้พร้อม SEO | Saralak Search',
    metaDescription:
      'AI ทำเว็บได้ แต่เว็บที่ publish ได้ยังไม่เท่ากับเว็บที่พร้อมติด Google ดู workflow สร้างเว็บด้วย AI, SEO checklist ก่อนเปิดจริง, ข้อจำกัด และวิธีวัดผลหลัง deploy',
    aiSummary: [
      'AI ทำเว็บได้ทั้งแบบ Website Builder และ Coding Assistant แต่ต้องแยก “สร้างหน้าได้” ออกจาก “Search-ready” เพราะ SEO ยังต้องตรวจ Crawl, Index, URL, Metadata, Canonical, Sitemap, Internal Link และ Search Intent',
      'Google Search ไม่ได้กำหนดว่าเว็บไซต์ต้องสร้างด้วยแพลตฟอร์มใด แต่หน้าเว็บต้องผ่าน Search Essentials และเนื้อหาที่ใช้ Generative AI ยังต้องมีคุณค่า ความถูกต้อง และไม่สร้างจำนวนมากเพื่อ manipulate ranking',
      'Structured Data มีหน้าที่อธิบายข้อมูลบนหน้าในรูปแบบที่ Google รองรับ ไม่ใช่การรับประกันอันดับ และควรตรงกับ visible content',
      'Workflow ที่ใช้กับเว็บสร้างด้วย AI ควรมี 6 Gate: Intent → Architecture → Build → Technical QA → Content QA → Measurement ก่อน scale หน้าเพิ่ม',
      'หลัง deploy ให้ดู Google Search Console และ GA4 แยกเป็น Indexing, Search Visibility, Engagement และ Business Outcome แทนการวัดจากจำนวนหน้าที่สร้างหรือ index เพียงอย่างเดียว',
    ],
    faqs: aiWebsiteSeoFaqs,
    bodyVariant: 'ai-website-seo',
    cta: {
      headline: 'เว็บสร้างด้วย AI เปิดใช้งานแล้ว แต่ยังไม่แน่ใจว่า Search-ready หรือยัง?',
      description:
        'บริการ SEO ของ Saralak Search ตรวจ Search Intent, Crawl/Index, Technical SEO, Content และ Internal Link เพื่อจัดลำดับว่าควรแก้อะไรก่อนหลัง deploy',
      buttonText: 'ดูบริการ SEO',
      href: '/services/seo',
    },
  },
  {
    title: 'llm.txt คืออะไร? จริง ๆ คือ llms.txt และควรใช้กับเว็บไซต์อย่างไร',
    slug: 'llms-txt-thailand',
    category: 'GEO',
    excerpt:
      'คำค้น llm.txt มักหมายถึง llms.txt ซึ่งเป็นข้อเสนอสำหรับไฟล์ Markdown ที่สรุปเว็บไซต์และลิงก์ไปยังเนื้อหาสำคัญสำหรับ agent หรือ LLM ที่รองรับ บทความนี้อธิบายรูปแบบไฟล์ วิธีใช้ ข้อจำกัด และข้อเท็จจริงล่าสุดจาก Google',
    readingTime: '14 min read',
    publishedDate: '2026-06-15',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    heroImageDesktop: '/image/blog/llms-txt-how-to/llms-txt-how-banner-web.png',
    heroImageMobile: '/image/blog/llms-txt-how-to/llms-txt-how-banner-mweb.png',
    heroImageAlt: 'llm.txt คืออะไร ความหมายของ llms.txt รูปแบบไฟล์ และวิธีใช้กับเว็บไซต์',
    ogImage: '/image/blog/llms-txt-how-to/llms-txt-how-banner-web.png',
    metaTitle: 'llm.txt คืออะไร? llms.txt ใช้ทำอะไร และจำเป็นไหม | Saralak Search',
    metaDescription:
      'llm.txt คือคำค้นที่มักหมายถึง llms.txt ไฟล์ Markdown สำหรับ agent/LLM ที่รองรับ ดูรูปแบบไฟล์ วิธีทำ ความต่างจาก robots.txt ข้อจำกัด และสถานะกับ Google Search ปี 2026',
    aiSummary: [
      'คำค้น “llm.txt” มักหมายถึง “llms.txt” ซึ่งเป็นข้อเสนอให้เว็บไซต์เผยแพร่ไฟล์ Markdown ที่สรุปข้อมูลพื้นฐานและลิงก์ไปยังทรัพยากรสำคัญสำหรับ agent หรือ LLM ที่รองรับ',
      'llms.txt ไม่ใช่มาตรฐานของ Google Search และ Google ระบุชัดว่าไฟล์นี้ไม่จำเป็น รวมถึงไม่มีผลบวกหรือลบต่อ Visibility หรือ Ranking บน Google Search',
      'llms.txt ต่างจาก robots.txt: robots.txt ใช้ควบคุมการเข้าถึงของ crawler ส่วน llms.txt ใช้เป็น overview/guide สำหรับระบบที่เลือกอ่านไฟล์นี้',
      'ไฟล์ตาม proposal ใช้ Markdown โดยมี H1 เป็นส่วนที่จำเป็น และอาจมี blockquote, รายละเอียด และ H2 ที่รวมรายการลิงก์พร้อมคำอธิบาย',
      'ถ้าจะทำ llms.txt ให้มองเป็น Supporting Infrastructure สำหรับ agent-friendly content ไม่ใช่ SEO shortcut หรือวิธีรับประกัน AI citation',
    ],
    faqs: llmsTxtFaqs,
    bodyVariant: 'llms-txt',
    cta: {
      headline: 'ไม่แน่ใจว่าเว็บไซต์ควรให้ Priority กับ llms.txt หรือ GEO จุดไหนก่อน?',
      description:
        'ดูแนวทางทำ GEO และ AI Search โดยจัดลำดับ Search Foundation, Content, Entity, Evidence และ Measurement ก่อนเลือก Technical Tactic ที่เหมาะกับเว็บไซต์',
      buttonText: 'ดูบริการ GEO & AI Search',
      href: '/services/geo',
    },
  },
  {
    title: 'GEO Checklist 40 ข้อ: ทำ GEO ต้องเช็กอะไรบ้างก่อนวัดผล',
    slug: 'geo-checklist-thailand',
    category: 'GEO',
    excerpt:
      'GEO Checklist 40 ข้อสำหรับคนที่กำลังทำ GEO ใช้ตรวจ Search Foundation, Entity, Content, Technical, Evidence และ Measurement พร้อมลำดับว่าควรแก้อะไรก่อน โดยแยก Official Guidance ออกจากวิธีทำงานของ Saralak Search ชัดเจน',
    readingTime: '17 min read',
    publishedDate: '2026-06-15',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'ทำ GEO ต้องเช็กอะไรบ้าง? GEO Checklist 40 ข้อ | Saralak Search',
    metaDescription:
      'ทำ GEO แบบไม่ไล่ตามเทคนิคสุ่ม ๆ ด้วย GEO Checklist 40 ข้อ ครอบคลุม Search Foundation, Entity, Content, Technical, Evidence และ Measurement พร้อมลำดับแก้ก่อนหลังและข้อจำกัดที่ควรรู้',
    heroImageDesktop: '/image/blog/chatgpt-mention/chatgpt-mention-banner-web.png',
    heroImageMobile: '/image/blog/chatgpt-mention/chatgpt-mention-banner-mweb.png',
    heroImageAlt: 'GEO Checklist 40 ข้อสำหรับตรวจเว็บไซต์ไทยด้าน Search และ AI Visibility',
    ogImage: '/image/blog/chatgpt-mention/chatgpt-mention-banner-web.png',
    aiSummary: [
      'ถ้ากำลังทำ GEO ให้เริ่มจาก Search Foundation ก่อนเทคนิคเฉพาะ AI: หน้าเป้าหมายต้อง Index ได้ Canonical ถูก Content Render ครบ และ Internal Link พา Crawler ไปถึงได้',
      'Google ระบุว่า SEO best practices เดิมยังเป็นฐานของ AI Overviews และ AI Mode ไม่มี Special AI Schema ที่ต้องเพิ่ม และ Google Search ไม่ใช้ llms.txt',
      'สำหรับ Google Search ต้องตรวจ Search generative AI control ใน Search Console ด้วย เพราะเว็บไซต์ที่ Exclude จะไม่มีสิทธิ์แสดงลิงก์หรือ Content ใน AI Overviews และ AI Mode',
      'GEO Checklist หน้านี้มี 40 ข้อ แบ่งเป็น Entity, Content, Technical, Mention/Evidence และ Measurement และเป็น Methodology ของ Saralak Search ไม่ใช่ Ranking Factor ของ Google',
      'การวัดผลต้องแยก Search Visibility, AI Visibility, Referral/Engagement และ Business Outcome; การเห็น Citation เพิ่มขึ้นไม่ได้พิสูจน์ว่า Checklist ข้อใดข้อหนึ่งเป็นสาเหตุ',
    ],
    faqs: geoChecklistFaqs,
    includeFaqSchema: false,
    bodyVariant: 'geo-checklist',
    cta: {
      headline: 'GEO Checklist ผ่านหลายข้อแล้ว แต่ยังไม่รู้ว่าควรแก้อะไรก่อน?',
      description:
        'ดูแนวทางปรับเว็บไซต์และ Content สำหรับ AI Search, AI Overview และการถูกอ้างอิง โดยวางพื้นฐาน SEO, Entity และโครงสร้างคำตอบให้ทำงานร่วมกัน',
      buttonText: 'ดูบริการ GEO & AI Search',
      href: '/services/geo',
    },
  },
  {
    title: 'AEO คืออะไร? Answer Engine Optimization ต่างจาก SEO และ GEO อย่างไร',
    slug: 'what-is-aeo',
    category: 'AEO',
    excerpt:
      'AEO หรือ Answer Engine Optimization คือแนวทางจัดคำตอบและโครงสร้างหน้าเว็บให้ตรงกับคำถามของผู้ค้น อ่านแยกเป็นส่วนได้ และยังทำงานร่วมกับ SEO ได้ดี บทความนี้อธิบายความต่างจาก SEO และ GEO พร้อมตัวอย่าง วิธีวัดผล และข้อจำกัดที่ควรรู้',
    readingTime: '17 min read',
    publishedDate: '2026-06-01',
    lastModifiedDate: '2026-10-05',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'AEO คืออะไร? ต่างจาก SEO และ GEO อย่างไร | Saralak Search',
    metaDescription:
      'AEO คือ Answer Engine Optimization แนวทางจัดคำตอบบนเว็บให้ชัดและใช้งานได้ เข้าใจความต่างจาก SEO และ GEO พร้อม Google guidance ปี 2026 เคสจริง วิธีวัดผล และข้อจำกัด',
    heroImageDesktop: '/image/blog/what-is-aeo/what-is-aeo-banner-web.webp',
    heroImageMobile: '/image/blog/what-is-aeo/what-is-aeo-banner-mweb.webp',
    heroImageAlt: 'AEO คืออะไร Answer Engine Optimization สำหรับ Search และ AI',
    ogImage: '/image/blog/what-is-aeo/what-is-aeo-banner-web.webp',
    aiSummary: [
      'AEO หรือ Answer Engine Optimization คือแนวทางจัดคำตอบบนหน้าเว็บให้ตรง ชัด และมีบริบทเพียงพอสำหรับผู้ใช้ รวมถึงระบบ Search หรือ AI ที่อาจนำข้อมูลไปแสดงเป็นคำตอบ',
      'ใน Search ภาษาไทยคำว่า AEO มีความกำกวม เพราะยังหมายถึง Authorized Economic Operator ได้ด้วย จึงควรระบุ Answer Engine Optimization ให้ชัดใน Title, H1 และ Opening ของหน้า',
      'Google ระบุในคู่มือ Generative AI Search ว่า AEO และ GEO เป็นคำที่ใช้เรียกงานด้าน AI Search แต่จากมุมมองของ Google การ Optimize สำหรับ Generative AI Search ยังถือเป็น SEO',
      'AEO ควรต่อยอดจาก SEO เพราะหน้าต้อง Crawl และ Index ได้ มี Search Intent ชัด และไม่มี Schema หรือ AI Markup พิเศษที่รับประกัน AI Overview หรือ Citation',
      'การวัดผลควรแยก Search Visibility, Answer/AI Visibility, Engagement และ Business Outcome เพราะการได้ Visibility ไม่เท่ากับได้ Click หรือ Conversion',
    ],
    faqs: whatIsAeoFaqs,
    includeFaqSchema: false,
    bodyVariant: 'what-is-aeo',
    cta: {
      headline: 'ยังไม่ชัดว่า Content ควรแก้ AEO จุดไหนก่อน?',
      description:
        'ดูแนวทางปรับเว็บไซต์และ Content สำหรับ AI Search, AI Overview และการถูกอ้างอิง โดยวางพื้นฐาน SEO, Entity และโครงสร้างคำตอบให้ทำงานร่วมกัน',
      buttonText: 'ดูบริการ GEO & AI Search',
      href: '/services/geo',
    },
  },
  {
    title: 'SEO คืออะไร? Search Engine Optimization ทำงานอย่างไร และเริ่มจากอะไร',
    slug: 'what-is-seo',
    category: 'SEO',
    excerpt:
      'SEO คือการปรับเว็บไซต์และเนื้อหาเพื่อช่วยให้ Search Engine เข้าใจหน้าเว็บ และช่วยให้คนค้นพบเว็บไซต์ผ่าน Organic Search พร้อมพื้นฐาน Crawling, Indexing, การวัดผล และข้อจำกัดที่ควรรู้',
    readingTime: '18 min read',
    publishedDate: '2026-06-01',
    lastModifiedDate: '2026-10-05',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'SEO คืออะไร? Search Engine Optimization ฉบับเข้าใจง่าย | Saralak Search',
    metaDescription:
      'SEO คืออะไร เข้าใจ Search Engine Optimization ตั้งแต่ Crawling, Indexing, Search Intent, Content และ Technical SEO ไปจนถึงการวัดผลด้วย Search Console และผลลัพธ์ทางธุรกิจ',
    heroImageDesktop: '/image/blog/what-is-seo/what-is-seo-banner-web.webp',
    heroImageMobile: '/image/blog/what-is-seo/what-is-seo-banner-mweb.webp',
    heroImageAlt: 'SEO คืออะไร การทำ SEO ตั้งแต่ Crawling Indexing ไปจนถึงการวัดผล',
    ogImage: '/image/blog/what-is-seo/what-is-seo-banner-web.webp',
    aiSummary: [
      'SEO ย่อมาจาก Search Engine Optimization คือการปรับเว็บไซต์และเนื้อหาเพื่อช่วยให้ Search Engine เข้าใจหน้าเว็บ และช่วยให้คนค้นพบเว็บไซต์ผ่าน Organic Search',
      'Google อธิบาย Search เป็น 3 ขั้นหลัก: Crawling, Indexing และ Serving Search Results โดยการถูก Index ไม่ได้หมายความว่าจะติดอันดับในทุกคำค้น',
      'จาก SERP ไทยของคำ “seo คือ” ที่ตรวจวันที่ 5 ตุลาคม 2026 คำถามที่ Google แสดงต่อเนื่องครอบคลุม SEO vs SEM, ทำ SEO เองได้ไหม, SEO ย่อมาจากอะไร และตัวอย่างการทำ SEO ซึ่งสะท้อนว่าหน้า Definition ควรตอบทั้งความหมายและบริบทการใช้งาน',
      'Google ระบุว่า SEO best practices เดิมยังเป็นพื้นฐานของ AI Overviews และ AI Mode และการ Optimize สำหรับ Generative AI Search ยังอยู่ในกรอบ SEO',
      'การวัด SEO ควรดู Search Visibility, Website Engagement, Generative AI Visibility เมื่อเกี่ยวข้อง และ Business Outcome ไม่ใช่อันดับคำเดียว',
    ],
    faqs: whatIsSeoFaqs,
    includeFaqSchema: false,
    bodyVariant: 'what-is-seo',
    cta: {
      headline: 'ยังไม่ชัดว่าเว็บไซต์ควรแก้ SEO จุดไหนก่อน?',
      description:
        'ดูบริการ SEO สำหรับวิเคราะห์ Search demand, Technical SEO, Content และหน้าที่มีผลต่อธุรกิจ แล้วจัดลำดับงานตามโอกาสที่วัดผลได้',
      buttonText: 'ดูบริการ SEO',
      href: '/services/seo',
    },
  },
  {
    title: 'GEO คืออะไร? Generative Engine Optimization ต่างจาก SEO อย่างไร',
    slug: 'what-is-geo',
    category: 'GEO',
    excerpt:
      'GEO คือแนวทางเพิ่มความพร้อมของเว็บไซต์ เนื้อหา และข้อมูลแบรนด์สำหรับ Generative AI และ AI Search โดยต่อยอดจาก SEO พร้อม Framework, เคสจริง, วิธีวัดผล และข้อจำกัดที่ควรรู้',
    readingTime: '18 min read',
    publishedDate: '2026-05-30',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'GEO คืออะไร? Generative Engine Optimization ต่างจาก SEO | Saralak Search',
    metaDescription:
      'GEO คือ Generative Engine Optimization แนวทางเพิ่มความพร้อมของเว็บไซต์และแบรนด์สำหรับ AI Search เข้าใจความต่างจาก SEO พร้อมข้อมูลจาก Google เคสจริง วิธีวัดผล และข้อจำกัดที่ควรรู้',
    heroImageDesktop: '/image/blog/what-is-geo/what-is-geo-banner-web.webp',
    heroImageMobile: '/image/blog/what-is-geo/what-is-geo-banner-mweb.webp',
    heroImageAlt: 'GEO คืออะไร Generative Engine Optimization สำหรับ Google และ AI Search',
    ogImage: '/image/blog/what-is-geo/what-is-geo-banner-web.webp',
    aiSummary: [
      'GEO หรือ Generative Engine Optimization คือแนวทางเพิ่มความพร้อมของเว็บไซต์ เนื้อหา และข้อมูลแบรนด์ เพื่อเพิ่มโอกาสให้ข้อมูลถูกค้นพบ กล่าวถึง หรืออ้างอิงใน Generative AI และ AI Search',
      'GEO ไม่ได้มาแทน SEO แต่ต่อยอดจาก Search Foundation เดิม โดยเพิ่มมุม Entity, Evidence, Brand Mention, Citation Context และ AI Search Visibility',
      'ถ้าเว็บไซต์ยัง Crawl/Index ไม่สมบูรณ์, Canonical ผิด หรือหน้า Service ยังไม่ตอบ Search Intent ควรแก้ SEO Foundation ก่อนทำ GEO เพิ่ม',
      'Saralak Search ใช้ GEO Content Framework: Answer, Evidence, Entity, Context และ Retrieval เพื่อทำให้แต่ละ Section ชัด มีหลักฐาน และอ่านแยกได้ โดยกรอบนี้เป็น Methodology ไม่ใช่ Ranking Factor',
      'การวัด GEO ควรดู Search Visibility, AI Visibility, Brand Mention, Citation, Non-brand Query Coverage และ Conversion เป็นช่วงเวลา ไม่สรุปจาก Prompt เดียว',
    ],
    faqs: geoIntroFaqs,
    includeFaqSchema: false,
    bodyVariant: 'geo-intro',
    cta: {
      headline: 'ยังไม่แน่ใจว่าเว็บไซต์ควรแก้ SEO, Content หรือ GEO ก่อน?',
      description:
        'ดูแนวทางปรับเว็บไซต์และ Content สำหรับ AI Search, AI Overview และการถูกอ้างอิง โดยวางพื้นฐาน SEO, Entity และโครงสร้างคำตอบให้ทำงานร่วมกัน',
      buttonText: 'ดูบริการ GEO & AI Search',
      href: '/services/geo',
    },
  },
  {
    title: 'SEO, AEO และ GEO คืออะไร? ต่างกันอย่างไร และควรเริ่มจากอะไร',
    slug: 'seo-geo-aeo',
    category: 'SEO',
    excerpt:
      'SEO, AEO และ GEO ต่างกันที่จุดโฟกัส แต่ทำงานต่อกัน SEO ช่วยให้เว็บไซต์ถูกค้นพบ AEO ช่วยให้คำตอบชัดขึ้น และ GEO ช่วยให้แบรนด์กับข้อมูลของเว็บไซต์พร้อมสำหรับ AI Search บทความนี้สรุปความต่างและวิธีเลือกว่าควรเริ่มจากอะไรก่อน',
    readingTime: '16 min read',
    publishedDate: '2026-05-31',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'SEO vs AEO vs GEO ต่างกันอย่างไร? | Saralak Search',
    metaDescription:
      'SEO, AEO และ GEO ต่างกันอย่างไร เข้าใจหน้าที่ของแต่ละแนวทาง วิธีเลือกว่าจะเริ่มจากอะไรก่อน พร้อมตารางเปรียบเทียบ เคสจริง การวัดผล และข้อจำกัด',
    heroImageDesktop: '/image/blog/seo-aeo-geo/seo-aeo-geo-is-difference-banner-web.webp',
    heroImageMobile: '/image/blog/seo-aeo-geo/seo-aeo-geo-is-difference-banner-mweb.webp',
    heroImageAlt: 'SEO GEO AEO คืออะไร ต่างกันอย่างไร และธุรกิจควรเริ่มจากอะไร',
    ogImage: '/image/blog/seo-aeo-geo/seo-aeo-geo-is-difference-banner-web.webp',
    aiSummary: [
      'SEO, AEO และ GEO ทำหน้าที่ต่างกันแต่เชื่อมกันอยู่ SEO ช่วยให้เว็บไซต์ถูกค้นพบและมีโอกาสติดอันดับ AEO ช่วยให้คำตอบบนหน้าเว็บชัดและอ่านง่าย ส่วน GEO ช่วยให้ข้อมูลของแบรนด์พร้อมสำหรับการค้นหาผ่าน AI',
      'ถ้า Google ยังเข้าถึงหน้าได้ไม่ดี หน้าไม่ถูกจัดเก็บในผลค้นหา หรือหน้าบริการยังอธิบายไม่ชัด ควรแก้พื้นฐาน SEO ก่อน แล้วค่อยต่อยอด AEO และ GEO',
      'AEO เน้นจัดคำตอบให้ตรงและเข้าใจง่าย เช่น ตอบประเด็นสำคัญตั้งแต่ต้น ใช้หัวข้อ ตาราง รายการ และ FAQ เท่าที่จำเป็น',
      'GEO เหมาะกับเว็บไซต์ที่มีข้อมูลและเนื้อหาพื้นฐานพร้อมแล้ว จากนั้นค่อยเพิ่มหลักฐาน เคสจริง ข้อมูลแบรนด์ และติดตามว่าแบรนด์ปรากฏใน AI Search อย่างไร',
      'Google ระบุว่าพื้นฐาน SEO เดิมยังสำคัญกับการค้นหาที่ใช้ AI และไม่มี Schema หรือไฟล์พิเศษใดที่รับประกันว่าเว็บไซต์จะถูกนำไปแสดงใน AI features',
    ],
    faqs: seoGeoAeoFaqs,
    bodyVariant: 'seo-geo-aeo',
    cta: {
      headline: 'ต้องการวางกลยุทธ์ SEO, AEO และ GEO สำหรับธุรกิจ?',
      description:
        'ดูบริการ SEO สำหรับวิเคราะห์ Search demand, Technical SEO, Content และหน้าที่มีผลต่อธุรกิจ แล้วจัดลำดับงานตามโอกาสที่วัดผลได้',
      buttonText: 'ดูบริการ SEO',
      href: '/services/seo',
    },
  },
  {
    title: 'ทำ GEO ที่ไหนดี? วิธีเลือก GEO Agency ที่วัดผลได้และเหมาะกับธุรกิจ',
    slug: 'geo-agency-thailand',
    category: 'GEO',
    excerpt:
      'ถ้ากำลังเลือกว่าจะทำ GEO ที่ไหนดี ควรดูว่าทีมนั้นตรวจเว็บไซต์อย่างไร วางแผนแก้อะไรบ้าง วัดผลได้ชัดแค่ไหน และเชื่อมผลจาก AI Search ไปถึง Lead หรือยอดขายได้หรือไม่ บทความนี้สรุปวิธีเลือก GEO Agency สิ่งที่ควรถามก่อนจ้าง และสัญญาณที่ควรระวัง',
    readingTime: '14 min read',
    publishedDate: '2026-05-31',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'ทำ GEO ที่ไหนดี? วิธีเลือก GEO Agency ที่วัดผลได้ | Saralak Search',
    metaDescription:
      'ทำ GEO ที่ไหนดี? เช็ก 8 เกณฑ์เลือก GEO Agency, วิธีเทียบ Proposal, Red Flags, KPI, ข้อจำกัด และเคสจริงของ Saralak Search ก่อนตัดสินใจจ้าง',
    heroImageDesktop: '/image/blog/geo-agency-thailand/geo-agency-thailand-banner-web.webp',
    heroImageMobile: '/image/blog/geo-agency-thailand/geo-agency-thailand-banner-mweb.webp',
    heroImageAlt: 'ทำ GEO ที่ไหนดี วิธีเลือก GEO Agency ที่วัดผลได้และเหมาะกับธุรกิจ',
    ogImage: '/image/blog/geo-agency-thailand/geo-agency-thailand-banner-web.webp',
    aiSummary: [
      'ถ้ากำลังตัดสินใจว่าทำ GEO ที่ไหนดี ให้เลือกทีมที่อธิบายได้ชัดว่าก่อนเริ่มเว็บไซต์อยู่ตรงไหน จะลงมือแก้อะไร วัดผลด้วยอะไร และผลลัพธ์เชื่อมกับธุรกิจอย่างไร',
      'Google ระบุว่าพื้นฐาน SEO เดิมยังสำคัญต่อ AI Overviews และ AI Mode และไม่มี Schema หรือเทคนิคพิเศษที่รับประกันการปรากฏใน AI features',
      'ก่อนขอ Proposal ควรใช้ Brief เดียวกันกับทุกทีม เพื่อเทียบได้ว่าใครตรวจ Search Foundation, Content, ข้อมูลแบรนด์ และการวัดผลได้ครบกว่ากัน',
      'การวัด GEO ควรดูทั้ง Search Visibility, AI Mention/Citation, GA4 Referral/Engagement และ Conversion เช่น Lead, LINE, Call หรือ Purchase',
      'Red Flag สำคัญคือการรับประกัน Citation, ขาย Schema/FAQ เป็นทางลัด หรือวัดผลจาก Screenshot หรือ Prompt เดียวโดยไม่มีข้อมูลก่อนเริ่มให้เทียบ',
    ],
    faqs: geoAgencyFaqs,
    includeFaqSchema: false,
    bodyVariant: 'geo-agency',
    cta: {
      headline: 'ยังไม่ชัดว่าควรจ้าง GEO Agency หรือแก้ SEO ก่อน?',
      description:
        'ดูแนวทางปรับเว็บไซต์และ Content สำหรับ AI Search, AI Overview และการถูกอ้างอิง โดยวางพื้นฐาน SEO, Entity และโครงสร้างคำตอบให้ทำงานร่วมกัน',
      buttonText: 'ดูบริการ GEO & AI Search',
      href: '/services/geo',
    },
  },
  {
    title: 'วิธีทำ GEO Optimization: 8 ขั้นตอนสำหรับ Google และ AI Search',
    slug: 'how-to-do-geo',
    category: 'GEO',
    excerpt:
      'วิธีทำ GEO ควรเริ่มจากตรวจพื้นฐานเว็บไซต์และข้อมูลก่อน แล้วค่อยปรับเนื้อหา Internal Link ข้อมูลแบรนด์ หลักฐาน และการวัดผล คู่มือนี้เรียง 8 ขั้นตอนลงมือทำ พร้อมเคสจริงและข้อจำกัดที่ควรรู้',
    readingTime: '16 min read',
    publishedDate: '2026-06-01',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'วิธีทำ GEO Optimization คืออะไร? 8 ขั้นตอนลงมือทำ | Saralak Search',
    metaDescription:
      'วิธีทำ GEO แบบ Step by Step 8 ขั้นตอน ตั้งแต่ตรวจ Crawl/Index วางหน้าหลัก ปรับ Content และ Internal Link ไปจนถึงการวัดผล พร้อมเคสจริงและข้อมูลจาก Google/OpenAI',
    heroImageDesktop: '/image/blog/how-to-do-geo/how-to-do-geo-banner-web.webp',
    heroImageMobile: '/image/blog/how-to-do-geo/how-to-do-geo-banner-mweb.webp',
    heroImageAlt: 'วิธีทำ GEO แบบ Step by Step สำหรับ Google AI Search และ ChatGPT',
    ogImage: '/image/blog/how-to-do-geo/how-to-do-geo-banner-web.webp',
    aiSummary: [
      'วิธีทำ GEO ควรเริ่มจากตรวจพื้นฐานเว็บไซต์และเก็บข้อมูลก่อน แล้วค่อยปรับเนื้อหา Internal Link ข้อมูลแบรนด์ หลักฐาน และการวัดผล',
      'ถ้า Google ยังเข้าถึงหน้าได้ไม่ดี หน้าไม่ถูกจัดเก็บในผลค้นหา หรือหน้าสำคัญยังตอบคำค้นไม่ชัด ควรแก้พื้นฐาน SEO ก่อน แล้วค่อยต่อยอด GEO',
      'เนื้อหาที่พร้อมสำหรับ GEO ควรตอบคำถามตรง มีข้อมูลจริงหรือหลักฐานรองรับ และเชื่อมไปยังหน้าที่เกี่ยวข้องโดยไม่ยัดขาย',
      'Google ระบุว่าพื้นฐาน SEO เดิมยังสำคัญต่อ AI Overviews และ AI Mode ส่วน OpenAI แนะนำให้เว็บไซต์ที่ต้องการมีสิทธิ์ปรากฏใน ChatGPT Search อนุญาต OAI-SearchBot',
      'การวัดผลควรดูทั้ง Search Visibility การปรากฏใน AI Search Referral/Engagement และ Conversion เช่น Lead, LINE, Call หรือ Purchase',
    ],
    faqs: howToDoGeoFaqs,
    includeFaqSchema: false,
    bodyVariant: 'how-to-do-geo',
    cta: {
      headline: 'ไม่ชัดว่าเว็บไซต์ควรแก้ GEO จุดไหนก่อน?',
      description:
        'ดูแนวทางปรับเว็บไซต์และ Content สำหรับ AI Search, AI Overview และการถูกอ้างอิง โดยวางพื้นฐาน SEO, Entity และโครงสร้างคำตอบให้ทำงานร่วมกัน',
      buttonText: 'ดูบริการ GEO & AI Search',
      href: '/services/geo',
    },
  },
  {
    title: 'เพิ่ม Traffic เว็บอย่างไร? วิธีเพิ่มคนเข้าเว็บไซต์ โดยเน้น SEO แบบเป็นระบบ',
    slug: 'increase-seo-traffic',
    heroImageDesktop: '/image/blog/increase-seo-traffic/increase-seo-traffic-hero.webp',
    heroImageAlt: 'วิธีเพิ่ม Traffic เว็บไซต์จากหลายช่องทาง โดยเน้นการเติบโตจาก SEO',
    ogImage: '/image/blog/increase-seo-traffic/increase-seo-traffic-hero.webp',
    category: 'SEO',
    excerpt:
      'เพิ่ม Traffic เว็บได้หลายทาง ทั้ง SEO, Ads, Social และ Referral แต่ถ้าต้องการ Traffic ที่ต่อเนื่องโดยไม่จ่ายต่อคลิกทุกครั้ง SEO คือแกนหลักที่ควรวางเป็นระบบตั้งแต่ Search Demand, Technical SEO, Content, Internal Link ไปจนถึง Conversion',
    readingTime: '18 min read',
    publishedDate: '2026-07-20',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'เพิ่ม Traffic เว็บอย่างไร? 9 วิธีเพิ่มคนเข้าเว็บไซต์ เน้น SEO | Saralak Search',
    metaDescription:
      'วิธีเพิ่ม Traffic เว็บไซต์จาก SEO, Ads, Social และ Referral พร้อมแผน SEO แบบลงลึก ตั้งแต่ Search Demand, Technical SEO, Content, Internal Link ไปจนถึงการวัดผลด้วย Search Console และ GA4',
    aiSummary: [
      'การเพิ่ม Traffic มีหลายช่องทาง ได้แก่ SEO, Paid Ads, Social, Referral, Direct/Brand และ AI/Search แต่แต่ละช่องทางต่างกันเรื่องความเร็ว ต้นทุน และความต่อเนื่อง',
      'ถ้าต้องการ Traffic ที่ไม่ต้องจ่ายต่อคลิกทุกครั้ง SEO ควรเป็นแกนหลัก โดยเริ่มจาก Search Demand, Owner URL, Crawl/Index และ Search Intent ก่อนสร้าง Content เพิ่ม',
      'การเพิ่มบทความอย่างเดียวไม่รับประกัน Traffic หากหน้าไม่ถูก Index, Keyword ไม่มี Demand, Intent ผิด หรือ Internal Link กระจายไปหลาย owner page',
      'Saralak Search ใช้กรอบ Demand → Index → Relevance → Authority → Click → Conversion เพื่อหาว่าควรเพิ่ม Traffic จากจุดไหนก่อน',
      'วัดผลด้วย Search Console สำหรับ Visibility/Clicks และ GA4 สำหรับ Sessions/Engagement/Conversion ไม่ใช้ Traffic เป็น KPI เดียว',
    ],
    faqs: increaseSeoTrafficFaqs,
    bodyVariant: 'increase-seo-traffic',
    cta: {
      headline: 'อยากเพิ่ม Traffic แต่ยังไม่รู้ว่าควรเริ่มจาก SEO จุดไหน?',
      description:
        'บริการ SEO ของ Saralak Search ช่วยวิเคราะห์ Search Demand, Technical SEO, Content, Internal Link และ Landing Page แล้วจัดลำดับงานที่ควรทำก่อนตามข้อมูลจริง',
      buttonText: 'ดูบริการ SEO',
      href: '/services/seo',
    },
  },
  {
    title: 'เช็ค Traffic Website ฟรี: ดูคนเข้าเว็บจาก Google, GA4 และคู่แข่งอย่างไร',
    slug: 'check-website-traffic-free',
    heroImageDesktop: '/image/blog/check-website-traffic-free/check-website-traffic-free-hero.webp',
    heroImageAlt: 'วิธีเช็ค Traffic Website ฟรีด้วย Google Search Console และ GA4',
    ogImage: '/image/blog/check-website-traffic-free/check-website-traffic-free-hero.webp',
    category: 'SEO',
    excerpt:
      'เช็ค Traffic Website ฟรีได้ด้วย Google Search Console และ GA4 สำหรับเว็บตัวเอง ส่วนเว็บคู่แข่งดูได้ในระดับประมาณการ บทความนี้สรุปว่าแต่ละเครื่องมือวัดอะไร ตัวเลขต่างกันเพราะอะไร และควรอ่านข้อมูลแบบไหนก่อนตัดสินใจทำ SEO ต่อ',
    readingTime: '13 min read',
    publishedDate: '2026-07-27',
    lastModifiedDate: '2026-10-06',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'เช็ค Traffic Website ฟรี ใช้อะไรดู? Search Console + GA4 | Saralak Search',
    metaDescription:
      'วิธีเช็ค Traffic Website ฟรีสำหรับเว็บตัวเองด้วย Search Console และ GA4 พร้อมวิธีดู Traffic คู่แข่งแบบประมาณการ แยก Brand/Non-brand และอ่านตัวเลขก่อนทำ SEO ต่อ',
    aiSummary: [
      'เช็ค Traffic Website ฟรีสำหรับเว็บไซต์ตัวเองควรใช้ Google Search Console และ GA4 ร่วมกัน เพราะ Search Console วัดการมองเห็นและการคลิกจาก Google Search ส่วน GA4 วัด Sessions, Engagement และ Conversion หลังเข้าเว็บไซต์',
      'เว็บไซต์คู่แข่งไม่มีทางดูข้อมูล Analytics ภายในได้จากเครื่องมือฟรีทั่วไป ตัวเลขจากเครื่องมือ SEO ภายนอกจึงควรถูกใช้เป็นค่าประมาณการและแนวโน้ม ไม่ใช่ Click หรือ Session จริง',
      'Search Console สามารถแยกข้อมูลตาม Queries, Pages, Countries, Devices และ Search appearance และรองรับ Branded / Non-branded query filter ใน property ที่มีสิทธิ์ใช้',
      'ตัวเลข Search Console กับ GA4 ไม่จำเป็นต้องตรงกัน เพราะวัดคนละช่วงของ user journey และมีวิธีนับ/ประมวลผลต่างกัน',
      'หลังรู้ Traffic แล้วควรดูต่อว่า Visibility โตจากหน้าไหน คำค้นแบบ Brand หรือ Non-brand และ Traffic นั้นสร้าง Engagement, Lead, LINE, Call หรือ Purchase หรือไม่',
    ],
    faqs: checkTrafficFreeFaqs,
    bodyVariant: 'check-website-traffic-free',
    cta: {
      headline: 'เช็ค Traffic แล้ว แต่ยังไม่รู้ว่าควรแก้อะไรก่อน?',
      description:
        'บริการ SEO ของ Saralak Search ช่วยอ่าน Search Visibility, Query, Landing Page, Technical SEO และ Conversion path เพื่อจัดลำดับสิ่งที่ควรแก้จากข้อมูลจริง',
      buttonText: 'ดูบริการ SEO',
      href: '/services/seo',
    },
  },
  {
    title: 'ทำ SEO ธุรกิจขายเวย์โปรตีนและโปรตีนจากพืช เจาะคีย์เวิร์ดหางยาวที่แข่งขันได้จริง',
    slug: 'seo-whey-plant-protein',
    category: 'SEO',
    excerpt:
      'ธุรกิจขายโปรตีนผงแข่งกับแบรนด์ใหญ่และมาร์เก็ตเพลสด้วยคำกว้างอย่าง "เวย์โปรตีน" ได้ยาก บทความนี้แนะนำวิธีเจาะคีย์เวิร์ดหางยาวที่มีเงื่อนไขเฉพาะเจาะจง พร้อมตัวอย่างผลลัพธ์จริงจาก Google Search Console และแผน 90 วันแรกที่ทำได้จริง',
    readingTime: '13 min read',
    publishedDate: '2026-09-01',
    lastModifiedDate: '2026-09-01',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    ogImage: '/proof/nutrition-content-growth.png',
    metaTitle: 'SEO ธุรกิจขายเวย์โปรตีน/โปรตีนจากพืช [คีย์เวิร์ดหางยาว] | Saralak Search',
    metaDescription:
      'วิธีทำ SEO ให้ธุรกิจขายเวย์โปรตีนและโปรตีนจากพืชแข่งขันได้จริง ด้วยคีย์เวิร์ดหางยาวเฉพาะกลุ่ม พร้อมตัวอย่างผลลัพธ์จริงจาก Google Search Console และแผน 90 วันแรก',
    aiSummary: [
      'คำกว้างอย่าง "เวย์โปรตีน" แข่งขันยากเพราะถูกแบรนด์ใหญ่และมาร์เก็ตเพลสครองพื้นที่ ควรเจาะคีย์เวิร์ดหางยาวแทน',
      'คีย์เวิร์ดหางยาวที่มีเงื่อนไขเฉพาะ เช่น ไม่มีน้ำตาล แพ้แลคโตส คีโต มีปริมาณค้นหาต่ำแต่ใกล้จุดตัดสินใจซื้อมากกว่า',
      'ควรแยกหน้าเว็บระหว่าง Plant Protein กับ Whey Protein เพราะเหตุผลการซื้อของลูกค้าต่างกัน',
      'ตัวอย่างจริงจากลูกค้ากลุ่มสุขภาพและโภชนาการ: Organic Clicks เพิ่มจาก 150 เป็น 2,157 ครั้ง/เดือนภายใน 3 เดือน จากคีย์เวิร์ดหางยาวกลุ่ม Non-Brand',
    ],
    faqs: proteinSeoFaqs,
    bodyVariant: 'protein-seo',
    cta: {
      headline: 'อยากรู้ว่าคีย์เวิร์ดหางยาวของธุรกิจคุณมีโอกาสติดอันดับตรงไหน?',
      description:
        'ดูบริการ SEO สำหรับวิเคราะห์ Search demand, Technical SEO, Content และหน้าที่มีผลต่อธุรกิจ แล้วจัดลำดับงานตามโอกาสที่วัดผลได้',
      buttonText: 'ดูบริการ SEO',
      href: '/services/seo',
    },
  },
  {
    title: 'วิธีเพิ่มยอดขายออนไลน์ เริ่มจากทำให้ลูกค้าเจอธุรกิจก่อน',
    slug: 'increase-online-sales',
    category: 'SEO',
    excerpt:
      'เพิ่มยอดขายออนไลน์ไม่ได้เริ่มจากการยิงโฆษณาเสมอไป แต่เริ่มจากการทำให้ลูกค้าเจอธุรกิจตอนกำลังหาซื้อ บทความนี้อธิบายลำดับขั้นตอนตั้งแต่ SEO, AEO/GEO ไปจนถึงการปรับหน้าเว็บให้เปลี่ยนผู้เข้าชมเป็นลูกค้า',
    readingTime: '11 min read',
    publishedDate: '2026-09-02',
    lastModifiedDate: '2026-09-02',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    ogImage: '/proof/gsc-product-listing-growth.png',
    metaTitle: 'วิธีเพิ่มยอดขายออนไลน์ [เริ่มจากการถูกค้นเจอ] | Saralak Search',
    metaDescription:
      'วิธีเพิ่มยอดขายออนไลน์แบบเป็นระบบ เริ่มจาก SEO และ AEO/GEO ให้ลูกค้าเจอธุรกิจ ไปจนถึงปรับหน้าเว็บให้เปลี่ยนผู้เข้าชมเป็นลูกค้า พร้อมตัวอย่างผลลัพธ์จริงจาก Google Search Console',
    aiSummary: [
      'เพิ่มยอดขายออนไลน์เริ่มจากการทำให้ลูกค้าเจอธุรกิจก่อนเสมอ ผ่าน SEO, Google Maps และ AEO/GEO',
      'หลังจากมีคนเข้าเว็บไซต์แล้ว ต้องปรับหน้าเว็บให้เปลี่ยนผู้เข้าชมเป็นลูกค้าได้ง่ายขึ้น เช่น ความเร็วเว็บ รีวิว และ CTA ที่ชัดเจน',
      'SEO อย่างเดียวไม่รับประกันยอดขาย แต่เป็นจุดเริ่มต้นที่จำเป็นก่อนขั้นตอนอื่น',
      'ควรวัดผลต่อเนื่องด้วย Google Search Console และ GA4 เพื่อรู้ว่าจุดไหนควรปรับปรุงต่อ',
    ],
    faqs: increaseOnlineSalesFaqs,
    bodyVariant: 'increase-online-sales',
    cta: {
      headline: 'อยากรู้ว่าธุรกิจของคุณควรเริ่มเพิ่มยอดขายออนไลน์จากจุดไหนก่อน?',
      description:
        'ดูบริการ SEO สำหรับวิเคราะห์ Search demand, Technical SEO, Content และหน้าที่มีผลต่อธุรกิจ แล้วจัดลำดับงานตามโอกาสที่วัดผลได้',
      buttonText: 'ดูบริการ SEO',
      href: '/services/seo',
    },
  },
  {
    title: '15 เทคนิคการเพิ่มยอดขาย ที่ธุรกิจออนไลน์ใช้ได้จริง',
    slug: 'sales-techniques',
    category: 'SEO',
    excerpt:
      'รวม 15 เทคนิคการเพิ่มยอดขาย แบ่งเป็น 3 กลุ่ม: ทำให้ลูกค้าเจอธุรกิจก่อน เปลี่ยนผู้เข้าชมเว็บไซต์เป็นลูกค้า และรักษาลูกค้าเดิมให้กลับมาซื้อซ้ำ พร้อมคำแนะนำว่าควรเริ่มจากกลุ่มไหนก่อนตามสถานการณ์ธุรกิจ',
    readingTime: '12 min read',
    publishedDate: '2026-09-02',
    lastModifiedDate: '2026-09-02',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: '15 เทคนิคการเพิ่มยอดขาย สำหรับธุรกิจออนไลน์ | Saralak Search',
    metaDescription:
      '15 เทคนิคการเพิ่มยอดขายสำหรับธุรกิจออนไลน์ แบ่งเป็นกลุ่มการมองเห็น (SEO, AEO, GEO), การเปลี่ยนผู้เข้าชมเป็นลูกค้า และการรักษาลูกค้าเดิม พร้อมคำแนะนำว่าควรเริ่มจากจุดไหนก่อน',
    aiSummary: [
      '15 เทคนิคแบ่งเป็น 3 กลุ่ม: ทำให้ลูกค้าเจอธุรกิจ (SEO, AEO, GEO), เปลี่ยนผู้เข้าชมเป็นลูกค้า และรักษาลูกค้าเดิม',
      'ไม่จำเป็นต้องทำครบทุกข้อพร้อมกัน ควรเริ่มจากกลุ่มที่ธุรกิจขาดมากที่สุดก่อน',
      'เทคนิคกลุ่มเปลี่ยนผู้เข้าชมเป็นลูกค้ามักเห็นผลเร็วที่สุด เพราะใช้กับคนที่เข้าเว็บไซต์อยู่แล้ว',
      'เทคนิคกลุ่ม SEO และ AEO/GEO ใช้เวลานานกว่าแต่ให้ผลระยะยาวที่ยั่งยืนกว่า',
    ],
    faqs: salesTechniquesFaqs,
    bodyVariant: 'sales-techniques',
    cta: {
      headline: 'อยากรู้ว่าธุรกิจของคุณควรเริ่มจากเทคนิคไหนก่อน?',
      description:
        'ดูบริการ SEO สำหรับวิเคราะห์ Search demand, Technical SEO, Content และหน้าที่มีผลต่อธุรกิจ แล้วจัดลำดับงานตามโอกาสที่วัดผลได้',
      buttonText: 'ดูบริการ SEO',
      href: '/services/seo',
    },
  },
  {
    title: 'AEO Checklist สำหรับเว็บไซต์ไทย: เช็คลิสต์ก่อนติด Featured Snippet และ AI Overview',
    slug: 'aeo-checklist',
    category: 'AEO',
    excerpt:
      'AEO Checklist ครอบคลุม 4 หมวดหลัก ได้แก่ Content Structure, Schema และ Technical, Featured Snippet Targeting และ Measurement รวมกว่า 27 รายการ เพื่อเพิ่มโอกาสให้เนื้อหาติด Featured Snippet, People Also Ask และ Google AI Overview',
    readingTime: '13 min read',
    publishedDate: '2026-09-07',
    lastModifiedDate: '2026-09-07',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'AEO Checklist สำหรับเว็บไซต์ไทย [27 รายการ] | Saralak Search',
    metaDescription:
      'AEO Checklist ครบจบสำหรับธุรกิจไทย 27 รายการใน 4 หมวด ได้แก่ Content Structure, Schema, Featured Snippet Targeting และ Measurement เพื่อติด Featured Snippet, People Also Ask และ Google AI Overview',
    aiSummary: [
      'AEO Checklist ครอบคลุม 4 หมวด: Content Structure, Schema และ Technical, Featured Snippet Targeting และ Measurement รวม 27 รายการ',
      'AEO เจาะจงที่ Google Search โดยเฉพาะ (Featured Snippet, People Also Ask, AI Overview) ต่างจาก GEO ที่ครอบคลุม ChatGPT, Gemini และ Perplexity ด้วย',
      'ควรเริ่มจากหมวด Content Structure ก่อน เพราะเป็นพื้นฐานที่หมวดอื่นต่อยอดจาก',
      'ตำแหน่ง Featured Snippet เปลี่ยนแปลงได้ตลอดเวลา ควรวัดผลอย่างน้อยเดือนละครั้ง',
    ],
    faqs: aeoChecklistFaqs,
    bodyVariant: 'aeo-checklist',
    cta: {
      headline: 'อยากรู้ว่าเว็บไซต์ผ่าน AEO Checklist ข้อไหนแล้วบ้าง?',
      description:
        'ดูแนวทางปรับเว็บไซต์และ Content สำหรับ AI Search, AI Overview และการถูกอ้างอิง โดยวางพื้นฐาน SEO, Entity และโครงสร้างคำตอบให้ทำงานร่วมกัน',
      buttonText: 'ดูบริการ GEO & AI Search',
      href: '/services/geo',
    },
  },
  {
    title: 'วางแผนการตลาดสปาและร้านนวด 5 ขั้นตอน ให้ลูกค้าใหม่และลูกค้าประจำเพิ่มขึ้น',
    slug: 'spa-marketing-plan',
    category: 'Local SEO',
    excerpt:
      'แผนการตลาดสปาที่ดีไม่ใช่แค่ลงโฆษณาเป็นครั้งคราว แต่ต้องมี 5 ส่วนที่ทำงานร่วมกัน ตั้งแต่กำหนดกลุ่มเป้าหมาย ทำให้ลูกค้าใหม่เจอร้าน สร้างความน่าเชื่อถือ เตรียมพร้อมสำหรับ AI Search ไปจนถึงรักษาลูกค้าเดิม',
    readingTime: '15 min read',
    publishedDate: '2026-09-07',
    lastModifiedDate: '2026-09-08',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'วางแผนการตลาดสปาและร้านนวด [5 ขั้นตอน] | Saralak Search',
    metaDescription:
      'วิธีวางแผนการตลาดสปาและร้านนวด 5 ขั้นตอน ตั้งแต่กำหนดกลุ่มเป้าหมาย ทำ Google Maps และ SEO ให้ลูกค้าเจอร้าน สร้างความน่าเชื่อถือ เตรียมพร้อม AI Search ไปจนถึงรักษาลูกค้าเดิม พร้อมตัวอย่างแผน 3 เดือนแรก',
    aiSummary: [
      'แผนการตลาดสปาที่ครบวงจรต้องมี 5 ส่วน: กลุ่มเป้าหมาย/งบประมาณ, การถูกค้นเจอ, ความน่าเชื่อถือ, AI Search และการรักษาลูกค้าเดิม',
      'ร้านสปาขนาดเล็กควรเริ่มจาก Google Business Profile ก่อน เพราะไม่มีค่าใช้จ่ายและเห็นผลเร็วที่สุด',
      'ลูกค้าบางกลุ่มเริ่มถาม AI อย่าง ChatGPT ว่า "สปาไหนดี" ก่อนค้นหาใน Google เอง ร้านที่ไม่มีข้อมูลให้ AI อ้างอิงจะพลาดลูกค้ากลุ่มนี้',
      'แผนการตลาดควรมีทั้งเป้าหมายระยะสั้น (Google Maps, รีวิว) และระยะยาว (SEO, คอนเทนต์, AEO/GEO)',
    ],
    faqs: spaMarketingPlanFaqs,
    bodyVariant: 'spa-marketing-plan',
    cta: {
      headline: 'อยากรู้ว่าร้านสปาของคุณควรเริ่มแผนการตลาดจากจุดไหนก่อน?',
      description:
        'ดูแนวทางเพิ่มการมองเห็นบน Google Search และ Google Maps สำหรับธุรกิจที่ต้องการลูกค้าจากพื้นที่และคำค้นที่มี Local Intent',
      buttonText: 'ดูบริการ Local SEO',
      href: '/services/local-seo',
    },
  },
  {
    title: 'AI Overview คืออะไร? 9 วิธีเตรียม Content ให้พร้อมสำหรับ AI Overview พร้อม Case Study จริง',
    slug: 'what-is-ai-overview',
    category: 'AEO',
    excerpt:
      'AI Overview คือคำตอบที่ Google สร้างด้วย AI บนหน้าผลการค้นหา บทความนี้สรุป 9 แนวทางที่ช่วยเตรียม Content ให้เหมาะกับ Search และ AI-generated answers พร้อม Case Study จริงจาก Saralak Search',
    readingTime: '12 min read',
    publishedDate: '2026-09-15',
    lastModifiedDate: '2026-09-18',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    ogImage: '/image/blog/what-is-ai-overview/what-is-ai-overview-case.png',
    metaTitle: 'AI Overview คืออะไร? 9 เทคนิคและ Case Study | Saralak Search',
    metaDescription:
      'AI Overview คืออะไร และวิธีทำให้เว็บไซต์พร้อมสำหรับ AI Overview ด้วย 9 แนวทาง พร้อม Case Study จริงจาก Saralak Search บนคำค้น Non-brand "ขายอะไรดีตลาดนัด"',
    aiSummary: [
      'AI Overview คือคำตอบที่ Google สร้างด้วย Generative AI บนหน้าผลการค้นหา พร้อมลิงก์ไปยังแหล่งข้อมูลที่ใช้ประกอบคำตอบ',
      'AI Overview สามารถแสดงบนคำค้นแบบ Non-brand ได้ ไม่จำเป็นต้องเป็นคำค้นที่มีชื่อแบรนด์',
      'บทความของลูกค้า Saralak Search ถูก Google AI Overview อ้างอิงบนคำค้น "ขายอะไรดีตลาดนัด" และ Packaging Solution ของแบรนด์ถูกนำไปประกอบคำตอบ',
      '9 แนวทางเตรียม Content สำหรับ AI Overview ครอบคลุมตั้งแต่การตอบคำถามให้จบ การใช้ Entity และตัวเลขที่เจาะจง ไปจนถึงการเชื่อมปัญหาสู่สินค้าอย่างมีเหตุผล',
    ],
    faqs: aiOverviewFaqs,
    bodyVariant: 'what-is-ai-overview',
    cta: {
      headline: 'อยากรู้ว่า Content ของธุรกิจมีความพร้อมต่อ AI Overview แค่ไหน?',
      description:
        'ดูแนวทางปรับเว็บไซต์และ Content สำหรับ AI Search, AI Overview และการถูกอ้างอิง โดยวางพื้นฐาน SEO, Entity และโครงสร้างคำตอบให้ทำงานร่วมกัน',
      buttonText: 'ดูบริการ GEO & AI Search',
      href: '/services/geo',
    },
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

function rotate<T>(items: T[], by: number) {
  if (items.length === 0) return items
  const offset = by % items.length
  return [...items.slice(offset), ...items.slice(0, offset)]
}

export function getRelatedPosts(slug: string, limit = 3) {
  if (slug === 'geo-checklist-thailand') {
    const preferredSlugs = ['what-is-geo', 'how-to-do-geo', 'what-is-ai-overview']
    return preferredSlugs
      .map((preferredSlug) => blogPosts.find((post) => post.slug === preferredSlug))
      .filter((post): post is BlogPost => Boolean(post))
      .slice(0, limit)
  }
  if (slug === 'what-is-seo') {
    const preferredSlugs = ['increase-seo-traffic', 'seo-not-working', 'seo-geo-aeo']
    return preferredSlugs
      .map((preferredSlug) => blogPosts.find((post) => post.slug === preferredSlug))
      .filter((post): post is BlogPost => Boolean(post))
      .slice(0, limit)
  }
  if (slug === 'how-to-do-geo') {
    const preferredSlugs = ['what-is-geo', 'geo-checklist-thailand', 'what-is-ai-overview']
    return preferredSlugs
      .map((preferredSlug) => blogPosts.find((post) => post.slug === preferredSlug))
      .filter((post): post is BlogPost => Boolean(post))
      .slice(0, limit)
  }
  if (slug === 'what-is-geo') {
    const preferredSlugs = ['how-to-do-geo', 'geo-checklist-thailand', 'seo-geo-aeo']
    return preferredSlugs
      .map((preferredSlug) => blogPosts.find((post) => post.slug === preferredSlug))
      .filter((post): post is BlogPost => Boolean(post))
      .slice(0, limit)
  }
  if (slug === 'what-is-ai-overview') {
    const preferredSlugs = ['what-is-aeo', 'what-is-geo', 'aeo-checklist']
    return preferredSlugs
      .map((preferredSlug) => blogPosts.find((post) => post.slug === preferredSlug))
      .filter((post): post is BlogPost => Boolean(post))
      .slice(0, limit)
  }
  if (slug === 'what-is-aeo') {
    const preferredSlugs = ['aeo-checklist', 'what-is-ai-overview', 'seo-geo-aeo']
    return preferredSlugs
      .map((preferredSlug) => blogPosts.find((post) => post.slug === preferredSlug))
      .filter((post): post is BlogPost => Boolean(post))
      .slice(0, limit)
  }
  if (slug === 'seo-geo-aeo') {
    const preferredSlugs = ['what-is-seo', 'what-is-aeo', 'what-is-geo']
    return preferredSlugs
      .map((preferredSlug) => blogPosts.find((post) => post.slug === preferredSlug))
      .filter((post): post is BlogPost => Boolean(post))
      .slice(0, limit)
  }
  if (slug === 'geo-agency-thailand') {
    const preferredSlugs = ['what-is-geo', 'how-to-do-geo', 'geo-checklist-thailand']
    return preferredSlugs
      .map((preferredSlug) => blogPosts.find((post) => post.slug === preferredSlug))
      .filter((post): post is BlogPost => Boolean(post))
      .slice(0, limit)
  }
  const currentIndex = blogPosts.findIndex((post) => post.slug === slug)
  const current = blogPosts[currentIndex]
  const rest = blogPosts.filter((post) => post.slug !== slug)
  const sameCategory = rest.filter((post) => post.category === current?.category)
  const otherCategory = rest.filter((post) => post.category !== current?.category)

  // Rotate by the post's own position so different articles surface across pages
  // instead of every page showing the same static first 3 posts.
  return [...rotate(sameCategory, currentIndex), ...rotate(otherCategory, currentIndex)].slice(0, limit)
}

export function getLatestBlogPosts(limit = 4) {
  return [...blogPosts]
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
    .slice(0, limit)
}
