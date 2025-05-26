import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { scrollToSection } from "../../utils/scroll";
import { ArrowRight, Zap, Clock, Workflow, Bot, LineChart, Cog } from "lucide-react";

export default function AutomationPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/5" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-[url('https://res.cloudinary.com/das8wrfd1/image/upload/v1739949359/Service_Header_xo8zrn.webp')] opacity-5 dark:opacity-10"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl mb-6">
              <Workflow className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Process Automation
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Identify inefficiencies in your workflows and implement automation solutions to increase productivity and reduce operational costs.
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Streamline Your Business Operations
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We help businesses identify bottlenecks, automate repetitive tasks, and optimize workflows to save time and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Workflow className="h-6 w-6 text-primary" />,
                title: "Workflow Automation",
                description: "Streamline complex business processes with intelligent workflow automation."
              },
              {
                icon: <Bot className="h-6 w-6 text-primary" />,
                title: "RPA Solutions",
                description: "Robotic Process Automation to handle repetitive, rule-based tasks with precision."
              },
              {
                icon: <Zap className="h-6 w-6 text-primary" />,
                title: "Integration Services",
                description: "Connect your existing systems and applications for seamless data flow."
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "Time-Saving Tools",
                description: "Reduce manual effort and focus your team on high-value activities."
              },
              {
                icon: <LineChart className="h-6 w-6 text-primary" />,
                title: "Process Analytics",
                description: "Gain insights into your operations with detailed process analytics."
              },
              {
                icon: <Cog className="h-6 w-6 text-primary" />,
                title: "Custom Automation",
                description: "Tailor-made automation solutions designed for your specific business needs."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => scrollToSection('contact')}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Automation",
                price: "$3,500",
                description: "For small businesses looking to automate simple processes",
                features: [
                  "Process assessment",
                  "Basic workflow automation",
                  "Single system integration",
                  "Basic reporting",
                  "3 months of support"
                ]
              },
              {
                title: "Business Automation",
                price: "$8,500",
                description: "Comprehensive automation for growing businesses",
                features: [
                  "In-depth process analysis",
                  "Advanced workflow automation",
                  "Multiple system integrations",
                  "Custom dashboards",
                  "RPA implementation",
                  "6 months of support"
                ],
                highlighted: true
              },
              {
                title: "Enterprise Automation",
                price: "Custom",
                description: "End-to-end automation solutions for large organizations",
                features: [
                  "Enterprise-wide process optimization",
                  "Complex workflow automation",
                  "Full system integration",
                  "Advanced analytics & reporting",
                  "AI-powered automation",
                  "12 months of priority support"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.highlighted ? 'ring-2 ring-primary transform scale-105' : ''} cursor-pointer`}
                onClick={() => scrollToSection('contact')}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {plan.title}
                  </h3>
                  <p className="text-4xl font-bold text-primary mb-4">
                    {plan.price}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="mr-2 text-primary">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Business Processes?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's discuss how our automation solutions can help you increase efficiency and reduce costs.
          </p>
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => scrollToSection('contact'), 100);
            }}
            className="inline-flex items-center py-3 px-6 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}