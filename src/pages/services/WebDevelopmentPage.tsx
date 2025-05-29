import React, { useState } from "react";
import PackageInquiryForm from "../../components/PackageInquiryForm";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { scrollToSection } from "../../utils/scroll";
import { ArrowRight, Code, Zap, Globe, Smartphone, Palette, Gauge } from "lucide-react";
import RequirementFormPopup from "../../components/RequirementFormPopup";
import MediaGallery from "../../components/services/MediaGallery";
import { webDevelopmentGalleryData } from "../../data/galleryData";

export default function WebDevelopmentPage() {
  useScrollToTop();
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleOpenPopup = (packageData) => {
    setSelectedPackage(packageData);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedPackage(null);
  };

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
              <Globe className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Web Development
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Modern, responsive websites and web applications built with the latest technologies to enhance your online presence and user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Elevate Your Digital Presence
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We create stunning, high-performance websites that drive results and deliver exceptional user experiences.
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
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Custom Development",
                description: "Tailored solutions built from the ground up to meet your specific business requirements."
              },
              {
                icon: <Smartphone className="h-6 w-6 text-primary" />,
                title: "Responsive Design",
                description: "Websites that look and function perfectly on all devices, from desktops to smartphones."
              },
              {
                icon: <Palette className="h-6 w-6 text-primary" />,
                title: "Modern UI/UX",
                description: "Intuitive interfaces and engaging user experiences that keep visitors coming back."
              },
              {
                icon: <Gauge className="h-6 w-6 text-primary" />,
                title: "Performance Optimization",
                description: "Lightning-fast load times and smooth interactions for optimal user satisfaction."
              },
              {
                icon: <Zap className="h-6 w-6 text-primary" />,
                title: "SEO-Friendly",
                description: "Built with search engine optimization in mind to improve your visibility online."
              },
              {
                icon: <Globe className="h-6 w-6 text-primary" />,
                title: "Scalable Architecture",
                description: "Future-proof solutions that can grow and evolve with your business needs."
              }
            ].map((feature, index) => (
              <div
                key={index}
                onClick={() => scrollToSection('contact')}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
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
                title: "Basic",
                price: "$1,999",
                description: "Perfect for small businesses just getting started",
                features: [
                  "5-page responsive website",
                  "Basic SEO setup",
                  "Contact form integration",
                  "Mobile-friendly design",
                  "1 month of support"
                ]
              },
              {
                title: "Professional",
                price: "$3,999",
                description: "Ideal for growing businesses with specific needs",
                features: [
                  "10-page responsive website",
                  "Advanced SEO optimization",
                  "Content management system",
                  "E-commerce functionality",
                  "Social media integration",
                  "3 months of support"
                ],
                highlighted: true
              },
              {
                title: "Enterprise",
                price: "Custom",
                description: "Comprehensive solutions for established organizations",
                features: [
                  "Unlimited pages",
                  "Custom web application development",
                  "Advanced analytics integration",
                  "Performance optimization",
                  "API development & integration",
                  "12 months of priority support"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                onClick={() => handleOpenPopup({
                  id: index,
                  title: plan.title,
                  priceRange: plan.price,
                  description: plan.description,
                  features: plan.features.map(feature => ({ text: feature })),
                  highlight: plan.highlighted
                })}
                className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${plan.highlighted ? 'ring-2 ring-primary transform scale-105' : ''}`}
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
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's discuss how our web development services can help you achieve your business goals.
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

      {/* Package Inquiry Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's discuss your web development needs and create something amazing together.
            </p>
          </div>
          <PackageInquiryForm serviceType="Web Development" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Work
          </h2>
          <MediaGallery mediaData={webDevelopmentGalleryData} />
        </div>
      </section>

      <Footer />
      
      <RequirementFormPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        packageData={selectedPackage}
      />
    </div>
  );
}