import React from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

const ComingSoon: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6 w-full max-w-md p-6 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center border-2 border-[#c53b2d] text-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        <Loader size={50} className="text-[#c53b2d]" />
      </motion.div>
      <h2 className="text-xl font-bold mt-4 text-[#c53b2d]">Coming Soon!</h2>
      <p className="text-gray-600 mt-2">We're working hard to bring you an amazing chatbot experience.</p>
      <p className="text-gray-500 text-sm mt-1">Stay tuned for updates!</p>
    </motion.div>
  );
};

export default ComingSoon;