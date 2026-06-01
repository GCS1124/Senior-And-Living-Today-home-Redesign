import { organizationSchema } from '../data/schema'
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
        jsonLd={organizationSchema()}
      />
      <PageHero
        title={data.title}
        summary={data.summary}
        primaryAction={{ label: data.cta, to: '/contact/' }}
        secondaryAction={{ label: 'View Services', to: '/services/' }}
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
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-semibold text-white">
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
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
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
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
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
            <span className="rounded-full bg-ivory-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
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
