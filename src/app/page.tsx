import Link from 'next/link';
import { Pill, FileText, CreditCard, MapPin, ExternalLink } from 'lucide-react';
import { VideoPlayer } from '@/components/VideoPlayer';
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || '';

  let displayCity = 'Mail Order';
  if (host.includes('toronto')) displayCity = 'Toronto';
  if (host.includes('vancouver')) displayCity = 'Vancouver';
  if (host.includes('calgary')) displayCity = 'Calgary';

  // Default Main Application (mailorderpharmacy.io)
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Welcome to {displayCity} Pharmacy
      </h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
        Manage your prescriptions, explore our database of over 800 medications, and get your daily pill packs delivered straight to your door.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <FileText className="h-12 w-12 text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Upload Prescriptions</h2>
          <p className="text-gray-600 mb-4">Easily upload and manage your prescriptions online.</p>
          <Link href="/prescriptions" className="mt-auto bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded hover:bg-indigo-200 w-full">
            View Prescriptions
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <Pill className="h-12 w-12 text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Medication Database</h2>
          <p className="text-gray-600 mb-4">Search our extensive database of safety info and compounds.</p>
          <Link href="/medications" className="mt-auto bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded hover:bg-indigo-200 w-full">
            Search Medications
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <CreditCard className="h-12 w-12 text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Easy Checkout</h2>
          <p className="text-gray-600 mb-4">Pay securely online with your credit card.</p>
          <Link href="/checkout" className="mt-auto bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded hover:bg-indigo-200 w-full">
            Go to Checkout
          </Link>
        </div>
      </div>

      <section className="mt-16 w-full py-16 bg-indigo-900 text-white rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">How to Navigate Our Platform</h2>
            <div className="flex justify-center mb-6"><Link href="/prescriptions" className="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-slate-100 transition-colors">See a Pharmacist</Link></div>
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
              Watch this quick interactive tutorial to learn how to search for medications, upload your prescriptions, and checkout in under 2 minutes.
            </p>
          </div>
          <div className="bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-indigo-500/30 relative aspect-video flex items-center justify-center group">
            <VideoPlayer />
          </div>
        </div>
      </section>
    </div>
  );
}

