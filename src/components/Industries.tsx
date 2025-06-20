import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Shirt, Sparkles, ArrowRight } from "lucide-react";

const Industries = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/industries/garment-apparel");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Design Lab</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            Industries We
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent ml-3">
              Transform
            </span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Discover how our AI-powered design solutions revolutionize different industries with cutting-edge technology and creative innovation.
          </p>
        </motion.div>

        {/* Featured Industry Card */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            onClick={handleCardClick}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-neutral-50 to-white dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-600/50 shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-500"
            whileHover={{ 
              scale: 1.02,
              y: -8,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
              }} />
            </div>

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Icon Section */}
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Shirt className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </motion.div>
                    <motion.div 
                      className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-yellow-800" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    Garment & Apparel
                  </motion.h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed mb-6">
                    Revolutionary AI-powered design solutions for the fashion industry. From seamless patterns to AI influencer photography, we're reshaping how fashion brands create and showcase their collections.
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {[
                      "🧵 Seamless Patterns",
                      "🎨 Concept Arts", 
                      "🧍 AI Model Photography",
                      "👕 Apparel Mockups",
                      "🧶 Fabric Simulations",
                      "🖼️ Graphic Designs"
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700/50 px-3 py-2 rounded-lg group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div 
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Hover Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
            />
          </motion.div>
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-full text-sm font-medium border border-neutral-200 dark:border-neutral-600"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span>More industries coming soon...</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Industries;