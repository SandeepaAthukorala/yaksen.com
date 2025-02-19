import React, { useState } from "react";
import { motion } from "framer-motion";
import { Power } from "lucide-react";
import chat_animation from "./character/shy.gif";

interface LoginWindowProps {
  onLogin: (name: string, email: string) => void;
  onClose: () => void;
  isDark: boolean;
}

const LoginWindow: React.FC<LoginWindowProps> = ({ onLogin, onClose, isDark }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleStartChat = () => {
    if (!name.trim() || !email.trim()) {
      alert("Please enter both name and email.");
      return;
    }
    onLogin(name, email);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`w-full h-[75vh] md:h-[550px] shadow-lg rounded-xl overflow-hidden relative flex flex-col border-2 border-[#c53b2d] ${
        isDark ? "bg-[#0f1724] text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <div className="w-full flex flex-col justify-start p-4 relative border-b border-gradient-to-r from-[#c53b2d] to-transparent">
        <div className="flex justify-between items-center">
          <img src={chat_animation} alt="Chat Animation" className="w-16 h-16" />
          <div>
            <span className="text-lg font-bold">Welcome</span>
            <p className="text-xs text-gray-400 mt-1">
              Please enter your name and email to start chatting.
            </p>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 p-4 flex flex-col gap-4 justify-center items-center">
        <div className="w-full">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full p-3 border-2 rounded-lg text-sm border-[#c53b2d] bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c53b2d]"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 border-2 rounded-lg text-sm border-[#c53b2d] bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c53b2d]"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className="text-xs text-gray-400 text-center">
          Disclaimer: Your information will be stored in a cookie for future chats.
        </p>
        <button
          className="mt-4 px-6 py-3 bg-[#d94231] text-white rounded-lg hover:bg-red-600 transition"
          onClick={handleStartChat}
        >
          Start Chat
        </button>
      </div>

      {/* Close button */}
      <div className="absolute top-4 right-4">
        <button
          className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
          onClick={onClose}
        >
          <Power size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default LoginWindow;
