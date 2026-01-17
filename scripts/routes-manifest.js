// scripts/routes-manifest.js
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const getAppRoutes = () => {
  const staticRoutes = [
    '/', '/about', '/contact', '/service-map', '/services', '/blog',
    '/services/emergency-repair', '/services/mobile-fabrication',
    '/services/diagnostics', '/services/cylinder-repair',
    '/services/fluid-services', '/services/fleet-maintenance',
    '/services/industrial-plant-service', '/services/heavy-equipment-repair',
    '/locations/bakersfield', '/locations/wichita', '/locations/lubbock'
  ];

  try {
    const blogDataPath = join(__dirname, '..', 'data', 'blog.ts');
    const blogContent = readFileSync(blogDataPath, 'utf-8');
    const blogSlugRegex = /slug:\s*["']([^"']+)["']/g;
    const blogSlugs = [];
    let match;
    while ((match = blogSlugRegex.exec(blogContent)) !== null) {
      blogSlugs.push(`/blog/${match[1]}`);
    }
    return [...staticRoutes, ...blogSlugs];
  } catch (e) {
    console.error("Could not parse blog routes, using static only", e);
    return staticRoutes;
  }
};