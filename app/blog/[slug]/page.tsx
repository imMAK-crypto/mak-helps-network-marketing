import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/content';
import { AnimatedSection, FadeUp } from '@/components/animated-section';
import { MagneticButton } from '@/components/magnetic-button';

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <div className="container">
      <AnimatedSection className="pt-16" staggerChildren>
        <FadeUp>
          <div className="inline-flex rounded-full border border-[rgba(212,175,55,0.22)] bg-[rgba(212,175,55,0.08)] px-3 py-1 text-xs tracking-[0.18em] text-[color:var(--gold)]">
            {post.category}
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            {post.excerpt}
          </p>
        </FadeUp>

        <FadeUp>
          <article className="mt-10 glass rounded-3xl border border-white/10 p-7 sm:p-10">
            <div className="prose prose-invert max-w-none">
              <p>
                This route is <strong>MDX-ready</strong>. Replace this placeholder with
                an MDX pipeline (e.g. Contentlayer, next-mdx-remote, or @next/mdx) when you’re ready.
              </p>
              <p>
                For now, it demonstrates SEO-friendly routing via `/blog/[slug]` and provides
                the layout and styling hooks used across the site.
              </p>
              <h2>Example section</h2>
              <p>
                Luxury funnels convert because they reduce friction and increase trust—through
                typography, spacing, proof, and a fast experience. The goal is to feel premium
                without feeling “over-designed.”
              </p>
            </div>
          </article>
        </FadeUp>

        <FadeUp>
          <div className="mt-10 mb-24 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="/blog" variant="secondary" ariaLabel="Back to blog">
              Back to Blog
            </MagneticButton>
            <MagneticButton href="/contact" variant="default" ariaLabel="Contact us">
              Start a Project
            </MagneticButton>
          </div>
        </FadeUp>
      </AnimatedSection>
    </div>
  );
}

