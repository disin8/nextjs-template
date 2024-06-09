import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Minimal template',
    template: '%s | Minimal template',
  },
  description: 'Next.js minimal template',
  openGraph: {
    title: 'Minimal template',
    description: 'Next.js minimal template',
    siteName: 'Minimal template',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-background dark:text-white',
        inter.className,
      )}
    >
      <body className="antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
