import { AnimatedSection, FadeUp } from '@/components/animated-section';
import { BlogGrid } from '@/components/blog-grid';
import { blogPosts } from '@/lib/content';

export default function BlogPage() {
  return (
    <div className="container">
      <AnimatedSection className="pt-16" staggerChildren>
        <FadeUp>
          <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
            BLOG
          </div>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Insights for premium funnels & modern web builds.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            MDX-ready structure: these are placeholder posts with categories and slugs.
            Replace with MDX content later.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="mt-10 mb-24">
            <BlogGrid posts={blogPosts} />
          </div>
        </FadeUp>
      </AnimatedSection>
    </div>
  );
}

