// import puppeteer from 'puppeteer';
// import { writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
// import { join, dirname } from 'path';
// import { fileURLToPath } from 'url';
// import sirv from 'sirv';
// import http from 'http';
// import { getAppRoutes } from './routes-manifest.js';

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const DIST_PATH = join(__dirname, '..', 'dist');

// // Helper to find the dynamic JS filename (e.g., index-jjL25mJX.js)
// const getBundleName = () => {
//   const files = readdirSync(join(DIST_PATH, 'assets'));
//   return files.find(f => f.startsWith('index-') && f.endsWith('.js'));
// };

// async function prerender() {
//   const routes = getAppRoutes();
//   const bundleJS = getBundleName();
  
//   if (!bundleJS) {
//     console.error("❌ Could not find production JS bundle in dist/assets!");
//     process.exit(1);
//   }

//   console.log(`🚀 Starting SEO Prerendering with bundle: ${bundleJS}`);
  
//   const assets = sirv(DIST_PATH, { single: true });
//   const server = http.createServer(assets).listen(5000);

//   const browser = await puppeteer.launch({ headless: true }, ['--no-sandbox', '--disable-setuid-sandbox']);
//   const page = await browser.newPage();

//   for (const route of routes) {
//     const url = `http://localhost:3000${route}`; // Matches server port
//     console.log(`  → Rendering: ${route}`);
    
//     await page.goto(url, { waitUntil: 'networkidle0' });

//     const getCssName = () => {
//     const files = readdirSync(join(DIST_PATH, 'assets'));
//     return files.find(f => f.startsWith('index-') && f.endsWith('.css'));
//     };

//     // ... inside the loop ...
//     const bundleCSS = getCssName();

//     await page.evaluate((bundleName, cssName) => {

//         const oldLink = document.querySelector('link[href="/index.css"]');
//         if (oldLink) oldLink.remove();

//         // 2. Inject the REAL production CSS
//         if (cssName) {
//             const head = document.head;
//             const link = document.createElement('link');
//             link.rel = 'stylesheet';
//             link.href = `/assets/${cssName}`;
//             head.appendChild(link);
//         }
//       // 1. Remove Dev scripts & vite client
//       const scripts = document.querySelectorAll('script');
//       scripts.forEach(s => {
//         if (
//           s.src.includes('index.tsx') || 
//           s.src.includes('@vite/client') || 
//           s.innerHTML.includes('injectIntoGlobalHook') ||
//           s.src.includes('tailwindcss.com')
//         ) {
//           s.remove();
//         }
//       });

//       // 2. Remove any duplicate production scripts before adding the clean one
//       const existingProd = document.querySelector(`script[src*="/assets/${bundleName}"]`);
//       if (existingProd) existingProd.remove();

//       // 3. Inject the CORRECT production script
//       const mainScript = document.createElement('script');
//       mainScript.type = 'module';
//       mainScript.src = `/assets/${bundleName}`; 
//       document.body.appendChild(mainScript);

      
//     }, bundleJS, bundleCSS);

//     const html = await page.content();
//     const targetDir = join(DIST_PATH, route === '/' ? '' : route);
//     if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true });
//     writeFileSync(join(targetDir, 'index.html'), html);
//   }

//   await browser.close();
//   server.close();
//   console.log('✅ SEO Prerendering Complete! Site is ready for AEO/SEO.');
//   process.exit(0);
// }

// prerender();
// 1. THIS MUST BE THE FIRST LINE - Set up mocks BEFORE any imports that need them

// Mock Global objects so Leaflet doesn't crash Node
const noop = () => ({});
const mockDocument = {
  createElement: () => ({
    style: {},
    setAttribute: noop,
    getAttribute: noop,
    getElementsByTagName: () => [],
    classList: { add: noop, remove: noop },
  }),
  createElementNS: () => ({
    style: {},
    setAttribute: noop,
    setAttributeNS: noop,
    getAttribute: noop,
    getElementsByTagName: () => [],
  }),
  getElementsByTagName: () => [],
  documentElement: { style: {} },
  head: { appendChild: noop, removeChild: noop },
  body: { appendChild: noop, removeChild: noop },
};
const mockWindow = {
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: noop,
  requestAnimationFrame: (cb: () => void) => setTimeout(cb, 16),
  cancelAnimationFrame: noop,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  document: mockDocument,
  devicePixelRatio: 1,
  screen: {
    deviceXDPI: 96,
    logicalXDPI: 96,
  },
  getComputedStyle: () => ({ getPropertyValue: () => '' }),
  location: { href: '', protocol: 'https:', host: 'localhost' },
  history: { pushState: noop, replaceState: noop },
  matchMedia: () => ({ matches: false, addListener: noop, removeListener: noop }),
};

Object.defineProperty(global, 'window', { value: mockWindow, writable: true });
Object.defineProperty(global, 'document', { value: mockDocument, writable: true });
Object.defineProperty(global, 'navigator', { value: { userAgent: '', platform: '' }, writable: true });
Object.defineProperty(global, 'L', { value: {}, writable: true });
Object.defineProperty(global, 'HTMLElement', { value: class HTMLElement {}, writable: true });
Object.defineProperty(global, 'SVGElement', { value: class SVGElement {}, writable: true });

// Now import everything else
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.join(__dirname, '..', 'dist');

async function prerender() {
  // Dynamic imports after mocks are set up
  const React = (await import('react')).default;
  const ReactDOMServer = (await import('react-dom/server')).default;
  const { StaticRouter } = await import('react-router-dom');
  const ReactHelmetAsync = await import('react-helmet-async');
  const HelmetProvider = ReactHelmetAsync.HelmetProvider || (ReactHelmetAsync as any).default?.HelmetProvider;
  const { getAppRoutes } = await import('./routes-manifest.js');
  const App = (await import('../App.tsx')).default;

  const routes = getAppRoutes();
  const templatePath = path.join(DIST_PATH, 'index.html');
  
  if (!fs.existsSync(templatePath)) {
    console.error("❌ Could not find dist/index.html. Run vite build first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  console.log('🚀 Generating SEO Static Pages...');

  for (const route of routes) {
    try {
      const helmetContext: any = {};

      const appHtml = ReactDOMServer.renderToString(
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={route}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      );

      const { helmet } = helmetContext;

      const html = template
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
        .replace('</head>', `
          ${helmet?.title?.toString() || ''}
          ${helmet?.meta?.toString() || ''}
          ${helmet?.link?.toString() || ''}
          ${helmet?.script?.toString() || ''}
        </head>`);

      const targetDir = path.join(DIST_PATH, route === '/' ? '' : route);
      if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
      
      fs.writeFileSync(path.join(targetDir, 'index.html'), html);
      console.log(`  ✅ ${route}`);
    } catch (err) {
      console.error(`  ❌ Error on route ${route}:`, err);
    }
  }

  console.log('🎉 Build Complete!');
  process.exit(0);
}

prerender();