# OffPattern Labs Website

A modern, performance-focused website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ SEO optimized (meta tags, Open Graph, Schema markup)
- ✅ Performance optimized (Next.js Image, lazy loading)
- ✅ Smooth animations and transitions
- ✅ Clean, minimal design aesthetic
- ✅ TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd offpatternlabs-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
offpatternlabs-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt config
├── components/            # React components
│   ├── Hero.tsx
│   ├── WhatWeDo.tsx
│   ├── OurApproach.tsx
│   ├── WhatYouGet.tsx
│   ├── WhyUs.tsx
│   ├── Work.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/                # Static assets
│   ├── images/           # Image assets
│   └── README-IMAGES.md  # Image guidelines
└── tailwind.config.ts    # Tailwind configuration
```

## Adding Your Brand Assets

1. Add your logo to `/public/logo.svg` or `/public/logo.png`
2. Add OG image to `/public/og-image.png` (1200x630px)
3. Add project images to `/public/images/`

See `/public/README-IMAGES.md` for detailed guidelines.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Custom Domain Setup

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your domain: `offpatternlabs.com`
4. Follow the DNS configuration instructions
5. Add both `www` and root domain

## Environment Variables

No environment variables are required for the basic setup.

If you add analytics or other services later, create a `.env.local` file:

```bash
# Example for future use
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Performance Optimization

The site is already optimized with:
- Next.js automatic code splitting
- Image optimization with next/image
- Static page generation
- Minimal JavaScript bundle
- Efficient CSS with Tailwind

## SEO Checklist

- ✅ Meta tags configured
- ✅ Open Graph tags added
- ✅ Schema markup (LocalBusiness)
- ✅ Sitemap generated
- ✅ Robots.txt configured
- ✅ Semantic HTML
- ✅ Mobile responsive

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Customization

### Colors

Edit colors in `tailwind.config.ts`:

```ts
colors: {
  background: "#F8F8F6",  // Off-white
  foreground: "#0D0D0D",  // Charcoal black
  accent: "#C85A3D",      // Burnt orange
}
```

### Typography

The site uses Inter font. To change it, edit `app/layout.tsx`.

### Content

All content is in the component files. Edit the text directly in:
- `components/Hero.tsx`
- `components/WhatWeDo.tsx`
- etc.

## Support

For issues or questions, contact: joshil@offpatternlabs.com

## License

All rights reserved - OffPattern Labs © 2025
