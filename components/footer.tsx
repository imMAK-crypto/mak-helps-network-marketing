import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const socials = [
  { href: 'https://instagram.com/', label: 'Instagram' },
  { href: 'https://linkedin.com/', label: 'LinkedIn' },
  { href: 'https://dribbble.com/', label: 'Dribbble' }
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl tracking-tight">
              M.A.K Helps Network Marketing
            </div>
            <p className="mt-3 max-w-md text-sm text-[color:var(--muted)]">
              Premium Web Design & Development agency that helps network marketing / MLM
              businesses build high-converting, luxury websites and funnels.
            </p>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              Kozhikode, Kerala, India
            </p>
          </div>

          <div>
            <div className="text-sm font-medium text-[color:var(--fg)]">Pages</div>
            <div className="mt-3 grid gap-2 text-sm text-[color:var(--muted)]">
              <Link href="/about" className="hover:text-[color:var(--fg)]">
                About
              </Link>
              <Link href="/services" className="hover:text-[color:var(--fg)]">
                Services
              </Link>
              <Link href="/portfolio" className="hover:text-[color:var(--fg)]">
                Portfolio
              </Link>
              <Link href="/blog" className="hover:text-[color:var(--fg)]">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-[color:var(--fg)]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-[color:var(--fg)]">Social</div>
            <div className="mt-3 grid gap-2 text-sm text-[color:var(--muted)]">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[color:var(--fg)]"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Separator />
          <div className="mt-6 flex flex-col gap-2 text-xs text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} M.A.K Helps Network Marketing. All rights
              reserved.
            </div>
            <div className="tracking-[0.18em] text-[color:var(--gold)]/85">
              LUXURY • PERFORMANCE • CONVERSION
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

