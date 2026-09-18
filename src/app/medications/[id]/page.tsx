import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, AlertTriangle, Info, Beaker } from 'lucide-react';

import { RealisticPill } from '@/components/RealisticPill';
import { MedicalMonograph } from '@/components/MedicalMonograph';

function getMedication(id: string) {
  const filePath = path.join(process.cwd(), 'src/data/medications.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const medications = JSON.parse(fileContents);
    return medications.find((m: any) => m.id === id);
  } catch (error) {
    return null;
  }
}

export default async function MedicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const med = getMedication(resolvedParams.id);

  if (!med) {
    return <div className="p-8 text-center text-red-500 font-bold text-2xl">Medication not found (ID: {resolvedParams.id})</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link href="/medications" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-6 font-semibold">
        <ArrowLeft className="w-4 h-4" /> Back to Search
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          <div className="bg-gray-50 p-8 flex flex-col items-center justify-center border-r border-gray-200">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 border border-gray-200 shadow-md bg-white flex items-center justify-center transform scale-125">
              <RealisticPill color={med.pill_color} shape={med.pill_shape} dosage={med.dosage} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">{med.name}</h2>
            <p className="text-gray-500 font-medium mb-6">{med.dosage}</p>
            
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <p className="text-xs text-gray-400 mt-3 text-center">Requires valid prescription</p>
          </div>

          <div className="col-span-2 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{med.name} ({med.dosage})</h1>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800 mb-2">
                  <Info className="w-5 h-5 text-indigo-500" /> What is it used for?
                </h3>
                <p className="text-gray-700 leading-relaxed bg-indigo-50 p-4 rounded-lg">
                  {med.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800 mb-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" /> Comprehensive Safety Information
                </h3>
                <div className="text-gray-700 leading-relaxed bg-orange-50 p-6 rounded-lg space-y-4">
                  <p className="font-bold text-orange-900">{med.safety_info}</p>
                  <p><strong>Black Box Warning:</strong> This medication carries significant risks if not taken exactly as prescribed by your partnered licensed healthcare provider. Do not alter your dosage or abruptly stop taking this medication without consulting a physician, as this can lead to severe withdrawal symptoms or rebound conditions. Always take this medication with a full glass of water. If you experience difficulty breathing, swelling of the face, lips, tongue, or throat, seek emergency medical attention immediately (call 911), as these are signs of a life-threatening allergic reaction.</p>
                  <p><strong>Contraindications:</strong> Do not use this medication if you are pregnant, planning to become pregnant, or nursing, unless specifically directed by your doctor. It is contraindicated in patients with severe hepatic impairment, severe renal failure, or a known hypersensitivity to the active compound {med.compound}. Consuming alcohol while taking this medication may significantly increase the risk of adverse neurological and hepatic side effects. Avoid operating heavy machinery or driving until you know how this medication affects you, as it may cause drowsiness, dizziness, or impaired judgment.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800 mb-2">
                  <Beaker className="w-5 h-5 text-purple-500" /> Compound Data
                </h3>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <code className="text-purple-700 font-mono font-bold">{med.compound}</code>
                  <p className="text-sm text-gray-600 mt-1">Chemical Structure Identifier</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Medication Specific FAQ */}
        <div className="mt-8 bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Frequently Asked Questions about {med.name}</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What is the best time of day to take {med.name}?</h3>
              <p className="text-gray-600">For optimal absorption and to minimize side effects, {med.name} should typically be taken at the same time every day. If it causes stomach upset, taking it with meals is recommended unless your prescribing doctor explicitly advises an empty stomach.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can I drink alcohol while taking {med.name}?</h3>
              <p className="text-gray-600">No. Combining alcohol with {med.name} can increase the severity of side effects such as dizziness, drowsiness, and liver strain. It is strongly advised to avoid alcohol for the duration of your treatment.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">What happens if I miss a dose of {med.name} ({med.dosage})?</h3>
              <p className="text-gray-600">Take the missed dose as soon as you remember. However, if it is almost time for your next scheduled dose, skip the missed dose and resume your normal schedule. Never double the dose to catch up.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Are there any foods I should avoid while on {med.compound}?</h3>
              <p className="text-gray-600">You should generally avoid grapefruit and grapefruit juice, as they can interact with the enzymes in your liver that process {med.name}, leading to dangerously high levels of the drug in your bloodstream.</p>
            </div>
          </div>
        </div>

        {/* 3500+ Word Medical Monograph */}
        <MedicalMonograph name={med.name} compound={med.compound} dosage={med.dosage} />

      </div>
    </div>
  );
}
