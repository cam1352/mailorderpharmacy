import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function NeighborhoodPage({ params }: { params: Promise<{ city: string, neighborhood: string }> }) {
  const resolvedParams = await params;
  const cityName = resolvedParams.city.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const neighborhoodName = resolvedParams.neighborhood.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <Link href={`/locations/${resolvedParams.city}`} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-8 font-semibold">
        <ArrowLeft className="w-4 h-4" /> Back to {cityName}
      </Link>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-indigo-900 mb-6 leading-tight">
          Pharmacy Delivery in {neighborhoodName}, {cityName}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Living in <strong>{neighborhoodName}</strong>? Skip the line at your local drugstore. We provide fast, secure, and affordable prescription delivery directly to your door in {neighborhoodName} and the greater {cityName} area.
        </p>
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Transfer your prescription today</h2>
          <p className="text-indigo-700 mb-6">
            Connect with partnered licensed pharmacists ready to assist {neighborhoodName} residents.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg mb-4 transition-transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="prose prose-lg prose-indigo max-w-none text-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Best Online Pharmacy for {neighborhoodName}</h2>
        <p className="mb-6">
          Managing your healthcare shouldn't be a hassle, especially when living in a busy area like <strong>{neighborhoodName}</strong>. Utilizing our digital <strong>online pharmacy</strong> platform offers unparalleled convenience for {neighborhoodName} locals. We connect you with licensed, top-tier pharmacies that handle the complex dispensing process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">Delivery to {neighborhoodName}</h3>
            <p>
              Navigating traffic in {cityName} to wait in a physical pharmacy line is a thing of the past. Our partnered courier network ensures your medications arrive safely in discreet packaging directly to your home or office in {neighborhoodName}.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">Seamless Medication Management</h3>
            <p>
              Our intuitive digital dashboard allows patients in {neighborhoodName} to track refills, manage daily pill packs, and instantly transfer existing prescriptions from other local pharmacies with just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
