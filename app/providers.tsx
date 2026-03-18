'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import { LenisProvider } from '@/components/lenis-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LenisProvider>{children}</LenisProvider>
    </ThemeProvider>
  );
}

