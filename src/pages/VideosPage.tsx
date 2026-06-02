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
import { BlogCard, BulletList } from '../components/content'
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

            <Reveal className="space-y-4">
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
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
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
                    className="group flex w-full flex-col items-start rounded-[1.8rem] border border-stone-200 bg-white p-6 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sage-300"
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
  const companionPost = blogPosts.find((item) => item.slug === lesson?.blogPostSlug)

  if (!lesson) {
    return <Navigate to="/videos/" replace />
  }

  return (
    <>
      <Seo
        title={lesson.title}
        description={lesson.summary}
        canonical={`/videos/${lesson.slug}/`}
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
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(46,106,234,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,237,173,0.22),_transparent_30%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.96fr_1.04fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Video lesson
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  {lesson.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  {lesson.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm">
                  {lesson.category}
                </span>
                <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm">
                  {lesson.duration}
                </span>
                <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm">
                  Transcript included
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to="/videos/" variant="primary">
                  Back to Videos
                </ActionButton>
                <ActionButton to={`/blog/${lesson.blogPostSlug}/`} variant="secondary">
                  Read Companion Article
                </ActionButton>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/80 bg-white shadow-[0_24px_60px_rgba(16,35,63,0.14)]">
                <div className="relative">
                  <img
                    src={lesson.image}
                    alt={lesson.title}
                    className="h-[31rem] w-full object-cover sm:h-[35rem]"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#10233f]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f8e4b0] shadow-lg backdrop-blur">
                    Playable lesson
                  </div>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Transcript</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Checklist</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Companion article</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  The lesson page keeps the learning active after the video
                  ends, with a transcript and checklist close at hand.
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
                    eyebrow="Transcript"
                    title="Watch, read, and revisit the lesson in one place"
                    summary="Every lesson gets a clear transcript layout so the content remains accessible and searchable."
                  />
                  <div className="space-y-4">
                    {lesson.transcript.map((item, index) => (
                      <article
                        key={item.heading}
                        className={
                          index % 2 === 0
                            ? 'rounded-[1.8rem] border border-stone-200 bg-white p-6 shadow-soft'
                            : 'rounded-[1.8rem] border border-stone-200 bg-sage-50/70 p-6 shadow-soft'
                        }
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                          Segment {String(index + 1).padStart(2, '0')}
                        </p>
                        <h2 className="mt-3 font-heading text-3xl leading-tight text-charcoal sm:text-4xl">
                          {item.heading}
                        </h2>
                        <p className="mt-4 text-base leading-8 text-stone-600">
                          {item.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[2rem] border border-stone-200 bg-charcoal p-6 text-white shadow-soft sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      Checklist
                    </p>
                    <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                      Keep the lesson active after watching
                    </h2>
                    <BulletList
                      items={lesson.checklist}
                      className="mt-6 [&_li]:text-stone-300 [&_span:last-child]:text-stone-300"
                    />
                  </div>

                  {companionPost ? (
                    <BlogCard
                      title={companionPost.title}
                      excerpt={companionPost.excerpt}
                      category={companionPost.category}
                      date={companionPost.date}
                      readTime={companionPost.readTime}
                      href={`/blog/${companionPost.slug}/`}
                      image={companionPost.image}
                    />
                  ) : null}
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
                  eyebrow="More lessons"
                  title="The learning center stays connected across topics"
                  summary="Related lessons keep the video library organized while giving visitors a quick path to other support topics."
                />
                <ActionButton to="/videos/" variant="link" icon={false}>
                  Back to videos
                </ActionButton>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {videoLessons
                  .filter((item) => item.slug !== lesson.slug)
                  .slice(0, 2)
                  .map((item) => (
                    <article
                      key={item.slug}
                      className="rounded-[1.8rem] border border-stone-200 bg-white p-6 shadow-soft"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                        {item.duration}
                      </p>
                      <h2 className="mt-3 font-heading text-3xl leading-tight text-charcoal">
                        {item.title}
                      </h2>
                      <p className="mt-4 text-base leading-7 text-stone-600">
                        {item.summary}
                      </p>
                      <ActionButton
                        to={`/videos/${item.slug}/`}
                        variant="link"
                        className="mt-5"
                        icon={false}
                      >
                        Open lesson
                      </ActionButton>
                    </article>
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
                    Continue into the blog or resource center
                  </h3>
                </div>
                <ActionButton to="/resources/" variant="primary">
                  Explore Resources
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
