import { useEffect } from 'react'

import { brand } from '../data/site'

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>

type SeoProps = {
  title: string
  description: string
  canonical: string
  jsonLd?: JsonLd
}

function upsertMeta(selector: string, key: 'name' | 'property', value: string) {
  const existing = document.head.querySelector<HTMLMetaElement>(selector)
  if (existing) {
    existing.setAttribute('content', value)
    return
  }

  const tag = document.createElement('meta')
  tag.setAttribute(key, selector.includes('[property=') ? 'property' : 'name')
  const match = selector.match(/\[(?:name|property)="([^"]+)"\]/)
  if (match?.[1]) {
    tag.setAttribute(key, match[1])
  }
  tag.setAttribute('content', value)
  document.head.appendChild(tag)
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`
  const existing = document.head.querySelector<HTMLLinkElement>(selector)
  if (existing) {
    existing.setAttribute('href', href)
    return
  }

  const tag = document.createElement('link')
  tag.setAttribute('rel', rel)
  tag.setAttribute('href', href)
  document.head.appendChild(tag)
}

export function Seo({ title, description, canonical, jsonLd }: SeoProps) {
  const canonicalUrl = `https://seniorandlivingtoday.com${canonical}`

  useEffect(() => {
    document.title = `${title} | ${brand.name}`

    upsertMeta('meta[name="description"]', 'name', description)
    upsertMeta('meta[property="og:title"]', 'property', `${title} | ${brand.name}`)
    upsertMeta('meta[property="og:description"]', 'property', description)
    upsertMeta('meta[property="og:type"]', 'property', 'website')
    upsertMeta('meta[property="og:url"]', 'property', canonicalUrl)
    upsertMeta('meta[name="twitter:card"]', 'name', 'summary_large_image')

    upsertLink('canonical', canonicalUrl)

    const existingJsonLd = document.head.querySelector<HTMLScriptElement>(
      'script[data-sal-structured-data="true"]',
    )
    if (existingJsonLd) {
      existingJsonLd.remove()
    }

    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-sal-structured-data', 'true')
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [canonicalUrl, description, jsonLd, title])

  return null
}

