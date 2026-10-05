import Link from 'next/link';
import { Pill, FileText, CreditCard, MapPin, ExternalLink, ShieldCheck, Clock, Truck } from 'lucide-react';
import { VideoPlayer } from '@/components/VideoPlayer';
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || '';

  let displayCity = 'Mail Order';
  if (host.includes('toronto')) displayCity = 'Toronto';
  if (host.includes('vancouver')) displayCity = 'Vancouver';
  if (host.includes('calgary')) displayCity = 'Calgary';

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center leading-tight">
        Welcome to {displayCity} Pharmacy <br className="hidden md:block" />
        <span className="text-indigo-600">Your Trusted Healthcare Partner</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl leading-relaxed">
        Manage your prescriptions, explore our database of over 800 medications, and get your daily pill packs delivered straight to your door with our secure and fast service.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <FileText className="h-12 w-12 text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Upload Prescriptions</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">Securely upload and manage your medical prescriptions online through our encrypted portal.</p>
          <Link href="/prescriptions" className="mt-auto bg-indigo-50 text-indigo-700 font-semibold py-3 px-6 rounded-xl hover:bg-indigo-100 w-full transition-colors">
            View Prescriptions
          </Link>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <Pill className="h-12 w-12 text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Medication Database</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">Search our extensive, medically-reviewed database for safety info, compounds, and side effects.</p>
          <Link href="/medications" className="mt-auto bg-indigo-50 text-indigo-700 font-semibold py-3 px-6 rounded-xl hover:bg-indigo-100 w-full transition-colors">
            Search Medications
          </Link>
        </article>

        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <ShieldCheck className="h-12 w-12 text-indigo-500 mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Direct Connection</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">Your health request is instantly securely routed to a licensed local pharmacist in our network.</p>
          <Link href="/prescriptions" className="mt-auto bg-indigo-50 text-indigo-700 font-semibold py-3 px-6 rounded-xl hover:bg-indigo-100 w-full transition-colors">
            Connect with Pharmacist
          </Link>
        </article>
      </div>
      
      {/* Supercharged SEO Content Block */}
      <section className="w-full max-w-5xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 mb-16 text-left">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Pharmacy Services in {displayCity}</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At {displayCity} Pharmacy, we are dedicated to revolutionizing how you access and manage your healthcare. We combine the convenience of modern digital platforms with the trusted expertise of certified clinical pharmacists to provide unparalleled service. Whether you need a quick prescription refill, a detailed medication review, or automated monthly deliveries, our team is equipped to handle your unique medical needs with precision and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><Truck className="w-5 h-5 mr-2 text-indigo-600"/> Fast & Secure Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              We eliminate the hassle of waiting in line at traditional pharmacies. Our secure dispatch network ensures that your essential medications, custom compounds, and daily pill packs are delivered directly to your doorstep with full tracking and temperature-controlled packaging if required.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><Clock className="w-5 h-5 mr-2 text-indigo-600"/> 24/7 Digital Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Take complete control of your health portfolio using our advanced online portal. Instantly request refills, transfer prescriptions from other clinics, review drug interaction warnings, and track your historical medication usage from any device at any time.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 w-full py-20 bg-indigo-900 text-white rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">How to Navigate Our Platform</h2>
            <div className="flex justify-center mb-8">
              <Link href="/prescriptions" className="bg-white text-indigo-900 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-indigo-50 transition-all transform hover:scale-105">
                See a Pharmacist Now
              </Link>
            </div>
            <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto leading-relaxed">
              Watch this quick interactive tutorial to learn how to search for medications, upload your prescriptions securely, and connect with a clinical pharmacist in under 2 minutes.
            </p>
          </div>
          <div className="bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-indigo-500/30 relative aspect-video flex items-center justify-center group transform transition-transform hover:scale-[1.02] duration-500">
            <VideoPlayer />
          </div>
        </div>
      </section>
    </div>
  );
}
