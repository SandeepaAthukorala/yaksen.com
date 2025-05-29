import React, { useState } from "react";
import PackageInquiryForm from "../../components/PackageInquiryForm";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { scrollToSection } from "../../utils/scroll";
import { ArrowRight, FileText, Workflow, Settings, Bot, Repeat } from "lucide-react";
import RequirementFormPopup from "../../components/RequirementFormPopup";
import MediaGallery from "../../components/services/MediaGallery";
import { workflowWizardGalleryData } from "../../data/galleryData";

export default function WorkflowWizardPage() {
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
              <Workflow className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Workflow Wizard: Scan & Automate
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From Paper to Productivity — Automate Tedious Docs with AI
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Say goodbye to manual typing. We scan, extract, and automate your document workflows — perfect for freelancers, students, and small businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <FileText className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                OCR-Based Document Scanning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Convert physical documents into digital text with high accuracy optical character recognition.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <Settings className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Data Extraction to Spreadsheets or Databases
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatically organize extracted information into structured, usable formats.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <Workflow className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                PDF → Actionable Data Workflows
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transform static PDFs into dynamic data using N8N, Python bots, and other automation tools.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <Repeat className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Email/File Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Set up automated systems to process incoming documents and trigger appropriate actions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <Bot className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Custom Script or AI Tool Setups
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailored automation solutions designed specifically for your unique workflow needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Ideal For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Freelancers, Office Workers & Virtual Assistants
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Streamline administrative tasks and focus on higher-value work.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Small Businesses
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reduce operational overhead and improve efficiency with automated document processing.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Anyone Stuck with Boring Paperwork
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transform tedious manual data entry into a streamlined, automated process.
              </p>
            </div>
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
                price: "$1,499",
                description: "Basic workflow automation for small teams",
                features: [
                  "Process assessment & mapping",
                  "1 workflow automation",
                  "Basic integration setup",
                  "User training (2 hours)",
                  "30 days of support"
                ]
              },
              {
                title: "Business",
                price: "$3,999",
                description: "Comprehensive automation for growing businesses",
                features: [
                  "Detailed process analysis",
                  "3 workflow automations",
                  "Advanced integrations",
                  "Custom dashboard setup",
                  "User training (8 hours)",
                  "90 days of support",
                  "Monthly optimization check"
                ],
                highlighted: true
              },
              {
                title: "Enterprise",
                price: "Custom",
                description: "End-to-end automation solutions for complex organizations",
                features: [
                  "Enterprise-wide process analysis",
                  "Unlimited workflow automations",
                  "Complex system integrations",
                  "Custom reporting & analytics",
                  "Dedicated automation specialist",
                  "24/7 priority support",
                  "Quarterly strategy sessions"
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
            Ready to Revolutionize Your Workflow?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's transform your manual processes into automated workflows that save time and reduce errors.
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
              Let's discuss your workflow challenges and create custom automation solutions that drive efficiency.
            </p>
          </div>
          <PackageInquiryForm serviceType="Workflow Wizard: Scan & Automate" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Work
          </h2>
          <MediaGallery mediaData={workflowWizardGalleryData} />
        </div>
      </section>

      <Footer />
      
      {isPopupOpen && (
        <RequirementFormPopup 
          isOpen={isPopupOpen} 
          onClose={handleClosePopup} 
          selectedPackage={selectedPackage}
        />
      )}
    </div>
  );
}