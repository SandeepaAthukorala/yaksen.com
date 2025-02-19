import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gifDurations } from "./gif_data";

interface AnimationProps {
  gif: string; // Current animation gif
  defaultGif: string; // Default gif to revert to
  className?: string; // Ensures size consistency
}

const AnimationHandler: React.FC<AnimationProps> = ({ gif, defaultGif, className }) => {
  const [currentGif, setCurrentGif] = useState(defaultGif);
  
  useEffect(() => {
    if (gif !== defaultGif) {
      const duration = gifDurations[gif] || 2000; // Fallback to 2000ms if not found
      
      setCurrentGif(gif);

      const timer = setTimeout(() => {
        setCurrentGif(defaultGif);
      }, duration);

      return () => clearTimeout(timer); // Cleanup timeout on unmount or gif change
    }
  }, [gif, defaultGif]);

  return (
    <motion.img
      src={currentGif}
      alt="Animated Avatar"
      className={`transition-opacity duration-700 ${className}`}
      initial={{ opacity: 0.5, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    />
  );
};

export default AnimationHandler;