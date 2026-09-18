import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_123', {
  apiVersion: '2025-01-27.acacia' as any, // fallback to latest known if necessary
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { doctorId, email } = body;

    // Create a Stripe Identity Verification Session
    // We specifically request a document (Medical License / ID)
    const verificationSession = await stripe.identity.verificationSessions.create({
      type: 'document',
      metadata: {
        doctorId: doctorId || 'unknown_doctor',
        email: email || 'unknown@example.com',
        verificationType: 'medical_license'
      },
      options: {
        document: {
          require_id_number: true,
          require_matching_selfie: true, // Prove the doctor uploading it is the one on the ID
        }
      },
      // Redirects back to our portal after they finish scanning their ID
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/doctors/verify?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ 
      client_secret: verificationSession.client_secret,
      url: verificationSession.url
    });

  } catch (error: any) {
    console.error('Stripe Identity Error:', error);
    return NextResponse.json(
      { error: 'Failed to create verification session', details: error.message },
      { status: 500 }
    );
  }
}
