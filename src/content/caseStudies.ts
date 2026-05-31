export type CaseStudy = {
  slug: string
  projectName: string
  image: string
  industry: string
  service: string
  channel: string
  duration: string
  result: string
  businessImpact: string
  card: {
    challenge: string
    actions: string[]
    results: string[]
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ranking-growth',
    projectName: 'อันดับ #5 → #1',
    image: '/proof/ranking-bangsaen-serp.png',
    industry: 'Local / Commercial Search',
    service: 'SEO Strategy',
    channel: 'Google Organic Search',
    duration: '3 เดือน',
    result: '#5 → #1 Ranking',
    businessImpact: 'เพิ่มโอกาสการเข้าถึงลูกค้าจากคีย์เวิร์ดที่มีการแข่งขันสูง',
    card: {
      challenge:
        'คำค้นหลักมี Search Demand สูงและมูลค่าทางธุรกิจมาก แต่เว็บไซต์ยังตามหลังคู่แข่งที่อยู่อันดับต้น',
      actions: [
        'ปรับเนื้อหาให้ตอบโจทย์ Search Intent และกระบวนการตัดสินใจของลูกค้า',
        'เสริม Internal Link, Footer Content และ Supporting Content เพื่อเพิ่ม Topical Authority',
        'ใช้ Backlink Support เพื่อเพิ่มความน่าเชื่อถือของหน้าเป้าหมาย',
      ],
      results: [
        'อันดับขึ้นจาก #5 สู่ #1 สำหรับคำค้นที่มีการแข่งขันสูง',
        'เพิ่มโอกาสการมองเห็นและการเข้าถึงลูกค้าจาก Organic Search',
        'เว็บไซต์มีการมองเห็นในผลค้นหาที่มีมูลค่าทางธุรกิจสูง',
      ],
    },
  },
  {
    slug: 'chatgpt-visibility',
    projectName: 'ถูก ChatGPT แนะนำ',
    image: '/proof/chatgpt-product-recommendation.png',
    industry: 'Product / Recommendation Search',
    service: 'GEO',
    channel: 'ChatGPT / AI Search',
    duration: '6 เดือน',
    result: 'ChatGPT Mention',
    businessImpact: 'เพิ่มโอกาสให้แบรนด์ถูกกล่าวถึงในการตอบคำถามของ AI',
    card: {
      challenge:
        'AI Search ยังไม่เข้าใจความเชี่ยวชาญของเว็บไซต์ ทำให้ไม่ถูกอ้างอิงเมื่อลูกค้าถามคำถามที่เกี่ยวข้อง',
      actions: [
        'สร้าง Topic Authority รอบสินค้าและปัญหาที่ลูกค้ากำลังมองหา',
        'เชื่อมโยงเนื้อหาเป็น Content Cluster เพื่อให้ AI เข้าใจความเชี่ยวชาญของแบรนด์',
        'ทำให้ข้อมูลแบรนด์ สินค้า และบริบทการใช้งานชัดเจนและเข้าถึงได้ง่ายขึ้น',
      ],
      results: [
        'แบรนด์ถูก ChatGPT กล่าวถึงในการตอบคำถามผู้ใช้งาน',
        'เพิ่มโอกาสการค้นพบแบรนด์ผ่าน AI Search',
        'สร้าง Topic Authority ที่ AI สามารถนำไปอ้างอิงได้อย่างต่อเนื่อง',
      ],
    },
  },
  {
    slug: 'ai-overview-visibility',
    projectName: 'ติด AI Overview',
    image: '/proof/google-ai-overview-visibility.png',
    industry: 'AI Answer Search',
    service: 'AEO',
    channel: 'Google AI Overview',
    duration: '3 เดือน',
    result: 'AI Overview',
    businessImpact: 'เพิ่มโอกาสให้แบรนด์ถูกมองเห็นเหนือผลการค้นหาแบบปกติ',
    card: {
      challenge:
        'เว็บไซต์มีขนาดเล็กกว่าคู่แข่งในผลการค้นหา แต่ต้องการเพิ่มโอกาสปรากฏใน AI Overview',
      actions: [
        'ใช้ AEO เพื่อปรับโครงสร้างเนื้อหาให้ตอบคำถามได้ชัดเจนและตรงประเด็นมากขึ้น',
        'เพิ่ม FAQ และ Question Coverage รอบ Intent สำคัญที่ผู้ค้นหาสนใจ',
        'จัดโครงสร้างคำตอบให้ Google สามารถเข้าใจและนำไปแสดงใน AI Overview ได้ง่ายขึ้น',
      ],
      results: [
        'เนื้อหาถูกนำไปแสดงใน Google AI Overview',
        'เพิ่มโอกาสมองเห็นเหนือผลการค้นหาแบบ Blue Link ปกติ',
        'เว็บไซต์ขนาดเล็กสามารถแข่งขันในพื้นที่ AI Search กับผู้เล่นรายใหญ่ได้',
      ],
    },
  },
  {
    slug: 'organic-growth',
    projectName: 'Organic โตต่อเนื่อง',
    image: '/proof/gsc-product-listing-growth.png',
    industry: 'Ecommerce / Product Listing',
    service: 'Technical SEO',
    channel: 'Google Search Console',
    duration: '6 เดือน',
    result: 'Organic Growth',
    businessImpact:
      'เพิ่มโอกาสในการเข้าถึงลูกค้าผ่าน Organic Search หลังปรับ Product Listing Architecture',
    card: {
      challenge:
        'เว็บไซต์ที่มีมานานแต่ขาด SEO พื้นฐาน ทำให้ Product Listing Page ไม่ถูก Index อย่างสมบูรณ์และพลาดโอกาสจากการค้นหา',
      actions: [
        'ทำ Technical Audit เพื่อหาสิ่งที่ขวางการ Index และการเติบโตของ Organic Traffic',
        'ปรับ Metadata, Internal Link และ Information Architecture ให้รองรับ Search Intent',
        'ปรับ Product Listing Page ให้รองรับการค้นหาและกระบวนการตัดสินใจของลูกค้าได้ดีขึ้น',
      ],
      results: [
        'Organic Traffic เติบโตต่อเนื่องหลังปรับโครงสร้างเว็บไซต์',
        'Product Listing Page รองรับ Search Intent ได้ดีขึ้นและถูก Index ครบถ้วน',
        'เพิ่มโอกาสในการเข้าถึงลูกค้าจาก Google Search อย่างเป็นระบบ',
      ],
    },
  },
]
