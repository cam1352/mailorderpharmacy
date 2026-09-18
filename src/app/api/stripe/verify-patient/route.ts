import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_123', {
  apiVersion: '2025-01-27.acacia' as any,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { patientId, email } = body;

    // Create a Stripe Identity Verification Session for the Patient
    const verificationSession = await stripe.identity.verificationSessions.create({
      type: 'document',
      metadata: {
        patientId: patientId || 'unknown_patient',
        email: email || 'patient@example.com',
        verificationType: 'patient_kyc'
      },
      options: {
        document: {
          require_id_number: true,
          require_matching_selfie: true,
          // Stripe automatically detects State (US), Province (Canada), or Passports globally!
          allowed_types: ['driving_license', 'passport', 'id_card'] 
        }
      },
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/checkout?verified=true&session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ 
      client_secret: verificationSession.client_secret,
      url: verificationSession.url
    });

  } catch (error: any) {
    console.error('Stripe Patient Identity Error:', error);
    return NextResponse.json(
      { error: 'Failed to create patient verification session', details: error.message },
      { status: 500 }
    );
  }
}
