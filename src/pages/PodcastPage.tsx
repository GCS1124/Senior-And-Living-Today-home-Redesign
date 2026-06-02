import { Headphones, Mic } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'

import { podcastEpisodes } from '../data/site'
import { breadcrumbSchema, organizationSchema } from '../data/schema'
import {
  ActionButton,
  Container,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { Seo } from '../components/seo'

export function PodcastPage() {
  const featuredEpisode = podcastEpisodes[0]
  const supportingEpisodes = podcastEpisodes.slice(1)

  return (
    <>
      <Seo
        title="Podcast"
        description="Listen to interview-style podcast episodes with caregivers, seniors, doctors, attorneys, and financial advisors."
        canonical="/podcast/"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            { name: 'Podcast', url: 'https://seniorandlivingtoday.com/podcast/' },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,106,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(141,155,131,0.16),_transparent_30%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.98fr_1.02fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Podcast / interviews
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  Conversations that help families think clearly
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  The podcast hub brings together interviews, transcripts, and
                  takeaways from caregivers, seniors, and trusted professionals.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to="/podcast/caregivers-and-the-new-rhythm-of-support/" variant="primary">
                  Listen featured episode
                </ActionButton>
                <ActionButton to="/resources/" variant="secondary">
                  Explore resources
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {['Caregivers', 'Seniors', 'Doctors', 'Attorneys'].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-stone-200 bg-white/92 p-4 text-sm leading-7 text-stone-600 shadow-sm backdrop-blur"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-100 text-sage-800">
                      {index % 2 === 0 ? (
                        <Headphones className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Mic className="h-5 w-5" aria-hidden="true" />
                      )}
                    </div>
                    <p className="mt-3 font-heading text-2xl leading-tight text-charcoal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <div className="rounded-[2.4rem] border border-white/80 bg-white p-4 shadow-[0_24px_60px_rgba(16,35,63,0.14)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.7rem] bg-charcoal p-6 text-white shadow-soft sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
                      Featured episode
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d2a85b]">
                      <span>{featuredEpisode.duration}</span>
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      <span>{featuredEpisode.guests.join(' / ')}</span>
                    </div>
                    <h2 className="mt-4 font-heading text-4xl leading-tight text-white">
                      {featuredEpisode.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
                      {featuredEpisode.summary}
                    </p>
                  </div>
                  {supportingEpisodes.map((episode) => (
                    <div
                      key={episode.slug}
                      className="rounded-[1.6rem] border border-stone-200 bg-ivory-50 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                        {episode.duration}
                      </p>
                      <h2 className="mt-3 font-heading text-3xl leading-tight text-charcoal">
                        {episode.title}
                      </h2>
                      <p className="mt-3 text-base leading-7 text-stone-600">
                        {episode.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Interview</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Transcript</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Takeaways</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  The episodes are structured for listening, reading, and sharing.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Episodes"
                title="Each episode keeps the conversation useful after the audio ends"
                summary="The transcript and takeaways make the podcast searchable, accessible, and easy to repurpose."
              />
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {podcastEpisodes.map((episode) => (
                  <article
                    key={episode.slug}
                    className="flex h-full flex-col rounded-[1.6rem] border border-stone-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sage-300"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      <span>{episode.duration}</span>
                      <span className="h-1 w-1 rounded-full bg-stone-300" />
                      <span>{episode.guests.join(' / ')}</span>
                    </div>
                    <h2 className="mt-3 font-heading text-3xl leading-tight text-charcoal">
                      {episode.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-stone-600">
                      {episode.summary}
                    </p>
                    <div className="mt-auto pt-6">
                      <ActionButton
                        to={`/podcast/${episode.slug}/`}
                        variant="link"
                        icon={false}
                      >
                        Listen or read transcript
                      </ActionButton>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-[1fr_0.95fr] lg:p-8">
                <div className="space-y-5">
                  <SectionHeading
                    eyebrow="Why it matters"
                    title="Interview content strengthens the whole ecosystem"
                    summary="Podcast episodes become reusable assets for blog posts, resource pages, and search visibility."
                  />
                </div>
                <div className="space-y-4 rounded-[2rem] border border-stone-200 bg-sage-50 p-6">
                  {[
                    'Transcript for accessibility',
                    'Takeaways for quick scanning',
                    'Cross-links to resources and planner pages',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.2rem] bg-white px-4 py-4 text-base leading-7 text-stone-600 shadow-sm"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-sage-500" />
                      <span>{item}</span>
                    </div>
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

export function PodcastEpisodePage() {
  const { slug } = useParams()
  const episode = podcastEpisodes.find((item) => item.slug === slug)
  const relatedEpisodes = podcastEpisodes.filter((item) => item.slug !== slug).slice(0, 2)

  if (!episode) {
    return <Navigate to="/podcast/" replace />
  }

  return (
    <>
      <Seo
        title={episode.title}
        description={episode.summary}
        canonical={`/podcast/${episode.slug}/`}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
            { name: 'Podcast', url: 'https://seniorandlivingtoday.com/podcast/' },
            {
              name: episode.title,
              url: `https://seniorandlivingtoday.com/podcast/${episode.slug}/`,
            },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'PodcastEpisode',
            name: episode.title,
            description: episode.summary,
            url: `https://seniorandlivingtoday.com/podcast/${episode.slug}/`,
            datePublished: '2026-06-02',
          },
        ]}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,106,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(141,155,131,0.16),_transparent_30%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.96fr_1.04fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Podcast / interviews
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  {episode.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  {episode.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {episode.guests.map((guest) => (
                  <span
                    key={guest}
                    className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm"
                  >
                    {guest}
                  </span>
                ))}
                <span className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 shadow-sm">
                  {episode.duration}
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to="/podcast/" variant="primary">
                  Back to Podcast
                </ActionButton>
                <ActionButton to="/resources/" variant="secondary">
                  Explore Resources
                </ActionButton>
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/80 bg-white shadow-[0_24px_60px_rgba(16,35,63,0.14)]">
                <div className="relative">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="h-[31rem] w-full object-cover sm:h-[35rem]"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#10233f]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f8e4b0] shadow-lg backdrop-blur">
                    Interview episode
                  </div>
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                  <span>Interview</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Transcript</span>
                  <span className="h-1 w-1 rounded-full bg-stone-300" />
                  <span>Takeaways</span>
                </div>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  The episode pages keep the conversation searchable and easy
                  to revisit after listening.
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
                    title="Every conversation stays readable after the audio ends"
                    summary="The transcript is the anchor, but the page also gives people a direct way to keep moving."
                  />
                  <div className="space-y-4">
                    {episode.transcript.map((item, index) => (
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
                      Takeaways
                    </p>
                    <h2 className="mt-3 font-heading text-4xl leading-tight text-white">
                      What to keep from the conversation
                    </h2>
                    <div className="mt-6 space-y-3">
                      {episode.takeaways.map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-base leading-7 text-stone-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {relatedEpisodes.map((item) => (
                    <div
                      key={item.slug}
                      className="rounded-[1.8rem] border border-stone-200 bg-white p-6 shadow-soft"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                        Related episode
                      </p>
                      <h3 className="mt-3 font-heading text-3xl leading-tight text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-stone-600">
                        {item.summary}
                      </p>
                      <ActionButton
                        to={`/podcast/${item.slug}/`}
                        variant="link"
                        className="mt-5"
                        icon={false}
                      >
                        Open episode
                      </ActionButton>
                    </div>
                  ))}
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
                  eyebrow="Why it matters"
                  title="Interview content strengthens the whole ecosystem"
                  summary="Podcast episodes become reusable assets for blog posts, resource pages, and search visibility."
                />
                <ActionButton to="/community/" variant="link" icon={false}>
                  Join the community
                </ActionButton>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  'Transcript for accessibility',
                  'Takeaways for quick scanning',
                  'Cross-links to resources and planner pages',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.6rem] border border-stone-200 bg-white p-6 shadow-soft"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Benefit
                    </p>
                    <p className="mt-3 text-base leading-7 text-stone-600">
                      {item}
                    </p>
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
