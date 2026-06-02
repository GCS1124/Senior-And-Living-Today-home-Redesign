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
import { MediaLandingShell } from '../components/detail-pages'
import { Seo } from '../components/seo'

export function PodcastPage() {
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

            <Reveal className="relative">
              <div className="rounded-[2.4rem] border border-white/80 bg-white p-4 shadow-[0_24px_60px_rgba(16,35,63,0.14)]">
                <div className="grid gap-4 md:grid-cols-2">
                  {podcastEpisodes.map((episode) => (
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
              <div className="absolute -bottom-6 left-4 right-4 rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
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
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {podcastEpisodes.map((episode) => (
                  <ActionButton
                    key={episode.slug}
                    to={`/podcast/${episode.slug}/`}
                    variant="secondary"
                    className="group block w-full rounded-[1.8rem] border border-stone-200 bg-white p-6 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sage-300"
                    icon={false}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      {episode.guests.join(' / ')}
                    </p>
                    <h2 className="mt-2 font-heading text-3xl leading-tight text-charcoal">
                      {episode.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-stone-600">
                      {episode.summary}
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

  if (!episode) {
    return <Navigate to="/podcast/" replace />
  }

  return (
    <MediaLandingShell
      title={episode.title}
      summary={episode.summary}
      image={episode.image}
      imageAlt={episode.title}
      canonical={`/podcast/${episode.slug}/`}
      description={episode.summary}
      category={episode.guests.join(' / ')}
      duration={episode.duration}
      transcript={episode.transcript}
      checklist={episode.takeaways}
      primaryAction={{ label: 'Back to Podcast', to: '/podcast/' }}
      secondaryAction={{ label: 'Explore Resources', to: '/resources/' }}
      companionLabel="Takeaways"
      companionSummary="Use the takeaways to keep the conversation moving after listening."
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
      ]}
    />
  )
}
