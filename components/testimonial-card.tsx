'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function TestimonialCard({
  quote,
  name,
  role,
  rating = 5
}: {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}) {
  return (
    <motion.div
      className="glass rounded-3xl border border-white/10 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.55)]"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 text-[color:var(--gold)]"
            fill="currentColor"
            aria-hidden={true}
          />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--fg)]/90">
        “{quote}”
      </p>
      <div className="mt-6">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-[color:var(--muted)]">{role}</div>
      </div>
    </motion.div>
  );
}

