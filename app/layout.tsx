// app/layout.tsx
import localFont from 'next/font/local'
import './globals.css'

const saansFont = localFont({
  src: '../public/fonts/saans-font.woff2',
  variable: '--font-saans',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={saansFont.variable}>
      <body>{children}</body>
    </html>
  )
}