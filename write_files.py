import os

api_code = '''import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const intake = await prisma.intake.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        city: data.city,
        zipCode: data.zipCode,
      }
    });

    return NextResponse.json({ success: true, intake });
  } catch (error) {
    console.error('Intake Error:', error);
    return NextResponse.json({ success: false, error: 'Database Error' }, { status: 500 });
  }
}
'''
os.makedirs('src/app/api/intake', exist_ok=True)
with open('src/app/api/intake/route.ts', 'w', encoding='utf-8') as f:
    f.write(api_code)

checkout_code = '''"use client";

import { useState } from "react";
import { CreditCard, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', address: '', city: '', zipCode: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Received</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          Your prescription request has been securely routed to our partner pharmacy. 
          They will contact you directly to process your payment and coordinate fulfillment.
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
          <CreditCard className="w-8 h-8 text-indigo-600" />
          Secure Checkout
        </h1>
        <p className="text-gray-500 mb-8 flex items-center gap-1.5 text-sm">
          <ShieldCheck className="w-4 h-4 text-green-500" /> Your information is encrypted and transmitted directly to the dispensing pharmacy.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
          <p className="text-sm text-yellow-800 font-semibold leading-relaxed">
            * Please note: You will not be charged today. Our partnered pharmacy handles all billing, insurance verification, and fulfillment directly.
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

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
              <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 mt-4 flex items-center justify-center"
          >
            {isSubmitting ? "Routing to Pharmacy..." : "Submit Order to Pharmacy"}
          </button>
        </form>
      </div>
    </div>
  );
}
'''
with open('src/app/checkout/page.tsx', 'w', encoding='utf-8') as f:
    f.write(checkout_code)