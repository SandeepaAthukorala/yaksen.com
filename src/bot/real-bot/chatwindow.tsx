import React from "react";
import { Send, Power } from "lucide-react";
import { motion } from "framer-motion";

// Map GIF names to their Cloudinary URLs or require paths
const avatarMap: { [key: string]: string } = {
  laugh: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822852/laugh_rcgbbn.gif",
  broken: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822857/broken_psnird.gif",
  fit: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743823112/fit_gqyic0.gif",
  loop: require("./character/loop.gif"), // URL not provided
  hi: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822916/hi_j74hqj.gif",
  think: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822991/think_kex60v.gif",
  error: require("./character/error.gif"), // URL not provided
  love: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822847/love_zagmld.gif",
  horay: require("./character/horay.gif"), // URL not provided
  flirty: require("./character/flirty.gif"), // URL not provided
  shy: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743823102/shy_aphbmz.gif",
  savage: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743823121/savage_dnlj4j.gif",
};

interface ChatWindowProps {
  messages: { text: string; sender: "user" | "bot" }[];
  isTyping: boolean;
  typingStates: string[];
  typingIndex: number;
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onClose: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  userName: string;
  isDark: boolean;
  avatarGif: string; // new prop for avatar gif
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  isTyping,
  typingStates,
  typingIndex,
  input,
  onInputChange,
  onSend,
  onClose,
  inputRef,
  messagesEndRef,
  userName,
  isDark,
  avatarGif,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`w-full h-[75vh] md:h-[550px] shadow-lg rounded-xl overflow-hidden relative flex flex-col border-2 border-[#c53b2d] ${
        isDark ? "bg-[#0f1724] text-white" : "bg-white text-black"
      }`}
    >
      {/* Chat header */}
      <div className="w-full flex flex-col justify-start p-4 relative border-b border-gradient-to-r from-[#c53b2d] to-transparent">
        <div className="flex justify-between items-center">
          <img
            src={avatarMap[avatarGif] || avatarMap["shy"]} // Use the map here
            alt="Chat Avatar"
            className="w-16 h-16"
          />
          <div>
            <span className="text-lg font-bold">
              Welcome <strong>{userName}</strong>
            </span>
            <p className="text-xs text-gray-400 mt-1">
              Yakira Beta is live for testing. It may make mistakes.
            </p>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2 items-start justify-start relative scrollbar-none">
        {messages.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 text-center italic border-2 border-[#c53b2d] p-6 rounded-lg bg-opacity-10 backdrop-blur-md">
            <p>Lorem Ipsum Lorem Ipsum</p>
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl ${
              msg.sender === "user"
                ? "bg-[#d94231] text-white self-end"
                : "bg-gray-700 text-white self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="self-start text-gray-500 text-xs italic">
            {typingStates[typingIndex]}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 flex items-center border-t w-full border-[#c53b2d] bg-[#1e293b]">
        <button
          className="bg-red-500 text-white rounded-full p-3 mr-3 hover:bg-red-600 transition"
          onClick={onClose}
        >
          <Power size={24} />
        </button>
        <input
          ref={inputRef}
          type="text"
          className="flex-1 p-3 border-2 rounded-lg text-sm border-[#c53b2d] bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c53b2d]"
          placeholder="Type a message..."
          value={input}
          onChange={onInputChange}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
        />
        <button
          className="ml-3 px-4 py-3 bg-[#d94231] text-white rounded-lg hover:bg-red-600 transition"
          onClick={onSend}
        >
          <Send size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default ChatWindow;
