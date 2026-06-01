import { HandHeart, ShieldCheck, Sparkles } from 'lucide-react'

import { founder, products } from '../data/site'
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
import { BulletList, ProductCard } from '../components/content'
import { Seo } from '../components/seo'

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
        <PageHero
          title="A trusted senior-care resource built on compassion and clarity"
          summary="Senior & Living Today exists to enrich the lives of seniors and caregivers through expert guidance, community support, planning tools, and trusted resources."
          primaryAction={{ label: 'Book a Free Consultation', to: '/contact/?service=Senior%20Care%20Consulting' }}
          secondaryAction={{ label: 'Explore Services', to: '/services/' }}
          image={founder.image}
          imageAlt="Courtney Jones, founder of Senior & Living Today"
          aside={
            <div className="grid gap-3 rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm sm:grid-cols-3">
              {[
                'Compassionate guidance for families',
                'Planning tools that reduce stress',
                'Community support that feels human',
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
              <div className="grid gap-8 lg:grid-cols-3">
                {[
                  {
                    icon: <HandHeart className="h-6 w-6" />,
                    title: 'Compassion first',
                    text: 'Every service is shaped by the reality that aging decisions are personal, emotional, and worthy of respect.',
                  },
                  {
                    icon: <ShieldCheck className="h-6 w-6" />,
                    title: 'Trusted guidance',
                    text: 'Families get straightforward support they can use, not jargon or pressure.',
                  },
                  {
                    icon: <Sparkles className="h-6 w-6" />,
                    title: 'Practical clarity',
                    text: 'The brand is centered on tools and conversations that make the next step easier.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.7rem] border border-stone-200 bg-white p-6 shadow-soft"
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
              <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr]">
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
                  <ActionButton to="/contact/" variant="primary">
                    Contact Us
                  </ActionButton>
                </div>
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
                    What Courtney brings to the work
                  </p>
                  <h3 className="mt-3 font-heading text-3xl text-charcoal">
                    {founder.name}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-stone-600">
                    {founder.title}. {founder.years}. Courtney’s background as a
                    senior care advocate gives S.A.L.T. a grounded, compassionate
                    point of view that families can trust.
                  </p>
                  <div className="mt-6 overflow-hidden rounded-[1.6rem]">
                    <img
                      src={founder.image}
                      alt="Courtney Jones portrait"
                      className="h-[24rem] w-full object-cover"
                    />
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
                eyebrow="What we preserve"
                title="The existing mission and major offers remain visible"
                summary="The redesign keeps the core story and major offers from the current site, while presenting them in a calmer, easier-to-navigate structure."
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.slug} {...product} />
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

