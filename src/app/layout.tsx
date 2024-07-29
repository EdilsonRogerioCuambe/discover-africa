import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discover Africa',
  description:
    'Aprenda tudo sobre o continente africano, história, cultura, economia e muito mais.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className}`}>
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}
