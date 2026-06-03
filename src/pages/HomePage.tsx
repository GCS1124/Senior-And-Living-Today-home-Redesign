import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Gift,
  HeartHandshake,
  Home,
  Mail,
  MapPinned,
  Menu,
  PhoneCall,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

import {
  blogPosts,
  communitySpotlightImage,
  contact,
  endorsements,
  founder,
  products,
} from '../data/site'
import { organizationSchema, websiteSchema } from '../data/schema'
import { ActionButton, Container, Reveal } from '../components/layout'
import { Seo } from '../components/seo'
import { cx } from '../lib/cx'

type InquiryState = {
  name: string
  email: string
  phone: string
  serviceInterest: string
  message: string
}

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Event', href: '#event' },
  { label: 'Steps', href: '#steps' },
  { label: 'Products', href: '#products' },
  { label: 'Programs', href: '#programs' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
] as const

const heroTrustPoints = [
  'Accessible typography',
  'Touch-friendly navigation',
  'Free planner access',
  'Tour-first CTAs',
] as const

const audienceCards = [
  {
    title: 'Seniors',
    summary: 'Simple living, clear choices, and support that feels respectful.',
    icon: Home,
  },
  {
    title: 'Caregivers',
    summary: 'Practical resources for the people carrying the day-to-day load.',
    icon: HeartHandshake,
  },
  {
    title: 'Families',
    summary: 'Better conversations and easier next steps for everyone involved.',
    icon: Users,
  },
] as const

const simpleSteps = [
  {
    title: 'Explore',
    summary: 'Start with the home, the planner, and the community options.',
    icon: MapPinned,
  },
  {
    title: 'Connect',
    summary: 'Call, email, or fill the form to ask for what you need.',
    icon: PhoneCall,
  },
  {
    title: 'Choose',
    summary: 'Pick a care level, download a tool, or join the family.',
    icon: Sparkles,
  },
] as const

const partnerPrograms = [
  {
    title: 'Affiliate Marketplace',
    summary: 'Bloggers, caregivers, influencers, senior communities, and insurance agents can earn commissions.',
    details: 'Living Legacy Planner: 30% commission. Digital products: 50% commission.',
    icon: Users,
  },
  {
    title: 'Partner Program',
    summary: 'A referral path for caregivers, social workers, senior centers, home care agencies, and insurance professionals.',
    details: 'Become a Senior Living Advocate and share trusted products.',
    icon: HeartHandshake,
  },
  {
    title: 'Subscription Box',
    summary: 'A future monthly Senior Care Package with digital resources and printed materials.',
    details: 'A recurring revenue idea built for long-term value.',
    icon: Gift,
  },
] as const

const inquiryOptions = [
  'Schedule a Tour',
  'Join the SALT Family',
  'Download the Free Planner',
  'Ask About Products',
  'Affiliate / Partner Program',
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
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/94 backdrop-blur-xl">
      <div className="border-b border-sky-100 bg-sky-950 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/85">
          <span>Senior and Living Today</span>
          <a
            href="https://community.seniorandlivingtoday.com/login"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <span>Login / Sign up</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
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
              S.A.L.T.
            </span>
            <span className="mt-1 text-xs text-slate-500">
              Senior and Living Today
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
                href="https://community.seniorandlivingtoday.com/"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="w-full !border-sky-200 !bg-sky-50 !text-sky-900 hover:!bg-sky-100"
                onClick={() => setOpen(false)}
              >
                Join the Family
              </ActionButton>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  )
}

function SectionHeader({
  eyebrow,
  title,
  summary,
  align = 'left',
}: {
  eyebrow: string
  title: string
  summary?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cx('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[3.2rem]">
        {title}
      </h2>
      {summary ? (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {summary}
        </p>
      ) : null}
    </div>
  )
}

function PillList({
  items,
  className,
}: {
  items: ReadonlyArray<string>
  className?: string
}) {
  return (
    <div className={cx('flex flex-wrap gap-x-6 gap-y-2', className)}>
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-800"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
          {item}
        </span>
      ))}
    </div>
  )
}

function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')
  const [form, setForm] = useState<InquiryState>({
    name: '',
    email: '',
    phone: '',
    serviceInterest: inquiryOptions[0],
    message: '',
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          marketingSms: false,
          nonMarketingSms: false,
        }),
      })

      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string; error?: string }
        | null

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error ?? 'We could not send your message right now.')
      }

      setStatus('success')
      setFeedback(payload.message ?? 'Thanks. We will be in touch soon.')
      setForm({
        name: '',
        email: '',
        phone: '',
        serviceInterest: inquiryOptions[0],
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setFeedback(
        error instanceof Error
          ? error.message
          : 'We could not send your message right now.',
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 border-t border-white/20 pt-6"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white/90">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="border-b border-white/25 bg-transparent px-0 py-3 text-base text-white outline-none transition placeholder:text-white/45 focus:border-white focus:ring-0"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white/90">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="border-b border-white/25 bg-transparent px-0 py-3 text-base text-white outline-none transition placeholder:text-white/45 focus:border-white focus:ring-0"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white/90">Phone</span>
          <input
            value={form.phone}
            onChange={(event) =>
              setForm((current) => ({ ...current, phone: event.target.value }))
            }
            className="border-b border-white/25 bg-transparent px-0 py-3 text-base text-white outline-none transition placeholder:text-white/45 focus:border-white focus:ring-0"
            placeholder="(555) 555-5555"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white/90">What do you need?</span>
          <select
            value={form.serviceInterest}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                serviceInterest: event.target.value,
              }))
            }
            className="border-b border-white/25 bg-transparent px-0 py-3 text-base text-white outline-none transition focus:border-white focus:ring-0"
          >
            {inquiryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 grid gap-2">
        <span className="text-sm font-semibold text-white/90">Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="border-b border-white/25 bg-transparent px-0 py-3 text-base text-white outline-none transition placeholder:text-white/45 focus:border-white focus:ring-0"
          placeholder="Tell us how we can help."
        />
      </label>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-7 text-white/72">
          Please review our Privacy Policy and Terms &amp; Conditions before
          submitting. If you need immediate help, call{' '}
          <a href={contact.phoneHref} className="font-semibold text-white">
            {contact.phoneDisplay}
          </a>
          .
        </p>
        <ActionButton
          type="submit"
          variant="primary"
          className="shrink-0 !bg-white !text-sky-900 hover:!bg-sky-50"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Submit Now'}
        </ActionButton>
      </div>

      {status !== 'idle' ? (
        <div
          className={cx(
            'border-l-4 px-5 py-4 text-sm leading-7',
            status === 'success' &&
              'border-sky-200 bg-white/10 text-white',
            status === 'error' &&
              'border-rose-200 bg-rose-500/10 text-white',
            status === 'sending' &&
              'border-sky-200 bg-white/10 text-white',
          )}
          aria-live="polite"
        >
          {feedback || 'Sending your message...'}
        </div>
      ) : null}
    </form>
  )
}

export function HomePage() {
  return (
    <>
      <Seo
        title="Senior Living"
        description="A clean blue homepage for Senior and Living Today with senior living services, community events, planner products, partnership programs, blog content, and a simple contact form."
        canonical="/"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />

      <Header />

      <main className="overflow-x-clip">
        <section
          id="home"
          className="relative scroll-mt-28 overflow-hidden text-white"
          style={{
            background:
              'linear-gradient(180deg, #071f40 0%, #0b3d78 56%, #0f63bf 100%)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_22%)]" />
          <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
            <Reveal className="space-y-8 lg:pt-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/95 backdrop-blur">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Care. Comfort. Community.
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white drop-shadow-[0_10px_24px_rgba(2,12,27,0.35)] sm:text-5xl lg:text-[4.8rem]">
                  Enhancing Senior Care Across America
                </h1>
                <p className="max-w-2xl text-xl font-medium leading-8 text-blue-50 drop-shadow-[0_4px_12px_rgba(2,12,27,0.25)] sm:text-2xl">
                  Care, comfort, and community for all.
                </p>
                <p className="max-w-2xl text-base leading-8 text-white/92 sm:text-lg">
                  A calm, easy-to-use home for seniors, caregivers, and families
                  to explore support, products, planning tools, and community.
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
                  href="https://community.seniorandlivingtoday.com/"
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/15"
                >
                  Join the SALT Family
                </ActionButton>
                <ActionButton
                  href={contact.storeUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/15"
                >
                  Download Free Planner
                </ActionButton>
              </div>

              <div className="grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-2 sm:gap-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-50">
                    Who we serve
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Seniors, caregivers, and families
                  </p>
                </div>
                <div className="space-y-2 sm:border-l sm:border-white/15 sm:pl-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-50">
                    Easy access
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Tours, planner tools, and community support
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="space-y-6 lg:pt-8">
              <div className="overflow-hidden rounded-[1.6rem]">
                <img
                  src={communitySpotlightImage}
                  alt="Residents and a care team talking in a bright lounge"
                  className="h-[22rem] w-full object-cover md:h-[28rem]"
                />
              </div>

              <div className="grid gap-4 border-t border-white/15 pt-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                    Family-ready planning
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Clean guidance for the next step.
                  </p>
                </div>
                <div className="space-y-2 sm:border-l sm:border-white/15 sm:pl-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                    Easy access
                  </p>
                  <p className="text-lg font-semibold text-white">
                    One calm place for wishes, notes, and details.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-2">
                {heroTrustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 text-sm font-medium text-white/92"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="about" className="scroll-mt-28 bg-white">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="space-y-6">
                  <SectionHeader
                    eyebrow="About Us"
                    title="Welcome to Our Home"
                    summary="We keep the experience calm, premium, and easy to scan, with direct paths for seniors and adult children who need help fast."
                  />

                  <div className="border-l-2 border-sky-200 pl-5">
                    <p className="text-base leading-8 text-slate-600">
                      {founder.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <ActionButton href="#products" variant="primary" className="!bg-sky-700 !text-white hover:!bg-sky-800">
                      Read More
                    </ActionButton>
                    <ActionButton href="#contact" variant="secondary">
                      Contact Us
                    </ActionButton>
                  </div>

                  <div className="grid gap-4 border-t border-sky-100 pt-6 sm:grid-cols-3">
                    {audienceCards.map((card) => {
                      const Icon = card.icon
                      return (
                        <article
                          key={card.title}
                          className="space-y-3"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {card.title}
                          </h3>
                          <p className="text-sm leading-7 text-slate-600">
                            {card.summary}
                          </p>
                        </article>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-8 border-t border-sky-100 pt-8 lg:border-t-0 lg:pt-0">
                  <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                    <div className="overflow-hidden rounded-[1.6rem]">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="h-full min-h-[18rem] w-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                        Founder
                      </p>
                      <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                        {founder.name}
                      </h3>
                      <p className="text-base leading-8 text-slate-600">
                        {founder.title}
                      </p>
                      <PillList items={founder.points.slice(0, 3)} />
                    </div>
                  </div>

                  <div className="grid gap-4 border-t border-sky-100 pt-6 sm:grid-cols-3">
                    {[
                      ['Care levels', 'Independent, assisted, memory care'],
                      ['Audience', 'Seniors, caregivers, families'],
                      ['Access', 'Simple, readable, mobile-friendly'],
                    ].map(([label, value]) => (
                      <div key={label} className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                          {label}
                        </p>
                        <p className="text-sm leading-7 text-slate-600">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="event" className="scroll-mt-28 bg-sky-50/70">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-6 lg:pr-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-100">
                    Community event
                  </p>
                  <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                    Saltine&apos;s Got Talent
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    A celebration of senior talent, joy, and shared stories. We
                    keep the tone welcoming, energetic, and easy to join.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton
                      href="https://api.leadconnectorhq.com/widget/form/eBUUWJFkBossrt6SUaLo"
                      target="_blank"
                      rel="noreferrer"
                      variant="primary"
                      className="!bg-sky-700 !text-white hover:!bg-sky-800"
                    >
                      Register Now
                    </ActionButton>
                    <ActionButton
                      href="#contact"
                      variant="secondary"
                      className="!border-sky-200 !bg-white !text-sky-800 hover:!bg-sky-50"
                    >
                      Ask a Question
                    </ActionButton>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.6rem]">
                  <div className="relative h-full min-h-[20rem]">
                    <img
                      src={communitySpotlightImage}
                      alt="A supportive community conversation"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/75 via-sky-950/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                        Real stories
                      </p>
                      <p className="mt-2 max-w-md text-lg leading-8">
                        A stage for voices, stories, and the joy of sharing one&apos;s gifts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="steps" className="scroll-mt-28 bg-white">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeader
                eyebrow="3 Simple Steps"
                title="Elevate your everyday"
                summary="Three direct steps to help seniors and families move forward without extra noise."
              />

              <div className="mt-10 grid gap-0 border-t border-sky-100 lg:grid-cols-3 lg:divide-x lg:divide-sky-100">
                {simpleSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <article
                      key={step.title}
                      className={cx(
                        'py-6 transition duration-300 lg:px-6',
                        index === 0 && 'lg:pr-8',
                        index === 2 && 'lg:pl-8',
                      )}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-slate-600">
                        {step.summary}
                      </p>
                    </article>
                  )
                })}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-sky-50/70">
          <Container className="py-12 lg:py-14">
            <Reveal>
              <div className="grid gap-5 border-y border-sky-100 py-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
                    Join the SALT Family Today!
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900">
                    Grab your free planner.
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    Use code <span className="font-semibold text-sky-700">SALTFREEPLAN</span> and keep planning simple.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <ActionButton
                    href="https://community.seniorandlivingtoday.com/home"
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    className="!bg-sky-700 !text-white hover:!bg-sky-800"
                  >
                    Join the Family
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
            </Reveal>
          </Container>
        </section>

        <section id="products" className="scroll-mt-28 bg-white">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeader
                  eyebrow="A gift for those we care about"
                  title="Buy gifts for your loved ones"
                  summary="The planner and book give families a calm place to begin, and the store keeps the path simple."
                />
                <ActionButton
                  href={contact.storeUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="link"
                  icon={false}
                >
                  Open the store
                </ActionButton>
              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="grid gap-6">
                  <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                    <div className="overflow-hidden rounded-[1.6rem]">
                      <img
                        src={products[0].image}
                        alt={products[0].title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                        {products[0].badge}
                      </p>
                      <h3 className="text-3xl font-semibold leading-tight text-slate-900">
                        {products[0].title}
                      </h3>
                      <p className="max-w-xl text-base leading-8 text-slate-600">
                        {products[0].summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-2xl font-semibold text-slate-900">
                          {products[0].price}
                        </p>
                        <ActionButton
                          href="https://www.saltonlinestore.com/collections/digital-products"
                          variant="primary"
                          className="!bg-sky-700 !text-white hover:!bg-sky-800"
                        >
                          {products[0].cta}
                        </ActionButton>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                    <div className="overflow-hidden rounded-[1.6rem]">
                      <img
                        src={products[1].image}
                        alt={products[1].title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                        {products[1].badge}
                      </p>
                      <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                        {products[1].title}
                      </h3>
                      <p className="text-base leading-8 text-slate-600">
                        {products[1].summary}
                      </p>
                      <ActionButton
                        href={contact.storeUrl}
                        variant="secondary"
                      >
                        {products[1].cta}
                      </ActionButton>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t border-sky-100 pt-6 lg:pt-0">
                  <div className="flex items-center gap-3">
                    <Gift className="h-5 w-5 text-sky-700" aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      Digital downloads
                    </p>
                  </div>
                  <div className="grid gap-0 border-t border-sky-100">
                    {[
                      '$1 Emergency Card',
                      '$1 Medication Tracker',
                      '$3 Hospital Checklist',
                      '$5 Caregiver Toolkit',
                      '$9 Emergency Preparedness Bundle',
                      '$19 Digital Planner',
                      '$49 Ultimate Family Preparedness Kit',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-b border-sky-100 py-3 text-sm font-medium text-slate-700"
                      >
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="guide" className="scroll-mt-28 bg-sky-50/70">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
                <div className="space-y-6 lg:pr-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
                    Final arrangement guide
                  </p>
                  <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                    Your Final Arrangement 10 Point Discussion Guide
                  </h2>
                  <p className="text-base leading-8 text-slate-600">
                    A calm script for hard conversations and a better way to keep
                    everyone on the same page.
                  </p>
                  <div className="grid gap-3 border-t border-sky-100 pt-5 sm:grid-cols-2">
                    {[
                      'Clarify wishes and priorities',
                      'Gather important contacts',
                      'Keep records in one place',
                      'Make the next conversation easier',
                    ].map((item) => (
                      <div
                        key={item}
                        className="border-b border-sky-100 pb-3 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton
                      href="#contact"
                      variant="primary"
                      className="!bg-sky-700 !text-white hover:!bg-sky-800"
                    >
                      Request the Guide
                    </ActionButton>
                    <ActionButton href={contact.storeUrl} target="_blank" rel="noreferrer" variant="secondary">
                      Visit the Store
                    </ActionButton>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.6rem]">
                  <div className="relative h-full min-h-[24rem]">
                    <img
                      src={products[0].image}
                      alt="Planning guide and accessories on a desk"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-sky-950/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                        Care planning
                      </p>
                      <p className="mt-2 max-w-md text-lg leading-8">
                        Keep the important things clear, readable, and easy to revisit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="programs" className="scroll-mt-28 bg-white">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeader
                eyebrow="Programs"
                title="Build a wider support network"
                summary="Commission programs, referral partnerships, and a future subscription box create room for growth without complicating the home page."
              />

              <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
                {partnerPrograms.map((program) => {
                  const Icon = program.icon
                  return (
                    <article
                      key={program.title}
                      className="space-y-4 border-t border-sky-100 pt-6 transition duration-300"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                        {program.title}
                      </h3>
                      <p className="text-base leading-8 text-slate-600">
                        {program.summary}
                      </p>
                      <p className="text-sm font-medium leading-7 text-sky-800">
                        {program.details}
                      </p>
                    </article>
                  )
                })}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="stories" className="scroll-mt-28 bg-sky-50/70">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeader
                eyebrow="Real Stories, True Smiles"
                title="Social proof that feels easy to scan"
                summary="A simple visual row of testimonials and reviews keeps trust visible without turning the page into a wall of text."
              />

              <div className="mt-10 grid gap-8 lg:grid-cols-3">
                {endorsements.map((item) => (
                  <figure
                    key={item.label}
                    className="space-y-4"
                  >
                    <img src={item.image} alt={item.alt} className="block w-full rounded-[1.6rem]" />
                    <figcaption className="border-t border-sky-100 pt-4">
                      <p className="text-sm font-semibold text-slate-900">
                        {item.label}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="blog" className="scroll-mt-28 bg-white">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeader
                  eyebrow="Our Blog"
                  title="Useful reads for everyday living"
                  summary="Quick, practical posts keep the site useful and easy to return to."
                />
                <ActionButton
                  href="https://seniorandlivingtoday.com/blog/"
                  target="_blank"
                  rel="noreferrer"
                  variant="link"
                  icon={false}
                >
                  View all posts
                </ActionButton>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {blogPosts.slice(0, 3).map((post) => (
                  <article
                    key={post.slug}
                    className="space-y-4"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-sky-50">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                        <span>{post.category}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                        {post.title}
                      </h3>
                      <p className="text-base leading-7 text-slate-600">
                        {post.excerpt}
                      </p>
                      <ActionButton
                        href={`https://seniorandlivingtoday.com/${post.slug}/`}
                        target="_blank"
                        rel="noreferrer"
                        variant="link"
                      >
                        Read more
                      </ActionButton>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="contact" className="scroll-mt-28 bg-[linear-gradient(180deg,#0b4b97_0%,#0b356d_100%)] text-white">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-100">
                      Reach us through
                    </p>
                    <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3.2rem]">
                      One Step Away! Fill the form.
                    </h2>
                    <p className="max-w-xl text-base leading-8 text-white/78 sm:text-lg">
                      Call, email, or send a quick message. We keep the last step
                      simple.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton
                      href={contact.phoneHref}
                      variant="primary"
                      className="!bg-white !text-sky-900 hover:!bg-sky-50"
                    >
                      Call {contact.phoneDisplay}
                    </ActionButton>
                    <ActionButton
                      href={contact.emailHref}
                      variant="secondary"
                      className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/15"
                    >
                      Email Us
                    </ActionButton>
                  </div>

                  <div className="grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-3">
                    <div className="space-y-2">
                      <PhoneCall className="h-5 w-5 text-blue-100" aria-hidden="true" />
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                        Call
                      </p>
                      <a
                        href={contact.phoneHref}
                        className="block text-sm font-medium text-white transition hover:text-blue-100"
                      >
                        {contact.phoneDisplay}
                      </a>
                    </div>
                    <div className="space-y-2 sm:border-l sm:border-white/15 sm:pl-6">
                      <Mail className="h-5 w-5 text-blue-100" aria-hidden="true" />
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                        Email
                      </p>
                      <a
                        href={contact.emailHref}
                        className="block text-sm font-medium text-white transition hover:text-blue-100"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="space-y-2 sm:border-l sm:border-white/15 sm:pl-6">
                      <Building2 className="h-5 w-5 text-blue-100" aria-hidden="true" />
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                        Community
                      </p>
                      <a
                        href="https://community.seniorandlivingtoday.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="block text-sm font-medium text-white transition hover:text-blue-100"
                      >
                        Join the family
                      </a>
                    </div>
                  </div>
                </div>

                <LeadForm />
              </div>
            </Reveal>
          </Container>
        </section>
      </main>

      <footer className="border-t border-sky-100 bg-white">
        <Container className="grid gap-8 py-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
          <div className="space-y-4">
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700 text-white shadow-sm">
                <Building2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-sky-700">
                  S.A.L.T.
                </span>
                <span className="mt-1 text-xs text-slate-500">
                  Senior and Living Today
                </span>
              </span>
            </a>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Care, comfort, and community with a simple, blue-first design that
              keeps the important things easy to find.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              Quick links
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-sky-700">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.storeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-sky-700"
                >
                  Store
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href={contact.phoneHref} className="transition hover:text-sky-700">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="transition hover:text-sky-700">
                  {contact.email}
                </a>
              </li>
              <li>{contact.mailingAddress}</li>
            </ul>
          </div>
        </Container>

        <Container className="border-t border-sky-100 py-5 text-sm text-slate-500">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>Real Stories, True Smiles.</p>
            <p>Care. Comfort. Community.</p>
          </div>
        </Container>
      </footer>
    </>
  )
}
