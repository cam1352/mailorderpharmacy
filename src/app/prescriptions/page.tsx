"use client";

import { useState } from 'react';
import { Upload, File, CheckCircle, ShieldAlert } from 'lucide-react';

export default function PrescriptionsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);
      setFile(null);
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Send Documents to Pharmacist</h1>
        <p className="text-gray-600 mb-8">
          Securely upload your prescriptions, medical records, or insurance documents for our partnered pharmacists to review.
        </p>

        {isSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 flex flex-col items-center text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-green-800 mb-2">Document Sent Successfully!</h2>
            <p className="text-green-700 mb-6">
              Our partnered pharmacists will review your document and get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full"
            >
              Upload Another Document
            </button>
          </div>
        ) : (
          <form onSubmit={handleUpload} className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative">
              <input 
                type="file" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
              
              {file ? (
                <div className="flex flex-col items-center">
                  <File className="w-12 h-12 text-indigo-600 mb-3" />
                  <p className="text-lg font-semibold text-gray-800">{file.name}</p>
                  <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  <p className="text-sm text-indigo-600 mt-2 font-semibold">Click to change file</p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-lg font-semibold text-gray-700 mb-1">Drag and drop or click to browse</p>
                  <p className="text-sm text-gray-500">Supports PDF, JPG, PNG (Max 10MB)</p>
                </div>
              )}
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-indigo-900">HIPAA Compliant Transfer</h4>
                <p className="text-sm text-indigo-800 mt-1">
                  Your documents are encrypted end-to-end and stored securely. Only the partnered licensed pharmacists fulfilling your order have access to your medical records.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={!file || isUploading}
                className={`w-full font-bold py-3 px-4 rounded-full text-lg transition-colors flex justify-center items-center gap-2
                  ${!file || isUploading 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md'
                  }`}
              >
                {isUploading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Encrypting and Sending...
                  </>
                ) : (
                  'Send to Pharmacist'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
