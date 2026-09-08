import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  Mail,
  MapPin,
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
import { ActionButton, Container, Reveal, SiteFooter, SiteHeader } from '../components/layout'
import { BulletList } from '../components/content'
import { Seo } from '../components/seo'

const guidancePaths = [
  {
    number: '01',
    eyebrow: 'For seniors',
    title: 'Keep the important things close.',
    summary:
      'A clear place for wishes, memories, and everyday details, without making planning feel heavy.',
    cta: 'Start with the planner',
    href: '/shop/#living-legacy-planner',
    icon: BookOpen,
  },
  {
    number: '02',
    eyebrow: 'For caregivers',
    title: 'Feel less alone in the in-between.',
    summary:
      'Practical guidance, thoughtful check-ins, and resources for the people carrying care forward.',
    cta: 'Explore caregiver support',
    href: '/caregiver-support/',
    icon: HeartHandshake,
  },
  {
    number: '03',
    eyebrow: 'For families',
    title: 'Make the next decision together.',
    summary:
      'A calm sounding board when housing, support, or bigger planning choices need a clear path.',
    cta: 'Book a consultation',
    href: '/contact/?service=Senior%20Care%20Consulting',
    icon: ShieldCheck,
  },
] as const

const serviceIndex = [
  {
    number: '01',
    title: 'Senior Care Consulting',
    summary:
      'Personalized guidance for care options, housing, planning, and the next right step.',
    href: '/consulting/',
  },
  {
    number: '02',
    title: 'Caregiver Support',
    summary:
      'Resources, conversations, and practical support for the people caring every day.',
    href: '/caregiver-support/',
  },
  {
    number: '03',
    title: 'Community & Webinars',
    summary:
      'Online meetings, courses, and senior-friendly conversations that keep connection visible.',
    href: '/community/',
  },
  {
    number: '04',
    title: 'Virtual Assistant Services',
    summary:
      'Reminders, communication help, check-ins, and coordination for busy families.',
    href: '/senior-care-virtual-assistant-services/',
  },
] as const

const plannerBullets = [
  'Document final wishes in one calm, organized place',
  'Keep memories, notes, and essential details together',
  'Give family members one clear reference when questions come up',
] as const

const guideBullets = [
  'A simple conversation starter for family planning',
  'Clear prompts that help everyone stay on the same page',
  'A practical resource when decisions need to be made with care',
] as const

export function HomePage() {
  const featuredPost = blogPosts[0]
  const journalPosts = blogPosts.slice(1, 4)

  return (
    <div className="home-page">
      <Seo
        title={brand.shortName}
        description={brand.description}
        canonical="/"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="home-hero-wash" aria-hidden="true" />
          <div className="home-hero-gridlines" aria-hidden="true" />
          <Container className="relative z-10 grid min-h-0 items-center gap-7 py-8 lg:min-h-0 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:py-10">
            <Reveal className="home-hero-copy">
              <div className="home-kicker">
                <span className="home-kicker-mark">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>S.A.L.T. / Senior &amp; Living Today</span>
              </div>

              <h1>
                A more <em>human</em> way to plan for what comes next.
              </h1>

              <p className="home-hero-summary">{homeHero.summary}</p>

              <div className="home-hero-actions">
                <ActionButton
                  to={homeHero.primaryCta.to}
                  variant="secondary"
                  className="!border-gold-300 !bg-gold-400 !text-ink hover:!bg-gold-300"
                >
                  {homeHero.primaryCta.label}
                </ActionButton>
                <ActionButton
                  to={homeHero.secondaryCta.to}
                  variant="ghost"
                  className="!border-white/20 !text-white hover:!bg-white/10"
                >
                  {homeHero.secondaryCta.label}
                </ActionButton>
              </div>

              <div className="home-hero-proof">
                <span className="home-hero-proof-line" aria-hidden="true" />
                <p>
                  <strong>{founder.years}</strong> of practical care advocacy,
                  family guidance, and community building.
                </p>
              </div>
            </Reveal>

            <Reveal className="home-hero-visual" delay={120}>
              <div className="home-hero-image-wrap">
                <img
                  src={homeHero.image}
                  alt="Courtney Jones, founder of Senior & Living Today, with The Living Legacy Planner"
                  className="home-hero-image"
                />
                <div className="home-hero-image-shade" aria-hidden="true" />
                <div className="home-hero-image-label">
                  <span>With Courtney Jones</span>
                  <span>Founder / senior care advocate</span>
                </div>
              </div>
              <div className="home-hero-note">
                <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
                <span>Care, comfort, community, clarity.</span>
              </div>
              <div className="home-hero-side-note" aria-hidden="true">
                <span>01</span>
                <span className="home-vertical-rule" />
                <span>Begin here</span>
              </div>
            </Reveal>
          </Container>
          <div className="home-hero-bottom">
            <Container className="flex flex-wrap items-center justify-between gap-4 py-3">
              <p>Trusted resources for the moments that matter.</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {trustStrip.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Container>
          </div>
        </section>

        <section className="home-story">
          <Container className="grid gap-8 py-10 lg:grid-cols-[0.34fr_1fr] lg:gap-16 lg:py-12">
            <Reveal>
              <p className="home-eyebrow">The S.A.L.T. point of view</p>
              <p className="home-index-number">02</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="home-display-heading">
                Planning is not paperwork.
                <span> It is a love language.</span>
              </h2>
              <p className="home-story-copy">
                The conversations around aging can feel complicated, but they do
                not have to feel cold. S.A.L.T. brings together compassionate
                guidance, useful tools, and a community that makes room for the
                whole person.
              </p>
              <div className="home-story-signature">
                <div className="home-signature-line" aria-hidden="true" />
                <div>
                  <p className="font-heading text-3xl text-charcoal">Courtney Jones</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-stone-500">
                    Founder, S.A.L.T.
                  </p>
                </div>
              </div>
              <div className="home-principles">
                <div>
                  <span>01</span>
                  <p>Make the complicated feel clear.</p>
                </div>
                <div>
                  <span>02</span>
                  <p>Keep dignity at the center.</p>
                </div>
                <div>
                  <span>03</span>
                  <p>Leave families more connected.</p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="home-paths">
          <Container className="py-10 lg:py-12">
            <Reveal>
              <div className="flex flex-col gap-5 border-b border-charcoal/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="home-eyebrow">A place to begin</p>
                  <h2 className="home-section-heading mt-4">Find your next right step.</h2>
                </div>
                <p className="max-w-md text-base leading-8 text-stone-600">
                  Whether you are planning ahead or responding to a new need,
                  start with the path that feels most like your own.
                </p>
              </div>
              <div className="home-path-list">
                {guidancePaths.map((path) => {
                  const Icon = path.icon
                  return (
                    <a key={path.number} href={path.href} className="home-path-row group">
                      <span className="home-path-number">{path.number}</span>
                      <span className="home-path-icon">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="home-path-copy">
                        <span className="home-path-eyebrow">{path.eyebrow}</span>
                        <span className="home-path-title">{path.title}</span>
                        <span className="home-path-summary">{path.summary}</span>
                      </span>
                      <span className="home-path-cta">
                        <span>{path.cta}</span>
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                      </span>
                    </a>
                  )
                })}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="home-services">
          <Container className="py-10 lg:py-12">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                <div>
                  <p className="home-eyebrow">The support ecosystem</p>
                  <h2 className="home-section-heading mt-4 text-white">
                    Guidance that meets real life where it is.
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-8 text-white/65">
                    From a focused consultation to a reminder that keeps the
                    day moving, every service is designed to be practical,
                    personal, and easy to understand.
                  </p>
                  <ActionButton
                    to="/consultations/"
                    variant="secondary"
                    className="mt-8 !border-gold-300 !bg-gold-400 !text-ink hover:!bg-gold-300"
                  >
                    Explore all services
                  </ActionButton>
                </div>
                <div className="home-service-index">
                  {serviceIndex.map((service) => (
                    <a key={service.number} href={service.href} className="home-service-row group">
                      <span className="home-service-number">{service.number}</span>
                      <span className="home-service-text">
                        <span className="home-service-title">{service.title}</span>
                        <span className="home-service-summary">{service.summary}</span>
                      </span>
                      <ArrowUpRight className="h-6 w-6 shrink-0 text-gold-300 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="home-products">
          <Container className="py-10 lg:py-12">
            <Reveal>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="home-eyebrow">Tools for the journey</p>
                  <h2 className="home-section-heading mt-4">Keep what matters visible.</h2>
                </div>
                <a href="/shop/" className="home-text-link">
                  Visit the full shop <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
                <article id="living-legacy-planner" className="home-product-spread home-product-spread--light">
                  <div className="home-product-image-wrap">
                    <img src={products[0].image} alt={products[0].title} className="home-product-image" />
                    <span className="home-product-badge">{products[0].badge}</span>
                  </div>
                  <div className="home-product-copy">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="home-product-kicker">A planning companion</p>
                        <h3>{products[0].title}</h3>
                      </div>
                      <span className="home-product-price">{products[0].price}</span>
                    </div>
                    <p className="home-product-summary">{products[0].summary}</p>
                    <BulletList items={plannerBullets} className="home-product-list" />
                    <ActionButton to={products[0].href} variant="primary" className="mt-7">
                      {products[0].cta}
                    </ActionButton>
                  </div>
                </article>

                <article id="relics-of-the-century" className="home-product-spread home-product-spread--warm">
                  <div className="home-product-image-wrap home-product-image-wrap--relics">
                    <img src={products[1].image} alt={products[1].title} className="home-product-image home-product-image--relics" />
                    <span className="home-product-badge">{products[1].badge}</span>
                  </div>
                  <div className="home-product-copy">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="home-product-kicker">A visual history</p>
                        <h3>{products[1].title}</h3>
                      </div>
                      <span className="home-product-price">{products[1].price}</span>
                    </div>
                    <p className="home-product-summary">{products[1].summary}</p>
                    <div className="home-memory-note">
                      <span className="home-memory-mark">“</span>
                      <p>Stories and objects that make memory visible.</p>
                    </div>
                    <ActionButton to={products[1].href} variant="secondary" className="mt-7">
                      {products[1].cta}
                    </ActionButton>
                  </div>
                </article>
              </div>

              <div className="home-guide-strip">
                <div>
                  <p className="home-eyebrow">Final Arrangement 10 Point Discussion Guide</p>
                  <h3>A calm script for hard conversations.</h3>
                </div>
                <div className="home-guide-list">
                  {guideBullets.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <ActionButton to="/contact/?service=Senior%20Care%20Consulting" variant="primary">
                  Request the guide
                </ActionButton>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="home-community">
          <Container className="grid gap-8 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14 lg:py-12">
            <Reveal className="home-community-visual">
              <div className="home-community-image-wrap">
                <img src={communitySpotlightImage} alt="A welcoming community group discussing senior support" className="home-community-image" />
                <div className="home-community-image-caption">
                  <span>Shared learning</span>
                  <strong>Connection is part of care.</strong>
                </div>
              </div>
              <div className="home-talent-ribbon">
                <img src={saltinesGotTalent.image} alt="Saltine’s Got Talent coming soon banner" />
                <a href="/community/">Explore the community <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="home-eyebrow">Community / learning / joy</p>
              <h2 className="home-section-heading mt-4">A place to be seen, heard, and welcomed.</h2>
              <p className="mt-6 text-base leading-8 text-stone-600">
                S.A.L.T. keeps community simple: show up, learn something
                useful, share what you know, and leave with a little more
                steadiness than you arrived with.
              </p>
              <div className="home-community-list">
                {communityHighlights.map((item, index) => (
                  <div key={item}>
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton to="/community/" variant="primary">Join the Community</ActionButton>
                <ActionButton to="/videos/" variant="secondary">Watch and learn</ActionButton>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="home-journal">
          <Container className="py-10 lg:py-12">
            <Reveal>
              <div className="flex flex-col gap-5 border-b border-charcoal/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="home-eyebrow">From the journal</p>
                  <h2 className="home-section-heading mt-4">Useful words for everyday living.</h2>
                </div>
                <a href="/blog/" className="home-text-link">Read all stories <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              </div>

              <div className="home-journal-grid">
                <article className="home-feature-story">
                  <a href={`/blog/${featuredPost.slug}/`} className="group block">
                    <div className="home-feature-story-image-wrap">
                      <img src={featuredPost.image} alt={featuredPost.title} className="home-feature-story-image" />
                      <span className="home-story-arrow"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
                      <span>{featuredPost.category}</span><span className="h-1 w-1 rounded-full bg-stone-300" /><span>{featuredPost.date}</span>
                    </div>
                    <h3>{featuredPost.title}</h3>
                    <p>{featuredPost.excerpt}</p>
                  </a>
                </article>
                <div className="home-journal-list">
                  {journalPosts.map((post, index) => (
                    <a key={post.slug} href={`/blog/${post.slug}/`} className="home-journal-row group">
                      <span className="home-journal-number">0{index + 2}</span>
                      <span className="home-journal-copy">
                        <span>{post.category} / {post.readTime}</span>
                        <strong>{post.title}</strong>
                        <small>{post.excerpt}</small>
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-700 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="home-voices">
          <Container className="py-10 lg:py-12">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
                <div>
                  <p className="home-eyebrow">Reader voices</p>
                  <h2 className="home-section-heading mt-4">The original voices stay visible.</h2>
                  <p className="mt-5 text-base leading-8 text-white/65">
                    The planner is meant to be useful, personal, and shared.
                    These reader notes are part of the story.
                  </p>
                </div>
                <div className="home-review-rail">
                  {endorsements.map((item) => (
                    <figure key={item.label}>
                      <img src={item.image} alt={item.alt} />
                      <figcaption>{item.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="home-final-cta">
          <Container className="py-10 lg:py-12">
            <Reveal>
              <div className="home-final-cta-inner">
                <div>
                  <p className="home-eyebrow">Let’s talk</p>
                  <h2>Small steps can make the next season feel lighter.</h2>
                  <p>
                    Reach out for consulting, caregiver support, community
                    questions, or help choosing the right planning tool.
                  </p>
                </div>
                <div className="home-final-actions">
                  <ActionButton to="/contact/" variant="secondary" className="!border-gold-300 !bg-gold-400 !text-ink hover:!bg-gold-300">
                    Start a conversation
                  </ActionButton>
                  <div className="home-final-contact-links">
                    <a href={contact.phoneHref}><PhoneCall className="h-4 w-4" aria-hidden="true" />{contact.phoneDisplay}</a>
                    <a href={contact.emailHref}><Mail className="h-4 w-4" aria-hidden="true" />{contact.email}</a>
                    <span><MapPin className="h-4 w-4" aria-hidden="true" />{contact.mailingAddress}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
