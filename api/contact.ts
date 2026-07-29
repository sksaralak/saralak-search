/// <reference types="node" />

function isValidWebsite(value: string) {
  if (!value) return true
  if (!/^(https?:\/\/)/i.test(value)) {
    return /^[^\s.]+\.[^\s]+/.test(value)
  }
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

function normalizeWebsite(value: string) {
  if (!value) return ''
  if (/^https?:\/\//i.test(value)) return value
  return `https://${value}`
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'method_not_allowed' })
    return
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL
  if (!scriptUrl) {
    console.error('[contact] GOOGLE_SCRIPT_URL is not configured')
    res.status(500).json({ success: false, error: 'server_not_configured' })
    return
  }

  let payload: Record<string, unknown>
  try {
    payload = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {})
  } catch {
    res.status(400).json({ success: false, error: 'invalid_body' })
    return
  }

  const name = String(payload.name ?? '').trim()
  const email = String(payload.email ?? '').trim()
  const company = String(payload.company ?? '').trim()
  const website = String(payload.website ?? '').trim()
  const interest = String(payload.interest ?? '').trim()
  const budget = String(payload.budget ?? '').trim()
  const message = String(payload.message ?? '').trim()
  const honeypot = String(payload._hp ?? '').trim()
  const pagePath = String(payload.pagePath ?? '').trim()
  const pageUrl = String(payload.pageUrl ?? '').trim()

  // Bots that fill the hidden honeypot field get a fake success without ever hitting Google Script.
  if (honeypot) {
    res.status(200).json({ success: true })
    return
  }

  if (!name) {
    res.status(400).json({ success: false, error: 'name_required' })
    return
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ success: false, error: 'email_invalid' })
    return
  }
  if (!company) {
    res.status(400).json({ success: false, error: 'company_required' })
    return
  }
  if (!isValidWebsite(website)) {
    res.status(400).json({ success: false, error: 'website_invalid' })
    return
  }

  const body = new URLSearchParams({
    timestamp: new Date().toISOString(),
    name,
    email,
    company,
    website: normalizeWebsite(website),
    interest,
    budget,
    message,
    source: 'Saralak Search Contact Form',
    pagePath,
    pageUrl,
  })

  try {
    const upstream = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: body.toString(),
    })

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => '')
      console.error('[contact] Google Script returned non-OK status', upstream.status, text)
      res.status(502).json({ success: false, error: 'upstream_failed' })
      return
    }

    res.status(200).json({ success: true })
  } catch (error) {
    console.error('[contact] Failed to reach Google Script', error)
    res.status(502).json({ success: false, error: 'upstream_unreachable' })
  }
}
