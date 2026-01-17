import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sirv from 'sirv';
import http from 'http';
import { getAppRoutes } from './routes-manifest.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_PATH = join(__dirname, '..', 'dist');

// Helper to find the dynamic JS filename (e.g., index-jjL25mJX.js)
const getBundleName = () => {
  const files = readdirSync(join(DIST_PATH, 'assets'));
  return files.find(f => f.startsWith('index-') && f.endsWith('.js'));
};

async function prerender() {
  const routes = getAppRoutes();
  const bundleJS = getBundleName();
  
  if (!bundleJS) {
    console.error("❌ Could not find production JS bundle in dist/assets!");
    process.exit(1);
  }

  console.log(`🚀 Starting SEO Prerendering with bundle: ${bundleJS}`);
  
  const assets = sirv(DIST_PATH, { single: true });
  const server = http.createServer(assets).listen(5000);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:3000${route}`; // Matches server port
    console.log(`  → Rendering: ${route}`);
    
    await page.goto(url, { waitUntil: 'networkidle0' });

    const getCssName = () => {
    const files = readdirSync(join(DIST_PATH, 'assets'));
    return files.find(f => f.startsWith('index-') && f.endsWith('.css'));
    };

    // ... inside the loop ...
    const bundleCSS = getCssName();

    await page.evaluate((bundleName, cssName) => {

        const oldLink = document.querySelector('link[href="/index.css"]');
        if (oldLink) oldLink.remove();

        // 2. Inject the REAL production CSS
        if (cssName) {
            const head = document.head;
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `/assets/${cssName}`;
            head.appendChild(link);
        }
      // 1. Remove Dev scripts & vite client
      const scripts = document.querySelectorAll('script');
      scripts.forEach(s => {
        if (
          s.src.includes('index.tsx') || 
          s.src.includes('@vite/client') || 
          s.innerHTML.includes('injectIntoGlobalHook') ||
          s.src.includes('tailwindcss.com')
        ) {
          s.remove();
        }
      });

      // 2. Remove any duplicate production scripts before adding the clean one
      const existingProd = document.querySelector(`script[src*="/assets/${bundleName}"]`);
      if (existingProd) existingProd.remove();

      // 3. Inject the CORRECT production script
      const mainScript = document.createElement('script');
      mainScript.type = 'module';
      mainScript.src = `/assets/${bundleName}`; 
      document.body.appendChild(mainScript);

      
    }, bundleJS, bundleCSS);

    const html = await page.content();
    const targetDir = join(DIST_PATH, route === '/' ? '' : route);
    if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true });
    writeFileSync(join(targetDir, 'index.html'), html);
  }

  await browser.close();
  server.close();
  console.log('✅ SEO Prerendering Complete! Site is ready for AEO/SEO.');
  process.exit(0);
}

prerender();