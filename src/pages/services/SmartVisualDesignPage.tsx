import React, { useState } from "react";
import PackageInquiryForm from "../../components/PackageInquiryForm";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { scrollToSection } from "../../utils/scroll";
import { ArrowRight, Paintbrush, Sparkle, Zap, Layers, PenTool } from "lucide-react";
import RequirementFormPopup from "../../components/RequirementFormPopup";
import MediaGallery from "../../components/services/MediaGallery";
import { smartVisualDesignGalleryData } from "../../data/galleryData";

export default function SmartVisualDesignPage() {
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
              <Paintbrush className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Smart Visual Design Studio
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              High-Impact Graphics, Powered by Your Ideas + AI Precision
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get custom visuals that slap—whether it's for your brand, product, or content. We mix your style + AI speed + design sense = pro-level results.
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
              <Sparkle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                AI-Assisted Logo & Branding Kits
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional brand identity elements created with AI-enhanced design tools.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <Layers className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Social Media Post Packs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Eye-catching visuals optimized for each platform's unique requirements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Animated Posts & Reels
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dynamic motion graphics that capture attention in crowded feeds.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <PenTool className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Consistent Style Across Platforms
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maintain a cohesive visual identity no matter where your audience finds you.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <ArrowRight className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Revisions Included, Fast Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quick turnaround times with flexibility to refine until you're completely satisfied.
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
                Small Brands & Personal Brands
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Establish a professional visual presence without the cost of a full-time designer.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Content Creators
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Elevate your content with professional-grade visuals that capture attention.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Fiverr Clients Looking for Consistency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upgrade from one-off gigs to a cohesive visual strategy with reliable quality.
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
                title: "Basic",
                price: "$799",
                description: "Essential design services for startups and small businesses",
                features: [
                  "Logo design",
                  "Basic brand guidelines",
                  "Social media templates (3)",
                  "1 round of revisions",
                  "Delivery within 7 days"
                ]
              },
              {
                title: "Premium",
                price: "$1,499",
                description: "Comprehensive design package for growing businesses",
                features: [
                  "Logo design with variations",
                  "Complete brand guidelines",
                  "Social media templates (10)",
                  "Website UI mockups (5 pages)",
                  "Marketing materials",
                  "3 rounds of revisions",
                  "Delivery within 14 days"
                ],
                highlighted: true
              },
              {
                title: "Enterprise",
                price: "Custom",
                description: "Full-scale design solutions for established brands",
                features: [
                  "Complete brand identity system",
                  "Comprehensive style guide",
                  "Unlimited design assets",
                  "Full website UI/UX design",
                  "Print & digital marketing materials",
                  "Unlimited revisions",
                  "Dedicated design team"
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
            Ready to Transform Your Visual Identity?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's create stunning visuals that capture your brand's essence.
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
              Let's discuss your design needs and create visuals that elevate your brand.
            </p>
          </div>
          <PackageInquiryForm serviceType="Smart Visual Design Studio" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Work
          </h2>
          <MediaGallery mediaData={smartVisualDesignGalleryData} />
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