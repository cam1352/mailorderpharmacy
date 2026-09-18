export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-8">Terms and Conditions of Use</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: September 13, 2026</p>
      
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p>
            Welcome to Medication Delivery Service ("we," "us," or "our"). By accessing or using our website, mobile application, or any of our pharmacy and delivery services (collectively, the "Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Services. These Terms apply to all users in the United States and Canada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Medical Emergencies</h2>
          <p className="font-semibold text-red-600 bg-red-50 p-4 rounded-lg">
            DO NOT USE THE SERVICES FOR MEDICAL EMERGENCIES. IF YOU BELIEVE YOU HAVE A MEDICAL EMERGENCY, CALL 911 (US/CANADA) OR YOUR LOCAL EMERGENCY SERVICE IMMEDIATELY. Our Services are not a replacement for primary care or urgent care.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Platform Services & Third-Party Pharmacies</h2>
          <p className="mb-2">
            Medication Delivery Service operates strictly as a technology platform. <strong>We are not a pharmacy and we do not dispense medications.</strong> Our platform facilitates the connection between you, independent licensed pharmacies, and third-party delivery services. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Licensed Pharmacies:</strong> All medications are prepared, verified, and dispensed by independent, fully licensed third-party pharmacies. Any clinical questions or pharmacist consultations are handled directly by the licensed pharmacists at these partnered facilities.</li>
            <li><strong>Delivery Services & Disclaimers:</strong> Once dispensed, your medications are handed off to independent third-party delivery services (e.g., local couriers, national postal services) for delivery to your door. <strong>Please note that delivery charges may apply. Additionally, delivery can be postponed or delayed</strong> due to unforeseen circumstances, including but not limited to severe weather, courier delays, or inventory shortages at the partnered pharmacy.</li>
            <li><strong>Valid Prescription Required:</strong> Our partnered pharmacies will only fulfill orders upon receipt of a valid prescription issued by a licensed healthcare provider. The dispensing pharmacists reserve the right, in their professional judgment, to refuse to fill any prescription.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy and Health Information</h2>
          <p>
            Your privacy is of the utmost importance to us. The collection, use, and disclosure of your personal and personal health information are governed by our <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>. By using the Services, you consent to our data practices, which are designed to comply with the Health Insurance Portability and Accountability Act (HIPAA) in the US and the Personal Information Protection and Electronic Documents Act (PIPEDA) in Canada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Billing</h2>
          <p>
            You agree to pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. We partner with third-party payment processors (e.g., Stripe) and we do not store your full credit card information. We also coordinate with insurance providers, but you remain ultimately responsible for any co-pays or balances not covered by your plan.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Medication Delivery Service and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Services; (b) any conduct or content of any third party on the Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. We will provide notice of material changes via our website or email. Your continued use of the Services after the effective date of the revised Terms constitutes your acceptance of the terms.
          </p>
        </section>
      </div>
    </div>
  );
}
