import { serviceCards, servicePages } from '../data/site'
import { organizationSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { BulletList, FaqList, ServiceCard } from '../components/content'
import { Seo } from '../components/seo'

const serviceLinks = {
  'Senior Care Consulting': '/consulting/',
  'Caregiver Support': '/caregiver-support/',
  'Community & Webinars': '/community/',
  'Virtual Assistant Services': '/senior-care-virtual-assistant-services/',
} as const

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Consultations"
        description="Explore senior care consulting, caregiver support, community webinars, and senior care virtual assistant services from S.A.L.T."
        canonical="/consultations/"
        jsonLd={organizationSchema()}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(46,106,234,0.14),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(255,237,173,0.22),_transparent_30%)]" />
          <Container className="grid items-start gap-10 py-16 lg:grid-cols-[0.96fr_1.04fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Consultation center
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  Clear support paths for seniors, caregivers, and families
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  S.A.L.T. organizes consultation, support, community, and
                  planning resources into simple journeys so people can quickly
                  find the next step that fits their current need.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton
                  to="/contact/?service=Senior%20Care%20Consulting"
                  variant="primary"
                >
                  Book a Free Consultation
                </ActionButton>
                <ActionButton to="/resources/" variant="secondary">
                  Explore Resources
                </ActionButton>
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="grid gap-4 rounded-[2.2rem] border border-stone-200 bg-white p-4 shadow-soft">
                {serviceCards.map((service, index) => (
                  <div
                    key={service.slug}
                    className={
                      index === 0
                        ? 'rounded-[1.5rem] bg-charcoal p-5 text-white shadow-soft'
                        : 'rounded-[1.5rem] bg-ivory-50 p-5 text-charcoal'
                    }
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      {service.title}
                    </p>
                    <p
                      className={
                        index === 0
                          ? 'mt-3 text-base leading-8 text-stone-300'
                          : 'mt-3 text-base leading-8 text-stone-600'
                      }
                    >
                      {service.summary}
                    </p>
                    <ActionButton
                      to={service.href}
                      variant={index === 0 ? 'secondary' : 'link'}
                      className={index === 0 ? 'mt-5 bg-white text-charcoal' : 'mt-5'}
                      icon={false}
                    >
                      Explore
                    </ActionButton>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Service overview"
                title="Choose the path that fits your current priority"
                summary="Each service page expands on the same calm, premium structure so families can move through the site without friction."
              />
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {serviceCards.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    title={service.title}
                    summary={service.summary}
                    href={service.href}
                    icon={service.icon}
                  />
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Service chapters"
                title="Each offer gets its own clear story"
                summary="The page below keeps the service paths distinct while still making them easy to compare."
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {Object.values(servicePages).map((service, index) => (
                  <div
                    key={service.title}
                    className={
                      index % 2 === 0
                        ? 'overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft'
                        : 'overflow-hidden rounded-[2rem] border border-stone-200 bg-sage-50 shadow-soft'
                    }
                  >
                    <div className="h-56 bg-ivory-50">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-5 p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                        {service.title}
                      </p>
                      <h3 className="font-heading text-3xl text-charcoal">
                        {service.summary}
                      </h3>
                      <p className="text-base leading-8 text-stone-600">
                        {service.intro}
                      </p>
                      <BulletList items={service.highlights} />
                      <div className="flex flex-wrap gap-3">
                        <ActionButton
                          to={serviceLinks[service.title as keyof typeof serviceLinks]}
                          variant="primary"
                        >
                          Read More
                        </ActionButton>
                        <ActionButton to="/contact/" variant="secondary">
                          Book a Free Consultation
                        </ActionButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-6">
                  <SectionHeading
                    eyebrow="What to expect"
                    title="Simple, respectful support from first call to next steps"
                    summary="The site is organized to give every audience a clear path: seniors can find community and planners, caregivers can get support, and families can book help when they need it."
                  />
                  <BulletList
                    items={[
                      'One clear CTA on every major page',
                      'Senior-friendly spacing, contrast, and type scale',
                      'Contact details visible in the footer and contact page',
                      'Connected paths for services, products, community, and blog content',
                    ]}
                  />
                </div>
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <h3 className="font-heading text-3xl text-charcoal">
                    Helpful questions before you choose a service
                  </h3>
                  <div className="mt-6 space-y-4">
                    <FaqList
                      items={[
                        {
                          question: 'What is the most urgent need right now?',
                          answer:
                            'Start with the service that addresses the immediate pressure point, then use the rest of the site for supporting resources.',
                        },
                        {
                          question: 'Do you need planning tools or conversation support?',
                          answer:
                            'The Living Legacy Planner and Final Arrangement Guide are useful when clarity at home is the first priority.',
                        },
                        {
                          question: 'Would ongoing reminders and follow-up help?',
                          answer:
                            'Virtual assistant services are a good fit when the issue is daily organization rather than one-time advice.',
                        },
                      ]}
                    />
                  </div>
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
                    Not sure which service is right?
                  </h3>
                </div>
                <ActionButton to="/contact/" variant="primary">
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
