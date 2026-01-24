# Deploying Grid Draw to S3

This guide covers deploying the Grid Draw WASM application to AWS S3 for static hosting.

## Prerequisites

- AWS CLI configured with appropriate credentials
- Built production assets in `../static/grid-draw/`

## Build for Production

First, ensure you have a production build:

```bash
cd grid-draw
npm install
npm run build
```

This outputs files to `../static/grid-draw/`:
- `assets/index.js` - Bundled JavaScript
- `assets/index.css` - Styles
- `*.wasm` - WebAssembly modules

## Upload to S3

### Option 1: Using AWS CLI

```bash
# Upload all files
aws s3 sync ../static/grid-draw/ s3://YOUR-BUCKET-NAME/grid-draw/ \
  --delete \
  --cache-control "max-age=31536000"

# Set correct content types for WASM files
aws s3 cp s3://YOUR-BUCKET-NAME/grid-draw/ s3://YOUR-BUCKET-NAME/grid-draw/ \
  --recursive \
  --exclude "*" \
  --include "*.wasm" \
  --content-type "application/wasm" \
  --metadata-directive REPLACE
```

### Option 2: Manual Upload

1. Go to AWS S3 Console
2. Navigate to your bucket
3. Create folder `grid-draw/` if it doesn't exist
4. Upload all files from `../static/grid-draw/`
5. For `.wasm` files, set Content-Type to `application/wasm`

## S3 Bucket Configuration

### Static Website Hosting

If using S3 for direct static hosting:

1. Enable "Static website hosting" in bucket properties
2. Set index document to `index.html`
3. Add bucket policy for public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

### CORS Configuration (if needed)

If loading WASM from a different domain:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET"],
    "AllowedOrigins": ["https://yourdomain.com"],
    "ExposeHeaders": []
  }
]
```

## Content Types

Ensure these content types are set correctly:

| Extension | Content-Type |
|-----------|--------------|
| `.js` | `application/javascript` |
| `.css` | `text/css` |
| `.wasm` | `application/wasm` |
| `.html` | `text/html` |

## Cache Headers

Recommended cache settings:

- **Immutable assets** (hashed filenames): `max-age=31536000, immutable`
- **WASM files**: `max-age=31536000` (1 year)
- **HTML files**: `max-age=0, must-revalidate`

## CloudFront (Optional)

If using CloudFront as a CDN:

1. Create a CloudFront distribution pointing to your S3 bucket
2. Add custom error page for 404 → /index.html (for SPA routing)
3. Enable compression (gzip, brotli)
4. Set cache behaviors for different file types

## Verification

After deployment, verify:

1. WASM file loads with correct Content-Type header
2. No CORS errors in browser console
3. Grid canvas renders and responds to clicks

```bash
# Check content type
curl -I https://your-domain.com/grid-draw/assets/index.js
```

## Troubleshooting

### WASM fails to load
- Check Content-Type is `application/wasm`
- Check CORS headers if cross-origin

### Module not found errors
- Verify all files were uploaded
- Check file paths match vite.config.ts base path

### Caching issues
- Clear CloudFront cache if using CDN
- Use versioned/hashed filenames for cache busting
