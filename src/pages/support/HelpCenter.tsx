import { Search, Book, MessageCircle, Phone } from 'lucide-react';
import PolicyLayout from '../../components/policies/PolicyLayout';

const categories = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Browse our comprehensive guides and documentation',
    link: '#'
  },
  {
    icon: MessageCircle,
    title: 'Community Forum',
    description: 'Connect with other users and share experiences',
    link: '#'
  },
  {
    icon: Phone,
    title: 'Direct Support',
    description: 'Get in touch with our support team',
    link: '/#contact'
  }
];

export default function HelpCenter() {
  return (
    <PolicyLayout title="Help Center">
      <div className="space-y-12">
        {/* Search Section */}
        <div className="relative">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.link}
              className="block p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <category.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
            </a>
          ))}
        </div>

        {/* Popular Topics */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Getting Started Guide',
              'Account Management',
              'Billing & Subscriptions',
              'API Documentation',
              'Security Features',
              'Integration Guide'
            ].map((topic) => (
              <a
                key={topic}
                href="#"
                className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {topic}
              </a>
            ))}
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}
