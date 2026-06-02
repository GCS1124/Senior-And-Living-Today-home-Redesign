import { CheckCircle2, HeartHandshake, ShoppingBag } from 'lucide-react'

import { contact, plannerLanding, products } from '../data/site'
import { breadcrumbSchema, organizationSchema, productSchema } from '../data/schema'
import { ActionButton, Container, Reveal, SectionHeading, SiteFooter, SiteHeader } from '../components/layout'
import { Seo } from '../components/seo'

export function PlannerPage() {
  return (
    <>
      <Seo
        title="The Living Legacy Planner"
        description={plannerLanding.summary}
        canonical="/living-legacy-planner/"
        jsonLd={[
          organizationSchema(),
          productSchema({
            name: plannerLanding.title,
            description: plannerLanding.summary,
            image: products[0].image,
            price: products[0].price.replace('$', ''),
            url: 'https://seniorandlivingtoday.com/living-legacy-planner/',
          }),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            { name: 'Planner', url: 'https://seniorandlivingtoday.com/living-legacy-planner/' },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,237,173,0.24),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.11),_transparent_28%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.96fr_1.04fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Planner funnel
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  {plannerLanding.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  {plannerLanding.summary}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton href={contact.storeUrl} target="_blank" rel="noreferrer" variant="primary">
                  <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                  {plannerLanding.cta}
                </ActionButton>
                <ActionButton to="/shop/#free-daily-planner" variant="secondary">
                  Download Free Planner
                </ActionButton>
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/80 bg-white p-4 shadow-[0_24px_60px_rgba(16,35,63,0.14)]">
                <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.8rem] bg-charcoal p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      Problem
                    </p>
                    <p className="mt-3 text-base leading-8 text-stone-300">
                      {plannerLanding.problem}
                    </p>
                  </div>
                  <img
                    src={products[0].image}
                    alt={plannerLanding.title}
                    className="h-full min-h-[16rem] w-full rounded-[1.8rem] object-cover"
                  />
                  <div className="rounded-[1.8rem] bg-sage-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Solution
                    </p>
                    <p className="mt-3 text-base leading-8 text-stone-600">
                      {plannerLanding.solution}
                    </p>
                  </div>
                  <div className="rounded-[1.8rem] bg-ivory-50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Demo
                    </p>
                    <ul className="mt-3 space-y-3 text-base leading-7 text-stone-600">
                      {plannerLanding.demo.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sage-700" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
                eyebrow="Why people buy it"
                title="The planner makes hard conversations feel more organized"
                summary="It turns the most scattered family questions into one calm reference that can be revisited whenever needed."
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {plannerLanding.testimonials.map((item, index) => (
                  <div
                    key={item}
                    className={
                      index === 0
                        ? 'rounded-[1.8rem] border border-stone-200 bg-white p-6 shadow-soft'
                        : 'rounded-[1.8rem] border border-stone-200 bg-sage-50 p-6 shadow-soft'
                    }
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-100 text-sage-800">
                      <HeartHandshake className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-base leading-8 text-stone-600">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-[1.02fr_0.98fr] lg:p-8">
                <div className="space-y-5">
                  <SectionHeading
                    eyebrow="Ready to buy"
                    title="Use the store for checkout, then keep the site as your guide"
                    summary="The store remains the transaction path, while the redesigned site keeps the narrative and support structure visible."
                  />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton href={contact.storeUrl} target="_blank" rel="noreferrer" variant="primary">
                      <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                      Visit the Store
                    </ActionButton>
                    <ActionButton to="/contact/?service=Store" variant="secondary">
                      Ask a question
                    </ActionButton>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                    Included paths
                  </p>
                  <div className="mt-5 grid gap-3">
                    {[
                      'The Living Legacy Planner',
                      'Free Daily Planner entry point',
                      'Related discussion guide and follow-up content',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-7 text-stone-200"
                      >
                        {item}
                      </div>
                    ))}
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
