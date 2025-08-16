# Cloudflare Pages Deployment Guide for H-linc

## Prerequisites

1. Install Wrangler CLI globally:

   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

## Setup Steps

### 1. Build the Project

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

### 2. Deploy to Cloudflare Pages

```bash
# Deploy using wrangler
wrangler pages deploy out

# Or use the npm script
npm run deploy
```

## Alternative: Deploy via Cloudflare Dashboard

### 1. Connect Your Repository

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to Pages
3. Click "Create a project"
4. Choose "Connect to Git"
5. Select your repository

### 2. Configure Build Settings

- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (or leave empty)

### 3. Environment Variables (if needed)

Add any environment variables in the Cloudflare Pages settings.

## Configuration Changes Made

### Next.js Config (`next.config.mjs`)

- Added `output: 'export'` for static export
- Added `trailingSlash: true` for Cloudflare compatibility
- Added `images: { unoptimized: true }` for static hosting

### Wrangler Config (`wrangler.toml`)

- Configured for Cloudflare Pages deployment
- Set build command to `npm run build`

### Package.json

- Added `deploy` script for easy deployment

## Troubleshooting

### Common Issues:

1. **Build fails**: Make sure all dependencies are installed
2. **Deploy fails**: Check if you're logged into Cloudflare
3. **Images not loading**: Images are now unoptimized for static hosting
4. **Routing issues**: Cloudflare Pages handles client-side routing

### Build Errors:

- If you get build errors, try: `npm run build` locally first
- Check for any missing dependencies
- Ensure all imports are correct

## Quick Deploy Commands

```bash
# Build and deploy in one command
npm run build && npm run deploy
```

## Features

- ✅ Static site generation
- ✅ Client-side routing
- ✅ Image optimization (unoptimized for static hosting)
- ✅ Global CDN
- ✅ Automatic deployments from Git

Your site will be available at: `https://your-project-name.pages.dev`


