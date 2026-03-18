import { AnimatedSection, FadeUp } from '@/components/animated-section';
import { servicesDetailed, faqs } from '@/lib/content';
import { ServiceCard } from '@/components/service-card';
import { PricingTierCard } from '@/components/pricing-tier-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MagneticButton } from '@/components/magnetic-button';

const pricing = [
  {
    name: 'Starter',
    price: '₹49,999',
    features: [
      'Luxury single-page site / landing',
      'Lead capture + WhatsApp CTA',
      'Basic SEO + metadata',
      'Performance-first build',
      '1 round of revisions'
    ]
  },
  {
    name: 'Professional',
    price: '₹99,999',
    highlight: 'Most Chosen',
    features: [
      'Multi-section funnel + case study blocks',
      'Motion-rich premium UI',
      'Advanced SEO + OG + JSON-LD',
      'Email delivery via Resend',
      '2 rounds of revisions',
      'Analytics-ready structure'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Full website + funnel system',
      'Custom integrations',
      'A/B-ready CRO structure',
      'Content + brand direction support',
      'Dedicated performance budget'
    ]
  }
];

const comparison = [
  { label: 'Luxury UI + dark gold system', s: true, p: true, e: true },
  { label: 'Framer Motion micro-animations', s: true, p: true, e: true },
  { label: 'Funnel strategy + copy guidance', s: false, p: true, e: true },
  { label: 'Case studies / portfolio section', s: false, p: true, e: true },
  { label: 'Custom integrations', s: false, p: false, e: true },
  { label: 'CRO experimentation support', s: false, p: false, e: true }
];

export default function ServicesPage() {
  return (
    <div className="container">
      <AnimatedSection className="pt-16" staggerChildren>
        <FadeUp>
          <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
            SERVICES
          </div>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            High-end design. High-converting funnels.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            Eight premium services crafted for network marketers—luxury visuals, elite motion,
            and performance-first engineering that keeps your experience fast.
          </p>
          <div className="mt-8">
            <MagneticButton href="/contact" variant="default" size="lg" ariaLabel="Get quote">
              Get Quote
            </MagneticButton>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicesDetailed.map((s) => (
            <FadeUp key={s.title}>
              <ServiceCard title={s.title} description={s.description} iconKey={s.iconKey} />
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="mt-20">
            <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
              PRICING
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Clear tiers. Premium delivery.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
              Choose a tier based on depth. All tiers ship luxury design, motion polish, and performance-first builds.
            </p>
          </div>
        </FadeUp>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricing.map((t) => (
            <FadeUp key={t.name}>
              <PricingTierCard {...t} />
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="mt-16">
            <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
              FEATURE COMPARISON
            </div>
            <h3 className="mt-3 font-serif text-2xl tracking-tight">
              What’s included
            </h3>
            <div className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>Starter</TableHead>
                    <TableHead>Professional</TableHead>
                    <TableHead>Enterprise</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparison.map((row) => (
                    <TableRow key={row.label}>
                      <TableCell className="text-[color:var(--fg)]/90">{row.label}</TableCell>
                      <TableCell className="text-[color:var(--muted)]">{row.s ? 'Included' : '—'}</TableCell>
                      <TableCell className="text-[color:var(--muted)]">{row.p ? 'Included' : '—'}</TableCell>
                      <TableCell className="text-[color:var(--muted)]">{row.e ? 'Included' : '—'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="mt-16 mb-24">
            <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
              FAQ
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Answers, instantly.
            </h2>
            <div className="mt-8 grid gap-3">
              <Accordion type="single" collapsible>
                {faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </FadeUp>
      </AnimatedSection>
    </div>
  );
}

