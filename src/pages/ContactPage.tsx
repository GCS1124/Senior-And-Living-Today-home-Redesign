import { MapPin, Mail, Phone } from 'lucide-react'

import { contact, founder } from '../data/site'
import { localBusinessSchema } from '../data/schema'
import {
  Container,
  PageHero,
  Reveal,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from '../components/layout'
import { ContactForm } from '../components/content'
import { Seo } from '../components/seo'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Senior & Living Today to book a free consultation, ask about services, or reach the team by phone or email."
        canonical="/contact/"
        jsonLd={localBusinessSchema('https://seniorandlivingtoday.com/contact/')}
      />
      <SiteHeader />
      <main>
        <PageHero
          title="Contact S.A.L.T. for consulting, support, and next steps"
          summary="Whether you need help choosing a service, want to ask about planners, or are ready to book a consultation, the contact page makes the next step easy."
          primaryAction={{ label: 'Call Now', to: contact.phoneHref }}
          secondaryAction={{ label: 'Email Us', to: contact.emailHref }}
          image={founder.image}
          imageAlt="Courtney Jones ready to help families with senior-care questions"
          aside={
            <div className="grid gap-3 rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm sm:grid-cols-3">
              {[
                'Phone support',
                'Email support',
                'Mailing address and store link',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.1rem] bg-ivory-50 px-4 py-4 text-sm leading-7 text-stone-600"
                >
                  {item}
                </div>
              ))}
            </div>
          }
        />

        <section className="bg-ivory-50">
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
                  <SectionHeading
                    eyebrow="Reach out"
                    title="A calm way to start the conversation"
                    summary="If you are unsure which service fits best, share a few details and the team can help you sort it out."
                  />
                  <div className="space-y-4 text-base leading-7 text-stone-600">
                    <a
                      href={contact.phoneHref}
                      className="grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[1.2rem] border border-stone-200 bg-ivory-50 px-4 py-4 transition hover:border-gold-300"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gold-700">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 break-words">{contact.phoneDisplay}</span>
                    </a>
                    <a
                      href={contact.emailHref}
                      className="grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[1.2rem] border border-stone-200 bg-ivory-50 px-4 py-4 transition hover:border-gold-300"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gold-700">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 text-[15px] leading-6 sm:text-base">
                        <span className="hidden sm:inline">{contact.email}</span>
                        <span className="sm:hidden">
                          <span className="block">info@</span>
                          <span className="block">seniorandlivingtoday.com</span>
                        </span>
                      </span>
                    </a>
                    <div className="grid w-full grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-[1.2rem] border border-stone-200 bg-ivory-50 px-4 py-4">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gold-700">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 break-words">{contact.mailingAddress}</span>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-charcoal p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
                      Store link
                    </p>
                    <p className="mt-3 text-base leading-8 text-stone-300">
                      You can also visit the online store for books, planners,
                      and related resources.
                    </p>
                    <a
                      href={contact.storeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-gold-300 underline-offset-4 hover:underline"
                    >
                      {contact.storeLabel}
                    </a>
                  </div>
                </div>
                <ContactForm defaultInterest="Senior Care Consulting" />
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
