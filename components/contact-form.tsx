'use client';

import * as React from 'react';
import { useActionState } from 'react';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { contactSchema, sendContactAction, type ContactActionState, type ContactInput } from '@/app/contact/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MagneticButton } from '@/components/magnetic-button';
import { cn } from '@/lib/utils';

const services = [
  'Luxury Funnel Design',
  'High-End Web Design',
  'Next.js Development',
  'Branding & Identity',
  'E-commerce Experiences',
  'Analytics & CRO',
  'Landing Page Systems',
  'Motion & Interaction Design'
];

type FormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactActionState | null, FormData>(
    sendContactAction,
    null
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    },
    mode: 'onChange'
  });

  React.useEffect(() => {
    if (state?.ok) form.reset();
    if (state?.fieldErrors) {
      for (const [k, v] of Object.entries(state.fieldErrors)) {
        if (v && v[0]) form.setError(k as keyof FormValues, { message: v[0] });
      }
    }
  }, [state, form]);

  const onSubmit = form.handleSubmit(() => {
    const fd = new FormData();
    const v = form.getValues();
    (Object.keys(v) as (keyof ContactInput)[]).forEach((k) => fd.set(k, String(v[k] ?? '')));
    action(fd);
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-5" aria-label="Contact form">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" autoComplete="name" {...form.register('name')} aria-invalid={!!form.formState.errors.name} />
          {form.formState.errors.name ? (
            <p className="text-xs text-red-400" role="alert">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" {...form.register('email')} aria-invalid={!!form.formState.errors.email} />
          {form.formState.errors.email ? (
            <p className="text-xs text-red-400" role="alert">
              {form.formState.errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" autoComplete="tel" {...form.register('phone')} aria-invalid={!!form.formState.errors.phone} />
          {form.formState.errors.phone ? (
            <p className="text-xs text-red-400" role="alert">
              {form.formState.errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label>Service</Label>
          <Select
            value={form.watch('service')}
            onValueChange={(v) => form.setValue('service', v, { shouldValidate: true })}
          >
            <SelectTrigger aria-label="Select service" aria-invalid={!!form.formState.errors.service}>
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.service ? (
            <p className="text-xs text-red-400" role="alert">
              {form.formState.errors.service.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...form.register('message')} aria-invalid={!!form.formState.errors.message} />
        {form.formState.errors.message ? (
          <p className="text-xs text-red-400" role="alert">
            {form.formState.errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-[color:var(--muted)]">
          By submitting, you agree to be contacted about your project.
        </div>
        <MagneticButton
          ariaLabel="Send message"
          type="submit"
          className={cn(pending ? 'pointer-events-none opacity-90' : '')}
        >
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Send Message'
          )}
        </MagneticButton>
      </div>

      <AnimatePresence>
        {state?.message ? (
          <motion.div
            className={cn(
              'mt-2 rounded-2xl border px-4 py-3 text-sm',
              state.ok
                ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-200'
                : 'border-red-500/25 bg-red-500/10 text-red-200'
            )}
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            <div className="flex items-center gap-2">
              {state.ok ? (
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              ) : null}
              <span>{state.message}</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}

