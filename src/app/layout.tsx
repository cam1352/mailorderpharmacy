import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Pill, Search, ShoppingCart, User, PlayCircle, Menu } from "lucide-react";
import { HamburgerMenu } from '@/components/HamburgerMenu';
import Chatbot from '@/components/Chatbot';
import I18nProvider from '@/components/I18nProvider';
import LanguageSelector from '@/components/LanguageSelector';
import GoogleMapsLocalSEO from '@/components/GoogleMapsSEO';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mail Order Pharmacy | Fast Online Prescription Delivery",
  description: "Secure, reliable mail order pharmacy. Get your prescriptions delivered directly to your door with fast shipping and licensed pharmacist support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleMapsLocalSEO lang="en" />
      </head>
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-screen`}>
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4 z-50">
              <HamburgerMenu />
              <Link href="/" className="flex items-center gap-2 font-black tracking-tight text-indigo-800 shrink-0">
                <Pill className="h-8 w-8 md:h-10 md:w-10 text-indigo-600" />
                <span className="text-base sm:text-lg md:text-2xl leading-tight whitespace-nowrap">
                  Mail Order <span className="text-indigo-500">Pharmacy</span>
                </span>
              </Link>
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center gap-4 md:gap-6 shrink-0">
              <LanguageSelector />
              <Link href="/medications" className="flex flex-col items-center justify-center text-gray-700 hover:text-indigo-700">
                <Search className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[10px] font-bold mt-0.5 hidden md:block">Search</span>
              </Link>
              <Link href="/prescriptions" className="text-gray-700 hover:text-indigo-700 font-semibold text-sm hidden lg:block">
                Prescriptions
              </Link>
              <Link href="/demo" className="text-indigo-600 hover:text-indigo-800 font-bold text-sm flex items-center gap-1 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100 hidden sm:flex">
                <PlayCircle className="w-4 h-4" /> <span className="hidden md:inline">Try Demo</span>
              </Link>
              <Link href="/login" className="flex flex-col items-center justify-center text-gray-700 hover:text-indigo-700 ml-1">
                <User className="w-6 h-6" />
                <span className="text-[10px] font-bold mt-0.5 hidden md:block">Sign In</span>
              </Link>
              <Link href="/checkout" className="flex flex-col items-center justify-center text-gray-700 hover:text-indigo-700 relative ml-1">
                <ShoppingCart className="w-6 h-6" />
                <span className="text-[10px] font-bold mt-0.5 hidden md:block">Cart</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
          {children}
        </main>

        <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Pill className="w-5 h-5 text-indigo-500"/>
                Medication Delivery Service
              </h3>
              <p className="text-sm">Your modern, transparent online pharmacy delivering care to your door.</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Service Areas (Canada)</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/locations/toronto" className="hover:text-indigo-400">Toronto Pharmacy Delivery</Link></li>
                <li><Link href="/locations/vancouver" className="hover:text-indigo-400">Vancouver Pharmacy Delivery</Link></li>
                <li><Link href="/locations/calgary" className="hover:text-indigo-400">Calgary Pharmacy Delivery</Link></li>
                <li><Link href="/locations/montreal" className="hover:text-indigo-400">Montreal Pharmacy Delivery</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Service Areas (USA)</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/locations/new-york" className="hover:text-indigo-400">New York Pharmacy Delivery</Link></li>
                <li><Link href="/locations/california" className="hover:text-indigo-400">California Pharmacy Delivery</Link></li>
                <li><Link href="/locations/texas" className="hover:text-indigo-400">Texas Pharmacy Delivery</Link></li>
                <li><Link href="/locations/florida" className="hover:text-indigo-400">Florida Pharmacy Delivery</Link></li>
                <li className="pt-2"><Link href="/locations" className="text-indigo-300 font-bold hover:text-indigo-100 flex items-center gap-1">View All 300 Locations &rarr;</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Help & Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/faq" className="hover:text-indigo-400">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-400">Contact Pharmacist</Link></li>
                <li><Link href="/privacy" className="hover:text-indigo-400">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-indigo-400">Terms of Service</Link></li>
                <li><Link href="/blog" className="hover:text-indigo-400 font-semibold text-indigo-300">Health Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            &copy; {new Date().getFullYear()} Medication Delivery Service. All rights reserved.
          </div>
        </footer>
      <Chatbot />
        </I18nProvider>
      </body>
    </html>
  );
}


