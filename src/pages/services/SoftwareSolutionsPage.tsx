import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { scrollToSection } from "../../utils/scroll";
import { ArrowRight, Database, Server, Shield, BarChart, Settings, Layers } from "lucide-react";

export default function SoftwareSolutionsPage() {
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
              <Layers className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Software Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored software solutions designed to address your specific business needs, streamline operations, and drive growth.
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Custom Software for Modern Businesses
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We develop bespoke software solutions that solve your unique business challenges and give you a competitive edge.
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
                icon: <Layers className="h-6 w-6 text-primary" />,
                title: "Custom Development",
                description: "Tailor-made software solutions designed specifically for your business requirements."
              },
              {
                icon: <Database className="h-6 w-6 text-primary" />,
                title: "Database Solutions",
                description: "Robust database design and implementation for efficient data management."
              },
              {
                icon: <Server className="h-6 w-6 text-primary" />,
                title: "API Development",
                description: "Seamless integration with third-party services and existing systems."
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Secure Architecture",
                description: "Built with security best practices to protect your valuable business data."
              },
              {
                icon: <BarChart className="h-6 w-6 text-primary" />,
                title: "Analytics & Reporting",
                description: "Comprehensive data visualization and reporting capabilities."
              },
              {
                icon: <Settings className="h-6 w-6 text-primary" />,
                title: "Scalable Infrastructure",
                description: "Future-proof solutions that can grow with your business needs."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1"
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
                title: "Starter",
                price: "$5,000",
                description: "For small businesses with specific software needs",
                features: [
                  "Custom software application",
                  "Basic user management",
                  "Standard database integration",
                  "Basic reporting features",
                  "3 months of support"
                ]
              },
              {
                title: "Business",
                price: "$15,000",
                description: "Comprehensive solutions for growing businesses",
                features: [
                  "Advanced custom software",
                  "Complex user management",
                  "Multiple database integrations",
                  "Advanced reporting & analytics",
                  "API development",
                  "6 months of support"
                ],
                highlighted: true
              },
              {
                title: "Enterprise",
                price: "Custom",
                description: "Full-scale solutions for large organizations",
                features: [
                  "Enterprise-grade architecture",
                  "High-performance infrastructure",
                  "Advanced security features",
                  "Multiple system integrations",
                  "Custom analytics dashboard",
                  "12 months of priority support"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.highlighted ? 'ring-2 ring-primary transform scale-105' : ''}`}
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
            Ready to Transform Your Business with Custom Software?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's discuss how our software solutions can help you overcome challenges and achieve your goals.
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