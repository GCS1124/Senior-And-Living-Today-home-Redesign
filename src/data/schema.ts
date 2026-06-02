import { brand, contact } from './site'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    alternateName: brand.shortName,
    url: 'https://seniorandlivingtoday.com/',
    email: contact.email,
    telephone: contact.phoneDisplay,
    logo: 'https://seniorandlivingtoday.com/favicon-192.png',
  }
}

export function localBusinessSchema(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: brand.name,
    url: pageUrl,
    email: contact.email,
    telephone: contact.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'P O Box 15',
      addressLocality: 'Dayton',
      addressRegion: 'Ohio',
      postalCode: '45404',
      addressCountry: 'US',
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brand.name,
    url: 'https://seniorandlivingtoday.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://seniorandlivingtoday.com/blog/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

export function productSchema({
  name,
  description,
  image,
  price,
  url,
}: {
  name: string
  description: string
  image: string
  price: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    url,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price,
      availability: 'https://schema.org/InStock',
      url,
    },
  }
}

export function blogPostingSchema({
  title,
  description,
  image,
  url,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  image: string
  url: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: brand.name,
    },
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://seniorandlivingtoday.com/favicon-192.png',
      },
    },
  }
}

export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqPageSchema(
  questions: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function videoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  url,
  duration,
}: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  url: string
  duration: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    embedUrl: url,
    url,
  }
}
