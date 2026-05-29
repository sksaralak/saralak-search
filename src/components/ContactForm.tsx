const interests = [
  'Discovery Audit',
  'SEO Retainer รายเดือน',
  'AEO / GEO',
  'Agency Partner Support',
  'Google Maps Optimization',
  'Recruiter / Contract Role',
]

const budgets = [
  'Under 10,000 THB',
  '10,000-25,000 THB',
  '25,000-40,000 THB',
  '40,000+ THB',
  'Project-based',
  'Not sure yet',
]

export default function ContactForm() {
  return (
    <form className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-950/5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-neutral-900">
          ชื่อ
          <input className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900">
          บริษัท / ธุรกิจ
          <input className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900">
          เว็บไซต์
          <input className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900">
          บริการที่สนใจ
          <select className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800">
            {interests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900 md:col-span-2">
          งบประมาณ
          <select className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800">
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900 md:col-span-2">
          ข้อความ
          <textarea
            rows={6}
            className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800"
          />
        </label>
      </div>
      <button
        type="button"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-teal-900 bg-teal-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
      >
        ส่งข้อความ
      </button>
      <p className="mt-3 text-sm leading-6 text-neutral-600">
        หากต้องการคำตอบเร็ว แนะนำให้ติดต่อผ่าน LINE หรืออีเมลก่อน
      </p>
      <p className="thai-readable mt-1 text-sm text-neutral-600">
        ส่ง URL เว็บไซต์หรือปัญหา SEO ที่เจออยู่ตอนนี้มาได้เลย
      </p>
    </form>
  )
}
