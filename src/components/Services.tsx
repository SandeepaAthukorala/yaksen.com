import React from "react";
import { ArrowRight, Globe, Layers, Settings, Sparkle, Paintbrush, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: "web-development",
      title: "Smart Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies to enhance your online presence and user experience.",
      link: "/services/web-development",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      id: "custom-software",
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed to address your specific business needs, streamline operations, and drive growth.",
      link: "/services/custom-software",
      icon: Layers,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      id: "process-optimization",
      title: "Process Optimization & Automation",
      description: "Identify inefficiencies in your workflows and implement automation solutions to increase productivity and reduce operational costs.",
      link: "/services/process-optimization",
      icon: Settings,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      id: "ai-personal-branding",
      title: "AI-Powered Personal Branding",
      description: "Level-Up Your Online Persona with a Smart AI-Powered Brand that resonates with your target audience.",
      link: "/services/ai-personal-branding",
      icon: Sparkle,
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      id: "smart-visual-design",
      title: "Smart Visual Design Studio",
      description: "High-Impact Graphics, Powered by Your Ideas + AI Precision for stunning visual communications.",
      link: "/services/smart-visual-design",
      icon: Paintbrush,
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20"
    },
    {
      id: "workflow-wizard",
      title: "Workflow Wizard: Scan & Automate",
      description: "From Paper to Productivity — Automate Tedious Docs with AI and streamline your business processes.",
      link: "/services/workflow-wizard",
      icon: Workflow,
      gradient: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    }
  ];

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
    <section id="services" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            Innovative solutions to help your business thrive in the digital age with cutting-edge technology
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to={service.link}
                  className="group block h-full"
                >
                  <div className="card card-hover h-full p-8 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${service.bgColor} rounded-full -translate-y-16 translate-x-16 transition-all duration-500 group-hover:scale-150`}></div>
                    
                    {/* Icon */}
                    <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl lg:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            Ready to transform your business? Let's discuss your project!
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
