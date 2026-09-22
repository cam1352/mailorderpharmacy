import Link from 'next/link';
import { Pill, FileText, CreditCard, MapPin, ExternalLink } from 'lucide-react';
import { VideoPlayer } from '@/components/VideoPlayer';
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || '';

  // Localized SEO Pages
  if (host.includes('pharmacytoronto.ca')) {
    return <CityLandingPage city="Toronto" domain="pharmacytoronto.ca" />;
  }
  if (host.includes('pharmacyvancouver.ca')) {
    return <CityLandingPage city="Vancouver" domain="pharmacyvancouver.ca" />;
  }
  if (host.includes('pharmacycalgary.ca')) {
    return <CityLandingPage city="Calgary" domain="pharmacycalgary.ca" />;
  }

  // Default Main Application (mailorderpharmacy.io)
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Welcome to Mail Order Pharmacy
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

// Sub-component for Localized SEO Landing Pages
function CityLandingPage({ city, domain }: { city: string, domain: string }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 pt-10 pb-32 w-full absolute top-0 left-0 z-50">
      <div className="max-w-3xl w-full text-center">
        <div className="inline-flex items-center justify-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm mb-8 shadow-sm">
          <MapPin className="w-4 h-4" />
          Proudly Serving {city}, Canada
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
          The #1 Mail Order Pharmacy in <span className="text-indigo-600">{city}</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
          Skip the line at the local {city} pharmacies. Get your prescriptions safely and securely delivered directly to your door anywhere in the {city} metropolitan area within 24 hours.
        </p>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 text-left mb-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">You have reached our local {city} portal.</h3>
          <p className="text-slate-600 mb-8 text-lg">
            Our central platform, <strong className="text-indigo-600">MailOrderPharmacy.io</strong>, handles all patient intake, secure prescription uploads, and medication deliveries across Canada. Please click below to enter the main secure platform.
          </p>
          <a href="https://mailorderpharmacy.io" className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-lg shadow-indigo-600/30">
            Enter MailOrderPharmacy.io <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-slate-500 max-w-2xl mx-auto">
           <div>
             <div className="font-black text-3xl text-slate-800 mb-2">10k+</div>
             <div className="text-sm font-medium">Patients in {city}</div>
           </div>
           <div>
             <div className="font-black text-3xl text-slate-800 mb-2">24hr</div>
             <div className="text-sm font-medium">Local Delivery Time</div>
           </div>
           <div>
             <div className="font-black text-3xl text-slate-800 mb-2">100%</div>
             <div className="text-sm font-medium">Secure & Confidential</div>
           </div>
        </div>
      </div>
    </div>
  );
}