export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-8">Privacy Policy & Notice of Privacy Practices</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: September 13, 2026</p>
      
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
          <p className="font-bold text-indigo-900 mb-2">Notice to US and Canadian Residents:</p>
          <p className="text-indigo-800 text-sm">
            This policy is designed to comply with the Health Insurance Portability and Accountability Act (HIPAA), the California Consumer Privacy Act (CCPA), the Personal Information Protection and Electronic Documents Act (PIPEDA), and applicable provincial health privacy laws (e.g., PHIPA in Ontario).
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="mb-2">We collect information that identifies, relates to, describes, or could reasonably be linked, directly or indirectly, with a particular consumer or device ("Personal Information"). Specifically, we collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identifiers:</strong> Name, address, email, phone number, date of birth.</li>
            <li><strong>Protected Health Information (PHI):</strong> Prescription records, medical history, allergies, physician information, and health insurance details.</li>
            <li><strong>Financial Information:</strong> Payment card details (processed securely via our third-party PCI-compliant processors).</li>
            <li><strong>Digital/Network Activity:</strong> IP address, browser type, interaction with our application.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="mb-2">We use your Personal and Health Information for the following business and healthcare operations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To dispense and deliver your medications accurately.</li>
            <li>To consult with you and your healthcare providers regarding your treatment.</li>
            <li>To process payments and submit claims to your insurance provider.</li>
            <li>To improve our digital platform and user experience.</li>
            <li>To comply with federal, state, and provincial pharmacy reporting laws.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
          <p className="mb-2">As a technology platform, we act as an intermediary. We do not sell your personal data. We share your information strictly to facilitate your care:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Partnered Pharmacies:</strong> We securely transmit your prescriptions and health data to our network of independent, licensed third-party pharmacies so they can legally dispense your medications and provide clinical consultations.</li>
            <li><strong>Healthcare Providers:</strong> With your prescribing doctors or specialists to coordinate care or clarify prescriptions.</li>
            <li><strong>Insurance Companies:</strong> To verify coverage and process claims on your behalf or on behalf of the dispensing pharmacy.</li>
            <li><strong>Delivery Services:</strong> With trusted third-party delivery partners (e.g., local couriers, FedEx, Canada Post) utilizing plain, unmarked packaging to protect your privacy during transit.</li>
            <li><strong>Legal Obligations:</strong> When required by law, subpoena, or regulatory pharmacy audits.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
          <p>
            We implement industry-standard administrative, physical, and technical safeguards to protect your data. All sensitive information (including PHI and payment details) is encrypted in transit using TLS technology and at rest. Access to your health records is strictly restricted to licensed pharmacists and authorized support staff on a need-to-know basis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Privacy Rights</h2>
          <p className="mb-2">Depending on your jurisdiction (e.g., California, Ontario), you have specific rights regarding your data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right to Access:</strong> You can request a copy of your medical records and personal data.</li>
            <li><strong>Right to Correction:</strong> You can ask us to amend incorrect health information.</li>
            <li><strong>Right to Deletion:</strong> You can request deletion of your account (subject to medical record retention laws which require pharmacies to keep prescription logs for several years).</li>
            <li><strong>Accounting of Disclosures:</strong> You have the right to know who we have shared your health information with for purposes other than treatment or payment.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Our Privacy Officer</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, or wish to exercise your rights, please contact our Privacy Officer at:<br/>
            <strong>Email:</strong> privacy@medicationdeliveryservice.com<br/>
            <strong>Phone:</strong> 1-800-555-0199
          </p>
        </section>
      </div>
    </div>
  );
}