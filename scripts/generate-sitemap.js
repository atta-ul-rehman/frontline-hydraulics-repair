import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import blog data dynamically
const blogDataPath = join(dirname(__filename), '..', 'data', 'blog.ts');
const blogContent = readFileSync(blogDataPath, 'utf-8');

// Extract blog posts from the TypeScript file (simple regex approach)
const blogSlugRegex = /slug:\s*["']([^"']+)["']/g;
const blogSlugs = [];
let match;
while ((match = blogSlugRegex.exec(blogContent)) !== null) {
  blogSlugs.push(match[1]);
}

// Define your routes with metadata
const routes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString()
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString()
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/service-map',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/services',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/emergency-repair',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/mobile-fabrication',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/diagnostics',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/cylinder-repair',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/fluid-services',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/fleet-maintenance',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/industrial-plant-service',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/services/heavy-equipment-repair',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/blog',
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date().toISOString()
  },
  {
    url: '/locations/bakersfield',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString()
  },
  {
    url: '/locations/wichita',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString()
  },
  {
    url: '/locations/lubbock',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString()
  }
];

// Dynamically add blog post routes
blogSlugs.forEach(slug => {
  routes.push({
    url: `/blog/${slug}`,
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: new Date().toISOString()
  });
});

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({
      hostname: 'https://emergencyhydraulics.com',
      cacheTime: 600000, // 10 minutes
    });

    const writeStream = createWriteStream(join(__dirname, '..', 'public', 'sitemap.xml'));

    sitemap.pipe(writeStream);

    // Add each route to the sitemap
    routes.forEach(route => {
      sitemap.write(route);
    });

    sitemap.end();

    await streamToPromise(sitemap);
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');

  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();