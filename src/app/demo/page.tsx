"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, Upload, CreditCard, CheckCircle, ArrowRight, PlayCircle } from 'lucide-react';
import { VideoPlayer } from '@/components/VideoPlayer';

export default function DemoPage() {
  const [step, setStep] = useState(1);
  const [demoSearch, setDemoSearch] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleSimulateUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-4 flex items-center justify-center gap-3">
          <PlayCircle className="w-10 h-10 text-indigo-600" />
          Interactive Platform Demo
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Watch our 1-minute demo video below, or experience it yourself with the interactive sandbox.
        </p>
      </div>

      {/* Demo Video Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-indigo-100 relative aspect-video flex items-center justify-center">
          <VideoPlayer />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-12 max-w-4xl mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0 rounded-full"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-indigo-600 z-0 rounded-full transition-all duration-500" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
          
          <div className={`relative z-10 flex flex-col items-center justify-center w-12 h-12 rounded-full border-4 font-bold ${step >= 1 ? 'bg-indigo-600 border-indigo-200 text-white' : 'bg-white border-gray-200 text-gray-400'}`}>
            1
          </div>
          <div className={`relative z-10 flex flex-col items-center justify-center w-12 h-12 rounded-full border-4 font-bold transition-colors duration-500 ${step >= 2 ? 'bg-indigo-600 border-indigo-200 text-white' : 'bg-white border-gray-200 text-gray-400'}`}>
            2
          </div>
          <div className={`relative z-10 flex flex-col items-center justify-center w-12 h-12 rounded-full border-4 font-bold transition-colors duration-500 ${step >= 3 ? 'bg-indigo-600 border-indigo-200 text-white' : 'bg-white border-gray-200 text-gray-400'}`}>
            3
          </div>
        </div>
        <div className="flex justify-between mt-3 text-sm font-semibold text-gray-500 px-2">
          <span>Find Medication</span>
          <span>Upload Script</span>
          <span>Checkout</span>
        </div>
      </div>

      {/* Step 1: Search */}
      {step === 1 && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10 text-center animate-in fade-in zoom-in duration-300">
          <Search className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 1: Find Your Medication</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Patients start by searching our extensive database of 800+ medications to verify we carry their exact dosage. Try searching below!
          </p>
          <div className="max-w-md mx-auto relative mb-8">
            <input 
              type="text" 
              value={demoSearch}
              onChange={(e) => setDemoSearch(e.target.value)}
              placeholder="Type 'Lisinopril' or 'Amoxicillin'..."
              className="w-full border-2 border-indigo-100 rounded-lg py-4 px-6 text-lg focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {demoSearch.length > 2 && (
              <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl text-left overflow-hidden z-20">
                <div 
                  className="p-4 hover:bg-indigo-50 cursor-pointer flex justify-between items-center border-b"
                  onClick={() => setStep(2)}
                >
                  <div>
                    <strong className="text-indigo-900 block">{demoSearch} 20mg</strong>
                    <span className="text-xs text-gray-500">In Stock - Ready for Delivery</span>
                  </div>
                  <ArrowRight className="text-indigo-400 w-5 h-5" />
                </div>
              </div>
            )}
          </div>
          <button 
            onClick={() => setStep(2)}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Skip Search Simulator &rarr;
          </button>
        </div>
      )}

      {/* Step 2: Upload */}
      {step === 2 && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10 text-center animate-in fade-in slide-in-from-right-8 duration-300">
          <Upload className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 2: Secure Prescription Upload</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Once they find their medication, patients securely snap a photo or upload a PDF of their doctor's script for our partnered pharmacists to review.
          </p>
          
          <div 
            onClick={handleSimulateUpload}
            className={`max-w-md mx-auto border-4 border-dashed rounded-2xl p-12 cursor-pointer transition-all ${isUploading ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50'}`}
          >
            {isUploading ? (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
                <p className="font-bold text-indigo-800">Encrypting & Uploading...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Upload className="w-10 h-10 text-gray-400 mb-3" />
                <p className="font-bold text-gray-700">Click here to simulate uploading a file</p>
                <p className="text-sm text-gray-500 mt-2">(HIPAA Compliant Transfer)</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Checkout */}
      {step === 3 && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10 text-center animate-in fade-in slide-in-from-right-8 duration-300">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 3: Seamless Checkout & Delivery</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            The script is approved! The patient just enters their payment and delivery details, and the local partnered pharmacy dispatches the order.
          </p>
          
          <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 text-left mb-8">
            <h4 className="font-bold text-gray-900 border-b pb-2 mb-4">Order Summary Summary</h4>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Medication (Demo)</span>
              <span className="font-semibold">$15.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Standard Delivery</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>
            <div className="flex justify-between pt-4 border-t font-bold text-lg">
              <span>Total</span>
              <span>$15.00</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setStep(1)}
              className="px-6 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Restart Demo
            </button>
            <Link 
              href="/"
              className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 flex items-center gap-2 transition-colors"
            >
              Exit Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
