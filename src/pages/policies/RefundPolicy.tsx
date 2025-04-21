import PolicyLayout from '../../components/policies/PolicyLayout';

export default function RefundPolicy() {
  return (
    <PolicyLayout 
      title="Refund Policy" 
      lastUpdated={new Date().toLocaleDateString()}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Refund Eligibility</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p className="mb-4">We offer refunds under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service was not delivered as described</li>
              <li>Technical issues prevented service delivery</li>
              <li>Request made within 30 days of purchase</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Refund Process</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p className="mb-4">To request a refund:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact our support team</li>
              <li>Provide order details and reason for refund</li>
              <li>Allow up to 5-7 business days for processing</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Non-Refundable Items</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p className="mb-4">The following are not eligible for refunds:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom development work that has been delivered</li>
              <li>Services already fully rendered</li>
              <li>Subscription fees after 30 days</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
            <p>If you have any questions about our refund policy, please contact us at <a href="mailto:support@yaksen.com">support@yaksen.com</a></p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}
