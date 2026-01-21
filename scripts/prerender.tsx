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