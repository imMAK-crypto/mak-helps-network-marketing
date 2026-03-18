'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/magnetic-button';

export function PricingTierCard({
  name,
  price,
  highlight,
  features,
  className
}: {
  name: string;
  price: string;
  highlight?: string;
  features: string[];
  className?: string;
}) {
  return (
    <motion.div
      className={cn(
        'glass rounded-3xl border border-white/10 p-7 shadow-[0_18px_70px_rgba(0,0,0,0.55)]',
        highlight ? 'border-[rgba(212,175,55,0.28)] shadow-[0_0_0_1px_rgba(212,175,55,0.16),0_30px_120px_rgba(0,0,0,0.65)]' : '',
        className
      )}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-serif text-2xl tracking-tight">{name}</div>
          {highlight ? (
            <div className="mt-2 inline-flex rounded-full border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.10)] px-3 py-1 text-xs tracking-[0.18em] text-[color:var(--gold)]">
              {highlight}
            </div>
          ) : null}
        </div>
        <div className="text-right">
          <div className="text-2xl font-semibold text-[color:var(--fg)]">{price}</div>
          <div className="text-xs text-[color:var(--muted)]">One-time</div>
        </div>
      </div>

      <ul className="mt-6 grid gap-3 text-sm text-[color:var(--fg)]/90">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" aria-hidden={true} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <MagneticButton href="/contact" variant={highlight ? 'default' : 'outline'} ariaLabel={`Choose ${name}`}>
          Get Started
        </MagneticButton>
      </div>
    </motion.div>
  );
}

