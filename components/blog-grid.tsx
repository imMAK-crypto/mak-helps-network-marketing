'use client';

import * as React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
};

export function BlogGrid({ posts }: { posts: Post[] }) {
  const categories = React.useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, [posts]);

  const [category, setCategory] = React.useState<string>('All');
  const filtered = category === 'All' ? posts : posts.filter((p) => p.category === category);

  return (
    <div>
      <Tabs value={category} onValueChange={setCategory}>
        <TabsList aria-label="Blog categories">
          {categories.map((c) => (
            <TabsTrigger key={c} value={c}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <motion.div layout className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              layout
              key={p.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                href={`/blog/${p.slug}`}
                aria-label={`Read post: ${p.title}`}
                className="group block glass rounded-3xl border border-white/10 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.55)] transition hover:-translate-y-1 hover:bg-white/6"
              >
                <div className="inline-flex rounded-full border border-[rgba(212,175,55,0.22)] bg-[rgba(212,175,55,0.08)] px-3 py-1 text-xs tracking-[0.18em] text-[color:var(--gold)]">
                  {p.category}
                </div>
                <div className="mt-4 font-serif text-xl tracking-tight text-[color:var(--fg)]">
                  {p.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {p.excerpt}
                </p>
                <div className="mt-6 text-xs tracking-[0.22em] text-[color:var(--gold)]/80">
                  READ
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

