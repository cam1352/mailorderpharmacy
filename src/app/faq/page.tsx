import { getCityFromHost } from '@/utils/host';
import faqs from '@/data/faqs.json';

export default async function FAQIndex() {
  const city = await getCityFromHost() || "Canada";
  
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-6">Frequently Asked Questions in {city}</h1>
        <p className="text-xl text-slate-600 mb-12">Everything you need to know about mail order pharmacy delivery in the {city} area.</p>
        
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.id} className="bg-white p-6 rounded-xl shadow-sm border">
               <h3 className="text-lg font-bold mb-2">{faq.question.replace(/\{city\}/g, city)}</h3>
               <p className="text-slate-600">{faq.answer.replace(/\{city\}/g, city)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}