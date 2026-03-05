# Client Handoff Guide

Congratulations on the launch of your new Elite Auto Styling website!

This document is your go-to guide for managing and updating your new site. It is written in plain English—no coding experience is required to perform the basic updates outlined below.

---

## What Was Built

We have built a completely custom, mobile-responsive website designed to turn visitors into customers.

**Key Features Included:**
*   **Homepage:** A stunning first impression with your services, a trust bar, and a clear call-to-action.
*   **Services & Pricing:** Detailed pages for your Ceramic Coating, PPF, and Detailing services with the exact pricing you provided.
*   **Gallery:** A professional grid to show off your Before/After work.
*   **Contact Form:** A user-friendly way for customers to request quotes directly from the site.
*   **SEO Optimization:** The site is tuned to show up when people search for "Auto Detailing Austin" or "PPF near me" on Google.

---

## Managing Your Content

You have full control over the text and images on your site. Here is how to make changes.

### 1. Changing Images (Photos)

We have built a "Master Image Switcher" for you. You do not need to edit complex code to change a photo.

**Where to go:**
There is a file in the project called `src/config/images.ts`.

**How to update:**
1.  Open that file.
2.  You will see a list of names like `"hero"`, `"service-1"`, or `"gallery-1"`.
3.  Find the name of the photo you want to change.
4.  Replace the web address (URL) in the `src: "..."` line with the link to your new photo.
5.  Update the text in `alt: "..."` to describe the new photo (this helps Google).

**Example:**
If you want to change the main homepage image:
*   Find: `hero`
*   Change: `src: "https://your-new-photo-link.jpg"`
*   Save the file.

**Where to host photos:**
You can host photos on your existing file manager, or use a service like Dropbox, Google Drive (set to public), or Imgur. Just copy the direct link to the image and paste it into the file.

### 2. Changing Text (Copy, Prices, Hours)

Text is stored directly inside the page files.

**Homepage & Services:**
*   Go to `src/app/page.tsx` (Home) or `src/app/services/page.tsx`.
*   Look for the text you want to change inside the quotation marks `"... text ..."`.
*   Simply type your new text and save.

**Updating Prices:**
Since you provided specific pricing (e.g., "Ceramic Coating ($800-$2500)"), you can find these numbers in the Services page file. Just change the numbers to reflect any updates, and the site will update automatically.

**Updating Hours:**
Your business hours are located in the Footer component (`src/components/layout/Footer.tsx`).

### 3. Changing Colors or Branding

If you ever want to change the "Blue" buttons or the "Navy" background colors:

1.  Open the file `tailwind.config.ts`.
2.  Look for the section `colors`.
3.  You will see `primary`, `accent`, etc.
4.  Replace the color codes (like `#0F172A`) with your new hex color codes.

### 4. Adding a Logo

Currently, the site displays your business name in text. To add an image logo:

1.  Place your logo image file in the `public` folder (name it `logo.png`).
2.  Open `src/components/layout/Navbar.tsx`.
3.  Replace the text link with an `<Image>` component pointing to `/logo.png`.

---

## Maintenance & Support

### Hosting
Your site is hosted on Vercel. It is fast, secure, and handles automatic security updates. You will receive an email from Vercel inviting you to the project—accept it to manage billing and domain settings.

### Updates
Periodically, the underlying technology (Next.js) updates. While not strictly required immediately, we recommend touching base once a year for a "health check" to ensure the site stays secure and fast.

### Questions?
If you get stuck or want to add a complex new feature, please reach out to the development team.

**Contact Support:** support@pegrio.com (or your specific contact method).

---

## Quick Reference

| What you want to do | File to edit |
| :--- | :--- |
| Change a Photo | `src/config/images.ts` |
| Change Homepage Text | `src/app/page.tsx` |
| Change Services/Prices | `src/app/services/page.tsx` |
| Change Business Hours | `src/components/layout/Footer.tsx` |
| Change Colors | `tailwind.config.ts` |

Thank you for choosing us for your project. We wish Elite Auto Styling continued success!