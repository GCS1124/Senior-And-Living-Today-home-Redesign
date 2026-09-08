import heroCareImage from '../assets/live/courtney.jpg'
import courtneyPortrait from '../assets/user/courtney-jones-portrait.png'
import plannerFlatlay from '../assets/live/planner.webp'
import relicsBook from '../assets/live/relics.jpg'
import communityPhoto from '../assets/live/blog-social.webp'
import talentBanner from '../assets/live/banner.png'
import blogSafetyImage from '../assets/live/blog-safety.webp'
import blogPlanningImage from '../assets/live/blog-planning.webp'
import reviewPlannerThoughts from '../assets/live/review-planner-thoughts.png'
import reviewPlannerAllAges from '../assets/live/review-planner-all-ages.png'
import reviewUsefulBook from '../assets/live/review-useful-book.png'

export { heroCareImage, plannerFlatlay }

export const communitySpotlightImage = communityPhoto

export const brand = {
  name: 'Senior & Living Today',
  shortName: 'S.A.L.T.',
  tagline: 'Care. Comfort. Community. Clarity.',
  description:
    'Senior & Living Today helps seniors, caregivers, and families navigate aging, planning, care decisions, and everyday life with trusted resources and compassionate support.',
}

export const contact = {
  phoneDisplay: '+1 888-416-4264',
  phoneHref: 'tel:+18884164264',
  email: 'info@seniorandlivingtoday.com',
  emailHref: 'mailto:info@seniorandlivingtoday.com',
  mailingAddress: 'P O Box 15, Dayton, Ohio 45404',
  storeUrl: 'https://www.saltonlinestore.com/',
  storeLabel: 'saltonlinestore.com',
}

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about/' },
  { label: 'Planner', to: '/living-legacy-planner/' },
  { label: 'Community', to: '/community/' },
  { label: 'Contact', to: '/contact/' },
] as const

export const homeHero = {
  headline: 'Compassionate Guidance for Seniors, Caregivers, and Families',
  summary:
    'Senior & Living Today helps seniors and caregivers navigate aging, planning, care decisions, and everyday life with trusted resources, thoughtful tools, and compassionate support.',
  primaryCta: { label: 'Book a Free Consultation', to: '/contact/?service=Senior%20Care%20Consulting' },
  secondaryCta: { label: 'Download Free Planner', to: '/shop/#free-daily-planner' },
  image: heroCareImage,
}

export const trustStrip = [
  'Care.',
  'Comfort.',
  'Community.',
  'Clarity.',
]

export const founder = {
  name: 'Courtney Jones',
  title: 'Founder and senior care advocate',
  years: '30+ years of experience',
  summary:
    'Courtney Jones leads S.A.L.T. with practical wisdom and a compassionate focus on helping families make informed decisions with peace of mind.',
  image: courtneyPortrait,
  points: [
    'Senior care advocate and trusted family guide',
    'Author of The Living Legacy Planner and Relics of the Century',
    'Focused on planning tools, care navigation, and meaningful support',
  ],
}

export type ServiceCard = {
  slug: string
  title: string
  summary: string
  href: string
  icon: 'users' | 'heart' | 'calendar' | 'laptop'
}

export const serviceCards: ServiceCard[] = [
  {
    slug: 'consulting',
    title: 'Senior Care Consulting',
    summary:
      'Personalized guidance to help seniors and families navigate care options, housing, planning, and next steps.',
    href: '/consulting/',
    icon: 'users',
  },
  {
    slug: 'caregiver-support',
    title: 'Caregiver Support',
    summary:
      'Resources and encouragement for caregivers balancing love, life, and responsibilities.',
    href: '/caregiver-support/',
    icon: 'heart',
  },
  {
    slug: 'community',
    title: 'Community & Webinars',
    summary:
      'Join a supportive community with online meetings, webinars, and courses on topics that matter most.',
    href: '/community/',
    icon: 'calendar',
  },
  {
    slug: 'virtual-assistant',
    title: 'Virtual Assistant Services',
    summary:
      'Practical help with scheduling, research, communication, reminders, and everyday coordination.',
    href: '/senior-care-virtual-assistant-services/',
    icon: 'laptop',
  },
]

export type ProductCard = {
  slug: string
  title: string
  summary: string
  price: string
  href: string
  image: string
  badge: string
  cta: string
  featured?: boolean
}

export const products: ProductCard[] = [
  {
    slug: 'living-legacy-planner',
    title: 'The Living Legacy Planner',
    summary:
      'A compassionate planning tool that helps seniors document wishes, memories, personal details, and important information so families can feel prepared and confident.',
    price: '$34.99',
    href: '/shop/#living-legacy-planner',
    image: plannerFlatlay,
    badge: 'Featured planner',
    cta: 'Buy the Planner',
    featured: true,
  },
  {
    slug: 'relics-of-the-century',
    title: 'Relics of the Century',
    summary:
      'A nostalgic journey through memories and milestones that celebrate the stories, items, and moments that shaped a generation.',
    price: '$24.99',
    href: '/shop/#relics-of-the-century',
    image: relicsBook,
    badge: 'Nostalgic book',
    cta: 'Explore the Book',
  },
]

export const communityHighlights = [
  'Online group meetings that feel welcoming and easy to join',
  'Webinars and courses for seniors, caregivers, and families',
  'Safe, senior-friendly connection that encourages conversation',
  'Interest-based learning and support around planning and care',
]

export const saltinesGotTalent = {
  headline: 'Saltine’s Got Talent',
  summary:
    'A joyful celebration of senior talent, stories, and spirit. Share your gifts, be inspired, and cheer each other on.',
  cta: 'Register for Saltine’s Got Talent',
  image: talentBanner,
}

export const endorsements = [
  {
    label: 'Julia d.',
    image: reviewPlannerThoughts,
    alt: 'Reader review screenshot from Julia d. about the Living Legacy Planner.',
  },
  {
    label: 'BoomerChick',
    image: reviewPlannerAllAges,
    alt: 'Reader review screenshot from BoomerChick about the Living Legacy Planner.',
  },
  {
    label: 'Sheri Cote',
    image: reviewUsefulBook,
    alt: 'Reader review screenshot from Sheri Cote about the Living Legacy Planner.',
  },
] as const

export const blogPosts = [
  {
    slug: 'twice-a-year-twice-the-safety-check-your-detectors-and-change-your-filters',
    title: 'Twice a Year, Twice the Safety: Check Your Detectors and Change Your Filters',
    category: 'Senior safety',
    date: 'May 14, 2025',
    datePublished: '2025-05-14',
    readTime: '4 min read',
    excerpt:
      'A simple seasonal checklist can prevent avoidable emergencies and keep your home running smoothly.',
    image: blogSafetyImage,
    content: [
      {
        heading: 'Why this check matters',
        body:
          'A twice-a-year home safety routine is one of the easiest ways to protect a household. Smoke detectors, carbon monoxide detectors, and air filters all play a role in comfort and safety, and they are easy to overlook until something goes wrong.',
      },
      {
        heading: 'What to do each season',
        body:
          'Test every detector, replace batteries if needed, update filters, and make sure family members know where the shut-offs and emergency contacts are located. If mobility or memory challenges make upkeep difficult, turn this into a family calendar reminder.',
      },
      {
        heading: 'How S.A.L.T. can help',
        body:
          'S.A.L.T. turns practical maintenance into an easy routine with reminders, planning tools, and helpful checklists that reduce stress for seniors and caregivers alike.',
      },
    ],
  },
  {
    slug: 'over-55-communities-is-55-the-right-limit-for-you',
    title: 'Over 55 communities: Is 55 the right limit for you?',
    category: 'Senior living',
    date: 'April 30, 2025',
    datePublished: '2025-04-30',
    readTime: '5 min read',
    excerpt:
      'Over-55 communities can be a fit for some families, but the right choice depends on lifestyle, care needs, and budget.',
    image: communitySpotlightImage,
    content: [
      {
        heading: 'What an over-55 community usually offers',
        body:
          'These neighborhoods often combine low-maintenance living, social opportunities, and age-friendly amenities. They can be attractive for people who want simplicity and community without leaving familiarity behind.',
      },
      {
        heading: 'Questions to ask before moving',
        body:
          'Review the rules, the monthly costs, transportation options, and whether the community supports future health changes. A great fit today should still feel manageable several years from now.',
      },
      {
        heading: 'A thoughtful next step',
        body:
          'If you are comparing communities, use a short checklist to compare access, safety, wellness options, and how connected you want to feel to neighbors and family.',
      },
    ],
  },
  {
    slug: 'discover-the-ultimate-guide-for-seniors-embrace-the-living-legacy-planner',
    title: 'Discover the Ultimate Guide for Seniors: Embrace the Living Legacy Planner',
    category: 'Planning',
    date: 'April 16, 2025',
    datePublished: '2025-04-16',
    readTime: '6 min read',
    excerpt:
      'The Living Legacy Planner helps document wishes, stories, and essential details in one thoughtful place.',
    image: blogPlanningImage,
    content: [
      {
        heading: 'What makes the planner different',
        body:
          'The Living Legacy Planner is designed to capture practical information, personal memories, and final wishes in one calm and organized workbook. It helps families have clearer conversations and reduces uncertainty later.',
      },
      {
        heading: 'How to use it well',
        body:
          'Start with one section at a time. Focus on what matters most, keep the process conversational, and invite family participation when it feels helpful. The goal is not perfection. It is clarity, comfort, and connection.',
      },
      {
        heading: 'Why families keep coming back to it',
        body:
          'When difficult decisions come up, a thoughtful planner becomes more than a notebook. It becomes a shared reference point that keeps everyone anchored in the same priorities.',
      },
    ],
  },
  {
    slug: 'buy-the-essential-guide-for-seniors-the-living-legacy-planner',
    title: 'Buy the Essential Guide for Seniors: The Living Legacy Planner',
    category: 'Products',
    date: 'March 28, 2025',
    datePublished: '2025-03-28',
    readTime: '3 min read',
    excerpt:
      'A simple guide to choosing a planning tool that helps you document the important things with confidence.',
    image: courtneyPortrait,
    content: [
      {
        heading: 'A calm way to start the conversation',
        body:
          'The Living Legacy Planner gives seniors a way to share wishes without pressure. It is useful for families who want to reduce confusion and keep important information accessible.',
      },
      {
        heading: 'What families value most',
        body:
          'People love having one place to organize stories, wishes, contact details, and arrangements. That sense of structure can make a stressful moment feel more manageable.',
      },
      {
        heading: 'Where to begin',
        body:
          'Use the planner alongside a conversation guide and update it at a pace that feels comfortable. Small steps are enough to create real peace of mind.',
      },
    ],
  },
] as const

export const servicePages = {
  consulting: {
    title: 'Senior Care Consulting',
    summary:
      'Personalized guidance for families navigating care decisions, planning, and next steps.',
    image: heroCareImage,
    intro:
      'S.A.L.T. consulting is built for families who want clear, compassionate support when senior care decisions become more complex. We help you understand options, weigh tradeoffs, and move forward with confidence.',
    highlights: [
      'Care planning and decision support',
      'Housing and senior living guidance',
      'Actionable next-step recommendations',
      'Family-centered conversations and follow-up',
    ],
    process: [
      'Start with a focused conversation about your current needs and concerns.',
      'Review care options, housing choices, and practical next steps together.',
      'Leave with a clearer plan, helpful resources, and a way to move forward.',
    ],
    faq: [
      {
        question: 'Who is consulting best for?',
        answer:
          'It is ideal for seniors, adult children, and families who need help understanding care choices, housing options, and planning priorities.',
      },
      {
        question: 'Do you work with families outside Ohio?',
        answer:
          'Yes. S.A.L.T. focuses on guidance that is useful for families across the United States.',
      },
    ],
    cta: 'Book a Free Consultation',
  },
  caregiverSupport: {
    title: 'Caregiver Support',
    summary:
      'Resources, conversations, and tools for those caring for aging loved ones.',
    image: courtneyPortrait,
    intro:
      'Caregiving can be meaningful and exhausting at the same time. S.A.L.T. provides support that respects both realities, giving caregivers helpful information, emotional relief, and practical next steps.',
    highlights: [
      'Private conversations and guided support',
      'Roundtable-style group discussion options',
      'Care tips, planning tools, and encouragement',
      'Resources that make the load feel less lonely',
    ],
    process: [
      'Share what is weighing on you right now.',
      'Identify the biggest pressure points and the most immediate needs.',
      'Get practical guidance and tools you can use right away.',
    ],
    faq: [
      {
        question: 'Is this counseling?',
        answer:
          'No. This is practical caregiving support, education, and guidance centered on day-to-day decisions and planning.',
      },
      {
        question: 'Can family members join?',
        answer:
          'Yes. Family involvement is welcome when it helps everyone stay aligned.',
      },
    ],
    cta: 'Book a Free Consultation',
  },
  community: {
    title: 'Community & Webinars',
    summary:
      'Online courses, webinars, and group discussions designed to educate and connect.',
    image: communitySpotlightImage,
    intro:
      'The S.A.L.T. community is where learning and connection meet. Seniors and caregivers can join group meetings, attend webinars, and find a friendly place to ask questions and share experiences.',
    highlights: [
      'Live and recorded webinars',
      'Interest-based learning and courses',
      'Senior-friendly, welcoming conversations',
      'Community support around planning and wellness',
    ],
    process: [
      'Join a session that matches your current interest.',
      'Learn alongside peers in a calm, senior-friendly setting.',
      'Bring your questions and leave with useful action steps.',
    ],
    faq: [
      {
        question: 'Do I need to be local?',
        answer:
          'No. Community events and webinars are designed to be accessible online.',
      },
      {
        question: 'Can caregivers participate?',
        answer:
          'Absolutely. Caregivers are a core part of the community.',
      },
    ],
    cta: 'Join the Community',
  },
  virtualAssistant: {
    title: 'Senior Care Virtual Assistant Services',
    summary:
      'Support with reminders, check-ins, communication, and daily-life coordination.',
    image: heroCareImage,
    intro:
      'Virtual assistant services help seniors and families stay organized without adding more stress. The goal is to make daily responsibilities feel lighter and more manageable.',
    highlights: [
      'Appointment and medication reminders',
      'Family communication and follow-ups',
      'Digital help and simple technology support',
      'Home maintenance follow-ups and companionship check-ins',
    ],
    process: [
      'Define the recurring tasks that need attention.',
      'Set up a dependable rhythm for reminders and communication.',
      'Adjust the support plan as needs change over time.',
    ],
    faq: [
      {
        question: 'Can services be customized?',
        answer:
          'Yes. Support is tailored to the person, the family, and the routines that matter most.',
      },
      {
        question: 'Do you provide in-person care?',
        answer:
          'This service is focused on virtual assistance, coordination, and support, not hands-on medical care.',
      },
    ],
    cta: 'Book a Free Consultation',
  },
} as const

export const shopSections = {
  membership: {
    title: 'Free Daily Planner / Free Membership Offer',
    summary:
      'Unlock free membership to get access to the daily planner and stay connected with helpful resources.',
    cta: 'Unlock Free Membership',
  },
  planner: {
    title: 'The Living Legacy Planner',
    summary:
      'A compassionate planning tool that helps seniors document wishes, memories, and important information in one place.',
    image: plannerFlatlay,
  },
  relics: {
    title: 'Relics of the Century',
    summary:
      'A nostalgic book and visual journey through the keepsakes, memories, and milestones that shaped a generation.',
    image: relicsBook,
  },
  discussionGuide: {
    title: 'Final Arrangement 10 Point Discussion Guide',
    summary:
      'A practical guide to help families talk clearly about final wishes and arrangements.',
    cta: 'Request the Guide',
  },
}

export const legal = {
  privacyTitle: 'Privacy Policy',
  termsTitle: 'Terms & Conditions',
}

export type ResourceCategory = {
  slug: string
  title: string
  summary: string
  intro: string
  image: string
  sections: ReadonlyArray<{
    title: string
    items: ReadonlyArray<string>
  }>
  cta: string
}

export const resourceCategories: ResourceCategory[] = [
  {
    slug: 'caregivers',
    title: 'Caregiver Resources',
    summary: 'Practical tools for first-time caregivers and busy family supporters.',
    intro:
      'This category gives caregivers a calm starting point, with tools that help organize care, prepare for appointments, and reduce the feeling of carrying everything alone.',
    image: courtneyPortrait,
    sections: [
      {
        title: 'Start here',
        items: ['First-Time Caregiver Guide', 'Caregiver Checklist', 'Medication Tracking'],
      },
      {
        title: 'When things get busy',
        items: ['Hospital Preparation', 'Family communication prompts', 'Weekly follow-up reminders'],
      },
    ],
    cta: 'Explore caregiver support',
  },
  {
    slug: 'seniors',
    title: 'Senior Living',
    summary: 'Everyday guidance that helps seniors stay organized, informed, and connected.',
    intro:
      'Senior living resources should feel practical and respectful. This section helps seniors keep key details in one place while staying focused on comfort, independence, and clarity.',
    image: heroCareImage,
    sections: [
      {
        title: 'Helpful topics',
        items: ['Daily routines', 'Downsizing and transitions', 'Living with intention'],
      },
      {
        title: 'Best next steps',
        items: ['Planner setup', 'Community connection', 'Family check-in conversations'],
      },
    ],
    cta: 'Browse senior living topics',
  },
  {
    slug: 'health',
    title: 'Health & Wellness',
    summary: 'Lifestyle guidance around nutrition, movement, and feeling well day to day.',
    intro:
      'Aging well includes the small habits that keep the body and mind supported. This page gathers practical wellness ideas that are easy to revisit and share with family.',
    image: blogSafetyImage,
    sections: [
      {
        title: 'Aging well',
        items: ['Nutrition', 'Exercise', 'Sleep and recovery'],
      },
      {
        title: 'Supportive routines',
        items: ['Hydration reminders', 'Appointment prep', 'Simple habit tracking'],
      },
    ],
    cta: 'See wellness resources',
  },
  {
    slug: 'safety',
    title: 'Senior Safety',
    summary: 'Fall prevention, scam awareness, and emergency planning made easier.',
    intro:
      'Safety content is designed to be useful without feeling alarming. It focuses on the practical steps that protect seniors, homes, and family peace of mind.',
    image: blogSafetyImage,
    sections: [
      {
        title: 'Core topics',
        items: ['Fall prevention', 'Scam awareness', 'Emergency planning'],
      },
      {
        title: 'Home checkups',
        items: ['Detector checks', 'Filter changes', 'Emergency contacts'],
      },
    ],
    cta: 'Open safety resources',
  },
  {
    slug: 'legacy-planning',
    title: 'Legacy Planning',
    summary: 'Estate preparation, important documents, and family communication support.',
    intro:
      'Legacy planning becomes easier when the right information is gathered calmly and made easy to share. This category connects the planner, conversation guide, and related resources.',
    image: plannerFlatlay,
    sections: [
      {
        title: 'Legacy essentials',
        items: ['Estate preparation', 'Important documents', 'Family communication'],
      },
      {
        title: 'Helpful tools',
        items: ['The Living Legacy Planner', 'Final Arrangement Discussion Guide', 'Memory capture prompts'],
      },
    ],
    cta: 'Open legacy planning',
  },
  {
    slug: 'dementia-alzheimers',
    title: 'Dementia & Alzheimer\'s',
    summary: 'Memory care resources and family guides for changing needs.',
    intro:
      'Families navigating memory care need information that is calm, specific, and easy to return to. This category keeps the tone practical and human.',
    image: communitySpotlightImage,
    sections: [
      {
        title: 'Family support',
        items: ['Memory care routines', 'Communication strategies', 'Plan updates for changing needs'],
      },
      {
        title: 'Guidance topics',
        items: ['Family readiness', 'Daily structure', 'Caregiver check-ins'],
      },
    ],
    cta: 'Explore memory care resources',
  },
]

export type VideoLesson = {
  slug: string
  title: string
  category: string
  summary: string
  image: string
  duration: string
  transcript: ReadonlyArray<{ heading: string; body: string }>
  checklist: ReadonlyArray<string>
  blogPostSlug: string
}

export const videoLessons: VideoLesson[] = [
  {
    slug: 'first-time-caregiver-orientation',
    title: 'First-Time Caregiver Orientation',
    category: 'Caregiver Training',
    summary:
      'A calm walkthrough of what to do first when a parent or loved one needs support.',
    image: courtneyPortrait,
    duration: '8 min',
    transcript: [
      {
        heading: 'Start with the immediate needs',
        body:
          'The first step is not to solve everything. It is to map what is urgent, what is emotional, and what can wait until the next conversation.',
      },
      {
        heading: 'Bring structure to the week',
        body:
          'Caregiving becomes easier when appointment notes, medication details, and family contact information live in one place.',
      },
    ],
    checklist: [
      'List urgent needs and next appointments',
      'Write down key contacts and medications',
      'Set one weekly family check-in',
    ],
    blogPostSlug: 'twice-a-year-twice-the-safety-check-your-detectors-and-change-your-filters',
  },
  {
    slug: 'living-legacy-planner-walkthrough',
    title: 'Living Legacy Planner Walkthrough',
    category: 'Living Legacy Planner',
    summary:
      'A guided look at how the planner helps document wishes, stories, and important information.',
    image: plannerFlatlay,
    duration: '7 min',
    transcript: [
      {
        heading: 'The planning problem',
        body:
          'Families often know what matters but do not know where the details are. The planner turns scattered notes into one steady reference.',
      },
      {
        heading: 'How to use it well',
        body:
          'Use the planner one section at a time and invite family members in when the conversation feels ready. Small progress is still progress.',
      },
    ],
    checklist: [
      'Fill in important contacts',
      'Capture wishes and memories',
      'Review the planner with family',
    ],
    blogPostSlug: 'discover-the-ultimate-guide-for-seniors-embrace-the-living-legacy-planner',
  },
  {
    slug: 'family-preparedness-checklist',
    title: 'Family Preparedness Checklist',
    category: 'Family Preparedness',
    summary:
      'An easy checklist for organizing emergency planning, home safety, and communication.',
    image: blogSafetyImage,
    duration: '6 min',
    transcript: [
      {
        heading: 'What to prepare first',
        body:
          'The most useful preparedness work is simple: know who to call, what to grab, and where important documents live.',
      },
      {
        heading: 'Keep it actionable',
        body:
          'A checklist only works when it feels repeatable. Build routines that make the plan easy to keep current.',
      },
    ],
    checklist: [
      'Verify detectors and filters',
      'Store emergency contacts in one place',
      'Review the home plan with family',
    ],
    blogPostSlug: 'over-55-communities-is-55-the-right-limit-for-you',
  },
]

export type PodcastEpisode = {
  slug: string
  title: string
  guests: ReadonlyArray<string>
  summary: string
  image: string
  duration: string
  transcript: ReadonlyArray<{ heading: string; body: string }>
  takeaways: ReadonlyArray<string>
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    slug: 'caregivers-and-the-new-rhythm-of-support',
    title: 'Caregivers and the New Rhythm of Support',
    guests: ['Caregivers', 'Family advocates'],
    summary:
      'A discussion about what changes when the care role becomes part of everyday life.',
    image: communitySpotlightImage,
    duration: '22 min',
    transcript: [
      {
        heading: 'What families feel first',
        body:
          'Most people feel pressure before they feel clarity. The episode focuses on how to slow down and organize the next step.',
      },
      {
        heading: 'Why support is easier with structure',
        body:
          'The conversation covers reminders, shared calendars, and simple planning systems that keep the load manageable.',
      },
    ],
    takeaways: [
      'Build one weekly family check-in',
      'Use a single planning system',
      'Ask for practical support early',
    ],
  },
  {
    slug: 'the-story-behind-the-living-legacy-planner',
    title: 'The Story Behind the Living Legacy Planner',
    guests: ['Courtney Jones'],
    summary:
      'Courtney shares why the planner exists and how it helps families feel prepared.',
    image: plannerFlatlay,
    duration: '18 min',
    transcript: [
      {
        heading: 'Why the planner was created',
        body:
          'The planner was designed to reduce uncertainty and help families document the important things in one calm place.',
      },
      {
        heading: 'How it supports family conversations',
        body:
          'It gives everyone a shared reference point so the conversation feels clearer and less overwhelming.',
      },
    ],
    takeaways: [
      'One place for wishes and memories',
      'Shared reference for family conversations',
      'Helpful for difficult planning moments',
    ],
  },
  {
    slug: 'planning-with-doctors-attorneys-and-financial-guidance',
    title: 'Planning With Doctors, Attorneys, and Financial Guidance',
    guests: ['Doctors', 'Attorneys', 'Financial advisors'],
    summary:
      'A practical interview about how families can prepare better questions and arrive more organized.',
    image: heroCareImage,
    duration: '26 min',
    transcript: [
      {
        heading: 'Bring a better checklist',
        body:
          'Preparation makes professional conversations more productive and less overwhelming for everyone involved.',
      },
      {
        heading: 'Keep the records usable',
        body:
          'The best systems are the ones family members can access and understand when they need them most.',
      },
    ],
    takeaways: [
      'Prepare questions before appointments',
      'Organize records in one place',
      'Keep family updated on decisions',
    ],
  },
]

export const plannerLanding = {
  title: 'The Living Legacy Planner',
  summary:
    'A calm planning companion that helps seniors document wishes, memories, and important information in one place.',
  problem:
    'Families often know they should plan, but the process feels fragmented and easy to postpone.',
  solution:
    'The planner turns scattered questions into a clear, respectful system that keeps everyone aligned.',
  demo: [
    'Document final wishes and contacts',
    'Keep memories and notes together',
    'Share a calm reference with family',
  ],
  testimonials: [
    'Helpful for families who want one place to organize the conversation.',
    'A thoughtful tool that keeps the next step from feeling overwhelming.',
  ],
  cta: 'Buy the Planner',
}

export const affiliateProgram = {
  title: 'Affiliate Program',
  summary:
    'Invite bloggers, caregivers, and senior community leaders to share products they trust.',
  benefits: [
    '30% commission on planner sales',
    '50% commission on digital downloads',
    'Simple tracking and a clear payout path',
  ],
  audience: ['Bloggers', 'Caregivers', 'Influencers', 'Senior communities', 'Insurance agents'],
  cta: 'Apply to Join',
}

export const partnerProgram = {
  title: 'Partner Program',
  summary:
    'A referral path for caregivers, social workers, senior centers, home care agencies, and financial professionals.',
  benefits: [
    'Refer families to trusted resources',
    'Create a steady referral relationship',
    'Support people with a clearer next step',
  ],
  audience: ['Caregivers', 'Social workers', 'Senior centers', 'Home care agencies', 'Insurance professionals'],
  cta: 'Become a Senior Living Advocate',
}

export const subscriptionBox = {
  title: 'Subscription Box',
  summary:
    'A future monthly senior care package with practical digital resources, printed checklists, and educational support.',
  includes: [
    'Digital resources',
    'Printed checklists',
    'Product samples',
    'Educational materials',
  ],
  cta: 'Join the Waitlist',
}

export const storeCategories = [
  'Senior Living',
  'Caregiver Essentials',
  'Health & Wellness',
  'Mobility Aids',
  'Home Safety',
  'Emergency Preparedness',
  'Legacy Planning',
  'Digital Downloads',
] as const
