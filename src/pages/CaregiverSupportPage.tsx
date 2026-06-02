import {
  CheckCircle2,
  HeartHandshake,
  MessageSquareMore,
  Sparkles,
  Users,
  Clock3,
} from 'lucide-react'

import { servicePages } from '../data/site'
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

const data = servicePages.caregiverSupport

const supportCards = [
  {
    icon: MessageSquareMore,
    title: 'Private conversations',
    text: 'One-on-one support when the caregiver needs a calmer place to sort through the stress.',
  },
  {
    icon: Users,
    title: 'Group discussion options',
    text: 'Roundtable-style conversations so caregivers can hear from others in a similar season.',
  },
  {
    icon: Sparkles,
    title: 'Planning tools',
    text: 'Helpful checklists, prompts, and simple next steps that reduce the feeling of being stuck.',
  },
  {
    icon: HeartHandshake,
    title: 'Less lonely support',
    text: 'Resources and encouragement that respect the emotional weight of caregiving.',
  },
] as const

const processBlocks = [
  {
    title: 'Start with what is weighing on you',
    text: 'The first conversation focuses on the current pressure points and the support you actually need.',
  },
  {
    title: 'Identify the immediate priorities',
    text: 'Together we sort the noise from the next actionable steps, so the week feels more manageable.',
  },
  {
    title: 'Leave with usable tools',
    text: 'You get practical guidance, encouragement, and resources that can be used right away.',
  },
] as const

export function CaregiverSupportPage() {
  return (
    <>
      <Seo
        title={data.title}
        description={data.summary}
        canonical="/caregiver-support/"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            {
              name: 'Caregiver Support',
              url: 'https://seniorandlivingtoday.com/caregiver-support/',
            },
          ]),
          faqPageSchema(data.faq),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,106,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(141,155,131,0.12),_transparent_30%)]" />
          <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_0.98fr] lg:py-20">
            <Reveal className="space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Caregiver support
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
                  to="/contact/?service=Caregiver%20Support"
                  variant="primary"
                >
                  {data.cta}
                </ActionButton>
                <ActionButton to="/consultations/" variant="secondary">
                  View Consultations
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {['Private support', 'Roundtables', 'Practical tools'].map((item) => (
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
                <div className="grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
                  <div className="rounded-[1.8rem] bg-charcoal p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      Caregiver rhythm
                    </p>
                    <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                      Support for the day-to-day weight of caregiving
                    </h2>
                    <div className="mt-6 space-y-4">
                      {[
                        'Talk it through',
                        'Get practical tools',
                        'Feel less alone',
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-500 text-sm font-semibold text-white">
                            {index + 1}
                          </span>
                          <span className="text-base leading-7 text-white/85">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[1.8rem] bg-ivory-50">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="h-full min-h-[18rem] w-full object-cover"
                    />
                  </div>
                  <div className="rounded-[1.8rem] bg-sage-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      The tone
                    </p>
                    <p className="mt-3 text-base leading-8 text-stone-600">
                      Practical, calm, and respectful of the emotional load
                      caregivers carry.
                    </p>
                  </div>
                  <div className="rounded-[1.8rem] bg-ivory-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      The outcome
                    </p>
                    <p className="mt-3 text-base leading-8 text-stone-600">
                      Clearer next steps and support that feels easier to
                      return to.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Support</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Encouragement</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Tools</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  Caregiving can be meaningful and exhausting at the same time.
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
                    title="Caregiving should not feel like carrying everything alone"
                    summary={data.intro}
                  />
                  <div className="mt-6">
                    <BulletList items={data.highlights} />
                  </div>
                </div>

                <div className="rounded-[2.2rem] border border-[#18304f] bg-[#10233f] p-6 text-white shadow-[0_24px_70px_rgba(16,35,63,0.22)] sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <SectionHeading
                      eyebrow="What support can look like"
                      title="A calmer support lane for busy caregivers"
                    />
                    <Clock3 className="h-6 w-6 shrink-0 text-[#d2a85b]" aria-hidden="true" />
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {supportCards.map((item) => {
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
                    How it works
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
                    A simple flow that gives the week more structure
                  </h2>
                  <div className="mt-6 space-y-4">
                    {processBlocks.map((item, index) => (
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
                    Best fit
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
                    Who caregiver support is built for
                  </h2>
                  <div className="mt-6 space-y-3">
                    {[
                      'Caregivers who feel stretched thin',
                      'Family members who need practical guidance',
                      'People who want conversation plus tools',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[1.2rem] bg-sage-50 px-4 py-4 text-base leading-7 text-stone-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage-700" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-charcoal p-5 text-white">
                    <p className="text-sm leading-7 text-stone-300">
                      The goal is not to make caregiving perfect. It is to make
                      it feel less lonely and more manageable.
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
                    ask for support without feeling judged.
                  </p>
                  <ActionButton
                    to="/contact/?service=Caregiver%20Support"
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
                    Ready for practical caregiver support?
                  </h3>
                </div>
                <ActionButton to="/contact/?service=Caregiver%20Support" variant="primary">
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
