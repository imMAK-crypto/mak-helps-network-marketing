'use client';

import { motion } from 'framer-motion';

const logos = [
  'VitaLife',
  'Kerala Herbs',
  'GlowRise',
  'PrimeWave',
  'Lotus Labs',
  'NexaTeam',
  'Auric Wellness',
  'Summit Circle'
];

export function TrustedByMarquee() {
  const items = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 glass">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[color:var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[color:var(--bg)] to-transparent" />
      <motion.div
        className="flex gap-4 py-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {items.map((name, idx) => (
          <div
            key={`${name}-${idx}`}
            className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/3 px-6 py-3 text-sm tracking-[0.22em] text-[color:var(--muted)]"
            aria-label={`Client logo placeholder: ${name}`}
          >
            {name.toUpperCase()}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

