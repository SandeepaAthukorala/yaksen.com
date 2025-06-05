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
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/5 to-accent-500/10" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        <motion.div 
          className="relative container-custom"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.div 
              className="inline-block p-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl mb-6 border border-white/20"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkle className="h-16 w-16 text-primary-400" />
            </motion.div>
            <h1 className="text-4xl font-display font-bold text-white sm:text-5xl lg:text-6xl mb-6">
              <span className="gradient-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                AI-Powered Personal Branding
              </span>
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Level-Up Your Online Persona with a <span className="text-primary-400 font-semibold">Smart AI-Powered Brand</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Introduction Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <motion.div 
          className="container-custom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              We build you a digital persona that works for you — <span className="text-primary-500 font-semibold">smart</span>, <span className="text-secondary-500 font-semibold">consistent</span>, and <span className="text-accent-500 font-semibold">recognizable</span>. From content ideas to chatbot-powered DMs, this is influencer branding with AI brains.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">
              Key <span className="gradient-text">Features</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Bot,
                title: "Custom AI Chatbot",
                description: "Like you, but digital — for DMs and engagement that scales with your audience.",
                gradient: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50 dark:bg-blue-900/20"
              },
              {
                icon: MessageCircle,
                title: "Auto-Generated Content",
                description: "Post ideas & captions that match your voice and resonate with your audience.",
                gradient: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50 dark:bg-purple-900/20"
              },
              {
                icon: Megaphone,
                title: "Personal Branding Style Guide",
                description: "A comprehensive guide to maintain consistency across all your platforms.",
                gradient: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50 dark:bg-green-900/20"
              },
              {
                icon: Brain,
                title: "Niche Research Using AI Tools",
                description: "Discover untapped opportunities in your niche with data-driven insights.",
                gradient: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
              },
              {
                icon: Sparkle,
                title: "Profile & Bio Optimization",
                description: "Make your social profiles stand out with AI-optimized bios and descriptions.",
                gradient: "from-pink-500 to-rose-500",
                bgColor: "bg-pink-50 dark:bg-pink-900/20"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card card-hover h-full p-8 relative overflow-hidden group">
                    {/* Background Pattern */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bgColor} rounded-full -translate-y-16 translate-x-16 transition-all duration-500 group-hover:scale-150`}></div>
                    
                    {/* Icon */}
                    <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl lg:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">
              Ideal <span className="gradient-text">For</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="card card-hover p-8 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 dark:bg-primary-900/20 rounded-full -translate-y-16 translate-x-16 transition-all duration-500 group-hover:scale-150"></div>
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Content Creators & Micro-Influencers
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Elevate your personal brand and engage with your audience more effectively.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card card-hover p-8 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-50 dark:bg-secondary-900/20 rounded-full -translate-y-16 translate-x-16 transition-all duration-500 group-hover:scale-150"></div>
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                  Freelancers & Professionals
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Build a strong online presence that attracts clients and opportunities.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card card-hover p-8 md:col-span-2 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-50 dark:bg-accent-900/20 rounded-full -translate-y-16 translate-x-16 transition-all duration-500 group-hover:scale-150"></div>
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  Anyone Who Wants a Smarter Online Brand
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Save time and energy while maintaining a professional, consistent online presence.
                </p>
              </div>
            </motion.div>
          </motion.div>
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
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <motion.div 
          className="container-custom text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Level-Up Your Online Presence?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's build an AI-powered personal brand that works for you 24/7.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => scrollToSection('contact'), 100);
              }}
              className="inline-flex items-center py-4 px-8 bg-white text-primary-600 font-semibold rounded-xl hover:bg-neutral-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Package Inquiry Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Let's discuss your personal branding needs and create a powerful AI-driven presence together.
            </p>
          </div>
          <div className="card p-8">
            <PackageInquiryForm serviceType="AI-Powered Personal Branding" />
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <motion.div 
          className="container-custom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">
              Our <span className="gradient-text">Work</span>
            </h2>
          </div>
          <MediaGallery mediaData={aiPersonalBrandingGalleryData} />
        </motion.div>
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