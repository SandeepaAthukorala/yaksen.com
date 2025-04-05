import React, { useState, useEffect, useRef } from "react";
const emote_hi = "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822916/hi_j74hqj.gif";
import ChatWindow from "./chatwindow";
import LoginWindow from "./login";
import { useTheme } from "../contexts/ThemeContext";

// Helper function to get a cookie value by name
const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};

const Bot: React.FC = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [avatarGif, setAvatarGif] = useState("shy"); // default avatar gif

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleChatButton = () => {
    const storedName = getCookie("userName");
    const storedEmail = getCookie("userEmail");
    if (storedName && storedEmail) {
      setUserName(storedName);
      setUserEmail(storedEmail);
      setIsLoggedIn(true);
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen && isLoggedIn && !showLogin) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isLoggedIn, showLogin]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" as const };
    setMessages([...messages, userMessage]);
    setInput("");

    const avatarOptions = [
      "laugh", "broken", "fit", "loop", "hi", "think", "error", "love", "horay", "flirty", "savage",
    ];
    const randomGif = avatarOptions[Math.floor(Math.random() * avatarOptions.length)];
    setAvatarGif(randomGif);

    setTimeout(() => {
      setAvatarGif("shy");
    }, 2000);

    setIsTyping(true);

    setTimeout(() => {
      const dummyResponses = [
        "Sure, tell me more!", "I'm here to help!", "What would you like to know?", "That sounds interesting!", "Can you elaborate on that?",
      ];
      const randomResponse = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
      setMessages((prev) => [...prev, { text: randomResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 3000);
  };

  const handleLogin = (name: string, email: string) => {
    document.cookie = `userName=${name}; path=/`;
    document.cookie = `userEmail=${email}; path=/`;
    setUserName(name);
    setUserEmail(email);
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6 w-full max-w-md">
      {isOpen ? (
        isLoggedIn && !showLogin ? (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          input={input}
          onInputChange={(e) => setInput(e.target.value)}
          onSend={handleSend}
          onClose={() => setIsOpen(false)}
          inputRef={inputRef}
          messagesEndRef={messagesEndRef}
          userName={userName}
          isDark={isDark}
          avatarGif={avatarGif}
          typingStates={["Thinking.", "Thinking..", "Thinking..."]} // Add this
          typingIndex={0} // Add this (or replace with a state variable if needed)
        />
        ) : (
          <LoginWindow
            onLogin={handleLogin}
            onClose={() => setIsOpen(false)}
            isDark={isDark}
          />
        )
      ) : (
        <button
          className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6"
          onClick={handleChatButton}
        >
          <img
            src={emote_hi}
            alt="Chat"
            className="w-20 h-20 md:w-32 md:h-32"
          />
        </button>
      )}
    </div>
  );
};

export default Bot;
