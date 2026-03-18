import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#F4F4F4',
        muted: '#A8A8A8',
        gold: '#D4AF37',
        card: 'rgba(255,255,255,0.04)',
        border: 'rgba(255,255,255,0.10)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'ui-serif', 'serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(212,175,55,0.22), 0 18px 60px rgba(0,0,0,0.55)'
      },
      backdropBlur: {
        luxury: '18px'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' }
        }
      },
      animation: {
        shimmer: 'shimmer 8s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;

