import { serviceCards, servicePages } from '../data/site'
import { organizationSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  PageHero,
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
        title="Services"
        description="Explore senior care consulting, caregiver support, community webinars, and senior care virtual assistant services from S.A.L.T."
        canonical="/services/"
        jsonLd={organizationSchema()}
      />
      <SiteHeader />
      <main>
        <PageHero
          title="Clear service paths for seniors, caregivers, and families"
          summary="S.A.L.T. organizes its core offers into simple journeys so people can quickly find the support, tools, and community that fit their current needs."
          primaryAction={{ label: 'Book a Free Consultation', to: '/contact/?service=Senior%20Care%20Consulting' }}
          secondaryAction={{ label: 'Go to the Shop', to: '/shop/' }}
          image={servicePages.consulting.image}
          imageAlt="A caregiver and older woman reviewing a planning workbook"
          aside={
            <div className="grid gap-3 rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm md:grid-cols-2">
              {[
                'Consulting for care decisions',
                'Support for caregivers and families',
                'Webinars, courses, and community',
                'Virtual assistance for daily life',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] bg-ivory-50 px-4 py-4 text-sm leading-7 text-stone-600"
                >
                  {item}
                </div>
              ))}
            </div>
          }
        />

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
              <div className="grid gap-8 lg:grid-cols-2">
                {Object.values(servicePages).map((service) => (
                  <div
                    key={service.title}
                    className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft"
                  >
                    <div className="h-56 bg-ivory-50">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-5 p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
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
                        <ActionButton to={serviceLinks[service.title as keyof typeof serviceLinks]} variant="primary">
                          Read More
                        </ActionButton>
                        <ActionButton
                          to="/contact/"
                          variant="secondary"
                        >
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
              <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr]">
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
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
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
      </main>
      <SiteFooter />
    </>
  )
}
