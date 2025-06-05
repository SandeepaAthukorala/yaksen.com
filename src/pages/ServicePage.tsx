import React, { useEffect, useState } from "react";
    import { motion } from "framer-motion";
    import { useParams} from "react-router-dom";
    import Navbar from "../components/Navbar";
    import NotFound from "./NotFound";
    import { services_icons } from "../resources/icons.tsx";
    import { Flame, Zap } from "lucide-react";
    import { useScrollToTop } from "../hooks/useScrollToTop";
    import Footer from "../components/footer/Footer";
    import servicesData from "../data/services.json"; // Import the local JSON data
    import Loading from "./Loading";

    interface SubService {
      _id: string;
      sub_title: string;
      sub_desc: string;
      benefits: { bene_title: string; bene_desc: string }[];
      key_features: { keyfeature_title: string; keyfeature_desc: string }[];
      our_process: { process_title: string; process_desc: string }[];
      project_ids: string[];
      order: number;
    }

    interface ServiceData {
      _id: string;
      service_title: string;
      service_desc: string;
      service_icon_type: string;
      service_category: string;
      sub_services: SubService[];
      order: number;
    }

    export default function ServicePage() {
      const [service, setService] = useState<ServiceData>();
      const [loading, setLoading] = useState(true);
      const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);

      const { id } = useParams<{ id: string }>();

      useEffect(() => {
        // Load the service data from the local JSON file
        let service;
        
        // Handle special URL paths for the new services
        if (id === 'web-development' || id === 'custom-software' || id === 'process-optimization') {
          // Map the URL path to an appropriate service from the data
          // For now, we'll map to existing services based on relevance
          const serviceMap = {
            'web-development': (servicesData as ServiceData[]).find(s => 
              s.service_title.toLowerCase().includes('web') || 
              s.service_title.toLowerCase().includes('development')),
            'custom-software': (servicesData as ServiceData[]).find(s => 
              s.service_title.toLowerCase().includes('software') || 
              s.service_title.toLowerCase().includes('solution')),
            'process-optimization': (servicesData as ServiceData[]).find(s => 
              s.service_title.toLowerCase().includes('automation') || 
              s.service_title.toLowerCase().includes('optimization'))
          };
          
          service = serviceMap[id as keyof typeof serviceMap];
        } else {
          // Regular ID-based lookup
          service = (servicesData as ServiceData[]).find((s) => s._id === id);
        }
        
        if (service) {
          // Sort sub-services by order
          const sortedSubServices = [...service.sub_services].sort((a, b) => a.order - b.order);
          setService({ ...service, sub_services: sortedSubServices });
        }
        setLoading(false);
      }, [id]);

      useEffect(() => {
        if (service?.sub_services && service.sub_services.length > 0) {
          setSelectedSubService(service.sub_services[0]);
        }
      }, [service]);

      useScrollToTop();

      if (loading) {
        return <Loading />;
      }

      if (!service) {
        return <NotFound />;
      }

      const handleSubServiceChange = (subServiceId: string) => {
        const subService = service.sub_services.find(
          (sub) => sub._id === subServiceId
        );
        setSelectedSubService(subService || null);
      };

      const icon = services_icons.find(item => item.type === service.service_icon_type);

      return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
          {/* Background Pattern */}
          <div className="fixed inset-0 opacity-30 dark:opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
          </div>
          
          <div className="relative">
            <Navbar />

            {/* Hero Section */}
            <motion.div 
              className="relative py-24 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-primary-500/5 to-transparent dark:from-primary-500/5" />
              <div
                className="absolute inset-0 bg-cover bg-center bg-[url('https://res.cloudinary.com/das8wrfd1/image/upload/v1739949359/Service_Header_xo8zrn.webp')] opacity-5 dark:opacity-10"
              />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <motion.div 
                    className="inline-block p-6 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl shadow-2xl mb-8 border border-neutral-200/50 dark:border-neutral-700/50"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {icon &&
                      React.cloneElement(icon.icon, {
                        className: "h-16 w-16 text-primary-600 dark:text-primary-400",
                      })}
                  </motion.div>
                  <motion.h1 
                    className="text-4xl font-display font-bold text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {service.service_title}
                  </motion.h1>
                  <motion.p 
                    className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {service.service_desc}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Subservice Selection */}
            {service.sub_services && service.sub_services.length > 0 && (
              <motion.div 
                className="py-8 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-y border-neutral-200/50 dark:border-neutral-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-center flex-wrap gap-4">
                    {service.sub_services.map((subService, index) => (
                      <motion.button
                        key={subService._id}
                        onClick={() => handleSubServiceChange(subService._id)}
                        className={`relative group p-4 bg-white/80 dark:bg-neutral-700/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-200/50 dark:border-neutral-600/50 ${
                          selectedSubService?._id === subService._id
                            ? "ring-2 ring-primary-500 scale-100 bg-primary-50/80 dark:bg-primary-900/20"
                            : "scale-95 hover:scale-100"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-300 rounded-2xl" />
                        <div className="relative flex flex-col items-center justify-center min-h-[60px] px-2">
                          <h3 className="text-sm font-display font-semibold text-neutral-900 dark:text-white text-center">
                            {subService.sub_title}
                          </h3>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

          {selectedSubService && !loading && (
            <>
              <motion.div 
                className="py-8 bg-gradient-to-br from-neutral-50/80 via-white/50 to-neutral-100/80 dark:from-neutral-800/80 dark:via-neutral-900/50 dark:to-neutral-800/80 backdrop-blur-sm border-y border-neutral-200/30 dark:border-neutral-700/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <p className="text-xl font-body text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                    {selectedSubService.sub_desc}
                  </p>
                </div>
              </motion.div>

              {/* Features Grid */}
              <motion.div 
                className="py-16 bg-gradient-to-br from-white/80 via-neutral-50/50 to-white/80 dark:from-neutral-900/80 dark:via-neutral-800/50 dark:to-neutral-900/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.h2 
                    className="text-4xl font-display font-bold bg-gradient-to-r from-neutral-900 via-primary-600 to-secondary-600 dark:from-white dark:via-primary-400 dark:to-secondary-400 bg-clip-text text-transparent text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Key Features
                  </motion.h2>
                  {selectedSubService.key_features.length > 0 && (
                    <div className="flex flex-wrap gap-8 justify-center">
                      {selectedSubService.key_features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className={`group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 overflow-hidden flex flex-col items-center text-center ${
                            selectedSubService.key_features.length % 3 === 1 &&
                            index === selectedSubService.key_features.length - 1
                              ? "w-full md:w-[48%] lg:w-[45%]"
                              : "w-full md:w-[48%] lg:w-[50%]"
                          }`}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                          whileHover={{ y: -8, scale: 1.02 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-500" />
                          <div className="relative flex items-center justify-center space-x-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl backdrop-blur-sm border border-primary-200/30 dark:border-primary-700/30">
                              <Zap className="h-7 w-7 text-primary-600 dark:text-primary-400" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white">
                              {feature.keyfeature_title}
                            </h3>
                          </div>
                          <p className="relative text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
                            {feature.keyfeature_desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Benefits Section */}
              <motion.div 
                className="py-16 bg-gradient-to-br from-neutral-50/80 via-white/50 to-neutral-100/80 dark:from-neutral-800/80 dark:via-neutral-900/50 dark:to-neutral-800/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.h2 
                    className="text-4xl font-display font-bold bg-gradient-to-r from-neutral-900 via-primary-600 to-secondary-600 dark:from-white dark:via-primary-400 dark:to-secondary-400 bg-clip-text text-transparent text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    Benefits
                  </motion.h2>
                  {selectedSubService.benefits.length > 0 && (
                    <div className="flex flex-wrap gap-8 justify-center">
                      {selectedSubService.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className={`group relative flex flex-col items-center text-center p-8 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 overflow-hidden ${
                            selectedSubService.benefits.length % 2 === 1 &&
                            index === selectedSubService.benefits.length - 1
                              ? "w-full md:w-[48%] lg:w-[45%]"
                              : "w-full md:w-[48%] lg:w-[50%]"
                          }`}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                          whileHover={{ y: -8, scale: 1.02 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-500" />
                          <div className="relative flex-shrink-0 flex justify-center mb-6">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-200/30 dark:border-primary-700/30 flex items-center justify-center">
                              <Flame className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                            </div>
                          </div>
                          <div className="relative">
                            <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white mb-4">
                              {benefit.bene_title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
                              {benefit.bene_desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div 
                className="py-16 bg-gradient-to-br from-white/80 via-neutral-50/50 to-white/80 dark:from-neutral-900/80 dark:via-neutral-800/50 dark:to-neutral-900/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.h2 
                    className="text-4xl font-display font-bold bg-gradient-to-r from-neutral-900 via-primary-600 to-secondary-600 dark:from-white dark:via-primary-400 dark:to-secondary-400 bg-clip-text text-transparent text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 }}
                  >
                    Our Process
                  </motion.h2>
                  <div className="space-y-12">
                    {selectedSubService.our_process.map((step, index) => (
                      <motion.div 
                        key={index} 
                        className="relative"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                      >
                        {index !== selectedSubService.our_process.length - 1 && (
                          <div className="absolute left-8 top-16 h-full w-0.5 bg-gradient-to-b from-primary-400 to-secondary-400 opacity-30" />
                        )}
                        <div className="flex items-start space-x-6">
                          <motion.div 
                            className="flex-shrink-0 h-16 w-16 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-200/30 dark:border-primary-700/30 flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <span className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400">
                              {index + 1}
                            </span>
                          </motion.div>
                          <motion.div 
                            className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 flex-1 overflow-hidden"
                            whileHover={{ y: -4, scale: 1.01 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-500" />
                            <div className="relative">
                              <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white mb-4">
                                {step.process_title}
                              </h3>
                              <p className="text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
                                {step.process_desc}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}

            <Footer />
          </div>
        </div>
      );
    }
