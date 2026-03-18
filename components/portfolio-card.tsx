'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type PortfolioItem = {
  id: string;
  title: string;
  category: 'Web Development' | 'Marketing Funnels' | 'E-commerce' | 'Branding';
  summary: string;
  image: string;
  results: string[];
  stack: string[];
};

export function PortfolioCard({
  item,
  onClick,
  className
}: {
  item: PortfolioItem;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`Open case study: ${item.title}`}
      className={cn(
        'group text-left glass rounded-3xl border border-white/10 overflow-hidden shadow-[0_18px_70px_rgba(0,0,0,0.55)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]',
        className
      )}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 92vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-[rgba(212,175,55,0.22)] bg-black/35 px-3 py-1 text-xs tracking-[0.18em] text-[color:var(--gold)] backdrop-blur">
          {item.category}
        </div>
      </div>
      <div className="p-6">
        <div className="font-serif text-xl tracking-tight">{item.title}</div>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
          {item.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.results.slice(0, 2).map((r) => (
            <span
              key={r}
              className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs text-[color:var(--fg)]"
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

