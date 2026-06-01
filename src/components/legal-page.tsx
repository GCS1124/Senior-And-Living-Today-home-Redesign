import { ActionButton, Container, Reveal, SectionHeading } from './layout'

export function LegalPage({
  title,
  summary,
  sections,
}: {
  title: string
  summary: string
  sections: Array<{ heading: string; paragraphs: string[] }>
}) {
  return (
    <>
      <section className="bg-ivory-50">
        <Container className="py-16 lg:py-20">
          <Reveal>
            <SectionHeading title={title} summary={summary} />
          </Reveal>
        </Container>
      </section>
      <section>
        <Container className="py-16 lg:py-20">
          <Reveal>
            <div className="mx-auto max-w-4xl space-y-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
              {sections.map((section) => (
                <article key={section.heading} className="space-y-4">
                  <h2 className="font-heading text-4xl text-charcoal">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-stone-600">
                      {paragraph}
                    </p>
                  ))}
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
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
                  Questions?
                </p>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  If you have questions about these policies, contact the S.A.L.T.
                  team before booking a consultation.
                </p>
              </div>
              <ActionButton to="/contact/" variant="primary">
                Contact Us
              </ActionButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
