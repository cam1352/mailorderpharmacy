"use client";

import { useState } from "react";
import { CreditCard, ShieldCheck, CheckCircle2, UploadCloud } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ 
    firstName: '', lastName: '', email: '', address: '', city: '', zipCode: '' 
  });
  const [idFile, setIdFile] = useState<File | null>(null);
  const [scriptFile, setScriptFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: any) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // In a real app, upload files to S3 and get URLs back. 
      // Here we pass a simulated string indicating they were attached.
      const payload = {
        ...formData,
        idImage: idFile ? 'Attached Securely' : 'Missing',
        scriptImage: scriptFile ? 'Attached Securely' : 'Missing'
      };

      await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch(err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto py-24 px-4 text-center">
        <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Documents securely submitted</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          Your profile, ID, and prescription have been securely routed to the dispensing pharmacist. 
          They will verify your files and contact you shortly to coordinate fulfillment.
        </p>
        <Link href="/" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3 text-gray-900">
          <ShieldCheck className="w-8 h-8 text-indigo-600" />
          Secure Intake Portal
        </h1>
        <p className="text-gray-500 mb-8 flex items-center gap-1.5 text-sm">
          <ShieldCheck className="w-4 h-4 text-green-500" /> End-to-end encrypted transfer to dispensing pharmacy.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
          <p className="text-sm text-blue-800 font-semibold leading-relaxed">
            * Complete your profile and upload your documents below. You will not be billed today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="123 Main St" />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
              <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Medical Documents</h3>
            
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
              <label className="block text-sm font-medium text-gray-800 mb-2">Upload Government ID</label>
              <div className="flex items-center gap-3">
                <div className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex-1 text-sm text-gray-500 truncate">
                  {idFile ? idFile.name : 'Take a photo of your Driver License or Passport'}
                </div>
                <label className="cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-2">
                  <UploadCloud className="w-4 h-4" /> Browse
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setIdFile)} />
                </label>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
              <label className="block text-sm font-medium text-gray-800 mb-2">Upload Paper Prescription (Optional)</label>
              <div className="flex items-center gap-3">
                <div className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex-1 text-sm text-gray-500 truncate">
                  {scriptFile ? scriptFile.name : 'Take a photo of your prescription'}
                </div>
                <label className="cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-2">
                  <UploadCloud className="w-4 h-4" /> Browse
                  <input type="file" accept="image/*,application/pdf" className="hidden" onChange={(e) => handleFileChange(e, setScriptFile)} />
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">If your doctor is sending this electronically via E-Prescribe, leave this blank.</p>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 mt-8 flex items-center justify-center"
          >
            {isSubmitting ? "Encrypting & Sending..." : "Submit File to Pharmacy"}
          </button>
        </form>
      </div>
    </div>
  );
}