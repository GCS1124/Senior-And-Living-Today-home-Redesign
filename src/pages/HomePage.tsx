import {
  Check,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import familyPorch from '../assets/user/family-porch.png'
import familyMemory from '../assets/user/family-memory.png'
import seniorDinner from '../assets/user/senior-dinner.png'
import coupleOutdoors from '../assets/user/couple-outdoors.png'
import familyTable from '../assets/user/family-table.png'
import livingLegacyPlanner from '../assets/user/living-legacy-planner.png'
import militaryPlanner from '../assets/user/military-planner.png'
import plannerCoverSquare from '../assets/user/planner-cover-square.png'
import {
  brand,
  contact,
  founder,
  homeHero,
} from '../data/site'
import { organizationSchema, websiteSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  Reveal,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { Seo } from '../components/seo'

const plannerCards = [
  {
    image: livingLegacyPlanner,
    alt: 'The Living Legacy Planner second edition cover',
    eyebrow: 'Featured planner',
    title: 'The Living Legacy Planner',
    summary: 'A clear place for wishes, memories, and the details your family needs.',
    featured: true,
  },
  {
    image: militaryPlanner,
    alt: 'The Living Legacy Planner Military Deployment and Family Readiness Edition cover',
    eyebrow: 'Family readiness',
    title: 'Military Deployment Edition',
    summary: 'Plan today, protect tomorrow, and keep your family connected.',
    featured: false,
  },
  {
    image: plannerCoverSquare,
    alt: 'The Living Legacy Planner cover with a family illustration',
    eyebrow: 'Second edition',
    title: 'A meaningful place for every story',
    summary: 'A thoughtful tool for conversations that matter.',
    featured: false,
  },
] as const

const gallery = [
  {
    image: familyTable,
    alt: 'Three generations smiling together at home',
    caption: 'The people and memories that matter most.',
    className: 'sm:col-span-2 sm:row-span-2',
  },
  {
    image: seniorDinner,
    alt: 'Senior woman smiling during a meal',
    caption: 'Joy belongs in every season of life.',
    className: '',
  },
  {
    image: coupleOutdoors,
    alt: 'Couple enjoying time together outdoors',
    caption: 'A life well lived is worth celebrating.',
    className: '',
  },
  {
    image: familyMemory,
    alt: 'A daughter sharing a warm moment with her mother',
    caption: 'Support feels better when it feels personal.',
    className: 'sm:col-span-2',
  },
  {
    image: familyPorch,
    alt: 'Two friends smiling together on a porch',
    caption: 'Every good plan starts with a human conversation.',
    className: 'sm:col-span-2',
  },
] as const

const plannerPromises = [
  'Large, clear pages',
  'Simple prompts',
  'Family-friendly planning',
] as const

export function HomePage() {
  return (
    <div className="home-page">
      <Seo
        title={brand.shortName}
        description="Simple planning tools, personal support, and community for seniors, caregivers, and families."
        canonical="/"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />
      <SiteHeader />

      <main>
        <section id="home" className="relative overflow-hidden bg-[#102f68] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(245,197,24,0.22),transparent_26%),radial-gradient(circle_at_0%_80%,rgba(68,126,215,0.3),transparent_30%)]" />
          <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
            <Reveal className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Care. Comfort. Community.
              </div>
              <h1 className="mt-7 max-w-xl font-heading text-[3.5rem] font-semibold leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.4rem]">
                Simple planning for the people you love.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50 sm:text-xl">
                Trusted guidance and thoughtful tools for seniors, caregivers, and families.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ActionButton
                  to="/shop/#living-legacy-planner"
                  variant="secondary"
                  className="!border-yellow-300 !bg-yellow-300 !text-[#102f68] hover:!bg-yellow-200"
                >
                  Explore the planner
                </ActionButton>
                <ActionButton
                  to="/contact/"
                  variant="ghost"
                  className="!border-white/25 !text-white hover:!bg-white/10"
                >
                  Talk with us
                </ActionButton>
              </div>
              <div className="mt-10 grid max-w-lg gap-3 border-t border-white/20 pt-6 sm:grid-cols-3">
                {plannerPromises.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm font-semibold leading-6 text-white/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-200" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative" delay={120}>
              <div className="overflow-hidden rounded-[1.5rem] border-8 border-white/20 bg-[#27579a] shadow-[0_28px_70px_rgba(0,0,0,0.2)]">
                <img
                  src={homeHero.image}
                  alt="Courtney Jones, founder of Senior & Living Today, with The Living Legacy Planner"
                  className="aspect-[1.25/1] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-5 max-w-[15rem] rounded-2xl border border-slate-200 bg-white p-4 text-[#102f68] shadow-[0_18px_40px_rgba(0,0,0,0.2)] sm:left-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2454a4]">{founder.years}</p>
                <p className="mt-2 font-heading text-xl leading-tight">A calmer way forward.</p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="about" className="scroll-mt-24 bg-[#f8f4ec]">
          <Container className="grid gap-12 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-28">
            <Reveal className="overflow-hidden rounded-[1.5rem] border-8 border-white bg-white shadow-[0_20px_48px_rgba(23,45,117,0.12)]">
              <img
                src={founder.image}
                alt={founder.name}
                className="aspect-[0.9/1] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="home-eyebrow">About S.A.L.T.</p>
              <h2 className="mt-4 max-w-2xl font-heading text-5xl font-semibold leading-[0.93] tracking-[-0.04em] text-[#17243d] sm:text-6xl">
                Care starts with connection.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                {founder.summary}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ['Listen first', 'Support built around real people.'],
                  ['Keep it clear', 'Helpful information without the clutter.'],
                  ['Stay connected', 'Tools that keep families close.'],
                ].map(([title, summary]) => (
                  <div key={title} className="rounded-2xl border border-[#d8d1c5] bg-white/70 p-4">
                    <h3 className="font-heading text-2xl leading-none text-[#17243d]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{summary}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="planner" className="scroll-mt-24 bg-[#eef4ff]">
          <Container className="py-20 lg:py-28">
            <Reveal>
              <div className="flex flex-col gap-5 border-b border-[#b7c9e7] pb-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="home-eyebrow">The Living Legacy Planner</p>
                  <h2 className="mt-4 max-w-2xl font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-[#17243d] sm:text-6xl">
                    One planner. More peace of mind.
                  </h2>
                </div>
                <p className="max-w-md text-base leading-7 text-stone-600">
                  Choose the edition that fits your family and start one page at a time.
                </p>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {plannerCards.map((card) => (
                  <article
                    key={card.title}
                    className={card.featured ? 'overflow-hidden rounded-[1.5rem] border border-[#9eb8df] bg-white shadow-[0_18px_44px_rgba(23,45,117,0.12)] lg:col-span-1' : 'overflow-hidden rounded-[1.5rem] border border-[#c9d7ec] bg-white shadow-sm'}
                  >
                    <div className="image-lift flex h-[20rem] items-center justify-center bg-[#172d75] p-5">
                      <img src={card.image} alt={card.alt} className="h-full w-full object-contain" />
                    </div>
                    <div className="p-6 sm:p-7">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2454a4]">{card.eyebrow}</p>
                      <h3 className="mt-3 font-heading text-3xl leading-tight text-[#17243d]">{card.title}</h3>
                      <p className="mt-3 text-base leading-7 text-stone-600">{card.summary}</p>
                      <ActionButton to="/shop/#living-legacy-planner" variant={card.featured ? 'primary' : 'secondary'} className="mt-6">
                        See the planner
                      </ActionButton>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="stories" className="scroll-mt-24 bg-white">
          <Container className="py-20 lg:py-28">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="home-eyebrow">Real stories</p>
                <h2 className="mt-4 font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-[#17243d] sm:text-6xl">
                  The moments are the message.
                </h2>
                <p className="mt-5 text-lg leading-8 text-stone-600">
                  The plans matter because the people matter.
                </p>
              </div>
              <div className="mt-10 grid auto-rows-[12rem] gap-4 sm:grid-cols-2 sm:auto-rows-[14rem]">
                {gallery.map((item) => (
                  <figure key={item.alt} className={`group relative overflow-hidden rounded-[1.25rem] bg-stone-100 ${item.className}`}>
                    <img src={item.image} alt={item.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent px-5 pb-5 pt-14 text-sm font-semibold text-white">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[#102f68] text-white">
          <Container className="grid gap-10 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:py-24">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-200">We are here to help</p>
              <h2 className="mt-4 max-w-2xl font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-6xl">
                Need a little guidance?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-blue-50">
                Call or email us. We will help you find a simple next step.
              </p>
            </Reveal>
            <Reveal className="flex flex-col gap-3 sm:flex-row lg:flex-col" delay={100}>
              <ActionButton to="/contact/" variant="secondary" className="!border-yellow-300 !bg-yellow-300 !text-[#102f68] hover:!bg-yellow-200">
                Start a conversation
              </ActionButton>
              <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
              <a href={contact.emailHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email us
              </a>
            </Reveal>
          </Container>
        </section>

        <section className="bg-[#fff8d8]">
          <Container className="flex flex-col gap-4 py-6 text-sm text-[#17243d] sm:flex-row sm:items-center sm:justify-center">
            <ShieldCheck className="h-5 w-5 text-[#2454a4]" aria-hidden="true" />
            <span>Simple, respectful resources for seniors, caregivers, and families.</span>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
