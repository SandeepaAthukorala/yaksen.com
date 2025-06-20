import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scrollToSection } from "../../utils/scroll";

// Define the type for links
const links: {
  title: string;
  items: { label: string; path: string; section?: string }[]; // section is now optional
}[] = [
  {
    title: "Company",
    items: [
      { label: "About Us", path: "/", section: "about" },
      { label: "Services", path: "/", section: "services" },
      { label: "Industries", path: "/", section: "industries" },
      { label: "Projects", path: "/", section: "projects" },
      { label: "Contact", path: "/", section: "contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", path: "/privacy" },
     // { label: "Terms & Conditions", path: "/terms" },
      //{ label: "Refund Policy", path: "/refund" },
    ],
  },
  {
    title: "Support",
    items: [{ label: "Contact Support", path: "/", section: "contact" }],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

export default function FooterLinks() {
  // Function to handle scrolling
  const handleClick = (path: string, section?: string) => {
    if (section && path === "/") {
      scrollToSection(section);
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {links.map((section, sectionIndex) => (
        <motion.div key={section.title} variants={sectionVariants}>
          <motion.h3 
            className="text-xl font-semibold text-white mb-6 relative"
            variants={itemVariants}
          >
            {section.title}
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-300"
              initial={{ width: 0 }}
              animate={{ width: "2rem" }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
            />
          </motion.h3>
          <ul className="space-y-3">
            {section.items.map((item, itemIndex) => (
              <motion.li key={item.label} variants={itemVariants}>
                <Link
                  to={item.path}
                  onClick={() => handleClick(item.path, item.section)}
                  className="text-neutral-300 hover:text-primary-400 transition-all duration-200 flex items-center group relative"
                >
                  <motion.span 
                    className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.span
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
