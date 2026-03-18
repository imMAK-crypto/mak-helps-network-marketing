import Image from 'next/image';
import { AnimatedSection, FadeUp } from '@/components/animated-section';

const team = [
  { name: 'Muhammed A.K', role: 'Founder & Creative Director' },
  { name: 'Amina K.', role: 'UX & Motion Designer' },
  { name: 'Rashid M.', role: 'Full‑Stack Developer' },
  { name: 'Fathima N.', role: 'Brand & Copy Strategist' },
  { name: 'Sanjay R.', role: 'Performance & SEO' }
];

const values = [
  {
    title: 'Luxury Clarity',
    desc: 'Premium visuals with ruthless clarity—so your offer feels elite and obvious.'
  },
  {
    title: 'Conversion Craft',
    desc: 'We obsess over hierarchy, friction, and proof to move leads into action.'
  },
  {
    title: 'Performance First',
    desc: 'Fast loads, clean architecture, and motion that never compromises speed.'
  },
  {
    title: 'Trust by Design',
    desc: 'Every detail builds credibility—typography, spacing, micro-interactions, and tone.'
  }
];

export default function AboutPage() {
  return (
    <div className="container">
      <AnimatedSection className="pt-16" staggerChildren>
        <FadeUp>
          <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
            ABOUT
          </div>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Luxury digital experiences—built for network marketers.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            Based in Kozhikode, Kerala, India, we help MLM and network marketing
            businesses upgrade their online presence with premium design, motion, and performance.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="noise mt-10 grid gap-6 rounded-3xl border border-white/10 glass p-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl tracking-tight">Our story</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                Network marketing thrives on trust. We built M.A.K Helps to give leaders,
                teams, and distributors a digital presence that feels premium—so prospects
                take you seriously from the first click.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                Our approach blends luxury art direction with conversion strategy and modern
                engineering—so the experience is beautiful, fast, and persuasive.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 92vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="glass rounded-3xl border border-[rgba(212,175,55,0.22)] p-7">
              <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
                MISSION
              </div>
              <h3 className="mt-3 font-serif text-3xl tracking-tight">
                Make your brand feel elite—and convert.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                We craft premium websites and funnels that elevate your credibility,
                attract higher-quality leads, and move them toward action without friction.
              </p>
            </div>
            <div className="glass rounded-3xl border border-white/10 p-7">
              <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
                METHOD
              </div>
              <h3 className="mt-3 font-serif text-3xl tracking-tight">
                Strategy → Design → Motion → Performance.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                We start with your offer and audience, translate it into luxury visuals,
                add micro-interactions that feel premium, and ship it fast and SEO-ready.
              </p>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="mt-16">
            <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
              TEAM
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Boutique team. High-end output.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {team.map((m) => (
                <div
                  key={m.name}
                  className="glass rounded-3xl border border-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/6"
                >
                  <div className="h-12 w-12 rounded-2xl border border-[rgba(212,175,55,0.22)] bg-[rgba(212,175,55,0.08)]" />
                  <div className="mt-4 font-medium">{m.name}</div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="mt-16 mb-24">
            <div className="text-xs tracking-[0.22em] text-[color:var(--gold)]/85">
              VALUES
            </div>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              The luxury standard we ship by.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="noise glass rounded-3xl border border-white/10 p-6"
                >
                  <div className="font-serif text-xl">{v.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </AnimatedSection>
    </div>
  );
}

