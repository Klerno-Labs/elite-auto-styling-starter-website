# Elite Auto Styling - Website

A modern, high-performance website for Elite Auto Styling, Austin's premier automotive detailing and paint protection studio. Built with Next.js 14, Tailwind CSS, and TypeScript, designed for maximum speed, SEO, and conversion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Manrope (Headings), Inter (Body) via `next/font`
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** Static Export (`output: 'export'`)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-org/elite-auto-styling.git
    cd elite-auto-styling
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Configure Environment Variables**
    Copy the `.env.example` file to `.env.local` and fill in the required values.
    ```bash
    cp .env.example .env.local
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

To generate a static export suitable for Netlify, Vercel, or any static host:

```bash
npm run build
```

The optimized output will be in the `out/` directory.

## Project Structure

```text
elite-auto-styling/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── api/           # API routes (e.g., contact form handler)
│   │   ├── [page]/        # Page components (Home, About, Contact)
│   │   ├── layout.tsx     # Root layout (fonts, nav, footer)
│   │   └── globals.css    # Global CSS & Tailwind directives
│   ├── components/        # Reusable UI components
│   │   ├── ui/            # Base components (Buttons, Inputs)
│   │   ├── sections/      # Page-specific sections (Hero, Services)
│   │   └── layout/        # Navbar, Footer
│   ├── config/            # Configuration files
│   │   └── images.ts      # ⭐ Centralized image management
│   └── lib/               # Utilities (helpers, formatters)
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Image Customization

All images on this website are controlled from **one single file**: `src/config/images.ts`. You do not need to hunt through components to change photos.

### How to Update an Image

1.  Open `src/config/images.ts`.
2.  Find the slot key you want to change (e.g., `"hero"`).
3.  Replace the `src` URL with your new image link.
4.  Update the `alt` text for accessibility.
5.  Save the file. The change will apply instantly across the site.

### Available Image Slots

| Slot Key | Description | Where it appears |
| :--- | :--- | :--- |
| `hero` | Main banner image | Homepage top (Background/Split) |
| `hero-alt` | Secondary hero | About page header |
| `about` | Team/Shop context | About page section |
| `service-1` | Detailing/Coating | Services card 1 |
| `service-2` | PPF/Protection | Services card 2 |
| `service-3` | Interior/Other | Services card 3 |
| `gallery-1` to `4` | Project photos | Gallery grid |
| `testimonial-bg` | Reviews section | Background texture |

**Recommended Image Specs:**
- **Format:** WebP, JPG, or PNG.
- **Dimensions:** 1200px width minimum for hero images.
- **File Size:** Keep under 200KB for optimal performance.

## Brand Customization

### Changing Colors
Colors are defined in `tailwind.config.ts`. Look for the `theme.extend.colors` section.

- **Primary (Navy):** Controls headers, footers, and text.
- **Accent (Blue):** Controls buttons, links, and highlights.
- **Background:** Controls page backgrounds.

To change the "Royal Blue" button color:
1. Open `tailwind.config.ts`.
2. Find `accent: '#2563EB'`.
3. Replace with your hex code.

### Changing Fonts
Fonts are loaded in `src/app/layout.tsx`.
1. Open `src/app/layout.tsx`.
2. Import a new font from `next/font/google`.
3. Replace the `Manrope` or `Inter` variables in the config object.

## Environment Variables

This project uses environment variables for sensitive data. See `.env.example` for the full list.

## Deployment

This site is configured for static export. The recommended deployment platform is **Vercel**, but it works on Netlify or any static host.

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## License

Proprietary - All rights reserved to Elite Auto Styling.