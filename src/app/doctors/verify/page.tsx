'use client';
import { useState } from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

export default function DoctorVerificationPortal() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleStartVerification = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 text-center border border-slate-100">
          <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Request Sent</h2>
          <p className="text-slate-600">
            Our dispensing pharmacy has received your file. They will contact you directly to complete your medical intake and ID verification.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <UserCheck className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Prescriber Verification</h1>
        <p className="text-slate-600 mb-8">
          To prescribe medication on this platform, our partner pharmacy requires a credentials check. Click below to initiate the process.
        </p>
        <button 
          onClick={handleStartVerification} 
          disabled={loading}
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50"
        >
          {loading ? 'Routing to Pharmacy...' : 'Initiate Pharmacy Verification'}
        </button>
      </div>
    </div>
  );
}