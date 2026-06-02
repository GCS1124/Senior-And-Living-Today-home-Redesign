import { Check } from 'lucide-react'

import { faqPageSchema, organizationSchema } from '../data/schema'
import { ActionButton, Container, PageHero, Reveal, SectionHeading } from './layout'
import { BulletList, FaqList } from './content'
import { Seo } from './seo'

export type ServiceDetailData = {
  canonical: string
  title: string
  summary: string
  image: string
  intro: string
  highlights: ReadonlyArray<string>
  process: ReadonlyArray<string>
  faq: ReadonlyArray<{ question: string; answer: string }>
  cta: string
}

export function ServiceDetailPage({ data }: { data: ServiceDetailData }) {
  return (
    <>
      <Seo
        title={data.title}
        description={data.summary}
        canonical={data.canonical}
        jsonLd={[organizationSchema(), faqPageSchema(data.faq)]}
      />
      <PageHero
        title={data.title}
        summary={data.summary}
        primaryAction={{ label: data.cta, to: '/contact/' }}
        secondaryAction={{ label: 'View Consultations', to: '/consultations/' }}
        image={data.image}
        imageAlt={data.title}
      />

      <section className="bg-ivory-50">
        <Container className="py-16 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr]">
              <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                <SectionHeading
                  eyebrow="Why this matters"
                  title="Support that moves at a thoughtful pace"
                  summary={data.intro}
                />
                <BulletList items={data.highlights} />
              </div>
              <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                <SectionHeading
                  eyebrow="How it works"
                  title="A simple process with clear next steps"
                />
                <ol className="mt-6 space-y-4">
                  {data.process.map((item, index) => (
                    <li
                      key={item}
                      className="flex gap-4 rounded-[1.2rem] bg-ivory-50 px-4 py-4 text-base leading-7 text-stone-600"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-500 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
                <ActionButton to="/contact/" variant="primary" className="mt-6">
                  {data.cta}
                </ActionButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-16 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="rounded-[2rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                  FAQ
                </p>
                <h2 className="mt-3 font-heading text-4xl leading-tight">
                  Common questions answered clearly
                </h2>
                <p className="mt-4 text-base leading-8 text-stone-300">
                  S.A.L.T. keeps the tone calm and practical so families can
                  make decisions without feeling rushed.
                </p>
                <ActionButton
                  to="/contact/"
                  variant="secondary"
                  className="mt-6 bg-white text-charcoal"
                >
                  Ask a Question
                </ActionButton>
              </div>
              <FaqList items={data.faq} />
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
                  Ready to talk through your situation?
                </h3>
              </div>
              <ActionButton to="/contact/" variant="primary">
                Book a Free Consultation
              </ActionButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}

export function BlogPostShell({
  title,
  summary,
  image,
  imageAlt,
  datePublished,
  category,
  readTime,
  canonical,
  description,
  content,
  jsonLd,
}: {
  title: string
  summary: string
  image: string
  imageAlt: string
  datePublished: string
  category: string
  readTime: string
  canonical: string
  description: string
  content: ReadonlyArray<{ heading: string; body: string }>
  jsonLd: Record<string, unknown>
}) {
  return (
    <>
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        jsonLd={jsonLd}
      />
      <PageHero
        title={title}
        summary={summary}
        primaryAction={{ label: 'Read the Blog', to: '/blog/' }}
        secondaryAction={{ label: 'Shop Planners', to: '/shop/' }}
        image={image}
        imageAlt={imageAlt}
        aside={
          <div className="flex flex-wrap items-center gap-3 rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-sm">
            <span className="rounded-full bg-ivory-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
              {category}
            </span>
            <span className="text-sm text-stone-500">{datePublished}</span>
            <span className="text-sm text-stone-500">{readTime}</span>
          </div>
        }
      />
      <section className="bg-ivory-50">
        <Container className="py-16 lg:py-20">
          <Reveal>
            <div className="mx-auto max-w-4xl space-y-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
              {content.map((section) => (
                <article key={section.heading} className="space-y-4">
                  <h2 className="font-heading text-4xl text-charcoal">
                    {section.heading}
                  </h2>
                  <p className="text-base leading-8 text-stone-600">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}

export function TopicLandingShell({
  title,
  summary,
  image,
  imageAlt,
  canonical,
  description,
  intro,
  sections,
  primaryAction,
  secondaryAction,
  jsonLd,
  faq,
}: {
  title: string
  summary: string
  image: string
  imageAlt: string
  canonical: string
  description: string
  intro: string
  sections: ReadonlyArray<{ title: string; items: ReadonlyArray<string> }>
  primaryAction: { label: string; to: string }
  secondaryAction?: { label: string; to: string }
  jsonLd: Record<string, unknown> | Array<Record<string, unknown>>
  faq?: ReadonlyArray<{ question: string; answer: string }>
}) {
  return (
    <>
      <Seo title={title} description={description} canonical={canonical} jsonLd={jsonLd} />
      <PageHero
        title={title}
        summary={summary}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        image={image}
        imageAlt={imageAlt}
      />
      <section className="bg-ivory-50">
        <Container className="py-16 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                  Why this matters
                </p>
                <h2 className="font-heading text-4xl text-charcoal sm:text-5xl">
                  Calm guidance for the next step
                </h2>
                <p className="text-base leading-8 text-stone-600">{intro}</p>
                <BulletList
                  items={[
                    'Simple, readable resources',
                    'Easy paths back to consultations and the store',
                    'Content designed for seniors, caregivers, and families',
                  ]}
                />
              </div>
              <div className="grid gap-6">
                {sections.map((section, index) => (
                  <div
                    key={section.title}
                    className={
                      index % 2 === 0
                        ? 'rounded-[1.8rem] border border-stone-200 bg-white p-6 shadow-soft'
                        : 'rounded-[1.8rem] border border-stone-200 bg-sage-50 p-6 shadow-soft'
                    }
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      {section.title}
                    </p>
                    <ul className="mt-4 space-y-3 text-base leading-7 text-stone-600">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {faq?.length ? (
        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
                <div className="rounded-[2rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                    FAQ
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight">
                    Common questions answered clearly
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-300">
                    Families can use these answers to move through the page without
                    feeling rushed.
                  </p>
                </div>
                <FaqList items={faq} />
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="bg-ivory-50">
        <Container className="py-14">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                  Next step
                </p>
                <h3 className="mt-3 font-heading text-3xl text-charcoal">
                  Ready to keep moving?
                </h3>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to={primaryAction.to} variant="primary">
                  {primaryAction.label}
                </ActionButton>
                {secondaryAction ? (
                  <ActionButton to={secondaryAction.to} variant="secondary">
                    {secondaryAction.label}
                  </ActionButton>
                ) : null}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}

export function MediaLandingShell({
  title,
  summary,
  image,
  imageAlt,
  canonical,
  description,
  category,
  duration,
  transcript,
  checklist,
  primaryAction,
  secondaryAction,
  jsonLd,
  companionLabel,
  companionSummary,
}: {
  title: string
  summary: string
  image: string
  imageAlt: string
  canonical: string
  description: string
  category: string
  duration: string
  transcript: ReadonlyArray<{ heading: string; body: string }>
  checklist: ReadonlyArray<string>
  primaryAction: { label: string; to: string }
  secondaryAction?: { label: string; to: string }
  jsonLd: Record<string, unknown> | Array<Record<string, unknown>>
  companionLabel: string
  companionSummary: string
}) {
  return (
    <>
      <Seo title={title} description={description} canonical={canonical} jsonLd={jsonLd} />
      <PageHero
        title={title}
        summary={summary}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        image={image}
        imageAlt={imageAlt}
        aside={
          <div className="flex flex-wrap items-center gap-3 rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-sm">
            <span className="rounded-full bg-ivory-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
              {category}
            </span>
            <span className="text-sm text-stone-500">{duration}</span>
          </div>
        }
      />
      <section className="bg-ivory-50">
        <Container className="py-16 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                  Transcript
                </p>
                <div className="space-y-5">
                  {transcript.map((section) => (
                    <article key={section.heading} className="space-y-3">
                      <h2 className="font-heading text-3xl text-charcoal">{section.heading}</h2>
                      <p className="text-base leading-8 text-stone-600">{section.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                    Checklist download
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight">{companionLabel}</h2>
                  <p className="mt-4 text-base leading-8 text-stone-300">
                    {companionSummary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {checklist.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-7 text-stone-200">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                          <Check className="h-4 w-4" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Companion article
                  </p>
                  <p className="mt-3 text-base leading-8 text-stone-600">{companionSummary}</p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <ActionButton to={primaryAction.to} variant="primary">
                      {primaryAction.label}
                    </ActionButton>
                    {secondaryAction ? (
                      <ActionButton to={secondaryAction.to} variant="secondary">
                        {secondaryAction.label}
                      </ActionButton>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}

export function ProgramLandingShell({
  title,
  summary,
  image,
  imageAlt,
  canonical,
  description,
  intro,
  audience,
  benefits,
  primaryAction,
  secondaryAction,
  jsonLd,
  badge,
}: {
  title: string
  summary: string
  image: string
  imageAlt: string
  canonical: string
  description: string
  intro: string
  audience: ReadonlyArray<string>
  benefits: ReadonlyArray<string>
  primaryAction: { label: string; to: string }
  secondaryAction?: { label: string; to: string }
  jsonLd: Record<string, unknown> | Array<Record<string, unknown>>
  badge: string
}) {
  return (
    <>
      <Seo title={title} description={description} canonical={canonical} jsonLd={jsonLd} />
      <PageHero
        title={title}
        summary={summary}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        image={image}
        imageAlt={imageAlt}
      />
      <section className="bg-ivory-50">
        <Container className="py-16 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                  {badge}
                </p>
                <h2 className="font-heading text-4xl text-charcoal sm:text-5xl">
                  Why this page exists
                </h2>
                <p className="text-base leading-8 text-stone-600">{intro}</p>
                <BulletList items={benefits} />
              </div>
              <div className="space-y-6">
                <div className="rounded-[2rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                    Best fit
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight">
                    People this program is built for
                  </h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {audience.map((item) => (
                      <span
                        key={item}
                        className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm font-medium text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Next step
                  </p>
                  <p className="mt-3 text-base leading-8 text-stone-600">
                    Use the page to understand the offer, then move directly to
                    the next action.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <ActionButton to={primaryAction.to} variant="primary">
                      {primaryAction.label}
                    </ActionButton>
                    {secondaryAction ? (
                      <ActionButton to={secondaryAction.to} variant="secondary">
                        {secondaryAction.label}
                      </ActionButton>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
