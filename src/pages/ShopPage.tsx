import { useState } from 'react'

import { contact, products, shopSections } from '../data/site'
import { productSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  PageHero,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { BulletList, ProductCard } from '../components/content'
import { Seo } from '../components/seo'

function FreeMembershipCard() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div
      id="free-daily-planner"
      className="rounded-[2rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
        Free membership offer
      </p>
      <h3 className="mt-3 font-heading text-4xl leading-tight">
        {shopSections.membership.title}
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
        {shopSections.membership.summary}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Enter your email"
          className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-stone-400 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-300/30"
        />
        <ActionButton
          type="button"
          variant="primary"
          onClick={() => setSubmitted(Boolean(email))}
        >
          {shopSections.membership.cta}
        </ActionButton>
      </div>
      {submitted ? (
        <p className="mt-4 text-sm leading-7 text-sage-100">
          Thanks. This lead capture is ready to be connected to your email or
          membership platform.
        </p>
      ) : null}
    </div>
  )
}

export function ShopPage() {
  return (
    <>
      <Seo
        title="Shop / Planners"
        description="Shop the Living Legacy Planner, Relics of the Century, the Final Arrangement Discussion Guide, and the free daily planner offer."
        canonical="/shop/"
        jsonLd={products.map((product) =>
          productSchema({
            name: product.title,
            description: product.summary,
            image: product.image,
            price: product.price.replace('$', ''),
            url: `https://seniorandlivingtoday.com${product.href}`,
          }),
        )}
      />
      <SiteHeader />
      <main>
        <PageHero
          title="Planners, books, and free resources that turn planning into progress"
          summary="The shop area keeps the core offers visible while making the free membership and planner download easy to find."
          primaryAction={{ label: 'Buy the Planner', to: '/shop/#living-legacy-planner' }}
          secondaryAction={{ label: 'Download Free Planner', to: '/shop/#free-daily-planner' }}
          image={products[0].image}
          imageAlt="The Living Legacy Planner on a warm tabletop"
          aside={
            <div className="grid gap-3 rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm sm:grid-cols-3">
              {[
                'Free daily planner and membership offer',
                'Living Legacy Planner',
                'Relics of the Century',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] bg-ivory-50 px-4 py-4 text-sm leading-7 text-stone-600"
                >
                  {item}
                </div>
              ))}
            </div>
          }
        />

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
                <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <SectionHeading
                    eyebrow="Start here"
                    title="Unlock Free Membership"
                    summary="Use the free daily planner offer to start building trust and keep senior-friendly tools in reach."
                  />
                  <BulletList
                    items={[
                      'Easy access to a daily planning tool',
                      'Helpful updates and resource reminders',
                      'A calm entry point for new visitors',
                    ]}
                  />
                </div>
                <FreeMembershipCard />
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-2">
                {products.map((product) => (
                  <div key={product.slug} id={product.slug}>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
              <div
                id="final-arrangement-guide"
                className="mt-6 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft"
              >
                <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="bg-charcoal p-8 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
                      Final Arrangement 10 Point Discussion Guide
                    </p>
                    <h3 className="mt-3 font-heading text-4xl leading-tight">
                      {shopSections.discussionGuide.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-stone-300">
                      {shopSections.discussionGuide.summary}
                    </p>
                    <ActionButton
                      to="/contact/?service=Shop%20%2F%20Planners"
                      variant="secondary"
                      className="mt-6 bg-white text-charcoal"
                    >
                      {shopSections.discussionGuide.cta}
                    </ActionButton>
                  </div>
                  <img
                    src={shopSections.relics.image}
                    alt={shopSections.relics.title}
                    className="h-full min-h-[22rem] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-[1fr_0.9fr] lg:p-8">
                <div className="space-y-5">
                  <SectionHeading
                    eyebrow="Need help choosing?"
                    title="The store link stays visible for quick access"
                    summary="You can keep the external store link in the footer and also route people here when they want product-specific help."
                  />
                  <ActionButton
                    href={contact.storeUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                  >
                    Visit {contact.storeLabel}
                  </ActionButton>
                </div>
                <div className="rounded-[2rem] border border-stone-200 bg-ivory-50 p-6">
                  <p className="text-sm leading-7 text-stone-600">
                    A premium shop page should make it easy for visitors to move
                    between free resources, featured products, and direct
                    consultation when they need a personal recommendation.
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
