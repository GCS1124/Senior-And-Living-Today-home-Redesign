import { servicePages } from '../data/site'
import { ServiceDetailPage } from '../components/detail-pages'

export function CaregiverSupportPage() {
  return (
    <ServiceDetailPage
      data={{ ...servicePages.caregiverSupport, canonical: '/caregiver-support/' }}
    />
  )
}

