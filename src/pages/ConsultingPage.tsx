import { servicePages } from '../data/site'
import { ServiceDetailPage } from '../components/detail-pages'

export function ConsultingPage() {
  return <ServiceDetailPage data={{ ...servicePages.consulting, canonical: '/consulting/' }} />
}

