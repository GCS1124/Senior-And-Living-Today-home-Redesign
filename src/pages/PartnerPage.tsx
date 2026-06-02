import { heroCareImage, partnerProgram } from '../data/site'
import { breadcrumbSchema, organizationSchema } from '../data/schema'
import { ProgramLandingShell } from '../components/detail-pages'

export function PartnerPage() {
  return (
    <ProgramLandingShell
      title={partnerProgram.title}
      summary={partnerProgram.summary}
      image={heroCareImage}
      imageAlt={partnerProgram.title}
      canonical="/partner-program/"
      description={partnerProgram.summary}
      intro="The partner page turns referrals into a calm, professional pathway for organizations that already support seniors and caregivers."
      audience={partnerProgram.audience}
      benefits={partnerProgram.benefits}
      primaryAction={{ label: partnerProgram.cta, to: '/contact/?service=Partner%20Program' }}
      secondaryAction={{ label: 'Book a Consultation', to: '/contact/' }}
      badge="Partner growth"
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
          {
            name: 'Partner Program',
            url: 'https://seniorandlivingtoday.com/partner-program/',
          },
        ]),
      ]}
    />
  )
}
