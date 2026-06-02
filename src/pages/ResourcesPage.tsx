import { ArrowRight, BookOpen, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'

import { blogPosts, resourceCategories } from '../data/site'
import { breadcrumbSchema, faqPageSchema, organizationSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { BlogCard } from '../components/content'
import { TopicLandingShell } from '../components/detail-pages'
import { Seo } from '../components/seo'
import { cx } from '../lib/cx'

const resourceIcons = [HeartHandshake, Sparkles, BookOpen, ShieldCheck]

export function ResourcesPage() {
  return (
    <>
      <Seo
        title="Resources"
        description="Explore caregiver, senior, wellness, safety, legacy planning, and dementia resources from Senior & Living Today."
        canonical="/resources/"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            { name: 'Resources', url: 'https://seniorandlivingtoday.com/resources/' },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,237,173,0.28),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.11),_transparent_28%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.98fr_1.02fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Resource center
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  A calm library for caregivers, seniors, and families
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  The Resource Center organizes the most important guidance into
                  clear categories so people can find help without digging
                  through clutter.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to="/videos/" variant="primary">
                  Explore Videos
                </ActionButton>
                <ActionButton to="/living-legacy-planner/" variant="secondary">
                  View the Planner
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Caregiver Resources',
                  'Senior Living',
                  'Health & Wellness',
                  'Senior Safety',
                ].map((item, index) => {
                  const Icon = resourceIcons[index % resourceIcons.length]

                  return (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-stone-200 bg-white/92 p-4 text-sm leading-7 text-stone-600 shadow-sm backdrop-blur"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-100 text-sage-800">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="mt-3 font-heading text-2xl leading-tight text-charcoal">
                        {item}
                      </p>
                    </div>
                  )
                })}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="rounded-[2.4rem] border border-white/80 bg-white p-4 shadow-[0_24px_60px_rgba(16,35,63,0.14)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  {resourceCategories.slice(0, 4).map((category) => (
                    <div
                      key={category.slug}
                      className="rounded-[1.6rem] border border-stone-200 bg-ivory-50 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                        {category.title}
                      </p>
                      <p className="mt-3 text-base leading-7 text-stone-600">
                        {category.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Transcripts</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Checklists</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Blog companions</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  Every resource links back to practical tools, articles, and
                  next steps.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Categories"
                title="The resource center is organized around real-life needs"
                summary="Each category page has a dedicated focus so visitors can move directly to the material that matches their situation."
              />
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {resourceCategories.map((category, index) => (
                  <ActionButton
                    key={category.slug}
                    to={`/resources/${category.slug}/`}
                    variant="secondary"
                    className={cx(
                      'group block w-full rounded-[1.8rem] border border-stone-200 bg-white p-6 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sage-300',
                      index % 3 === 1 && 'bg-sage-50',
                      index % 3 === 2 && 'bg-sky-50/60',
                    )}
                    icon={false}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                          Resource page
                        </p>
                        <h2 className="mt-2 font-heading text-3xl leading-tight text-charcoal">
                          {category.title}
                        </h2>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-sage-700 transition group-hover:translate-x-1" />
                    </div>
                    <p className="mt-4 text-base leading-7 text-stone-600">
                      {category.summary}
                    </p>
                  </ActionButton>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="space-y-6">
                  <SectionHeading
                    eyebrow="Cross-links"
                    title="Resources connect back to the rest of the ecosystem"
                    summary="The blueprints asked for a site that works as a system, not just a list of pages."
                  />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton to="/videos/" variant="primary">
                      Watch the Video Center
                    </ActionButton>
                    <ActionButton to="/blog/" variant="secondary">
                      Read the Blog
                    </ActionButton>
                  </div>
                </div>
                <div className="grid gap-6">
                  {blogPosts.slice(0, 2).map((post) => (
                    <BlogCard
                      key={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      category={post.category}
                      date={post.date}
                      readTime={post.readTime}
                      href={`/blog/${post.slug}/`}
                      image={post.image}
                    />
                  ))}
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

export function ResourceCategoryPage() {
  const { slug } = useParams()
  const category = resourceCategories.find((item) => item.slug === slug)

  if (!category) {
    return <Navigate to="/resources/" replace />
  }

  const faqs = [
    {
      question: 'How do I choose the right resource page?',
      answer:
        'Start with the category that matches the current pressure point, then move outward to the planner, videos, or consultation pages.',
    },
    {
      question: 'Can I still contact S.A.L.T. directly?',
      answer:
        'Yes. The contact page and consultation flow stay visible across the redesign.',
    },
  ] as const

  return (
    <TopicLandingShell
      title={category.title}
      summary={category.summary}
      image={category.image}
      imageAlt={category.title}
      canonical={`/resources/${category.slug}/`}
      description={category.summary}
      intro={category.intro}
      sections={category.sections}
      primaryAction={{ label: 'Book a Free Consultation', to: '/contact/' }}
      secondaryAction={{ label: 'Back to Resources', to: '/resources/' }}
      jsonLd={[
        organizationSchema(),
        faqPageSchema(faqs),
        breadcrumbSchema([
          { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
          { name: 'Resources', url: 'https://seniorandlivingtoday.com/resources/' },
          {
            name: category.title,
            url: `https://seniorandlivingtoday.com/resources/${category.slug}/`,
          },
        ]),
      ]}
      faq={faqs}
    />
  )
}
