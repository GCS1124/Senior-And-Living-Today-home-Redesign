import { CheckCircle2, House, Users, Sparkles } from 'lucide-react'

import { heroCareImage, servicePages } from '../data/site'
import { breadcrumbSchema, faqPageSchema, organizationSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { BulletList, FaqList } from '../components/content'
import { Seo } from '../components/seo'

const data = servicePages.consulting

const consultCards = [
  {
    icon: House,
    title: 'Housing guidance',
    text: 'Compare home, senior living, and transition options without jargon.',
  },
  {
    icon: Users,
    title: 'Family alignment',
    text: 'Get everyone on the same page before decisions get more complicated.',
  },
  {
    icon: Sparkles,
    title: 'Actionable next steps',
    text: 'Leave each conversation with a clearer plan and helpful resources.',
  },
  {
    icon: CheckCircle2,
    title: 'Decision support',
    text: 'Turn uncertainty into practical choices that can be acted on right away.',
  },
] as const

const sessionFlow = [
  {
    title: 'Start with the current pressure points',
    text: 'The first conversation focuses on what feels urgent, confusing, or emotionally heavy.',
  },
  {
    title: 'Review options side by side',
    text: 'Care choices, housing possibilities, and family priorities are organized in plain language.',
  },
  {
    title: 'Leave with a clearer path forward',
    text: 'You get recommendations, supporting resources, and a way to move forward without guessing.',
  },
] as const

const bestFit = [
  'Adult children who are helping make care decisions',
  'Seniors comparing housing or support options',
  'Families who want a calm place to think through next steps',
] as const

export function ConsultingPage() {
  return (
    <>
      <Seo
        title={data.title}
        description={data.summary}
        canonical="/consulting/"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            {
              name: 'Senior Care Consulting',
              url: 'https://seniorandlivingtoday.com/consulting/',
            },
          ]),
          faqPageSchema(data.faq),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,106,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.08),_transparent_30%)]" />
          <Container className="grid gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <Reveal className="space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Consulting center
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  {data.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  {data.summary}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton
                  to="/contact/?service=Senior%20Care%20Consulting"
                  variant="primary"
                >
                  {data.cta}
                </ActionButton>
                <ActionButton to="/services/" variant="secondary">
                  View all services
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  'Care planning',
                  'Housing choices',
                  'Next-step clarity',
                ].map((item) => (
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
                      src={heroCareImage}
                      alt={data.title}
                      className="h-full min-h-[18rem] w-full object-cover"
                    />
                  </div>
                  <div className="rounded-[1.8rem] bg-charcoal p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      Session snapshot
                    </p>
                    <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                      Clear decisions without the pressure
                    </h2>
                    <div className="mt-6 space-y-4">
                      {[
                        'Decision support',
                        'Housing guidance',
                        'Family follow-up',
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d2a85b] text-sm font-semibold text-[#10233f]">
                            {index + 1}
                          </span>
                          <span className="text-base leading-7 text-white/85">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Care</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Housing</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Planning</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  Consulting helps when the next move is important and the
                  decision tree feels too wide to sort alone.
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
                    eyebrow="Why this matters"
                    title="Support that moves at a thoughtful pace"
                    summary={data.intro}
                  />
                  <div className="mt-6">
                    <BulletList items={data.highlights} />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {consultCards.map((item, index) => {
                    const Icon = item.icon

                    return (
                      <article
                        key={item.title}
                        className={
                          index === 0
                            ? 'rounded-[1.7rem] border border-stone-200 bg-white p-6 shadow-soft md:mt-8'
                            : index === 1
                              ? 'rounded-[1.7rem] border border-stone-200 bg-sky-50/60 p-6 shadow-soft'
                              : index === 2
                                ? 'rounded-[1.7rem] border border-stone-200 bg-sage-50/60 p-6 shadow-soft md:mt-8'
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
                    How it works
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
                    A clear consulting rhythm from the first call onward
                  </h2>
                  <div className="mt-6 space-y-4">
                    {sessionFlow.map((item, index) => (
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

                <div className="rounded-[2.2rem] border border-[#18304f] bg-[#10233f] p-6 text-white shadow-[0_24px_70px_rgba(16,35,63,0.22)] sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d2a85b]">
                    Best fit
                  </p>
                  <h2 className="mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl">
                    Who consulting is best for
                  </h2>
                  <div className="mt-6 space-y-3">
                    {bestFit.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[1.2rem] bg-white/8 px-4 py-4 text-base leading-7 text-white/85 backdrop-blur"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d2a85b]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
                    <p className="text-sm leading-7 text-stone-300">
                      The goal is simple: reduce confusion and make the next
                      choice feel less heavy.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[2.2rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                    FAQ
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                    Common questions answered clearly
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-300">
                    S.A.L.T. keeps the tone calm and practical so families can
                    make decisions without feeling rushed.
                  </p>
                  <ActionButton
                    to="/contact/?service=Senior%20Care%20Consulting"
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

        <section>
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
                <ActionButton to="/contact/?service=Senior%20Care%20Consulting" variant="primary">
                  {data.cta}
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
