import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string[];
  icon: LucideIcon;
}

export interface IndustryItem {
  name: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  title: string;
  description?: string;
}

// Service Page Template Interfaces
export interface ServicePageData {
  id: string;
  title: string;
  heroImage: string;
  subheading: string;
  description: {
    heading: string;
    paragraphs: string[];
  };
  features: string[];
  whatsIncluded: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  process: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  industries: {
    left: string[];
    right: string[];
  };
  benefits: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  commonIssues: string[];
  relatedServices: {
    title: string;
    description: string;
    icon: LucideIcon;
    id: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

// Location Page Template Interfaces
export interface LocationPageData {
  id: string;
  city: string;
  state: string;
  county: string;
  heroImage: string;
  intro: {
    heading: string;
    paragraphs: string[];
  };
  localDetails: {
    phone: string;
    hours: string;
    responseTime: string;
    serviceAreaShort: string;
    coverageAreas: string[];
  };
  localIndustries: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  serviceArea: {
    cities: string[];
    mapImage: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  nearbyLocations: {
    name: string;
    id: string;
  }[];
}