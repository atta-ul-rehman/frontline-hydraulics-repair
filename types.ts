
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

// Blog Post Interfaces
export type ContentBlockType = 'paragraph' | 'h2' | 'h3' | 'ul' | 'ol' | 'image' | 'cta' | 'alert' | 'quote';

export interface ContentBlock {
  type: ContentBlockType;
  content?: string; // HTML string for text with bold/links
  items?: string[]; // For lists
  src?: string; // For images
  alt?: string; // For images
  caption?: string; // For images
  url?: string; // For CTA
  linkText?: string; // For CTA
  title?: string; // For Alert/CTA headers
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: string;
    keyword: string;
    searchVolume: string;
    intent: string;
    image: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    content: ContentBlock[]; // Rich content structure
    keyTakeaways: string[]; // For Featured Snippet optimization
}
