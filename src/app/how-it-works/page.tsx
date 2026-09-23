import { getCityFromHost } from '@/utils/host';

export default async function HowItWorks() {
  const city = await getCityFromHost() || "Canada";
  
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-6">How it Works</h1>
        <p className="text-xl text-slate-600 mb-12">Getting your prescriptions delivered in {city} is simple.</p>
        
        <div className="space-y-8">
          <div className="flex gap-6 items-start bg-white p-8 rounded-2xl shadow-sm border">
             <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
             <div>
               <h2 className="text-2xl font-bold mb-2">Transfer your Prescription</h2>
               <p className="text-slate-600">Tell us what local {city} pharmacy currently holds your prescription, and we will transfer it seamlessly.</p>
             </div>
          </div>
          <div className="flex gap-6 items-start bg-white p-8 rounded-2xl shadow-sm border">
             <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
             <div>
               <h2 className="text-2xl font-bold mb-2">Secure Packaging</h2>
               <p className="text-slate-600">Our licensed pharmacists review and pack your medications in discreet, secure packaging.</p>
             </div>
          </div>
          <div className="flex gap-6 items-start bg-white p-8 rounded-2xl shadow-sm border">
             <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-xl shrink-0">3</div>
             <div>
               <h2 className="text-2xl font-bold mb-2">Fast Delivery</h2>
               <p className="text-slate-600">A courier delivers the package directly to your {city} address.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}