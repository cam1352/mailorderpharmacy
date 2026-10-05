import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getCityFromHost, getDomainFromHost } from '@/utils/host'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const host = await getDomainFromHost();
  const city = await getCityFromHost();
  
  let title = 'Mailorderpharmacy — Leading Specialists & Solutions | Official';
  let description = 'Looking for premier solutions from Mailorderpharmacy? Discover proven results, certified specialists, and fast quotes. Contact us today!';
  let name = 'Mailorderpharmacy';
  let url = 'https://mailorderpharmacy.io';
  
  if (city) {
    title = ${city} Pharmacy — Leading Specialists & Solutions | Official;
    description = Looking for premier solutions from  Pharmacy? Fast, secure prescription delivery in . Discover proven results.;
    name = ${city} Pharmacy;
    url = https://System.Management.Automation.Internal.Host.InternalHost;
  }
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: name,
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const city = await getCityFromHost();
  const host = await getDomainFromHost();
  
  const name = city ? ${city} Pharmacy : "Mailorderpharmacy";
  const url = city ? https://System.Management.Automation.Internal.Host.InternalHost : "https://mailorderpharmacy.io";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "url": url,
    "description": "Looking for premier solutions? Discover proven results, certified specialists, and fast quotes. Contact us today!"
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavBar city={city} />
        <main>
          {children}
        </main>

        <footer className="bg-slate-950 text-slate-400 py-12 mt-20 border-t border-slate-900 text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Pharmacy</h4>
                <ul className="space-y-2">
                  <li><a href="/medications" className="hover:text-indigo-400 transition">Medications</a></li>
                  <li><a href="/prescriptions" className="hover:text-indigo-400 transition">Prescriptions</a></li>
                  <li><a href="/faq" className="hover:text-indigo-400 transition">FAQ</a></li>
                  <li><a href="/blog" className="hover:text-indigo-400 transition">Health Blog</a></li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Our Network</h4>
                <ul className="space-y-2 flex flex-col">
                  <li><a href="https://mailorderpharmacy.io" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Mail Order Pharmacy</a></li>
                  <li><a href="https://pharmacycalgary.ca" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Calgary Pharmacy</a></li>
                  <li><a href="https://pharmacytoronto.ca" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Toronto Pharmacy</a></li>
                  <li><a href="https://pharmacyvancouver.ca" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Vancouver Pharmacy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact</h4>
                <p>pharmacy@mailorderpharmacy.io</p>
                <p className="mt-2">Available 24/7 online</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs">
              &copy; {new Date().getFullYear()} Mail Order Pharmacy. All rights reserved.
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}
