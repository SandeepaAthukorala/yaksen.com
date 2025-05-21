import React, { useEffect, useState } from "react";
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
                  {icon &&
                    React.cloneElement(icon.icon, {
                      className: "h-16 w-16 text-primary",
                    })}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                  {service.service_title}
                </h1>
                <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {service.service_desc}
                </p>
              </div>
            </div>
          </div>

          {/* Subservice Selection */}
          {service.sub_services && service.sub_services.length > 0 && (
            <div className="py-6 bg-gray-100 dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center flex-wrap gap-2">
                  {service.sub_services.map((subService) => (
                    <button
                      key={subService._id}
                      onClick={() => handleSubServiceChange(subService._id)}
                      className={`relative group p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden transform ${
                        selectedSubService?._id === subService._id
                          ? "ring-2 ring-primary scale-100"
                          : "scale-95"
                      } hover:scale-100`}
                    >
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 rounded-lg" />
                      <div className="relative flex flex-col items-center justify-center h-[50px]">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                          {subService.sub_title}
                        </h3>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedSubService && !loading && (
            <>
              <div className="py-8 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {selectedSubService.sub_desc}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    Key Features
                  </h2>
                  {selectedSubService.key_features.length > 0 && (
                    <div className="flex flex-wrap gap-8 justify-center">
                      {selectedSubService.key_features.map((feature, index) => (
                        <div
                          key={index}
                          className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center ${
                            selectedSubService.key_features.length % 3 === 1 &&
                            index === selectedSubService.key_features.length - 1
                              ? "w-full md:w-[48%] lg:w-[45%]"
                              : "w-full md:w-[48%] lg:w-[50%]"
                          }`}
                        >
                          <div className="flex items-center justify-center space-x-3 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Zap className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {feature.keyfeature_title}
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {feature.keyfeature_desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    Benefits
                  </h2>
                  {selectedSubService.benefits.length > 0 && (
                    <div className="flex flex-wrap gap-8 justify-center">
                      {selectedSubService.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className={`flex flex-col items-center text-center space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform transition-all duration-300 hover:-translate-y-1 ${
                            selectedSubService.benefits.length % 2 === 1 &&
                            index === selectedSubService.benefits.length - 1
                              ? "w-full md:w-[48%] lg:w-[45%]"
                              : "w-full md:w-[48%] lg:w-[50%]"
                          }`}
                        >
                          <div className="flex-shrink-0 flex justify-center">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Flame className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                              {benefit.bene_title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {benefit.bene_desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Process Steps */}
              <div className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    Our Process
                  </h2>
                  <div className="space-y-12">
                    {selectedSubService.our_process.map((step, index) => (
                      <div key={index} className="relative">
                        {index !== selectedSubService.our_process.length - 1 && (
                          <div className="absolute left-8 top-16 h-full w-0.5 bg-primary/20" />
                        )}
                        <div className="flex items-start space-x-6">
                          <div className="flex-shrink-0 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-primary">
                              {index + 1}
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex-1 transform transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                              {step.process_title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {step.process_desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          <Footer />
        </div>
      );
    }
