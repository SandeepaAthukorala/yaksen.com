import PolicyLayout from '../../components/policies/PolicyLayout';

export default function PrivacyPolicy() {
  return (
    <PolicyLayout 
      title="Privacy Policy" 
      lastUpdated="2/19/2025"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email, contact details.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, improve, and personalize our services.</li>
              <li>To communicate updates, offers, and support messages.</li>
              <li>To ensure security and prevent unauthorized access.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Sharing Your Information</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>We <strong>do not sell</strong> your data.</li>
              <li>We may share data with service providers for functionality and analytics.</li>
              <li>We may disclose data to comply with legal obligations.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p>We implement industry-standard security measures to protect your data. However, no system is 100% secure.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Your Privacy Rights</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>You can access, update, or request deletion of your personal data.</li>
              <li>You can opt-out of certain data collection practices.</li>
              <li>For requests, contact us at <strong>contact@yaksen.com</strong>.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. External Links</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p>We are not responsible for the privacy policies of third-party sites linked on our website.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p>We may update this Privacy Policy periodically. Check this page for updates.</p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}
