import {
  CalendarCheck2,
  House,
  MessageSquareMore,
  Smartphone,
  Clock3,
  CheckCircle2,
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

const data = servicePages.virtualAssistant

const supportCards = [
  {
    icon: CalendarCheck2,
    title: 'Reminder rhythm',
    text: 'Appointment and medication reminders that keep daily life steady.',
  },
  {
    icon: MessageSquareMore,
    title: 'Family updates',
    text: 'Follow-ups and communication that keep everyone in the loop.',
  },
  {
    icon: Smartphone,
    title: 'Simple tech help',
    text: 'Light digital support so everyday tasks do not stall when devices do.',
  },
  {
    icon: House,
    title: 'Home follow-through',
    text: 'Maintenance check-ins and companionship touches that keep details moving.',
  },
] as const

const whoItHelps = [
  'Families balancing work, caregiving, and everything in between',
  'Seniors who want reminders and support without feeling overwhelmed',
  'People who need small daily tasks handled with consistency',
] as const

export function VirtualAssistantPage() {
  return (
    <>
      <Seo
        title={data.title}
        description={data.summary}
        canonical="/senior-care-virtual-assistant-services/"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            {
              name: 'Senior Care Virtual Assistant Services',
              url: 'https://seniorandlivingtoday.com/senior-care-virtual-assistant-services/',
            },
          ]),
          faqPageSchema(data.faq),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,106,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.08),_transparent_30%)]" />
          <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_0.98fr] lg:py-20">
            <Reveal className="space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Virtual assistant services
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
                  to="/contact/?service=Senior%20Care%20Virtual%20Assistant%20Services"
                  variant="primary"
                >
                  Book a Free Consultation
                </ActionButton>
                <ActionButton to="/consultations/" variant="secondary">
                  View Consultations
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {['Reminders', 'Follow-ups', 'Coordination'].map((item) => (
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
                <div className="overflow-hidden rounded-[2rem] bg-ivory-50">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="h-[28rem] w-full object-cover sm:h-[32rem]"
                  />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    label: 'Daily support',
                    value: 'Keeps the routine moving',
                  },
                  {
                    label: 'Family contact',
                    value: 'Updates without extra friction',
                  },
                  {
                    label: 'Digital help',
                    value: 'Small tasks, handled calmly',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-stone-200 bg-white p-4 shadow-soft"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base leading-7 text-stone-600">
                      {item.value}
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
              <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
                <div className="rounded-[2.2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <SectionHeading
                    eyebrow="Why this matters"
                    title="Support that makes the day feel lighter"
                    summary={data.intro}
                  />
                  <div className="mt-6">
                    <BulletList items={data.highlights} />
                  </div>
                </div>

                <div className="rounded-[2.2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <SectionHeading
                      eyebrow="What gets handled"
                      title="A practical set of small tasks with big impact"
                    />
                    <Clock3 className="h-6 w-6 shrink-0 text-sage-700" aria-hidden="true" />
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {supportCards.map((item) => {
                      const Icon = item.icon

                      return (
                        <article
                          key={item.title}
                          className="rounded-[1.5rem] border border-stone-200 bg-ivory-50 p-5 shadow-sm"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sage-700 shadow-sm">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <h3 className="mt-4 font-heading text-2xl leading-tight text-charcoal">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-base leading-7 text-stone-600">
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
                <div className="rounded-[2.2rem] border border-[#18304f] bg-[#10233f] p-6 text-white shadow-[0_24px_70px_rgba(16,35,63,0.22)] sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d2a85b]">
                    How it works
                  </p>
                  <h2 className="mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl">
                    A simple setup that adapts as needs change
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
                    Virtual support starts with the small recurring tasks, then
                    shifts as the household needs more or less help over time.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur">
                    <CheckCircle2 className="h-4 w-4 text-[#d2a85b]" aria-hidden="true" />
                    Flexible, calm, and built around real routines
                  </div>
                </div>

                <div className="rounded-[2.2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <SectionHeading
                    eyebrow="Process"
                    title="Clear steps make it easy to begin"
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
                  <ActionButton
                    to="/contact/?service=Senior%20Care%20Virtual%20Assistant%20Services"
                    variant="primary"
                    className="mt-6"
                  >
                    {data.cta}
                  </ActionButton>
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
                    Best fit
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                    Ideal when the small tasks are starting to pile up
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-300">
                    This service works best for families who need consistent
                    support, but do not need hands-on medical care.
                  </p>
                  <div className="mt-6 space-y-3">
                    {whoItHelps.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[1.2rem] bg-white/8 px-4 py-4 text-base leading-7 text-white/80 backdrop-blur"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d2a85b]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <SectionHeading
                    eyebrow="Common questions"
                    title="Direct answers without the extra noise"
                    summary="The FAQ stays visible so families can check fit quickly and move forward with confidence."
                  />
                  <FaqList items={data.faq} />
                </div>
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
                    Ready to make the routine easier to manage?
                  </h3>
                </div>
                <ActionButton
                  to="/contact/?service=Senior%20Care%20Virtual%20Assistant%20Services"
                  variant="primary"
                >
                  Book a Free Consultation
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
