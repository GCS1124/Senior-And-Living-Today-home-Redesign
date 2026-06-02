import { PlayCircle, ScrollText, Video } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'

import { blogPosts, videoLessons } from '../data/site'
import { breadcrumbSchema, organizationSchema, videoObjectSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { BlogCard } from '../components/content'
import { MediaLandingShell } from '../components/detail-pages'
import { Seo } from '../components/seo'
import { cx } from '../lib/cx'

export function VideosPage() {
  return (
    <>
      <Seo
        title="Videos"
        description="Watch short guided lessons with transcripts, companion checklists, and blog articles from the Senior & Living Today video learning center."
        canonical="/videos/"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            { name: 'Videos', url: 'https://seniorandlivingtoday.com/videos/' },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(46,106,234,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,237,173,0.26),_transparent_30%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Video learning center
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  Short lessons with transcripts, checklists, and next steps
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  The video center turns every lesson into a small learning
                  ecosystem, with a transcript, a checklist, and a companion
                  article for SEO and AI search.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to="/videos/first-time-caregiver-orientation/" variant="primary">
                  Watch featured lesson
                </ActionButton>
                <ActionButton to="/blog/" variant="secondary">
                  Read companion articles
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {['Caregiver Training', 'Senior Wellness', 'Planner Walkthroughs', 'Family Preparedness'].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={cx(
                        'rounded-[1.4rem] border border-stone-200 bg-white/92 p-4 text-sm leading-7 text-stone-600 shadow-sm backdrop-blur',
                        index % 2 === 1 && 'bg-sky-50/60',
                      )}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-100 text-sage-800">
                        {index % 2 === 0 ? (
                          <Video className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <PlayCircle className="h-5 w-5" aria-hidden="true" />
                        )}
                      </div>
                      <p className="mt-3 font-heading text-2xl leading-tight text-charcoal">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/80 bg-white p-4 shadow-[0_24px_60px_rgba(16,35,63,0.14)]">
                <div className="grid gap-4 md:grid-cols-2">
                  {videoLessons.map((lesson) => (
                    <div
                      key={lesson.slug}
                      className="rounded-[1.6rem] border border-stone-200 bg-ivory-50 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                        {lesson.category}
                      </p>
                      <h2 className="mt-3 font-heading text-3xl leading-tight text-charcoal">
                        {lesson.title}
                      </h2>
                      <p className="mt-3 text-base leading-7 text-stone-600">
                        {lesson.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Transcript</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Checklist</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Companion article</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  Every lesson is built for search, accessibility, and follow-up.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Lessons"
                title="Each video pairs learning with a clear action"
                summary="The lesson pages are designed to work like mini landing pages, so people can watch, read, and act without losing the thread."
              />
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {videoLessons.map((lesson) => (
                  <ActionButton
                    key={lesson.slug}
                    to={`/videos/${lesson.slug}/`}
                    variant="secondary"
                    className="group block w-full rounded-[1.8rem] border border-stone-200 bg-white p-6 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sage-300"
                    icon={false}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                          {lesson.duration}
                        </p>
                        <h2 className="mt-2 font-heading text-3xl leading-tight text-charcoal">
                          {lesson.title}
                        </h2>
                      </div>
                      <ScrollText className="h-5 w-5 shrink-0 text-sage-700 transition group-hover:translate-x-1" />
                    </div>
                    <p className="mt-4 text-base leading-7 text-stone-600">
                      {lesson.summary}
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
              <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-[0.98fr_1.02fr] lg:p-8">
                <div className="space-y-5">
                  <SectionHeading
                    eyebrow="Companion reading"
                    title="Blog posts still support the learning center"
                    summary="The blog stays visible and acts as the long-form companion to the lesson library."
                  />
                  <ActionButton to="/blog/" variant="link" icon={false}>
                    View the blog archive
                  </ActionButton>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
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

export function VideoDetailPage() {
  const { slug } = useParams()
  const lesson = videoLessons.find((item) => item.slug === slug)

  if (!lesson) {
    return <Navigate to="/videos/" replace />
  }

  return (
    <MediaLandingShell
      title={lesson.title}
      summary={lesson.summary}
      image={lesson.image}
      imageAlt={lesson.title}
      canonical={`/videos/${lesson.slug}/`}
      description={lesson.summary}
      category={lesson.category}
      duration={lesson.duration}
      transcript={lesson.transcript}
      checklist={lesson.checklist}
      primaryAction={{ label: 'Read Companion Blog Post', to: `/blog/${lesson.blogPostSlug}/` }}
      secondaryAction={{ label: 'Back to Videos', to: '/videos/' }}
      companionLabel="Checklist download"
      companionSummary="Use the checklist to keep the lesson active after you finish watching."
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
          { name: 'Videos', url: 'https://seniorandlivingtoday.com/videos/' },
          {
            name: lesson.title,
            url: `https://seniorandlivingtoday.com/videos/${lesson.slug}/`,
          },
        ]),
        videoObjectSchema({
          name: lesson.title,
          description: lesson.summary,
          thumbnailUrl: `https://seniorandlivingtoday.com${lesson.image}`,
          uploadDate: '2026-06-02',
          url: `https://seniorandlivingtoday.com/videos/${lesson.slug}/`,
          duration: `PT${lesson.duration.replace(/\D/g, '')}M`,
        }),
      ]}
    />
  )
}
