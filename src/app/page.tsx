import Link from 'next/link';
import { Pill, FileText, CreditCard } from 'lucide-react';
import { VideoPlayer } from '@/components/VideoPlayer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Welcome to Medication Delivery Service
      </h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
        Manage your prescriptions, explore our database of over 800 medications, and get your daily pill packs delivered straight to your door.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center">
          <FileText className="h-12 w-12 text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Upload Prescriptions</h2>
          <p className="text-gray-600 mb-4">Easily upload and manage your prescriptions online.</p>
          <Link href="/prescriptions" className="mt-auto bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded hover:bg-indigo-200">
            View Prescriptions
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center">
          <Pill className="h-12 w-12 text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Medication Database</h2>
          <p className="text-gray-600 mb-4">Search our extensive database of safety info and compounds.</p>
          <Link href="/medications" className="mt-auto bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded hover:bg-indigo-200">
            Search Medications
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center">
          <CreditCard className="h-12 w-12 text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Easy Checkout</h2>
          <p className="text-gray-600 mb-4">Pay securely online with your credit card.</p>
          <Link href="/checkout" className="mt-auto bg-indigo-100 text-indigo-700 font-semibold py-2 px-4 rounded hover:bg-indigo-200">
            Go to Checkout
          </Link>
        </div>
      </div>

      {/* Interactive Video Tutorial Section */}
      <section className="mt-16 w-full py-16 bg-indigo-900 text-white rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">How to Navigate Our Platform</h2>
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
              Watch this quick interactive tutorial to learn how to search for medications, upload your prescriptions, and checkout in under 2 minutes.
            </p>
          </div>

          <div className="bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-indigo-500/30 relative aspect-video flex items-center justify-center group">
            <VideoPlayer />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <div className="w-12 h-12 bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h4 className="font-bold mb-2">Search Medications</h4>
              <p className="text-indigo-200 text-sm">Use our global search bar to find exact dosages.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h4 className="font-bold mb-2">Upload Prescription</h4>
              <p className="text-indigo-200 text-sm">Securely transfer your doctor's script via HIPAA-compliant upload.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h4 className="font-bold mb-2">Checkout & Delivery</h4>
              <p className="text-indigo-200 text-sm">Complete your profile and get medications delivered to your door.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
