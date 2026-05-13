async function run() {
  const isVercel = process.env.VERCEL === '1';
  const vercelEnv = process.env.VERCEL_ENV;
  const force = process.env.FORCE_INDEXNOW === '1';

  if (!force && (!isVercel || vercelEnv !== 'production')) {
    console.log('Skipping IndexNow auto-submit (not a Vercel production build).');
    return;
  }

  try {
    const { submitIndexNow } = await import('./submit-indexnow.js');
    await submitIndexNow();
  } catch (error) {
    console.error('Failed to run IndexNow auto-submit:', error.message || error);
    process.exitCode = 1;
  }
}

run();
