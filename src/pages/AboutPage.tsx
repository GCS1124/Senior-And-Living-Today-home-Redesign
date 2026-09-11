import { HandHeart, ShieldCheck, UsersRound } from 'lucide-react'

import aboutCommunity from '../assets/user/about-community.png'
import coupleOutdoors from '../assets/user/couple-outdoors.png'
import familyPorch from '../assets/user/family-porch.png'
import gardenBench from '../assets/user/garden-bench.png'
import parkCommunity from '../assets/user/park-community.png'
import plannerCoverSquare from '../assets/user/planner-cover-square.png'
import relicsCenturyPlanner from '../assets/user/relics-century-planner.png'
import seniorDinner from '../assets/user/senior-dinner.png'
import { organizationSchema } from '../data/schema'
import { ActionButton, Container, Reveal, SiteFooter, SiteHeader } from '../components/layout'
import { Seo } from '../components/seo'

const whyChooseCards = [
  {
    icon: <HandHeart className="h-7 w-7" aria-hidden="true" />,
    title: 'Kindness and Compassion',
    text:
      'Step into our world and experience the warmth of Courtney’s compassion—a hallmark of our approach to Senior Living in USA . Her genuine kindness brings joy and comfort to seniors and their families alike. Every interaction is infused with empathy, ensuring that no one feels alone on their journey. With Courtney leading the way, you’ll find a sanctuary of care and understanding.',
  },
  {
    icon: <ShieldCheck className="h-7 w-7" aria-hidden="true" />,
    title: 'Courteous Expertise',
    text:
      'Courtney’s expertise goes beyond traditional senior care. She understands the unique challenges seniors face and provides personalized strategies to address them with grace and courtesy. Whether you’re navigating Senior Living in USA options or seeking guidance on aging in place, Courtney and her team are here to help. With her by your side, you’ll feel confident and supported every step of the way.',
  },
  {
    icon: <UsersRound className="h-7 w-7" aria-hidden="true" />,
    title: 'A True Leader',
    text:
      'Courtney is more than a leader—she’s a beacon of inspiration for our team and the families we serve. Fearless, compassionate, and always leading by example, she ensures that S.A.L.T. isn’t just a business but a sanctuary of caring hearts united in our mission. Under Courtney’s guidance, we’re dedicated to making a meaningful difference in the lives of seniors across America.',
  },
] as const

const storyImages = [
  { src: familyPorch, className: 'md:col-span-7 md:row-span-2 aspect-[4/3]' },
  { src: seniorDinner, className: 'md:col-span-5 aspect-[3/4]' },
  { src: coupleOutdoors, className: 'md:col-span-5 aspect-[4/3]' },
  { src: gardenBench, className: 'md:col-span-4 aspect-[3/4]' },
  { src: parkCommunity, className: 'md:col-span-8 aspect-[4/3]' },
] as const

export function AboutPage() {
  return (
    <>
      <Seo
        title="Trusted Senior Living in USA"
        description="Empowering Seniors with Compassionate Senior Living in USA"
        canonical="/senior-living-in-usa/"
        jsonLd={organizationSchema()}
      />
      <SiteHeader />
      <main className="overflow-hidden">
        <section className="relative bg-ivory-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,_rgba(255,204,64,0.22),_transparent_27%),radial-gradient(circle_at_90%_82%,_rgba(39,73,130,0.14),_transparent_32%)]" />
          <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16 lg:py-24">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.4rem] border border-gold-300/70 bg-[#eee8dd] p-2 shadow-[0_24px_70px_rgba(23,36,61,0.18)] sm:p-3">
                <div className="rounded-[1.9rem] border border-white/90 bg-white p-2 shadow-inner sm:p-3">
                  <img
                    src={aboutCommunity}
                    alt="Senior Living in USA , Home Care Assistance"
                    className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
                  />
                </div>
                <span className="absolute right-7 top-7 h-3 w-3 rounded-full bg-gold-400 shadow-[0_0_0_7px_rgba(255,204,64,0.18)]" />
              </div>
            </Reveal>

            <Reveal className="max-w-2xl" delay={100}>
              <p className="mb-5 inline-flex rounded-full bg-gold-300 px-4 py-1.5 text-sm font-semibold text-charcoal">
                About Us
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.45rem]">
                Empowering Seniors with Compassionate Senior Living in USA
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
                At S.A.L.T (Senior and Living Today) we’re proud to be led by Courtney Jones, a passionate advocate for seniors.Courtney founded S.A.L.T to provide trusted resources and innovative solutions for seniors and their care providers all across the USA. Her mission is simple yet powerful: to create a supportive community where seniors and those that care for them feel valued , repected and cared for.
              </p>
              <ActionButton
                href="https://community.seniorandlivingtoday.com"
                target="_blank"
                rel="noreferrer"
                variant="primary"
                className="mt-8 bg-gold-300 !text-charcoal hover:bg-gold-200"
              >
                Discover the Community
              </ActionButton>
            </Reveal>
          </Container>
        </section>

        <section className="relative bg-[#1b3158] py-16 text-white sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,_rgba(255,204,64,0.17),_transparent_28%),linear-gradient(135deg,rgba(13,29,55,0.35),transparent_58%)]" />
          <Container className="relative">
            <Reveal>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[4.2rem]">
                Why Choose us
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {whyChooseCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 90} className="h-full">
                  <article className="relative flex h-full flex-col rounded-[2rem] border border-white/15 bg-white p-7 text-center text-charcoal shadow-[0_18px_45px_rgba(5,18,42,0.18)] sm:p-9">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1b3158] text-white ring-8 ring-gold-300/20">
                      {card.icon}
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold leading-tight sm:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
                      {card.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-stone-100">
          <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="relative grid grid-cols-2 gap-4 rounded-[2.5rem] border border-gold-300/70 bg-[#f8f3e9] p-5 shadow-[0_24px_70px_rgba(23,36,61,0.14)] sm:gap-6 sm:p-8">
                <div className="absolute left-1/2 top-1/2 h-[78%] w-px -translate-x-1/2 -translate-y-1/2 bg-gold-300/60" />
                <div className="rounded-[1.7rem] border border-white bg-white p-3 shadow-[0_12px_30px_rgba(23,36,61,0.1)] sm:p-4">
                  <img
                    src={plannerCoverSquare}
                    alt="The Living Legacy Planner"
                    className="aspect-[3/4] w-full object-contain"
                  />
                </div>
                <div className="rounded-[1.7rem] border border-white bg-white p-3 shadow-[0_12px_30px_rgba(23,36,61,0.1)] sm:p-4">
                  <img
                    src={relicsCenturyPlanner}
                    alt="Relics of the Century"
                    className="aspect-[3/4] w-full object-contain"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="max-w-2xl text-xl leading-9 text-stone-700 sm:text-2xl sm:leading-10">
                <strong className="font-semibold text-charcoal">Embrace Warmth, Respect, and Attention to Detail-</strong> At S.A.L.T., we’re committed to making every moment sweeter for seniors and those who care for them. Led by Courtney, our tight-knit team is driven by a shared mission of spreading kindness and compassion through thoughtful Senior Living in Dayton resources. From personalized consulting to curated tools, we’re here to support you and your loved ones every step of the way.
              </p>
              <ActionButton
                href="https://www.amazon.com"
                target="_blank"
                rel="noreferrer"
                variant="primary"
                className="mt-8 bg-gold-300 !text-charcoal hover:bg-gold-200"
              >
                Buy a Book Now
              </ActionButton>
            </Reveal>
          </Container>
        </section>

        <section className="bg-white">
          <Container className="py-16 sm:py-24">
            <Reveal>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-charcoal sm:text-5xl lg:text-[4.2rem]">
                Real Stories, True Smiles
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-12 md:auto-rows-[11rem]">
                {storyImages.map((image, index) => (
                  <div
                    key={image.src}
                    className={`group relative overflow-hidden rounded-[2rem] border border-gold-300/70 bg-[#f8f3e9] p-3 shadow-[0_18px_46px_rgba(23,36,61,0.12)] sm:p-4 ${image.className}`}
                  >
                    <div className="relative h-full overflow-hidden rounded-[1.45rem] border border-white bg-white p-1.5 sm:p-2">
                      <img
                        src={image.src}
                        alt={`Untitled design (${6 - index})`}
                        className="h-full w-full rounded-[1.1rem] object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute right-4 top-4 h-3 w-3 rounded-full bg-gold-400 shadow-[0_0_0_6px_rgba(255,204,64,0.2)]" />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
