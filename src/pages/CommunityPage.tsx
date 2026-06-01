import { servicePages } from '../data/site'
import { ServiceDetailPage } from '../components/detail-pages'

export function CommunityPage() {
  return <ServiceDetailPage data={{ ...servicePages.community, canonical: '/community/' }} />
}

