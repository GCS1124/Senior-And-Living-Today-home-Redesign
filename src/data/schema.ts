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
