import { useEffect, useRef, useState } from "react";
import { IoSend, IoPower } from "react-icons/io5";
import { motion } from "framer-motion";
import Cookies from 'js-cookie';
import ReactMarkdown from 'react-markdown'; // <<< --- ADDED: Import ReactMarkdown
import avatarMap from "../resources/bot"; // Assuming this path is correct

interface BotComponentProps {
  handleChatButton: () => void;
}

const COOKIE_NAME = 'yakiraChatSessionId';

const BotComponent: React.FC<BotComponentProps> = ({ handleChatButton }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [userInput, setUserInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState("Thinking");
  const [avatarGif, setAvatarGif] = useState("shy");
  const scrollEndRef = useRef<HTMLDivElement>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    let currentSessionId = Cookies.get(COOKIE_NAME);

    if (!currentSessionId) {
      currentSessionId = crypto.randomUUID ? crypto.randomUUID() : `fallback-${Date.now()}-${Math.random().toString(36).substring(2)}`;
      Cookies.set(COOKIE_NAME, currentSessionId, {
          expires: 7,
          path: '/',
          // secure: true, // Uncomment if using HTTPS
          // sameSite: 'Lax' // Recommended
      });
      console.log('Generated and stored new chat session ID in cookie:', currentSessionId);
    } else {
      console.log('Using existing chat session ID from cookie:', currentSessionId);
    }

    setSessionId(currentSessionId);
    setIsVisible(true);

  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => handleChatButton(), 300);
  };

  const handleSendMessage = async (e?: React.FormEvent | React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault();
    const trimmedInput = userInput.trim();

    if (!sessionId) {
        console.error("Session ID not available. Cannot send message.");
        setMessages((prev) => [...prev, { text: "Error: Chat session not initialized. Please try refreshing.", sender: "bot" }]);
        return;
    }
    if (trimmedInput === "") return;

    const userMessage = { text: trimmedInput, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setThinking(true);
    setAvatarGif("think");

    try {
      const response = await fetch("https://n8n.srv788705.hstgr.cloud/webhook/12f2c134-7f1d-4441-8b66-c03978336f7e/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          sessionId: sessionId,
          chatInput: trimmedInput
        }),
      });

      if (!response.ok) {
        console.error("API Error:", response.status, response.statusText);
        const errorText = await response.text();
        console.error("Error details:", errorText);
        const errorMsg = response.status === 500
            ? `Oops! Something went wrong on the server (Error ${response.status}). Please try again later.`
            : `Oops! There was an issue connecting (Error ${response.status}). Please try again.`;
        // Use ReactMarkdown for error messages from bot too, in case they ever contain formatting
        setMessages((prev) => [...prev, { text: errorMsg, sender: "bot" }]);
        setThinking(false);
        setAvatarGif("shy");
        return;
      }

      const data = await response.json();
      console.log("Received data from n8n:", data);

       if (data.userId && data.userId !== sessionId) {
           console.warn(`Warning: n8n response userId (${data.userId}) doesn't match current sessionId (${sessionId}).`);
       }

      // <<< --- UPDATED: Use data.output (as determined previously) --- >>>
      const botReply = data?.output || "Hmm, I seem to be speechless right now! 😅 Could you try asking differently?";
      const botMessage = { text: botReply, sender: "bot" };

      setThinking(false);
      setAvatarGif("shy");
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Error sending message:", error);
      // Use ReactMarkdown for error messages from bot too
      setMessages((prev) => [...prev, { text: "Uh oh! I couldn't connect. Please check your connection and try again. 🔌", sender: "bot" }]);
      setThinking(false);
      setAvatarGif("shy");
    }
  };

  // Scroll effect
  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  // Thinking animation effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (thinking) {
      let index = 0;
      let forward = true;
      const baseWord = "Thinking";
      intervalId = setInterval(() => {
        const animatedText = baseWord.split("").map((char, i) => (i === index ? char.toUpperCase() : char.toLowerCase())).join("");
        setTypingText(animatedText + "...");
        if (forward) { if (index >= baseWord.length -1) { forward = false; } else { index++; } } else { if (index <= 0) { forward = true; } else { index--; } }
      }, 150);
    } else { setTypingText("Thinking"); }
    return () => { if (intervalId) clearInterval(intervalId); };
  }, [thinking]);

  // Enter key handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { handleSendMessage(e); }
  };

  // Loading state
  if (!sessionId) {
     return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-[350px] h-[500px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl border-2 border-[#d94231]">
            <p className="text-gray-500 dark:text-gray-400">Initializing chat...</p>
        </motion.div>
     );
  }

  // Main component JSX
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-[350px] h-[500px] bg-white dark:bg-gray-900 rounded-lg shadow-xl flex flex-col overflow-hidden border-2 border-[#d94231]"
    >
        {/* Avatar */}
         <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/3 z-10 pointer-events-none">
            <img src={avatarMap[avatarGif as keyof typeof avatarMap] || avatarMap['shy']} alt="Yakira Avatar" className="w-32 h-32 md:w-40 md:h-40 transition-all duration-300" />
        </div>

        {/* Message Area */}
        <div className="flex-grow p-4 pt-16 overflow-y-auto hide-scrollbar space-y-3">
            {messages.length === 0 && !thinking && (
          <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 text-sm text-center px-4 prose prose-sm dark:prose-invert prose-strong:text-[#d94231]">
          {/* ReactMarkdown component does NOT take className directly */}
          <ReactMarkdown>
            Hey there! ✨ I'm **Yakira**! Ready to chat all things **Yaksen**? Ask me anything!
          </ReactMarkdown>
          </div>
            )}
            {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                {/* <<< --- UPDATED: Apply prose for styling and use ReactMarkdown for bot --- >>> */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-2 px-4 max-w-[80%] text-sm shadow-md ${
                    message.sender === "user"
                      ? "bg-[#d94231] text-white rounded-xl rounded-br-none" // User message style
                      : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-xl rounded-bl-none prose prose-sm dark:prose-invert" // Bot message style + prose for markdown
                  }`}
                >
                  {message.sender === 'bot' ? (
                    // Render bot messages using ReactMarkdown
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  ) : (
                     // Render user messages as plain text
                    message.text
                  )}
                </motion.div>
            </div>
            ))}
            {thinking && (
            <div className="flex justify-start">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="p-2 px-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-xl rounded-bl-none text-sm shadow-md">
                {typingText}
                </motion.div>
            </div>
            )}
            <div ref={scrollEndRef} className="h-1" />
        </div>

        {/* Input Area */}
        <div className="p-3 flex items-center border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shrink-0">
            <button title="Close Chat" className="mr-2 p-2 text-gray-500 dark:text-gray-400 hover:text-[#d94231] dark:hover:text-[#e85a4a] rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" onClick={handleClose}> <IoPower size={20} /> </button>
            <form onSubmit={handleSendMessage} className="flex-grow flex items-center mr-2">
            <input type="text" className="flex-1 p-2 px-3 border border-gray-300 dark:border-gray-600 rounded-l-lg text-sm bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#d94231] focus:border-[#d94231]" placeholder="Ask Yakira about Yaksen..." value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleKeyDown} disabled={thinking} />
            <button type="submit" title="Send Message" className="px-4 py-2 bg-[#d94231] text-white rounded-r-lg hover:bg-[#c53b2d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={userInput.trim() === "" || thinking}> <IoSend size={18} /> </button>
            </form>
        </div>
    </motion.div>
  );
};

export default BotComponent;
