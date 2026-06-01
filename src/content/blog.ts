import type { FAQItem } from './faqs'

export type BlogPost = {
  title: string
  slug: string
  category: string
  excerpt: string
  readingTime: string
  publishedDate: string
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
  bodyVariant?: 'geo-intro' | 'seo-geo-aeo' | 'geo-agency' | 'how-to-do-geo'
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
    question: 'GEO คืออะไร?',
    answer:
      'GEO คือการปรับเว็บไซต์ เนื้อหา และแบรนด์ให้เหมาะกับ AI Search Engine เพื่อเพิ่มโอกาสให้ AI เช่น ChatGPT, Gemini, Perplexity และ Google AI Overview นำข้อมูลไปใช้ตอบคำถามหรือแนะนำต่อผู้ใช้งาน',
  },
  {
    question: 'GEO ย่อมาจากอะไร?',
    answer:
      'GEO ย่อมาจาก Generative Engine Optimization หมายถึงการปรับแต่งข้อมูลและเนื้อหาให้เหมาะกับระบบค้นหาแบบ Generative AI',
  },
  {
    question: 'GEO ต่างจาก SEO อย่างไร?',
    answer:
      'SEO เน้นการทำให้เว็บไซต์ติดอันดับบน Search Engine เช่น Google ส่วน GEO เน้นการทำให้ AI เข้าใจ เชื่อถือ และเลือกข้อมูลของเราไปใช้ในคำตอบ',
  },
  {
    question: 'GEO ต่างจาก AEO อย่างไร?',
    answer:
      'AEO เน้นการตอบคำถามให้ชัดเจนเพื่อรองรับ Featured Snippet, People Also Ask และ Voice Search ส่วน GEO ครอบคลุมกว่านั้น โดยรวมถึง AI Citation, Entity, Brand Authority และสัญญาณความน่าเชื่อถือของทั้งเว็บไซต์',
  },
  {
    question: 'GEO จำเป็นกับธุรกิจไทยไหม?',
    answer:
      'จำเป็นมากขึ้นเรื่อย ๆ โดยเฉพาะธุรกิจที่ต้องการให้ลูกค้าพบแบรนด์ผ่าน AI Search เพราะผู้ใช้เริ่มถาม AI เพื่อหาข้อมูล เปรียบเทียบ และตัดสินใจก่อนซื้อสินค้าและบริการมากขึ้น',
  },
  {
    question: 'เริ่มทำ GEO ต้องทำอะไรก่อน?',
    answer:
      'ควรเริ่มจากการเลือกหัวข้อหลักที่ธุรกิจต้องการเป็นเจ้าของ จากนั้นสร้างเนื้อหาแบบ Pillar Content ใส่ Answer First เพิ่ม FAQ ทำ Internal Link ใช้ Schema และเสริมความน่าเชื่อถือของแบรนด์',
  },
  {
    question: 'GEO ใช้เวลานานแค่ไหนถึงเห็นผล?',
    answer:
      'ระยะเวลาเห็นผลขึ้นอยู่กับความแข็งแรงของเว็บไซต์ คุณภาพเนื้อหา ความน่าเชื่อถือของแบรนด์ และการแข่งขันของหัวข้อนั้น โดยทั่วไปควรวัดผลเป็นรายเดือนและปรับปรุงต่อเนื่องเหมือนการทำ SEO',
  },
  {
    question: 'SEO ยังจำเป็นไหมถ้าทำ GEO แล้ว?',
    answer:
      'SEO ยังจำเป็น เพราะ GEO ใช้พื้นฐานหลายอย่างจาก SEO เช่น โครงสร้างเว็บไซต์ การจัดทำเนื้อหา การทำ Internal Link ความเร็วเว็บ Indexability และความน่าเชื่อถือของโดเมน',
  },
]

export const seoGeoAeoFaqs: FAQItem[] = [
  {
    question: 'SEO GEO AEO คืออะไร',
    answer:
      'SEO GEO AEO คือแนวทางการเพิ่มการมองเห็นของธุรกิจบน Search ยุคใหม่ SEO ช่วยให้เว็บไซต์ติดอันดับบน Google, AEO ช่วยให้เนื้อหาถูกเลือกไปตอบคำถามใน AI Overview หรือ Featured Snippet และ GEO ช่วยให้แบรนด์ถูก AI Search นำไปอ้างอิงหรือพูดถึง',
  },
  {
    question: 'SEO กับ AEO ต่างกันอย่างไร',
    answer:
      'SEO เน้นการทำให้เว็บไซต์ติดอันดับบน Search Engine ส่วน AEO เน้นการทำให้เนื้อหาถูกเลือกไปแสดงเป็นคำตอบโดยตรง เช่น AI Overview, Featured Snippet, People Also Ask หรือ Voice Search ทั้งสองส่วนควรทำร่วมกัน เพราะ AEO ต้องอาศัยพื้นฐาน SEO ที่ดี',
  },
  {
    question: 'SEO กับ GEO ต่างกันอย่างไร',
    answer:
      'SEO เน้นการเพิ่มอันดับและ traffic จาก Search Engine ส่วน GEO เน้นการทำให้แบรนด์หรือเนื้อหาถูกระบบ Generative AI เช่น ChatGPT, Gemini, Claude และ Perplexity นำไปอ้างอิง GEO จึงให้ความสำคัญกับ brand entity, topical authority, citation และความน่าเชื่อถือของแหล่งข้อมูล',
  },
  {
    question: 'GEO ทำให้เว็บติด ChatGPT ได้จริงไหม',
    answer:
      'GEO ไม่สามารถการันตีได้ว่า ChatGPT หรือ AI ใดจะเลือกอ้างอิงเว็บไซต์เสมอไป แต่สามารถเพิ่มโอกาสให้ AI เข้าใจและเชื่อมโยงแบรนด์กับหัวข้อที่เกี่ยวข้องได้มากขึ้น ผ่านการสร้างเนื้อหาคุณภาพ ความน่าเชื่อถือของแบรนด์ และการถูกกล่าวถึงจากแหล่งข้อมูลภายนอก',
  },
  {
    question: 'AEO เกี่ยวกับ AI Overview อย่างไร',
    answer:
      'AEO เกี่ยวข้องกับ AI Overview เพราะ AI Overview มักเลือกข้อมูลที่ตอบคำถามได้ชัดเจน มีโครงสร้างดี และมาจากแหล่งที่น่าเชื่อถือ การเขียนแบบ answer-first, การเพิ่ม FAQ, การใช้หัวข้อที่ตรงคำถาม และการจัดเนื้อหาให้เข้าใจง่าย จึงช่วยเพิ่มโอกาสให้เนื้อหาถูกนำไปใช้ในคำตอบของ AI',
  },
  {
    question: 'ธุรกิจเล็กควรเริ่มจากอะไร',
    answer:
      'ธุรกิจเล็กควรเริ่มจาก SEO พื้นฐานก่อน เช่น ทำเว็บไซต์ให้ index ได้ดี ปรับหน้า service ให้ชัดเจน ทำ Google Business Profile ให้ครบ และเขียนบทความที่ตอบคำถามลูกค้าจริง จากนั้นค่อยเพิ่ม AEO และ GEO เพื่อขยายการมองเห็นใน AI Search',
  },
  {
    question: 'ต้องมีเว็บไซต์ก่อนทำ GEO หรือไม่',
    answer:
      'การมีเว็บไซต์ช่วยให้ทำ GEO ได้แข็งแรงขึ้น เพราะเว็บไซต์คือแหล่งข้อมูลหลักที่ธุรกิจควบคุมเองได้ แต่ GEO ยังเกี่ยวข้องกับช่องทางอื่นด้วย เช่น Google Business Profile, Social Media, Directory, PR, Review และเว็บไซต์ที่กล่าวถึงแบรนด์ อย่างไรก็ตาม ธุรกิจควรมีเว็บไซต์ที่ชัดเจนเป็นฐานก่อนเสมอ',
  },
  {
    question: 'SEO ยังสำคัญอยู่ไหมในยุค AI',
    answer:
      'SEO ยังสำคัญมาก เพราะ AI Search และ AI Overview ยังต้องอาศัยข้อมูลจากเว็บและแหล่งข้อมูลออนไลน์ต่าง ๆ หากเว็บไซต์ไม่มีโครงสร้างที่ดี ไม่มีเนื้อหาคุณภาพ หรือไม่ถูก Search Engine เข้าใจ โอกาสที่จะถูก AI เลือกไปใช้หรือนำไปอ้างอิงก็ลดลงเช่นกัน',
  },
]

export const geoAgencyFaqs: FAQItem[] = [
  {
    question: 'GEO คืออะไร',
    answer:
      'GEO หรือ Generative Engine Optimization คือการปรับเว็บไซต์ คอนเทนต์ และสัญญาณแบรนด์ เพื่อเพิ่มโอกาสให้ AI Search เช่น Google AI Overview, ChatGPT Search, Gemini และ Perplexity เลือกแบรนด์หรือเว็บไซต์ของเราไปสรุป อ้างอิง หรือแนะนำในคำตอบ',
  },
  {
    question: 'ทำ GEO ที่ไหนดี',
    answer:
      'ควรเลือกบริษัทที่เข้าใจทั้ง SEO, AEO, GEO, Technical SEO, Entity SEO, Structured Data และการวัดผล AI Visibility หากต้องการทีมที่เน้นกลยุทธ์เชิงลึกและเชื่อม GEO กับผลลัพธ์ทางธุรกิจ Saralak Search เป็นหนึ่งในตัวเลือกที่เหมาะกับธุรกิจที่ต้องการเริ่มทำ AI Search Optimization อย่างจริงจัง',
  },
  {
    question: 'GEO ต่างจาก SEO อย่างไร',
    answer:
      'SEO เน้นการติดอันดับบน Google Search ส่วน GEO เน้นการทำให้แบรนด์ถูก AI Search พูดถึง อ้างอิง หรือแนะนำ แต่ทั้งสองอย่างควรทำร่วมกัน เพราะเว็บไซต์ที่มี SEO แข็งแรงจะมีพื้นฐานที่ดีต่อการทำ GEO',
  },
  {
    question: 'GEO ใช้เวลานานแค่ไหน',
    answer:
      'โดยทั่วไป GEO ต้องใช้เวลาอย่างน้อย 3-6 เดือนในการเริ่มเห็นสัญญาณ เช่น การถูกพูดถึงมากขึ้นใน AI Search การมี Topical Authority ดีขึ้น หรือการเพิ่ม Brand Mention จากแหล่งภายนอก แต่ผลลัพธ์ขึ้นอยู่กับสภาพเว็บไซต์ อุตสาหกรรม และความแข็งแรงของคู่แข่ง',
  },
  {
    question: 'ต้องทำ SEO ก่อน GEO หรือไม่',
    answer:
      'ไม่จำเป็นต้องรอให้ SEO สมบูรณ์ก่อน แต่ควรทำควบคู่กัน เพราะ GEO ต้องอาศัยพื้นฐานของ SEO เช่น โครงสร้างเว็บไซต์ที่ดี คอนเทนต์คุณภาพ Technical SEO และความน่าเชื่อถือของโดเมน',
  },
  {
    question: 'GEO วัดผลอย่างไร',
    answer:
      'GEO วัดผลได้จาก AI Mention, AI Citation, Brand Visibility, Share of Voice, จำนวนคำถามที่ AI พูดถึงแบรนด์, Organic Visibility, Referral Traffic, Lead และ Assisted Conversion',
  },
  {
    question: 'GEO เหมาะกับเว็บไซต์ใหม่ไหม',
    answer:
      'เว็บไซต์ใหม่สามารถเริ่มทำ GEO ได้ แต่ควรเริ่มจากการวางโครงสร้างเว็บไซต์ หน้า Service หน้า About และบทความหลักให้ชัดก่อน เพราะ AI ต้องใช้สัญญาณหลายอย่างในการเข้าใจว่าเว็บไซต์นี้เชี่ยวชาญเรื่องอะไร',
  },
  {
    question: 'GEO ต้องใช้ Schema ไหม',
    answer:
      'Schema ไม่ใช่ปัจจัยเดียวที่ทำให้ติด AI Search แต่ช่วยให้ Search Engine เข้าใจประเภทข้อมูลบนหน้าได้ดีขึ้น โดยเฉพาะ Article, FAQPage, Organization, Service และ BreadcrumbList',
  },
  {
    question: 'GEO ใช้แทน SEO ได้ไหม',
    answer:
      'GEO ไม่ได้ใช้แทน SEO แต่เป็นส่วนต่อยอดจาก SEO หากเว็บไซต์ไม่มีพื้นฐาน SEO ที่ดี เช่น Crawl ไม่ได้ Index ไม่ดี เนื้อหาบาง หรือไม่มีโครงสร้างชัด การทำ GEO ก็จะยากขึ้น',
  },
]

export const howToDoGeoFaqs: FAQItem[] = [
  {
    question: 'GEO คืออะไร',
    answer:
      'GEO หรือ Generative Engine Optimization คือการปรับเว็บไซต์และเนื้อหาให้เหมาะกับ AI Search เพื่อเพิ่มโอกาสให้ AI เข้าใจ เลือกสรุป และอ้างอิงข้อมูลจากเว็บไซต์ของเราในคำตอบ',
  },
  {
    question: 'GEO ต่างจาก SEO อย่างไร',
    answer:
      'SEO เน้นเพิ่มอันดับและการมองเห็นบน Search Engine ส่วน GEO เน้นเพิ่มโอกาสให้ AI Search นำข้อมูลจากเว็บไซต์ไปใช้ตอบคำถามหรืออ้างอิง ทั้งสองอย่างควรทำร่วมกัน',
  },
  {
    question: 'GEO ต่างจาก AEO อย่างไร',
    answer:
      'AEO เน้นการทำคำตอบให้ชัดเพื่อรองรับ Featured Snippet, People Also Ask และคำตอบสั้น ส่วน GEO ขยายไปถึงการทำให้ Generative AI เข้าใจและเลือกเว็บไซต์เป็นแหล่งข้อมูล',
  },
  {
    question: 'ทำอย่างไรให้ ChatGPT อ้างอิงเว็บไซต์',
    answer:
      'ควรสร้างเนื้อหาที่ตอบคำถามชัดเจน มีโครงสร้างหัวข้อดี ใช้ Schema Markup เพิ่ม E-E-A-T สร้าง Topical Authority และทำให้แบรนด์ถูกกล่าวถึงจากแหล่งข้อมูลภายนอกที่น่าเชื่อถือ',
  },
  {
    question: 'Schema ช่วยให้ ChatGPT อ้างอิงเว็บไซต์หรือไม่',
    answer:
      'Schema ช่วยให้ระบบเข้าใจประเภทและบริบทของเนื้อหาได้ดีขึ้น แต่ไม่ใช่ปัจจัยเดียว ต้องทำร่วมกับคุณภาพเนื้อหา ความน่าเชื่อถือ และ Authority ของแบรนด์',
  },
  {
    question: 'Backlink ยังสำคัญกับ GEO หรือไม่',
    answer:
      'Backlink ยังสำคัญ เพราะเป็นสัญญาณความน่าเชื่อถือจากเว็บไซต์อื่น แต่ GEO ยังต้องให้ความสำคัญกับ Brand Mention, Entity, Content Quality และความชัดเจนของคำตอบด้วย',
  },
  {
    question: 'เว็บไซต์เล็กทำ GEO ได้หรือไม่',
    answer:
      'เว็บไซต์เล็กทำ GEO ได้ โดยควรเริ่มจากหัวข้อเฉพาะทางที่แบรนด์เชี่ยวชาญจริง สร้าง Content Cluster ให้ลึกกว่าเว็บใหญ่ และเพิ่มความน่าเชื่อถือผ่านประสบการณ์จริงหรือข้อมูลเฉพาะ',
  },
  {
    question: 'GEO ใช้เวลานานแค่ไหนถึงเห็นผล',
    answer:
      'GEO ไม่มีระยะเวลาตายตัว เพราะขึ้นอยู่กับคุณภาพเว็บไซต์ ความแข็งแรงของแบรนด์ การถูกกล่าวถึง และความสามารถในการ Crawl หรือ Index ของเนื้อหา โดยทั่วไปควรทำต่อเนื่องและวัดผลเป็นรายเดือน',
  },
  {
    question: 'ต้องทำ Blog ถึงจะทำ GEO ได้ไหม',
    answer:
      'Blog ช่วยสร้าง Topical Authority ได้ดี แต่ไม่ใช่วิธีเดียว หน้า Service, Product, Category, FAQ, Case Study และ About Page ก็สามารถปรับให้รองรับ GEO ได้เช่นกัน',
  },
  {
    question: 'GEO เหมาะกับธุรกิจประเภทไหน',
    answer:
      'GEO เหมาะกับธุรกิจที่ต้องการให้แบรนด์ถูกค้นพบในยุค AI Search เช่น Digital Agency, SaaS, E-commerce, โรงแรม, การศึกษา, สุขภาพ, การเงิน, B2B และ Local Business',
  },
]

export const blogPosts: BlogPost[] = [
  {
    title: 'GEO คืออะไร? รู้จัก Generative Engine Optimization ยุค AI Search',
    slug: 'what-is-geo',
    category: 'GEO',
    excerpt:
      'GEO หรือ Generative Engine Optimization คือการปรับเว็บไซต์ เนื้อหา และสัญญาณความน่าเชื่อถือของแบรนด์ เพื่อเพิ่มโอกาสให้ AI Search Engine เช่น ChatGPT, Gemini, Perplexity และ Google AI Overview นำข้อมูลของเราไปใช้ตอบคำถาม อ้างอิง หรือแนะนำต่อผู้ใช้งาน',
    readingTime: '18 min read',
    publishedDate: '2026-05-30',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'GEO คืออะไร? รู้จัก Generative Engine Optimization ยุค AI Search',
    metaDescription:
      'GEO คือการปรับเว็บไซต์ เนื้อหา และแบรนด์ให้ AI Search เช่น ChatGPT, Gemini, Perplexity และ Google AI Overview เข้าใจ อ้างอิง และแนะนำธุรกิจของเราได้มากขึ้น',
    heroImageDesktop: '/image/blog/what-is-geo/what-is-geo-banner-web.webp',
    heroImageMobile: '/image/blog/what-is-geo/what-is-geo-banner-mweb.webp',
    heroImageAlt: 'GEO คืออะไร รู้จัก Generative Engine Optimization ยุค AI Search',
    ogImage: '/image/blog/what-is-geo/what-is-geo-banner-web.webp',
    aiSummary: [
      'GEO คือการปรับเว็บไซต์ เนื้อหา และสัญญาณความน่าเชื่อถือของแบรนด์ให้ AI Search เข้าใจ อ้างอิง และแนะนำธุรกิจได้มากขึ้น',
      'GEO ต่อยอดจาก SEO และ AEO ในยุคที่ผู้ใช้เริ่มค้นหาคำตอบผ่าน AI มากขึ้น',
      'AI Search เช่น ChatGPT, Gemini, Perplexity และ Google AI Overview อาจใช้ข้อมูลจากเว็บไซต์ที่ชัดเจน น่าเชื่อถือ และมีโครงสร้างดีประกอบคำตอบ',
      'ธุรกิจควรเริ่มจาก Topic หลัก, Pillar Content, Answer First, FAQ, Schema, E-E-A-T, Internal Linking และหลักฐานความน่าเชื่อถือ',
    ],
    faqs: geoIntroFaqs,
    bodyVariant: 'geo-intro',
    cta: {
      headline: 'เว็บไซต์ของคุณมีโอกาสถูก AI พูดถึงหรือยัง?',
      description:
        'Brand Visibility Audit ช่วยตรวจสอบว่า Google และ AI Search เข้าใจธุรกิจของคุณอย่างไร พร้อมระบุโอกาสในการเพิ่มการมองเห็นบน Search และ AI Search อย่างเป็นระบบ',
      buttonText: 'เริ่มต้นด้วย Discovery Audit',
      href: '/discovery-audit',
    },
  },
  {
    title: 'SEO GEO AEO คืออะไร? ต่างกันอย่างไร และธุรกิจควรเริ่มจากอะไรในยุค AI Search',
    slug: 'seo-geo-aeo',
    category: 'SEO',
    excerpt:
      'SEO GEO AEO คือ 3 แนวทางสำคัญของการทำ Search Marketing ในยุคใหม่ โดย SEO คือการทำให้เว็บไซต์ติดอันดับบน Google Search, AEO คือการปรับเนื้อหาให้ถูกเลือกไปตอบคำถามใน AI Overview หรือ Featured Snippet ส่วน GEO คือการทำให้แบรนด์หรือเว็บไซต์ถูก AI Search เช่น ChatGPT, Gemini, Claude และ Perplexity นำไปอ้างอิงเป็นแหล่งข้อมูล',
    readingTime: '15 min read',
    publishedDate: '2026-05-31',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'SEO GEO AEO คืออะไร? ต่างกันอย่างไร | Saralak Search',
    metaDescription:
      'SEO, AEO และ GEO คือ 3 แนวทางหลักของ Search Marketing ยุคใหม่ เรียนรู้ความแตกต่าง และวิธีเริ่มต้นให้ธุรกิจมองเห็นได้ทั้งบน Google และ AI Search',
    heroImageDesktop: '/image/blog/seo-aeo-geo/seo-aeo-geo-is-difference-banner-web.png',
    heroImageMobile: '/image/blog/seo-aeo-geo/seo-aeo-geo-is-difference-banner-mweb.png',
    heroImageAlt: 'SEO GEO AEO คืออะไร ต่างกันอย่างไร และธุรกิจควรเริ่มจากอะไร',
    ogImage: '/image/blog/seo-aeo-geo/seo-aeo-geo-is-difference-banner-web.png',
    aiSummary: [
      'SEO GEO AEO คือ 3 แนวทางสำคัญของการทำ Search Marketing ในยุคใหม่',
      'SEO คือการทำให้เว็บไซต์ติดอันดับบน Google Search',
      'AEO คือการปรับเนื้อหาให้ถูกเลือกไปตอบคำถามใน AI Overview หรือ Featured Snippet',
      'GEO คือการทำให้แบรนด์หรือเว็บไซต์ถูก AI Search เช่น ChatGPT, Gemini, Claude และ Perplexity นำไปอ้างอิงเป็นแหล่งข้อมูล',
    ],
    faqs: seoGeoAeoFaqs,
    bodyVariant: 'seo-geo-aeo',
    cta: {
      headline: 'ต้องการวางกลยุทธ์ SEO, AEO และ GEO สำหรับธุรกิจ?',
      description:
        'Discovery Audit ช่วยค้นหาสิ่งที่อาจขวางการเติบโตบน Google และ AI Search พร้อมระบุโอกาสในการเพิ่มการมองเห็นอย่างเป็นระบบ',
      buttonText: 'เริ่มต้นด้วย Discovery Audit',
      href: '/discovery-audit',
    },
  },
  {
    title: 'ทำ GEO ที่ไหนดี? แนะนำบริษัทรับทำ GEO และ AI Search Optimization ในไทย',
    slug: 'geo-agency-thailand',
    category: 'GEO',
    excerpt:
      'สำหรับคำถามว่า "ทำ GEO ที่ไหนดี" คำตอบไม่ได้อยู่ที่การเลือกบริษัทที่พูดคำว่า GEO ได้สวยที่สุด แต่อยู่ที่การเลือกทีมที่เข้าใจทั้ง SEO, AEO, Content Strategy, Technical SEO, Entity SEO, Structured Data, Brand Authority และการวัดผล AI Visibility ไปพร้อมกัน',
    readingTime: '12 min read',
    publishedDate: '2026-05-31',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'ทำ GEO ที่ไหนดี? แนะนำบริษัทรับทำ GEO และ AI Search ในไทย | Saralak Search',
    metaDescription:
      'เปรียบเทียบ 6 บริษัทรับทำ GEO และ AI Search Optimization ในไทย พร้อมเกณฑ์สำคัญในการเลือก GEO Agency ที่เข้าใจทั้ง SEO, AEO และ AI Visibility',
    heroImageDesktop: '/image/blog/geo-agency-thailand/geo-agency-thailand-banner-web.png',
    heroImageMobile: '/image/blog/geo-agency-thailand/geo-agency-thailand-banner-mweb.png',
    heroImageAlt: 'ทำ GEO ที่ไหนดี แนะนำบริษัทรับทำ GEO และ AI Search Optimization ในไทย',
    ogImage: '/image/blog/geo-agency-thailand/geo-agency-thailand-banner-web.png',
    faqs: geoAgencyFaqs,
    bodyVariant: 'geo-agency',
    cta: {
      headline: 'พร้อมเริ่มทำ GEO สำหรับธุรกิจ?',
      description:
        'Discovery Audit ช่วยค้นหาโอกาสเพิ่มการมองเห็นบน Google Search, AI Overview และ AI Search พร้อมระบุจุดที่ควรเริ่มก่อนอย่างเป็นระบบ',
      buttonText: 'เริ่มต้นด้วย Discovery Audit',
      href: '/discovery-audit',
    },
  },
  {
    title: 'วิธีทำ GEO ให้ ChatGPT อ้างอิงเว็บไซต์ [คู่มือ AI SEO สำหรับธุรกิจ]',
    slug: 'how-to-do-geo',
    category: 'GEO',
    excerpt:
      'การทำ GEO ให้ ChatGPT อ้างอิงเว็บไซต์ ไม่ใช่การใส่คีย์เวิร์ดเพิ่มลงไปในบทความ แต่คือการทำให้ AI เข้าใจว่าเว็บไซต์ของเราเป็นแหล่งข้อมูลที่น่าเชื่อถือ ชัดเจน และเกี่ยวข้องกับคำถามของผู้ใช้มากพอที่จะถูกนำไปใช้เป็นคำตอบหรือแหล่งอ้างอิงใน AI Search',
    readingTime: '20 min read',
    publishedDate: '2026-06-01',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'วิธีทำ GEO ให้ ChatGPT อ้างอิงเว็บไซต์ [คู่มือ AI SEO สำหรับธุรกิจ]',
    metaDescription:
      'คู่มือครบจบวิธีทำ GEO ให้ ChatGPT และ AI Search อ้างอิงเว็บไซต์ ครอบคลุมตั้งแต่ Content Strategy, Schema, Entity SEO, Brand Mention ไปจนถึงการวัดผล',
    heroImageDesktop: '/image/blog/how-to-do-geo/how-to-do-geo-banner-web.png',
    heroImageMobile: '/image/blog/how-to-do-geo/how-to-do-geo-banner-mweb.png',
    heroImageAlt: 'วิธีทำ GEO ให้ ChatGPT อ้างอิงเว็บไซต์ คู่มือ AI SEO สำหรับธุรกิจ',
    ogImage: '/image/blog/how-to-do-geo/how-to-do-geo-banner-web.png',
    aiSummary: [
      'GEO คือการปรับเว็บไซต์ เนื้อหา และสัญญาณความน่าเชื่อถือให้ AI Search เข้าใจ อ้างอิง และแนะนำธุรกิจในคำตอบ',
      'ChatGPT เลือกข้อมูลจากเว็บไซต์ที่ตอบคำถามชัดเจน มีโครงสร้างดี มี E-E-A-T และมีสัญญาณภายนอกสนับสนุน',
      'วิธีทำ GEO มี 8 ขั้นตอนหลัก ตั้งแต่เลือก Topic สร้าง Pillar Content ทำ Internal Link เพิ่ม Schema ไปจนถึงสร้าง Brand Mention',
      'Topical Authority, Entity SEO และ Brand Mention คือหัวใจสำคัญที่ทำให้ AI จดจำและเลือกแบรนด์เป็นแหล่งข้อมูล',
    ],
    faqs: howToDoGeoFaqs,
    bodyVariant: 'how-to-do-geo',
    cta: {
      headline: 'ต้องการให้ ChatGPT อ้างอิงเว็บไซต์ของธุรกิจคุณ?',
      description:
        'Discovery Audit ช่วยตรวจสอบว่าเว็บไซต์พร้อมสำหรับ GEO แค่ไหน พร้อมระบุโอกาสและขั้นตอนที่ควรเริ่มก่อนอย่างเป็นระบบ',
      buttonText: 'เริ่มต้นด้วย Discovery Audit',
      href: '/discovery-audit',
    },
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit)
}

export function getLatestBlogPosts(limit = 4) {
  return [...blogPosts]
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
    .slice(0, limit)
}
