import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getCityFromHost } from '@/utils/host'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mail Order Pharmacy',
  description: 'Fast, secure prescription delivery',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const city = await getCityFromHost();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar city={city} />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}