import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'dummy_key');
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// The Master System Prompt that trains the Chatbot
const SYSTEM_PROMPT = `
You are the official Pharmacy Assistant AI for "Medication Delivery Service".
Your goal is to be helpful, professional, and medically compliant.

COMPANY POLICIES & TRAINING:
1. Medications: We offer lifestyle and essential medications including Ozempic, Wegovy, Finasteride, Sildenafil (Viagra), and basic antibiotics.
2. How to Pay: Patients must complete a medical intake form and upload their ID for verification. A licensed pharmacist will review the file and send the patient a custom secure Stripe Payment Link.
3. Pricing: We do not list exact prices because they are determined by the pharmacist based on dosage and whether insurance/MSP is applied.
4. Refunds: Due to FDA and Health Canada regulations, prescription medications CANNOT be returned or refunded once they have left the pharmacy. However, if there is a shipping error or damaged package, we will issue a full refund via Stripe.
5. Medical Advice: You are an AI, NOT a doctor. You cannot diagnose conditions. If a patient asks for medical advice, tell them to complete the intake form so a licensed physician can review their case.

Maintain a polite, concise, and helpful tone. Keep answers relatively short.
`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      // Fallback if no API key is provided
      return NextResponse.json({ 
        reply: "I am currently undergoing system maintenance. Please contact our pharmacists directly for assistance!" 
      });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Construct the conversation history for Gemini
    const formattedHistory = history.map((msg: any) => ({
      role: msg.role === 'bot' ? 'model' : 'user',
      parts: [{ text: msg.text }],
    }));

    // Start chat session with system instruction
    const chat = model.startChat({
      systemInstruction: {
        role: 'system',
        parts: [{ text: SYSTEM_PROMPT }]
      },
      history: formattedHistory,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { reply: "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment." },
      { status: 500 }
    );
  }
}
