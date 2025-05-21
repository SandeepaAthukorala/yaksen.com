import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "web-development",
      title: "Smart Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies to enhance your online presence and user experience.",
      link: "/services/web-development"
    },
    {
      id: "custom-software",
      title: "Custom Software Solutions for Businesses",
      description: "Tailored software solutions designed to address your specific business needs, streamline operations, and drive growth.",
      link: "/services/custom-software"
    },
    {
      id: "process-optimization",
      title: "Process Optimization & Automation",
      description: "Identify inefficiencies in your workflows and implement automation solutions to increase productivity and reduce operational costs.",
      link: "/services/process-optimization"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
            >
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {service.description}
                </p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
