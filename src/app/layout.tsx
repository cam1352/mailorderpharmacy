import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Pill, MapPin } from 'lucide-react'
import { getCityFromHost } from '@/utils/host'

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
        {city ? (
          /* Localized Navigation Bar */
          <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight">
                <Pill className="text-indigo-400 w-6 h-6" /> 
                {city} <span className="font-light text-slate-300">Pharmacy</span>
              </Link>
              <div className="hidden md:flex gap-6 font-medium text-sm text-slate-300">
                <Link href="/services" className="hover:text-white transition">Services</Link>
                <Link href="/how-it-works" className="hover:text-white transition">How it Works</Link>
                <Link href="/blog" className="hover:text-white transition">Health Blog</Link>
                <Link href="/faq" className="hover:text-white transition">FAQ</Link>
              </div>
              <a href="https://mailorderpharmacy.io" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-indigo-700 transition">
                Order Prescriptions
              </a>
            </div>
          </nav>
        ) : (
          /* Main Site Navigation Bar */
          <nav className="bg-white text-slate-900 shadow-sm sticky top-0 z-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight">
                <Pill className="text-indigo-600 w-6 h-6" /> 
                MailOrderPharmacy<span className="font-light text-slate-500">.io</span>
              </Link>
              <div className="hidden md:flex gap-6 font-medium text-sm text-slate-600">
                <Link href="/medications" className="hover:text-indigo-600 transition">Medications</Link>
                <Link href="/prescriptions" className="hover:text-indigo-600 transition">Prescriptions</Link>
                <Link href="/checkout" className="hover:text-indigo-600 transition">Checkout</Link>
              </div>
              <Link href="/login" className="bg-slate-900 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-slate-800 transition">
                Patient Portal
              </Link>
            </div>
          </nav>
        )}
        
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}