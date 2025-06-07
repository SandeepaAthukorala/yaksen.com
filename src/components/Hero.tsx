import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
      <HeroSlideshow />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 text-primary-400 opacity-20"
        variants={floatingVariants}
        animate="animate"
      >
        <Sparkles size={40} />
      </motion.div>
      <motion.div 
        className="absolute top-40 right-20 text-secondary-400 opacity-20"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Zap size={35} />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 text-accent-400 opacity-20"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Target size={30} />
      </motion.div>
      
      <div className="relative z-20">
        <div className="min-h-screen flex items-center justify-center">
          <motion.div 
            className="container-custom"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center">
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">
                  <span className="block font-light text-neutral-200">Unlock Your</span>
                  <span className="block mt-2">Business Potential with</span>
                  <span className="block mt-2 gradient-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                    Smart AI Solutions
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="mt-8 text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Making processes <span className="text-primary-400 font-semibold">smarter</span>, 
                <span className="text-secondary-400 font-semibold"> faster</span>, 
                <span className="text-accent-400 font-semibold"> more personalized</span>, and  {" "}
                <span className="text-primary-400 font-semibold">more effective</span>
              </motion.p>
              
              <motion.div 
                className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
                variants={itemVariants}
              >
                <motion.a
                  href="#about"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </motion.a>
              </motion.div>
              
              {/* Stats Section */}
              <motion.div 
                className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400">30+</div>
                  <div className="text-neutral-400 mt-1">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-400">100%</div>
                  <div className="text-neutral-400 mt-1">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-400">24/7</div>
                  <div className="text-neutral-400 mt-1">Support Available</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent z-10"></div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </div>
  );
}
