'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full resize-none rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-[color:var(--fg)] placeholder:text-white/35 outline-none transition focus:border-[rgba(212,175,55,0.35)] focus:ring-2 focus:ring-[rgba(212,175,55,0.18)] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';

export { Textarea };

