<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1pDdngcnFtFOAsMmV6TQ8DGVcO4ro486w

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## IndexNow Setup

This project is configured for IndexNow with the key file hosted at:

`https://emergencyhydraulics.com/2eaa82b484914ce09a55a8500407d8c3.txt`

Submit URLs in bulk to IndexNow:

`npm run indexnow:submit`

Automatic on Vercel production deploys:

- The build script now runs IndexNow automatically after prerender when `VERCEL=1` and `VERCEL_ENV=production`.
- Preview/local builds are skipped by default.
- To force locally for testing, set `FORCE_INDEXNOW=1`.

Optional: override the default host/endpoint when needed.

PowerShell:

`$env:SITE_HOST='https://yourdomain.com'; npm run indexnow:submit`
`$env:INDEXNOW_ENDPOINT='https://api.indexnow.org/indexnow'; npm run indexnow:submit`
`$env:FORCE_INDEXNOW='1'; npm run build`

After submission, verify receipt in Bing Webmaster Tools (IndexNow section / URL submission history).
