import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { brand } from '../content/site'

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

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

type FormState = {
  name: string
  email: string
  company: string
  website: string
  interest: string
  budget: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  website: '',
  interest: interests[0],
  budget: budgets[0],
  message: '',
}

function isValidUrl(value: string) {
  if (!value.trim()) return true
  if (!/^(https?:\/\/)/i.test(value.trim())) {
    return /^[^\s.]+\.[^\s]+/.test(value.trim())
  }
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

function normalizeWebsite(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return ''
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [feedback, setFeedback] = useState('')

  const scriptUrl = useMemo(() => import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim() ?? '', [])
  const isSubmitDisabled = status === 'submitting'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.name.trim()) {
      setStatus('error')
      setFeedback('กรุณากรอกชื่อของคุณ')
      return
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus('error')
      setFeedback('กรุณากรอกอีเมลที่ถูกต้อง')
      return
    }

    if (!form.company.trim()) {
      setStatus('error')
      setFeedback('กรุณากรอกชื่อบริษัทหรือธุรกิจ')
      return
    }

    if (!isValidUrl(form.website)) {
      setStatus('error')
      setFeedback('กรุณากรอก URL เว็บไซต์ที่ถูกต้อง')
      return
    }

    if (!scriptUrl) {
      setStatus('error')
      setFeedback('ยังไม่ได้ตั้งค่า Google Script URL')
      return
    }

    setStatus('submitting')
    setFeedback('')

    const body = new URLSearchParams({
      timestamp: new Date().toISOString(),
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      website: normalizeWebsite(form.website),
      interest: form.interest,
      budget: form.budget,
      message: form.message.trim(),
      source: 'Saralak Search Contact Form',
      pagePath: window.location.pathname,
      pageUrl: window.location.href,
    })

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: body.toString(),
      })

      setStatus('success')
      setFeedback('ส่งข้อมูลเรียบร้อยแล้ว จะติดต่อกลับผ่าน LINE หรืออีเมลโดยเร็ว')
      setForm(initialState)
    } catch {
      setStatus('error')
      setFeedback('ส่งข้อมูลไม่สำเร็จ กรุณาลองอีกครั้งหรือติดต่อผ่าน LINE / อีเมล')
    }
  }

  return (
    <form
      className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-950/5"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-neutral-900">
          ชื่อ
          <input
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900">
          อีเมล
          <input
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900">
          บริษัท / ธุรกิจ
          <input
            value={form.company}
            onChange={(event) =>
              setForm((current) => ({ ...current, company: event.target.value }))
            }
            className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800"
            autoComplete="organization"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900">
          เว็บไซต์
          <input
            value={form.website}
            onChange={(event) =>
              setForm((current) => ({ ...current, website: event.target.value }))
            }
            className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800"
            placeholder="example.com or https://example.com"
            inputMode="url"
            autoComplete="url"
          />
          <span className="text-xs font-normal leading-5 text-neutral-500">
            ถ้าเว็บไซต์ยังเป็น HTTP ให้ใส่ http:// มาด้วย
          </span>
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900">
          บริการที่สนใจ
          <select
            value={form.interest}
            onChange={(event) =>
              setForm((current) => ({ ...current, interest: event.target.value }))
            }
            className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800"
          >
            {interests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900 md:col-span-2">
          งบประมาณ
          <select
            value={form.budget}
            onChange={(event) => setForm((current) => ({ ...current, budget: event.target.value }))}
            className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800"
          >
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-900 md:col-span-2">
          ข้อความ
          <textarea
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            rows={6}
            className="rounded-md border border-neutral-300 px-4 py-3 text-neutral-950 outline-teal-800"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-teal-900 bg-teal-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'กำลังส่ง...' : 'ส่งข้อมูล'}
      </button>

      <p className="mt-3 text-sm leading-6 text-neutral-600">
        หากต้องการคำตอบเร็ว แนะนำให้ติดต่อผ่าน LINE หรืออีเมลก่อน
      </p>
      <p className="thai-readable mt-1 text-sm text-neutral-600">
        ส่ง URL เว็บไซต์หรือปัญหา SEO ที่เจอมาได้เลย
      </p>

      {feedback ? (
        <p
          className={`mt-4 rounded-md border px-4 py-3 text-sm leading-6 ${
            status === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
              : 'border-rose-200 bg-rose-50 text-rose-800'
          }`}
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      ) : null}

      <p className="mt-3 text-xs leading-5 text-neutral-500">
        ข้อมูลจะถูกส่งไปยัง Google Sheets ผ่าน Google Apps Script ของบัญชี {brand.name}
      </p>
    </form>
  )
}
