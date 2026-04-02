# cPanel Deployment Guide

This guide explains how to deploy the **Colourflex** Vite + React application to a cPanel hosting environment.

## Prerequisites

- Node.js installed locally (for building)
- Access to your cPanel account
- Your domain/subdomain pointed to the cPanel server

## Step 1: Build the Application

Run the build command from the project root:

```bash
npm run build
```

This creates a `dist/` folder containing all static files ready for production.

## Step 2: Upload to cPanel

### Option A: File Manager

1. Log in to **cPanel**.
2. Open **File Manager**.
3. Navigate to your target directory:
   - **Primary domain**: `public_html/`
   - **Subdomain**: e.g., `public_html/subdomain/`
4. Delete any old files (keep `.htaccess` if it exists, but the new build includes one).
5. Upload the **contents** of the local `dist/` folder (not the `dist` folder itself) into this directory.
   - You can zip the `dist/` folder contents, upload the `.zip`, and extract it in File Manager.

### Option B: FTP / SFTP

Upload all files from the local `dist/` directory to the remote `public_html/` (or subdomain) directory.

## Step 3: Verify `.htaccess`

Ensure that `.htaccess` is present in the root of the upload directory. It handles:

- **SPA Routing**: Redirects all non-file/directory requests to `index.html` so React Router works.
- **Asset Caching**: Sets cache headers for images, CSS, and JS.
- **Security**: Disables directory browsing.

## Step 4: Test the Live Site

1. Visit your domain (e.g., `https://yourdomain.com/`).
2. Click around to verify client-side navigation works.
3. Test direct links (e.g., `https://yourdomain.com/about`) to confirm `.htaccess` rewrites are functioning.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank page after upload | Check browser console for 404s. Ensure `vite.config.ts` has `base: './'` and you uploaded the **contents** of `dist/`, not the `dist/` folder wrapper. |
| Direct links return 404 | Confirm `.htaccess` was uploaded and `mod_rewrite` is enabled on the server. |
| Old assets loading | Clear browser cache or check cPanel File Manager for stale files. |
| Subdomain issues | If deploying to a subdomain folder, ensure the subdomain document root in cPanel points to the correct folder. |

## Important Notes

- Do **not** upload `node_modules/`, source code files (`.tsx`, `.ts`), or `package.json` unless you have a specific reason.
- Only the compiled output inside `dist/` is needed for production.
- If you update the site, rebuild locally and re-upload the `dist/` contents.
