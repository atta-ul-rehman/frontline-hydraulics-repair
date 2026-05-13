import { getAppRoutes } from './routes-manifest.js';
import { fileURLToPath } from 'node:url';

const API_KEY = '2eaa82b484914ce09a55a8500407d8c3';
const HOST = process.env.SITE_HOST || 'https://emergencyhydraulics.com';
const ENDPOINT = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';

function normalizeHost(host) {
  return host.endsWith('/') ? host.slice(0, -1) : host;
}

async function submitIndexNow() {
  const cleanHost = normalizeHost(HOST);
  const routes = getAppRoutes();
  const urlList = [...new Set(routes.map((route) => `${cleanHost}${route}`))];

  const payload = {
    host: new URL(cleanHost).host,
    key: API_KEY,
    keyLocation: `${cleanHost}/${API_KEY}.txt`,
    urlList,
  };

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`IndexNow submission failed (${response.status}): ${body}`);
    }

    console.log(`Submitted ${urlList.length} URLs to IndexNow.`);
    console.log(`Key file URL: ${payload.keyLocation}`);
    console.log(`Endpoint: ${ENDPOINT}`);
  } catch (error) {
    console.error('IndexNow submission error:', error.message || error);
    process.exitCode = 1;
  }
}

export { submitIndexNow };

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isDirectRun) {
  submitIndexNow();
}
