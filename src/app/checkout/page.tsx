"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "@/components/CheckoutForm";
import { CreditCard, ShieldCheck } from "lucide-react";

// In production, use process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = loadStripe("pk_test_mock_123");

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "med_demo" }], amount: 2500 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#4f46e5',
    },
  };
  
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3 text-gray-900">
          <CreditCard className="w-8 h-8 text-indigo-600" />
          Secure Checkout
        </h1>
        <p className="text-gray-500 mb-8 flex items-center gap-1.5 text-sm">
          <ShieldCheck className="w-4 h-4 text-green-500" /> Payment processing is encrypted and PCI-DSS compliant via Stripe.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
          <p className="text-sm text-yellow-800 font-semibold leading-relaxed">
            * Please note: Delivery charges may apply based on your location. Delivery can be postponed due to severe weather, courier delays, or inventory shortages at the partnered pharmacy.
          </p>
        </div>

        {clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 font-medium">Initializing secure payment gateway...</p>
          </div>
        )}
      </div>
    </div>
  );
}
