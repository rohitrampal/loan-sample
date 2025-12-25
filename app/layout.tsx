import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instant Money - Fast Personal Loans Online | Quick Approval',
  description: 'Get instant personal loans online with quick approval. No paperwork, transparent process, and trusted lending partners. Apply now for fast-track loans.',
  keywords: 'instant loan, personal loan, quick loan approval, online loan, fast loan, loan application',
  authors: [{ name: 'Instant Money' }],
  openGraph: {
    title: 'Instant Money - Fast Personal Loans Online',
    description: 'Get instant personal loans online with quick approval. No paperwork, transparent process.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

