export enum ProjectCategory {
  All = 'All',
  RideSharing = 'Ride Sharing',
  Chatting = 'Chatting',
  FoodDelivery = 'Food Delivery',
  HealthCare = 'Healthcare & Medical Systems',
  Fintech = 'Fintech',
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  features: string[];
  metrics: ProjectMetric[];
  thumbnailUrl: string;
  galleryUrls: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}