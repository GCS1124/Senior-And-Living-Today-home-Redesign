import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { AffiliatePage } from './pages/AffiliatePage'
import { AboutPage } from './pages/AboutPage'
import { CaregiverSupportPage } from './pages/CaregiverSupportPage'
import { CommunityPage } from './pages/CommunityPage'
import { ContactPage } from './pages/ContactPage'
import { ConsultingPage } from './pages/ConsultingPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PartnerPage } from './pages/PartnerPage'
import { PlannerPage } from './pages/PlannerPage'
import { PodcastEpisodePage, PodcastPage } from './pages/PodcastPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ResourceCategoryPage, ResourcesPage } from './pages/ResourcesPage'
import { ServicesPage } from './pages/ServicesPage'
import { ShopPage } from './pages/ShopPage'
import { SubscriptionBoxPage } from './pages/SubscriptionBoxPage'
import { TermsPage } from './pages/TermsPage'
import { VideoDetailPage, VideosPage } from './pages/VideosPage'
import { VirtualAssistantPage } from './pages/VirtualAssistantPage'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')

    if (hash) {
      const timeout = window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)

      return () => window.clearTimeout(timeout)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/resources/" element={<ResourcesPage />} />
        <Route path="/resource-center/" element={<Navigate to="/resources/" replace />} />
        <Route path="/resources/:slug/" element={<ResourceCategoryPage />} />
        <Route path="/resources/:slug" element={<ResourceCategoryPage />} />
        <Route path="/videos/" element={<VideosPage />} />
        <Route path="/video-learning-center/" element={<Navigate to="/videos/" replace />} />
        <Route path="/videos/:slug/" element={<VideoDetailPage />} />
        <Route path="/videos/:slug" element={<VideoDetailPage />} />
        <Route path="/consultations/" element={<ServicesPage />} />
        <Route path="/consultation-center/" element={<Navigate to="/consultations/" replace />} />
        <Route path="/services/" element={<ServicesPage />} />
        <Route path="/consulting/" element={<ConsultingPage />} />
        <Route path="/caregiver-support/" element={<CaregiverSupportPage />} />
        <Route path="/community/" element={<CommunityPage />} />
        <Route path="/podcast/" element={<PodcastPage />} />
        <Route path="/podcast/:slug/" element={<PodcastEpisodePage />} />
        <Route path="/podcast/:slug" element={<PodcastEpisodePage />} />
        <Route
          path="/senior-care-virtual-assistant-services/"
          element={<VirtualAssistantPage />}
        />
        <Route path="/shop/" element={<ShopPage />} />
        <Route path="/store/" element={<Navigate to="/shop/" replace />} />
        <Route path="/living-legacy-planner/" element={<PlannerPage />} />
        <Route path="/affiliate-program/" element={<AffiliatePage />} />
        <Route path="/partner-program/" element={<PartnerPage />} />
        <Route path="/subscription-box/" element={<SubscriptionBoxPage />} />
        <Route path="/blog/" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/blog/:slug/" element={<BlogPostPage />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/privacy-policy/" element={<PrivacyPage />} />
        <Route path="/terms-conditions/" element={<TermsPage />} />

        <Route path="/contact-us-home-care-assistance/" element={<Navigate to="/contact/" replace />} />
        <Route path="/elderly-caregiver-services/" element={<Navigate to="/caregiver-support/" replace />} />
        <Route path="/consultancy-elderly-in-home-care/" element={<Navigate to="/consulting/" replace />} />
        <Route path="/senior-living-in-usa/" element={<Navigate to="/services/" replace />} />
        <Route path="/over-55-communities-is-55-the-right-limit-for-you/" element={<Navigate to="/blog/over-55-communities-is-55-the-right-limit-for-you/" replace />} />
        <Route path="/discover-the-ultimate-guide-for-seniors-embrace-the-living-legacy-planner/" element={<Navigate to="/blog/discover-the-ultimate-guide-for-seniors-embrace-the-living-legacy-planner/" replace />} />
        <Route path="/buy-the-essential-guide-for-seniors-the-living-legacy-planner/" element={<Navigate to="/blog/buy-the-essential-guide-for-seniors-the-living-legacy-planner/" replace />} />
        <Route path="/terms/" element={<Navigate to="/terms-conditions/" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
