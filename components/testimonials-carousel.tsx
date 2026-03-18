'use client';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/testimonial-card';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      'Our funnel finally looks premium. Leads are warmer, calls are smoother, and conversions feel effortless.',
    name: 'Aisha Rahman',
    role: 'MLM Team Leader (Kerala)'
  },
  {
    quote:
      'They nailed the luxury vibe and kept it lightning fast. We saw a 3x uplift in opt-ins within 30 days.',
    name: 'Vijay Menon',
    role: 'Network Marketing Coach'
  },
  {
    quote:
      'From strategy to visuals to performance—everything feels high-end. The site builds trust instantly.',
    name: 'Neha Thomas',
    role: 'Wellness Brand Distributor'
  },
  {
    quote:
      'The micro-animations and polish are unreal. Our brand finally feels premium.',
    name: 'Arjun Nair',
    role: 'Founder, Herbal Lifestyle Community'
  }
];

export function TestimonialsCarousel({ className }: { className?: string }) {
  const autoplay = React.useRef(
    Autoplay({ delay: 3600, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoplay.current]
  );

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <TestimonialCard {...t} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

