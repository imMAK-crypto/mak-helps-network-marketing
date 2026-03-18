'use client';

import * as React from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  React.useEffect(() => {
    // On route change, snap to top (Lenis smooth).
    // Avoids odd scroll positions across App Router transitions.
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return <>{children}</>;
}

