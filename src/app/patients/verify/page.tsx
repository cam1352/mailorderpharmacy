'use client';

import { useState } from 'react';
import { ShieldCheck, UserCheck, ArrowRight, Activity, Globe } from 'lucide-react';

export default function PatientVerificationPortal() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartVerification = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/stripe/verify-patient', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          patientId: 'pat_' + Math.random().toString(36).substr(2, 9),
          email: 'patient@example.com' 
        })
      });

      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Failed to initialize verification.');
      }
    } catch (err: any) {
      setError(err.message || 'Network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <ShieldCheck className="mx-auto h-16 w-16 text-emerald-600 mb-4" />
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Patient Identity Verification
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            To proceed to checkout, our doctors require a quick identity check. This ensures medical compliance and protects you from identity theft.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-8 sm:p-12">
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Valid Government ID</h3>
                  <p className="mt-1 text-slate-500">
                    Our system accepts <strong>US State IDs, Canadian Provincial IDs, and International Passports.</strong> The AI will automatically detect your region.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600">
                    <UserCheck className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Quick Selfie Match</h3>
                  <p className="mt-1 text-slate-500">
                    You'll be asked to take a quick photo of your face to prove the ID belongs to you.
                  </p>
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleStartVerification}
              disabled={loading}
              className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-xl md:px-10 transition-all shadow-md hover:shadow-xl disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center">
                  <Activity className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Connecting to Secure Portal...
                </span>
              ) : (
                <span className="flex items-center">
                  Verify My Identity <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              Your data is encrypted by Stripe Identity and is only visible to your presiding physician.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
