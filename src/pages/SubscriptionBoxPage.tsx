import { BookOpen, CheckCircle2, Gift, Package, Sparkles } from 'lucide-react'

import { contact, plannerFlatlay, subscriptionBox } from '../data/site'
import { breadcrumbSchema, organizationSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { Seo } from '../components/seo'

const boxIncludes = [
  {
    icon: Sparkles,
    title: 'Digital resources',
    text: 'Practical downloads that are easy to open, keep, and revisit.',
  },
  {
    icon: BookOpen,
    title: 'Printed checklists',
    text: 'Simple handouts that can live on the fridge, in a binder, or in a bag.',
  },
  {
    icon: Gift,
    title: 'Product samples',
    text: 'Helpful samples that make the box feel useful, not just promotional.',
  },
  {
    icon: Package,
    title: 'Educational materials',
    text: 'Guidance that supports planning, safety, and everyday senior living.',
  },
] as const

const launchPoints = [
  'A recurring support package shaped around real senior-care needs',
  'Digital and physical resources that can be used right away',
  'A waitlist-first launch so interest can guide the final offer',
] as const

export function SubscriptionBoxPage() {
  return (
    <>
      <Seo
        title={subscriptionBox.title}
        description={subscriptionBox.summary}
        canonical="/subscription-box/"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            {
              name: 'Subscription Box',
              url: 'https://seniorandlivingtoday.com/subscription-box/',
            },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,237,173,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.08),_transparent_30%)]" />
          <Container className="grid gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <Reveal className="space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Future recurring offer
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  {subscriptionBox.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  {subscriptionBox.summary}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton
                  to="/contact/?service=Subscription%20Box"
                  variant="primary"
                >
                  {subscriptionBox.cta}
                </ActionButton>
                <ActionButton to="/community/" variant="secondary">
                  Join the Community
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {['Waitlist', 'Support', 'Coming soon'].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-stone-200 bg-white px-4 py-4 text-sm leading-7 text-stone-600 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/80 bg-white p-4 shadow-[0_24px_60px_rgba(16,35,63,0.14)]">
                <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="rounded-[1.8rem] bg-charcoal p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      What it will be
                    </p>
                    <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                      A monthly package built for practical support
                    </h2>
                    <p className="mt-4 text-base leading-8 text-stone-300">
                      The future box is designed to blend digital convenience
                      with tactile resources that feel useful in daily life.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-[1.8rem] bg-ivory-50">
                    <img
                      src={plannerFlatlay}
                      alt={subscriptionBox.title}
                      className="h-full min-h-[18rem] w-full object-cover"
                    />
                  </div>
                  <div className="rounded-[1.8rem] bg-sage-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Built for
                    </p>
                    <p className="mt-3 text-base leading-8 text-stone-600">
                      Senior households, caregivers, and families who want
                      recurring help that stays practical.
                    </p>
                  </div>
                  <div className="rounded-[1.8rem] bg-ivory-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Launch method
                    </p>
                    <p className="mt-3 text-base leading-8 text-stone-600">
                      Join the waitlist first so the offer can be shaped by
                      actual interest.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Digital</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Printed</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Recurring</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  The offer is designed to be easy to explain and easy to use.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
                <div className="rounded-[2.2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <SectionHeading
                    eyebrow="Why it exists"
                    title="Helpful recurring support should feel concrete"
                    summary="The box is about making support easier to keep in the house, not just easier to click."
                  />
                  <div className="mt-6 space-y-4">
                    {launchPoints.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[1.3rem] bg-ivory-50 px-4 py-4 text-base leading-7 text-stone-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage-700" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2.2rem] border border-[#18304f] bg-[#10233f] p-6 text-white shadow-[0_24px_70px_rgba(16,35,63,0.22)] sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d2a85b]">
                    Included pieces
                  </p>
                  <h2 className="mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl">
                    What the box will include
                  </h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {boxIncludes.map((item) => {
                      const Icon = item.icon

                      return (
                        <article
                          key={item.title}
                          className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sage-700 shadow-sm">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <h3 className="mt-4 font-heading text-2xl leading-tight text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-base leading-7 text-stone-300">
                            {item.text}
                          </p>
                        </article>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[1fr_0.94fr]">
                <div className="rounded-[2.2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Launch flow
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
                    A waitlist-first launch keeps the offer grounded
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-600">
                    That gives S.A.L.T. time to shape the package around the
                    people who actually want it, rather than guessing.
                  </p>
                  <div className="mt-6 space-y-4">
                    {[
                      'Interest builds on the contact page',
                      'The community helps test topics and formats',
                      'The final offer reflects actual family needs',
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex gap-4 rounded-[1.3rem] bg-ivory-50 px-4 py-4 text-base leading-7 text-stone-600"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-500 text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2.2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Want updates?
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
                    Join the waitlist or ask a question
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-600">
                    Use the contact page if you want to be first in line or need
                    clarity about where the subscription box is headed.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <ActionButton to="/contact/?service=Subscription%20Box" variant="primary">
                      {subscriptionBox.cta}
                    </ActionButton>
                    <ActionButton
                      href={contact.storeUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                    >
                      Visit the Store
                    </ActionButton>
                  </div>
                  <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-sage-50 p-5">
                    <p className="text-sm leading-7 text-stone-600">
                      The store still handles the transaction path for current
                      products, while this page gathers interest for the future
                      recurring box.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-14">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Next step
                  </p>
                  <h3 className="mt-3 font-heading text-3xl text-charcoal">
                    Want the subscription box updates first?
                  </h3>
                </div>
                <ActionButton to="/contact/?service=Subscription%20Box" variant="primary">
                  {subscriptionBox.cta}
                </ActionButton>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
