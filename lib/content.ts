import type { PortfolioItem } from '@/components/portfolio-card';

export const agency = {
  name: 'M.A.K Helps Network Marketing',
  tagline: 'Empowering Network Marketers with Luxury Digital Experiences That Convert',
  location: 'Kozhikode, Kerala, India',
  description:
    'Premium Web Design & Development agency that helps network marketing / MLM businesses build high-converting, luxury websites and funnels.'
} as const;

export type ServiceIconKey =
  | 'Target'
  | 'Crown'
  | 'Zap'
  | 'Gem'
  | 'ShoppingBag'
  | 'LineChart'
  | 'LayoutDashboard'
  | 'Sparkles';

export type ServiceItem = {
  title: string;
  description: string;
  iconKey: ServiceIconKey;
};

export const servicesPreview = [
  {
    title: 'Luxury Funnel Design',
    description:
      'High-converting MLM funnels with premium visuals, clear persuasion, and smooth motion.',
    iconKey: 'Target'
  },
  {
    title: 'High-End Web Design',
    description:
      '2026-level dark luxury UI with micro-interactions that build trust instantly.',
    iconKey: 'Crown'
  },
  {
    title: 'Next.js Development',
    description:
      'Blazing-fast, SEO-ready builds with a Lighthouse-first performance mindset.',
    iconKey: 'Zap'
  },
  {
    title: 'Branding & Identity',
    description:
      'Gold-accented brand systems designed to elevate your team’s credibility.',
    iconKey: 'Gem'
  },
  {
    title: 'E-commerce Experiences',
    description:
      'Luxury product pages optimized for conversion, retention, and repeat buys.',
    iconKey: 'ShoppingBag'
  },
  {
    title: 'Analytics & CRO',
    description:
      'Performance tracking and iterative conversion improvements based on data.',
    iconKey: 'LineChart'
  }
] satisfies ServiceItem[];

export const servicesDetailed = [
  ...servicesPreview,
  {
    title: 'Landing Page Systems',
    description:
      'Campaign-ready pages with offer clarity, persuasive sections, and clean forms.',
    iconKey: 'LayoutDashboard'
  },
  {
    title: 'Motion & Interaction Design',
    description:
      'Framer Motion micro-animations that feel premium, never distracting.',
    iconKey: 'Sparkles'
  }
] satisfies ServiceItem[];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'vitalife-mlm-funnel',
    title: 'VitaLife MLM Funnel',
    category: 'Marketing Funnels',
    summary:
      'Luxury lead-capture funnel engineered for trust, clarity, and rapid opt-ins.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=80',
    results: ['300% revenue growth', '2.4x opt-ins', '1.3s load time'],
    stack: ['Next.js', 'Framer Motion', 'Resend', 'Tailwind']
  },
  {
    id: 'kerala-herbs-ecommerce',
    title: 'Kerala Herbs E-commerce',
    category: 'E-commerce',
    summary:
      'High-end storefront with premium product storytelling and performance-first UX.',
    image:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=2400&q=80',
    results: ['+180% AOV', '42% faster checkout', 'Premium brand lift'],
    stack: ['Next.js', 'Tailwind', 'Optimized images']
  },
  {
    id: 'glowrise-branding',
    title: 'GlowRise Brand System',
    category: 'Branding',
    summary:
      'Luxury identity and web direction tailored to network marketing credibility.',
    image:
      'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2400&q=80',
    results: ['Trust score up', 'Unified identity', 'Higher call bookings'],
    stack: ['Design system', 'UI kit', 'Copy']
  },
  {
    id: 'nexateam-web',
    title: 'NexaTeam Website',
    category: 'Web Development',
    summary:
      'A premium brand site for a high-performing downline community and events.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80',
    results: ['+70% time on page', 'Premium perception', 'SEO uplift'],
    stack: ['Next.js', 'SEO', 'Motion']
  },
  {
    id: 'auric-wellness-funnel',
    title: 'Auric Wellness Funnel',
    category: 'Marketing Funnels',
    summary:
      'Offer-focused funnel that feels luxury, loads instantly, and converts cold traffic.',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=2400&q=80',
    results: ['+2.1x leads', 'Lower CPL', 'Smoother signup'],
    stack: ['RHF + Zod', 'Resend', 'Framer Motion']
  },
  {
    id: 'lotus-labs-store',
    title: 'Lotus Labs Storefront',
    category: 'E-commerce',
    summary:
      'Luxury product detail pages with trust badges and story-driven sections.',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=2400&q=80',
    results: ['+60% conversions', 'Premium UX', 'Faster loads'],
    stack: ['Next/Image', 'Tailwind', 'CRO']
  },
  {
    id: 'primewave-branding',
    title: 'PrimeWave Rebrand',
    category: 'Branding',
    summary:
      'Brand refinement for an elite team: typography, gold accent system, and tone.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80',
    results: ['Stronger positioning', 'Higher trust', 'Cleaner message'],
    stack: ['Brand strategy', 'Visual identity']
  },
  {
    id: 'summit-circle-web',
    title: 'Summit Circle Site',
    category: 'Web Development',
    summary:
      'Event + recruitment site with luxury motion and clear CTA pathways.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2400&q=80',
    results: ['More calls booked', 'Better retention', 'Luxury polish'],
    stack: ['Next.js', 'Motion', 'SEO']
  }
];

export const blogPosts = [
  {
    slug: 'luxury-funnels-for-mlm',
    title: 'Luxury Funnels for MLM: Why “Premium” Converts Better',
    category: 'Funnels',
    excerpt:
      'A practical breakdown of trust signals, offer clarity, and luxury UI patterns that increase opt-ins.'
  },
  {
    slug: 'nextjs-speed-for-agency-sites',
    title: 'Next.js Speed for Agency Sites: 98+ Lighthouse Without Compromise',
    category: 'Web Dev',
    excerpt:
      'How we design motion-rich experiences that remain fast, accessible, and SEO-ready.'
  },
  {
    slug: 'dark-luxury-design-system',
    title: 'Dark Luxury Design Systems: Gold Accents Without “Casino Vibes”',
    category: 'Design',
    excerpt:
      'A 2026-level approach to gold, contrast, and typography for elite brand perception.'
  },
  {
    slug: 'whatsapp-first-conversion-kerala',
    title: 'WhatsApp-First Conversion (Kerala-Friendly) for Network Marketers',
    category: 'Growth',
    excerpt:
      'Reduce friction by pairing premium pages with instant WhatsApp intent capture.'
  },
  {
    slug: 'copywriting-for-downline-trust',
    title: 'Copywriting That Builds Downline Trust in 7 Seconds',
    category: 'Copy',
    excerpt:
      'Tight messaging frameworks that feel credible, premium, and invite the right leads.'
  },
  {
    slug: 'case-study-structure-that-sells',
    title: 'Case Study Structure That Sells: Results, Proof, and Narrative',
    category: 'Strategy',
    excerpt:
      'A template for presenting projects in a way that drives high-ticket inquiries.'
  }
];

export const faqs = [
  {
    q: 'Do you work with MLM and network marketing businesses specifically?',
    a: 'Yes. Our strategy and design patterns are built around trust, clarity, and high-converting funnels for network marketers.'
  },
  {
    q: 'Will the site be fast even with animations?',
    a: 'Yes. We use lightweight motion patterns, lazy-loaded media, and performance-first layouts aiming for 98+ Lighthouse.'
  },
  {
    q: 'Can you integrate WhatsApp and lead capture forms?',
    a: 'Absolutely. We build frictionless WhatsApp pathways plus forms that email you instantly via Resend.'
  },
  {
    q: 'How long does a project take?',
    a: 'Starter sites typically 7–14 days, Professional 14–21 days, Enterprise depends on scope.'
  }
];

