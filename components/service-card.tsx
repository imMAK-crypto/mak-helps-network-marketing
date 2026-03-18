'use client';

import { motion } from 'framer-motion';
import { Crown, Gem, LayoutDashboard, LineChart, ShoppingBag, Sparkles, Target, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ServiceIconKey } from '@/lib/content';

const iconMap: Record<ServiceIconKey, React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>> = {
  Target,
  Crown,
  Zap,
  Gem,
  ShoppingBag,
  LineChart,
  LayoutDashboard,
  Sparkles
};

export function ServiceCard({
  title,
  description,
  iconKey,
  className
}: {
  title: string;
  description: string;
  iconKey: ServiceIconKey;
  className?: string;
}) {
  const Icon = iconMap[iconKey];
  return (
    <motion.div
      className={cn(
        'glass group rounded-3xl border border-white/10 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.55)]',
        className
      )}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[rgba(212,175,55,0.22)] bg-[rgba(212,175,55,0.08)]">
          // `aria-hidden` must be boolean (not a string) for strict TS builds.
          <Icon className="h-5 w-5 text-[color:var(--gold)]" aria-hidden={true} />
        </div>
        <div className="font-serif text-lg tracking-tight">{title}</div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
        {description}
      </p>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.22)] to-transparent opacity-60" />
      <div className="mt-4 text-xs tracking-[0.22em] text-[color:var(--gold)]/80">
        DISCOVER
      </div>
    </motion.div>
  );
}

