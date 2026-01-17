import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getAppRoutes } from './routes-manifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateSitemap() {
  const routes = getAppRoutes();
  
  try {
    const sitemap = new SitemapStream({
      hostname: 'https://emergencyhydraulics.com',
    });

    const writeStream = createWriteStream(join(__dirname, '..', 'public', 'sitemap.xml'));
    sitemap.pipe(writeStream);

    routes.forEach(route => {
      // Logic for priorities
      let priority = 0.8;
      if (route === '/') priority = 1.0;
      if (route.includes('/locations/')) priority = 0.9;
      if (route.includes('/service/')) priority = 0.9;
      if (route.includes('/blog/')) priority = 0.6;

      sitemap.write({ url: route, changefreq: 'weekly', priority });
    });

    sitemap.end();
    await streamToPromise(sitemap);
    console.log('✅ Sitemap synced with Prerenderer!');
  } catch (error) {
    console.error('❌ Sitemap error:', error);
  }
}

generateSitemap();