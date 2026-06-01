import { useMemo, useState, type ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  CalendarDays,
  Check,
  ChevronDown,
  HeartHandshake,
  LaptopMinimal,
  MessagesSquare,
  ShoppingBag,
  Sparkles,
  Users,
} from 'lucide-react'

import { contact } from '../data/site'
import { cx } from '../lib/cx'
import { ActionButton } from './layout'

type IconName = 'users' | 'heart' | 'calendar' | 'laptop'

const iconMap: Record<IconName, ReactNode> = {
  users: <Users className="h-5 w-5" aria-hidden="true" />,
  heart: <HeartHandshake className="h-5 w-5" aria-hidden="true" />,
  calendar: <CalendarDays className="h-5 w-5" aria-hidden="true" />,
  laptop: <LaptopMinimal className="h-5 w-5" aria-hidden="true" />,
}

export function ServiceCard({
  title,
  summary,
  href,
  icon,
}: {
  title: string
  summary: string
  href: string
  icon: IconName
}) {
  return (
    <Link
      to={href}
      className="group rounded-[1.6rem] border border-stone-200 bg-white p-6 shadow-[0_15px_50px_rgba(86,67,41,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-soft"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-800">
        {iconMap[icon]}
      </div>
      <h3 className="mt-5 font-heading text-3xl leading-tight text-charcoal">
        {title}
      </h3>
      <p className="mt-3 text-base leading-7 text-stone-600">{summary}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 transition group-hover:text-gold-800">
        Learn more
        <Sparkles className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  )
}

export function ProductCard({
  title,
  summary,
  price,
  href,
  image,
  badge,
  cta,
  featured = false,
}: {
  title: string
  summary: string
  price: string
  href: string
  image: string
  badge: string
  cta: string
  featured?: boolean
}) {
  return (
    <article
      className={cx(
        'grid overflow-hidden rounded-[1.9rem] border border-stone-200 bg-white shadow-[0_18px_60px_rgba(86,67,41,0.08)] lg:grid-cols-[0.95fr_1.05fr]',
        featured && 'border-gold-200',
      )}
    >
      <div className="relative min-h-[18rem] bg-ivory-50">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute left-4 top-4 rounded-full bg-charcoal/85 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur">
          {badge}
        </div>
      </div>
      <div className="flex flex-col justify-between p-6 sm:p-8">
        <div>
          <h3 className="font-heading text-3xl leading-tight text-charcoal">
            {title}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-8 text-stone-600">
            {summary}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <p className="text-2xl font-semibold text-charcoal">{price}</p>
          <ActionButton to={href} variant="primary">
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            {cta}
          </ActionButton>
        </div>
      </div>
    </article>
  )
}

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  href,
  image,
}: {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  href: string
  image: string
}) {
  return (
    <Link
      to={href}
      className="group overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white shadow-[0_15px_50px_rgba(86,67,41,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="h-52 overflow-hidden bg-ivory-50">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-3 p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
          <span>{category}</span>
          <span className="h-1 w-1 rounded-full bg-stone-300" />
          <span>{date}</span>
          <span className="h-1 w-1 rounded-full bg-stone-300" />
          <span>{readTime}</span>
        </div>
        <h3 className="font-heading text-3xl leading-tight text-charcoal">
          {title}
        </h3>
        <p className="text-base leading-7 text-stone-600">{excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 transition group-hover:text-gold-800">
          Read more
          <MessagesSquare className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

export function BulletList({
  items,
  className,
}: {
  items: ReadonlyArray<string>
  className?: string
}) {
  return (
    <ul className={cx('space-y-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-7 text-stone-600">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-800">
            <Check className="h-4 w-4" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function FaqList({
  items,
}: {
  items: ReadonlyArray<{ question: string; answer: string }>
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-[1.4rem] border border-stone-200 bg-white p-5 shadow-sm"
        >
          <summary className="cursor-pointer list-none font-semibold text-charcoal">
            <span className="flex items-center justify-between gap-4">
              <span>{item.question}</span>
              <span className="text-gold-700 transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-4 text-base leading-7 text-stone-600">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function ContactForm({
  defaultInterest,
}: {
  defaultInterest?: string
}) {
  const [searchParams] = useSearchParams()
  const initialInterest =
    searchParams.get('service') ?? defaultInterest ?? 'Senior Care Consulting'
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: initialInterest,
    message: '',
    marketingSms: false,
    nonMarketingSms: false,
  })

  const serviceOptions = useMemo(
    () => [
      'Senior Care Consulting',
      'Caregiver Support',
      'Elderly In-Home Care Guidance',
      'Community & Webinars',
      'Senior Care Virtual Assistant Services',
      'Shop / Planners',
      'Other',
    ],
    [],
  )

  return (
    <form
      className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_80px_rgba(86,67,41,0.07)] sm:p-8"
      onSubmit={(event) => {
        event.preventDefault()
        setStatus('success')
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-charcoal">Name</span>
          <input
            required
            value={formData.name}
            onChange={(event) =>
              setFormData((current) => ({ ...current, name: event.target.value }))
            }
            className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-stone-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-charcoal">Email</span>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(event) =>
              setFormData((current) => ({ ...current, email: event.target.value }))
            }
            className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-stone-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-charcoal">Phone</span>
          <input
            value={formData.phone}
            onChange={(event) =>
              setFormData((current) => ({ ...current, phone: event.target.value }))
            }
            className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-stone-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
            placeholder="(555) 555-5555"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-charcoal">Service interest</span>
          <div className="relative">
            <select
              value={formData.serviceInterest}
              onChange={(event) =>
                setFormData((current) => ({ ...current, serviceInterest: event.target.value }))
              }
              className="w-full appearance-none rounded-2xl border border-stone-300 bg-white px-4 py-3 pr-12 text-base text-charcoal outline-none transition focus:border-gold-400 focus:ring-1 focus:ring-gold-200 focus-visible:outline-none"
            >
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500"
              aria-hidden="true"
            />
          </div>
        </label>
      </div>

      <label className="mt-5 grid gap-2">
        <span className="text-sm font-semibold text-charcoal">Message</span>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(event) =>
            setFormData((current) => ({ ...current, message: event.target.value }))
          }
          className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-stone-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
          placeholder="Tell us a little about what you need."
        />
      </label>

      <div className="mt-6 space-y-4 rounded-[1.5rem] bg-ivory-50 p-5">
        <label className="flex items-start gap-3 text-sm leading-7 text-stone-700">
          <input
            type="checkbox"
            checked={formData.marketingSms}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                marketingSms: event.target.checked,
              }))
            }
            className="mt-1 h-5 w-5 rounded border-stone-300 text-gold-600 focus:ring-gold-300"
          />
          <span>
            I agree to receive marketing SMS messages from S.A.L.T. Message and
            data rates may apply. Reply STOP to opt out. By submitting this form,
            I agree to the <Link to="/terms-conditions/" className="text-gold-700 underline">Terms &amp; Conditions</Link> and{' '}
            <Link to="/privacy-policy/" className="text-gold-700 underline">Privacy Policy</Link>.
          </span>
        </label>
        <label className="flex items-start gap-3 text-sm leading-7 text-stone-700">
          <input
            type="checkbox"
            checked={formData.nonMarketingSms}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                nonMarketingSms: event.target.checked,
              }))
            }
            className="mt-1 h-5 w-5 rounded border-stone-300 text-gold-600 focus:ring-gold-300"
          />
          <span>
            I agree to receive non-marketing SMS messages such as appointment
            reminders and follow-up updates. Message and data rates may apply.
          </span>
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-7 text-stone-500">
          Please review our Terms &amp; Conditions and Privacy Policy before
          submitting. If you need immediate help, call{' '}
          <a href={contact.phoneHref} className="font-semibold text-gold-700">
            {contact.phoneDisplay}
          </a>
          .
        </p>
        <ActionButton type="submit" variant="primary" className="shrink-0">
          Send Message
        </ActionButton>
      </div>

      {status === 'success' ? (
        <div className="mt-6 rounded-[1.25rem] border border-sage-200 bg-sage-50 px-5 py-4 text-sm leading-7 text-sage-900">
          Thank you. Your message is ready to be reviewed by the S.A.L.T. team.
          If this site is connected to a form service, this submission can be
          routed immediately. For urgent help, call {contact.phoneDisplay}.
        </div>
      ) : null}
    </form>
  )
}
