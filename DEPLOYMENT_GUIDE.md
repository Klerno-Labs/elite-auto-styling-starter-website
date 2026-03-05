# Deployment Guide

This guide covers deploying the Elite Auto Styling website to production using Vercel.

## Prerequisites

-   A Vercel account (free tier is sufficient).
-   Access to the GitHub repository containing the project code.
-   Access to domain DNS settings (if using a custom domain).

## Step 1: Prepare the Project

1.  **Update Environment Variables:**
    Ensure your `.env.local` file contains the correct values for production. Specifically, check any API keys or form service URLs.
2.  **Commit Code:**
    Push all final changes to your main branch (usually `main` or `master`) on GitHub.
    ```bash
    git add .
    git commit -m "Prepare for production deployment"
    git push origin main
    ```

## Step 2: Deploy on Vercel

1.  **Log in to Vercel:** Go to [vercel.com](https://vercel.com) and log in.
2.  **Add New Project:**
    -   Click **"Add New..."** -> **"Project"**.
    -   Import the GitHub repository for this project.
3.  **Configure Project:**
    -   **Framework Preset:** Vercel should automatically detect "Next.js".
    -   **Root Directory:** Leave as `./`.
    -   **Build Command:** It should default to `npm run build`.
    -   **Output Directory:** It should default to `.` (because we are using static export).
    -   *Important:* Since we are using static export, ensure `output: 'export'` is set in `next.config.mjs` (it is already included in the repo).

4.  **Environment Variables:**
    -   Scroll to the **"Environment Variables"** section.
    -   Add any variables defined in `.env.example` (e.g., `NEXT_PUBLIC_FORM_URL`).
    -   Click **"Add"** for each variable.

5.  **Deploy:**
    -   Click the **"Deploy"** button.
    -   Wait for the build to complete (usually takes 1-2 minutes).
    -   You will see a success confirmation and a live `.vercel.app` URL.

## Step 3: Domain Setup

### Using a Custom Domain (e.g., eliteautostyling.com)

1.  In your Vercel project dashboard, go to the **"Settings"** tab.
2.  Click on **"Domains"**.
3.  Enter your domain name (e.g., `eliteautostyling.com`) and click **"Add"**.
4.  Vercel will provide you with DNS records (usually an **A Record** and a **CNAME Record**).

### Updating DNS Records

Log in to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and add the following records:

| Type | Name | Value |
| :--- | :--- | :--- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

*Note: Always use the specific IP addresses and hostnames provided in your Vercel dashboard, as they may change.*

## Step 4: SSL Verification

-   Vercel automatically provisions SSL certificates for all domains.
-   Once your DNS records propagate (this can take anywhere from a few minutes to 24 hours), the SSL certificate will become valid.
-   Ensure your site is accessible via `https://`.

## Post-Deployment Checklist

-   [ ] **Forms:** Test the contact form to ensure submissions are being received.
-   [ ] **Links:** Click through the navigation to ensure no pages return 404 errors.
-   [ ] **Images:** Verify all images load correctly (check the browser console for broken image icons).
-   [ ] **Mobile:** View the site on a mobile phone to check responsiveness and touch targets.
-   [ ] **Speed:** Run a [Google Lighthouse](https://pagespeed.web.dev/) audit to ensure Performance score is 90+.
-   [ ] **SEO:** Check that the Meta Title and Description appear correctly in search results.

## Rollback Plan

If a deployment introduces a critical bug:

1.  Go to the **"Deployments"** tab in Vercel.
2.  Find the previous successful deployment (the one just before the current one).
3.  Click the three dots (`...`) menu to the right of it.
4.  Select **"Promote to Production"**.

This will instantly revert your live site to the previous stable version.

## Monitoring

-   Vercel provides real-time analytics and logs. Check the **"Analytics"** tab to monitor visitor traffic.
-   **Logs:** If the contact form fails, check the **"Logs"** stream in the Vercel dashboard for error messages.