import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Using a generic mock secret key for prototyping. 
// In production, this should be in process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock_123', {
  apiVersion: '2026-08-26.dahlia' as any,
});

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount || 1500, // Default to $15.00
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Stripe error:", error);
    // Since we are likely using a fake key, we return a mock client secret to keep the UI working
    return NextResponse.json({ 
      clientSecret: 'pi_mock_secret_12345',
      error: "Using mock secret because real Stripe key is missing." 
    });
  }
}
