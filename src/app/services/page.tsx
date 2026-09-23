import { getCityFromHost } from '@/utils/host';
import Link from 'next/link';

export default async function Services() {
  const city = await getCityFromHost() || "Canada";
  
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-6">Our Services in {city}</h1>
        <p className="text-xl text-slate-600 mb-12">We provide comprehensive mail order pharmacy services to all residents of {city}.</p>
        
        <div className="grid gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
             <h2 className="text-2xl font-bold mb-4">Same-Day Prescription Delivery</h2>
             <p className="text-slate-600">Get your medications delivered directly to your door anywhere in the {city} metropolitan area.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
             <h2 className="text-2xl font-bold mb-4">Auto-Refill Management</h2>
             <p className="text-slate-600">Never run out of your daily medications. Our system automatically coordinates with your {city} doctors.</p>
          </div>
        </div>
      </div>
    </div>
  );
}