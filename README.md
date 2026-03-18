# M.A.K Helps Network Marketing — Next.js 15 (App Router)

Ultra-luxury dark agency website (2026 standard) built with Next.js 15+, TypeScript (strict), Tailwind, shadcn/ui, Framer Motion, Lenis, Embla Carousel, React Hook Form + Zod, Resend, and next-themes (forced dark).

## Setup

### 1) Install Node.js
- Use **Node 20+** (recommended: latest LTS).

### 2) Install dependencies

```bash
cd mak-helps-network-marketing
npm install
```

### 3) Configure Resend

Create `.env.local`:

```bash
RESEND_API_KEY=YOUR_KEY_HERE
```

The contact form sends emails to **hello@makhelps.com** (placeholder) via Resend.

### 4) Run

```bash
npm run dev
```

Open `http://localhost:3000`.

## Packages (installed via `package.json`)
- Next.js, React, TypeScript
- Tailwind CSS
- shadcn/ui (Radix primitives + `class-variance-authority`)
- Framer Motion (scroll reveals, magnetic buttons, modals, tabs animations)
- Lenis (smooth scroll)
- Embla Carousel + Autoplay (testimonials)
- React Hook Form + Zod (contact form)
- Resend (email)
- next-themes (dark only)
- lucide-react (icons)

