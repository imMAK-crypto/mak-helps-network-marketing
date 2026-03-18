import { AnimatedSection, FadeUp } from '@/components/animated-section';
import { PortfolioGallery } from '@/components/portfolio-gallery';
import { portfolioItems } from '@/lib/content';

export default function PortfolioPage() {
  return (
    <div className="container">
      <AnimatedSection className="pt-16" staggerChildren>
        <FadeUp>
          <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
            PORTFOLIO
          </div>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Case studies with luxury polish—and real results.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            Filterable grid with Framer Motion tabs and modal case studies. These are realistic placeholders
            you can replace with real client work later.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="mt-10 mb-24">
            <PortfolioGallery items={portfolioItems} />
          </div>
        </FadeUp>
      </AnimatedSection>
    </div>
  );
}

