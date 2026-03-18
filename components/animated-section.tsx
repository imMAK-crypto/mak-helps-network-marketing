'use client';

import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.21, 0.85, 0.22, 1] }
  }
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};

export function AnimatedSection({
  children,
  className,
  as = 'section',
  staggerChildren = false
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'section' | 'div';
  staggerChildren?: boolean;
}) {
  const Comp = as === 'div' ? motion.div : motion.section;
  return (
    <Comp
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -120px 0px' }}
      variants={staggerChildren ? stagger : fadeUp}
    >
      {children}
    </Comp>
  );
}

export function FadeUp({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}

