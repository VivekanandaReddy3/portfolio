import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { NavLink } from './components/nav-link';

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

export const metadata: Metadata = {
  title: {
    default: 'Vivekananda Reddy',
    template: '%s — Vivekananda Reddy',
  },
  description:
    'Software Developer | Passionate about code, design & problem-solving | Germany.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${saans.variable} ${jetBrainsMono.variable} flex min-h-screen flex-col`}
      >
        <header className="container-page flex items-center justify-between pt-8 pb-16 md:pt-16">
          <Link href="/" className="text-base font-semibold text-slate-950">
            vrg.
          </Link>
          <nav className="flex gap-5">
            <NavLink href="/info">Information</NavLink>
            <NavLink href="/posts">Writing</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="container-page py-8">
          <hr className="mb-4 border-slate-200" />
          <div className="flex items-center justify-between gap-4 font-mono text-xs text-slate-500 md:text-sm">
            <span>© 2020 – 2026 / Vivekananda Reddy</span>
            <Link
              href="https://github.com/vivekanandareddy3"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline transition-colors hover:text-slate-900"
            >
              GitHub
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
