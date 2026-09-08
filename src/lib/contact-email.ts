export type ContactSubmission = {
  name: string
  email: string
  phone: string
  serviceInterest: string
  message: string
  marketingSms: boolean
  nonMarketingSms: boolean
}

type ContactSubmissionInput = Record<string, unknown>

export type ContactEmailEnv = {
  RESEND_API_KEY?: string
  CONTACT_FROM_EMAIL?: string
  CONTACT_TO_EMAIL?: string
  NODE_ENV?: string
}

export type ContactApiResponse =
  | {
      ok: true
      message: string
      messageId?: string
    }
  | {
      ok: false
      error: string
    }

type SendEmailResult =
  | {
      ok: true
      messageId?: string
      message?: string
    }
  | {
      ok: false
      status: number
      error: string
    }

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

export function parseContactSubmission(
  input: unknown,
): { submission: ContactSubmission | null; error?: string } {
  if (!input || typeof input !== 'object') {
    return {
      submission: null,
      error: 'Invalid form submission.',
    }
  }

  const data = input as ContactSubmissionInput
  const name = normalizeText(data.name)
  const email = normalizeText(data.email)
  const phone = normalizeText(data.phone)
  const serviceInterest = normalizeText(data.serviceInterest)
  const message = normalizeText(data.message)
  const marketingSms = normalizeBoolean(data.marketingSms)
  const nonMarketingSms = normalizeBoolean(data.nonMarketingSms)

  if (!name || !email || !serviceInterest || !message) {
    return {
      submission: null,
      error:
        'Please complete your name, email, service interest, and message before sending.',
    }
  }

  if (!isValidEmail(email)) {
    return {
      submission: null,
      error: 'Please enter a valid email address.',
    }
  }

  return {
    submission: {
      name,
      email,
      phone,
      serviceInterest,
      message,
      marketingSms,
      nonMarketingSms,
    },
  }
}

export async function processContactSubmission(
  input: unknown,
  env: ContactEmailEnv,
): Promise<{ status: number; body: ContactApiResponse }> {
  const parsed = parseContactSubmission(input)

  if (!parsed.submission) {
    return {
      status: 400,
      body: {
        ok: false,
        error: parsed.error ?? 'Please review the form and try again.',
      },
    }
  }

  const result = await sendContactEmail(parsed.submission, env)

  if (result.ok === false) {
    return {
      status: result.status,
      body: {
        ok: false,
        error: result.error,
      },
    }
  }

  return {
    status: 200,
    body: {
      ok: true,
      message:
        result.message ?? 'Thanks. Your message has been sent to the S.A.L.T. team.',
      messageId: result.messageId,
    },
  }
}

async function sendContactEmail(
  submission: ContactSubmission,
  env: ContactEmailEnv,
): Promise<SendEmailResult> {
  const apiKey = env.RESEND_API_KEY?.trim()
  const from = env.CONTACT_FROM_EMAIL?.trim()
  const to = normalizeRecipientList(env.CONTACT_TO_EMAIL)

  if (!apiKey || !from || to.length === 0) {
    if (env.NODE_ENV !== 'production') {
      console.warn(
        '[contact-email] Resend is not configured. Logging contact submission locally for development.',
        submission,
      )

      return {
        ok: true,
        messageId: 'development-mock',
        message:
          'Message captured locally in development. Add RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL to enable live email delivery.',
      }
    }

    return {
      ok: false,
      status: 503,
      error:
        'Email service is not configured yet. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL to enable form delivery.',
    }
  }

  const subject = `New S.A.L.T. inquiry from ${submission.name}`
  const text = buildPlainTextEmail(submission)
  const html = buildHtmlEmail(submission)

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: to.length === 1 ? to[0] : to,
      reply_to: submission.email,
      subject,
      text,
      html,
    }),
  })

  if (!response.ok) {
    const errorText = await readErrorMessage(response)

    return {
      ok: false,
      status: response.status >= 500 ? 502 : response.status,
      error: `The email provider rejected the message. ${errorText}`,
    }
  }

  const data = (await response.json()) as { id?: string }

  return {
    ok: true,
    messageId: data.id,
  }
}

function normalizeText(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function normalizeBoolean(value: unknown): boolean {
  return (
    value === true ||
    value === 'true' ||
    value === 'on' ||
    value === 1 ||
    value === '1'
  )
}

function normalizeRecipientList(value: string | undefined): string[] {
  if (!value) {
    return []
  }

  return value
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean)
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function buildPlainTextEmail(submission: ContactSubmission): string {
  return [
    'New S.A.L.T. contact form submission',
    '',
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone || 'Not provided'}`,
    `Service interest: ${submission.serviceInterest}`,
    `Marketing SMS consent: ${submission.marketingSms ? 'Yes' : 'No'}`,
    `Non-marketing SMS consent: ${submission.nonMarketingSms ? 'Yes' : 'No'}`,
    '',
    'Message:',
    submission.message,
  ].join('\n')
}

function buildHtmlEmail(submission: ContactSubmission): string {
  const rows = [
    ['Name', submission.name],
    ['Email', submission.email],
    ['Phone', submission.phone || 'Not provided'],
    ['Service interest', submission.serviceInterest],
    [
      'Marketing SMS consent',
      submission.marketingSms ? 'Yes' : 'No',
    ],
    [
      'Non-marketing SMS consent',
      submission.nonMarketingSms ? 'Yes' : 'No',
    ],
  ]

  return `
    <div style="font-family: Arial, sans-serif; color: #252525; line-height: 1.6; background: #faf7f1; padding: 24px;">
      <div style="max-width: 720px; margin: 0 auto; background: #ffffff; border: 1px solid #e8e2d8; border-radius: 24px; padding: 28px;">
        <p style="margin: 0 0 12px; font-size: 12px; letter-spacing: 0.24em; text-transform: uppercase; color: #a67c2f;">
          Senior &amp; Living Today
        </p>
        <h1 style="margin: 0 0 20px; font-size: 28px; line-height: 1.2;">New contact form submission</h1>
        <table role="presentation" cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 10px 0; width: 220px; font-weight: 700; vertical-align: top; border-bottom: 1px solid #f0e9dd;">${escapeHtml(
                    label,
                  )}</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0e9dd;">${escapeHtml(
                    value,
                  )}</td>
                </tr>
              `,
            )
            .join('')}
        </table>
        <div style="border-radius: 20px; border: 1px solid #e8e2d8; background: #faf7f1; padding: 18px;">
          <div style="font-weight: 700; margin-bottom: 8px;">Message</div>
          <div style="white-space: pre-wrap;">${escapeHtml(submission.message)}</div>
        </div>
      </div>
    </div>
  `
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

async function readErrorMessage(response: Response): Promise<string> {
  try {
    const text = await response.text()
    if (!text.trim()) {
      return `Status ${response.status}.`
    }

    try {
      const parsed = JSON.parse(text) as { message?: string; error?: string }
      const message = parsed.message ?? parsed.error
      return message ? `${message} (status ${response.status}).` : `Status ${response.status}.`
    } catch {
      return `${text.trim()} (status ${response.status}).`
    }
  } catch {
    return `Status ${response.status}.`
  }
}
