import { useState } from 'react'

import { contact, products, shopSections, storeCategories } from '../data/site'
import { productSchema } from '../data/schema'
import {
  ActionButton,
  Container,
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
      className="rounded-[2rem] border border-sage-100 bg-charcoal p-6 text-white shadow-soft sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
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
          className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-stone-400 outline-none transition focus:border-sage-400 focus:ring-2 focus:ring-sage-300/30"
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
        title="Store"
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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,237,173,0.24),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.12),_transparent_28%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.98fr_1.02fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Store
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  Planners, books, and free resources that turn planning into
                  progress
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  The shop area keeps the core offers visible while making the
                  free membership and planner download easy to find.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton
                  to="/shop/#living-legacy-planner"
                  variant="primary"
                >
                  Buy the Planner
                </ActionButton>
                <ActionButton
                  to="/shop/#free-daily-planner"
                  variant="secondary"
                >
                  Download Free Planner
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  'Free daily planner and membership offer',
                  'Living Legacy Planner',
                  'Relics of the Century',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-stone-200 bg-white/92 px-4 py-4 text-sm leading-7 text-stone-600 shadow-sm backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="grid gap-4 rounded-[2.2rem] border border-stone-200 bg-white p-4 shadow-soft sm:grid-cols-2">
                <div className="overflow-hidden rounded-[1.6rem] bg-charcoal text-white shadow-soft sm:col-span-2">
                  <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                        Featured planner
                      </p>
                      <h2 className="mt-3 font-heading text-4xl leading-tight">
                        {shopSections.planner.title}
                      </h2>
                      <p className="mt-4 text-base leading-8 text-stone-300">
                        {shopSections.planner.summary}
                      </p>
                    </div>
                    <img
                      src={shopSections.planner.image}
                      alt={shopSections.planner.title}
                      className="h-full min-h-[16rem] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="rounded-[1.6rem] bg-ivory-50 p-5 text-charcoal">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Nostalgic book
                  </p>
                  <h3 className="mt-3 font-heading text-3xl">
                    {shopSections.relics.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-stone-600">
                    {shopSections.relics.summary}
                  </p>
                </div>
                <div className="rounded-[1.6rem] bg-sage-50 p-5 text-charcoal">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Discussion guide
                  </p>
                  <h3 className="mt-3 font-heading text-3xl">
                    Final Arrangement 10 Point Discussion Guide
                  </h3>
                  <p className="mt-3 text-base leading-8 text-stone-600">
                    A practical guide to help families talk clearly about final
                    wishes and arrangements.
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr]">
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
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="Featured resources"
                  title="The planners and books stay front and center"
                  summary="The shop keeps the product story visible while still giving visitors a direct path to the free membership offer."
                />
                <ActionButton href={contact.storeUrl} target="_blank" rel="noreferrer" variant="link" icon={false}>
                  Visit {contact.storeLabel}
                </ActionButton>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.slug} {...product} />
                ))}
              </div>
              <div
                id="final-arrangement-guide"
                className="mt-6 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft"
              >
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="bg-charcoal p-8 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      Final Arrangement 10 Point Discussion Guide
                    </p>
                    <h3 className="mt-3 font-heading text-4xl leading-tight">
                      {shopSections.discussionGuide.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-stone-300">
                      {shopSections.discussionGuide.summary}
                    </p>
                    <ActionButton
                      to="/contact/?service=Store"
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

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Store categories"
                title="The storefront is organized around the things families actually search for"
                summary="A category-first structure makes it easier to move from the site to the store, and then back to resources and support."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {storeCategories.map((item, index) => (
                  <div
                    key={item}
                    className={
                      index % 2 === 0
                        ? 'rounded-[1.6rem] border border-stone-200 bg-white p-5 shadow-soft'
                        : 'rounded-[1.6rem] border border-stone-200 bg-sage-50 p-5 shadow-soft'
                    }
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Store category
                    </p>
                    <p className="mt-3 font-heading text-2xl leading-tight text-charcoal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-[0.94fr_1.06fr] lg:p-8">
                <div className="space-y-5">
                  <SectionHeading
                    eyebrow="Need help choosing?"
                    title="The store link stays visible for quick access"
                    summary="You can keep the external store link in the footer and also route people here when they want product-specific help."
                  />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton
                      href={contact.storeUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="primary"
                    >
                      Visit {contact.storeLabel}
                    </ActionButton>
                    <ActionButton to="/contact/?service=Store" variant="secondary">
                      Ask for a recommendation
                    </ActionButton>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: 'Start with the planner',
                      text: 'Best if you want one calm first step and a clear place to begin.',
                    },
                    {
                      title: 'Browse by need',
                      text: 'Use the category list to match products to a caregiving or planning goal.',
                    },
                    {
                      title: 'Ask for help',
                      text: 'When the choice feels uncertain, a consultation can narrow it down.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.4rem] border border-stone-200 bg-ivory-50 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                        Quick path
                      </p>
                      <h3 className="mt-3 font-heading text-2xl leading-tight text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-stone-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
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
