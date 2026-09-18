'use client';

import { useState } from 'react';
import { ShieldCheck, FileText, ArrowRight, Activity, Camera } from 'lucide-react';

export default function DoctorVerificationPortal() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartVerification = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/stripe/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          doctorId: 'doc_' + Math.random().toString(36).substr(2, 9),
          email: 'doctor@example.com' 
        })
      });

      const data = await res.json();
      
      if (data.url) {
        // Redirect to the securely hosted Stripe Identity flow
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
          <ShieldCheck className="mx-auto h-16 w-16 text-blue-600 mb-4" />
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Doctor Identity Verification
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            To legally prescribe medications on our platform, you must complete a secure identity check. We use Stripe Identity for bank-level security.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What you will need:</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 text-blue-600">
                    <FileText className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Government ID & License</h3>
                  <p className="mt-1 text-slate-500">Your state-issued medical license and a valid driver's license or passport.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 text-blue-600">
                    <Camera className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Device with a Camera</h3>
                  <p className="mt-1 text-slate-500">You will be prompted to take a live selfie to match your face to your medical ID.</p>
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
              className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-xl md:px-10 transition-all shadow-md hover:shadow-xl disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center">
                  <Activity className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Initializing Secure Portal...
                </span>
              ) : (
                <span className="flex items-center">
                  Verify Medical Identity <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              Your data is end-to-end encrypted and processed securely by Stripe Identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
