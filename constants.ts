import { Project, ProjectCategory, TeamMember } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'RidePulse',
    slug: 'ride-pulse',
    category: ProjectCategory.RideSharing,
    shortDescription: 'Real-time ride sharing platform with sub-second latency.',
    fullDescription: 'RidePulse is a comprehensive ride-sharing ecosystem designed for high-concurrency markets. We engineered the driver dispatch algorithm to handle 50k+ concurrent requests while maintaining battery efficiency on the driver app using native background services. The system utilizes a hexagonal architecture to ensure scalability and testability.',
    tags: ['Kotlin', 'Google Maps SDK', 'WebSocket', 'Redis', 'Spring Boot'],
    features: [
      'Real-time driver tracking with interpolation',
      'Dynamic surge pricing algorithm',
      'Split-fare payments integration',
      'In-app safety toolkit & emergency SOS',
      'Driver analytics dashboard'
    ],
    metrics: [
      { label: 'Downloads', value: '1M+' },
      { label: 'Rating', value: '4.8★' },
      { label: 'Uptime', value: '99.99%' }
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1600',
    galleryUrls: [
      'https://images.unsplash.com/photo-1506485338023-6ce5f36692df?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '2',
    name: 'SwiftLift',
    slug: 'swift-lift',
    category: ProjectCategory.RideSharing,
    shortDescription: 'Corporate carpooling with enterprise security.',
    fullDescription: 'SwiftLift focuses on secure, verified corporate carpooling. The challenge was integrating with corporate SSO (Single Sign-On) and ensuring strict schedule adherence. We built a custom route optimization engine that groups employees based on shift timings and proximity, reducing overall commute carbon footprint.',
    tags: ['Flutter', 'Firebase', 'Azure AD', 'Mapbox', 'Node.js'],
    features: [
      'Corporate SSO verification',
      'Scheduled recurring rides',
      'Carbon footprint tracking',
      'Route optimization engine'
    ],
    metrics: [
      { label: 'Daily Rides', value: '15k' },
      { label: 'CO2 Saved', value: '500 Tons' }
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600',
    galleryUrls: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '3',
    name: 'ChatHive',
    slug: 'chat-hive',
    category: ProjectCategory.Chatting,
    shortDescription: 'Secure, encrypted enterprise messaging.',
    fullDescription: 'ChatHive provides end-to-end encrypted messaging for sensitive industries (Healthcare, Finance). Built with a focus on privacy, it stores zero knowledge on servers. The UI was built with Jetpack Compose for a buttery smooth 120fps experience, even on mid-range devices.',
    tags: ['Jetpack Compose', 'Signal Protocol', 'gRPC', 'Room DB'],
    features: [
      'End-to-End Encryption (E2EE)',
      'Self-destructing messages',
      'Secure file sharing',
      'On-premise deployment options'
    ],
    metrics: [
      { label: 'Messages/Day', value: '5M+' },
      { label: 'Security', value: 'A+' }
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600',
    galleryUrls: [
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '4',
    name: 'TalkLoop',
    slug: 'talk-loop',
    category: ProjectCategory.Chatting,
    shortDescription: 'Voice-first social network for communities.',
    fullDescription: 'TalkLoop brings the clubhouse experience to niche communities. We utilized WebRTC for low-latency voice streaming and implemented a custom audio processing pipeline to reduce background noise on low-end Android devices.',
    tags: ['WebRTC', 'Kotlin Coroutines', 'Agora SDK', 'Node.js'],
    features: [
      'Live audio rooms',
      'Spatial audio support',
      'Voice modulation effects',
      'Podcast recording & archiving'
    ],
    metrics: [
      { label: 'Active Rooms', value: '2,000' },
      { label: 'Avg Session', value: '45m' }
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1600',
    galleryUrls: ['https://images.unsplash.com/photo-1478737270239-2f02b77ac6b5?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: '5',
    name: 'BiteBuddy',
    slug: 'bite-buddy',
    category: ProjectCategory.FoodDelivery,
    shortDescription: 'Hyper-local food delivery for university campuses.',
    fullDescription: 'Designed specifically for walking couriers on campuses where vehicles are restricted. The UI prioritizes quick interactions and offline-first capabilities for areas with spotty WiFi in basements or lecture halls.',
    tags: ['React Native', 'GraphQL', 'Stripe', 'Realm'],
    features: [
      'Dorm-room delivery tracking',
      'Group ordering',
      'Student meal-plan integration',
      'Real-time courier chat'
    ],
    metrics: [
      { label: 'Campuses', value: '12' },
      { label: 'Orders/Mo', value: '120k' }
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1600',
    galleryUrls: ['https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: '6',
    name: 'GoCourier',
    slug: 'go-courier',
    category: ProjectCategory.Logistics,
    shortDescription: 'Last-mile logistics and fleet management.',
    fullDescription: 'An enterprise solution for managing fleets of 500+ vehicles. Includes a driver app, a warehouse scanner app, and a manager dashboard. We utilized the Zebra SDK for industrial barcode scanning hardware integration.',
    tags: ['Android Enterprise', 'Zebra SDK', 'MQTT', 'Java'],
    features: [
      'Barcode scanning optimization',
      'Route manifesto management',
      'Proof of delivery (Signature/Photo)',
      'Vehicle telemetry'
    ],
    metrics: [
      { label: 'Fleets', value: '45' },
      { label: 'Packages', value: '10M+' }
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600',
    galleryUrls: ['https://images.unsplash.com/photo-1566576912902-48fdb3067936?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: '7',
    name: 'PayNest',
    slug: 'pay-nest',
    category: ProjectCategory.Fintech,
    shortDescription: 'Digital wallet and peer-to-peer payments.',
    fullDescription: 'A secure fintech app compliant with PCI-DSS. We implemented biometric authentication and fraud detection algorithms running locally on the device to prevent account takeovers before they happen.',
    tags: ['Biometric API', 'SafetyNet', 'NFC', 'Kotlin'],
    features: [
      'NFC Tap to Pay',
      'QR Code payments',
      'Bill splitting',
      'Virtual cards'
    ],
    metrics: [
      { label: 'Transacted', value: '$500M' },
      { label: 'Fraud Rate', value: '<0.01%' }
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1600',
    galleryUrls: ['https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800']
  }
];

export const TEAM: TeamMember[] = [
  { name: 'Alex Rivera', role: 'Lead Android Engineer', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
  { name: 'Sarah Chen', role: 'Product Designer', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
  { name: 'David Kim', role: 'Backend Architect', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
];
