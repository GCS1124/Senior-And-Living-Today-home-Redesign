import { Navigate, useParams } from 'react-router-dom'

import { blogPosts } from '../data/site'
import { blogPostingSchema } from '../data/schema'
import { BlogPostShell } from '../components/detail-pages'
import {
  ActionButton,
  Container,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { BlogCard } from '../components/content'

export function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return <Navigate to="/blog/" replace />
  }

  return (
    <>
      <SiteHeader />
      <BlogPostShell
        title={post.title}
        summary={post.excerpt}
        image={post.image}
        imageAlt={post.title}
        datePublished={post.date}
        category={post.category}
        readTime={post.readTime}
        canonical={`/blog/${post.slug}/`}
        description={post.excerpt}
        content={post.content}
        jsonLd={blogPostingSchema({
          title: post.title,
          description: post.excerpt,
          image: post.image,
          url: `https://seniorandlivingtoday.com/blog/${post.slug}/`,
          datePublished: post.datePublished,
        })}
      />

      <section>
        <Container className="py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Related reading"
                title="More articles from the archive"
                summary="These posts keep the blog connected to the rest of the site’s planning and caregiving resources."
              />
              <ActionButton to="/blog/" variant="link" icon={false}>
                Back to blog
              </ActionButton>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {blogPosts
                .filter((item) => item.slug !== post.slug)
                .slice(0, 3)
                .map((item) => (
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
      <SiteFooter />
    </>
  )
}
