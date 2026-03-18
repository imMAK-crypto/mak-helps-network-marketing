'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/magnetic-button';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 glass rounded-2xl border border-white/10 shadow-[0_18px_70px_rgba(0,0,0,0.55)]">
          <div className="flex items-center justify-between px-4 py-3">
            <Link
              href="/"
              className="group inline-flex items-baseline gap-2"
              aria-label="M.A.K Helps Network Marketing"
            >
              <span className="font-serif text-lg tracking-tight text-[color:var(--fg)]">
                M.A.K Helps
              </span>
              <span className="hidden sm:inline text-xs tracking-[0.22em] text-[color:var(--muted)]">
                NETWORK MARKETING
              </span>
              <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shadow-[0_0_0_6px_rgba(212,175,55,0.12)] transition group-hover:shadow-[0_0_0_10px_rgba(212,175,55,0.14)]" />
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {nav.map((item) => {
                const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm transition',
                      active
                        ? 'text-[color:var(--fg)] bg-white/6'
                        : 'text-[color:var(--muted)] hover:text-[color:var(--fg)] hover:bg-white/4'
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <MagneticButton
                href="/contact"
                variant="outline"
                ariaLabel="Get a quote"
              >
                Get Quote
              </MagneticButton>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-[color:var(--fg)]"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="mx-auto mt-24 w-[min(92vw,520px)] glass rounded-3xl border border-white/10 p-4"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 18, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-2 py-2">
                <span className="font-serif text-lg">Menu</span>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-2 grid gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-[color:var(--fg)] hover:bg-white/6"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <MagneticButton href="/contact" variant="default" ariaLabel="Get quote">
                    Get Quote
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

