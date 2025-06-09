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
  title: 'Vivekananda Reddy',
  description: 'Software Developer | Passionate about code, design & problem-solving | Germany.',
icons: {
    icon: '/favicon.ico', // Add this to reference the favicon
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${JetBrainsMonoFont.variable}`}>
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
        <footer className="py-7 md:w-2/3 w-full sm:w-full lg:w-1/2 xl:w-2/5 2xl:w-1/4 mx-auto sm:px-2">

          <div className=" mx-auto">
            {/* Horizontal Line */}
            <hr className="border-gray-300 mb-4" />
            
            {/* Footer Content */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span className='font-mono'>© 2020 - 2025 / Vivekananda Reddy</span>
              <Link 
                href="https://github.com/vivekanandareddy3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors font-mono"
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