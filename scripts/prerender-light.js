// Lightweight prerender script - generates SEO meta tags without full React SSR
// This is memory-efficient and works within Vercel's Hobby plan limits

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.join(__dirname, '..', 'dist');

// SEO data for each route
const routeSeoData = {
  '/': {
    title: '24/7 Mobile Hydraulic Repair in Bakersfield, Wichita & Lubbock | Frontline Hydraulic Services',
    description: 'Emergency hydraulic hose repair with 60-minute response. Mobile service for construction, agriculture, and industrial equipment. Call 859-462-4673 for immediate dispatch.',
    keywords: 'mobile hydraulic repair, hydraulic hose repair, emergency hydraulic service, Bakersfield, Wichita, Lubbock'
  },
  '/about': {
    title: 'About Frontline Hydraulic Services | 24/7 Mobile Hydraulic Repair',
    description: 'Learn about Frontline Hydraulic Services - your trusted partner for emergency mobile hydraulic repair in Bakersfield, Wichita, and Lubbock. Certified technicians available 24/7.',
    keywords: 'about frontline hydraulics, hydraulic repair company, mobile hydraulic service'
  },
  '/contact': {
    title: 'Contact Us | Frontline Hydraulic Services | 859-462-4673',
    description: 'Contact Frontline Hydraulic Services for emergency hydraulic repair. Available 24/7 in Bakersfield, Wichita, and Lubbock. Call 859-462-4673 or request service online.',
    keywords: 'contact hydraulic repair, emergency hydraulic service, dispatch technician'
  },
  '/service-map': {
    title: 'Service Map - Coverage Areas | Frontline Hydraulic Services',
    description: 'View our service map and coverage areas. 24/7 emergency mobile hydraulic repair available in Bakersfield CA, Wichita KS, and Lubbock TX.',
    keywords: 'service map, coverage area, hydraulic repair near me'
  },
  '/services': {
    title: 'Hydraulic Repair Services | Mobile Hose Repair & More | Frontline',
    description: 'Complete hydraulic repair services including emergency hose repair, cylinder repair, system diagnostics, and fleet maintenance. 24/7 mobile service available.',
    keywords: 'hydraulic services, hose repair, cylinder repair, fleet maintenance'
  },
  '/services/emergency-repair': {
    title: 'Emergency Hydraulic Hose Repair | 24/7 Mobile Service | Frontline',
    description: 'Emergency hydraulic hose repair with 60-minute response time. We come to your jobsite 24/7 with fully stocked service trucks. Call 859-462-4673 now.',
    keywords: 'emergency hydraulic repair, hydraulic hose repair, mobile hose repair, 24/7 service'
  },
  '/services/mobile-fabrication': {
    title: 'Mobile Hydraulic Fabrication | Custom Hose Assembly On-Site | Frontline',
    description: 'On-site hydraulic hose fabrication and custom assembly. Our mobile units build hoses to exact specs at your location. Available 24/7.',
    keywords: 'mobile fabrication, custom hose assembly, hydraulic hose building'
  },
  '/services/diagnostics': {
    title: 'Hydraulic System Diagnostics | Troubleshooting & Testing | Frontline',
    description: 'Professional hydraulic system diagnostics and troubleshooting. We identify problems fast with advanced testing equipment. Mobile service available.',
    keywords: 'hydraulic diagnostics, system troubleshooting, hydraulic testing'
  },
  '/services/cylinder-repair': {
    title: 'Hydraulic Cylinder Repair | Mobile Service | Frontline Hydraulic Services',
    description: 'Expert hydraulic cylinder repair and rebuilding. Seal replacement, bore repair, and complete rebuilds. Mobile and shop service available.',
    keywords: 'cylinder repair, hydraulic cylinder rebuild, seal replacement'
  },
  '/services/fluid-services': {
    title: 'Hydraulic Fluid Services | Oil Analysis & Fluid Exchange | Frontline',
    description: 'Complete hydraulic fluid services including oil analysis, fluid exchange, and contamination control. Keep your systems running clean.',
    keywords: 'hydraulic fluid, oil analysis, fluid exchange, contamination control'
  },
  '/services/fleet-maintenance': {
    title: 'Fleet Hydraulic Maintenance | Preventive Service Programs | Frontline',
    description: 'Scheduled hydraulic maintenance for fleets. Reduce downtime with preventive service programs. Mobile service for your entire fleet.',
    keywords: 'fleet maintenance, preventive maintenance, scheduled service'
  },
  '/services/industrial-plant-service': {
    title: 'Industrial Plant Hydraulic Service | On-Site Repair | Frontline',
    description: 'Industrial hydraulic service for manufacturing plants and facilities. On-site repair and maintenance to minimize production downtime.',
    keywords: 'industrial hydraulic service, plant maintenance, manufacturing hydraulics'
  },
  '/services/heavy-equipment-repair': {
    title: 'Heavy Equipment Hydraulic Repair | Mobile Service | Frontline',
    description: 'Heavy equipment hydraulic repair for excavators, loaders, dozers, and more. Mobile service brings repairs to your jobsite.',
    keywords: 'heavy equipment repair, excavator hydraulics, construction equipment'
  },
  '/locations/bakersfield': {
    title: 'Mobile Hydraulic Repair Bakersfield CA | 24/7 Service | Frontline',
    description: 'Emergency hydraulic repair in Bakersfield and Kern County. 24/7 mobile service for oil fields, agriculture, and construction. Call 859-462-4673.',
    keywords: 'Bakersfield hydraulic repair, Kern County mobile service, California hydraulic hose repair'
  },
  '/locations/wichita': {
    title: 'Mobile Hydraulic Repair Wichita KS | 24/7 Service | Frontline',
    description: 'Emergency hydraulic repair in Wichita and Sedgwick County. 24/7 mobile service for aviation, manufacturing, and agriculture. Call 859-462-4673.',
    keywords: 'Wichita hydraulic repair, Kansas mobile service, Sedgwick County hydraulic hose'
  },
  '/locations/lubbock': {
    title: 'Mobile Hydraulic Repair Lubbock TX | 24/7 Service | Frontline',
    description: 'Emergency hydraulic repair in Lubbock and West Texas. 24/7 mobile service for cotton, oil, and construction industries. Call 859-462-4673.',
    keywords: 'Lubbock hydraulic repair, West Texas mobile service, Lubbock County hydraulic hose'
  },
  '/blog': {
    title: 'Hydraulic Repair Blog | Tips, Guides & Industry News | Frontline',
    description: 'Expert hydraulic repair tips, maintenance guides, and industry news. Learn how to extend equipment life and reduce downtime.',
    keywords: 'hydraulic blog, repair tips, maintenance guides'
  },
  // Blog posts
  '/blog/5-signs-hydraulic-hose-replacement': {
    title: '5 Signs You Need Hydraulic Hose Replacement | Frontline Blog',
    description: 'Learn the 5 warning signs that indicate your hydraulic hoses need replacement. Prevent costly failures with this expert guide.',
    keywords: 'hydraulic hose replacement, hose failure signs, when to replace hoses'
  },
  '/blog/how-to-choose-mobile-hydraulic-repair': {
    title: 'How to Choose a Mobile Hydraulic Repair Service | Frontline Blog',
    description: 'Tips for choosing the right mobile hydraulic repair service. What to look for in response time, expertise, and equipment.',
    keywords: 'choose hydraulic repair, mobile service selection, repair service tips'
  },
  '/blog/emergency-hydraulic-repair-guide': {
    title: 'Emergency Hydraulic Repair Guide | What to Do When Systems Fail',
    description: 'Step-by-step guide for handling hydraulic emergencies. Learn what to do when your hydraulic system fails on the job.',
    keywords: 'emergency hydraulic guide, system failure, hydraulic emergency'
  },
  '/blog/mobile-hydraulic-hose-repair-cost': {
    title: 'Mobile Hydraulic Hose Repair Cost Guide | What to Expect | Frontline',
    description: 'Understanding mobile hydraulic hose repair costs. Factors that affect pricing and how to budget for repairs.',
    keywords: 'hydraulic repair cost, hose repair pricing, mobile service cost'
  },
  '/blog/can-hydraulic-hoses-be-repaired': {
    title: 'Can Hydraulic Hoses Be Repaired? When to Repair vs Replace | Frontline',
    description: 'Expert advice on whether to repair or replace hydraulic hoses. Learn when repair is safe and when replacement is necessary.',
    keywords: 'repair hydraulic hose, hose repair vs replace, hose damage assessment'
  },
  '/blog/mobile-repair-vs-parts-store-hoses': {
    title: 'Mobile Repair vs Parts Store Hoses | Which is Better? | Frontline',
    description: 'Compare mobile hydraulic repair service vs buying hoses from parts stores. Pros and cons of each option for your equipment.',
    keywords: 'mobile repair vs parts store, hydraulic hose options, repair service comparison'
  }
};

// Default SEO data for routes not explicitly defined
const defaultSeo = {
  title: 'Frontline Hydraulic Services | 24/7 Mobile Hydraulic Repair',
  description: 'Professional mobile hydraulic repair services available 24/7 in Bakersfield, Wichita, and Lubbock. Emergency hose repair, cylinder service, and more.',
  keywords: 'mobile hydraulic repair, hydraulic hose repair, emergency service'
};

function generateMetaTags(seo, canonicalUrl) {
  return `
    <title>${seo.title}</title>
    <meta name="title" content="${seo.title}" />
    <meta name="description" content="${seo.description}" />
    <meta name="keywords" content="${seo.keywords}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:site_name" content="Frontline Hydraulic Services" />
    <meta property="og:image" content="https://emergencyhydraulics.com/assets/logo.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="https://emergencyhydraulics.com/assets/logo.webp" />
  `;
}

async function prerender() {
  const templatePath = path.join(DIST_PATH, 'index.html');
  
  if (!fs.existsSync(templatePath)) {
    console.error("❌ Could not find dist/index.html. Run vite build first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const routes = Object.keys(routeSeoData);

  console.log('🚀 Generating SEO-optimized static pages...');

  for (const route of routes) {
    try {
      const seo = routeSeoData[route] || defaultSeo;
      const canonicalUrl = `https://emergencyhydraulics.com${route === '/' ? '' : route}`;
      const metaTags = generateMetaTags(seo, canonicalUrl);

      // Inject meta tags into the head
      const html = template.replace('</head>', `${metaTags}\n  </head>`);

      // Write the file
      const targetDir = path.join(DIST_PATH, route === '/' ? '' : route);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(targetDir, 'index.html'), html);
      console.log(`  ✅ ${route}`);
    } catch (err) {
      console.error(`  ❌ Error on route ${route}:`, err.message);
    }
  }

  console.log('🎉 SEO prerendering complete!');
}

prerender();
