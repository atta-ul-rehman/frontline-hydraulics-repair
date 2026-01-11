import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'service' | 'local';
  keywords?: string;
  image?: string;
  schema?: Record<string, any>;
  breadcrumbs?: BreadcrumbItem[];
}

const SeoHead: React.FC<SeoHeadProps> = ({ 
  title, 
  description, 
  canonicalUrl,
  type = 'website',
  keywords = "mobile hydraulic repair, hydraulic hose repair, emergency hydraulic service, Bakersfield, Kern County, Wichita, Lubbock",
  image = "https://emergencyhydraulics.com/images/og-image.jpg",
  schema,
  breadcrumbs
}) => {
  const siteName = "Frontline Hydraulic Services";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const resolvedCanonical = canonicalUrl ?? (typeof window !== 'undefined' ? window.location.href : 'https://emergencyhydraulics.com');

  // Enhanced Multi-Location Schema (Homepage Default)
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Frontline Hydraulic Services",
    "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
    "@id": "https://emergencyhydraulics.com",
    "url": "https://emergencyhydraulics.com",
    "telephone": "+1-859-462-4673",
    "priceRange": "$$",
    "description": "Nationwide network for mobile hydraulic hose repair and emergency heavy equipment service.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Bakersfield",
        "address": { "@type": "PostalAddress", "addressRegion": "CA" }
      },
      {
        "@type": "City",
        "name": "Wichita",
        "address": { "@type": "PostalAddress", "addressRegion": "KS" }
      },
      {
        "@type": "City",
        "name": "Lubbock",
        "address": { "@type": "PostalAddress", "addressRegion": "TX" }
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/frontlinehydraulics",
      "https://www.linkedin.com/company/frontlinehydraulics"
    ]
  };

  const finalSchema = schema ? { ...defaultSchema, ...schema } : defaultSchema;

  // Breadcrumb Schema Generator
  let breadcrumbSchema = null;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.item.startsWith('http') ? crumb.item : `https://frontlinehydraulics.com${crumb.item}`
      }))
    };
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {resolvedCanonical && <link rel="canonical" href={resolvedCanonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={resolvedCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta http-equiv="content-language" content="en-US" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }} />
      {breadcrumbSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}
    </Helmet>
  );
};

export default SeoHead;