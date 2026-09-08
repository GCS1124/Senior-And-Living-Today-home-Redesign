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

        <main id="main-content">
        <section id="home" className="relative overflow-hidden bg-[#102f68] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(245,197,24,0.22),transparent_26%),radial-gradient(circle_at_0%_80%,rgba(68,126,215,0.3),transparent_30%)]" />
          <Container className="relative grid items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-16">
            <Reveal className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Care. Comfort. Community.
              </div>
              <h1 className="mt-6 max-w-xl font-heading text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.6rem]">
                Simple planning for the people you love.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">
                Trusted guidance and thoughtful tools for seniors, caregivers, and families.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ActionButton
                  to="/living-legacy-planner/"
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
              <div className="mt-8 grid max-w-lg gap-3 border-t border-white/20 pt-5 sm:grid-cols-3">
                {plannerPromises.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm font-semibold leading-6 text-white/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-200" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative" delay={120}>
              <div className="image-lift overflow-hidden rounded-[1.5rem] border-8 border-white/20 bg-[#27579a] shadow-[0_28px_70px_rgba(0,0,0,0.2)]">
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
              <div className="absolute -right-3 bottom-7 hidden w-28 rotate-3 rounded-2xl border-4 border-white bg-[#172d75] p-1 shadow-[0_16px_30px_rgba(0,0,0,0.24)] sm:block lg:-right-6 lg:w-32">
                <img
                  src={plannerCoverSquare}
                  alt="The Living Legacy Planner cover"
                  className="aspect-[0.9/1] w-full rounded-xl object-cover"
                />
                <p className="px-1 py-2 text-center text-[0.58rem] font-bold uppercase leading-tight tracking-[0.12em] text-yellow-100">
                  Plan with peace
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="about" className="scroll-mt-24 bg-[#f8f4ec]">
          <Container className="grid gap-10 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12 lg:py-20">
            <Reveal className="relative">
              <div className="image-lift overflow-hidden rounded-[1.5rem] border-8 border-white bg-white shadow-[0_20px_48px_rgba(23,45,117,0.12)]">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="aspect-[0.9/1] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 right-5 rounded-2xl border border-[#d8d1c5] bg-white px-4 py-3 text-[#17243d] shadow-[0_14px_28px_rgba(23,45,117,0.12)] sm:right-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2454a4]">Founder-led</p>
                <p className="mt-1 font-heading text-xl leading-none">Human support</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="home-eyebrow">About S.A.L.T.</p>
              <h2 className="mt-3 max-w-2xl font-heading text-4xl font-semibold leading-[0.93] tracking-[-0.04em] text-[#17243d] sm:text-5xl">
                Care starts with connection.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600">
                {founder.summary}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ['Listen first', 'Support built around real people.'],
                  ['Keep it clear', 'Helpful information without the clutter.'],
                  ['Stay connected', 'Tools that keep families close.'],
                ].map(([title, summary]) => (
                  <div key={title} className="rounded-2xl border border-[#d8d1c5] bg-white/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#9eb8df] hover:bg-white hover:shadow-[0_14px_28px_rgba(23,45,117,0.08)]">
                    <h3 className="font-heading text-2xl leading-none text-[#17243d]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{summary}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="planner" className="scroll-mt-24 bg-[#eef4ff]">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-4 border-b border-[#b7c9e7] pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="home-eyebrow">The Living Legacy Planner</p>
                  <h2 className="mt-3 max-w-2xl font-heading text-4xl font-semibold leading-[0.92] tracking-[-0.04em] text-[#17243d] sm:text-5xl">
                    One planner. More peace of mind.
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-stone-600">
                  Choose the edition that fits your family and start one page at a time.
                </p>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {plannerCards.map((card) => (
                  <article
                    key={card.title}
                    className={card.featured ? 'group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#9eb8df] bg-white shadow-[0_18px_44px_rgba(23,45,117,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(23,45,117,0.16)]' : 'group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#c9d7ec] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#9eb8df] hover:shadow-[0_18px_40px_rgba(23,45,117,0.12)]'}
                  >
                    <div className="image-lift flex h-[18rem] items-center justify-center bg-[#172d75] p-5">
                      <img src={card.image} alt={card.alt} className="h-full w-full object-contain" />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2454a4]">{card.eyebrow}</p>
                      <h3 className="mt-2 font-heading text-2xl leading-tight text-[#17243d]">{card.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-stone-600">{card.summary}</p>
                      <ActionButton to="/living-legacy-planner/" variant={card.featured ? 'primary' : 'secondary'} className="mt-5 self-start">
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
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="home-eyebrow">Real stories</p>
                <h2 className="mt-3 font-heading text-4xl font-semibold leading-[0.92] tracking-[-0.04em] text-[#17243d] sm:text-5xl">
                  The moments are the message.
                </h2>
                <p className="mt-4 text-base leading-7 text-stone-600">
                  The plans matter because the people matter.
                </p>
              </div>
              <div className="mt-8 grid auto-rows-[10rem] gap-3 sm:grid-cols-2 sm:auto-rows-[12rem]">
                {gallery.map((item) => (
                    <figure key={item.alt} className={`image-lift group relative overflow-hidden rounded-[1.25rem] bg-stone-100 ${item.className}`}>
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
          <Container className="grid gap-8 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-200">We are here to help</p>
              <h2 className="mt-3 max-w-2xl font-heading text-4xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-5xl">
                Need a little guidance?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-blue-50">
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
