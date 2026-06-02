import { Navigate, useParams } from 'react-router-dom'

import { blogPosts } from '../data/site'
import { blogPostingSchema, breadcrumbSchema, organizationSchema } from '../data/schema'
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

export function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return <Navigate to="/blog/" replace />
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3)
  const companionPaths = [
    { label: 'Resource Center', to: '/resources/' },
    { label: 'Video Learning Center', to: '/videos/' },
    { label: 'The Living Legacy Planner', to: '/living-legacy-planner/' },
  ] as const

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}/`}
        jsonLd={[
          organizationSchema(),
          blogPostingSchema({
            title: post.title,
            description: post.excerpt,
            image: post.image,
            url: `https://seniorandlivingtoday.com/blog/${post.slug}/`,
            datePublished: post.datePublished,
          }),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            { name: 'Blog', url: 'https://seniorandlivingtoday.com/blog/' },
            {
              name: post.title,
              url: `https://seniorandlivingtoday.com/blog/${post.slug}/`,
            },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,237,173,0.24),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.12),_transparent_28%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.98fr_1.02fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Blog archive
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  {post.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to="/blog/" variant="primary">
                  Back to Blog
                </ActionButton>
                <ActionButton to="/resources/" variant="secondary">
                  Explore Resources
                </ActionButton>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm">
                  {post.category}
                </span>
                <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm">
                  {post.date}
                </span>
                <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm">
                  {post.readTime}
                </span>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/80 bg-white shadow-[0_24px_60px_rgba(16,35,63,0.14)]">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[31rem] w-full object-cover sm:h-[35rem]"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/20 bg-[#10233f]/90 p-4 text-white shadow-lg backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d2a85b]">
                      What this article covers
                    </p>
                    <p className="mt-2 text-base leading-7 text-white/75">
                      A calm, practical read that keeps the page connected to
                      the wider S.A.L.T. ecosystem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Article</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Planning</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Support</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  The article pages stay readable, indexable, and easy to move
                  through on every device.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr]">
                <div className="space-y-6">
                  <SectionHeading
                    eyebrow="Article flow"
                    title="The writing is organized into clear, calm sections"
                    summary="Each article gets a narrative flow that keeps the content easy to skim and easy to return to."
                  />
                  <div className="space-y-4">
                    {post.content.map((section, index) => (
                      <article
                        key={section.heading}
                        className={
                          index % 2 === 0
                            ? 'rounded-[1.8rem] border border-stone-200 bg-white p-6 shadow-soft'
                            : 'rounded-[1.8rem] border border-stone-200 bg-sage-50/70 p-6 shadow-soft'
                        }
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                          Section {String(index + 1).padStart(2, '0')}
                        </p>
                        <h2 className="mt-3 font-heading text-3xl leading-tight text-charcoal sm:text-4xl">
                          {section.heading}
                        </h2>
                        <p className="mt-4 text-base leading-8 text-stone-600">
                          {section.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 lg:sticky lg:top-8 self-start">
                  <div className="rounded-[2rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      Quick take
                    </p>
                    <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                      What readers should remember
                    </h2>
                    <div className="mt-6 space-y-3">
                      {post.content.map((section) => (
                        <div
                          key={section.heading}
                          className="flex items-start gap-3 rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-base leading-7 text-stone-200"
                        >
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-300 text-sm font-bold text-[#10233f]">
                            ✓
                          </span>
                          <span>{section.heading}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Keep exploring
                    </p>
                    <div className="mt-4 grid gap-3">
                      {companionPaths.map((item) => (
                        <ActionButton
                          key={item.label}
                          to={item.to}
                          variant="secondary"
                          className="w-full justify-start rounded-[1.4rem] border border-stone-200 bg-ivory-50 p-4 text-left"
                          icon={false}
                        >
                          <span className="block">
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                              Next step
                            </span>
                            <span className="mt-2 block font-heading text-2xl leading-tight text-charcoal">
                              {item.label}
                            </span>
                          </span>
                        </ActionButton>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="Related reading"
                  title="More articles from the archive"
                  summary="The archive stays visible so readers can move from one article to the next without losing context."
                />
                <ActionButton to="/blog/" variant="link" icon={false}>
                  Back to blog
                </ActionButton>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {relatedPosts.map((item) => (
                  <BlogCard
                    key={item.slug}
                    title={item.title}
                    excerpt={item.excerpt}
                    category={item.category}
                    date={item.date}
                    readTime={item.readTime}
                    href={`/blog/${item.slug}/`}
                    image={item.image}
                  />
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-14">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Next step
                  </p>
                  <h3 className="mt-3 font-heading text-3xl text-charcoal">
                    Keep the blog connected to the rest of the site
                  </h3>
                </div>
                <ActionButton to="/resources/" variant="primary">
                  Explore the Resource Center
                </ActionButton>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
