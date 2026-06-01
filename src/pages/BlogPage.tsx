import { blogPosts } from '../data/site'
import { organizationSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  PageHero,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { BlogCard } from '../components/content'
import { Seo } from '../components/seo'

const categories = ['Senior safety', 'Caregiver support', 'Senior living', 'Planning', 'Wellness', 'Lifestyle']

export function BlogPage() {
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
        <PageHero
          title="Useful articles for everyday senior living"
          summary="The blog remains visible in the redesign so visitors can keep finding senior safety, caregiver support, planning, and lifestyle content without extra clicks."
          primaryAction={{ label: 'Read Featured Article', to: `/blog/${blogPosts[0].slug}/` }}
          secondaryAction={{ label: 'Contact Us', to: '/contact/' }}
          image={blogPosts[0].image}
          imageAlt={blogPosts[0].title}
          aside={
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
          }
        />

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
                {blogPosts.map((post) => (
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
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
                    Read more
                  </p>
                  <h2 className="mt-3 font-heading text-4xl text-charcoal">
                    Keep the blog visible, even when the design changes
                  </h2>
                </div>
                <div className="space-y-5">
                  <p className="text-base leading-8 text-stone-600">
                    The archive helps preserve the site’s existing content
                    footprint while keeping the navigation clean for seniors and
                    caregivers.
                  </p>
                  <div className="flex flex-wrap gap-3">
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
      </main>
      <SiteFooter />
    </>
  )
}
