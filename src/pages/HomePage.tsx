import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  CalendarDays,
  ChevronRight,
  HeartHandshake,
  Home,
  Mail,
  MapPinned,
  Menu,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Video,
  X,
} from 'lucide-react'

import communityCircleImage from '../assets/community-circle.png'
import heroCareImage from '../assets/hero-care.png'
import plannerFlatlay from '../assets/planner-flatlay.png'
import { contact } from '../data/site'
import { ActionButton, Container, Reveal } from '../components/layout'
import { Seo } from '../components/seo'
import { cx } from '../lib/cx'

type FeatureCard = {
  title: string
  summary: string
  tags: readonly string[]
  icon: LucideIcon
}

type ProgramCard = {
  title: string
  summary: string
  tags: readonly string[]
  icon: LucideIcon
}

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Living Options', href: '#options' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Programs', href: '#programs' },
  { label: 'Contact', href: '#contact' },
] as const

const heroTrustPoints = [
  'ADA-friendly spaces',
  'Family visits welcome',
  'Easy-to-read information',
  'Simple scheduling',
] as const

const livingOptions: readonly FeatureCard[] = [
  {
    title: 'Independent Living',
    summary: 'Private suites, easy routines, and a maintenance-free lifestyle.',
    tags: ['Private apartments', 'Social activities', 'Low upkeep'],
    icon: Home,
  },
  {
    title: 'Assisted Living',
    summary: 'Daily support that feels calm, respectful, and personal.',
    tags: ['Meals included', 'Help when needed', 'Friendly staff'],
    icon: HeartHandshake,
  },
  {
    title: 'Memory Care',
    summary: 'A secure setting with familiar routines and thoughtful care.',
    tags: ['Secure environment', 'Routine support', 'Specialized care'],
    icon: ShieldCheck,
  },
] as const

const resourceCategories = [
  'Senior Living',
  'Caregiver Essentials',
  'Health & Wellness',
  'Mobility Aids',
  'Home Safety',
  'Emergency Preparedness',
  'Legacy Planning',
] as const

const programCards: readonly ProgramCard[] = [
  {
    title: 'Affiliate Marketplace',
    summary: 'Let trusted voices earn commissions by sharing resources.',
    tags: ['Bloggers', 'Caregivers', 'Influencers', 'Senior communities'],
    icon: Users,
  },
  {
    title: 'Partner Program',
    summary: 'Become a Senior Living Advocate and refer families with confidence.',
    tags: ['Social workers', 'Senior centers', 'Home care agencies'],
    icon: CalendarDays,
  },
  {
    title: 'Subscription Box',
    summary: 'A future monthly care package with practical resources and samples.',
    tags: ['Digital resources', 'Printed checklists', 'Educational materials'],
    icon: Sparkles,
  },
] as const

const testimonials = [
  {
    quote: 'The layout feels calm, clear, and easy to scan.',
    label: 'Family visitor',
  },
  {
    quote: 'The care levels were simple to understand right away.',
    label: 'Adult child',
  },
  {
    quote: 'The tour CTA stands out without overwhelming the page.',
    label: 'Prospective resident',
  },
] as const

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/92 backdrop-blur-xl">
      <div className="border-b border-sky-100 bg-sky-950 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/85">
          <span>Accessible senior living</span>
          <span className="hidden sm:inline">Schedule a tour today</span>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
        </Container>
      </div>

      <Container className="relative flex items-center justify-between py-4">
        <a href="#home" className="group inline-flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700 text-white shadow-sm transition group-hover:-translate-y-0.5">
            <Building2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky-700">
              Senior Living
            </span>
            <span className="mt-1 text-xs text-slate-500">
              Calm. Clear. Welcoming.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ActionButton
            href="#contact"
            variant="primary"
            className="!bg-sky-700 !text-white hover:!bg-sky-800"
          >
            Schedule a Tour
          </ActionButton>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="home-navigation"
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-900 shadow-sm lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {open ? (
          <div
            id="home-navigation"
            className="absolute left-0 right-0 top-full mt-3 rounded-[1.5rem] border border-sky-100 bg-white p-4 shadow-[0_20px_70px_rgba(11,53,109,0.12)] lg:hidden"
          >
            <nav className="grid gap-2">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-sky-100 px-4 py-3 text-base font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3">
              <ActionButton
                href="#contact"
                variant="primary"
                className="w-full !bg-sky-700 !text-white hover:!bg-sky-800"
                onClick={() => setOpen(false)}
              >
                Schedule a Tour
              </ActionButton>
              <ActionButton
                href={contact.phoneHref}
                variant="secondary"
                className="w-full !border-sky-200 !bg-sky-50 !text-sky-900 hover:!bg-sky-100"
                onClick={() => setOpen(false)}
              >
                Call {contact.phoneDisplay}
              </ActionButton>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
      {children}
    </p>
  )
}

function TagList({
  items,
  className,
}: {
  items: readonly string[]
  className?: string
}) {
  return (
    <div className={cx('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-sky-100 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-900 shadow-sm"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <Seo
        title="Senior Living"
        description="A clean, blue senior living homepage with clear care options, photo and virtual tour sections, simple categories, and strong calls to action."
        canonical="/"
      />

      <Header />

      <main className="overflow-x-clip">
        <section
          id="home"
          className="scroll-mt-28 overflow-hidden bg-[linear-gradient(180deg,#0b4b97_0%,#0f62bf_52%,#f5f9ff_52%,#f5f9ff_100%)] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_26%)]" />
          <Container className="relative grid gap-10 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <Reveal className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Senior Living
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.9rem]">
                  A calm, welcoming place to live well.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                  Clean spaces, thoughtful care, and simple information make the
                  next step easier for residents and families.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton
                  href="#contact"
                  variant="primary"
                  className="!bg-white !text-sky-900 hover:!bg-sky-50"
                >
                  Schedule a Tour
                </ActionButton>
                <ActionButton
                  href={contact.phoneHref}
                  variant="secondary"
                  className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/15"
                >
                  Call Now
                </ActionButton>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Care levels
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Independent, assisted, and memory care
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Tour style
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Photo and virtual previews
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="absolute -right-6 top-8 hidden h-24 w-24 rounded-full bg-white/10 blur-2xl lg:block" />
              <div className="rounded-[2.2rem] border border-white/15 bg-white/10 p-4 shadow-[0_30px_80px_rgba(4,20,48,0.25)] backdrop-blur">
                <div className="relative overflow-hidden rounded-[1.8rem] bg-sky-900">
                  <img
                    src={communityCircleImage}
                    alt="Residents and a care team talking in a bright lounge"
                    className="h-[29rem] w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/75 via-sky-950/20 to-transparent" />

                  <div className="absolute left-5 right-5 bottom-5 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-[1.5rem] border border-white/15 bg-sky-950/70 p-4 shadow-[0_20px_50px_rgba(2,18,44,0.22)] backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                        Virtual tour
                      </p>
                      <p className="mt-2 text-2xl font-semibold leading-tight text-white">
                        Walk the community before you visit.
                      </p>
                    </div>
                    <div className="grid gap-3">
                      <div className="rounded-[1.25rem] border border-white/15 bg-white/12 p-4 text-sm font-medium text-white backdrop-blur">
                        ADA-friendly spaces
                      </div>
                      <div className="rounded-[1.25rem] border border-white/15 bg-white/12 p-4 text-sm font-medium text-white backdrop-blur">
                        Family visits welcome
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="relative grid gap-3 rounded-[2rem] border border-white/15 bg-white/10 p-4 text-white shadow-[0_20px_60px_rgba(4,20,48,0.18)] backdrop-blur lg:col-span-2 lg:grid-cols-4">
              {heroTrustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-4 text-center text-base font-semibold text-white/95"
                >
                  {point}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="options" className="scroll-mt-28 bg-white">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl space-y-3">
                  <SectionLabel>About the community</SectionLabel>
                  <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[3.2rem]">
                    Living options made easy to understand
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Clear care levels help families choose with less pressure and
                    more confidence.
                  </p>
                </div>
                <ActionButton href="#gallery" variant="link" icon={false}>
                  See floor plans
                </ActionButton>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {livingOptions.map((option) => {
                  const Icon = option.icon

                  return (
                    <article
                      key={option.title}
                      className="rounded-[1.8rem] border border-sky-100 bg-sky-50/70 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sky-200"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                        Care level
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-900">
                        {option.title}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-slate-600">
                        {option.summary}
                      </p>
                      <TagList items={option.tags} className="mt-5" />
                      <ActionButton
                        href="#contact"
                        variant="link"
                        icon={false}
                        className="mt-5"
                      >
                        Ask about this level
                      </ActionButton>
                    </article>
                  )
                })}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="programs" className="scroll-mt-28 bg-sky-50/70">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                <article className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-soft">
                  <SectionLabel>Helpful categories</SectionLabel>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                    Simple topics for residents and families
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Fast paths to the right information, without clutter.
                  </p>

                  <TagList items={resourceCategories} className="mt-6" />

                  <div className="mt-6 rounded-[1.5rem] bg-sky-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      Subscription box
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      A future monthly package with digital resources, printed
                      checklists, product samples, and educational materials.
                    </p>
                  </div>
                </article>

                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-soft sm:col-span-2">
                    <div className="grid sm:grid-cols-[0.92fr_1.08fr]">
                      <div className="min-h-[16rem] bg-sky-50">
                        <img
                          src={plannerFlatlay}
                          alt="Senior planning planner with tea and glasses"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="space-y-4 p-6 sm:p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                          Digital download store
                        </p>
                        <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                          Low-ticket products with high margins
                        </h3>
                        <p className="text-base leading-8 text-slate-600">
                          Offer useful downloads that are easy to buy and easy to
                          share.
                        </p>
                        <TagList
                          items={[
                            '$1 Emergency Card',
                            '$1 Medication Tracker',
                            '$3 Hospital Checklist',
                            '$5 Caregiver Toolkit',
                          ]}
                        />
                        <TagList
                          items={['$9 Emergency Bundle', '$19 Digital Planner', '$49 Family Kit']}
                        />
                      </div>
                    </div>
                  </article>

                  {programCards.map((program) => {
                    const Icon = program.icon

                    return (
                      <article
                        key={program.title}
                        className="rounded-[1.7rem] border border-sky-100 bg-white p-6 shadow-soft"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h3 className="mt-5 text-2xl font-semibold leading-tight text-slate-900">
                          {program.title}
                        </h3>
                        <p className="mt-3 text-base leading-8 text-slate-600">
                          {program.summary}
                        </p>
                        <TagList items={program.tags} className="mt-5" />
                      </article>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="gallery" className="scroll-mt-28 bg-white">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl space-y-3">
                  <SectionLabel>Photo and virtual tours</SectionLabel>
                  <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[3.2rem]">
                    See the community before you visit
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Professional photography, floor plan previews, and easy-to-book
                    tours help families feel ready.
                  </p>
                </div>
                <ActionButton href="#contact" variant="link" icon={false}>
                  Book a tour
                </ActionButton>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
                <article className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-soft">
                  <div className="aspect-[4/3] bg-sky-50">
                    <img
                      src={communityCircleImage}
                      alt="Residents and a care team talking in a bright lounge"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      Shared spaces
                    </p>
                    <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                      Warm rooms for conversation and connection
                    </h3>
                    <p className="text-base leading-8 text-slate-600">
                      Bright seating areas and welcoming common spaces set the tone.
                    </p>
                  </div>
                </article>

                <div className="grid gap-5">
                  <article className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-soft">
                    <div className="grid sm:grid-cols-[0.82fr_1.18fr]">
                      <div className="min-h-[13rem] bg-sky-50">
                        <img
                          src={heroCareImage}
                          alt="Care team helping a resident with a planning conversation"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="space-y-3 p-6 sm:p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                          Support moments
                        </p>
                        <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                          Care that feels calm and personal
                        </h3>
                        <p className="text-base leading-8 text-slate-600">
                          Families can see the rhythm of daily support before they
                          arrive.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(135deg,#0f4f9d_0%,#0b356d_100%)] p-6 text-white shadow-[0_20px_60px_rgba(11,53,109,0.24)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                      Virtual tour
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                      Walk the space from home.
                    </h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-[1.25rem] border border-white/12 bg-white/10 p-4">
                        <Video className="h-5 w-5 text-blue-100" aria-hidden="true" />
                        <p className="mt-3 text-sm font-medium text-white/90">
                          Guided video tours
                        </p>
                      </div>
                      <div className="rounded-[1.25rem] border border-white/12 bg-white/10 p-4">
                        <MapPinned className="h-5 w-5 text-blue-100" aria-hidden="true" />
                        <p className="mt-3 text-sm font-medium text-white/90">
                          Easy floor plan previews
                        </p>
                      </div>
                      <div className="rounded-[1.25rem] border border-white/12 bg-white/10 p-4">
                        <CalendarDays className="h-5 w-5 text-blue-100" aria-hidden="true" />
                        <p className="mt-3 text-sm font-medium text-white/90">
                          Book a visit anytime
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="reviews" className="scroll-mt-28 bg-sky-50/70">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="max-w-3xl space-y-3">
                <SectionLabel>Testimonials</SectionLabel>
                <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[3.2rem]">
                  Simple, clear, and reassuring
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Short, readable feedback that builds trust fast.
                </p>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {testimonials.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.8rem] border border-sky-100 bg-white p-6 shadow-soft"
                  >
                    <div className="flex items-center gap-1 text-sky-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={`${item.label}-${index}`}
                          className="h-4 w-4 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      {`"${item.quote}"`}
                    </p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
                      {item.label}
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="contact" className="scroll-mt-28 bg-[linear-gradient(180deg,#0b4b97_0%,#0b356d_100%)] text-white">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <SectionLabel>Come see for yourself</SectionLabel>
                    <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3.2rem]">
                      Ready to schedule a tour?
                    </h2>
                    <p className="max-w-xl text-base leading-8 text-white/78 sm:text-lg">
                      Call, email, or send a message. We keep the next step simple.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton
                      href={contact.phoneHref}
                      variant="primary"
                      className="!bg-white !text-sky-900 hover:!bg-sky-50"
                    >
                      Call to Schedule
                    </ActionButton>
                    <ActionButton
                      href={contact.emailHref}
                      variant="secondary"
                      className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/15"
                    >
                      Email Us
                    </ActionButton>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.4rem] border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <PhoneCall className="h-5 w-5 text-blue-100" aria-hidden="true" />
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                        Call
                      </p>
                      <a
                        href={contact.phoneHref}
                        className="mt-2 block text-sm font-medium text-white transition hover:text-blue-100"
                      >
                        {contact.phoneDisplay}
                      </a>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <Mail className="h-5 w-5 text-blue-100" aria-hidden="true" />
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                        Email
                      </p>
                      <a
                        href={contact.emailHref}
                        className="mt-2 block text-sm font-medium text-white transition hover:text-blue-100"
                      >
                        {contact.email}
                      </a>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <Home className="h-5 w-5 text-blue-100" aria-hidden="true" />
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                        Visit
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">
                        Floor plans and tours available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-[0_20px_80px_rgba(2,18,44,0.24)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                    Visit checklist
                  </p>
                  <div className="mt-5 space-y-4">
                    {['Walk the community', 'Meet the care team', 'Review floor plans'].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-[1.25rem] border border-white/12 bg-white/8 p-4 text-white"
                        >
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                          <p className="text-sm leading-7 text-white/90">{item}</p>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="mt-6 rounded-[1.5rem] bg-white p-5 text-sky-950">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      Quick contact
                    </p>
                    <a
                      href={contact.emailHref}
                      className="mt-3 block text-lg font-semibold text-sky-950 transition hover:text-sky-700"
                    >
                      {contact.email}
                    </a>
                    <a
                      href={contact.phoneHref}
                      className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900"
                    >
                      <PhoneCall className="h-4 w-4" aria-hidden="true" />
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>

      <footer className="border-t border-sky-100 bg-white">
        <Container className="flex flex-col gap-4 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>Senior Living. Clean spaces. Clear next steps.</p>
          <div className="flex flex-wrap items-center gap-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-sky-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </Container>
      </footer>
    </>
  )
}
