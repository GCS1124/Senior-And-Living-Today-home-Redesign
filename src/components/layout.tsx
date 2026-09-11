import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  ArrowRight,
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
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold tracking-[0.01em] shadow-[0_14px_30px_-18px_rgba(23,36,61,0.7)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-50 disabled:pointer-events-none disabled:opacity-60',
    variant === 'primary' &&
      'bg-charcoal text-white hover:bg-navy-700',
    variant === 'secondary' &&
      'border border-charcoal/15 bg-white/70 text-charcoal shadow-sm hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-700',
    variant === 'ghost' &&
      'border border-transparent bg-transparent text-charcoal hover:bg-gold-50',
    variant === 'link' &&
      'px-0 py-0 text-gold-700 hover:text-gold-800',
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
  return <div className={cx('site-shell relative', className)}>{children}</div>
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
    <div
      className={cx(
        'section-heading max-w-3xl',
        align === 'center' && 'section-heading--center mx-auto text-center',
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.26em] text-gold-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-semibold leading-[0.98] text-charcoal sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      <span className="section-heading-rule" aria-hidden="true" />
      {summary ? (
        <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">
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

export function LogoMark({
  compact = false,
  inverse = false,
}: {
  compact?: boolean
  inverse?: boolean
}) {
  return (
    <Link
      to="/"
      className={cx('group inline-flex items-center gap-3', inverse ? 'text-white' : 'text-charcoal')}
      aria-label={`${brand.name} home`}
    >
      <span
        className={cx(
          'flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.15rem] border border-gold-300/80 bg-white shadow-sm transition duration-200 group-hover:-translate-y-0.5',
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
        <span className={cx('mt-1 text-xs uppercase tracking-[0.26em]', inverse ? 'text-white/55' : 'text-stone-500')}>
          Senior &amp; Living Today
        </span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="site-header sticky top-0 z-50 border-b border-charcoal/10 bg-ivory-50/95 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <LogoMark />

        <nav className="hidden items-center gap-1 rounded-full border border-charcoal/8 bg-white/60 p-1 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cx(
                  'rounded-full px-3.5 py-2.5 text-base font-medium text-stone-600 transition hover:bg-white hover:text-charcoal',
                  isActive && 'bg-charcoal text-white shadow-sm hover:bg-charcoal hover:text-white',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ActionButton
            href="https://community.seniorandlivingtoday.com"
            target="_blank"
            rel="noreferrer"
            variant="primary"
            className="bg-gold-300 !text-charcoal hover:bg-gold-200"
          >
            Login / Sign up
          </ActionButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-charcoal/15 bg-white text-charcoal shadow-sm lg:hidden"
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
          className="border-t border-charcoal/10 bg-ivory-50 lg:hidden"
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
                      isActive && 'border-gold-300 bg-gold-50',
                    )
                  }
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-stone-400" />
                </NavLink>
              ))}
            </nav>
            <ActionButton
              href="https://community.seniorandlivingtoday.com"
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Login / Sign up
            </ActionButton>
          </Container>
        </div>
        ) : null}
      </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-white/10 bg-charcoal text-white">
      <Container className="relative z-10 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-6">
            <LogoMark compact inverse />
            <p className="max-w-sm text-base leading-8 text-white/68">
              S.A.L.T – Senior and Living Today aims to enhance seniors’ quality of life through compassion driven care led by Courtney.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-3xl text-white">QUICK LINKS</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/68">
              <li><Link className="transition hover:text-gold-200" to="/">Home</Link></li>
              <li><Link className="transition hover:text-gold-200" to="/contact/">Contact</Link></li>
              <li><Link className="transition hover:text-gold-200" to="/senior-living-in-usa/">About Us</Link></li>
              <li><Link className="transition hover:text-gold-200" to="/shop/">Shop Now</Link></li>
              <li><Link className="transition hover:text-gold-200" to="/blog/">Blogs</Link></li>
              <li><Link className="transition hover:text-gold-200" to="/privacy-policy/">Privacy Policy</Link></li>
              <li><Link className="transition hover:text-gold-200" to="/terms-conditions/">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-3xl text-white">OUR CONTACT</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/68">
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 transition hover:text-gold-200">
                <Phone className="h-4 w-4 text-gold-300" />
                {contact.phoneDisplay}
              </a>
              <a href={contact.emailHref} className="inline-flex items-center gap-2 transition hover:text-gold-200">
                <Mail className="h-4 w-4 text-gold-300" />
                {contact.email}
              </a>
              <p className="inline-flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" />
                <span>P O box 15 Dayton, Ohio 45404</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© Copyright 2025 | Senior and living today powered by Global Creative Services</p>
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
    <section className="page-hero relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,213,58,0.2),_transparent_30%),linear-gradient(135deg,_rgba(255,255,255,0.82),_rgba(238,244,255,0.76))]">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className={cx('space-y-6', reverse && 'lg:order-2')}>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-charcoal sm:text-5xl lg:text-[4.4rem]">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
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
          <div className="image-frame relative overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="h-[24rem] w-full object-cover sm:h-[28rem]"
            />
          </div>
          <div className="grid gap-4 rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-soft sm:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                Guided support
              </p>
              <p className="mt-2 font-heading text-xl text-charcoal">
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
