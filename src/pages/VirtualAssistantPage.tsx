import { servicePages } from '../data/site'
import { ServiceDetailPage } from '../components/detail-pages'

export function VirtualAssistantPage() {
  return (
    <ServiceDetailPage
      data={{ ...servicePages.virtualAssistant, canonical: '/senior-care-virtual-assistant-services/' }}
    />
  )
}

