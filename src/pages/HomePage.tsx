import {
  ArrowRight,
  PhoneCall,
} from 'lucide-react'

import {
  blogPosts,
  brand,
  communityHighlights,
  communitySpotlightImage,
  contact,
  endorsements,
  founder,
  homeHero,
  products,
  saltinesGotTalent,
  serviceCards,
  trustStrip,
} from '../data/site'
import { organizationSchema, websiteSchema } from '../data/schema'
import { ActionButton, Container, Reveal, SectionHeading, SiteFooter, SiteHeader } from '../components/layout'
import {
  BlogCard,
  BulletList,
  ContactForm,
  ProductCard,
  ServiceCard,
} from '../components/content'
import { Seo } from '../components/seo'
import { cx } from '../lib/cx'

export function HomePage() {
  return (
    <>
      <Seo
        title={brand.shortName}
        description={brand.description}
        canonical="/"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,106,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(141,155,131,0.16),_transparent_30%)]" />
          <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.9rem]">
                  {homeHero.headline}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  {homeHero.summary}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to={homeHero.primaryCta.to} variant="primary">
                  {homeHero.primaryCta.label}
                </ActionButton>
                <ActionButton to={homeHero.secondaryCta.to} variant="secondary">
                  {homeHero.secondaryCta.label}
                </ActionButton>
              </div>

              <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  'Planning support that feels calm and practical',
                  'Tools and resources that are senior-friendly',
                  'Community guidance with real human warmth',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-stone-200 bg-white/90 px-4 py-4 text-sm leading-7 text-stone-600 shadow-sm backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white shadow-soft">
                <img
                  src={homeHero.image}
                  alt="Courtney Jones, founder of Senior & Living Today, with The Living Legacy Planner"
                  className="h-[30rem] w-full object-cover sm:h-[34rem]"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-[1.6rem] border border-stone-200 bg-white/95 p-5 shadow-soft backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
                      Founded by
                    </p>
                    <p className="mt-2 font-heading text-2xl text-charcoal">
                      Courtney Jones
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
                      Experience
                    </p>
                    <p className="mt-2 text-base leading-7 text-stone-600">
                      30+ years helping families navigate senior care decisions.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
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
                {trustStrip.map((item) => (
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
              {brand.shortName} exists to help seniors and caregivers feel
              informed, respected, prepared, and connected.
            </p>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
                  <img
                    src={founder.image}
                    alt="Courtney Jones, founder of Senior & Living Today"
                    className="h-[32rem] w-full object-cover"
                  />
                </div>
                <div className="space-y-8">
                  <SectionHeading
                    eyebrow="Meet our founder"
                    title={founder.name}
                    summary={founder.summary}
                  />
                  <BulletList items={founder.points} />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton to="/about/" variant="secondary">
                      Learn About S.A.L.T.
                    </ActionButton>
                    <ActionButton to="/contact/" variant="link" icon={false}>
                      Contact Courtney
                    </ActionButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="How we can help"
                  title="Services designed around real life"
                  summary="Clean, practical support for seniors, caregivers, and families who want clarity without clutter."
                />
                <ActionButton to="/services/" variant="link" icon={false}>
                  Explore Services
                </ActionButton>
              </div>
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

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="Featured resources"
                  title="Planning tools that make the next step easier"
                  summary="The Living Legacy Planner is the main conversion product, supported by thoughtful resources that make difficult conversations feel manageable."
                />
                <ActionButton to="/shop/" variant="link" icon={false}>
                  Go to Shop / Planners
                </ActionButton>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.slug} {...product} />
                ))}
              </div>

              <div className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
                <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
                      Final Arrangement 10 Point Discussion Guide
                    </p>
                    <h3 className="font-heading text-3xl text-charcoal">
                      A simple guide for clear family conversations
                    </h3>
                    <p className="max-w-2xl text-base leading-8 text-stone-600">
                      This guide helps families talk through final wishes and
                      arrangements in a clear, respectful way. It is designed to
                      reduce confusion and create a calm path forward.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <ActionButton to="/contact/" variant="primary">
                        Request the Guide
                      </ActionButton>
                      <ActionButton
                        href={contact.storeUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                      >
                        Visit the Store
                      </ActionButton>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[1.6rem] border border-stone-200 bg-ivory-50">
                    <img
                      src={communitySpotlightImage}
                      alt="A welcoming community group discussing senior support"
                      className="h-full min-h-[16rem] w-full object-cover"
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
              <div className="grid gap-6 rounded-[2rem] bg-[linear-gradient(135deg,_rgba(141,155,131,0.16),_rgba(250,247,241,1)_60%,_rgba(200,169,106,0.18))] p-6 shadow-soft lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
                <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-soft">
                  <div className="aspect-[2/1]">
                    <img
                      src={saltinesGotTalent.image}
                      alt="Saltine’s Got Talent coming soon banner"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                </div>
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
                    Our community spotlight
                  </p>
                  <h2 className="font-heading text-4xl text-charcoal sm:text-5xl">
                    {saltinesGotTalent.headline}
                  </h2>
                  <p className="max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
                    {saltinesGotTalent.summary}
                  </p>
                  <ActionButton to="/community/" variant="primary">
                    {saltinesGotTalent.cta}
                  </ActionButton>
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
                  eyebrow="Community"
                  title="Connection, learning, and support"
                  summary="Online group meetings, webinars, courses, and safe senior-friendly conversations that help people stay informed and connected."
                />
                <ActionButton to="/community/" variant="link" icon={false}>
                  Join the Community
                </ActionButton>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
                  <img
                    src={communitySpotlightImage}
                    alt="A welcoming community group discussing senior support"
                    className="h-full min-h-[20rem] w-full object-cover"
                  />
                </div>
                <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <BulletList items={communityHighlights} />
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ActionButton to="/community/" variant="primary">
                      Explore Community
                    </ActionButton>
                    <ActionButton to="/blog/" variant="secondary">
                      Read the Blog
                    </ActionButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="From the blog"
                  title="Helpful reads for everyday living"
                  summary="Senior safety, caregiver support, planning, and lifestyle articles continue to stay visible in the new design."
                />
                <ActionButton to="/blog/" variant="link" icon={false}>
                  View All Posts
                </ActionButton>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {blogPosts.slice(0, 3).map((post) => (
                  <BlogCard
                    key={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    date={post.date}
                    readTime={post.readTime}
                    href={`/blog/${post.slug}/`}
                    image={post.image}
                  />
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="Reader endorsements"
                  title="Reviews that back up the planning tools"
                  summary="These live review screenshots keep the original trust signals from the site visible in the new design."
                />
                <ActionButton to="/shop/" variant="link" icon={false}>
                  Explore the Shop
                </ActionButton>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {endorsements.map((item, index) => (
                  <article
                    key={item.label}
                    className={cx(
                      'overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white shadow-[0_15px_50px_rgba(86,67,41,0.05)]',
                      index === endorsements.length - 1 &&
                        'lg:col-span-2 lg:max-w-4xl lg:mx-auto',
                    )}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="block w-full"
                    />
                    <div className="flex items-center justify-between gap-3 border-t border-stone-100 px-5 py-4">
                      <p className="text-sm font-semibold text-charcoal">
                        {item.label}
                      </p>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                        Verified review
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
                    Let’s talk
                  </p>
                  <h2 className="font-heading text-4xl text-charcoal sm:text-5xl">
                    We are here to help you take the next step
                  </h2>
                  <p className="max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                    Reach out for consulting, caregiver support, community
                    questions, or help choosing the right planner.
                  </p>
                  <div className="grid gap-4 text-sm text-stone-600 sm:grid-cols-2">
                    <a
                      href={contact.phoneHref}
                      className="flex items-center gap-3 rounded-[1.2rem] border border-stone-200 bg-ivory-50 px-4 py-4 transition hover:border-gold-300"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gold-700">
                        <PhoneCall className="h-5 w-5" />
                      </span>
                      <span>{contact.phoneDisplay}</span>
                    </a>
                    <a
                      href={contact.emailHref}
                      className="flex items-center gap-3 rounded-[1.2rem] border border-stone-200 bg-ivory-50 px-4 py-4 transition hover:border-gold-300"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gold-700">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                      <span>{contact.email}</span>
                    </a>
                  </div>
                </div>
                <ContactForm defaultInterest="Senior Care Consulting" />
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
