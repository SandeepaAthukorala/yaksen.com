import { ChevronDown } from 'lucide-react';
import PolicyLayout from '../../components/policies/PolicyLayout';
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/scroll';

const faqs = [
  {
    question: "What services does YAKSEN provide?",
    answer: "YAKSEN provides AI-driven business solutions including content creation, process automation, cloud computing, cybersecurity, and data analytics services."
  },
  {
    question: "How do I get started with YAKSEN services?",
    answer: "You can get started by contacting our team through the contact form on our website. We'll schedule a consultation to understand your needs and recommend the best solutions."
  },
  {
    question: "What are your pricing plans?",
    answer: "Our pricing varies based on the services and scale of implementation required. Contact us for a customized quote tailored to your needs."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide 24/7 customer support through multiple channels including email, phone, and live chat."
  },
  {
    question: "How secure are your AI solutions?",
    answer: "We implement industry-standard security measures and comply with international data protection regulations to ensure the safety of your data."
  }
];

export default function FAQ() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      scrollToSection('contact');
    }, 100);
  };

  return (
    <PolicyLayout title="Frequently Asked Questions">
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <summary className="flex justify-between items-center cursor-pointer p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {faq.question}
              </h3>
              <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          </details>
        ))}

        <div className="mt-12 p-6 bg-primary/10 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </PolicyLayout>
  );
}
