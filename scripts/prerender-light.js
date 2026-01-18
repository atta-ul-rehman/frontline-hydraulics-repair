// Lightweight prerender script - generates SEO meta tags without full React SSR
// This is memory-efficient and works within Vercel's Hobby plan limits
// IMPORTANT: This uses actual data from the data files to ensure consistency

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.join(__dirname, '..', 'dist');

// ============================================================
// SEO DATA - Synced from actual data files and page components
// ============================================================

const routeSeoData = {
  // ========== MAIN PAGES ==========
  '/': {
    title: '24/7 Mobile Hydraulic Repair in Bakersfield, Wichita & Lubbock | Frontline Hydraulic Services',
    description: 'Emergency hydraulic hose repair with 60-minute response. Mobile service for construction, agriculture, and industrial equipment. Call 859-462-4673 for immediate dispatch.',
    keywords: 'mobile hydraulic repair, hydraulic hose repair, emergency hydraulic service, Bakersfield, Wichita, Lubbock',
    h1: '24/7 Emergency Mobile Hydraulic Repair',
    content: 'When hydraulic systems fail, every minute costs money. Frontline Hydraulic Services provides 24/7 emergency mobile hydraulic repair across Bakersfield, Wichita, and Lubbock with 60-minute average response times. Our fully-equipped service trucks bring the shop to your jobsite.'
  },
  '/about': {
    title: 'About Frontline Hydraulic Services | 24/7 Mobile Hydraulic Repair',
    description: 'Learn about Frontline Hydraulic Services - your trusted partner for emergency mobile hydraulic repair in Bakersfield, Wichita, and Lubbock. Certified technicians available 24/7.',
    keywords: 'about frontline hydraulics, hydraulic repair company, mobile hydraulic service',
    h1: 'About Frontline Hydraulic Services',
    content: 'Frontline Hydraulic Services is your trusted partner for emergency mobile hydraulic repair. Our certified technicians are available 24/7 in Bakersfield, Wichita, and Lubbock, delivering fast, professional hydraulic hose repair and fabrication directly to your jobsite.'
  },
  '/contact': {
    title: 'Contact Us | Frontline Hydraulic Services | 859-462-4673',
    description: 'Contact Frontline Hydraulic Services for emergency hydraulic repair. Available 24/7 in Bakersfield, Wichita, and Lubbock. Call 859-462-4673 or request service online.',
    keywords: 'contact hydraulic repair, emergency hydraulic service, dispatch technician',
    h1: 'Contact Frontline Hydraulic Services',
    content: 'Need emergency hydraulic repair? Contact Frontline Hydraulic Services 24/7. Call 859-462-4673 for immediate dispatch in Bakersfield, Wichita, and Lubbock. Our mobile technicians are ready to respond.'
  },
  '/service-map': {
    title: 'Service Coverage Map | Frontline Hydraulic Services',
    description: 'View our service coverage areas. 24/7 emergency mobile hydraulic repair available in Bakersfield CA, Wichita KS, and Lubbock TX with 60-minute response.',
    keywords: 'service map, coverage area, hydraulic repair near me, Bakersfield, Wichita, Lubbock',
    h1: 'Service Coverage Areas',
    content: 'Frontline Hydraulic Services provides 24/7 emergency mobile hydraulic repair coverage across three major regions: Bakersfield and Kern County CA, Wichita and Sedgwick County KS, and Lubbock and West Texas. View our service map to find coverage in your area.'
  },
  '/services': {
    title: 'Hydraulic Repair Services | Mobile Hose Repair & More | Frontline',
    description: 'Complete hydraulic repair services including emergency hose repair, cylinder repair, system diagnostics, and fleet maintenance. 24/7 mobile service available.',
    keywords: 'hydraulic services, hose repair, cylinder repair, fleet maintenance, mobile hydraulic service',
    h1: 'Hydraulic Repair Services',
    content: 'Frontline offers comprehensive hydraulic repair services: Emergency Hose Repair, Mobile Fabrication, System Diagnostics, Cylinder Repair, Fluid Services, Fleet Maintenance, Industrial Plant Service, and Heavy Equipment Repair. All services available 24/7 with mobile dispatch.'
  },

  // ========== SERVICE PAGES (from data/services.ts) ==========
  '/services/emergency-repair': {
    title: '24/7 Emergency Hydraulic Hose Repair Near You | Mobile Service',
    description: 'Fast emergency hydraulic hose repair in Bakersfield, Wichita, and Lubbock. Mobile techs dispatched in 60 minutes. On-site hose fixes for all equipment.',
    keywords: 'emergency hydraulic repair, hydraulic hose repair, mobile hose repair, 24/7 service',
    h1: 'Emergency Hydraulic Hose Repair',
    content: 'When a hydraulic hose fails, every minute costs thousands. We dispatch certified mobile technicians within 60 minutes for 24/7 emergency hose repair and on-site fabrication in Bakersfield, Wichita, and Lubbock. Our mobile trucks carry thousands of fittings and hoses to fix your equipment on-site.'
  },
  '/services/mobile-fabrication': {
    title: 'Mobile Hydraulic Hose Fabrication | On-Site Service',
    description: 'On-site hydraulic hose fabrication in Bakersfield, Wichita, and Lubbock. OEM-quality assemblies built at your job site. No shop visits needed.',
    keywords: 'mobile fabrication, custom hose assembly, hydraulic hose building, on-site fabrication',
    h1: 'Mobile Hydraulic Hose Fabrication',
    content: 'Custom OEM-quality hydraulic hose fabrication at your job site. No more trips to parts stores. We bring a fully equipped hose fabrication shop directly to your location in Bakersfield, Wichita, or Lubbock. Certified on-site assembly with pressure testing.'
  },
  '/services/diagnostics': {
    title: 'Hydraulic System Diagnostics & Pressure Testing Service',
    description: 'Hydraulic diagnostics with flow meters and pressure testing. Find root causes of leaks and slow cycles in Bakersfield, Wichita, and Lubbock.',
    keywords: 'hydraulic diagnostics, system troubleshooting, hydraulic testing, pressure testing',
    h1: 'Hydraulic System Diagnostics',
    content: 'Advanced hydraulic system diagnostics with pressure testing and flow analysis. Stop guessing at repairs. Our certified technicians use professional flow meters, pressure transducers, and thermal imaging to find root causes of performance issues in Bakersfield, Wichita, and Lubbock.'
  },
  '/services/cylinder-repair': {
    title: 'Hydraulic Pump & Cylinder Repair | Mobile Rebuilds',
    description: 'Mobile hydraulic pump and cylinder repair in Bakersfield, Wichita, and Lubbock. On-site rebuilds and seal replacement. Save on OEM costs.',
    keywords: 'cylinder repair, hydraulic cylinder rebuild, seal replacement, pump repair',
    h1: 'Hydraulic Pump & Cylinder Repair',
    content: 'Hydraulic cylinder rebuild and seal repair at your site or in our facility. We stock OEM-equivalent rods, seals, and buckets for fast same-day restoration. Choose mobile on-site repair or bring cylinders to our facility for complete rebuild with pressure testing.'
  },
  '/services/fluid-services': {
    title: 'Hydraulic Oil & Fluid Services | Mobile Filtration',
    description: 'Mobile hydraulic fluid flushing, filtration, and oil changes in Bakersfield, Wichita, and Lubbock. Clean systems to ISO standards. Water removal and more.',
    keywords: 'hydraulic fluid, oil analysis, fluid exchange, contamination control, filtration',
    h1: 'Hydraulic Oil & Fluid Services',
    content: 'Mobile hydraulic fluid flushing and filtration to ISO 4406 standards. Clean contaminated systems without downtime. We specialize in kidney-loop filtration, catastrophic flushing, water removal, and fluid sampling in Bakersfield, Wichita, and Lubbock.'
  },
  '/services/fleet-maintenance': {
    title: 'Hydraulic Fleet Maintenance | Preventive Service Plans',
    description: 'Preventive hydraulic maintenance for fleets in Bakersfield, Wichita, and Lubbock. Scheduled inspections, filter changes, and hose tagging. Reduce breakdowns.',
    keywords: 'fleet maintenance, preventive maintenance, scheduled service, hose inspection',
    h1: 'Hydraulic Fleet Maintenance',
    content: 'Preventive hydraulic maintenance stops costly emergency repairs. Scheduled inspections, filter changes, fluid analysis, and hose tagging for fleets in Bakersfield, Wichita, and Lubbock. Reduce unplanned downtime by 60-70%.'
  },
  '/services/industrial-plant-service': {
    title: 'Industrial Hydraulic Services | Plant Maintenance',
    description: 'Hydraulic repair for factories and plants in Bakersfield, Wichita, and Lubbock. Press cylinders, HPUs, and conveyor systems. OSHA-compliant service.',
    keywords: 'industrial hydraulic service, plant maintenance, manufacturing hydraulics, HPU repair',
    h1: 'Industrial Hydraulic Services',
    content: 'Specialized hydraulic repair for injection presses, HPUs, and conveyor systems. OSHA-compliant service with on-site troubleshooting in Bakersfield, Wichita, and Lubbock. We respect plant protocols—LOTO procedures, PPE requirements, and production schedules.'
  },
  '/services/heavy-equipment-repair': {
    title: 'Heavy Equipment Hydraulic Repair | Excavator Service',
    description: 'Mobile hydraulic repair for excavators, dozers, and loaders in Bakersfield, Wichita, and Lubbock. On-site boom cylinders, travel motors, and pumps fixed.',
    keywords: 'heavy equipment repair, excavator hydraulics, construction equipment, loader repair',
    h1: 'Heavy Equipment Hydraulic Repair',
    content: 'Heavy equipment hydraulic repair on-site without trailer fees or dealer delays. Boom cylinders, travel motors, and main pump diagnostics for Caterpillar, John Deere, Komatsu, Volvo, and Case equipment in Bakersfield, Wichita, and Lubbock.'
  },

  // ========== LOCATION PAGES (from data/locations.ts) ==========
  '/locations/bakersfield': {
    title: '24/7 Mobile Hydraulic Repair in Bakersfield, CA',
    description: 'Emergency hydraulic hose repair in Bakersfield and Kern County. 24/7 mobile service for oilfield, agriculture, and construction equipment.',
    keywords: 'Bakersfield hydraulic repair, Kern County mobile service, California hydraulic hose repair, oilfield hydraulics',
    h1: "Bakersfield's Mobile Hydraulic Repair Leader",
    content: "From the pump jacks in Oildale to the almond orchards in Lamont, Bakersfield runs on hydraulics. When a hose fails on Hwy 99 or a rig goes down in the Kern River Oil Field, you need immediate emergency hydraulic repair. Frontline delivers 24/7 mobile hydraulic hose repair in Bakersfield with certified technicians and on-site fabrication capability throughout Kern County."
  },
  '/locations/wichita': {
    title: '24/7 Mobile Hydraulic Repair in Wichita, KS',
    description: 'Emergency hydraulic hose repair in Wichita and Sedgwick County. 24/7 mobile service for aerospace, construction, and industrial equipment.',
    keywords: 'Wichita hydraulic repair, Kansas mobile service, Sedgwick County hydraulic hose, aerospace hydraulics',
    h1: "Wichita's Industrial & Mobile Hydraulic Repair Experts",
    content: "As the Air Capital of the World, Wichita demands precision in emergency hydraulic repair. Frontline provides expert mobile hydraulic repair and on-site fabrication in Wichita and Sedgwick County, serving aerospace manufacturing support, heavy construction, and regional industrial facilities with certified technicians."
  },
  '/locations/lubbock': {
    title: '24/7 Mobile Hydraulic Repair in Lubbock, TX',
    description: 'Emergency hydraulic hose repair in Lubbock and South Plains. 24/7 mobile service for oilfield, cotton, and construction equipment.',
    keywords: 'Lubbock hydraulic repair, West Texas mobile service, Lubbock County hydraulic hose, cotton equipment',
    h1: "Hub City's Most Trusted Emergency Hydraulic Repair Service",
    content: "The South Plains demand tough, dependable emergency mobile hydraulic repair in Lubbock. Frontline delivers 24/7 certified technicians with complete mobile fabrication labs, supporting West Texas oilfield equipment and cotton/ag machinery that power the region's economy."
  },

  // ========== BLOG PAGES (from data/blog.ts) ==========
  '/blog': {
    title: 'Hydraulic Repair Blog | Tips, Guides & Industry News | Frontline',
    description: 'Expert hydraulic repair tips, maintenance guides, and industry news. Learn how to extend equipment life and reduce downtime.',
    keywords: 'hydraulic blog, repair tips, maintenance guides, hydraulic hose care',
    h1: 'Hydraulic Repair Blog',
    content: 'Expert hydraulic repair tips, maintenance guides, and industry news from Frontline Hydraulic Services. Learn how to extend equipment life, prevent failures, and reduce costly downtime.'
  },
  '/blog/5-signs-hydraulic-hose-replacement': {
    title: '5 Signs Your Hydraulic Hose Needs Replacement | Warning Signs',
    description: 'Learn the 5 critical warning signs that your hydraulic hose needs immediate replacement. Prevent costly downtime with early detection of leaks, abrasions, and failures.',
    keywords: 'hydraulic hose replacement, hose failure signs, when to replace hoses, hose inspection',
    h1: '5 Signs Your Hydraulic Hose Needs Immediate Replacement',
    content: "Don't wait for a blowout on the job site. Learn to spot the subtle warning signs—from weeping fittings to wire reinforcement exposure—that indicate your hose is about to fail. Hydraulic hose failure is the number one cause of downtime for heavy equipment."
  },
  '/blog/how-to-choose-mobile-hydraulic-repair': {
    title: 'How to Choose Mobile Hydraulic Repair Service | Complete Guide',
    description: 'Learn how to choose the right mobile hydraulic repair service. Compare inventory, response times, certifications & pricing for Bakersfield, Wichita & Lubbock areas.',
    keywords: 'choose hydraulic repair, mobile service selection, repair service tips, hydraulic service comparison',
    h1: 'How to Choose a Mobile Hydraulic Repair Service',
    content: "Not all service trucks are created equal. When you have a dead machine blocking a haul road, you need help fast. But calling the first number on Google can lead to more downtime if the truck that shows up doesn't have the right parts. Here is how to vet a mobile hydraulic repair service."
  },
  '/blog/emergency-hydraulic-repair-guide': {
    title: 'Emergency Hydraulic Repair Guide | What to Do When Equipment Fails',
    description: 'Emergency hydraulic repair guide: Safety protocols, spill containment & dispatch procedures when equipment fails. Step-by-step instructions for operators.',
    keywords: 'emergency hydraulic guide, system failure, hydraulic emergency, safety procedures',
    h1: 'Emergency Hydraulic Repair: What to Do When Equipment Fails',
    content: "A blown hydraulic hose is chaotic. Hot oil sprays everywhere, the machine loses power, and environmental concerns spike immediately. Safety first. Follow this step-by-step guide on securing the scene, containing spills, and effectively calling for dispatch when a main line blows on site."
  },
  '/blog/mobile-hydraulic-hose-repair-cost': {
    title: 'Mobile Hydraulic Hose Repair Cost Explained',
    description: 'Understand mobile hydraulic hose repair costs, including labor, parts, and service fees. Compare with shop repair pricing to save downtime.',
    keywords: 'hydraulic repair cost, hose repair pricing, mobile service cost, repair invoice breakdown',
    h1: 'Mobile Hydraulic Hose Repair Cost: What You\'re Really Paying For',
    content: "Break down the true cost of a mobile hydraulic hose repair call—from parts and labor to downtime—and learn how to keep your bills (and idle time) under control. Most of the cost is not the hose itself, but downtime, travel, and after-hours rates."
  },
  '/blog/can-hydraulic-hoses-be-repaired': {
    title: 'Hydraulic Hose Repair: Temporary Fixes vs Full Replacement',
    description: 'Can hydraulic hoses be repaired? Learn when temporary fixes are safe and when full replacement is required, including field repair safety tips.',
    keywords: 'repair hydraulic hose, hose repair vs replace, hose damage assessment, temporary fixes',
    h1: 'Can Hydraulic Hoses Be Repaired? Temporary Fixes vs. Proper On-Site Replacement',
    content: "Field clamps, tape, and DIY fixes are all over the internet—but when is it actually safe to repair a hydraulic hose, and when must it be replaced? Most manufacturers do not recommend installing new fittings on old hose. A mobile service truck can fabricate a new assembly on-site in one visit."
  },
  '/blog/mobile-repair-vs-parts-store-hoses': {
    title: 'Mobile Hydraulic Hose Repair vs Parts Store | What\'s Best?',
    description: 'Mobile hydraulic hose repair vs parts store hoses: Compare costs, quality & downtime. Learn when to call a mobile service or DIY repair.',
    keywords: 'mobile repair vs parts store, hydraulic hose options, repair service comparison, DIY vs professional',
    h1: "Mobile Hydraulic Hose Repair vs. Parts Store Hoses: What's Best When You're Down on Site?",
    content: "Should you call a mobile hose truck or pull the hose and drive to O'Reilly, NAPA, or Tractor Supply? The answer depends on one thing: how expensive an hour of downtime is for your operation. Parts counters are great when the machine is already in your yard, but mobile repair shines when equipment is stuck on a job site."
  }
};

// Default SEO data for routes not explicitly defined
const defaultSeo = {
  title: 'Frontline Hydraulic Services | 24/7 Mobile Hydraulic Repair',
  description: 'Professional mobile hydraulic repair services available 24/7 in Bakersfield, Wichita, and Lubbock. Emergency hose repair, cylinder service, and more.',
  keywords: 'mobile hydraulic repair, hydraulic hose repair, emergency service',
  h1: 'Frontline Hydraulic Services',
  content: '24/7 mobile hydraulic repair services in Bakersfield, Wichita, and Lubbock.'
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

// Generate SEO-friendly static content that crawlers will see
// This content matches what users see when React renders
function generateStaticContent(seo, route) {
  // Generate appropriate nav links based on route type
  let navSection = '';
  if (route.startsWith('/services/')) {
    navSection = `
      <nav aria-label="Services">
        <ul>
          <li><a href="/services/emergency-repair">Emergency Hose Repair</a></li>
          <li><a href="/services/mobile-fabrication">Mobile Fabrication</a></li>
          <li><a href="/services/diagnostics">Diagnostics</a></li>
          <li><a href="/services/cylinder-repair">Cylinder Repair</a></li>
          <li><a href="/services/fluid-services">Fluid Services</a></li>
          <li><a href="/services/fleet-maintenance">Fleet Maintenance</a></li>
        </ul>
      </nav>`;
  } else if (route.startsWith('/locations/')) {
    navSection = `
      <nav aria-label="Locations">
        <ul>
          <li><a href="/locations/bakersfield">Bakersfield, CA</a></li>
          <li><a href="/locations/wichita">Wichita, KS</a></li>
          <li><a href="/locations/lubbock">Lubbock, TX</a></li>
        </ul>
      </nav>`;
  } else if (route.startsWith('/blog')) {
    navSection = `
      <nav aria-label="Blog Posts">
        <ul>
          <li><a href="/blog/5-signs-hydraulic-hose-replacement">5 Signs You Need Hydraulic Hose Replacement</a></li>
          <li><a href="/blog/how-to-choose-mobile-hydraulic-repair">How to Choose a Mobile Hydraulic Repair Service</a></li>
          <li><a href="/blog/emergency-hydraulic-repair-guide">Emergency Hydraulic Repair Guide</a></li>
          <li><a href="/blog/mobile-hydraulic-hose-repair-cost">Mobile Hydraulic Hose Repair Cost Guide</a></li>
          <li><a href="/blog/can-hydraulic-hoses-be-repaired">Can Hydraulic Hoses Be Repaired?</a></li>
          <li><a href="/blog/mobile-repair-vs-parts-store-hoses">Mobile Repair vs Parts Store Hoses</a></li>
        </ul>
      </nav>`;
  }

  return `
    <!-- SEO Static Content - Matches React rendered content -->
    <div id="seo-content" style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;">
      <header>
        <a href="/">Frontline Hydraulic Services</a>
        <nav aria-label="Main Navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/locations/bakersfield">Bakersfield</a></li>
            <li><a href="/locations/wichita">Wichita</a></li>
            <li><a href="/locations/lubbock">Lubbock</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <h1>${seo.h1}</h1>
          <p>${seo.content}</p>
          ${navSection}
          <p>Call <a href="tel:859-462-4673">859-462-4673</a> for 24/7 emergency hydraulic repair service in Bakersfield, Wichita, and Lubbock.</p>
        </article>
      </main>
      <footer>
        <p>Frontline Hydraulic Services - 24/7 Mobile Hydraulic Repair</p>
        <p>Serving Bakersfield CA, Wichita KS, and Lubbock TX</p>
        <a href="tel:859-462-4673">859-462-4673</a>
      </footer>
    </div>
  `;
}

async function prerender() {
  const templatePath = path.join(DIST_PATH, 'index.html');
  
  if (!fs.existsSync(templatePath)) {
    console.error("❌ Could not find dist/index.html. Run vite build first.");
    process.exit(1);
  }

  let template = fs.readFileSync(templatePath, 'utf-8');
  
  // Remove existing title and meta description from template to avoid duplicates
  template = template.replace(/<title>.*?<\/title>/i, '');
  template = template.replace(/<meta\s+name=["']description["'][^>]*>/i, '');
  
  const routes = Object.keys(routeSeoData);

  console.log('🚀 Generating SEO-optimized static pages...');
  console.log(`   Found ${routes.length} routes to prerender`);

  for (const route of routes) {
    try {
      const seo = routeSeoData[route] || defaultSeo;
      const canonicalUrl = `https://emergencyhydraulics.com${route === '/' ? '' : route}`;
      const metaTags = generateMetaTags(seo, canonicalUrl);
      const staticContent = generateStaticContent(seo, route);

      // Inject meta tags right after <head> to ensure they're at the top
      let html = template.replace('<head>', `<head>\n${metaTags}`);
      
      // Inject static SEO content right after the opening body tag
      html = html.replace('<body>', `<body>\n${staticContent}`);

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
  console.log('');
  console.log('📋 Generated pages include:');
  console.log('   - Title tag');
  console.log('   - Meta description');
  console.log('   - H1 heading');
  console.log('   - Page content summary');
  console.log('   - Navigation links');
  console.log('   - Open Graph tags');
  console.log('   - Twitter Card tags');
}

prerender();
