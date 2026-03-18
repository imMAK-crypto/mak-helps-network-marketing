'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

function useMagnet(strength = 0.22) {
  const ref = React.useRef<HTMLElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const x = useSpring(mx, { stiffness: 300, damping: 22, mass: 0.2 });
  const y = useSpring(my, { stiffness: 300, damping: 22, mass: 0.2 });

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / r.width;
      const py = (e.clientY - (r.top + r.height / 2)) / r.height;
      mx.set(px * r.width * strength);
      my.set(py * r.height * strength);
    };

    const handleLeave = () => {
      mx.set(0);
      my.set(0);
    };

    el.addEventListener('pointermove', handleMove);
    el.addEventListener('pointerleave', handleLeave);
    return () => {
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', handleLeave);
    };
  }, [mx, my, strength]);

  return { ref, x, y };
}

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  type = 'button',
  className,
  variant = 'default',
  size = 'default',
  ariaLabel
}: Props) {
  const { ref, x, y } = useMagnet();

  const base = cn(buttonVariants({ variant, size }), 'will-change-transform', className);

  if (href) {
    return (
      <motion.div style={{ x, y }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
        <Link
          href={href}
          aria-label={ariaLabel}
          className={base}
          ref={(node) => {
            (ref as React.MutableRefObject<HTMLElement | null>).current = node as unknown as HTMLElement | null;
          }}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={base}
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node as unknown as HTMLElement | null;
      }}
      style={{ x, y }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.button>
  );
}

