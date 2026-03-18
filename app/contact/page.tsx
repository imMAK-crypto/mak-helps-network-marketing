import { AnimatedSection, FadeUp } from '@/components/animated-section';
import { ContactForm } from '@/components/contact-form';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container">
      <AnimatedSection className="pt-16" staggerChildren>
        <FadeUp>
          <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
            CONTACT
          </div>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Let’s build something premium.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            Tell us what you’re building. We’ll reply with the next steps and a luxury-first plan.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div className="noise glass rounded-3xl border border-white/10 p-6 sm:p-8">
              <ContactForm />
              <p className="mt-6 text-xs text-[color:var(--muted)]">
                Email delivery uses Resend. Add <code className="text-[color:var(--fg)]">RESEND_API_KEY</code> to{' '}
                <code className="text-[color:var(--fg)]">.env.local</code> and restart.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="glass rounded-3xl border border-white/10 p-6 sm:p-8">
                <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
                  LOCATION
                </div>
                <div className="mt-3 font-serif text-2xl tracking-tight">
                  Kozhikode, Kerala, India
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  Kerala-friendly flow with a WhatsApp shortcut and frictionless inquiry capture.
                </p>
                <div className="mt-6 grid gap-2 text-sm">
                  <div className="text-[color:var(--muted)]">Email</div>
                  <Link href="mailto:hello@makhelps.com" className="text-[color:var(--fg)] hover:text-white">
                    hello@makhelps.com
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 glass">
                <iframe
                  title="Map of Kozhikode, Kerala, India"
                  aria-label="Map of Kozhikode, Kerala, India"
                  loading="lazy"
                  className="h-[320px] w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Kozhikode%2C%20Kerala%2C%20India&output=embed"
                />
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="mt-16 mb-24 rounded-3xl border border-[rgba(212,175,55,0.22)] glass p-8">
            <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
              FAST TRACK
            </div>
            <div className="mt-3 font-serif text-2xl tracking-tight">
              Prefer WhatsApp? Tap the floating button.
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
              We’ll respond with a quick checklist and the next steps to launch your luxury site.
            </p>
          </div>
        </FadeUp>
      </AnimatedSection>
    </div>
  );
}

