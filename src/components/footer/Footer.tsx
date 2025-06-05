import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Heart, Sparkles } from "lucide-react";
import SocialLinks from "../SocialLinks";
import FooterLinks from "./FooterLinks";
import { useNavigate } from "react-router-dom";

const LogoImg = "https://res.cloudinary.com/das8wrfd1/image/upload/v1739760282/logo_owiqet.png";

export default function Footer() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(true);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 dark:from-black dark:via-neutral-900 dark:to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <motion.div 
        className="relative container-custom pt-16 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div
              className="flex items-center mb-6 cursor-pointer group"
              onClick={handleLogoClick}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-[45px] mr-3"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img src={LogoImg} alt="logo" className="w-full h-auto" />
              </motion.div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-primary-400" />
                </motion.div>
                <span className="text-2xl font-display font-bold gradient-text group-hover:scale-105 transition-transform duration-200">
                  YAKSEN
                </span>
              </div>
            </motion.div>
            <motion.p 
              className="text-neutral-300 mb-8 leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Making processes smarter, faster, more personalized, and more effective
            </motion.p>
            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </motion.div>
          
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <FooterLinks />
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-neutral-700/50 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-neutral-400 text-sm flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              &copy; {new Date().getFullYear()} YAKSEN. All rights reserved.
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <motion.div 
                className="flex items-center space-x-2 text-sm text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span>Crafted with passion by the YAKSEN Team</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </motion.span>
              </motion.div>
              
              {showScrollTop && (
                <motion.button
                  onClick={scrollToTop}
                  className="p-3 rounded-full bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 hover:text-primary-300 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-200" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
