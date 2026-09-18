'use client';

import { useState } from 'react';
import { ShieldCheck, Link as LinkIcon, DollarSign, FileText, CheckCircle2, User, Send, CreditCard } from 'lucide-react';

export default function PharmacistDashboard() {
  const [price, setPrice] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [paymentLink, setPaymentLink] = useState<string | null>(null);
  const [paymentType, setPaymentType] = useState<'msp' | 'private'>('private');

  const handleGenerateLink = () => {
    setIsGenerating(true);
    // Simulate API call to Stripe to generate a payment link
    setTimeout(() => {
      setPaymentLink(`https://buy.stripe.com/test_${Math.random().toString(36).substring(2, 10)}`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Pharmacist Dashboard</h1>
            <p className="text-slate-500 mt-1">Review prescriptions and manage billing.</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold text-sm">
            <ShieldCheck className="w-4 h-4" />
            Verified Pharmacist
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Patient Queue Column */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Patient Queue</h2>
            
            {/* Active Patient Card */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-blue-500 relative cursor-pointer">
              <div className="absolute top-3 right-3 flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                <CheckCircle2 className="w-3 h-3" /> ID Verified
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-slate-100 p-3 rounded-full">
                  <User className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Sarah Jenkins</h3>
                  <p className="text-xs text-slate-500">DOB: 1988-04-12 • BC, Canada</p>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mt-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Prescription</p>
                <p className="text-sm font-medium text-slate-900">Finasteride 1mg (90 days)</p>
                <p className="text-xs text-slate-500 mt-1">Dr. Michael Chen</p>
              </div>
            </div>

            {/* Pending Patient */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-3 rounded-full">
                  <User className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">David Miller</h3>
                  <p className="text-xs text-slate-500">Amoxicillin 500mg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Billing & Action Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  Billing & Fulfillment
                </h2>
              </div>
              
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* Billing Type Toggle */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Billing Method</label>
                  <div className="flex p-1 bg-slate-100 rounded-xl">
                    <button 
                      onClick={() => setPaymentType('private')}
                      className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${paymentType === 'private' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Private / Out-of-Pocket
                    </button>
                    <button 
                      onClick={() => setPaymentType('msp')}
                      className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${paymentType === 'msp' ? 'bg-white shadow-sm text-emerald-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      MSP / PharmaCare
                    </button>
                  </div>
                </div>

                {/* Conditional Billing UI */}
                {paymentType === 'private' ? (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Total Price to Charge Patient</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <DollarSign className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          type="number"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          placeholder="89.99"
                          className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Includes drug cost, dispensing fee, and shipping.</p>
                    </div>

                    {!paymentLink ? (
                      <button
                        onClick={handleGenerateLink}
                        disabled={!price || isGenerating}
                        className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md hover:shadow-xl disabled:opacity-50"
                      >
                        {isGenerating ? 'Connecting to Stripe...' : 'Generate Stripe Payment Link'}
                      </button>
                    ) : (
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-in zoom-in-95">
                        <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                          <LinkIcon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-bold text-emerald-900 mb-2">Payment Link Generated!</h3>
                        <div className="bg-white p-3 rounded-lg border border-emerald-100 flex items-center justify-between mb-4">
                          <code className="text-sm text-slate-600 truncate mr-4">{paymentLink}</code>
                          <button className="text-blue-600 font-bold text-sm hover:text-blue-800">Copy</button>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all">
                          <Send className="w-4 h-4" /> Send Link to Patient
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="w-6 h-6 text-slate-400" />
                        <h3 className="font-bold text-slate-900">PharmaNet Integration</h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-4">
                        This prescription will be routed through the provincial PharmaNet system. The $10.00 dispensing fee will be billed directly to MSP.
                      </p>
                      <button className="w-full px-8 py-4 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl transition-all shadow-md">
                        Process via PharmaNet
                      </button>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
