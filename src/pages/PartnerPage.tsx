import { BadgeCheck, Handshake, MessagesSquare } from 'lucide-react'

import { heroCareImage, partnerProgram } from '../data/site'
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

const partnerValueCards = [
  {
    icon: Handshake,
    title: 'Mutual trust',
    text: 'Relationships work best when families are referred to a resource they can recognize and trust.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear communication',
    text: 'Referrals stay simple when the next step is visible, calm, and easy to explain.',
  },
  {
    icon: BadgeCheck,
    title: 'Better follow-through',
    text: 'Partners want to know the people they send will actually have a place to land.',
  },
] as const

const partnerWorkflow = [
  {
    title: 'Start with the fit',
    text: 'A quick conversation helps confirm whether the relationship makes sense for both sides.',
  },
  {
    title: 'Align on the referral path',
    text: 'We define how families are introduced to the right resource, service, or page.',
  },
  {
    title: 'Keep the channel active',
    text: 'Once the relationship is set, the goal is to keep updates easy and the handoff clean.',
  },
] as const

export function PartnerPage() {
  return (
    <>
      <Seo
        title={partnerProgram.title}
        description={partnerProgram.summary}
        canonical="/partner-program/"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            {
              name: 'Partner Program',
              url: 'https://seniorandlivingtoday.com/partner-program/',
            },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,106,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.08),_transparent_30%)]" />
          <Container className="grid gap-12 py-16 lg:grid-cols-[0.98fr_1.02fr] lg:py-20">
            <Reveal className="space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Referral relationships
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  {partnerProgram.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  {partnerProgram.summary}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton
                  to="/contact/?service=Partner%20Program"
                  variant="primary"
                >
                  {partnerProgram.cta}
                </ActionButton>
                <ActionButton to="/consultations/" variant="secondary">
                  Book a Consultation
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {['Referrals', 'Partnerships', 'Trust'].map((item) => (
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
                <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[1.8rem] bg-charcoal p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      What this page does
                    </p>
                    <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                      A calm referral path for organizations
                    </h2>
                    <p className="mt-4 text-base leading-8 text-stone-300">
                      The page helps community partners, care providers, and
                      professional advisors move families toward a thoughtful
                      next step.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-[1.8rem] bg-ivory-50">
                    <img
                      src={heroCareImage}
                      alt={partnerProgram.title}
                      className="h-full min-h-[18rem] w-full object-cover"
                    />
                  </div>
                  <div className="rounded-[1.8rem] bg-sage-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Good fit
                    </p>
                    <p className="mt-3 text-base leading-8 text-stone-600">
                      Built for organizations that already support seniors and
                      caregivers.
                    </p>
                  </div>
                  <div className="rounded-[1.8rem] bg-ivory-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Outcome
                    </p>
                    <p className="mt-3 text-base leading-8 text-stone-600">
                      Families get a clearer handoff instead of another dead end.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Referral</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Communication</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Follow-through</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  Keep the handoff steady and the next step obvious.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
                <div className="rounded-[2.2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <SectionHeading
                    eyebrow="Why this exists"
                    title="Relationships matter more when the next step is clear"
                    summary="A good partner program should reduce confusion and make referral work feel respectful on both sides."
                  />
                  <div className="mt-6 grid gap-4">
                    {partnerValueCards.map((item) => {
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

                <div className="rounded-[2.2rem] border border-[#18304f] bg-[#10233f] p-6 text-white shadow-[0_24px_70px_rgba(16,35,63,0.22)] sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d2a85b]">
                    Partner audience
                  </p>
                  <h2 className="mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl">
                    People and organizations already serving families
                  </h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {partnerProgram.audience.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-base leading-7 text-white/85 backdrop-blur"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d2a85b]">
                      Included benefits
                    </p>
                    <div className="mt-4 space-y-3">
                      {partnerProgram.benefits.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-white/80">
                          <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#d2a85b]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
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
                  <SectionHeading
                    eyebrow="How it works"
                    title="A simple collaboration rhythm"
                    summary="The partner path should be easy to explain and even easier to maintain."
                  />
                  <div className="mt-6 space-y-4">
                    {partnerWorkflow.map((item, index) => (
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
                    Contact path
                  </p>
                  <h2 className="mt-3 font-heading text-4xl leading-tight text-charcoal sm:text-5xl">
                    Start the conversation when the fit feels right
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-600">
                    Use the partner inquiry path if you already support seniors
                    and want a calmer referral option for the people you serve.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <ActionButton to="/contact/?service=Partner%20Program" variant="primary">
                      {partnerProgram.cta}
                    </ActionButton>
                    <ActionButton to="/contact/" variant="secondary">
                      Book a Consultation
                    </ActionButton>
                  </div>
                  <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-ivory-50 p-5">
                    <p className="text-sm leading-7 text-stone-600">
                      If you need to discuss referral fit, use the contact page
                      first. That keeps the conversation warm and specific.
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
                    Ready to explore a referral relationship?
                  </h3>
                </div>
                <ActionButton to="/contact/?service=Partner%20Program" variant="primary">
                  {partnerProgram.cta}
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
