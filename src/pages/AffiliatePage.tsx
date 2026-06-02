import { BadgePercent, Link2, Sparkles, TrendingUp, Users } from 'lucide-react'

import { affiliateProgram, contact, plannerFlatlay } from '../data/site'
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

const highlightCards = [
  {
    icon: BadgePercent,
    title: 'Clear commissions',
    text: 'Earn 30% on planner sales and 50% on digital downloads with a path that is easy to understand.',
  },
  {
    icon: Link2,
    title: 'Simple sharing',
    text: 'The assets are built to be useful in a blog, email, or community recommendation without extra explaining.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent growth',
    text: 'A straightforward flow keeps the program easy to manage as your audience and referrals grow.',
  },
] as const

const applicationSteps = [
  {
    title: 'Apply with context',
    text: 'Tell S.A.L.T. where your audience is and how you plan to share the resources.',
  },
  {
    title: 'Use the right offers',
    text: 'Choose the planner or download that matches what your readers already need.',
  },
  {
    title: 'Track and refine',
    text: 'Keep the process simple, then improve based on what people actually click and buy.',
  },
] as const

export function AffiliatePage() {
  return (
    <>
      <Seo
        title={affiliateProgram.title}
        description={affiliateProgram.summary}
        canonical="/affiliate-program/"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            {
              name: 'Affiliate Program',
              url: 'https://seniorandlivingtoday.com/affiliate-program/',
            },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,106,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.08),_transparent_30%)]" />
          <Container className="grid gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <Reveal className="space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Affiliate growth
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  {affiliateProgram.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  {affiliateProgram.summary}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton
                  to="/contact/?service=Affiliate%20Program"
                  variant="primary"
                >
                  {affiliateProgram.cta}
                </ActionButton>
                <ActionButton href={contact.storeUrl} target="_blank" rel="noreferrer" variant="secondary">
                  Visit the Store
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {affiliateProgram.benefits.map((item) => (
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
                <div className="grid gap-4 lg:grid-cols-[1fr_0.92fr]">
                  <div className="overflow-hidden rounded-[1.8rem] bg-ivory-50">
                    <img
                      src={plannerFlatlay}
                      alt={affiliateProgram.title}
                      className="h-full min-h-[18rem] w-full object-cover"
                    />
                  </div>
                  <div className="rounded-[1.8rem] bg-charcoal p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      Program snapshot
                    </p>
                    <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                      A shareable offer with clear earning paths
                    </h2>
                    <div className="mt-6 space-y-4">
                      {[
                        { label: 'Planner sales', value: '30% commission' },
                        { label: 'Digital downloads', value: '50% commission' },
                        { label: 'Tracking', value: 'Simple and transparent' },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-[1.3rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d2a85b]">
                            {item.label}
                          </p>
                          <p className="mt-2 text-base leading-7 text-white/85">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Trust</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Referral</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Helpful content</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  It&apos;s built for people who want to share something that
                  actually helps the audience on the other end.
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
                    eyebrow="Why it works"
                    title="The program is designed around useful recommendations"
                    summary="The offer works best when people feel confident recommending products they would actually use themselves."
                  />
                  <div className="mt-6 space-y-4">
                    {[
                      'Useful for blogs, newsletters, and resource pages',
                      'Commission structure that is easy to explain',
                      'Built around planner and download products that solve a real problem',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[1.3rem] bg-ivory-50 px-4 py-4 text-base leading-7 text-stone-600"
                      >
                        <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-sage-700" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {highlightCards.map((item, index) => {
                    const Icon = item.icon

                    return (
                      <article
                        key={item.title}
                        className={
                          index === 1
                            ? 'rounded-[1.7rem] border border-stone-200 bg-sage-50 p-6 shadow-soft md:mt-8'
                            : 'rounded-[1.7rem] border border-stone-200 bg-white p-6 shadow-soft'
                        }
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sage-700 shadow-sm">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h3 className="mt-5 font-heading text-3xl leading-tight text-charcoal">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-stone-600">
                          {item.text}
                        </p>
                      </article>
                    )
                  })}
                  <article className="rounded-[1.7rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft md:col-span-2">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-[#d2a85b]" aria-hidden="true" />
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                        Audience fit
                      </p>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                      {affiliateProgram.audience.map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm font-medium text-white/85 backdrop-blur"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
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
                    How to begin
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
                    A short path from interest to referral
                  </h2>
                  <div className="mt-6 space-y-4">
                    {applicationSteps.map((item, index) => (
                      <div
                        key={item.title}
                        className="flex gap-4 rounded-[1.3rem] bg-ivory-50 px-4 py-4 text-base leading-7 text-stone-600"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-500 text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-heading text-2xl text-charcoal">{item.title}</h3>
                          <p className="mt-2">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2.2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Next step
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
                    If the fit feels right, start the conversation
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-600">
                    Use the contact page to ask about the program, or visit the
                    store to see the products you&apos;d be referring.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <ActionButton to="/contact/?service=Affiliate%20Program" variant="primary">
                      {affiliateProgram.cta}
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
                      A good affiliate program should feel easy to explain and
                      even easier to maintain over time.
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
                    Ready to apply or ask a question?
                  </h3>
                </div>
                <ActionButton to="/contact/?service=Affiliate%20Program" variant="primary">
                  {affiliateProgram.cta}
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
