import { contact, legal } from '../data/site'
import { localBusinessSchema } from '../data/schema'
import { SiteFooter, SiteHeader } from '../components/layout'
import { LegalPage } from '../components/legal-page'
import { Seo } from '../components/seo'

export function PrivacyPage() {
  return (
    <>
      <Seo
        title={legal.privacyTitle}
        description="Read how Senior & Living Today handles contact information, SMS consent, and website usage."
        canonical="/privacy-policy/"
        jsonLd={localBusinessSchema('https://seniorandlivingtoday.com/privacy-policy/')}
      />
      <SiteHeader />
      <main>
        <LegalPage
          title={legal.privacyTitle}
          summary="This policy explains how the site handles the information you provide through forms, calls, and email."
          sections={[
            {
              heading: 'Information we collect',
              paragraphs: [
                `When you contact S.A.L.T. through the website, we may collect your name, email address, phone number, service interest, message, and SMS consent selections.`,
                `We may also collect basic technical information about how visitors use the site so we can keep pages working properly and improve the experience.`,
              ],
            },
            {
              heading: 'How we use information',
              paragraphs: [
                'Information is used to respond to inquiries, provide services, support consultation requests, and manage communication preferences.',
                'SMS consent is only used for the purposes selected in the contact form. Marketing and non-marketing messages are handled separately when the site is connected to messaging services.',
              ],
            },
            {
              heading: 'Sharing and storage',
              paragraphs: [
                'S.A.L.T. does not sell personal information. Data may be shared with trusted service providers only when needed to operate the site, handle communication, or support requested services.',
                `If you have questions about this policy, email ${contact.email} or call ${contact.phoneDisplay}.`,
              ],
            },
          ]}
        />
      </main>
      <SiteFooter />
    </>
  )
}
