import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaDiscord, FaYoutube } from "react-icons/fa";
import SocialLink from "./social/SocialLink";

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://web.facebook.com/yaksen",
    label: "Facebook",
    color: "hover:bg-blue-600"
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/yaksen",
    label: "LinkedIn",
    color: "hover:bg-blue-700"
  }
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

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function SocialLinks() {
  return (
    <motion.div 
      className="flex items-center space-x-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.label}
          variants={itemVariants}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl bg-neutral-800/50 text-neutral-400 transition-all duration-300 ${link.color} group`}
            aria-label={link.label}
          >
            <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
}
