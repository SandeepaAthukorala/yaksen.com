import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
}

export default function TeamMember({
  id,
  name,
  role,
  image,
  email,
}: TeamMemberProps) {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `mailto:${email}`;
  };

  return (
    <Link to={`/team/${id}`} className="block group">
      <motion.div 
        className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image Container */}
        <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* View Profile Button */}
          <motion.div 
            className="absolute bottom-4 right-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ scale: 0, rotate: -180 }}
            whileHover={{ scale: 1.1 }}
            animate={{ scale: 1, rotate: 0 }}
          >
            <ArrowRight className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex-1 text-center">
          <motion.h4 
            className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {name}
          </motion.h4>
          
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full mb-4">
            <p className="text-sm font-medium bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {role}
            </p>
          </div>
          
          {email?.trim() !== "" && (
  <motion.button
    onClick={handleEmailClick}
    className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 group/email"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="p-1.5 rounded-lg bg-primary-500/10 group-hover/email:bg-primary-500/20 transition-colors duration-200">
      <Mail className="h-3.5 w-3.5" />
    </div>
    <span className="group-hover/email:underline">{email}</span>
  </motion.button>
)}
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-primary-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="absolute top-6 left-6 w-1 h-1 bg-secondary-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300" />
      </motion.div>
    </Link>
  );
}
