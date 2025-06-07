import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      setScrolled(window.scrollY > 50);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1);
    setActiveSection(sectionId);
    
    // Close the mobile menu first
    setIsOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Increased timeout to ensure navigation completes
    } else {
      // Small delay to ensure mobile menu closes first
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };
  
  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setActiveSection('home');
    setIsOpen(false);
  };

  const navbarVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(229, 231, 235, 0.2)",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(30px)",
      borderBottom: "1px solid rgba(229, 231, 235, 0.3)",
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)"
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white/90 via-white/80 to-white/70 dark:from-neutral-900/95 dark:via-neutral-900/90 dark:to-neutral-900/85 backdrop-blur-2xl border-b border-neutral-200/40 dark:border-neutral-700/40 shadow-lg dark:shadow-neutral-800/20"
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="flex items-center gap-3 text-2xl font-display font-bold cursor-pointer group hover:gap-3.5 transition-all duration-300"
              onClick={handleLogoClick}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <Sparkles className="w-7 h-7 text-primary-500 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/30 to-secondary-400/20 rounded-full blur-md group-hover:from-primary-500/40 group-hover:to-secondary-500/30 transition-all duration-300" />
              </motion.div>
              <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-secondary-700 dark:group-hover:from-primary-300 dark:group-hover:to-secondary-300 transition-all duration-200">
                YAKSEN
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.href.substring(1)
                      ? "text-primary-600 dark:text-primary-400 bg-primary-50/80 dark:bg-primary-900/30"
                      : "text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-900/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 dark:from-primary-400/20 dark:to-secondary-400/20 rounded-xl border border-primary-200/50 dark:border-primary-700/50"
                      layoutId="activeTab"
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 dark:group-hover:from-primary-400/10 dark:group-hover:to-secondary-400/10 rounded-xl transition-all duration-300"
                  />
                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-4 pt-3 pb-6 space-y-2 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-200/50 dark:border-neutral-700/50 shadow-lg">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-5 py-3.5 rounded-xl text-base font-medium transition-all duration-300 border ${
                    activeSection === item.href.substring(1)
                      ? "text-primary-600 dark:text-primary-400 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 border-primary-200/50 dark:border-primary-700/50 shadow-sm"
                      : "text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-secondary-50/50 dark:hover:from-primary-900/20 dark:hover:to-secondary-900/20 border-transparent hover:border-primary-200/30 dark:hover:border-primary-700/30"
                  }`}
                  variants={mobileItemVariants}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
