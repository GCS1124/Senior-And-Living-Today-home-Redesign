import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react'

import saltLogo from '../assets/live/salt-logo.png'
import { brand, contact, navigation } from '../data/site'
import { cx } from '../lib/cx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link'

type ActionButtonProps = {
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
  children: ReactNode
  className?: string
  target?: string
  rel?: string
  icon?: boolean
  onClick?: () => void
  disabled?: boolean
}

export function ActionButton({
  to,
  href,
  type,
  variant = 'primary',
  children,
  className,
  target,
  rel,
  icon = true,
  onClick,
  disabled = false,
}: ActionButtonProps) {
  const classes = cx(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-60',
    variant === 'primary' &&
      'bg-sage-500 text-white shadow-soft hover:-translate-y-0.5 hover:bg-sage-600',
    variant === 'secondary' &&
      'border border-sage-200 bg-white text-charcoal shadow-sm hover:-translate-y-0.5 hover:border-sage-400 hover:text-sage-700',
    variant === 'ghost' &&
      'border border-transparent bg-transparent text-charcoal hover:bg-sage-50',
    variant === 'link' &&
      'px-0 py-0 text-sage-700 hover:text-sage-800',
    className,
  )

  const arrow = icon ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null

  const targetValue = to ?? href
  const isExternal =
    Boolean(targetValue) &&
    /^(https?:|mailto:|tel:|sms:|\/\/)/i.test(targetValue as string)
  const renderHref = targetValue ?? undefined

  if (to && !isExternal) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
        {arrow}
      </Link>
    )
  }

  if (!renderHref) {
    return (
      <button
        type={type ?? 'button'}
        className={classes}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
        {arrow}
      </button>
    )
  }

  return (
    <a
      href={renderHref}
      className={classes}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
      {arrow}
    </a>
  )
}

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cx('site-shell', className)}>{children}</div>
}

export function SectionHeading({
  title,
  summary,
  eyebrow,
  align = 'left',
}: {
  title: string
  summary?: string
  eyebrow?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cx('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sage-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-charcoal sm:text-4xl lg:text-[3.3rem]">
        {title}
      </h2>
      {summary ? (
        <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
          {summary}
        </p>
      ) : null}
    </div>
  )
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return undefined
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.disconnect()
          }
        }
      },
      { threshold: 0.16 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal
      className={cx('reveal', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3 text-charcoal"
      aria-label={`${brand.name} home`}
    >
      <span
        className={cx(
          'flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-stone-300 bg-white shadow-sm transition duration-200 group-hover:-translate-y-0.5',
          compact && 'h-12 w-12',
        )}
      >
        <img
          src={saltLogo}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain p-1"
        />
      </span>
      <span className="flex flex-col">
        <span className={cx('font-heading text-2xl leading-none tracking-[0.12em]', compact && 'text-xl')}>
          S.A.L.T.
        </span>
        <span className="mt-1 text-xs uppercase tracking-[0.26em] text-stone-500">
          Senior &amp; Living Today
        </span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-ivory-50/95 backdrop-blur-xl">
      <div className="border-b border-sage-100 bg-white/80">
        <Container className="flex flex-wrap items-center justify-center gap-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sage-700 sm:justify-between">
          <span>Free Planner Downloads</span>
          <span className="hidden sm:inline">•</span>
          <span>Book a Free Consultation</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Care. Comfort. Community. Clarity.</span>
        </Container>
      </div>
      <Container className="flex items-center justify-between py-4">
        <LogoMark />

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cx(
                  'rounded-full px-3 py-2 text-[0.85rem] font-medium text-stone-600 transition hover:bg-white hover:text-charcoal',
                  isActive && 'bg-sage-50 text-sage-700 shadow-sm',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ActionButton to="/contact/" variant="primary">
            Book a Free Consultation
          </ActionButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white text-charcoal lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-stone-200 bg-white lg:hidden"
        >
          <Container className="space-y-4 py-4">
            <nav className="grid gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cx(
                      'flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-3 text-base font-medium text-charcoal',
                      isActive && 'border-sage-300 bg-sage-50',
                    )
                  }
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-stone-400" />
                </NavLink>
              ))}
            </nav>
            <ActionButton
              to="/contact/"
              variant="primary"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Book a Free Consultation
            </ActionButton>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-sage-100 bg-sage-50 text-charcoal">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <LogoMark compact />
            <p className="max-w-sm text-base leading-8 text-stone-600">
              {brand.tagline} Trusted support, planning tools, and community
              resources for seniors and caregivers.
            </p>
            <div className="grid gap-3 text-sm text-stone-600">
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 hover:text-sage-700">
                <Phone className="h-4 w-4" />
                {contact.phoneDisplay}
              </a>
              <a href={contact.emailHref} className="inline-flex items-center gap-2 hover:text-sage-700">
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
              <p className="inline-flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sage-500" />
                <span>{contact.mailingAddress}</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl text-charcoal">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-stone-600">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-sage-700" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-2xl text-charcoal">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-stone-600">
              <li>
                <Link className="transition hover:text-sage-700" to="/community/">
                  Community
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sage-700" to="/podcast/">
                  Podcast
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sage-700" to="/shop/">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sage-700" to="/living-legacy-planner/">
                  Living Legacy Planner
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sage-700" to="/blog/">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sage-700" to="/affiliate-program/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sage-700" to="/partner-program/">
                  Partner Program
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sage-700" to="/subscription-box/">
                  Subscription Box
                </Link>
              </li>
              <li>
                <a
                  className="transition hover:text-sage-700"
                  href={contact.storeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Store link
                </a>
              </li>
              <li>
                <Link className="transition hover:text-sage-700" to="/contact/">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sage-700" to="/privacy-policy/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sage-700" to="/terms-conditions/">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-2xl text-charcoal">Stay Connected</h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Join the community for tips, webinars, and encouragement that
              make senior life easier to navigate.
            </p>
            <ActionButton
              to="/community/"
              variant="secondary"
              className="mt-5 bg-white text-charcoal"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Join the Community
            </ActionButton>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-sage-100 pt-6 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Senior &amp; Living Today. All rights reserved.</p>
          <p>Care. Comfort. Community. Clarity.</p>
        </div>
      </Container>
    </footer>
  )
}

export function PageHero({
  title,
  summary,
  primaryAction,
  secondaryAction,
  image,
  imageAlt,
  aside,
  reverse = false,
}: {
  title: string
  summary: string
  primaryAction: { label: string; to: string }
  secondaryAction?: { label: string; to: string }
  image: string
  imageAlt: string
  aside?: ReactNode
  reverse?: boolean
}) {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className={cx('space-y-8', reverse && 'lg:order-2')}>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              {summary}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionButton to={primaryAction.to} variant="primary">
              {primaryAction.label}
            </ActionButton>
            {secondaryAction ? (
              <ActionButton to={secondaryAction.to} variant="secondary">
                {secondaryAction.label}
              </ActionButton>
            ) : null}
          </div>

          {aside ? <div>{aside}</div> : null}
        </div>

        <div className={cx('space-y-4', reverse && 'lg:order-1')}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-soft">
            <img
              src={image}
              alt={imageAlt}
              className="h-[28rem] w-full object-cover sm:h-[32rem]"
            />
          </div>
          <div className="grid gap-4 rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-soft sm:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                Guided support
              </p>
              <p className="mt-2 font-heading text-2xl text-charcoal">
                Trusted help, without extra noise
              </p>
            </div>
            <p className="text-sm leading-7 text-stone-600">
              Practical next steps, readable resources, and compassionate
              support for every stage of the journey.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
