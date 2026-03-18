import { AnimatedSection, FadeUp } from '@/components/animated-section';
import { HomeHero } from '@/components/home-hero';
import { ServiceCard } from '@/components/service-card';
import { TrustedByMarquee } from '@/components/trusted-by-marquee';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { MagneticButton } from '@/components/magnetic-button';
import { portfolioItems, servicesPreview } from '@/lib/content';
import { PortfolioCard } from '@/components/portfolio-card';
import Script from 'next/script';

export default function HomePage() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <>
      <HomeHero />
      <Script
        id="agency-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'M.A.K Helps Network Marketing',
            description:
              'Premium Web Design & Development agency that helps network marketing / MLM businesses build high-converting, luxury websites and funnels.',
            areaServed: 'India',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kozhikode',
              addressRegion: 'Kerala',
              addressCountry: 'IN'
            },
            url: 'https://makhelps.com'
          })
        }}
      />

      <div className="container">
        <AnimatedSection className="mt-20" staggerChildren>
          <FadeUp>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
                  SERVICES
                </div>
                <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                  Luxury-first builds. Conversion-first thinking.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                  Every pixel is intentional—dark luxury aesthetics, premium motion,
                  and high-performing architecture engineered for network marketers.
                </p>
              </div>
              <div className="hidden sm:block">
                <MagneticButton href="/services" variant="outline" ariaLabel="View all services">
                  View All
                </MagneticButton>
              </div>
            </div>
          </FadeUp>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicesPreview.map((s) => (
              <FadeUp key={s.title}>
                <ServiceCard title={s.title} description={s.description} iconKey={s.iconKey} />
              </FadeUp>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <MagneticButton href="/services" variant="outline" ariaLabel="View all services">
              View All Services
            </MagneticButton>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-24" staggerChildren>
          <FadeUp>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
                  PORTFOLIO
                </div>
                <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                  Featured work that feels premium—and performs.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                  A few highlights from luxury funnels, brand systems, and high-end
                  builds. Replace these placeholders with your real case studies later.
                </p>
              </div>
              <div className="hidden sm:block">
                <MagneticButton href="/portfolio" variant="outline" ariaLabel="View full portfolio">
                  View All
                </MagneticButton>
              </div>
            </div>
          </FadeUp>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featured.map((item) => (
              <FadeUp key={item.id}>
                <PortfolioCard item={item} />
              </FadeUp>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <MagneticButton href="/portfolio" variant="outline" ariaLabel="View full portfolio">
              View Full Portfolio
            </MagneticButton>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-24" staggerChildren>
          <FadeUp>
            <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
              TESTIMONIALS
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Luxury that your leads can feel.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
              Autoplay carousel powered by Embla, animated with Framer Motion.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="mt-10">
              <TestimonialsCarousel />
            </div>
          </FadeUp>
        </AnimatedSection>

        <AnimatedSection className="mt-24" staggerChildren>
          <FadeUp>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
                  TRUSTED BY
                </div>
                <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                  Premium brands & communities.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                  Placeholder logos with an infinite marquee effect. Swap with real clients anytime.
                </p>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="mt-10">
              <TrustedByMarquee />
            </div>
          </FadeUp>
        </AnimatedSection>

        <AnimatedSection className="mt-24 mb-24" staggerChildren>
          <FadeUp>
            <div className="noise glass rounded-3xl border border-[rgba(212,175,55,0.22)] p-8 sm:p-10 shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
              <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr] md:items-center">
                <div>
                  <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
                    READY TO UPGRADE?
                  </div>
                  <h3 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                    Get a luxury funnel that converts high-intent leads.
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                    We’ll design a premium digital experience that makes your offer feel elite,
                    builds trust instantly, and keeps performance flawless.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <MagneticButton href="/contact" variant="default" size="lg" ariaLabel="Book a quote">
                    Get Quote
                  </MagneticButton>
                  <MagneticButton href="/services" variant="secondary" size="lg" ariaLabel="Explore services">
                    Explore Services
                  </MagneticButton>
                </div>
              </div>
            </div>
          </FadeUp>
        </AnimatedSection>
      </div>
    </>
  );
}

