import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';
import { JetBrains_Mono, Newsreader } from 'next/font/google';
import localFont from 'next/font/local';
import { NavLink } from './components/nav-link';
import { LocalTime } from './components/local-time';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

const saans = localFont({
  src: '../public/fonts/saans-font.woff2',
  display: 'swap',
  weight: '300 900',
  variable: '--font-saans',
});

const jetBrainsMono = JetBrains_Mono({
  display: 'swap',
  variable: '--font-monospace',
  subsets: ['latin'],
});

const newsreader = Newsreader({
  display: 'swap',
  style: 'italic',
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-newsreader',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@vvkrdy',
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#fbfcff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${saans.variable} ${jetBrainsMono.variable} ${newsreader.variable} flex min-h-screen flex-col`}
      >
        <header
          id="top"
          className="sticky top-0 z-50 bg-[#fbfcff]/75 backdrop-blur-md"
        >
          <div className="container-page flex items-center justify-between py-5">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-slate-950"
            >
              vrg.
            </Link>
            <nav className="flex gap-5">
              <NavLink href="/info">Information</NavLink>
              <NavLink href="/posts">Writing</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
          </div>
        </header>

        <main className="flex-1 pt-8 md:pt-16">{children}</main>

        <footer className="container-page mt-24 pb-10">
          <hr className="border-slate-200" />

          <div className="flex flex-col gap-6 py-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-serif text-2xl text-slate-500 italic md:text-3xl">
                Have an idea worth building?
              </p>
              <Link
                href="mailto:vivekanandareddygodala@gmail.com"
                className="link-underline mt-2 inline-block text-xl font-medium tracking-tight text-slate-950 md:text-2xl"
              >
                vivekanandareddygodala@gmail.com
              </Link>
            </div>
            <div className="flex flex-col gap-1 font-mono text-xs text-slate-500 md:items-end">
              <span>
                Karlsruhe, Germany · <LocalTime />
              </span>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/vivekanandareddy3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline transition-colors hover:text-slate-900"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/vivekananda-reddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline transition-colors hover:text-slate-900"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://x.com/vvkrdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline transition-colors hover:text-slate-900"
                >
                  X
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 font-mono text-xs text-slate-400">
            <span>© 2020 – 2026 / Vivekananda Reddy</span>
            <Link
              href="#top"
              className="link-underline transition-colors hover:text-slate-900"
            >
              Back to top ↑
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
