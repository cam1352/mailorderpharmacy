import fs from 'fs';
import path from 'path';

export default async function FAQPage() {
  const filePath = path.join(process.cwd(), 'src/data/faqs.json');
  let faqs: any[] = [];
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    faqs = JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to load FAQs:", error);
  }

  // Group by category
  const groupedFaqs = faqs.reduce((acc: any, faq: any) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold text-indigo-900 mb-4 text-center">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-12 text-lg">We've compiled answers to our 100 most common questions below.</p>
      
      <div className="space-y-12">
        {Object.keys(groupedFaqs).map((category, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-indigo-800 mb-6 pb-2 border-b border-gray-100">{category}</h2>
            <div className="space-y-6">
              {groupedFaqs[category].map((faq: any) => (
                <div key={faq.id} className="group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
