import React from "react";
import { motion } from "framer-motion";
import { Power } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
const comingSoonGif = require("./character/loop.gif"); // URL not provided, keeping require

const ComingSoon: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`w-full max-w-sm h-[65vh] md:h-[450px] shadow-lg rounded-xl overflow-hidden relative flex flex-col items-center justify-center border-2 border-[#c53b2d] p-6
        ${isDark ? "bg-[#0f1724] text-white" : "bg-white text-black"}`}
    >
      <button
        className="absolute top-3 left-3 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
        onClick={onClose}
      >
        <Power size={20} />
      </button>
      <img src={comingSoonGif} alt="Coming Soon" className="w-28 h-28 mb-4" />
      <h1 className="text-3xl font-bold text-center">Coming Soon!</h1>
      <p className="text-center text-gray-400 mt-4 px-4">
        Yakira is under development. Stay tuned for updates!
      </p>
    </motion.div>
  );
};

export default ComingSoon;
