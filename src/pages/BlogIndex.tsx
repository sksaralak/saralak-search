import CTAButton from '../components/CTAButton'
import BlogCard from '../components/BlogCard'
import SEO from '../components/SEO'
import { blogPosts } from '../content/blog'

export default function BlogIndex() {
  return (
    <main>
      <SEO
        title="บทความความรู้ SEO, GEO และ AI Search | Saralak Search"
        description="บทความความรู้จาก Saralak Search เรื่อง SEO, AEO, GEO, Google Search, AI Overview และ ChatGPT Visibility สำหรับธุรกิจที่ต้องการเพิ่มการมองเห็นบน Search ยุคใหม่"
        path="/blog"
        image="/image/og/saralak-search-blog-og.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Blog',
              name: 'Saralak Search Blog',
              description:
                'Practical insights on Google Search, AI Overviews, ChatGPT visibility, AEO and GEO.',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://saralak-search.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: 'https://saralak-search.com/blog',
                },
              ],
            },
          ],
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-teal-800">Blog</p>
          <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            SEO, AEO &amp; GEO Insights
          </h1>
          <p className="thai-readable mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            บทความความรู้จาก Saralak Search เรื่อง Google Search, AI Overview, ChatGPT Visibility, AEO, GEO และกลยุทธ์ Search ยุคใหม่ สำหรับธุรกิจที่ต้องการเพิ่มการมองเห็นอย่างยั่งยืน
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/services">ดูบริการทั้งหมด</CTAButton>
            <CTAButton to="/discovery-audit" variant="secondary">
              เริ่มต้นด้วย Discovery Audit
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[...blogPosts].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate)).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['เกี่ยวกับ Saralak Search', '/about', 'รู้จักผู้เชี่ยวชาญด้าน SEO, AEO และ GEO เบื้องหลัง Saralak Search'],
            ['บริการ', '/services', 'ดูว่า SEO, AEO และ GEO Service มีโครงสร้างอย่างไร'],
            ['Discovery Audit', '/discovery-audit', 'เริ่มต้นด้วยการค้นหาโอกาสเพิ่มการมองเห็น'],
          ].map(([title, href, description]) => (
            <article key={href} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
              <h2 className="text-lg font-semibold text-neutral-950">{title}</h2>
              <p className="thai-readable mt-2 text-sm leading-6 text-neutral-700">{description}</p>
              <div className="mt-4">
                <CTAButton to={href as string} variant="secondary">
                  ดูเพิ่มเติม
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
