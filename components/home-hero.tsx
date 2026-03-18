'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from '@/components/magnetic-button';

export function HomeHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 380], [1, 0.6]);

  return (
    <section className="noise relative min-h-[92svh] overflow-hidden">
      <motion.div
        aria-hidden={true}
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(212,175,55,0.16),transparent_60%),radial-gradient(900px_500px_at_80%_60%,rgba(212,175,55,0.10),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.80))]" />
      </motion.div>

      <div className="relative container pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.10)] px-4 py-2 text-xs tracking-[0.22em] text-[color:var(--gold)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            KOZHIKODE • KERALA • INDIA
          </motion.div>

          <motion.h1
            className="mt-6 font-serif text-4xl leading-[1.06] tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, ease: [0.21, 0.85, 0.22, 1] }}
          >
            Empowering Network Marketers with Luxury Digital Experiences That Convert
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            M.A.K Helps Network Marketing is a premium Web Design & Development agency
            helping MLM and network marketing businesses build high-converting, luxury
            websites and funnels—crafted to feel elite and perform at scale.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <MagneticButton href="/contact" variant="default" size="lg" ariaLabel="Get your luxury site">
              Get Your Luxury Site
            </MagneticButton>
            <MagneticButton href="/portfolio" variant="secondary" size="lg" ariaLabel="View portfolio">
              View Portfolio
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {[
              { k: '300%', v: 'Revenue growth (case study)' },
              { k: '1.2s', v: 'Luxury fast load target' },
              { k: '98+', v: 'Lighthouse score target' }
            ].map((s) => (
              <div
                key={s.k}
                className="glass rounded-3xl border border-white/10 p-5"
              >
                <div className="text-2xl font-semibold text-[color:var(--fg)]">
                  {s.k}
                </div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

