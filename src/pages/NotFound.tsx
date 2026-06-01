import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <SEO
        title="404 — ไม่พบหน้านี้ | Saralak Search"
        description="ไม่พบหน้าที่คุณกำลังมองหา กลับไปยังหน้าหลักหรือดูบทความของเรา"
        path="/404"
      />
      <p className="text-5xl font-bold text-teal-900">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-neutral-950">ไม่พบหน้านี้</h1>
      <p className="thai-readable mt-4 text-neutral-600">
        ลิงก์นี้อาจถูกย้าย ลบ หรือพิมพ์ผิด
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center rounded-md border border-teal-900 bg-teal-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
        >
          กลับหน้าแรก
        </Link>
        <Link
          to="/blog"
          className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-400"
        >
          ดูบทความทั้งหมด
        </Link>
      </div>
    </main>
  )
}
