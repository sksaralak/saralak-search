export type CaseStudy = {
  slug: string
  projectName: string
  image: string
  description: string
  industry: string
  service: string
  channel: string
  duration: string
  result: string
  card: {
    challenge: string
    approach: string[]
    outcome: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ranking-growth',
    projectName: 'อันดับ #5 → #1',
    image: '/proof/ranking-bangsaen-serp.png',
    description: 'เพิ่มอันดับคำค้นแข่งขันสูงด้วย Content, Internal Link และ Supporting Content',
    industry: 'Local / Commercial Search',
    service: 'SEO Strategy + Content Optimization',
    channel: 'Google Organic Search',
    duration: '3 Months',
    result: '#5 → #1',
    card: {
      challenge: 'คำค้นมี Search Demand สูง แต่เว็บไซต์ยังตามหลังคู่แข่ง',
      approach: [
        'ปรับเนื้อหาให้ตอบโจทย์ intent และการตัดสินใจของลูกค้า',
        'เสริม Internal Link, Footer Content และ Supporting Content',
        'ใช้ Backlink Support เพื่อเพิ่มความน่าเชื่อถือของหน้าเป้าหมาย',
      ],
      outcome: 'เพิ่มการมองเห็นสำหรับคำค้นที่มีมูลค่าทางธุรกิจสูง',
    },
  },
  {
    slug: 'chatgpt-visibility',
    projectName: 'ถูก ChatGPT แนะนำ',
    image: '/proof/chatgpt-product-recommendation.png',
    description: 'สร้าง Content Cluster เพื่อเพิ่มโอกาสถูกอ้างอิงใน AI Search',
    industry: 'Product / Recommendation Search',
    service: 'GEO + Content Cluster',
    channel: 'ChatGPT / AI Search',
    duration: '6 Months',
    result: 'Mentioned by ChatGPT',
    card: {
      challenge: 'AI ยังไม่เข้าใจความเชี่ยวชาญของเว็บไซต์',
      approach: [
        'สร้าง Topic Authority รอบสินค้าและปัญหาที่ลูกค้าค้นหา',
        'เชื่อมโยงเนื้อหาเป็น Content Cluster',
        'ทำให้ข้อมูลแบรนด์ สินค้า และบริบทการใช้งานชัดเจนขึ้น',
      ],
      outcome: 'เพิ่มโอกาสการค้นพบแบรนด์ผ่าน ChatGPT และ AI Search',
    },
  },
  {
    slug: 'ai-overview-visibility',
    projectName: 'ติด AI Overview',
    image: '/proof/google-ai-overview-visibility.png',
    description: 'เพิ่มการมองเห็นใน Google AI แม้เว็บไซต์ไม่ได้ใหญ่ที่สุด',
    industry: 'AI Answer Search',
    service: 'AEO + FAQ Optimization',
    channel: 'Google AI Overview',
    duration: '3 Months',
    result: 'Appeared in AI Overview',
    card: {
      challenge: 'เว็บไซต์เล็กกว่าคู่แข่งในผลค้นหา',
      approach: [
        'ใช้ AEO เพื่อให้เนื้อหาตอบคำถามชัดเจนขึ้น',
        'เพิ่ม FAQ และ Question Coverage รอบ intent สำคัญ',
        'จัดโครงสร้างคำตอบให้ Google เข้าใจและดึงไปใช้ได้ง่ายขึ้น',
      ],
      outcome: 'เพิ่มการมองเห็นบน Google AI แม้เว็บไซต์ไม่ได้เป็นผู้เล่นรายใหญ่',
    },
  },
  {
    slug: 'organic-growth',
    projectName: 'Organic โตต่อเนื่อง',
    image: '/proof/gsc-product-listing-growth.png',
    description: 'แก้ Technical SEO และปรับ Product Listing Page',
    industry: 'Ecommerce / Product Listing',
    service: 'Technical SEO + Information Architecture',
    channel: 'Google Search Console',
    duration: '6 Months',
    result: 'Organic Growth',
    card: {
      challenge: 'เว็บไซต์มีมานานแต่ยังขาด SEO พื้นฐาน',
      approach: [
        'ทำ Technical Audit เพื่อหาสิ่งที่ขวางการเติบโต',
        'ปรับ Metadata, Internal Link และ Information Architecture',
        'ทำให้ Product Listing Page รองรับการค้นหาและการเลือกซื้อได้ดีขึ้น',
      ],
      outcome: 'Organic Visibility และโอกาสการค้นพบจาก Search เพิ่มขึ้นอย่างต่อเนื่อง',
    },
  },
]
