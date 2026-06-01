import { contact, legal } from '../data/site'
import { localBusinessSchema } from '../data/schema'
import { SiteFooter, SiteHeader } from '../components/layout'
import { LegalPage } from '../components/legal-page'
import { Seo } from '../components/seo'

export function TermsPage() {
  return (
    <>
      <Seo
        title={legal.termsTitle}
        description="Review the terms that apply to using the Senior & Living Today website, forms, and communication preferences."
        canonical="/terms-conditions/"
        jsonLd={localBusinessSchema('https://seniorandlivingtoday.com/terms-conditions/')}
      />
      <SiteHeader />
      <main>
        <LegalPage
          title={legal.termsTitle}
          summary="These terms cover use of the website, the contact form, and the services provided by Senior & Living Today."
          sections={[
            {
              heading: 'Use of the site',
              paragraphs: [
                'The website is intended to provide information about S.A.L.T., its services, products, blog content, and contact options.',
                'You agree not to misuse the site, attempt unauthorized access, or submit false information through forms or other communication tools.',
              ],
            },
            {
              heading: 'Consultation and support',
              paragraphs: [
                'Consulting, caregiver support, community offerings, and virtual assistance are educational and organizational services. They are not a substitute for medical, legal, or emergency care.',
                'Families should consult licensed professionals when they need medical, legal, or financial advice beyond the scope of S.A.L.T. resources.',
              ],
            },
            {
              heading: 'Contact and consent',
              paragraphs: [
                `By submitting the contact form, you consent to being contacted using the information you provide. If you opt into SMS messaging, your consent will be used according to the selections you make on the form.`,
                `Questions about these terms can be sent to ${contact.email} or by calling ${contact.phoneDisplay}.`,
              ],
            },
          ]}
        />
      </main>
      <SiteFooter />
    </>
  )
}
