import { HandHeart, ShieldCheck, Sparkles } from 'lucide-react'

import { founder, products } from '../data/site'
import { organizationSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { BulletList, ProductCard } from '../components/content'
import { Seo } from '../components/seo'

const principles = [
  {
    icon: <HandHeart className="h-6 w-6" />,
    title: 'Compassion first',
    text: 'Every recommendation starts with the person, the family, and the pressure they are carrying right now.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Trusted guidance',
    text: 'Families get plain-language support they can use without sorting through noise or jargon.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Practical clarity',
    text: 'The work turns uncertainty into a clearer plan, with tools that feel calm and usable.',
  },
] as const

export function AboutPage() {
  return (
    <>
      <Seo
        title="About S.A.L.T."
        description="Learn about Courtney Jones and the mission behind Senior & Living Today, a trusted resource for seniors, caregivers, and families."
        canonical="/about/"
        jsonLd={organizationSchema()}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,237,173,0.28),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.11),_transparent_26%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Founder story
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  A trusted senior-care resource built on compassion and
                  clarity
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  Senior & Living Today exists to enrich the lives of seniors
                  and caregivers through expert guidance, community support,
                  planning tools, and trusted resources.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton
                  to="/contact/?service=Senior%20Care%20Consulting"
                  variant="primary"
                >
                  Book a Free Consultation
                </ActionButton>
                <ActionButton to="/living-legacy-planner/" variant="secondary">
                  View the Planner
                </ActionButton>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <div className="relative overflow-hidden rounded-[2.3rem] border border-white/80 bg-white shadow-soft">
                <img
                  src={founder.image}
                  alt="Courtney Jones, founder of Senior & Living Today"
                  className="h-[31rem] w-full object-cover sm:h-[35rem]"
                />
              </div>
              <div className="rounded-[1.7rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Founder
                    </p>
                    <p className="mt-2 font-heading text-2xl text-charcoal">
                      Courtney Jones
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Experience
                    </p>
                    <p className="mt-2 text-base leading-7 text-stone-600">
                      30+ years helping families navigate senior care decisions.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Focus
                    </p>
                    <p className="mt-2 text-base leading-7 text-stone-600">
                      Planning tools, community, and compassionate guidance.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="border-y border-stone-200 bg-white/80">
          <Container className="py-6">
            <Reveal>
              <div className="grid gap-3 rounded-[1.6rem] bg-sage-50 p-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-stone-200 md:p-0">
                {['Care.', 'Comfort.', 'Community.', 'Clarity.'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center rounded-[1.2rem] px-4 py-4 text-xl font-semibold text-charcoal md:rounded-none"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
            <p className="mt-4 text-center text-base leading-7 text-stone-600">
              S.A.L.T. exists to help seniors and caregivers feel informed,
              respected, prepared, and connected.
            </p>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-3">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.9rem] border border-stone-200 bg-white p-6 shadow-soft"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-800">
                      {item.icon}
                    </div>
                    <h3 className="mt-5 font-heading text-3xl text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-stone-600">
                      {item.text}
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
              <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr]">
                <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
                  <div className="aspect-[4/3] bg-ivory-50">
                    <img
                      src={products[0].image}
                      alt={products[0].title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Why the planner was created
                    </p>
                    <h2 className="font-heading text-4xl text-charcoal">
                      {products[0].title}
                    </h2>
                    <p className="text-base leading-8 text-stone-600">
                      The planner exists because families needed one calm place
                      to hold wishes, notes, memories, and the details that are
                      easy to lose when life gets busy.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="rounded-[2rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      Community impact
                    </p>
                    <h2 className="mt-3 font-heading text-4xl leading-tight">
                      The work extends beyond one product
                    </h2>
                    <p className="mt-4 text-base leading-8 text-stone-300">
                      S.A.L.T. is designed to feel like a support system:
                      consulting, community, resources, and tools that help
                      people move forward with less friction.
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      What the site preserves
                    </p>
                    <BulletList
                      items={[
                        'Courtney Jones as founder and senior care advocate',
                        'The Living Legacy Planner and Relics of the Century',
                        'Community support, webinars, and caregiver resources',
                        'The original contact details and store link',
                      ]}
                      className="mt-4"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr]">
                <div className="space-y-8">
                  <SectionHeading
                    eyebrow="Our mission"
                    title="Enriching the lives of seniors and caregivers"
                    summary="The mission of S.A.L.T. is to help families feel informed, respected, prepared, and connected through every stage of the aging journey."
                  />
                  <BulletList
                    items={[
                      'Consulting that helps families understand choices',
                      'Community spaces that welcome seniors and caregivers',
                      'Planning tools that preserve wishes, stories, and details',
                      'Resources that turn uncertainty into a calm, shared plan',
                    ]}
                  />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton
                      to="/contact/?service=Senior%20Care%20Consulting"
                      variant="primary"
                    >
                      Contact Us
                    </ActionButton>
                    <ActionButton to="/resources/" variant="secondary">
                      Explore Resources
                    </ActionButton>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      What Courtney brings to the work
                    </p>
                    <h3 className="mt-3 font-heading text-3xl text-charcoal">
                      {founder.name}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-stone-600">
                      {founder.title}. {founder.years}. Courtney&apos;s background
                      as a senior care advocate gives S.A.L.T. a grounded,
                      compassionate point of view that families can trust.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
                    <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                      <div className="bg-charcoal p-8 text-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                          The Living Legacy Planner
                        </p>
                        <h3 className="mt-3 font-heading text-4xl leading-tight">
                          One of the main offers the site preserves
                        </h3>
                        <p className="mt-4 text-base leading-8 text-stone-300">
                          The planner helps families document wishes, stories,
                          and important details in one thoughtful place.
                        </p>
                        <ActionButton
                          to="/shop/#living-legacy-planner"
                          variant="secondary"
                          className="mt-6 bg-white text-charcoal"
                          icon={false}
                        >
                          Explore the Planner
                        </ActionButton>
                      </div>
                      <img
                        src={products[0].image}
                        alt={products[0].title}
                        className="h-full min-h-[18rem] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="What we preserve"
                  title="The existing mission and major offers remain visible"
                  summary="The redesign keeps the core story and major offers from the current site, while presenting them in a calmer, easier-to-navigate structure."
                />
                <ActionButton to="/shop/" variant="link" icon={false}>
                  Visit the Store
                </ActionButton>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.slug} {...product} />
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
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
                <ActionButton
                  to="/contact/?service=Senior%20Care%20Consulting"
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
