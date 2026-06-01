import { processContactSubmission } from '../src/lib/contact-email'

export default async function handler(request: Request): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Cache-Control': 'no-store',
      },
    })
  }

  if (request.method !== 'POST') {
    return jsonResponse(
      {
        ok: false,
        error: 'Method not allowed.',
      },
      405,
    )
  }

  try {
    const payload = (await request.json()) as unknown
    const result = await processContactSubmission(payload, {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
      CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
      NODE_ENV: process.env.NODE_ENV,
    })

    return jsonResponse(result.body, result.status)
  } catch {
    return jsonResponse(
      {
        ok: false,
        error: 'Unexpected server error while sending the message.',
      },
      500,
    )
  }
}

function jsonResponse(payload: unknown, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}
