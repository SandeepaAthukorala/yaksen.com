import PolicyLayout from '../../components/policies/PolicyLayout';
import PolicySection from '../../components/policies/PolicySection';

export default function TermsConditions() {
  return (
    <PolicyLayout 
      title="Terms and Conditions" 
      lastUpdated={new Date().toLocaleDateString()}
    >
      <div className="space-y-8">
        <PolicySection title="1. Agreement to Terms">
          <p className="text-gray-700 dark:text-gray-200">
            By accessing our services, you agree to be bound by these terms and conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </PolicySection>

        <PolicySection title="2. Use License">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-200">
              Permission is granted to temporarily access the materials (information or software) on YAKSEN's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>
        </PolicySection>

        <PolicySection title="3. Disclaimer">
          <p className="text-gray-700 dark:text-gray-200">
            The materials on YAKSEN's website are provided on an 'as is' basis. YAKSEN makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </PolicySection>

        <PolicySection title="4. Limitations">
          <p className="text-gray-700 dark:text-gray-200">
            In no event shall YAKSEN or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on YAKSEN's website.
          </p>
        </PolicySection>

        <PolicySection title="5. Revisions">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-200">
              YAKSEN may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the current version of these terms of service.
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              Any changes to our terms and conditions will be reflected on this page with an updated revision date.
            </p>
          </div>
        </PolicySection>

        <PolicySection title="6. Governing Law">
          <p className="text-gray-700 dark:text-gray-200">
            These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </PolicySection>
      </div>
    </PolicyLayout>
  );
}
