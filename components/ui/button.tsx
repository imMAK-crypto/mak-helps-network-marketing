import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-[transform,opacity,background,color,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-[color:var(--gold)] text-black shadow-[0_10px_40px_rgba(212,175,55,0.22)] hover:shadow-[0_16px_60px_rgba(212,175,55,0.26)]',
        secondary:
          'glass text-[color:var(--fg)] hover:bg-white/8 border border-white/10',
        ghost: 'text-[color:var(--fg)] hover:bg-white/6',
        outline:
          'border border-[rgba(212,175,55,0.22)] text-[color:var(--fg)] hover:bg-[rgba(212,175,55,0.08)]'
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-10 px-5',
        lg: 'h-12 px-7 text-[15px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

