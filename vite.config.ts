import type { IncomingMessage, ServerResponse } from 'node:http'

import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

import { processContactSubmission } from './src/lib/contact-email'

function contactApiPlugin(): Plugin {
  return {
    name: 'contact-api-middleware',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.statusCode = 204
          res.setHeader('Cache-Control', 'no-store')
          res.end()
          return
        }

        if (req.method !== 'POST') {
          writeJson(res, 405, {
            ok: false,
            error: 'Method not allowed.',
          })
          return
        }

        try {
          const body = await readJsonBody(req)
          const result = await processContactSubmission(body, {
            RESEND_API_KEY: process.env.RESEND_API_KEY,
            CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
            CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
            NODE_ENV: process.env.NODE_ENV,
          })

          writeJson(res, result.status, result.body)
        } catch (error) {
          if (error instanceof Error && error.message === 'Invalid JSON payload.') {
            writeJson(res, 400, {
              ok: false,
              error: 'Invalid JSON payload.',
            })
            return
          }

          writeJson(res, 500, {
            ok: false,
            error: 'Unexpected server error while sending the message.',
          })
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
})

async function readJsonBody(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = []

  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }

  const rawBody = Buffer.concat(chunks).toString('utf8').trim()

  if (!rawBody) {
    return null
  }

  try {
    return JSON.parse(rawBody) as unknown
  } catch {
    throw new Error('Invalid JSON payload.')
  }
}

function writeJson(
  res: ServerResponse,
  statusCode: number,
  payload: unknown,
): void {
  const body = JSON.stringify(payload)

  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Length', Buffer.byteLength(body))
  res.end(body)
}
