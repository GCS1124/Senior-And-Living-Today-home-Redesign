import { communitySpotlightImage, affiliateProgram } from '../data/site'
import { breadcrumbSchema, organizationSchema } from '../data/schema'
import { ProgramLandingShell } from '../components/detail-pages'

export function AffiliatePage() {
  return (
    <ProgramLandingShell
      title={affiliateProgram.title}
      summary={affiliateProgram.summary}
      image={communitySpotlightImage}
      imageAlt={affiliateProgram.title}
      canonical="/affiliate-program/"
      description={affiliateProgram.summary}
      intro="The affiliate program invites trusted voices to share products and resources with people who actually need them."
      audience={affiliateProgram.audience}
      benefits={affiliateProgram.benefits}
      primaryAction={{ label: affiliateProgram.cta, to: '/contact/?service=Affiliate%20Program' }}
      secondaryAction={{ label: 'Explore Resources', to: '/resources/' }}
      badge="Affiliate growth"
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
          {
            name: 'Affiliate Program',
            url: 'https://seniorandlivingtoday.com/affiliate-program/',
          },
        ]),
      ]}
    />
  )
}
