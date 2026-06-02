import { plannerFlatlay, subscriptionBox } from '../data/site'
import { breadcrumbSchema, organizationSchema } from '../data/schema'
import { ProgramLandingShell } from '../components/detail-pages'

export function SubscriptionBoxPage() {
  return (
    <ProgramLandingShell
      title={subscriptionBox.title}
      summary={subscriptionBox.summary}
      image={plannerFlatlay}
      imageAlt={subscriptionBox.title}
      canonical="/subscription-box/"
      description={subscriptionBox.summary}
      intro="The subscription box is a future recurring offer built around practical support, educational materials, and helpful checklists."
      audience={['Senior households', 'Caregivers', 'Families who want recurring support']}
      benefits={subscriptionBox.includes}
      primaryAction={{ label: subscriptionBox.cta, to: '/contact/?service=Subscription%20Box' }}
      secondaryAction={{ label: 'Join the Community', to: '/community/' }}
      badge="Future recurring offer"
      jsonLd={[
        organizationSchema(),
        breadcrumbSchema([
          { name: 'Home', url: 'https://seniorandlivingtoday.com/' },
          {
            name: 'Subscription Box',
            url: 'https://seniorandlivingtoday.com/subscription-box/',
          },
        ]),
      ]}
    />
  )
}
