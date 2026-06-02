import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Mail,
  PhoneCall,
  ShieldCheck,
  Sparkles,
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
  trustStrip,
} from '../data/site'
import { organizationSchema, websiteSchema } from '../data/schema'
import { ActionButton, Container, Reveal, SectionHeading, SiteFooter, SiteHeader } from '../components/layout'
import { BulletList } from '../components/content'
import { Seo } from '../components/seo'
import { cx } from '../lib/cx'

const audiencePaths = [
  {
    eyebrow: 'For seniors',
    title: 'Keep wishes, notes, and family details in one calm place.',
    summary:
      'Begin with The Living Legacy Planner and download the free daily planner when you want a simple, low-pressure first step.',
    cta: 'Start with the planner',
    href: '/shop/#living-legacy-planner',
  },
  {
    eyebrow: 'For caregivers',
    title: 'Get practical support without carrying the whole load alone.',
    summary:
      'Use consulting, check-ins, and clear resources that help caregivers stay organized and confident.',
    cta: 'Explore caregiver support',
    href: '/caregiver-support/',
  },
  {
    eyebrow: 'For families',
    title: 'Turn hard conversations into a clearer shared plan.',
    summary:
      'Book consulting, compare care options, and use guided resources that reduce confusion at the next step.',
    cta: 'Book consulting',
    href: '/contact/?service=Senior%20Care%20Consulting',
  },
] as const

const serviceHighlights = [
  {
    label: 'Senior Care Consulting',
    href: '/consulting/',
    summary:
      'Personalized guidance for families navigating care options, planning, and next steps.',
  },
  {
    label: 'Caregiver Support',
    href: '/caregiver-support/',
    summary:
      'Resources and encouragement for people balancing care responsibilities with daily life.',
  },
  {
    label: 'Community & Webinars',
    href: '/community/',
    summary:
      'Online meetings, classes, and conversations that keep seniors and caregivers connected.',
  },
  {
    label: 'Virtual Assistant Services',
    href: '/senior-care-virtual-assistant-services/',
    summary:
      'Appointment reminders, communication help, and coordination support for busy families.',
  },
] as const

const plannerBullets = [
  'Document final wishes in one calm, organized place',
  'Keep memories, notes, and important details together',
  'Give family members one clear reference when questions come up',
  'Make difficult conversations feel more manageable',
] as const

const guideBullets = [
  'A simple conversation starter for family planning',
  'Clear prompts that help everyone stay on the same page',
  'A practical resource when decisions need to be made with care',
] as const

const blogFocusPosts = [blogPosts[2], blogPosts[0], blogPosts[1]] as const

export function HomePage() {
  const featuredBlog = blogFocusPosts[0]
  const secondaryBlogs = blogFocusPosts.slice(1)

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,106,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(141,155,131,0.16),_transparent_30%)]" />
          <Container className="relative grid gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <Reveal className="space-y-8 rounded-[2.6rem] border border-white/10 bg-[#10233f] p-8 text-white shadow-[0_30px_80px_rgba(16,35,63,0.28)] sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d2a85b] shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {brand.shortName}
              </div>

              <div className="space-y-6">
                <h1 className="max-w-3xl font-heading text-5xl leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5rem]">
                  Compassionate guidance{' '}
                  <span className="block text-[#d2a85b]">for the moments that matter</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                  {homeHero.summary}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton
                  to={homeHero.primaryCta.to}
                  variant="primary"
                  className="!bg-[#d2a85b] !text-[#10233f] hover:!bg-[#c6973f]"
                >
                  {homeHero.primaryCta.label}
                </ActionButton>
                <ActionButton
                  to={homeHero.secondaryCta.to}
                  variant="ghost"
                  className="!border-white/25 !bg-transparent !text-white hover:!bg-white/10"
                >
                  {homeHero.secondaryCta.label}
                </ActionButton>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <ActionButton
                  to="/resources/"
                  variant="ghost"
                  className="w-full !border-white/25 !bg-transparent !text-white hover:!bg-white/10"
                >
                  Free Resources
                </ActionButton>
                <ActionButton
                  to="/community/"
                  variant="ghost"
                  className="w-full !border-white/25 !bg-transparent !text-white hover:!bg-white/10"
                >
                  Join Community
                </ActionButton>
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="rounded-[2.4rem] border border-white/80 bg-white p-4 shadow-[0_24px_60px_rgba(16,35,63,0.14)]">
                <div className="relative overflow-hidden rounded-[2rem] bg-ivory-50">
                  <img
                    src={homeHero.image}
                    alt="Courtney Jones, founder of Senior & Living Today, with The Living Legacy Planner"
                    className="h-[30rem] w-full object-cover sm:h-[34rem]"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#10233f]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f8e4b0] shadow-lg backdrop-blur">
                    {brand.tagline}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.4rem] border border-[#10233f] bg-[#10233f] p-4 text-white shadow-[0_18px_40px_rgba(16,35,63,0.2)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d2a85b]">
                    Founded by
                  </p>
                  <p className="mt-2 font-heading text-2xl text-white">
                    {founder.name}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-stone-200 bg-white p-4 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                    Experience
                  </p>
                  <p className="mt-2 text-base leading-7 text-stone-600">
                    {founder.years}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-stone-200 bg-white p-4 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                    Focus
                  </p>
                  <p className="mt-2 text-base leading-7 text-stone-600">
                    Planning tools, community, and compassionate support.
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="border-y border-[#18304f] bg-[#10233f]">
          <Container className="py-7">
            <Reveal>
              <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-5 text-white shadow-[0_24px_60px_rgba(16,35,63,0.18)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:p-7">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d2a85b]">
                    {brand.tagline}
                  </p>
                  <p className="max-w-xl text-base leading-8 text-white/75">
                    {brand.shortName} exists to help seniors and caregivers feel
                    informed, respected, prepared, and connected.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-4">
                  {trustStrip.map((item) => (
                    <span
                      key={item}
                      className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-center text-lg font-semibold text-white shadow-sm backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
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
                  eyebrow="Guidance paths"
                  title="Choose the path that fits where you are right now"
                  summary="Clear next steps for seniors, caregivers, and families that connect to the right resources without overwhelm or pressure."
                />
                <ActionButton to="/consultations/" variant="link" icon={false}>
                  See consultations
                </ActionButton>
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {audiencePaths.map((path, index) => {
                  const Icon = [BookOpen, HeartHandshake, ShieldCheck][index]
                  return (
                    <article
                      key={path.title}
                      className={cx(
                        'rounded-[1.8rem] border border-stone-200 p-6 shadow-soft transition duration-300 hover:-translate-y-1',
                        index === 0 && 'bg-white',
                        index === 1 && 'bg-sky-50/70',
                        index === 2 && 'bg-sage-50/70',
                      )}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sage-700 shadow-sm">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                        {path.eyebrow}
                      </p>
                      <h2 className="mt-3 font-heading text-3xl leading-tight text-charcoal">
                        {path.title}
                      </h2>
                      <p className="mt-3 text-base leading-8 text-stone-600">
                        {path.summary}
                      </p>
                      <ActionButton to={path.href} variant="link" className="mt-5">
                        {path.cta}
                      </ActionButton>
                    </article>
                  )
                })}
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                <article className="rounded-[2.2rem] border border-[#18304f] bg-[#10233f] p-8 text-white shadow-[0_24px_70px_rgba(16,35,63,0.22)] sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d2a85b]">
                    Services at a glance
                  </p>
                  <h2 className="mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl">
                    Where the guidance begins
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
                    A quick preview of the support areas that connect seniors,
                    caregivers, and families to the right next step.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur">
                    <Sparkles className="h-4 w-4 text-[#d2a85b]" aria-hidden="true" />
                    Planning, support, and practical next steps
                  </div>
                  <ActionButton
                    to="/consultations/"
                    variant="secondary"
                    className="mt-6 !border-white/20 !bg-white/10 !text-white hover:!bg-white/15"
                  >
                    Explore the service pages
                  </ActionButton>
                </article>

                <div className="grid gap-4 md:grid-cols-2">
                  {serviceHighlights.map((service, index) => (
                    <article
                      key={service.label}
                      className={cx(
                        'relative overflow-hidden rounded-[1.7rem] border border-stone-200 p-6 shadow-soft transition duration-300 hover:-translate-y-1',
                        index === 0 && 'self-start bg-white',
                        index === 1 && 'bg-sky-50/60 md:mt-8',
                        index === 2 && 'self-start bg-sage-50/60 lg:mt-8',
                        index === 3 && 'bg-ivory-50 md:col-span-2 lg:col-span-1 lg:mt-16',
                      )}
                    >
                      <div className="absolute right-5 top-4 text-6xl font-heading text-[#10233f]/5">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="mt-8 font-heading text-3xl leading-tight text-charcoal">
                        {service.label}
                      </h3>
                      <p className="mt-3 max-w-md text-base leading-8 text-stone-600">
                        {service.summary}
                      </p>
                      <ActionButton to={service.href} variant="link" className="mt-5">
                        Learn more
                      </ActionButton>
                    </article>
                  ))}
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
                  eyebrow="Featured resources"
                  title="Planning tools that feel useful, not heavy"
                  summary=""
                />
                <ActionButton to="/shop/" variant="link" icon={false}>
                  Visit the Store
                </ActionButton>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
                  <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="min-h-[18rem] bg-ivory-50">
                      <img
                        src={products[0].image}
                        alt={products[0].title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-5 p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                        {products[0].badge}
                      </p>
                      <h2 className="font-heading text-4xl leading-tight text-charcoal">
                        {products[0].title}
                      </h2>
                      <p className="max-w-xl text-base leading-8 text-stone-600">
                        {products[0].summary}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <ActionButton to={products[0].href} variant="primary">
                          {products[0].cta}
                        </ActionButton>
                        <ActionButton to={homeHero.secondaryCta.to} variant="secondary">
                          {homeHero.secondaryCta.label}
                        </ActionButton>
                      </div>
                      <BulletList items={plannerBullets} />
                    </div>
                  </div>
                </article>

                <div className="grid gap-6">
                  <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
                    <div className="grid sm:grid-cols-[0.82fr_1.18fr]">
                      <div className="min-h-[16rem] bg-sky-50">
                        <img
                          src={products[1].image}
                          alt={products[1].title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="space-y-4 p-6 sm:p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                          Nostalgic book
                        </p>
                        <h2 className="font-heading text-3xl leading-tight text-charcoal">
                          {products[1].title}
                        </h2>
                        <p className="text-base leading-8 text-stone-600">
                          {products[1].summary}
                        </p>
                        <ActionButton to={products[1].href} variant="secondary">
                          {products[1].cta}
                        </ActionButton>
                      </div>
                    </div>
                  </article>

                  <article className="rounded-[2rem] border border-sage-100 bg-sage-50/70 p-6 shadow-soft">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      Final Arrangement 10 Point Discussion Guide
                    </p>
                    <h2 className="mt-3 font-heading text-3xl leading-tight text-charcoal">
                      A calm script for hard conversations
                    </h2>
                    <BulletList items={guideBullets} className="mt-4" />
                    <div className="mt-5 flex flex-wrap gap-3">
                      <ActionButton to="/contact/?service=Senior%20Care%20Consulting" variant="primary">
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
                  </article>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
                <div className="space-y-6">
                  <SectionHeading
                    eyebrow="Community"
                    title="A place to learn, connect, and feel supported"
                    summary="Online group meetings, webinars, courses, and senior-friendly conversations keep the community visible and easy to join."
                  />
                  <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
                    <BulletList items={communityHighlights} />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <ActionButton to="/community/" variant="primary">
                      Join the Community
                    </ActionButton>
                    <ActionButton to="/blog/" variant="secondary">
                      Read the Blog
                    </ActionButton>
                  </div>
                </div>

                <div className="grid gap-6">
                  <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
                    <div className="bg-ivory-50 p-5">
                      <img
                        src={saltinesGotTalent.image}
                        alt="Saltine’s Got Talent coming soon banner"
                        className="mx-auto w-full max-w-2xl object-contain object-center"
                      />
                    </div>
                    <div className="space-y-4 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                        Community spotlight
                      </p>
                      <h2 className="font-heading text-3xl leading-tight text-charcoal">
                        {saltinesGotTalent.headline}
                      </h2>
                      <p className="text-base leading-8 text-stone-600">
                        {saltinesGotTalent.summary}
                      </p>
                      <ActionButton to="/community/" variant="link">
                        {saltinesGotTalent.cta}
                      </ActionButton>
                    </div>
                  </article>

                  
                </div>
              </div>
              <article className="overflow-hidden rounded-[2rem] mt-7 border border-stone-200 bg-white shadow-soft">
                    <div className="relative max-h-[36rem]">
                      <img
                        src={communitySpotlightImage}
                        alt="A welcoming community group discussing senior support"
                        className="h-full min-h-[16rem] w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/15 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                          Shared learning
                        </p>
                        <p className="mt-2 max-w-xl text-lg leading-8">
                          The community is designed to feel welcoming, readable,
                          and easy to return to.
                        </p>
                      </div>
                    </div>
                  </article>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Reader trust"
                title="Reviews that keep the original voice visible"
                summary=""
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {endorsements.map((item) => (
                  <article
                    key={item.label}
                    className="overflow-hidden rounded-[1.7rem] border border-stone-200 bg-white shadow-[0_15px_50px_rgba(86,67,41,0.06)]"
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
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                        Verified review
                      </p>
                    </div>
                  </article>
                ))}
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
                  title="Useful reads for everyday living"
                  summary="Practical, compassionate, and easy-to-read posts that cover senior care, caregiving, family planning, and lifestyle topics that matter to the community."
                />
                <ActionButton to="/blog/" variant="link" icon={false}>
                  View all posts
                </ActionButton>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
                <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
                  <div className="aspect-[4/3] bg-ivory-50">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                      <span>{featuredBlog.category}</span>
                      <span className="h-1 w-1 rounded-full bg-stone-300" />
                      <span>{featuredBlog.date}</span>
                      <span className="h-1 w-1 rounded-full bg-stone-300" />
                      <span>{featuredBlog.readTime}</span>
                    </div>
                    <h2 className="font-heading text-4xl leading-tight text-charcoal">
                      {featuredBlog.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-8 text-stone-600">
                      {featuredBlog.excerpt}
                    </p>
                    <ActionButton
                      to={`/blog/${featuredBlog.slug}/`}
                      variant="primary"
                    >
                      Read the feature story
                    </ActionButton>
                  </div>
                </article>

                <div className="grid gap-6">
                  {secondaryBlogs.map((post) => (
                    <article
                      key={post.slug}
                      className="overflow-hidden rounded-[1.7rem] border border-stone-200 bg-white shadow-soft"
                    >
                      <div className="grid sm:grid-cols-[0.82fr_1.18fr]">
                        <div className="min-h-[12rem] bg-ivory-50">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3 p-6 sm:p-7">
                          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                            <span>{post.category}</span>
                            <span className="h-1 w-1 rounded-full bg-stone-300" />
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="font-heading text-3xl leading-tight text-charcoal">
                            {post.title}
                          </h3>
                          <p className="text-base leading-7 text-stone-600">
                            {post.excerpt}
                          </p>
                          <ActionButton
                            to={`/blog/${post.slug}/`}
                            variant="link"
                          >
                            Read more
                          </ActionButton>
                        </div>
                      </div>
                    </article>
                  ))}

                  <article className="rounded-[1.7rem] border border-sage-100 bg-sage-50/70 p-6 shadow-soft">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      Categories
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        'Senior safety',
                        'Caregiver support',
                        'Senior living',
                        'Planning',
                        'Wellness',
                        'Lifestyle',
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-700 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 rounded-[2.2rem] border border-[#18304f] bg-[#10233f] p-6 shadow-[0_24px_70px_rgba(16,35,63,0.22)] lg:grid-cols-[1.02fr_0.98fr] lg:p-8">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d2a85b]">
                    Let’s talk
                  </p>
                  <h2 className="font-heading text-4xl text-white sm:text-5xl">
                    Ready for a clearer next step?
                  </h2>
                  <p className="max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                    Reach out for consulting, caregiver support, community
                    questions, or help choosing the right planner. 
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton
                      to="/contact/"
                      variant="primary"
                      className="!bg-[#d2a85b] !text-[#10233f] hover:!bg-[#c6973f]"
                    >
                      Book a Free Consultation
                    </ActionButton>
                    <ActionButton
                      href={contact.phoneHref}
                      variant="secondary"
                      className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/15"
                    >
                      Call {contact.phoneDisplay}
                    </ActionButton>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={contact.phoneHref}
                    className="grid gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 p-5 transition hover:border-[#d2a85b]/40 hover:bg-white/12"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sky-700 shadow-sm">
                      <PhoneCall className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d2a85b]">
                        Call
                      </p>
                      <p className="mt-2 text-base font-medium text-white">
                        {contact.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a
                    href={contact.emailHref}
                    className="grid gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 p-5 transition hover:border-[#d2a85b]/40 hover:bg-white/12"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sky-700 shadow-sm">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d2a85b]">
                        Email
                      </p>
                      <p className="mt-2 text-base font-medium text-white">
                        {contact.email}
                      </p>
                    </div>
                  </a>

                  <div className="grid gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 p-5 sm:col-span-2">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d2a85b]">
                          Mailing address
                        </p>
                        <p className="mt-2 text-base leading-7 text-white">
                          {contact.mailingAddress}
                        </p>
                      </div>
                      <div className="sm:text-right">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d2a85b]">
                          Store
                        </p>
                        <a
                          href={contact.storeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-white hover:text-[#f8e4b0]"
                        >
                          {contact.storeLabel}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
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
