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
  bodyVariant?: 'geo-intro' | 'seo-geo-aeo'
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
      'Learn how SEO, AEO and GEO work together — and where to start when building a search visibility strategy for Google, AI Overview, ChatGPT and AI Search.',
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
    title: 'How to Get Mentioned in AI Search Results',
    slug: 'get-mentioned-in-ai-search-results',
    category: 'AI Search',
    excerpt:
      'A checklist of the signals, content patterns and entity work that improve AI Search mentions.',
    readingTime: '6 min read',
    publishedDate: '2026-05-24',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'How to Get Mentioned in AI Search Results | Saralak Search',
    metaDescription:
      'Learn the practical steps to improve mentions in AI Search, including entity clarity, content structure and trust signals.',
  },
  {
    title: 'SEO, AEO and GEO: Building a Modern Search Strategy',
    slug: 'modern-search-strategy',
    category: 'Strategy',
    excerpt:
      'A simple framework for combining SEO, AEO and GEO into one practical search strategy.',
    readingTime: '5 min read',
    publishedDate: '2026-05-20',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'SEO, AEO and GEO: Building a Modern Search Strategy | Saralak Search',
    metaDescription:
      'See how SEO, AEO and GEO fit together in a modern search strategy for visibility, leads and AI readability.',
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
