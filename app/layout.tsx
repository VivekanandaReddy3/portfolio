// app/layout.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google';


const JetBrainsMonoFont = JetBrains_Mono({
  display: 'swap',
  variable: '--font-monospace',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'Vivekananda Reddy - Portfolio',
  description: 'Portfolio website of Vivekananda Reddy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${JetBrainsMonoFont.variable}`}>
        {/* Navbar */}
        <header className="pt-8 md:pt-16 md:w-2/3 pb-16 px-4 md:px-0 flex justify-between max-w-7xl mx-auto w-full sm:w-full lg:w-1/2 xl:w-2/5 2xl:w-1/4">
          <Link href="/">
            <h1 className="text-base font-semibold text-black">vrg.</h1>
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/info"
              className="text-slate-950 text-sm tracking-tighter font-mono font-semibold"
            >
              Information
            </Link>
            <Link
              href="/posts"
              className="text-slate-950 text-sm tracking-tighter font-mono font-semibold"
            >
              Writing
            </Link>
            <Link
              href="/contact"
              className="text-slate-950 text-sm tracking-tighter font-mono font-semibold"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex justify-between mx-auto  bg-[#f9fafd]  px-6 py-6 md:w-1/2 max-w-7xl w-full sm:w-full lg:w-1/2 xl:w-2/5 2xl:w-1/4 font-mono">

          <div className="max-w-7xl mx-auto">
            {/* Horizontal Line */}
            <hr className="border-gray-300 mb-4" />
            
            {/* Footer Content */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>© 2020 - 2025 / Vivekananda Reddy</span>
              <Link 
                href="https://github.com/vivekanandareddy3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}