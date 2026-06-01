import { Link } from 'react-router-dom'

import { Container, SiteFooter, SiteHeader } from '../components/layout'

export function NotFoundPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-ivory-50">
        <Container className="py-24">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
              Page not found
            </p>
            <h1 className="mt-4 font-heading text-5xl text-charcoal">
              The page you requested could not be found.
            </h1>
            <p className="mt-4 text-base leading-8 text-stone-600">
              Use the navigation to get back to the home page, blog, shop, or
              contact section.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Go Home
            </Link>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  )
}

