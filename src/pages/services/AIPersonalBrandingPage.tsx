import React, { useState } from "react";
import PackageInquiryForm from "../../components/PackageInquiryForm";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { scrollToSection } from "../../utils/scroll";
import { ArrowRight, Bot, MessageCircle, Sparkle, Megaphone, Brain } from "lucide-react";
import RequirementFormPopup from "../../components/RequirementFormPopup";
import MediaGallery from "../../components/services/MediaGallery";
import { aiPersonalBrandingGalleryData } from "../../data/galleryData";

export default function AIPersonalBrandingPage() {
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
              <Sparkle className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              AI-Powered Personal Branding
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Level-Up Your Online Persona with a Smart AI-Powered Brand
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We build you a digital persona that works for you — smart, consistent, and recognizable. From content ideas to chatbot-powered DMs, this is influencer branding with AI brains.
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
              <Bot className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Custom AI Chatbot
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Like you, but digital — for DMs and engagement that scales with your audience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <MessageCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Auto-Generated Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Post ideas & captions that match your voice and resonate with your audience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <Megaphone className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Personal Branding Style Guide
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A comprehensive guide to maintain consistency across all your platforms.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <Brain className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Niche Research Using AI Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover untapped opportunities in your niche with data-driven insights.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <Sparkle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Profile & Bio Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make your social profiles stand out with AI-optimized bios and descriptions.
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
                Content Creators & Micro-Influencers
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Elevate your personal brand and engage with your audience more effectively.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Freelancers & Professionals
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build a strong online presence that attracts clients and opportunities.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Anyone Who Wants a Smarter Online Brand
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Save time and energy while maintaining a professional, consistent online presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Temporarily Hidden
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                price: "$999",
                description: "Perfect for individuals just starting their online brand",
                features: [
                  "Basic AI chatbot setup",
                  "Social media profile optimization",
                  "Personal branding guide",
                  "5 AI-generated content ideas",
                  "1 month of support"
                ]
              },
              {
                title: "Growth",
                price: "$1,999",
                description: "Ideal for content creators looking to scale their presence",
                features: [
                  "Advanced AI chatbot with custom responses",
                  "Comprehensive niche research",
                  "Detailed branding style guide",
                  "20 AI-generated content templates",
                  "Content calendar setup",
                  "3 months of support"
                ],
                highlighted: true
              },
              {
                title: "Professional",
                price: "Custom",
                description: "Complete solution for established influencers and brands",
                features: [
                  "Premium AI chatbot with advanced integrations",
                  "Multi-platform brand consistency",
                  "Advanced audience analytics",
                  "Unlimited content generation",
                  "Cross-platform content strategy",
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
      */}

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Level-Up Your Online Presence?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's build an AI-powered personal brand that works for you 24/7.
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
              Let's discuss your personal branding needs and create a powerful AI-driven presence together.
            </p>
          </div>
          <PackageInquiryForm serviceType="AI-Powered Personal Branding" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Work
          </h2>
          <MediaGallery mediaData={aiPersonalBrandingGalleryData} />
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