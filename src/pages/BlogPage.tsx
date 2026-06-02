import { blogPosts } from '../data/site'
import { organizationSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { BlogCard } from '../components/content'
import { Seo } from '../components/seo'

const categories = [
  'Senior safety',
  'Caregiver support',
  'Senior living',
  'Planning',
  'Wellness',
  'Lifestyle',
]

export function BlogPage() {
  const featured = blogPosts[0]

  return (
    <>
      <Seo
        title="Blog"
        description="Read articles about senior safety, caregiver support, senior living, planning, wellness, and lifestyle."
        canonical="/blog/"
        jsonLd={organizationSchema()}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(46,106,234,0.14),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(255,237,173,0.2),_transparent_28%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Blog archive
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  Useful articles for everyday senior living
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  The blog remains visible in the redesign so visitors can keep
                  finding senior safety, caregiver support, planning, and
                  lifestyle content without extra clicks.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to={`/blog/${featured.slug}/`} variant="primary">
                  Read Featured Article
                </ActionButton>
                <ActionButton to="/contact/" variant="secondary">
                  Contact Us
                </ActionButton>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="overflow-hidden rounded-[2.3rem] border border-white/80 bg-white shadow-soft">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-[31rem] w-full object-cover sm:h-[35rem]"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>{featured.category}</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>{featured.date}</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>{featured.readTime}</span>
                </div>
                <p className="mt-3 font-heading text-3xl text-charcoal">
                  {featured.title}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="Archive"
                  title="Latest and featured posts"
                  summary="Three posts appear on the homepage, while the archive keeps the broader content library easy to browse."
                />
                <ActionButton to="/shop/" variant="link" icon={false}>
                  View planners and guides
                </ActionButton>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {blogPosts.map((post, index) => (
                  <div
                    key={post.slug}
                    className={
                      index === 0
                        ? 'xl:col-span-2'
                        : index === 1
                          ? 'xl:col-span-1'
                          : ''
                    }
                  >
                    <BlogCard
                      title={post.title}
                      excerpt={post.excerpt}
                      category={post.category}
                      date={post.date}
                      readTime={post.readTime}
                      href={`/blog/${post.slug}/`}
                      image={post.image}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Read more
                  </p>
                  <h2 className="font-heading text-4xl text-charcoal">
                    Keep the blog visible, even when the design changes
                  </h2>
                  <p className="text-base leading-8 text-stone-600">
                    The archive helps preserve the site&apos;s existing content
                    footprint while keeping the navigation clean for seniors
                    and caregivers.
                  </p>
                </div>
                <div className="space-y-5 rounded-[2rem] border border-stone-200 bg-sage-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    What you&apos;ll find here
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="rounded-[1.1rem] bg-white px-4 py-4 text-sm leading-7 text-stone-600 shadow-sm"
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ActionButton to="/contact/" variant="primary">
                      Book a Free Consultation
                    </ActionButton>
                    <ActionButton
                      href="https://www.saltonlinestore.com/"
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                    >
                      Visit the Store
                    </ActionButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Connected content"
                title="The blog supports the larger ecosystem"
                summary="Readers can move from blog posts into video lessons, resource categories, the planner, and the podcast without losing context."
              />
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  { label: 'Resource Center', to: '/resources/' },
                  { label: 'Video Learning Center', to: '/videos/' },
                  { label: 'Podcast Interviews', to: '/podcast/' },
                ].map((item, index) => (
                  <ActionButton
                    key={item.label}
                    to={item.to}
                    variant="secondary"
                    className={
                      index === 1
                        ? 'w-full rounded-[1.8rem] border border-stone-200 bg-white p-6 text-left shadow-soft'
                        : 'w-full rounded-[1.8rem] border border-stone-200 bg-white p-6 text-left shadow-soft'
                    }
                    icon={false}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Explore next
                    </p>
                    <p className="mt-3 font-heading text-3xl leading-tight text-charcoal">
                      {item.label}
                    </p>
                  </ActionButton>
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
