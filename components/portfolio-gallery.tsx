'use client';

import * as React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PortfolioCard, type PortfolioItem } from '@/components/portfolio-card';
import { MagneticButton } from '@/components/magnetic-button';

const categories = ['All', 'Web Development', 'Marketing Funnels', 'E-commerce', 'Branding'] as const;
type Category = (typeof categories)[number];

export function PortfolioGallery({ items }: { items: PortfolioItem[] }) {
  const [category, setCategory] = React.useState<Category>('All');
  const [active, setActive] = React.useState<PortfolioItem | null>(null);

  const filtered =
    category === 'All' ? items : items.filter((i) => i.category === category);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={category} onValueChange={(v) => setCategory(v as Category)}>
          <TabsList aria-label="Portfolio categories">
            {categories.map((c) => (
              <TabsTrigger key={c} value={c}>
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="text-sm text-[color:var(--muted)]">
          Showing <span className="text-[color:var(--fg)]">{filtered.length}</span> projects
        </div>
      </div>

      <motion.div layout className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
            >
              <PortfolioCard item={item} onClick={() => setActive(item)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dialog
        open={!!active}
        onOpenChange={(o) => {
          if (!o) setActive(null);
        }}
      >
        {active ? (
          <DialogContent className="p-0 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[260px]">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 92vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              </div>
              <div className="p-6 md:p-7">
                <DialogHeader>
                  <DialogTitle>{active.title}</DialogTitle>
                  <DialogDescription>{active.summary}</DialogDescription>
                </DialogHeader>

                <div className="mt-6">
                  <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
                    RESULTS
                  </div>
                  <ul className="mt-3 grid gap-2 text-sm text-[color:var(--fg)]/90">
                    {active.results.map((r) => (
                      <li key={r} className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
                    STACK
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[rgba(212,175,55,0.22)] bg-[rgba(212,175,55,0.08)] px-3 py-1 text-xs text-[color:var(--gold)]/90"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <MagneticButton href="/contact" variant="default" ariaLabel="Start a project">
                    Start a Project
                  </MagneticButton>
                  <MagneticButton href="/services" variant="secondary" ariaLabel="Explore services">
                    Explore Services
                  </MagneticButton>
                </div>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </div>
  );
}

