import { Mail, MapPin, Phone } from 'lucide-react'

import { contact, founder } from '../data/site'
import { localBusinessSchema } from '../data/schema'
import { ActionButton, Container, Reveal, SectionHeading, SiteFooter, SiteHeader } from '../components/layout'
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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,237,173,0.22),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(46,106,234,0.12),_transparent_28%)]" />
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
            <Reveal className="relative z-10 space-y-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-700">
                  Contact
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-charcoal sm:text-5xl lg:text-[4.8rem]">
                  Contact S.A.L.T. for consulting, support, and next steps
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  Whether you need help choosing a service, want to ask about
                  planners, or are ready to book a consultation, the contact
                  page makes the next step easy.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionButton to={contact.phoneHref} variant="primary">
                  Call Now
                </ActionButton>
                <ActionButton to={contact.emailHref} variant="secondary">
                  Email Us
                </ActionButton>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {['Phone support', 'Email support', 'Mailing address and store link'].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-stone-200 bg-white/92 px-4 py-4 text-sm leading-7 text-stone-600 shadow-sm backdrop-blur"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </Reveal>

            <Reveal className="space-y-4">
              <div className="overflow-hidden rounded-[2.3rem] border border-white/80 bg-white shadow-soft">
                <img
                  src={founder.image}
                  alt="Courtney Jones ready to help families with senior-care questions"
                  className="h-[31rem] w-full object-cover sm:h-[35rem]"
                />
              </div>
              <div className="rounded-[1.6rem] border border-stone-200 bg-white/96 p-5 shadow-soft backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Direct line
                    </p>
                    <p className="mt-2 font-heading text-2xl text-charcoal">
                      Call the office
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Fast reply
                    </p>
                    <p className="mt-2 text-base leading-7 text-stone-600">
                      Send a message and the team can respond with the right
                      next step.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                      Store
                    </p>
                    <p className="mt-2 text-base leading-7 text-stone-600">
                      Books, planners, and related resources live on the store.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

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
                      className="grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[1.2rem] border border-stone-200 bg-ivory-50 px-4 py-4 transition hover:border-sage-300"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sage-700">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 break-words">{contact.phoneDisplay}</span>
                    </a>
                    <a
                      href={contact.emailHref}
                      className="grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[1.2rem] border border-stone-200 bg-ivory-50 px-4 py-4 transition hover:border-sage-300"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sage-700">
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
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sage-700">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 break-words">{contact.mailingAddress}</span>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-charcoal p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
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
                      className="mt-4 inline-flex text-sm font-semibold text-sage-300 underline-offset-4 hover:underline"
                    >
                      {contact.storeLabel}
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <SectionHeading
                    eyebrow="Send a message"
                    title="Tell us what you need and we’ll route it correctly"
                    summary="Use the form to ask about a service, product, or general next step. Clear details help the team answer faster."
                  />
                  <ContactForm defaultInterest="Senior Care Consulting" />
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section>
          <Container className="py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-700">
                    Next step
                  </p>
                  <h2 className="font-heading text-4xl text-charcoal sm:text-5xl">
                    Ready to talk it through with a human?
                  </h2>
                  <p className="max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
                    If you want a quick recommendation, start with a call and
                    use the contact form for the details that matter most.
                  </p>
                </div>
                <div className="flex items-center justify-start lg:justify-end">
                  <ActionButton to={contact.phoneHref} variant="primary" icon={false}>
                    Call {contact.phoneDisplay}
                  </ActionButton>
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
