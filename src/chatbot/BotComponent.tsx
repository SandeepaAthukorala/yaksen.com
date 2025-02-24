import { useEffect, useRef, useState } from "react";
import { IoSend, IoPower } from "react-icons/io5";
import { motion } from "framer-motion";
import { sendMessage } from "../apiCalls/ChatbotCalls";

import avatarMap from "../resources/bot";




const BotComponent = ({ handleChatButton}) => {
  const [messages, setMessages] = useState<any>([]);
  const [userInput, setUserInput] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [thinking, setThinking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState("Typing");
  const [avatarGif, setAvatarGif] = useState("shy"); // Default avatar gif

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => handleChatButton(), 300);
  };

  const handleSendMessage = async (e: any) => {
    e.preventDefault();

    if (userInput.trim() === "") return;

    const userMessage = { text: userInput, sender: "user" };
    setMessages((prev: any) => [...prev, userMessage]);

    try {
      setThinking(true);
      setAvatarGif("think"); // Change avatar to 'think' when bot is processing
      setUserInput("");
      const res = await sendMessage({
        session_id: sessionId,
        question: userInput,
      });

      setThinking(false);
      setAvatarGif("shy"); // Revert avatar after response
      setTypingText("Typing");

      const botMessage = { text: res.data.answer, sender: "bot" };
      setMessages((prev: any) => [...prev, botMessage]);

      if (res.data.session_id) {
        setSessionId(res.data.session_id);
        localStorage.setItem("session_id", res.data.session_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedSessionId = localStorage.getItem("session_id");

    if (storedSessionId) {
      setSessionId(storedSessionId);
    }
  }, []);

  const scrollEndRef = useRef<any>(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (thinking) {
      let index = 0;
      let forward = true;
      const baseWord = "thinking";
      const interval = setInterval(() => {
        // Capitalize the letter at the current index
        const animatedText = baseWord
          .split("")
          .map((char, i) => (i === index ? char.toUpperCase() : char))
          .join("");
        setTypingText(animatedText);

        // Ping-pong the index forward then reverse
        if (forward) {
          if (index === baseWord.length - 1) {
            forward = false;
            index--;
          } else {
            index++;
          }
        } else {
          if (index === 0) {
            forward = true;
            index++;
          } else {
            index--;
          }
        }
      }, 50); // adjust the timing for smoothness

      return () => clearInterval(interval);
    }
  }, [thinking]);

  return (
    <motion.div 
      initial={
        isVisible 
        ? { opacity: 1, x: 0 } 
        : { opacity: 0, x: '100%' } } 
      animate={
        isVisible 
          ? { opacity: 1, x: 0 } 
          : { opacity: 0, y: '100%' } 
      }
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="md:w-[350px] md:h-[500px] w-[350px] h-[500px] bg-white overflow-visible rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-xl relative"
    >
      {/* GIF icon at the top center */}
      <div
        className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10 p-2"
        style={{ marginTop: '-50px' }} // Adjust as needed
      >
        <img 
          src={avatarMap[avatarGif]} 
          alt="bot-avatar" 
          className="w-48 h-48 transition-all duration-500" // Added smooth transition for avatar
        />
      </div>

      {/* Messages */}
      <div className="p-4 flex flex-col gap-4 h-[450px] overflow-y-auto hide-scrollbar pb-6 border-[#d94231] border-2">
        {messages.length === 0 && (
          
          <div className="flex items-center justify-center w-full h-full text-black/60 text-[14px] text-center dark:text-white/60">
<div>Hey, I'm <strong className="font-bold">Yakira</strong>! Let’s chat all things <strong className="font-bold">Yaksen</strong>!</div>

          </div>
          
        )}

        {messages.map((message: any, index: any) => (
          <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`${
                message.sender === "user" ? "bg-[#d94231] text-white" : "bg-gray-300 text-black"
              } p-2 px-4 max-w-[70%] text-[14px] ${
                message.sender === "user" ? "rounded-xl rounded-br-none" : "rounded-xl rounded-bl-none"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {thinking && (
          <div className="flex justify-start">
            <div className="text-silver dark:text-gray-400 max-w-[70%] text-[16px] rounded-xl rounded-bl-none">
              {typingText}
            </div>
          </div>
        )}

        <div ref={scrollEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 flex items-center border-t w-full bg-[#1e293b] absolute bottom-0 left-0 border-2 border-[#d94231] ">
        <button
          className="mr-3 px-4 py-3 bg-[#d94231] text-white rounded-lg hover:bg-red-600 transition"
          onClick={handleClose}
        >
          <IoPower size={20} />
        </button>
        <input
          type="text"
          className="flex-1 p-3 border-2 rounded-lg text-sm border-[#c53b2d] bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c53b2d]"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage(e)}
        />
        <button
          className="ml-3 px-4 py-3 bg-[#d94231] text-white rounded-lg hover:bg-red-600 transition"
          onClick={handleSendMessage}
        >
          <IoSend size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default BotComponent;
