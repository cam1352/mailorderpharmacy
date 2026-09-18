import fs from 'fs';
import path from 'path';
import Link from 'next/link';

import { RealisticPill } from '@/components/RealisticPill';

export default async function MedicationsPage({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const filePath = path.join(process.cwd(), 'src/data/medications.json');
  let medications = [];
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    medications = JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to load medications:", error);
  }

  const resolvedSearchParams = await searchParams;
  const searchQuery = resolvedSearchParams.search?.toLowerCase() || '';
  
  if (searchQuery) {
    medications = medications.filter((med: any) => 
      med.name.toLowerCase().includes(searchQuery) || 
      med.description.toLowerCase().includes(searchQuery)
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        {searchQuery ? `Search Results for "${resolvedSearchParams.search}" (${medications.length})` : `Medication Database (${medications.length} results)`}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medications.map((med: any) => (
          <Link href={`/medications/${med.id}`} key={med.id} className="block">
            <div className="bg-white rounded-lg shadow border p-5 hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-indigo-600">{med.name}</h2>
                  <span className="text-sm text-gray-500 font-semibold">{med.dosage}</span>
                </div>
                <div className="flex-shrink-0 w-24 h-24 border border-gray-100 rounded-lg overflow-hidden shadow-sm relative flex items-center justify-center bg-gray-50">
                  <RealisticPill color={med.pill_color} shape={med.pill_shape} dosage={med.dosage} />
                </div>
              </div>
              <p className="text-gray-700 text-sm flex-grow line-clamp-3 mb-4">
                {med.description}
              </p>
              <div className="text-sm font-semibold text-gray-500 mt-auto">
                Compound: {med.compound}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
