import { CalendarDays, Sparkles, Users } from 'lucide-react'

import { communityHighlights, communitySpotlightImage, saltinesGotTalent } from '../data/site'
import { organizationSchema } from '../data/schema'
import { ActionButton, Container, Reveal, SectionHeading, SiteFooter, SiteHeader } from '../components/layout'
import { Seo } from '../components/seo'

const communitySteps = [
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Join a session that fits your interest',
    text: 'Choose a live meeting, webinar, or course topic that matches what you need right now.',
  },
  {
    icon: <CalendarDays className="h-5 w-5" />,
    title: 'Bring your questions and your calendar',
    text: 'The sessions are designed to leave you with usable next steps, reminders, and confidence.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Keep learning at your own pace',
    text: 'Return for more support, replay sessions, and stay connected to the S.A.L.T. community.',
  },
] as const

export function CommunityPage() {
  return (
    <>
      <Seo
        title="Community"
        description="Join the S.A.L.T. community for webinars, courses, interest-based learning, and senior-friendly support."
        canonical="/community/"
        jsonLd={organizationSchema()}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,237,173,0.22),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.12),_transparent_26%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.96fr_1.04fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Community
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  A welcoming place to learn, connect, and keep moving forward
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  The S.A.L.T. community is where learning and connection meet.
                  Seniors and caregivers can join group meetings, attend
                  webinars, and find a friendly place to ask questions and
                  share experiences.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to="/contact/?service=Community%20%26%20Webinars" variant="primary">
                  Join the Community
                </ActionButton>
                <ActionButton to="/videos/" variant="secondary">
                  Watch Videos
                </ActionButton>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <div className="overflow-hidden rounded-[2.3rem] border border-white/80 bg-white shadow-soft">
                <img
                  src={communitySpotlightImage}
                  alt="A welcoming community group discussing senior support"
                  className="h-[31rem] w-full object-cover sm:h-[35rem]"
                />
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Online
                    </p>
                    <p className="mt-2 font-heading text-2xl text-charcoal">
                      group meetings
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Webinars
                    </p>
                    <p className="mt-2 text-base leading-7 text-stone-600">
                      that keep learning practical and easy to follow.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Courses
                    </p>
                    <p className="mt-2 text-base leading-7 text-stone-600">
                      built for seniors, caregivers, and families.
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
              <SectionHeading
                eyebrow="Inside the community"
                title="Support that feels structured, friendly, and easy to return to"
                summary="These are the pieces that make the community useful without making it feel busy."
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {communityHighlights.map((item, index) => (
                  <div
                    key={item}
                    className={
                      index % 2 === 0
                        ? 'rounded-[1.8rem] border border-stone-200 bg-white p-6 shadow-soft'
                        : 'rounded-[1.8rem] border border-stone-200 bg-sage-50 p-6 shadow-soft'
                    }
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Community benefit
                    </p>
                    <p className="mt-3 text-lg leading-8 text-stone-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Premium membership
                  </p>
                  <h2 className="font-heading text-4xl text-charcoal sm:text-5xl">
                    Monthly webinars, live Q&A, and downloadable resources
                  </h2>
                  <p className="text-base leading-8 text-stone-600">
                    The blueprint called for a membership layer, so the
                    community now has a clear path from free access to deeper
                    ongoing support.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton to="/contact/?service=Community%20%26%20Webinars" variant="primary">
                      Ask about membership
                    </ActionButton>
                    <ActionButton to="/resources/" variant="secondary">
                      Browse resources
                    </ActionButton>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    'Monthly webinars',
                    'Live Q&A',
                    'Resource downloads',
                    'Private community access',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] border border-stone-200 bg-ivory-50 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                        Included
                      </p>
                      <p className="mt-3 font-heading text-2xl leading-tight text-charcoal">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
                <div className="overflow-hidden rounded-[2.2rem] border border-stone-200 bg-sage-50 shadow-soft lg:self-start">
                  <div className="aspect-[16/10]">
                    <img
                      src={saltinesGotTalent.image}
                      alt="Saltine’s Got Talent coming soon banner"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <div className="space-y-4 p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Our community spotlight
                    </p>
                    <h2 className="font-heading text-4xl text-charcoal sm:text-5xl">
                      {saltinesGotTalent.headline}
                    </h2>
                    <p className="max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
                      {saltinesGotTalent.summary}
                    </p>
                    <ActionButton to="/contact/?service=Community%20%26%20Webinars" variant="primary">
                      {saltinesGotTalent.cta}
                    </ActionButton>
                  </div>
                </div>

                <div className="space-y-6">
                  <SectionHeading
                    eyebrow="How it works"
                    title="A simple rhythm that makes participation feel easy"
                    summary="A good community page should show what happens after someone joins."
                  />
                  <div className="grid gap-4">
                    {communitySteps.map((item, index) => (
                      <div
                        key={item.title}
                        className="grid gap-4 rounded-[1.6rem] border border-stone-200 bg-white p-5 shadow-soft sm:grid-cols-[auto_minmax(0,1fr)]"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-800">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                            Step {index + 1}
                          </p>
                          <h3 className="mt-2 font-heading text-3xl text-charcoal">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-base leading-8 text-stone-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[1.8rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      Next step
                    </p>
                    <p className="mt-3 text-base leading-8 text-stone-300">
                      If you are not sure where to begin, start with the
                      community or a free consultation and move at your own
                      pace.
                    </p>
                    <ActionButton
                      to="/contact/?service=Community%20%26%20Webinars"
                      variant="secondary"
                      className="mt-6 bg-white text-charcoal"
                    >
                      Join or ask a question
                    </ActionButton>
                  </div>
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
